## Fond rose clair sur la section Offres

**Objectif** : Faire ressortir la section des offres en lui appliquant un fond rose clair, tout en gardant la cohérence visuelle du site.

**Changement** :
- Dans `src/components/site/OffersSection.tsx`, remplacer la classe `bg-background` par `bg-rose-light` sur le `<section>` principal (ligne 132).

**Pourquoi ce choix** :
- La couleur `rose-light` (#feedf0) est définie dans le design system et s'harmonise avec la palette du site.
- Elle est suffisamment claire pour ne pas écraser le contenu, tout en différenciant cette section du reste de la page.
- Les cartes internes conservent leur fond `bg-cream`, ce qui maintient la hiérarchie visuelle.