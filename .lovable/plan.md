# SEO technique — Nowadays Agency

Tout le contenu éditorial est déjà en place. Il manque les briques techniques pour indexation + partage social.

## 1. `src/routes/__root.tsx` — défauts sitewide

- Passer `<html lang="en">` → `lang="fr"`
- Remplacer les méta génériques `"Lovable App"` / `"Lovable Generated Project"` par :
  - `title` : `"Nowadays — Agence de communication engagée et éthique"`
  - `description` : `"Nowadays accompagne les projets engagés (solopreneur·es, créateur·ices, assos, coopératives, PME à impact) avec une communication joyeuse, éthique et efficace."`
  - `og:site_name` : `"Nowadays Agency"`
  - `og:locale` : `"fr_FR"`
  - `twitter:card` : `"summary_large_image"`
  - retirer `twitter:site @Lovable` et `author Lovable`
- Ajouter JSON-LD **Organization** (nom, url relative, logo, sameAs Instagram/LinkedIn si fournis ultérieurement) dans `scripts`
- **Pas** de canonical ni `og:image` au root (règle TanStack : leaves only)
- Ajouter `<link rel="icon">` (favicon existant si présent, sinon laisser celui par défaut)

## 2. `public/robots.txt` (nouveau)

```
User-agent: *
Allow: /
```
Pas de directive `Sitemap:` (pas d'URL projet fixée — la sitemap reste découverte au chemin standard `/sitemap.xml`).

## 3. `src/routes/sitemap[.]xml.ts` (nouveau, server route)

Server route qui génère `/sitemap.xml` dynamiquement avec :
- Routes statiques : `/`, `/accompagnement-communication`, `/cooperative-asso`, `/creatrices-ethiques`, `/etudes-de-cas-pro`, `/contact`, `/blog`, `/mentions-legales`, `/plan-communication`, `/template-calendrier-editorial`, `/guide-storytelling`, `/formation-gratuite-instagram`
- 14 études de cas `/etudes/*`
- **Articles dynamiques** : SELECT slug, updated_at FROM articles → `/blog/{slug}`
- `BASE_URL = ""` (chemins relatifs, TODO commenté pour quand le domaine sera fixé)
- Cache-Control 1h

## 4. JSON-LD Article sur `src/routes/blog.$slug.tsx`

Ajouter dans le `head()` existant un `scripts` avec schema.org `Article` (headline, datePublished, dateModified, author.Person, image si cover_url). Pas de modif des meta existantes.

## 5. JSON-LD BreadcrumbList sur les pages profondes

Ajouter sur :
- `blog.$slug.tsx` : Accueil › Blog › {titre}
- `blog.tsx` : Accueil › Blog
- `etudes-de-cas-pro.tsx` : Accueil › Études de cas
- 14 fichiers `etudes.*.tsx` : Accueil › Études de cas › {nom client}

## 6. Canonical sur toutes les routes statiques

Vérifier rapidement que chaque route a déjà `links: [{ rel: "canonical", href: "/..." }]`. Compléter celles qui manquent (la plupart en ont déjà).

## Hors scope (à faire plus tard quand le domaine sera connu)

- Remplacer `BASE_URL = ""` par l'URL réelle dans sitemap + canonical absolus
- Ajouter directive `Sitemap:` dans robots.txt
- Vérification Google Search Console + Bing Webmaster
- og:image générique de partage (visuel de marque) si désiré

## Questions

1. **Favicon** : tu en as un déjà ou je laisse celui par défaut pour l'instant ?
2. **Profils sociaux** (pour Organization `sameAs`) : URLs Instagram / LinkedIn / Pinterest de Nowadays ?
