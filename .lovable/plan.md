## Objectif

Migrer la page https://www.nowadaysagency.com/formation-gratuite-instagram dans la nouvelle route `/formation-gratuite-instagram`, en gardant tout le contenu (hero, bénéfices, audience, programme 5 modules, preuve sociale) mais en repensant le design pour coller à la charte éditoriale du site (Libre Baskerville + IBM Plex Mono, palette ink/bordeaux/rose/cream, arrondis légers, pas de cercles déco, pas de gros boutons rose flashy arrondis "pilule").

## Améliorations design proposées

L'original Squarespace est faible : hero centré générique, gros CTA pilule rose vif, blocs texte plats, peu de hiérarchie, visuels sur fonds rose pastel sans cohérence. On garde l'esprit "lead magnet vivant" mais on monte en gamme.

1. **Hero éditorial split** (au lieu du centré générique)
   - Gauche : eyebrow mono `· FORMATION GRATUITE ·`, H1 serif `Formation Instagram` avec `gratuite` en italique rose-dark, sous-titre mono, CTA principal (bordeaux/ink, arrondi `rounded-sm` léger, pas de pilule), petite ligne de réassurance "Guide PDF · 5 modules · ~90 min".
   - Droite : visuel du lead magnet (le "Lead Magnet visuel.png") posé légèrement en biais, `rounded-sm`, ombre douce, sur fond cream.
   - Pas de CrownSticker, pas d'EngageStamp, pas de stats "100%".

2. **Bandeau preuve sociale discret** sous le hero : `+200 créatrices et projets engagés ont téléchargé le guide` en mono, séparateurs typographiques `·`.

3. **Section "Pourquoi ce guide"** : H2 serif standard du projet (`font-serif text-4xl md:text-6xl text-ink`), intro courte, une citation/témoignage typographiée en serif italique rose-dark avec barre verticale bordeaux à gauche (pas de carte arrondie).

4. **Section bénéfices (4 items)** : grille 2x2, chaque item = numéro mono `01 → 04` en rose-dark, titre serif court, description mono. Pas de checkmarks emoji ✅, on remplace par les numéros.

5. **Section "Pour qui ?"** : 3 colonnes minimalistes avec icône SVG line discrète (créatrice, agenda, boussole) + label serif court + 1 ligne mono.

6. **Programme (5 modules)** : timeline verticale éditoriale.
   - Chaque module = ligne horizontale avec à gauche un numéro géant serif `01` en rose-dark/transparent, au centre titre + durée en mono, à droite contenu + livrable mis en valeur dans un encart cream avec bordure ink fine.
   - Pas d'accordéon (tout visible, SEO friendly).
   - Séparateurs fins ink/10.

7. **Visuels du guide** : 2 mockups intégrés en mid-page en collage léger (rotation -2deg / +1deg), `rounded-sm`, ombres soft. Pas de fond rose flashy.

8. **CTA final pleine largeur** : bande bordeaux, H2 serif cream `Reçois ton guide maintenant`, mini-formulaire (email + bouton "Envoyer le guide") inline, mention RGPD en mono petit.

9. **Signature** : "Bonne planification, ♡ Laetitia" en serif italique, alignée droite, après le CTA.

## Implémentation technique

- **Nouvelle route** `src/routes/formation-gratuite-instagram.tsx` avec `createFileRoute("/formation-gratuite-instagram")`, `head()` SEO :
  - title : `Formation Instagram gratuite — Guide PDF | Nowadays Agency`
  - description (~155 char) axée "stratégie Instagram, créatrices engagées, gratuit"
  - og:title, og:description, og:image (le visuel du lead magnet), canonical.
- **Header + Footer** existants réutilisés, fond `bg-cream`.
- **Composants locaux** dans le fichier route (pas de fragmentation prématurée) : `Hero`, `Benefits`, `Audience`, `Program`, `FinalCTA`.
- **Assets à scraper** via `lovable-assets` depuis les URLs Squarespace :
  - logo guide `35.png` → `src/assets/formation-ig/logo-guide.png`
  - visuel lead magnet `Lead Magnet visuel.png` → `src/assets/formation-ig/cover.png`
  - mockup optimisation `formation+instagram+gratuite+optimisation+du+compte.png` → `src/assets/formation-ig/mockup-optimisation.png`
  - (les visuels `2.png` disco / `3.png` fraise / `4.png` stabilo sont écartés : trop "Squarespace decorative", on s'en passe pour respecter la charte sans cercles/déco gratuites)
- **Form** : champ email + bouton, soumission gérée par un simple `mailto:` ou un placeholder `onSubmit` (pas de backend dans ce ticket — à confirmer ci-dessous).
- **Lien depuis le site** : ajouter une entrée discrète dans le Footer (colonne ressources) "Formation Instagram gratuite" → `/formation-gratuite-instagram`. Pas d'ajout dans le header principal.

## Hors scope

- Pas de captcha / reCAPTCHA.
- Pas d'envoi automatique du PDF par email (pas de backend mail configuré ici).
- Pas de modification du PDF lui-même.

## À confirmer avant de builder

1. **Soumission du formulaire** : on branche un vrai backend (Lovable Cloud + table `leads` + envoi email via un provider) **ou** on met un simple `mailto:laetitia@…` / un placeholder à brancher plus tard ?
2. **Le visuel "logo guide" coloré** (sticker `ton guide Instagram` jaune/orange/violet) est très Squarespace — on le **garde** dans le hero pour le côté lead magnet, ou on le **remplace** par un traitement typographique sobre cohérent avec la charte ?
