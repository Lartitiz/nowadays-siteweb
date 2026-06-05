## Constat

Les 6 études de cas actuelles (`/etudes/black-stallion-trading`, `fat-moose`, `jean-belgueule`, `religion-clothing`, `ressources`, `still-nordic`) ont été scrapées partiellement :
- titres approximatifs (ex. BST a une question générique au lieu de « Développer la notoriété d'un showroom à NYC… »)
- sous-titre + CTA hero manquants
- sections « Contexte / Solutions / Résultats » abrégées en listes plates de paragraphes
- pas de bloc influenceurs façon grille (BST)
- pas de bloc statistiques résultats
- design générique (pas de logo client en hero, pas de marquee « Les solutions apportées 〰️ »)

Le `CaseStudy` actuel n'est qu'un empilement vertical de h1/h2/img/p. On va le refondre pour matcher le gabarit Squarespace source.

## Objectif

Reproduire **pixel-perfect** la structure visuelle des pages source `nowadaysagency.com/<slug>` pour les 6 études existantes, en gardant la charte du site (Libre Baskerville, IBM Plex Mono, palette ink/bordeaux/rose).

## Gabarit `CaseStudy` cible

Sections, dans l'ordre :

1. **Hero centré** (fond `bg-background` dégradé léger vers `rose-light`)
   - Logo client (image ronde ou carrée), 120 px
   - H1 serif `text-ink` taille 4xl→6xl, centré, max 4xl
   - Sous-titre mono petit, centré
   - Bouton rose-dark arrondi (rounded-full) : « Prendre rendez-vous pour discuter de votre projet » → Calendly
2. **« Un peu de contexte »** (H2 charte) + paragraphes mono + image pleine largeur
3. **Marquee « Les solutions apportées 〰️ »** (bandeau qui défile, fond cream)
4. **Sous-sections solutions** : pour chaque solution, H3 serif + paragraphe + image (alternance gauche/droite si plusieurs images)
5. **Bloc Résultats** (fond `rose-light`) : grille 4 colonnes, chiffre serif géant + label mono
6. **Grille influenceurs** (BST uniquement) : avatars ronds + handle + rôle + followers
7. **Final CTA** : H2 + bouton Calendly (réutilise `FinalCtaSection` existant)

Le composant `CaseStudy` actuel devient un wrapper qui consomme un schéma plus riche :

```ts
type CaseStudyData = {
  brand: string;
  logoSrc?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string; // défaut: "Prendre rendez-vous pour discuter de votre projet"
  context?: { title?: string; paragraphs: string[]; image?: { src: string; alt: string } };
  solutionsTitle?: string; // défaut: "Les solutions apportées"
  solutions: { title: string; paragraphs: string[]; images?: { src: string; alt: string }[] }[];
  results?: { value: string; label: string }[];
  influencers?: { avatar: string; handle: string; role?: string; followers?: string; link?: string }[];
};
```

Le bloc `Block[]` actuel est supprimé au profit de ce schéma typé. Le marquee est un composant local au `CaseStudy` (animation CSS `@keyframes scroll-x`).

## Scraping

Pour les 6 études de cas, on rescrape les pages source :
- `nowadaysagency.com/black-stallion-trading`
- `nowadaysagency.com/fat-moose`
- `nowadaysagency.com/jean-belgueule`
- `nowadaysagency.com/religion-clothing`
- `nowadaysagency.com/ressources`
- `nowadaysagency.com/still-nordic`

Pour chacune :
- récupérer le logo (premier visuel rond/carré du hero) + l'uploader en asset
- récupérer le H1 exact + sous-titre exact
- extraire les sous-sections (H2/H3 + paragraphes + images) dans l'ordre source
- extraire le bloc « Résultats » sous forme de stats (les chiffres apparaissent en gras dans le markdown source : `**1k visiteurs uniques**`, etc.)
- pour BST : extraire la grille influenceurs (handle, rôle, followers, lien Instagram)
- vérifier les alts des images (déjà bien décrits côté Squarespace pour l'accessibilité)

Les visuels déjà uploadés dans `src/assets/etudes/<slug>/` sont réutilisés quand ils existent (ils sont déjà nommés d'après le nom de fichier source). On ajoute uniquement les logos manquants et les éventuelles images oubliées.

## Données

Chaque route `etudes.<slug>.tsx` exporte un objet `caseStudyData: CaseStudyData` et appelle `<CaseStudy data={caseStudyData} />`. Plus de `Block[]` ad-hoc.

## Hors scope

- Pas de nouvelles études de cas (l'utilisateur a déjà demandé une autre page pour les autres projets — `/etudes-de-cas-pro` les liste vers la source).
- Pas de refonte du design global (couleurs, typo) — on reste sur la charte mémorisée.
- Pas de système d'admin / CMS ; les données restent en dur dans chaque fichier route.

## Détails techniques

- **`src/components/site/CaseStudy.tsx`** : réécriture complète selon le schéma `CaseStudyData`.
- **Marquee** : animation CSS pure (`transform: translateX`) en boucle, durée 30s, accessible (`aria-hidden`).
- **CTA hero** : `<a href={CALENDLY_URL} target="_blank">` style `rounded-full bg-rose-dark text-white px-8 py-4 font-mono uppercase`.
- **Stats** : `grid-cols-2 md:grid-cols-4`, chiffre `font-serif text-5xl md:text-7xl text-rose-dark`, label `font-mono text-sm text-ink mt-2`.
- **Influenceurs** : `grid-cols-2 md:grid-cols-3`, avatar `aspect-square rounded-full overflow-hidden`.
- **Logos** : nouveau dossier `src/assets/etudes/<slug>/logo.<ext>.asset.json`.
- 6 fichiers `etudes.<slug>.tsx` réécrits ; tous les imports d'assets déjà présents sont conservés.

## Plan d'exécution

1. Refondre `CaseStudy.tsx` (nouveau schéma + marquee + stats + influenceurs).
2. Scraper + uploader les 6 logos manquants.
3. Pour chaque slug, regénérer les données depuis la source et réécrire la route.
4. Vérification visuelle en preview (1 page suffit pour valider le gabarit, puis check rapide des 5 autres).
