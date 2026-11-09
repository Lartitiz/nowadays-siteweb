// Origine canonique du site. Source unique de vérité pour le sitemap, les
// URLs absolues et les redirections. Doit correspondre au domaine PRIMAIRE
// configuré dans Lovable (apex sans www ; le www doit rediriger vers l'apex).
export const SITE_ORIGIN = "https://nowadaysagency.com";

export function absoluteUrl(path: string): string {
  // Déjà absolue (image hébergée ailleurs, CDN, Supabase…) : on ne touche pas.
  if (/^(https?:)?\/\//i.test(path)) return path;
  if (path.startsWith("data:")) return path;
  // Passage par `URL` : espaces, accents ou guillemets d'un slug saisi dans
  // le back-office sont encodés. Sans ça, Google rejette le fil d'Ariane
  // (« URL non valide dans le champ id ») et les URLs du sitemap.
  return new URL(path.startsWith("/") ? path : `/${path}`, SITE_ORIGIN).href;
}
