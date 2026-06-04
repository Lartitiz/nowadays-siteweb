# Fin de page homepage — pixel perfect

Quatre blocs à ajouter en bas de la homepage, dans l'ordre des captures, en respectant strictement les règles de typo/couleurs déjà en place (Libre Baskerville 400 pour les titres en `text-ink`, italiques en `rose-dark` ; corps en IBM Plex Mono `text-ink` ; CTA `rose-dark` arrondi avec libellé `font-mono uppercase tracking`).

## 1. `CtaWaveSection` (capture 1)

Nouveau composant `src/components/site/CtaWaveSection.tsx`, inséré entre `PourquoiNowadaysSection` et le footer.

- Fond `rose-soft` (#ffd6e8) avec deux vagues SVG (haut et bas) en `cream` qui font la transition douce vers les sections blanches voisines.
- Contenu centré, padding vertical généreux :
  - H2 : `Prête à communiquer autrement ?` — règle H2 standard.
  - Sous-titre : `NOWADAYS, VOTRE AGENCE DE COMMUNICATION ENGAGÉE AU SERVICE DE PROJETS ÉTHIQUES` en `font-mono uppercase tracking-[0.2em] text-ink`.
  - CTA bouton `rose-dark` arrondi pill : `RÉSERVER UN APPEL DÉCOUVERTE`, lien `mailto:` (placeholder) ou ancre `#contact`.

## 2. `PressSection` (capture 2)

Nouveau composant `src/components/site/PressSection.tsx`, fond `cream`/blanc.

- H2 centré : `Vu dans la` + `<em>presse</em>` (italique en `rose-dark`, soulignement décoratif sous le mot via `border-b-2 border-rose-dark` ou trait SVG).
- Grille 3 colonnes (1 colonne en mobile) :
  - Le Bonbon → titre `Le marché écolo Nowadays Market s'installe au Jardin 21`
  - emarketing.fr → `Interview : Laetitia Mattioli, Fondatrice de Nowadays Agency`
  - L'ADN Business → `Comment réussir un programme d'ambassadeurs de marque ?`
- Logos générés via `imagegen--generate_image` (transparent_background, premium pour la lisibilité du texte/marques) puis importés depuis `src/assets/`.
- Légende sous chaque logo en `font-mono text-sm text-ink` centré, sans graisse forte (poids 400).

## 3. `FinalCtaSection` (capture 3)

Nouveau composant `src/components/site/FinalCtaSection.tsx`, fond blanc/`cream`.

- H2 centré : `Prêt·es à <em>avancer</em> ?` (italique `rose-dark`).
- Paragraphe centré max-width ~62ch en `font-mono text-ink` :
  > Réservez un appel découverte de 30 minutes. On fait le point sur votre projet, vos besoins, et je vous dis honnêtement si je peux vous aider (et comment).
- Gros CTA pill `rose-dark` : `RÉSERVER MON APPEL DÉCOUVERTE (GRATUIT)`.

## 4. Footer enrichi (capture 4)

Remplacer le contenu de `src/components/site/Footer.tsx` (fond passe en `cream`/blanc).

- Bandeau supérieur avec H2 pleine largeur : `Votre agence de communication pop & <em>engagée</em>` (italique `rose-dark`).
- Sous-grille 3 colonnes (1 colonne en mobile) :
  1. **Colonne liens** (sans titre) — liens soulignés `text-ink`, `font-mono` :
     - `Notre démarche éthique`
     - `Nos études de cas (solopreneures)`
     - `Nos études de cas (PME & Asso)`
     - Puis sous-titre `NOUS RENDRE VISITE` (font-mono uppercase tracking) + adresse :
       `La Prochaine Aire - Maison éclusière, Les Petits Pâtis, 89300 Saint-Aubin-sur-Yonne`
  2. **Colonne RESSOURCES GRATUITES** — sous-titre + liste à puces soulignée :
     - `Le blog`, `Outil Calendrier éditorial`, `Formation gratuite Instagram`, `Template Plan de com'`
  3. **Colonne newsletter** :
     - Texte : `Rejoins les +1 200 projets éthiques qui reçoivent chaque semaine mes conseils en com' engagée`
     - Champ `Ton doux prénom (obligatoire)` (label + input arrondi pill `rose-light`)
     - Champ `Ton e-mail (obligatoire)` (idem)
     - Bouton pill `rose-mid` : `Recevoir les conseils secrets`
     - Form purement décoratif (pas de backend) — `onSubmit` `preventDefault`.
- Sous-pied existant `© Nowadays Agency` conservé en bas.

## Détails techniques

- Tous les H2 utilisent la règle standard : `font-serif text-4xl md:text-6xl leading-[1.05] text-ink`.
- Italiques `<em>` colorés via classe utilitaire existante (CSS global déjà en place : `em` en `rose-dark`).
- Aucun cercle décoratif, aucune couronne, aucun tampon (règles mémoire).
- Vagues SVG inline dans `CtaWaveSection` — pas d'image externe.
- Logos presse : 3 PNG transparents générés en `imagegen--generate_image` (premium pour lisibilité typographique).
- Insertion dans `src/routes/index.tsx` :
  ```
  <PourquoiNowadaysSection />
  <CtaWaveSection />
  <PressSection />
  <FinalCtaSection />
  ```
  puis `<Footer />` (rendu par `SiteLayout`) prend la version enrichie.
- Liens du footer pointent vers `#` pour l'instant (placeholders) sauf `Notre démarche éthique` → ancre vers `ManifestoSection` (`#manifesto`), `Nos études de cas (PME & Asso)` → route `/cooperative-asso`, `Nos études de cas (solopreneures)` → route `/accompagnement-communication`.

## Fichiers touchés

- nouveaux : `src/components/site/CtaWaveSection.tsx`, `src/components/site/PressSection.tsx`, `src/components/site/FinalCtaSection.tsx`
- nouveaux assets : `src/assets/press-bonbon.png`, `src/assets/press-emarketing.png`, `src/assets/press-ladn.png`
- édités : `src/components/site/Footer.tsx`, `src/routes/index.tsx`
