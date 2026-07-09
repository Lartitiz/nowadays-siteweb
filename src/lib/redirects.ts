// Redirections 301 pour préserver le SEO après la migration Squarespace.
//
// Les études de cas vivaient à la racine sur Squarespace (`/fat-moose`) et
// vivent désormais sous `/etudes/{slug}`. On renvoie un 301 permanent pour
// transférer le référencement acquis vers la nouvelle URL.
//
// Le blog garde exactement la même structure (`/blog/{slug}`) → aucune
// redirection nécessaire. Les autres pages (contact, guide-storytelling,
// formation-gratuite-instagram, creatrices-ethiques) gardent leur chemin.
const LEGACY_CASE_STUDIES = [
  "fat-moose",
  "religion-clothing",
  "okahina-wave",
  "still-nordic",
  "black-stallion-trading",
  "atelier-des-lunettes",
  "jean-belgueule",
  "ensad",
  "l214",
  "sea-shepherd",
  "emmaus-defi",
  // Études migrées depuis l'ancien Squarespace pendant la refonte (certaines
  // n'étaient plus dans le sitemap Squarespace mais restent liées ailleurs).
  "clip-it",
  "cooperative-oasis",
  "elvezia",
];

const REDIRECTS: Record<string, string> = Object.fromEntries(
  LEGACY_CASE_STUDIES.map((slug) => [`/${slug}`, `/etudes/${slug}`]),
);

// Renvoie le chemin cible d'une redirection 301, ou null si le chemin n'a pas
// bougé. Tolère un éventuel slash final.
export function getRedirect(pathname: string): string | null {
  const clean =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  return REDIRECTS[clean] ?? null;
}
