## Objectif

Récupérer les 13 articles complets de `nowadaysagency.com/blog` et les insérer dans la table `articles` déjà en place, pour que les routes `/blog` et `/blog/$slug` les affichent immédiatement, avec rendu pixel-perfect (titres, sous-titres, citations, images inline, gras/italiques, liens).

## Articles à importer (13)

1. agence-communication-engagee — 29/09/2025
2. brand-content — 20/08/2025
3. vocabulaire-marketing-responsable — 09/07/2025
4. exemples-communication-mode — 30/04/2025
5. influence-ethique — 20/02/2025
6. communication-ethique — 20/02/2025
7. packagings-eco-responsable-mode — 21/11/2024
8. influence-recit-ecologie — 11/03/2023
9. creatrice-ethique-communication — 06/02/2022
10. influenceur-virtuel — 18/02/2021
11. communication-influence — 10/10/2020
12. visibilite-presse-partenariat — 10/09/2020
13. communication-durable — 25/03/2019

## Approche

Pour chaque article :
1. **Fetch** la page Squarespace en HTML brut.
2. **Parse** le corps de l'article (`.sqs-block-html`, `.sqs-block-image`) en blocs structurés respectant le schéma déjà utilisé par `/blog/$slug` :
   - `{ type: 'p', text }` — paragraphe (avec markdown inline `**gras**`, `*italique*`, `[texte](url)` conservé pour `RichText`)
   - `{ type: 'h2', text }` / `{ type: 'h3', text }` — sous-titres
   - `{ type: 'quote', text }` — citations
   - `{ type: 'img', src, alt }` — images inline (URL Squarespace CDN, conservée telle quelle)
3. **Extraire** : titre, excerpt (premier paragraphe court ou meta description), `cover_url` (image hero), `cover_alt`, `seo_title`, `seo_description`, `published_at`.
4. **Insérer** chaque article dans `public.articles` via la commande INSERT (upsert sur `slug` pour ré-exécution sûre).

## Choix techniques

- **Cover & images inline** : on garde les URLs Squarespace CDN directes (déjà publiques, stables, optimisées). Pas de re-upload Storage — plus rapide, pas de perte qualité, et la table accepte déjà `cover_url text`.
- **Contrainte unique sur slug** : ajout d'un `UNIQUE` sur `articles.slug` (manque actuellement) pour permettre l'upsert et garantir l'unicité — micro-migration de schéma.
- **Script de scraping** : exécuté en local via `code--exec` (Node + cheerio), produit un gros `INSERT ... ON CONFLICT (slug) DO UPDATE` que j'exécute via l'outil `supabase--insert`.
- **Charte respectée** : aucun ajout de couronne, tampon, stats hero — uniquement de la donnée injectée dans le rendu existant qui suit déjà la charte Nowadays.

## Étapes

1. Migration : ajouter `UNIQUE (slug)` sur `public.articles`.
2. Écrire `scripts/scrape-blog.mjs` (Node, fetch + cheerio) qui télécharge les 13 URLs, parse en blocs, et émet un fichier JSON `scripts/articles.json`.
3. Exécuter le script, vérifier visuellement quelques articles (longueurs, présence d'images, gras conservé).
4. Générer le SQL `INSERT ... ON CONFLICT` à partir du JSON et l'exécuter via `supabase--insert`.
5. Vérifier en visitant `/blog` puis 2-3 fiches articles dans la preview.

## Hors périmètre

- Pas de re-hébergement des images sur Lovable Cloud (URLs Squarespace conservées).
- Pas de gestion d'auteurs multiples (`author` reste 'Laetitia Mattioli' par défaut).
- Pas de commentaires, tags ou catégories — la table actuelle ne les contient pas.
