# Nouvelle page `/etudes-de-cas` — Créateur·ices éthiques

Création d'une nouvelle route listant les études de cas, en suivant les règles design (Libre Baskerville 400, IBM Plex Mono, H2 = `font-serif text-4xl md:text-6xl leading-[1.05] text-ink`, palette imposée, pas de cercles décoratifs). Structure très simple : hero + grille de projets + CTA final.

## Sections

1. **HeroEtudes** (centré)
   - Sur-titre mono uppercase : `Créateur·ices lifestyle éthiques`
   - H1 : `Ils nous ont fait <em>confiance</em>`
   - Sous-titre mono : `Une sélection de projets créatifs et engagés (mode, design, beauté, bien-être, culture) que nous avons accompagnés avec passion.`

2. **EtudesGrid** — grille 3 colonnes (2 sur tablette, 1 sur mobile) avec 31 cartes projets
   - Chaque carte : placeholder image rose-soft (16/10) + nom serif + description mono paraphrasée (2–3 lignes)
   - Liste : Black Stallion Trading, Fat Moose, Ressources Emmanuelle Riboud, Jean Belgueule, Religion Clothing, Cawa, Samantha Porpiglia, Still Nordic, Napperon, We Slow, Essential Oil Supplies, My Pilates World, Belle., Rose Donald, Boom Boom Dance, Mazeh Paris, Atelier Tiket, La Slow Fashionitude, Inti Personal Shopper, L'école des femmes de Massoba, Sophie Brillouet, Oli Emoi, Comme un ruban d'étoile, Jonesie, Hopla Studio, Terra y mar, File ton cuir, Yza Handmade, Ti Matelot, Awqa, Péline Coach Sportive SOPK, Le Jardin Parfumé Marseille, Flanelle l'Atelier de Styliste, Ombeline Mares
   - Pas de bouton "Voir le projet" (pas de page locale, on évite les liens externes vers nowadaysagency.com)

3. **FinalCtaSection** — réutiliser le composant existant

## Détails techniques

- Nouvelle route `src/routes/etudes-de-cas.tsx` (slug FR, sans accent)
- Mise à jour `head()` : title `Études de cas — Nowadays`, description + og spécifiques, canonical `/etudes-de-cas`
- `Header.tsx` : ajout d'un lien nav `Études de cas` (3ᵉ entrée, à droite de "Coopératives & assos")
- `Footer.tsx` : si une section "Ressources" liste déjà des pages, ajouter le lien (à vérifier)
- Tout inline dans le route file (un seul fichier, comme `cooperative-asso.tsx`), pas de nouveau dossier de composants
- Aucun nouvel asset image cette passe — placeholders rose-soft + emoji
- Couleurs uniquement via tokens du design system

## Fichiers touchés

- Créé : `src/routes/etudes-de-cas.tsx`
- Édité : `src/components/site/Header.tsx` (ajout lien nav)
- Édité : `.lovable/plan.md` (avancement)

## À confirmer

1. Slug `/etudes-de-cas` ok ? (alternative : `/creatrices-ethiques` comme la source)
2. Ajouter le lien dans le header ? (oui par défaut)
