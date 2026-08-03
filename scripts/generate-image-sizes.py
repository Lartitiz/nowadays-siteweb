#!/usr/bin/env python3
"""Génère src/lib/image-sizes.json : les dimensions de chaque image du site.

Pourquoi : aucune balise <img> du site n'a de `width`/`height`. Le navigateur
ne sait donc pas quelle place réserver, et la page SAUTE pendant le chargement
— c'est le CLS, que Google mesure et sanctionne.

On ne peut pas écrire ces dimensions à la main : les images des articles sont
décrites dans la table Supabase `articles` (donc inconnues du code), et les
visuels des études viennent du CDN Lovable via des fichiers `.asset.json` qui
ne portent pas les dimensions.

D'où ce manifeste, généré une fois et commité. Deux sources :
  - public/**      : mesuré localement
  - .asset.json    : téléchargé depuis le site en ligne, puis mesuré

Les dimensions déjà présentes sont conservées : relancer le script ne
re-télécharge que ce qui manque.

Usage : python3 scripts/generate-image-sizes.py
"""

from __future__ import annotations

import io
import json
import urllib.request
from pathlib import Path

from PIL import Image

OUT = Path("src/lib/image-sizes.json")
ORIGIN = "https://nowadaysagency.com"

sizes: dict[str, list[int]] = {}
if OUT.exists():
    sizes = json.loads(OUT.read_text())
known = dict(sizes)

# 1. Les fichiers servis depuis public/ (blog, projets, témoignages, home…)
for path in sorted(Path("public").rglob("*")):
    if path.suffix.lower() not in {".webp", ".jpg", ".jpeg", ".png", ".gif", ".svg"}:
        continue
    if path.suffix.lower() == ".svg":
        continue
    try:
        with Image.open(path) as im:
            sizes["/" + str(path.relative_to("public"))] = list(im.size)
    except Exception as exc:  # noqa: BLE001
        print(f"  !! illisible : {path} ({exc})")

# 2. Les visuels hébergés par le CDN Lovable, décrits par les .asset.json
fetched = failed = 0
for meta_path in sorted(Path("src/assets").rglob("*.asset.json")):
    url = json.loads(meta_path.read_text()).get("url")
    if not url or url in known:
        continue
    try:
        req = urllib.request.Request(ORIGIN + url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=45) as resp:
            with Image.open(io.BytesIO(resp.read())) as im:
                sizes[url] = list(im.size)
        fetched += 1
    except Exception as exc:  # noqa: BLE001
        failed += 1
        print(f"  !! {url} ({exc})")

OUT.write_text(json.dumps(dict(sorted(sizes.items())), indent=1) + "\n")
print(f"{len(sizes)} images mesurées → {OUT}")
print(f"  dont {fetched} téléchargées depuis le CDN ({failed} en échec, ignorées)")
