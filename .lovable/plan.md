## Objectif

Remplacer les 2 `QuoteCard` (rose-soft + jaune) de la colonne droite de `TiredSection` par un collage type "photo polaroïd + bulle de dialogue" inspiré du visuel de référence — avec la DA Nowadays (palette + typos existantes, pas de violet ni de noir pur).

## Composition d'une card (réutilisable)

Chaque card devient un bloc relatif ~280–320px de haut composé de 2 éléments qui se chevauchent :

```text
+------------------------+
|  [PHOTO]               |
|  fond coloré arrondi   |
|  photo détourée/cadrée |
|        +---------------+----+
|        |  BULLE BLANCHE     |
|        |  texte mono ink    |
|        |  ~ squiggle dessous|
+--------+--------------------+
```

- **Photo** : conteneur `rounded-[32px]` avec `background-color` (rose-soft pour card 1, yellow pour card 2), padding inégal pour laisser dépasser la photo en haut comme dans la réf. Photo en `object-cover`, coins arrondis hérités, ratio ~4/5.
- **Bulle** : `rounded-[24px]` cream/blanc, padding 5/6, ombre douce bordeaux 6%, posée en `absolute` chevauchant ~30% la photo (bas-droit pour card 1, bas-gauche pour card 2 pour créer l'alternance vue dans la réf).
- **Texte bulle** : `font-mono text-[14px] leading-[1.7] text-ink`, max 3-4 lignes.
- **Squiggle** sous le texte (rose-dark / bordeaux selon la card).

## Layout de la colonne droite

- Card 1 (haut) : photo à **gauche**, bulle qui sort en **bas-droite**.
- Card 2 (bas, décalée) : photo à **droite**, bulle qui sort en **bas-gauche** (effet zigzag comme la réf).
- Garder les stickers existants (`AsteriskSticker`, `CircleRing` orange/rose-mid, blob rose-soft) repositionnés autour pour ne pas chevaucher les bulles.

## Images

Uploader les 2 images fournies via `lovable-assets` :
- `user-uploads://v2-7f9430c7b852f880f6a39363805547bb_720w-1.webp` → card 1 ("postez quand vous pouvez")
- `user-uploads://pexels-yankrukov-8837271.jpg` → card 2 ("équipe")

Pointeurs JSON dans `src/assets/`, importés dans `TiredSection`.

## Détails DA

- Couleurs : uniquement `--rose-soft`, `--yellow`, `--cream`, `--ink`, `--rose-dark`, `--bordeaux`, `--orange` (déjà dans `styles.css`).
- Typo : titre/bulle inchangés (Libre Baskerville + IBM Plex Mono 400, couleur `--ink`).
- Pas d'opacité sur le texte, pas de rose-mid sur fond clair (règles mémoire).
- Ombres légères : `0_10px_30px_rgba(145,1,75,0.08)` sur les bulles.

## Fichiers touchés

- `src/components/site/TiredSection.tsx` — supprimer l'ancien `QuoteCard`, ajouter un nouveau composant `PhotoBubble` (photo + bulle), restructurer la colonne droite.
- `src/assets/tired-phone.webp.asset.json` (nouveau)
- `src/assets/tired-team.jpg.asset.json` (nouveau)

Aucun changement de logique, uniquement présentation.
