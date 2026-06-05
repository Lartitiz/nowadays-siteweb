# Phase 1 — 34 photos covers + grille /etudes-de-cas

## Étapes
1. Récupérer les URLs covers depuis la page source déjà fetchée.
2. `curl` chaque image vers `/tmp/etudes/{slug}.{ext}`.
3. Uploader via `lovable-assets create --file ... > src/assets/etudes/{slug}.{ext}.asset.json`.
4. Mettre à jour `src/routes/etudes-de-cas.tsx` : import des 34 asset pointers, balise `<img loading="lazy">` dans chaque carte, alt repris de la source. Placeholder rose-soft comme background fallback.

## Fichiers
- Créés : `src/assets/etudes/*.asset.json` (×34)
- Édité : `src/routes/etudes-de-cas.tsx`

## Notes
- Si une image ne se télécharge pas (403 / cassée), placeholder rose-soft conservé et je liste les cartes touchées.
- Pas de redim, pas d'IA, fidélité maximale aux covers d'origine.