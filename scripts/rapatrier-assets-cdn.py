#!/usr/bin/env python3
"""Rapatrie les images hébergées par le CDN Lovable dans public/, allégées.

Mesure du 03/08, APRÈS l'allègement de public/ : il restait 74,8 Mo d'images
sur l'ensemble du site, dont **61 Mo (82 %) servis par le CDN Lovable** —
donc hors du repo, et hors de portée du premier script. Les pires pages :
/creatrices-ethiques 14 Mo, /etudes/fat-moose 12,9 Mo, /cooperative-asso
8,4 Mo. Des fichiers isolés montent à 2,4 Mo.

Comment ça marche : ces images sont décrites par des fichiers
`src/assets/**/*.asset.json` qui portent un champ `url` pointant vers
`/__l5e/…`. Les composants lisent `monImage.url`. Il suffit donc de
télécharger le fichier, de l'alléger, de l'écrire dans `public/media/` et de
**réécrire ce champ `url`** : tous les composants suivent d'un coup, sans
qu'aucun .tsx ne soit touché.

L'URL d'origine est conservée dans un champ `cdn_url` — rien n'est perdu, et
on peut refaire le chemin inverse.

⚠️ Si une image est ré-uploadée depuis Lovable, Lovable réécrira son
.asset.json et elle repassera par le CDN. Ce n'est pas cassant (l'image
s'affiche), c'est juste un retour au lourd : relancer ce script.

Le chemin de sortie contient l'`asset_id` parce que les noms se répètent
(`cover.png` existe en 3 exemplaires, `l214.png` et `l214.jpg` cohabitent).

Usage :
    python3 scripts/rapatrier-assets-cdn.py --dry-run
    python3 scripts/rapatrier-assets-cdn.py --apply
"""

from __future__ import annotations

import argparse
import io
import json
import sys
import urllib.request
from pathlib import Path

from PIL import Image

ORIGIN = "https://nowadaysagency.com"
OUT_DIR = Path("public/media")

# Largeur maximale par dossier, d'après la taille d'affichage réelle.
# Les logos sont rendus tout petits (bandeaux clients, presse, résultats) :
# les servir en 2000 px n'a aucun sens.
MAX_WIDTH = {
    "src/assets/logos-resultats": 400,
    "src/assets/coop-logos": 400,
    "src/assets/press": 400,
    "src/assets/clients-accompagnement": 400,
    "src/assets/testimonials": 800,
}
DEFAULT_MAX_WIDTH = 1400  # visuels d'études de cas, portraits, couvertures
QUALITY = 80
MIN_GAIN_RATIO = 0.05


def max_width_for(meta_path: Path) -> int:
    parent = str(meta_path.parent)
    for folder, width in MAX_WIDTH.items():
        if parent == folder:
            return width
    return DEFAULT_MAX_WIDTH


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    if not args.apply and not args.dry_run:
        ap.error("choisir --dry-run ou --apply")

    before = after = 0
    done = skipped = failed = 0

    for meta_path in sorted(Path("src/assets").rglob("*.asset.json")):
        meta = json.loads(meta_path.read_text())
        url = meta.get("url", "")
        if not url.startswith("/__l5e/"):
            skipped += 1
            continue

        try:
            req = urllib.request.Request(ORIGIN + url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=90) as resp:
                raw = resp.read()
        except Exception as exc:  # noqa: BLE001
            print(f"  !! téléchargement impossible : {url} ({exc})")
            failed += 1
            continue

        before += len(raw)
        name = meta.get("original_filename") or url.rsplit("/", 1)[-1]
        asset_id = meta.get("asset_id") or "divers"

        try:
            im = Image.open(io.BytesIO(raw))
            im.load()
        except Exception as exc:  # noqa: BLE001
            print(f"  !! illisible : {name} ({exc})")
            after += len(raw)
            failed += 1
            continue

        # Les images animées sont recopiées telles quelles : les ré-encoder
        # dégraderait l'animation.
        animated = getattr(im, "n_frames", 1) > 1
        max_w = max_width_for(meta_path)
        target = im
        if not animated and im.width > max_w:
            target = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)

        if animated:
            data, out_name = raw, name
        else:
            has_alpha = target.mode in ("RGBA", "LA") or "transparency" in target.info
            target = target.convert("RGBA" if has_alpha else "RGB")
            buf = io.BytesIO()
            target.save(buf, "WEBP", quality=QUALITY, method=6)
            data = buf.getvalue()
            out_name = name.rsplit(".", 1)[0] + ".webp"
            # Si le ré-encodage ne rapporte rien, on garde l'original.
            if len(data) >= len(raw) * (1 - MIN_GAIN_RATIO):
                data, out_name = raw, name

        out_path = OUT_DIR / asset_id / out_name
        after += len(data)
        done += 1
        gain = 100 * (len(raw) - len(data)) / len(raw) if raw else 0
        print(f"  {len(raw) / 1024:7.0f}K → {len(data) / 1024:6.0f}K  (−{gain:3.0f} %)  {out_name[:44]}")

        if args.apply:
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_bytes(data)
            meta["cdn_url"] = url
            meta["url"] = "/" + str(out_path.relative_to("public"))
            meta["size"] = len(data)
            meta_path.write_text(json.dumps(meta, indent=2) + "\n")

    print(f"\n{done} images rapatriées, {skipped} déjà locales, {failed} en échec")
    if before:
        print(f"CDN : {before / 1024 / 1024:.1f} Mo → {after / 1024 / 1024:.1f} Mo "
              f"(−{(before - after) / 1024 / 1024:.1f} Mo, −{100 * (before - after) / before:.0f} %)")
    if not args.apply:
        print("\n(simulation — relancer avec --apply pour écrire)")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
