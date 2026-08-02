# Mettre les titres en gras — plan

## Contexte
L'utilisateur souhaite renforcer les titres (H1, H2, H3) de la page d'accueil et des pages intérieures, initialement exprimé comme « mettre en grain », puis clarifié en « mettre en gras ».

## Contrainte actuelle
Le design system en vigueur impose :
- Titres en serif `font-weight: 400` (jamais bold) — voir `src/styles/design-system.css` lignes 70-99.
- Mémorisé : « Titres : Libre Baskerville 400 (jamais bold), en --ink. »

Passer les titres en gras rompt donc une règle de marque. Il faut proposer des options cohérentes.

## Options proposées

### Option A — Gras léger sur les titres (rupture marque)
- Passer `h1, h2, h3` à `font-weight: 500` ou `600` (selon ce que la webfont supporte).
- Impact : les titres gagnent en présence, mais le style devient plus classique/événementiel, moins éditorial.

### Option B — Renforcer sans gras (respect marque)
- Conserver `font-weight: 400`.
- Ajouter un contraste plus marqué : `color: var(--ink)` sur les titres au lieu de `var(--bordeaux)` ou inverser selon les sections.
- Resserrer légèrement le `letter-spacing` (`-0.04em`) pour plus de densité.
- Éventuellement ajouter une très légère ombre portée texte (`text-shadow`) pour donner du relief sans gras.

### Option C — Gras ciblé uniquement sur les H3 et sous-sections
- Garder H1/H2 en 400 (marque éditoriale).
- Passer seulement les `h3` à 500/600 pour différencier les niveaux.
- Moins de rupture visuelle globale.

## Portée suggérée
- `src/styles/design-system.css` : règles globales `h1, h2, h3`.
- Pages concernées : toutes les sections `Home*` et les pages routes (`accompagnement-communication`, `cooperative-asso`, etc.).
- Aucune base de données ou fonction serveur impactée.

## Recommandation
Avant de modifier, choisir l'option A, B ou C. Si l'objectif est « on ne voit pas assez les titres », l'option B préserve l'identité éditoriale tout en renforçant la hiérarchie.
