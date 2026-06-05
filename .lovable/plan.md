## Objectif
Supprimer toutes les petites lignes SVG décoratives ("squiggles") présentes sur le site.

## Fichiers concernés
1. **`src/components/site/TiredSection.tsx`**
   - Supprimer le composant `Squiggle` et ses 3 utilisations :
     - Ligne 101 : `<Squiggle color="var(--yellow)" />` dans le texte
     - Lignes 68-70 : `<Squiggle color={squiggleColor} />` dans les bulles `PhotoBubble`
     - Nettoyer la prop `squiggleColor` de `PhotoBubble` (plus utilisée)

2. **`src/components/site/VisibilityBanner.tsx`**
   - Supprimer le composant `Squiggle` et le composant `Underlined` qui l'utilise
   - Supprimer les 2 utilisations de `<Underlined>` dans le titre

3. **`src/components/site/PourquoiNowadaysSection.tsx`**
   - Supprimer le `<svg>` inline sous le mot "Nowadays" (lignes 12-26)

## Résultat attendu
Plus aucune ligne ondulée SVG sur le site.