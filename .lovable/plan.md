## Remplacer les photos des témoignages

Trois nouveaux portraits fournis pour la section témoignages.

### Mapping

| Témoignage | Nouvelle photo |
|---|---|
| Abigail Sia | `user-uploads://abi.png` |
| Emmanuelle Riboud | `user-uploads://emmanuel.png` |
| Laurent (Okahina Wave) | `user-uploads://laurent.png` |

### Étapes

1. Upload chaque image via `lovable-assets create` depuis `/mnt/user-uploads/` vers des pointeurs CDN :
   - `src/assets/testimonials/abigail-sia.png.asset.json`
   - `src/assets/testimonials/emmanuelle-riboud.png.asset.json`
   - `src/assets/testimonials/laurent-okahina.png.asset.json`
2. Supprimer les anciens PNG locaux dans `src/assets/testimonials/`.
3. Mettre à jour `src/components/site/TestimonialsSection.tsx` : remplacer les 3 imports par les pointeurs `.asset.json` et utiliser `.url`.

### Hors scope

- Aucun changement de copy, layout, ou design des polaroïds (cadre, offsets, filtre grayscale → couleur au hover restent identiques).
- Les fonds colorés baked-in dans les photos (beige, rose, jaune) sont conservés tels que fournis.
