## Diagnostic

Les 13 articles **sont bien scrapés** et présents en base (entre 46 et 215 blocs de contenu chacun, tous avec cover). Le script `scripts/scrape-blog.mjs` a fait son travail.

**Le vrai bug** : quand on clique sur un article, l'URL change bien vers `/blog/agence-communication-engagee` mais la page affichée reste la **liste du blog**. L'article ne se rend jamais. C'est ça qui te fait croire qu'ils ne sont pas scrapés.

**Cause** : en routing TanStack Start à plat, dès qu'il existe un fichier `blog.$slug.tsx`, le fichier `blog.tsx` devient un **layout parent**. Il doit alors rendre un `<Outlet />` pour que l'enfant `/blog/$slug` s'affiche. Or `src/routes/blog.tsx` rend directement la page liste (`BlogPage`) sans `<Outlet />`. Résultat : pour `/blog/$slug`, le routeur matche bien le child mais c'est le parent (la liste) qui s'affiche par-dessus.

## Plan d'action

### Étape 1 — Fix routing (priorité, 1 fichier)

Convention TanStack : transformer `blog.tsx` en route index.

1. Renommer `src/routes/blog.tsx` → `src/routes/blog.index.tsx` (aucun changement de code, juste le nom). Le routeur regénère `routeTree.gen.ts` automatiquement.
2. Vérifier dans la preview : `/blog` affiche la liste, `/blog/agence-communication-engagee` affiche l'article complet.

Après cette étape, **les 13 articles sont accessibles** avec leurs ~50 à 215 blocs (titres, paragraphes, citations, images).

### Étape 2 — Audit pixel-perfect du rendu article (vérification)

Comparer côte à côte 2 articles preview ↔ Squarespace original pour identifier les écarts visuels. Je propose 2 articles :

- `agence-communication-engagee` (long, 215 blocs, beaucoup d'images)
- `communication-ethique` (court, 52 blocs)

Pour chaque écart trouvé, je note le type :

| Type d'écart | Exemple | Où corriger |
|---|---|---|
| Bloc manquant dans le scrape | Embed YouTube, formulaire, CTA Squarespace | `scripts/scrape-blog.mjs` : ajouter le sélecteur `.sqs-block-X` |
| Mise en page différente | Spacing titres/paragraphes, alignement images | `renderBlock` dans `src/routes/blog.$slug.tsx` |
| Style typographique | Taille H2, italiques, couleur citations | `renderBlock` |
| Image dégradée / qualité | URL Squarespace avec `?format=…` retirée | `cleanImgUrl` dans le script |

### Étape 3 — Re-scrape ciblé si besoin

Si l'étape 2 révèle des blocs manquants (typiquement : listes à puces stylées, encadrés colorés, blocs HTML custom Squarespace, embeds), j'ajuste `scripts/scrape-blog.mjs` et je relance :

```bash
node scripts/scrape-blog.mjs   # régénère scripts/articles.json
```

Puis je pousse le contenu en base via une migration (UPDATE de la colonne `content` jsonb pour chaque slug). Les covers/titres/SEO ne sont pas réécrits sauf si tu le demandes.

### Hors scope (sauf demande explicite)
- Refonte du design des articles (typo, couleurs, layout) — la charte actuelle est respectée.
- Ajout d'articles nouveaux (uniquement les 13 listés dans le script).
- Réécriture du contenu.

## Question

Tu veux que je fasse les 3 étapes d'un coup, ou seulement l'étape 1 (fix routing) d'abord pour vérifier que les articles s'affichent bien, puis on décide pour l'audit pixel-perfect ?
