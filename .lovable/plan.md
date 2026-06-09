## Images trouvées sur la page source

La page `nowadaysagency.com/cooperative-asso` contient 6 images :

| # | Fichier | Usage probable | Statut |
|---|---|---|---|
| 1 | `1.png` (200×200) | Logo L214 | Déjà présent |
| 2 | `2.png` (200×200) | Logo Emmaüs Défi | Déjà présent |
| 3 | `3.png` (200×200) | Logo Coopérative Oasis | Déjà présent |
| 4 | `Site+web+logo.png` (200×200) | Logo Sea Shepherd | Déjà présent |
| 5 | `EAD-PSL_BouquetMini.jpg` (5733×5483) | Logo / visuel École des Arts Déco PSL | Déjà présent (`ensad-psl.jpg`) |
| 6 | `7B8375EF…JPG` (2268×4032, portrait) | **Photo de Laetitia** | **Manquant** |

## Conclusion

Une seule image n'est pas encore intégrée : le **portrait de Laetitia**. La page actuelle a un placeholder vide (`<div className="aspect-[4/5] w-full rounded-3xl bg-rose-light" />`, ligne 204) dans la section `LaetitiaIntroSection` — c'est exactement là qu'elle doit aller.

## Actions

1. Télécharger `7B8375EF-4923-4B8A-BAF2-57E3CFEADE91.JPG` depuis Squarespace
2. Uploader via `lovable-assets create` → `src/assets/coop/laetitia.jpg.asset.json`
3. Dans `src/routes/cooperative-asso.tsx` :
   - Ajouter l'import du pointer asset
   - Remplacer le placeholder ligne 204 par un `<img>` avec `object-cover`, `rounded-3xl`, `loading="lazy"`, alt "Laetitia Mattioli, fondatrice de Nowadays Agency"
