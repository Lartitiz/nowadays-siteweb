## Refonte de la section témoignages

Direction validée : **Polaroïds décalés**, avec instruction utilisateur « image plus petite ».

### Fichier modifié

`src/components/site/TestimonialsSection.tsx` (seul ce composant change — la data des 3 témoignages reste identique : Abigail Sia, Emmanuelle Riboud, Laurent).

### Changements précis

1. **Suppression des fonds ovales/ronds colorés** derrière les portraits (respect de la règle projet : pas de cercles décoratifs).
2. **Portrait en cadre polaroïd** : rectangle blanc avec fine bordure `--ink` à 20%, padding 1, ombre légère, ratio `aspect-[4/5]`. Image en `grayscale` → couleur au hover (700 ms).
3. **Image plus petite** : polaroïd contraint à `max-w-[240px]` centré dans sa colonne (au lieu de remplir toute la colonne).
4. **Décalage magazine** : 3 cartes avec offsets verticaux différents (`translate-y-0`, `translate-y-16`, `-translate-y-2`) sur desktop pour casser la grille rigide.
5. **Légende restructurée** : nom en `font-serif text-xl`, rôle en mono uppercase rose-dark (au lieu de gris/ink italique), citation en mono `text-[14px]` non-italique (les italiques restent sur le rôle si besoin).
6. **Header conservé** : H2 inchangé (déjà aux bonnes tailles `text-4xl md:text-6xl`), sous-titre passé en mono uppercase tracking pour rythme éditorial.

### Règles respectées (vérifiées)

- H2 : `font-serif text-4xl md:text-6xl leading-[1.05] text-ink` ✓
- Corps : IBM Plex Mono 400 en `--ink` sans opacité ✓
- Aucun cercle / ovale / blob ✓
- Italique uniquement sur l'accroche « communication engagée » en `--rose-dark` ✓
- Palette respectée (cream, ink, rose-dark) ✓
- Liens (Art Director, Ressources, Okahina Wave) préservés avec souligné rose-dark ✓

### Hors scope

- Pas de changement de copy
- Pas de carrousel / interaction complexe
- Pas de nouveau composant créé
- Pas de modification ailleurs sur la homepage
