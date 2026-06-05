
## Objectif

Migrer `/guide-storytelling` en suivant exactement le même traitement éditorial que `/formation-gratuite-instagram` — la page d'origine est très pauvre (un formulaire + 4 bullet points), donc on enrichit massivement le contenu autour de la **méthode de storytelling en 5 étapes** annoncée mais jamais détaillée sur le site source.

## Structure de la page (`src/routes/guide-storytelling.tsx`)

Mêmes sections que `formation-gratuite-instagram`, adaptées au sujet :

1. **Hero** — éyebrow "· Guide gratuit ·", titre `Le guide storytelling *gratuit*`, sous-titre, CTA "Recevoir le guide", mention "Guide PDF · 5 étapes · canevas inclus". Visuel cover du guide à droite (image générée).
2. **SocialProof** — bandeau "+200 marques engagées · ont structuré leur récit · ⭐⭐⭐⭐⭐"
3. **Why** — texte éditorial 2 colonnes (pourquoi le storytelling est sous-estimé / mal pratiqué) + citation de témoignage à droite.
4. **Benefits** — 4 acquis concrets (un récit qui résonne, une voix de marque distinctive, un fil narratif réutilisable partout, des contenus qui convertissent sans vendre).
5. **Audience** — 3 cibles : Entrepreneur·e en quête de voix · Freelance qui veut sortir du CV · Marque éthique en quête d'incarnation. + 2 mockups du guide.
6. **Program** — **la pièce maîtresse** : les 5 étapes de la méthode, sur le même format que les modules IG (numéro, durée estimée, titre, objectif, contenu, exercice, livrable). Étapes inspirées des frameworks classiques (Hero's Journey simplifié) :
   - 01 · Le **terreau** — d'où tu viens, le déclic fondateur
   - 02 · La **mission** — la transformation que tu offres
   - 03 · Le **personnage** — ton client·e idéal·e comme héros
   - 04 · Le **récit** — structure en 3 actes adaptée à la marque
   - 05 · La **mise en voix** — comment décliner partout (bio, About, posts, pitch)
7. **FinalCTA** — bloc CTA final identique au pattern existant
8. **Signature** — "Bonne écriture, ♡ Laetitia"

## Visuels (imagegen, style éditorial cohérent avec formation IG)

- `src/assets/guide-storytelling/cover.png` — mockup couverture du guide PDF, palette site (cream/rose-soft/ink), titre "Guide Storytelling" en serif
- `src/assets/guide-storytelling/mockup-canvas.png` — mockup d'une planche intérieure : le canevas en 5 étapes

## SEO

- title : "Guide storytelling gratuit — Méthode PDF en 5 étapes | Nowadays Agency"
- description : "Reçois le guide PDF gratuit pour écrire le storytelling de ta marque en 5 étapes. Canevas pratique, exemples concrets, méthode testée sur des marques éthiques."
- og:image = cover.url
- canonical `/guide-storytelling`

## Wiring

- Mettre à jour les 2 `href="#"` du `Footer.tsx` qui pointent vers le guide storytelling → `/guide-storytelling`
- Le routeTree se régénère automatiquement.

## Hors scope

- Formulaire de capture email **non branché** (comme `formation-gratuite-instagram` actuellement — CTA décoratif qui scrolle vers `#recevoir`). Si tu veux brancher l'envoi par email + stockage en base, on le fera dans un second passage commun aux 2 lead magnets.
- `/creatrices-ethiques` reste pour après.
