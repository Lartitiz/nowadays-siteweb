// Origine canonique du site. Source unique de vérité pour le sitemap, les
// URLs absolues et les redirections. Doit correspondre au domaine PRIMAIRE
// configuré dans Lovable (apex sans www ; le www doit rediriger vers l'apex).
export const SITE_ORIGIN = "https://nowadaysagency.com";

export function absoluteUrl(path: string): string {
  // Déjà absolue (image hébergée ailleurs, CDN, Supabase…) : on ne touche pas.
  if (/^(https?:)?\/\//i.test(path)) return path;
  if (path.startsWith("data:")) return path;
  if (!path.startsWith("/")) return `${SITE_ORIGIN}/${path}`;
  return `${SITE_ORIGIN}${path}`;
}
