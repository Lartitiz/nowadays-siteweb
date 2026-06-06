## Problème

Les **H2 sont conformes** à la règle mémoire (`font-serif text-4xl md:text-6xl leading-[1.05] text-ink` partout — 14 sections vérifiées, toutes identiques).

En revanche, la **hiérarchie H1 vs H2 est cassée** :
- `Hero.tsx` H1 : `text-5xl md:text-6xl lg:text-7xl` → à md, **même taille** que les H2 (text-6xl)
- `CaseStudy.tsx` H1 (titre de l'étude) : `text-4xl md:text-6xl` → **strictement identique** aux H2

C'est ce qui donne la sensation que « tous les titres se ressemblent ».

## Correction proposée (sans toucher aux H2)

### 1. H1 — palier supérieur cohérent
Nouvelle règle H1 : `font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-ink`

- `src/components/site/Hero.tsx` ligne 62 : passer de `text-5xl … md:text-6xl lg:text-7xl` → `text-5xl md:text-7xl lg:text-8xl`
- `src/components/site/CaseStudy.tsx` ligne 123 : passer de `text-4xl … md:text-6xl` → `text-5xl md:text-7xl lg:text-8xl` + retirer `max-w-3xl` si besoin pour respirer

### 2. H3 — léger ajustement pour mieux les détacher
Règle H3 : `font-serif text-2xl md:text-3xl leading-[1.15] text-ink` (au lieu de `text-3xl md:text-4xl` qui flirte avec le H2 mobile)

- `src/components/site/OffersSection.tsx` ligne 92 (titre d'offre)
- `src/components/site/CaseStudy.tsx` ligne 178 (titre d'étape)

### 3. Mémoire — ajouter les règles H1 et H3 au Core
Compléter `mem://index.md` avec :
- H1 : `font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-ink` — un seul H1 par page
- H3 : `font-serif text-2xl md:text-3xl leading-[1.15] text-ink`

## Hors-scope (volontairement)

- **Aucun changement aux H2** — la règle mémoire reste intacte.
- Pas de modification couleur / poids / famille (Libre Baskerville 400, --ink).
- Les `<span class="font-serif text-Xxl">` décoratifs (numéros, prix, gros chiffres dans StatBand/DifferencesSection/Hero stats) ne sont pas des titres sémantiques → on n'y touche pas.

## Résultat attendu

Hiérarchie visuelle claire sur desktop :
- H1 ≈ 6rem (text-8xl)
- H2 ≈ 3.75rem (text-6xl)
- H3 ≈ 1.875rem (text-3xl)

Sur mobile : 3rem / 2.25rem / 1.5rem — trois paliers nets.
