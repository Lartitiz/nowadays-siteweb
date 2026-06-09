## Objectif

Sur `/accompagnement-communication`, la section "Elles m'ont fait confiance" affiche actuellement les noms des clientes en texte stylé. On les remplace par les vrais logos PNG scrapés depuis `nowadaysagency.com/accompagnement-communication`.

## Logos identifiés (6)

| Client | URL source |
|---|---|
| Atelier Tiket | `.../2ed079e2.../13.png` (cercle bleu clair) |
| Ikigai | `.../e51d4725.../16.png` (fond gris foncé) |
| Boom Boom Dance | `.../df91bb92.../18.png` (orange + cœur rose) |
| Hopla | `.../3b1fd231.../Site+web+logo.png` (ovale "HOPELA") |
| Napperon | `.../99e9ece9.../4.png` (noir motif fleur) |
| SLF | `.../64a54fb3.../19.png` (vert lettres blanches) |

## Étapes

1. Télécharger les 6 PNG dans `/tmp/` via `curl`.
2. Uploader chacun via `lovable-assets create --file ... --filename <slug>.png` et écrire les pointeurs dans `src/assets/clients-accompagnement/{atelier-tiket,ikigai,boom-boom-dance,hopla,napperon,slf}.png.asset.json`.
3. Modifier `src/components/...` — en fait section `ClientsBand` dans `src/routes/accompagnement-communication.tsx` (lignes 109-148) :
   - Remplacer le tableau `clients` par `{ name, logo, alt }` important les 6 `.asset.json`.
   - Remplacer le `<span>` stylé par `<img src={c.logo} alt={c.alt} className="max-h-12 w-auto object-contain" loading="lazy" />`.
   - Garder la grille `grid-cols-2 md:grid-cols-6`, la hauteur `h-16` et le titre inchangés.

## Hors-scope

- Pas de changement du wording du titre ni du layout (couleurs, espacements identiques).
- Pas de modification des autres mentions "Atelier Tiket" plus bas dans la page (témoignages).
