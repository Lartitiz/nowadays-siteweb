
# Suite de la migration

Travail organisé en 4 chantiers parallèles. Tous les changements restent côté frontend (routes + composants), sauf un éventuel re-scraping d'articles si on découvre qu'il en manque ou que le contenu est dégradé.

---

## 1. URLs et liens internes

**Renommer la route Créatrices éthiques**
- `src/routes/etudes-de-cas.tsx` → `src/routes/creatrices-ethiques.tsx`
- Mettre à jour `createFileRoute("/etudes-de-cas")` → `createFileRoute("/creatrices-ethiques")`
- Mettre à jour la balise `<link rel="canonical">` et `og:url`
- Mettre à jour les liens dans :
  - `src/components/site/Header.tsx` (nav "Créatrices éthiques")
  - `src/components/site/Footer.tsx` (lien "Nos études de cas (solopreneures)")
  - Tout autre `Link to="/etudes-de-cas"` retrouvé via `rg` (CTAs homepage, sections, etc.)
- Garder `/etudes-de-cas-pro` tel quel (URL conservée côté site source).

**Audit des liens morts**
- Le footer contient encore `href="#"` sur "Le blog" → remplacer par `<Link to="/blog">`.
- Le footer pointe `/accompagnement-communication` et `/cooperative-asso` pour "études de cas" : à conserver, c'est volontaire.
- Vérifier que la homepage et toutes les sections (`Hero`, `OffersSection`, `ProcessSection`, `FinalCtaSection`, etc.) n'ont aucun `href="#"` orphelin ni `<Link to="/etudes-de-cas">` après renommage.

---

## 2. Pages outils gratuits

Deux pages à créer, sur le modèle de `formation-gratuite-instagram.tsx` (Hero + bénéfices + formulaire de récupération par email + signature). Scraper le contenu depuis le site source pour rester fidèle.

**`src/routes/template-calendrier-editorial.tsx`** → `/template-calendrier-editorial`
- Source : `https://www.nowadaysagency.com/template-calendrier-editorial`
- Visuel : générer un cover + un mockup dans `src/assets/calendrier-editorial/`
- `head()` dédié : titre, description, og:image = cover

**`src/routes/plan-communication.tsx`** → `/plan-communication`
- Source : `https://www.nowadaysagency.com/plan-communication`
- Visuel : cover + mockup dans `src/assets/plan-communication/`
- `head()` dédié

**Footer**
- Remplacer `href="#"` "Outil Calendrier éditorial" par `<Link to="/template-calendrier-editorial">`
- Remplacer `href="#"` "Template Plan de com'" par `<Link to="/plan-communication">`

---

## 3. Blog — audit et complément

État actuel en base : les **13 articles existent déjà** (slugs et contenus, entre 5 700 et 33 400 caractères chacun). Donc pas besoin de tout ré-extraire.

À faire :
- Visiter rapidement chacun des 13 articles en preview (`/blog/<slug>`) pour vérifier qu'ils s'affichent correctement (cover, contenu RichText, dates).
- Pour les éventuels articles dont le contenu est dégradé ou dont la cover manque (`cover_url IS NULL`), re-scraper la page source correspondante sur `nowadaysagency.com/blog/<slug>` et faire un `UPDATE` ciblé via l'outil insert.
- Vérifier que l'ordre du listing `/blog` correspond bien au site source (tri par `published_at DESC` — déjà OK).

Pas de migration de schéma nécessaire ; la table `articles` est déjà bonne.

---

## 4. Vérifications finales

- `rg "etudes-de-cas[^-]"` après renommage → 0 résultat (hors `etudes-de-cas-pro`).
- `rg 'href="#"'` dans `src/` → seul `#manifesto` du footer doit subsister (ancre intra-page valide).
- Toutes les nouvelles routes ont un `head()` complet (title, description, og:title, og:description, canonical).
- Préserver les règles design (typo, palette, H2 = `font-serif text-4xl md:text-6xl leading-[1.05] text-ink`).

---

## Détails techniques

- TanStack Router régénère `routeTree.gen.ts` automatiquement après création/renommage des fichiers `src/routes/*`.
- Les nouvelles pages ressources réutilisent `SiteLayout` + `FinalCtaSection`.
- Le scraping côté chantier 2 et 3 (si besoin) se fait via `code--fetch_website`, le contenu est ensuite collé directement dans les composants (chantier 2) ou poussé via `supabase--insert` (chantier 3).
