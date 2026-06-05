# Migration pixel-perfect de `/cooperative-asso`

Refonte complète de `src/routes/cooperative-asso.tsx` (actuellement placeholder H1) en suivant la même grammaire que `/accompagnement-communication` et la homepage : Libre Baskerville 400 pour les titres, IBM Plex Mono pour le corps, palette imposée, H2 = `font-serif text-4xl md:text-6xl leading-[1.05] text-ink`, aucun cercle décoratif, aucun "100% engagés / 0% bullshit", pas de couronne ni de tampon "Communication · Engagée · Éthique".

CTA Calendly utilisé pour tous les boutons : `https://calendly.com/laetitia-mattioli/appel-decouverte-atelier` (URL utilisée sur la page source).

## Sections à construire (dans l'ordre)

1. **HeroCooperative**
   - H1 : `Déléguez <em>votre com'</em> et concentrez-vous sur l'essentiel.`
   - Sous-titre mono : `Une communication pro, réactive et stylée pour les structures qui ont mieux à faire que de galérer sur Instagram.`
   - CTA pill rose-dark : `Réservez votre appel découverte`
   - Mention mono : `✨ Appel gratuit • 30 minutes • Sans engagement`

2. **ClientsBand** (fond rose-light)
   - Sur-titre italique serif : `Quelques projets qui nous ont fait confiance`
   - Rangée 5 wordmarks SVG textuels (pas de reproduction des logos exacts) : ENSAD, Sea Shepherd, Decathlon, Emmaüs Défi, L214

3. **ProblemSection**
   - H2 : `Vous portez un projet qui a du sens. Mais <em>la com'</em>, ça coince.`
   - Para intro mono + liste à puces 5 items + paragraphe gras de conclusion + CTA secondaire

4. **LaetitiaIntroSection**
   - Sur-titre mono uppercase : `Je vous propose de prendre en main votre communication pour que vous respiriez`
   - H2 : `Parce que gérer une structure engagée, c'est déjà un job à temps plein`
   - 2 colonnes : texte (présentation Laetitia + "Je fais pour vous" + liste 4 puces) | portrait (placeholder rose-soft)
   - CTA + mention réassurance

5. **PourquoiTravaillerSection** (fond cream)
   - H2 : `Pourquoi <em>travailler avec moi</em> plutôt qu'une grosse agence ?`
   - 3 cartes (💛 Prix accessibles / 🧡 Réactive, autonome, efficace / 🩷 Une com' qui donne envie) — titres serif, corps mono
   - Lien outline `Voir nos études de cas` (ancre interne `#projets`)

6. **ProcessSection**
   - H2 : `Comment <em>ça se passe</em> ?`
   - 3 étapes numérotées (1️⃣ On se rencontre / 2️⃣ Proposition sur-mesure / 3️⃣ On avance ensemble)

7. **PrestationsSection**
   - H2 : `Un accompagnement sur-mesure pour une <em>communication plus éthique</em>`
   - Intro mono : `Selon vos besoins et votre budget, je peux intervenir sur :`
   - Grille 2×2 de blocs : Stratégie & cadrage / Réseaux sociaux & Influence / Site web & SEO / Emailing & événements (chaque bloc = titre serif + liste à puces mono)

8. **ProjetsGrid** (id `projets`, fond rose-light)
   - Sur-titre italique serif : `Celles et ceux qui font bouger les lignes avec nous`
   - Paragraphe intro mono
   - Grille 3 colonnes × N : 17 projets (ENSAD, Sea Shepherd, Decathlon Quechua, Emmaüs Défi, Clip It, L214, Coopérative Oasis, Okahina Wave, Study & Co, Mira, Black Stallion Trading, Ressources, We Slow, Jean Belgueule, Essential Oil Supplies, Bruno Zana, Atelier des lunettes, My Pilates World, Belle., Rose Donald, La prochaine aire)
   - Chaque carte : placeholder image rose-soft (16/10) + nom serif + courte description mono (2–3 lignes max, paraphrasées)
   - Pas de lien externe vers nowadaysagency.com — boutons "Voir le projet" désactivés ou ancres internes (à confirmer ; par défaut on les masque pour éviter les liens morts)

9. **FinalCtaSection** — réutiliser le composant existant (déjà sur la home)

## Détails techniques

- Nouveau dossier `src/components/cooperative/` regroupant les 8 nouveaux composants de section (le 9e réutilise `FinalCtaSection`).
- `src/routes/cooperative-asso.tsx` : remplacement complet du `Page()` placeholder, mise à jour de `head()` (title, description, og:title, og:description spécifiques) — canonical conservé.
- `Header.tsx` : ajouter un lien nav vers `/cooperative-asso` (vérifier — actuellement seul `/accompagnement-communication` est listé). À confirmer : le site source n'a qu'un seul lien "Solutions de communication" ; on ajoute un second lien "Coopératives & assos" dans la nav.
- Aucun nouvel asset image cette passe (placeholders rose-soft + emoji), génération d'images réelles dans un lot ultérieur une fois la structure validée.
- Couleurs uniquement via tokens (`bg-rose-light`, `bg-cream`, `text-ink`, `text-rose-dark`, …).
- Tous les CTA Calendly ouvrent un nouvel onglet (`target="_blank" rel="noopener noreferrer"`).
- Aucun lien `Voir le projet` vers le site source (évite les sorties vers nowadaysagency.com) — à confirmer avec toi.

## Fichiers touchés

- Édité : `src/routes/cooperative-asso.tsx` (refonte complète)
- Édité : `src/components/site/Header.tsx` (ajout lien nav)
- Édité : `.lovable/plan.md` (avancement)
- Nouveaux : 8 composants sous `src/components/cooperative/`

## À confirmer avant de coder

1. Ajouter le lien `Coopératives & assos` dans la nav du header ? (oui par défaut)
2. Les cartes projets dans la grille : on masque les liens "Voir le projet" (pas de page projet locale) ou on les laisse pointer vers les URLs externes nowadaysagency.com / sites clients ? (par défaut : on masque)
