## Objectif

Récupérer toutes les images de https://www.nowadaysagency.com/accompagnement-communication (photo de Laetitia, visuels de sections, etc. — hors logos clients déjà intégrés) et les remettre aux bons endroits dans `src/routes/accompagnement-communication.tsx`.

## Étapes

1. **Scraper la page source**
   - Charger la page avec `fetch_website` (HTML) pour récupérer toutes les URLs d'images.
   - Identifier chaque image : URL, contexte (titre de section voisin), rôle probable (photo portrait, illustration, mockup, etc.).
   - Exclure : favicons, sprites, et les 6 logos clients déjà intégrés.

2. **Cartographier image ↔ section dans notre page**
   Sections actuelles qui ont besoin d'un visuel :
   - `LaetitiaIntroSection` — bloc `aspect-[4/5]` actuellement vide → **photo portrait de Laetitia**
   - Autres sections (timeline, transformation, prix…) → ajouter visuel uniquement si présent sur la page source et pertinent
   
   Je présenterai le mapping proposé dans un message de suivi avant intégration si plusieurs images ambiguës.

3. **Télécharger + uploader en assets CDN**
   - `curl` chaque image vers `/tmp/`
   - `lovable-assets create --file` pour chaque fichier
   - Écrire les pointeurs `.asset.json` dans `src/assets/accompagnement/{nom}.{ext}.asset.json`

4. **Intégrer dans `src/routes/accompagnement-communication.tsx`**
   - Ajouter les imports `.asset.json`
   - Remplacer le bloc vide `<div className="aspect-[4/5] w-full bg-rose-light" />` par `<img>` avec la photo de Laetitia
   - Insérer les autres visuels aux sections correspondantes en respectant les conventions typo/spacing existantes (pas de modif des H2/H3, palette inchangée)

## Hors scope

- Les 6 logos clients (déjà faits)
- Modifications de texte ou de structure des sections
- Création de nouvelles sections juste pour caser une image

## Question (1)

Veux-tu **toutes** les images de la page source remises là où elles sont sur l'original, ou **uniquement la photo de Laetitia** pour commencer ? Je peux aussi te lister d'abord ce que j'ai trouvé avant de tout intégrer.