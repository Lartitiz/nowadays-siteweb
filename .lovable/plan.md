## Objectif

Scraper https://www.nowadaysagency.com/etude-de-cas-ethique (22 projets : associations, ONG, coopératives, PME engagées) et créer une nouvelle page sur le site, distincte de l'actuelle `/etudes-de-cas` (qui reste dédiée aux créatrices éthiques).

## Nouvelle route

`src/routes/etudes-de-cas-pro.tsx` (slug : `/etudes-de-cas-pro`)

Titre : « Ils nous ont fait confiance — Associations, ONG & marques engagées »
Sous-titre repris du site source : « Une sélection de projets créatifs et engagés (Associations, ONG, start-up et entreprises responsables et éthiques) que nous avons accompagnés avec passion. »

Même mise en page visuelle que `/etudes-de-cas` (grille charte respectée : serif Libre Baskerville, IBM Plex Mono, palette ink/bordeaux/rose), pour cohérence pixel-perfect.

## Liste des 22 projets à intégrer

1. École des Arts Décoratifs (ENSAD) — lien interne `/ensad`
2. Sea Shepherd x Racines de Demain — `/sea-shepherd`
3. Decathlon x Quechua — pas de page projet (image seule)
4. Emmaüs Défi — `/emmaus-defi`
5. Clip It — `/clip-it`
6. L214 — `/l214`
7. Coopérative Oasis — `/cooperative-oasis`
8. Okahina Wave — `/okahina-wave`
9. Study & Co — externe https://studynco.com
10. Mira — externe https://mymira.fr
11. Black Stallion Trading — `/etudes/black-stallion-trading` (déjà existant)
12. Ressources Emmanuelle Riboud — `/etudes/ressources` (déjà existant)
13. We Slow — externe Instagram
14. Jean Belgueule — `/etudes/jean-belgueule` (déjà existant)
15. Essential Oil Supplies — externe
16. Bruno Zana — externe
17. Atelier des lunettes — pas encore de page
18. My Pilates World — pas encore de page
19. Belle. — externe Instagram
20. Rose Donald — externe Instagram
21. Elvezia — pas encore de page
22. La prochaine aire — externe linktree

Les liens « Voir le projet » pointent vers la cible exacte du site source (page interne quand elle existe, sinon URL externe avec `target="_blank"`).

## Visuels

Scraper les 22 images depuis `images.squarespace-cdn.com` et les sauvegarder via le système d'assets (`.asset.json`) sous `src/assets/etudes-pro/`, comme pour la page créatrices. Réutiliser les `.asset.json` déjà présents quand le projet est commun (`black-stallion-trading.webp`, `ressources.png`, `jean-belgueule.jpg`, `belle.jpg`, `rose-donald.jpg`, `my-pilates-world.jpg`).

Texte alternatif : description Squarespace existante (déjà très détaillée et accessible).

## Navigation

Ajouter une entrée dans la nav principale du `SiteLayout` (Header) :
- conserver « Études de cas » → renommer en « Créatrices éthiques » (URL `/etudes-de-cas`)
- ajouter « Assos & marques engagées » (URL `/etudes-de-cas-pro`)

Idem dans le footer si la nav y est dupliquée.

## SEO

`head()` dédié :
- title : « Études de cas — Associations, ONG & marques engagées | Nowadays »
- description : reprise du sous-titre
- og:title / og:description identiques
- canonical `/etudes-de-cas-pro`

## Hors scope

- Pas de création des pages projet manquantes (Atelier des lunettes, My Pilates World, Elvezia, etc.) — uniquement liens externes ou vers le site source si l'utilisateur le demandera plus tard.
- Pas de modification de `/etudes-de-cas` existant (sauf renommage du label de nav).
- Pas de stockage DB : projets statiques dans le code (comme la page créatrices), pas dans `articles`.

## Détails techniques

```text
src/
  routes/
    etudes-de-cas-pro.tsx        ← nouvelle route
  assets/
    etudes-pro/
      ensad.jpg.asset.json
      sea-shepherd.jpg.asset.json
      decathlon-quechua.jpg.asset.json
      emmaus-defi.jpg.asset.json
      clip-it.jpg.asset.json
      l214.jpg.asset.json
      cooperative-oasis.jpg.asset.json
      okahina-wave.jpg.asset.json
      study-co.webp.asset.json
      mira.jpg.asset.json
      we-slow.jpg.asset.json      ← réutiliser src/assets/etudes/we-slow.jpg si identique
      essential-oil-supplies.jpg.asset.json ← idem réutiliser si présent
      bruno-zana.jpg.asset.json
      atelier-des-lunettes.webp.asset.json
      elvezia.jpg.asset.json
      la-prochaine-aire.jpg.asset.json
```

Composant `Project` identique à celui de `/etudes-de-cas` : image carrée, nom en serif `text-ink`, paragraphe descriptif, lien « Voir le projet » avec icône, support de l'attribut `external` pour ouvrir dans nouvel onglet.

Section finale : réutiliser `<FinalCtaSection />` comme sur la page créatrices.
