# Phase 2 — 9 études de cas individuelles pixel-perfect

Construction des pages dédiées pour les 9 projets phares avec contenu + images scrapés depuis nowadaysagency.com.

## Projets et URLs sources
1. Black Stallion Trading → `/case-study/black-stallion-trading`
2. Fat Moose → `/case-study/fat-moose`
3. Ressources (Emmanuelle Riboud) → `/case-study/ressources-by-emmanuelle-riboud`
4. Jean Belgueule → `/case-study/jean-belgueule`
5. My Pilates World → `/case-study/my-pilates-world`
6. Still Nordic → `/case-study/still-nordic`
7. Religion Clothing → `/case-study/religion-clothing`
8. Flanelle, l'Atelier de Styliste → `/case-study/flanelle`
9. Ombeline Mares → `/case-study/ombeline-mares`

## Étapes (par projet, en boucle)

1. **Scrape** : `fetch_website` sur chaque URL source pour récupérer titres, paragraphes, ordre des blocs et URLs d'images.
2. **Download** : `curl` toutes les images du projet vers `/tmp/etudes/{slug}/`.
3. **Upload** : `lovable-assets create` → `src/assets/etudes/{slug}/*.asset.json`.
4. **Route** : créer `src/routes/etudes.{slug}.tsx` (URL `/etudes/{slug}`) avec :
   - `head()` SEO complet (title, description, og:title, og:description, og:image = cover, canonical).
   - Composants : `SiteLayout`, `Hero` (titre H1 Libre Baskerville, sous-titre IBM Plex Mono, cover image), sections texte + galeries d'images selon la structure source, lien retour `/etudes-de-cas`, `FinalCtaSection`.
   - Respect strict charte : H2 sections = `font-serif text-4xl md:text-6xl leading-[1.05] text-ink`, corps IBM Plex Mono `text-ink`, palette imposée.
5. **Lier la grille** : dans `src/routes/etudes-de-cas.tsx`, ajouter `slug` aux 9 projets concernés et wrapper la carte dans un `<Link to="/etudes/$slug">`.

## Fichiers
- Créés : 9 × `src/routes/etudes.{slug}.tsx`, ~30-60 `src/assets/etudes/{slug}/*.asset.json`.
- Édités : `src/routes/etudes-de-cas.tsx` (ajout slug + Link sur 9 cartes).

## Stratégie d'exécution
- Pour rester sous les limites de tool calls, je traite les 9 projets en **3 lots de 3** : scrape + download + upload + route en parallèle dans chaque lot.
- Si une URL source 404 ou un projet n'existe pas sur l'ancien site, je le signale et propose un template léger fallback.

## Notes
- Pixel-perfect = fidélité du contenu et de l'ordre des blocs, **pas** clone CSS de Squarespace (on garde la charte Nowadays actuelle : Libre Baskerville + IBM Plex Mono + palette rose/ink).
- Toutes les images sont rapatriées sur le CDN Lovable (pas de hotlink Squarespace).