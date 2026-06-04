## 1. Ajustements typo globaux (`src/styles.css`)

- IBM Plex Mono : passer le poids du body de `300` → `400`.
- Nouvelle couleur texte : ajouter `--ink: #1a050d` (noir chaud teinté bordeaux) et remapper `--foreground: var(--ink)`.
- Les titres (Libre Baskerville 400) restent en `--ink` pour le texte courant ; les italiques restent en `--rose-dark` (#fb3d80).
- Mettre à jour `mem://index.md` : "IBM Plex Mono 400, couleur #1a050d (noir chaud bordeaux). Italiques en rose-dark."

## 2. Refonte complète du Hero (`src/components/site/Hero.tsx`)

Passer d'un hero centré à un **split layout 2 colonnes** inspiré de la référence (le header existant ne change pas).

### Colonne gauche (~55%)

- Petit chip "AGENCE DE COMMUNICATION ENGAGÉE" : pill rose-soft, texte mono uppercase, tracking large.
- Gros titre Libre Baskerville, très grand (text-6xl/7xl/8xl), serré (leading-[1.0]) :  
non ici je veux garder mon titre actuel et mon sous titre  
Les mots "lifestyle et éthiques." en italique rose-dark.
- Paragraphe mono court (max-w ~520px) : repris du contenu actuel reformulé pour matcher le ton de la ref (stratégie, branding, réseaux sociaux, site web, SEO & emailing…).
- CTA pill bordeaux pleine largeur auto avec flèche dans cercle blanc à droite ("DÉCOUVRIR NOS SERVICES →"). Lien Calendly conservé.
- Bandeau stats sous le CTA (intégré au hero, 4 colonnes) : +10 ANS / +1200 PROJETS / 100% ENGAGÉS / 0% BULLSHIT. Cela remplace le `StatBand` séparé (à retirer de `index.tsx`).

### Colonne droite (~45%)

- Photo de Laetitia (à récupérer depuis nowadaysagency.com — silhouette détourée, chemise rayée).
- Blob rose-mid (SVG forme organique) derrière la photo.
- Tampon circulaire "COMMUNICATION ENGAGÉE" avec petit cœur au centre (SVG texte sur cercle, en rose-dark outline).
- Stack vertical de pills services à gauche de la photo : BRANDING / RÉSEAUX SOCIAUX / SITE WEB / SEO / EMAILING (pills outlined rose-soft, mono uppercase).
- Stickers décoratifs SVG :
  - Petite couronne noire dessinée à la main en haut à droite
  - Flèche bouclée rose-dark en haut-centre (du chip vers la photo)
  - Grappe de cœurs rose-mid en bas à droite
  - Pointillés rose-mid en bas à droite

### Stickers

Reprendre le style "dessiné main" : SVG strokés (pas remplis pleins) pour la couronne, la flèche bouclée, les cœurs. Remplace les stickers ronds pleins actuels (Heart/Leaf/Star/Dot).

## 3. Image de Laetitia

Récupérer la photo depuis le site Squarespace existant (fetch + sauvegarde via `lovable-assets create`), import en JSON asset dans le Hero.

## 4. Nettoyage `src/routes/index.tsx`

Retirer `<StatBand />` du flux (intégré au Hero). `TiredSection` et `ManifestoSection` restent inchangés en dessous.

## 5. Responsive

- Desktop ≥ md : split 2 colonnes.
- Mobile : stack vertical — chip, titre, paragraphe, CTA, puis photo + pills empilés, stats en grille 2×2 en bas.

---

### Détails techniques

- Aucune modif des autres sections ni du Header.
- Les couleurs restent en tokens (`var(--ink)`, `var(--rose-dark)`, etc.).
- Pills services : composant inline simple `<span class="rounded-full border border-rose-soft px-4 py-2 font-mono text-xs uppercase tracking-[0.15em]">`.
- Blob et tampon : SVG inline pour rester cohérent avec le reste.
- Photo : `<img>` avec `alt="Laetitia Mattioli, fondatrice de Nowadays"`.