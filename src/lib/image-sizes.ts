import sizes from "./image-sizes.json";

// Dimensions réelles de chaque image du site, mesurées par
// `scripts/generate-image-sizes.py` (voir l'en-tête du script).
//
// À quoi ça sert : une balise <img> sans `width`/`height` ne dit pas au
// navigateur quelle place réserver. Le texte se met en page, puis l'image
// arrive et pousse tout vers le bas — la page « saute ». Google mesure ce
// saut (le CLS) et le compte dans le classement.
//
// Avec les deux attributs, le navigateur connaît le RATIO et réserve le bon
// bloc dès le premier rendu. La taille affichée, elle, reste pilotée par le
// CSS (`w-full`, `h-auto`) : les attributs ne figent rien à l'écran.
const SIZES: Record<string, number[]> = sizes;

export type ImageDimensions = { width: number; height: number };

/**
 * Dimensions d'une image, ou `undefined` si on ne la connaît pas — auquel cas
 * on n'écrit aucun attribut plutôt que d'en inventer un faux, qui déformerait
 * l'image.
 *
 * Tolère les URLs absolues (le contenu des articles vient de Supabase et peut
 * porter l'origine) et les paramètres de requête.
 */
export function imageSize(src: string | null | undefined): ImageDimensions | undefined {
  if (!src) return undefined;
  let path = src;
  const origin = path.match(/^https?:\/\/[^/]+(\/.*)$/);
  if (origin) path = origin[1];
  path = path.split("?")[0].split("#")[0];
  const found = SIZES[path];
  if (!found || found.length < 2) return undefined;
  return { width: found[0], height: found[1] };
}
