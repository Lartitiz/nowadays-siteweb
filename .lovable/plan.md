## Supprimer `rose-soft` (#ffd6e8) du site

Le rose pâle de la bulle « vous rendre visible » est utilisé dans ~15 fichiers (bordures, fonds de sections, placeholders d'images, textes sur fond ink, hovers…). On le bannit partout avec un remplacement contextuel cohérent.

### Cas spécifique demandé

**VisibilityBanner** (`src/components/site/VisibilityBanner.tsx`)
La bulle « vous rendre visible » passe de `bg: rose-soft / text: ink` → **`bg: bordeaux` + `text: cream`** (blanc cassé de la charte).

### Règle de remplacement par contexte

| Usage actuel | Remplacement |
|---|---|
| `bg-rose-soft` (fond de section, placeholder image, wave CTA) | `bg-rose-light` (#feedf0, déjà dans la charte, très doux) |
| `border-rose-soft`, `divide-rose-soft` (bordures fines, séparateurs) | `border-rose-light` / `divide-rose-light` |
| `text-rose-soft` (sur fond `bg-ink` dans les pages guide/formation/plan/template) | `text-cream/80` (texte clair sur fond sombre, conforme charte) |
| `placeholder:text-rose-soft/60` | `placeholder:text-cream/50` |
| `bg-[var(--rose-soft)]` hover (ExpertiseSection) | `bg-[var(--rose-light)]` hover |
| `border-[var(--rose-soft)]` (DifferencesSection, OffersSection, ProcessSection rail) | `border-[var(--rose-light)]` |
| Wave SVG `fill="var(--rose-soft)"` (CtaWaveSection) | `fill="var(--rose-light)"` |
| `frameColor="var(--rose-soft)"` (TiredSection polaroïds) | `frameColor="var(--rose-light)"` |

### Token CSS

Dans `src/styles.css` :
- Retirer `--rose-soft: oklch(...)` de `:root`.
- Retirer `--color-rose-soft: var(--rose-soft)` du `@theme`.
- Remplacer `--border: var(--rose-soft)` et `--input: var(--rose-soft)` par `var(--rose-light)`.

### Fichiers impactés

`src/styles.css`, `src/components/site/VisibilityBanner.tsx`, `Footer.tsx`, `ExpertiseSection.tsx`, `DifferencesSection.tsx`, `ProcessSection.tsx`, `CtaWaveSection.tsx`, `OffersSection.tsx`, `CaseStudy.tsx`, `TiredSection.tsx`, et les routes `accompagnement-communication.tsx`, `cooperative-asso.tsx`, `creatrices-ethiques.tsx`, `etudes-de-cas-pro.tsx`, `contact.tsx`, `guide-storytelling.tsx`, `formation-gratuite-instagram.tsx`, `plan-communication.tsx`, `template-calendrier-editorial.tsx`.

### Mémoire projet

Ajouter à `mem://index.md` Core : « Ne jamais utiliser `rose-soft` (#ffd6e8). Banni de la charte. »

### Hors scope

- Aucun changement de typo, layout, copy.
- `rose-mid`, `rose-dark`, `rose-light`, `bordeaux`, `cream`, `ink`, `orange` conservés.
