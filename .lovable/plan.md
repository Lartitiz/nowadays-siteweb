## Audit de la page d'origine

Sur `nowadaysagency.com/creatrices-ethiques`, chaque carte a un lien "Voir le projet". J'ai classé les 33 projets en 3 catégories :

### A. Études de cas internes — déjà présentes (6)
Pages `/etudes/...` existantes dans le projet, on les laisse telles quelles :
- Black Stallion Trading, Fat Moose, Ressources, Jean Belgueule, Religion Clothing, Still Nordic

### B. Études de cas internes — à créer (3)
Sur le site d'origine ces liens pointent vers `nowadaysagency.com/{slug}` (donc une vraie étude de cas) mais on n'a pas encore la page :
- **My Pilates World** → `/etudes/my-pilates-world`
- **Flanelle, l'Atelier de Styliste** → `/etudes/flanelle`
- **Ombeline Mares** → `/etudes/ombeline-mares`

### C. Liens externes vers sites/Instagram des clientes (22)
Le lien doit ouvrir le site/IG de la cliente dans un nouvel onglet :

| Marque | URL |
|---|---|
| Cawa | https://cawa.me/ |
| Samantha Porpiglia | https://samanthaporpiglia.com/ |
| Napperon | https://napperon.fr/ |
| We Slow | https://www.instagram.com/weslow.fr/ |
| Essential Oil Supplies | https://eu.eosupplies.com/ |
| Belle. | https://www.instagram.com/belle._paris/ |
| Rose Donald | https://www.instagram.com/rosedonaldparis/ |
| Boom Boom Dance | https://www.boomboum.fr/ |
| Atelier Tiket | https://www.atelier-tiket.fr/ |
| Inti Personal Shopper | https://www.instagram.com/intipersonalshopper/ |
| L'école des femmes de Massoba | https://www.lecoledesfemmesdemassoba.com/ |
| Sophie Brillouet | https://www.instagram.com/sophie_brillouet/ |
| Oli Emoi | https://www.oliemoi.com/ |
| Comme un ruban d'étoile | https://www.instagram.com/commeunrubandetoiles/ |
| Jonesie | https://studio.jonesie.fr/ |
| Hopla Studio | https://hoplastudio.com/ |
| Terra y mar | https://terraemar.shop/ |
| File ton cuir | https://filetoncuir.com/ |
| Yza Handmade | https://yza-shop.com/ |
| Awqa | https://www.awqa.fr/ |
| Péline Coach SOPK | https://www.pelinecoachsopk.com/ |
| Le Jardin Parfumé Marseille | https://www.lejardinparfume.fr/ |

### D. Sans lien (3)
Sur le site d'origine, les liens "Voir le projet" pointent vers la page elle-même (donc pas de destination réelle) :
- Mazeh Paris, La Slow Fashionitude, Ti Matelot
→ On les laisse sans CTA (comportement actuel quand pas de `slug`).

---

## Plan d'implémentation

### 1. `src/routes/etudes-de-cas.tsx`
- Ajouter un champ optionnel `externalUrl?: string` au type `Project`.
- Renseigner `externalUrl` pour les 22 projets de la catégorie C.
- Ajouter `slug` pour les 3 projets de la catégorie B (`my-pilates-world`, `flanelle`, `ombeline-mares`).
- Adapter `EtudesGrid` :
  - Si `slug` → `<Link to="/etudes/{slug}">` (comportement actuel).
  - Sinon si `externalUrl` → `<a href={externalUrl} target="_blank" rel="noopener noreferrer">` avec libellé "Voir le projet ↗".
  - Sinon → `<article>` sans CTA.
- Le hover/style reste identique.

### 2. Créer 3 nouvelles études de cas internes
Pour chacune : `src/routes/etudes.{slug}.tsx` basée sur le pattern existant (`<CaseStudy data=...>` + `head()` + `FinalCtaSection`).

- `etudes.my-pilates-world.tsx`
- `etudes.flanelle.tsx`
- `etudes.ombeline-mares.tsx`

Pour chacune je scraperai la page source correspondante sur nowadaysagency.com (`/my-pilates-world`, `/flanelle`, `/ombeline`) pour récupérer le brief, les visuels et les chiffres, puis je structurerai au format `CaseStudyData` (objectifs, livrables, captures, résultats), comme les études déjà en place. Les visuels seront téléchargés en local sous `src/assets/etudes/{slug}/`.

### 3. SEO et accessibilité
- `target="_blank"` + `rel="noopener noreferrer"` sur les liens externes.
- `aria-label` explicite "Visiter le site de {nom de la marque} (nouvel onglet)".
- Les 3 nouvelles pages ont leur propre `head()` (title/description/og distincts) et `canonical`.

### Détails techniques
- Aucun changement de routing global, juste 3 nouveaux fichiers de route auto-détectés.
- Pas de migration de données ni de changement back-end.
- `routeTree.gen.ts` est régénéré automatiquement.

---

## À confirmer avant build

1. **Création des 3 pages internes** : OK pour les créer maintenant (avec scraping du site d'origine), ou tu préfères juste brancher les externes et garder les 3 sans lien pour l'instant ?
2. **Sites externes** : OK pour la liste ci-dessus, ou tu veux modifier/retirer certaines URLs ?