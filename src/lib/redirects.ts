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
  // Études présentes dans l'ancien sitemap mais oubliées au premier passage
  // (mêmes slugs, elles vivent désormais sous /etudes/).
  "flanelle",
  "my-pilates-world",
  "ressources",
];

// Pages éditoriales dont l'URL a changé ou disparu à la refonte. On les
// renvoie vers leur équivalent le plus proche pour ne pas casser le SEO ni
// l'expérience (aucune ne doit tomber en 404 après la bascule du domaine).
const EDITORIAL_REDIRECTS: Record<string, string> = {
  // Étude de cas dont le slug a changé (ombeline → ombeline-mares).
  "/ombeline": "/etudes/ombeline-mares",
  // La démarche éthique « Faire mieux, pas plus » (ancien /communication-ethique).
  "/communication-ethique": "/demarche-ethique",
  // Ancienne page d'accueil SEO → nouvelle home.
  "/agence-communication-ethique": "/",
  // Index des études de cas asso/coopératives/PME.
  "/etude-de-cas-ethique": "/etudes-de-cas-pro",
  // La politique de confidentialité est désormais intégrée aux mentions légales.
  "/politique-confidentialite": "/mentions-legales",
  // Offre « binôme » supprimée → on renvoie vers l'accompagnement.
  "/coaching-communication": "/accompagnement-communication",
  // Liens laissés dans le TEXTE des articles de blog (base Supabase) et
  // hérités de Squarespace : ils tombaient tous en 404 depuis que les liens
  // des articles sont cliquables. On les renvoie vers l'équivalent actuel.
  // Les deux anciennes offres à la carte sont reprises par l'accompagnement
  // « ta binôme de com ».
  "/accompagnement-instagram": "/accompagnement-communication",
  "/accompagnement-strategie-digitale": "/accompagnement-communication",
  // Le manifeste a été fusionné dans la démarche éthique (deux pages minces
  // sur le même terrain sémantique, qui ne se citaient que l'une l'autre).
  "/manifeste": "/demarche-ethique",
  // Anciens contenus devenus des ressources gratuites.
  "/formation-branding": "/template-branding",
  "/storytelling-etape-par-etape": "/guide-storytelling",
};

const REDIRECTS: Record<string, string> = {
  ...Object.fromEntries(
    LEGACY_CASE_STUDIES.map((slug) => [`/${slug}`, `/etudes/${slug}`]),
  ),
  ...EDITORIAL_REDIRECTS,
};

// Renvoie le chemin cible d'une redirection 301, ou null si le chemin n'a pas
// bougé. Tolère un éventuel slash final.
export function getRedirect(pathname: string): string | null {
  const clean =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  return REDIRECTS[clean] ?? null;
}
