## Vérification

Oui, la page `https://www.nowadaysagency.com/etude-de-cas-ethique` a bien été scrapée : elle existe dans le projet sous la route `/etudes-de-cas-pro` (`src/routes/etudes-de-cas-pro.tsx`), avec son SEO, son schema BreadcrumbList et la grille de projets.

Actuellement, dans le `Header.tsx`, l'entrée du menu **Études de cas → "Coopératives, assos & PME"** pointe par erreur vers `/cooperative-asso` (qui est la page commerciale "Ton agency"), pas vers la page d'études de cas.

## Changement

Dans `src/components/site/Header.tsx`, modifier le tableau `etudesItems` :

- Entrée "Coopératives, assos & PME" : `to: "/cooperative-asso"` → `to: "/etudes-de-cas-pro"`

L'entrée "Créatrices éthiques" (`/creatrices-ethiques`) reste inchangée.

Aucun autre fichier n'est touché. Les deux pages (`/cooperative-asso` commerciale et `/etudes-de-cas-pro` études de cas) restent accessibles directement par leur URL.

&nbsp;

 alors, oui, il faut changer l'URL. Du coup, [/etude-de-cas-ethique](https://www.nowadaysagency.com/etude-de-cas-ethique)