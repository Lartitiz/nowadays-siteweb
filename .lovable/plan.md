# Migration Nowadays Agency → Lovable

## Ce que j'ai vu sur le site actuel

**Site :** nowadaysagency.com — agence de communication éthique pour projets engagés.

**Pages détectées (depuis la nav + liens internes) :**

- Accueil (`/`)
- Solutions de communication (menu)
- Accompagnement communication (`/accompagnement-communication`) — offre solopreneur·es à 290€/mois
- Coopérative & Asso (`/cooperative-asso`) — offre structures à partir de 1 500€
- Panier (`/cart`) — boutique Squarespace (probablement lead magnets / produits) - il n'y a pas de panier 
- regarde dans le footer il y a aussi un blog et les pages lead magnet

**Sections de la homepage :**

1. Header (logo nowadays, menu, CTA rose "Appel découverte")
2. Hero — "Gagnez en *visibilité* sans vendre votre âme"
3. Stat +100 projets accompagnés
4. "Fatiguée du marketing agressif..."
5. "Une communication engagée comme outil d'émancipation"
6. Deux offres côte à côte (Binôme / Agency)
7. "3 étapes pour transformer votre communication"
8. "Ce qui nous rend différentes" (3 cartes : prix, com qui donne envie, +100 projets)
9. Présentation Laetitia (fondatrice)
10. Expertises (Référencement, Branding, Contenu, Instagram, Influence…)
11. "Pourquoi Nowadays ?"
12. Témoignages (Abigail Sia, Emmanuelle Riboud, Laurent Okahina)
13. Bandeaux défilants (Communication responsable / Stratégies durables / Influence éthique)
14. CTA final "Prête à communiquer autrement ?"
15. "Vu dans la presse" (LeBonbon, e-marketing, ladn.eu)
16. Footer

**Identité visuelle :**

- Couleurs : rose vif (#EC4899-ish), corail/orange, vert menthe accent, fond crème/blanc, texte aubergine très foncé
- Typo : serif éditoriale pour les titres avec mots en italique, sans-serif pour le corps
- Style : organique, illustrations rondes (disco ball, fraise, tasse), beaucoup de gros titres

**Fonctionnalités identifiées :**

- Bouton CTA → Calendly (lien externe, facile à brancher)
- Boutique Squarespace (lead magnets payants ou gratuits ?)
- Formulaires de téléchargement de lead magnets → Zapier → CRM (à voir plus tard)
- reCAPTCHA sur les formulaires

## Découpage proposé (très progressif)

Comme tu l'as demandé, on découpe finement. Chaque étape ci-dessous = un seul échange/build.

**Étape 1 — Squelette + design system** (cette étape uniquement pour commencer)

- Créer la palette (rose, corail, menthe, crème, aubergine) dans `src/styles.css voici les couleurs` Rose :
  #91014b bordeaux
  #fb3d80 foncé
  #fd9ebf moyen
  #ffd6e8
  #feedf0 clair
  Fond : 
  #fff7f5 
  &nbsp;
  #f19700 Orange
- Choisir les polices (serif éditoriale + sans-serif) et les ajouter voici les polices : Libre baskerville titre (mais jamais gras) ibm plex mono corps de texte
- Header avec logo "nowadays" + menu + bouton CTA Calendly
- Footer minimal
- Page d'accueil **vide** (juste un hero placeholder) pour valider le look
- Routes vides pour `/accompagnement`, `/agency`, `/contact` (juste un titre)

**Étape 2 — Hero de la homepage**

- Titre, sous-titre, CTA Calendly, visuels décoratifs (cercles colorés)

**Étape 3 — Sections "problème" + "manifeste"**

- "Fatiguée du marketing agressif" + "Communication engagée comme outil d'émancipation"

**Étape 4 — Les deux offres**

- Cartes "Ta binôme de com" et "Ton agency de com" avec liens vers les pages détaillées

**Étape 5 — "3 étapes" + "Ce qui nous rend différentes"**

**Étape 6 — Laetitia + expertises + "Pourquoi Nowadays"**

**Étape 7 — Témoignages + bandeaux défilants + CTA final + presse**

**Étape 8 — Page `/accompagnement-communication**` (offre solopreneur)

**Étape 9 — Page `/cooperative-asso**` (offre structures)

**Étape 10 — Lead magnets**
On verra à ce moment-là : page de téléchargement + formulaire (nom + email) → on rebranche Zapier via un webhook depuis Lovable Cloud, ou alternative native (email auto + stockage de la liste).

**Étape 11 — SEO**

- Meta par route, sitemap, robots.txt, alt sur images, redirections 301 depuis les anciennes URLs Squarespace

**Étape 12 — Domaine + lancement**

- Brancher `nowadaysagency.com` sur Lovable

## Détails techniques (pour info, tu n'as pas à les valider)

- TanStack Start (React 19), Tailwind v4, design tokens dans `src/styles.css` (oklch)
- Une route par page (pas d'ancres `#`), `head()` SEO par route
- Images Squarespace : on les télécharge dans `src/assets/` au fur et à mesure des sections (ou on garde les URLs Squarespace temporairement pour aller vite, puis on rapatrie avant le lancement)
- Lead magnets / Zapier : webhook depuis un server function TanStack Start vers ton workflow Zapier existant — ça marchera sans rien changer côté Zapier

## On démarre par quoi ?

Je propose qu'on lance **l'Étape 1 uniquement** (squelette + design system + header/footer + page d'accueil vide). Ça nous donne une base saine avant d'attaquer le contenu section par section.

OK pour démarrer l'Étape 1 ? pour l'instant je veux vraiment la copie colle du site donc faire bien attention aux hallucinations

&nbsp;