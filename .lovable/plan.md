# Migration du blog Nowadays

Objectif : reproduire `/blog` (13 articles) et toutes les pages détail sur le nouveau site, en utilisant la charte Nowadays (Libre Baskerville + IBM Plex Mono + palette ink/bordeaux/rose) et un back-office Lovable Cloud pour éditer/ajouter sans redéploiement.

## Phase A — Lovable Cloud (backend)

1. Activer Lovable Cloud (création projet Supabase managée).
2. Migration SQL : table `articles`
   - `id uuid pk`, `slug text unique`, `title text`, `excerpt text`, `cover_url text`, `cover_alt text`, `author text default 'Laetitia Mattioli'`, `published_at date`, `content jsonb` (blocks scrapés : h2/h3/p/quote/img/list, même format que `CaseStudy.tsx`), `seo_title text`, `seo_description text`, `created_at`, `updated_at`.
   - GRANT `SELECT` to `anon, authenticated`, `ALL` to `service_role`.
   - RLS ON, policy `SELECT` ouverte (contenu public).
3. Seed des 13 articles via INSERTs (slugs, titres, dates, excerpts pris de la liste scrapée ; `content` rempli après scrape pixel perfect ; images uploadées sur le CDN Lovable et URLs stockées dans `cover_url` / blocks `img`).

## Phase B — Scraping des 13 articles

En 3 lots de 4-5 articles (limite d'appels parallèles) :
- Fetch `nowadaysagency.com/blog/{slug}` pour chaque article.
- Parser titre H1, sous-titre, paragraphes, sous-titres H2/H3, citations, listes, images inline.
- Télécharger toutes les images (cover + inline) → upload Lovable CDN → URLs stables.
- Construire le `content` jsonb (tableau de blocks).
- Insérer en base via outil insert.

## Phase C — Routes TanStack

Toutes les lectures passent par `createServerFn` (admin client lu dans le handler — RLS publique mais on évite l'import client.server côté client).

1. `src/lib/articles.functions.ts`
   - `listArticles()` : tous les articles triés par `published_at DESC` (champs : slug/title/excerpt/cover/published_at).
   - `getArticleBySlug(slug)` : article complet avec `content`.

2. `src/routes/blog.tsx` (`/blog`)
   - `loader` via `queryOptions` + `ensureQueryData`.
   - Header section : H1 Libre Baskerville `text-6xl md:text-8xl` "Le blog", sous-titre IBM Plex Mono ("Des conseils pratiques pour te faire connaître tout en respectant ton éthique" — repris de la source).
   - Grille 2 colonnes desktop / 1 colonne mobile, gap généreux.
   - Card article : image cover (ratio 4/3, `object-cover`), date IBM Plex Mono + auteur, titre Libre Baskerville `text-3xl md:text-4xl`, excerpt IBM Plex Mono, lien "Lire la suite →" rose-dark. Toute la card cliquable vers `/blog/$slug`.
   - SEO `head()` complet.
   - Bandeau CTA final (FinalCtaSection existant) en bas.

3. `src/routes/blog.$slug.tsx` (`/blog/{slug}`)
   - `loader` charge l'article via le serverFn ; `notFoundComponent` + `errorComponent` obligatoires.
   - Hero : cover full-width (ratio 16/9, ink overlay subtil), date + auteur, H1 Libre Baskerville `text-5xl md:text-7xl text-ink`, excerpt en italique rose-dark.
   - Corps : conteneur `max-w-3xl mx-auto`, rendu des blocks (réutilise/adapte le pattern de `CaseStudy.tsx`) :
     - p : IBM Plex Mono `text-base md:text-lg leading-relaxed text-ink`
     - h2 : `font-serif text-4xl md:text-6xl leading-[1.05] text-ink mt-16 mb-6` (règle Core)
     - h3 : `font-serif text-2xl md:text-3xl text-ink mt-10 mb-4`
     - quote : bloc bordure rose-dark à gauche, IBM Plex Mono italique
     - img : full-width avec légende
     - list : puces rose-dark
   - Footer article : "Articles récents" (3 autres articles aléatoires) puis `FinalCtaSection`.
   - SEO `head()` dérivé de `seo_title`/`seo_description`/`cover_url` (og:image = cover).

## Phase D — Navigation & SEO

- Header : ajouter le lien "Blog" (`<Link to="/blog">`) à la nav principale.
- `sitemap.xml.ts` : ajouter `/blog` + les 13 entrées dynamiques (loader interroge la table articles).
- `robots.txt` : déjà ouvert, rien à changer.

## Livrables

- 1 migration SQL (table + RLS + grants).
- 13 INSERTs (seed) + ~30 images uploadées sur le CDN.
- 1 fichier server functions, 2 routes (`blog.tsx`, `blog.$slug.tsx`), lien header, sitemap mis à jour.
- Aucun code business hors lecture publique ; pas d'admin UI dans cette phase (édition directe en base ou via console Lovable Cloud).

## Hors périmètre (à confirmer si tu veux les ajouter ensuite)

- Back-office d'édition WYSIWYG des articles.
- Newsletter "recevoir nos conseils secrets" (formulaire existant à brancher).
- Pagination / catégories / recherche.
