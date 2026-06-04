## Objectif

Refondre `TiredSection` en split layout 2 colonnes inspiré de la référence — sans copier les photos/illustrations bariolées : on traduit la composition dans la DA Nowadays (cream/bordeaux/rose, IBM Plex 400, Libre Baskerville).

Le `ManifestoSection` actuel garde son contenu mais devient le bandeau qui suit (point 3).

## 1. Refonte `TiredSection.tsx` — split 2 colonnes

### Colonne gauche (~55%)
- Gros titre Libre Baskerville en deux blocs :  
  "Fatiguée du *marketing*" — italique rose-dark sur le mot "marketing"  
  Sous-ligne en script italique : "*agressif et des injonctions ?*" surligné par un **bandeau jaune** (yellow token déjà ajouté), façon stabilo. Implémenté en `<span class="relative">` avec un `::before` jaune absolu derrière le texte.
- Chip pleine "Nous aussi." : pill bordeaux pleine, texte cream, taille moyenne (font-mono semibold).
- Paragraphe mono : "Vous portez un projet qui a du sens. Que vous soyez créateur·ice, freelance ou à la tête d'une structure engagée, vous y mettez tout : de l'attention, de l'éthique, du soin."
- Petit squiggle SVG jaune sous le paragraphe (trait ondulé décoratif).
- Tagline rose-dark en serif italique : "Mais côté communication, c'est une autre histoire…"

### Colonne droite (~45%) — pas de photos réelles
À la place des photos people (qu'on n'a pas), deux **cards-citations empilées en décalage** :
- Card 1 (haut) : fond rose-soft, coins arrondis 24px, contient une **bulle blanche** avec :  
  "Peut-être que vous postez quand vous pouvez, entre deux urgences."  
  Petit squiggle rose-dark sous la bulle.
- Card 2 (bas, légèrement décalée à droite) : fond yellow, contient bulle blanche :  
  "Peut-être que personne dans l'équipe n'a vraiment le temps (ni les compétences) de s'en occuper."  
  Squiggle bordeaux sous la bulle.

Stickers décoratifs SVG autour (style stroke, comme dans le Hero) :
- Petit cœur outline bordeaux en haut à gauche du titre
- Étoile/astérisque rose-dark en haut à droite
- Cercles outline rose-mid entre les deux cards
- Blob organique rose-soft en bordure droite, partiellement coupé

### Layout
- `grid md:grid-cols-12` ; gauche `md:col-span-7`, droite `md:col-span-5`
- Mobile : stack vertical, cards centrées en-dessous du texte
- Fond `bg-background` (cream), `overflow-hidden`

## 2. Bandeau "Chez Nowadays" — nouveau composant intercalaire

Petit bandeau plein-largeur entre `TiredSection` et `ManifestoSection`, inspiré du bloc violet du bas de la référence :
- Fond **rose-light** ou **rose-soft**, coins arrondis 32px, contained dans `max-w-6xl`
- Layout horizontal : à gauche un médaillon circulaire jaune avec petits stickers (étoile, cœur outline) ; à droite le texte
- Texte mixé sérif/italic : "Chez Nowadays, **nous vous accompagnons à** *vous rendre visible* grâce à une communication *joyeuse*, *éthique* et *efficace*."
- Surlignages :
  - "vous rendre visible" : surligné en rose-mid (chip arrondi)
  - "joyeuse / éthique / efficace" : italique rose-dark avec squiggle souligné SVG sous chaque mot
- À droite, sticker "mains qui tiennent un cœur" en outline rose-dark (SVG inline)

Ce bloc reprend le contenu actuel de fin de `TiredSection` ("Chez Nowadays, nous vous accompagnons…") qui est donc retiré de `TiredSection`.

Nom du fichier : `src/components/site/VisibilityBanner.tsx`.

## 3. Inclusion dans la home

Mise à jour de `src/routes/index.tsx` :
```
<Hero />
<TiredSection />        ← nouvelle version split
<VisibilityBanner />    ← nouveau bandeau
<ManifestoSection />    ← inchangé
<OffersSection />
```

## 4. Respect de la DA

- IBM Plex Mono 400, couleur `--ink` partout (jamais d'opacité ni rose-mid sur fond clair).
- Libre Baskerville 400 pour titres ; italiques en rose-dark.
- Le jaune (`--yellow` déjà défini) est utilisé en accent : stabilo derrière l'italique du titre + card 2 de la colonne droite + médaillon du bandeau.
- Bordeaux pour le chip "Nous aussi." et certains accents.
- Pas de photos réelles : on s'inspire de la composition (split + bulles + stickers) mais on traduit en illustration graphique cohérente avec le Hero.

## 5. Détails techniques

- Surlignage stabilo jaune : `<span class="relative inline-block"><span class="absolute inset-x-[-4px] bottom-[10%] top-[40%] -rotate-1 bg-yellow z-0" aria-hidden /><span class="relative">texte</span></span>`
- Squiggles : SVG inline réutilisables (composant `Squiggle({color})`)
- Bulle citation : `rounded-2xl bg-cream p-5 shadow-[0_8px_24px_rgba(145,1,75,0.06)]`
- Aucune modification de `Header`, `Footer`, `Hero`, `OffersSection`, `ManifestoSection`.
