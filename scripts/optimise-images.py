#!/usr/bin/env python3
"""Ré-encode les images de public/ à la taille où elles sont RÉELLEMENT affichées.

Constat de l'audit du 03/08 : des images de 2500 px de large servies dans des
colonnes de 400 px, jusqu'à 1,7 Mo pour une seule couverture d'article. La page
/accompagnement-communication pesait 5,8 Mo, dont 5,5 Mo d'images.

Les noms de fichiers ne changent JAMAIS : les images du blog sont référencées
depuis la table Supabase `articles`, pas depuis le repo. Renommer casserait les
articles sans qu'on le voie dans le code.

Les GIF animés sont laissés tels quels : les ré-encoder dégraderait l'animation
pour un gain incertain.

Usage :
    python3 scripts/optimise-images.py --dry-run
    python3 scripts/optimise-images.py --apply
"""

from __future__ import annotations

import argparse
import io
import sys
from pathlib import Path

from PIL import Image

# Largeur maximale utile, par usage. Toujours ~2× la largeur d'affichage réelle
# pour rester net sur les écrans à haute densité.
#
#   couvertures d'articles : grille 3 colonnes (~380 px) et article mis en avant
#                            sur /blog (~600 px)  → 1200
#   images dans le corps    : conteneur `max-w-[70ch]` (~640 px)  → 1300
#   vignettes de projets    : grilles 2-3 colonnes (~360-560 px)  → 900
RULES = [
    ("public/blog", "-cover", 1200),
    ("public/blog", None, 1300),
    ("public/projets", None, 900),
    ("public/temoignages", None, 900),
    ("public/guide", None, 1200),
    ("public/images", None, 1000),
]

QUALITY = {"WEBP": 80, "JPEG": 82}
# En dessous, le ré-encodage ne rapporte rien et peut même alourdir.
MIN_SIZE_BYTES = 60 * 1024
# On ne remplace que si on gagne vraiment.
MIN_GAIN_RATIO = 0.10

# On ne touche pas à og-image-nowadays.jpg : c'est la vignette de partage
# sociale, certains scrapers digèrent mal le WebP et 82 Ko ne gêne personne.
NEVER_TOUCH = {"og-image-nowadays.jpg"}

# Seule exception au « on garde le format » : cette planche est un PNG de
# 614 Ko alors que c'est une image de type photo. En PNG il n'y a rien à
# gagner. Qualité haute (90) parce qu'elle contient du texte de guide, qui
# devient vite baveux. La référence dans guide-storytelling.tsx est mise à
# jour dans le même commit — c'est la SEULE du repo.
CONVERT_TO_WEBP = {"public/guide/apercu-storytelling.png": 90}


def rule_for(path: Path) -> int | None:
    for folder, marker, max_w in RULES:
        if not str(path).startswith(folder):
            continue
        if marker and marker not in path.stem:
            continue
        return max_w
    return None


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    if not args.apply and not args.dry_run:
        ap.error("choisir --dry-run ou --apply")

    before = after = 0
    skipped_gif = 0
    rows = []

    for path in sorted(Path("public").rglob("*")):
        if path.suffix.lower() not in {".webp", ".jpg", ".jpeg", ".png", ".gif"}:
            continue
        size = path.stat().st_size
        before += size

        if path.name in NEVER_TOUCH:
            after += size
            continue

        try:
            im = Image.open(path)
            im.load()
        except Exception as exc:  # noqa: BLE001
            print(f"  !! illisible : {path} ({exc})")
            after += size
            continue

        if getattr(im, "n_frames", 1) > 1:
            skipped_gif += 1
            after += size
            continue

        max_w = rule_for(path)
        if max_w is None or size < MIN_SIZE_BYTES:
            after += size
            continue

        w, h = im.size
        target = im
        if w > max_w:
            target = im.resize((max_w, round(h * max_w / w)), Image.LANCZOS)

        # On garde le nom ET le format d'origine, sauf conversion explicite.
        # Renommer casserait les images du blog, référencées depuis Supabase.
        forced_q = CONVERT_TO_WEBP.get(str(path))
        if forced_q is not None:
            out, fmt = path.with_suffix(".webp"), "WEBP"
        else:
            out = path
            fmt = {"WEBP": "WEBP", "JPEG": "JPEG", "PNG": "PNG"}.get(im.format or "", "")
            if not fmt:
                after += size
                continue

        has_alpha = target.mode in ("RGBA", "LA") or "transparency" in target.info
        buf = io.BytesIO()
        if fmt == "PNG":
            target = target.convert("RGBA" if has_alpha else "RGB")
            target.save(buf, "PNG", optimize=True)
        elif fmt == "JPEG":
            target = target.convert("RGB")
            target.save(buf, "JPEG", quality=QUALITY["JPEG"], optimize=True, progressive=True)
        else:
            target = target.convert("RGBA" if has_alpha else "RGB")
            target.save(buf, "WEBP", quality=forced_q or QUALITY["WEBP"], method=6)
        new_size = buf.tell()

        if new_size >= size * (1 - MIN_GAIN_RATIO):
            after += size
            continue

        rows.append((path, out, size, new_size, (w, h), target.size))
        after += new_size

        if args.apply:
            out.write_bytes(buf.getvalue())
            if out != path:
                path.unlink()

    rows.sort(key=lambda r: r[3] - r[2])
    print(f"{'avant':>8} {'après':>8}  {'dimensions':>22}  fichier")
    for path, out, s, n, dim0, dim1 in rows:
        d = f"{dim0[0]}×{dim0[1]} → {dim1[0]}×{dim1[1]}" if dim0 != dim1 else f"{dim0[0]}×{dim0[1]}"
        name = str(path) if out == path else f"{path} → {out.name}"
        print(f"{s / 1024:7.0f}K {n / 1024:7.0f}K  {d:>22}  {name}")

    print(f"\n{len(rows)} images ré-encodées, {skipped_gif} GIF animés laissés tels quels")
    print(f"public/ : {before / 1024 / 1024:.1f} Mo → {after / 1024 / 1024:.1f} Mo "
          f"(−{(before - after) / 1024 / 1024:.1f} Mo, −{100 * (before - after) / before:.0f} %)")
    if not args.apply:
        print("\n(simulation — relancer avec --apply pour écrire)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
