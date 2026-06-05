# Section témoignages clients homepage

Reprise pixel-perfect des 3 témoignages du site d'origine, placés entre `PourquoiNowadaysSection` et `PressSection` (même ordre que sur nowadaysagency.com).

## Contenu repris à l'identique

**Titre** : « Elles nous font confiance pour leur *communication engagée* » (italique rose-dark sur "communication engagée")
**Sous-titre** : *Plus de 150 projets accompagnés.*

**3 témoignages** (photos déjà téléchargées dans `src/assets/testimonials/`) :

1. **Abigail Sia** — Styliste & [Art Director](https://theanimalshadow.com/project/work-w-abigail/)
   > Une vraie expertise et un savoir-faire qui fait la différence pour développer son réseau de clients. Les actions mises en place se sont rapidement traduites par une prise de confiance en moi, et donc de mes tarifs. Le suivi est au top et les conseils pertinents. Ne pas hésiter pour booster son activité.

2. **Emmanuelle Riboud** — Cheffe écoresponsable et Fondatrice de [Ressources](https://www.ressources.green/)
   > Laetitia et son équipe ont une grande capacité d'écoute qui leur permet de concevoir des stratégies de marque et de communication pertinentes et très efficientes.

3. **Laurent** — Fondateur d'[Okahina Wave](https://www.okahinawave.com/), vague de surf artificielle écologique
   > Lorsque j'ai contacté Nowadays Agency pour gérer mes réseaux sociaux, j'étais au pied du mur. J'ai découvert leurs qualités de rigueur, de suivi, de propositions créatives et pertinentes. Mais surtout un excellent état d'esprit, très positif. À la question : « Est-ce que je les recommanderais à d'autres chefs d'entreprise ? ». Je répondrais : « SANS AUCUN DOUTE ».

## Fichiers

- **Créer** `src/components/site/TestimonialsSection.tsx`
  - Section `bg-cream`, padding `py-20 md:py-32`
  - H2 conforme à la règle Core : `font-serif text-4xl md:text-6xl leading-[1.05] text-ink` avec "communication engagée" en italique rose-dark
  - Sous-titre IBM Plex Mono italique
  - Grille 3 colonnes (1 col mobile), photo carrée + nom/rôle + citation italique
  - Liens externes (Art Director, Ressources, Okahina Wave) avec `underline decoration-rose-dark` et `target="_blank" rel="noopener noreferrer"`

- **Éditer** `src/routes/index.tsx`
  - Importer `TestimonialsSection`
  - L'insérer entre `<PourquoiNowadaysSection />` et `<PressSection />`

## Conformité design system

- Typo : Libre Baskerville pour H2 (en `--ink`), IBM Plex Mono 400 pour le corps et citations (en `--ink`)
- Italiques `<em>` colorées en `--rose-dark`
- Palette : fond `--cream`, placeholder image `--rose-soft`
- Aucun cercle décoratif, aucun CrownSticker, aucun EngageStamp
- H2 à la taille canonique `text-4xl md:text-6xl`

## Assets

3 photos déjà téléchargées depuis le CDN Squarespace dans `src/assets/testimonials/` (abigail-sia.png, emmanuelle-riboud.png, laurent-okahina.png).
