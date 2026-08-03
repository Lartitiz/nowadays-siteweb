// Index des études de cas : la seule source de vérité pour savoir quel projet
// suit lequel, et vers quelle offre chaque projet renvoie.
//
// Pourquoi ce fichier : les 18 études étaient des culs-de-sac. Un seul lien
// entrant (depuis leur page de liste), zéro lien sortant hors menu. Le
// visiteur qui arrivait sur un projet par Google n'avait aucun chemin vers le
// projet suivant ni vers l'offre correspondante.
//
// Chaque étude appartient à UNE famille, celle de sa page de liste d'origine
// (le `backTo` de sa route ; par défaut `/creatrices-ethiques`). Quatre études
// sont aussi affichées sur l'autre page de liste — elles restent rattachées à
// leur famille d'origine, sinon elles apparaîtraient deux fois dans la
// navigation. L'ordre reprend celui de la page de liste.
//
// `as const` n'est pas décoratif : les études sont des routes STATIQUES
// (`/etudes/l214`), pas une route dynamique `$slug`. Sans les chemins en
// littéraux, `<Link to={...}>` ne type-checke pas.

const FAMILIES = {
  pro: {
    listingPath: "/etudes-de-cas-pro",
    listingLabel: "Tous les projets engagés",
    offerPath: "/cooperative-asso",
    offerLabel: "Déléguez votre com'",
    entries: [
      { path: "/etudes/ensad", brand: "École des Arts Décoratifs", teaser: "Réseaux sociaux, emailing et micro-influence" },
      { path: "/etudes/sea-shepherd", brand: "Sea Shepherd", teaser: "Stratégie social media" },
      { path: "/etudes/emmaus-defi", brand: "Emmaüs Défi", teaser: "Atelier de personal branding" },
      { path: "/etudes/clip-it", brand: "Clip It", teaser: "Un jeu engagé qui trouve sa voix digitale" },
      { path: "/etudes/l214", brand: "L214", teaser: "Mobiliser avec la micro-influence" },
      { path: "/etudes/cooperative-oasis", brand: "Coopérative Oasis", teaser: "Donner de la voix à un écosystème d'écolieux" },
      { path: "/etudes/okahina-wave", brand: "Okahina Wave", teaser: "Lancer une start-up écoresponsable" },
      { path: "/etudes/atelier-des-lunettes", brand: "L'Atelier des Lunettes", teaser: "Communication et marketing digital" },
      { path: "/etudes/elvezia", brand: "Elvezia", teaser: "D'un distributeur à une marque premium incarnée" },
    ],
  },
  creatrices: {
    listingPath: "/creatrices-ethiques",
    listingLabel: "Toutes les créatrices accompagnées",
    offerPath: "/accompagnement-communication",
    offerLabel: "Ta binôme de com'",
    entries: [
      { path: "/etudes/black-stallion-trading", brand: "Black Stallion Trading", teaser: "Notoriété d'un showroom à New York" },
      { path: "/etudes/fat-moose", brand: "Fat Moose", teaser: "Lancement d'une marque de mode" },
      { path: "/etudes/ressources", brand: "Ressources", teaser: "Branding, site web et social media" },
      { path: "/etudes/jean-belgueule", brand: "Jean Belgueule", teaser: "Communication digitale pour la cosmétique bio" },
      { path: "/etudes/religion-clothing", brand: "Religion Clothing", teaser: "Lancement de produit et partenariats" },
      { path: "/etudes/still-nordic", brand: "Still Nordic", teaser: "Social media et branding" },
      { path: "/etudes/my-pilates-world", brand: "My Pilates World", teaser: "Une stratégie digitale musclée" },
      { path: "/etudes/flanelle", brand: "Flanelle", teaser: "D'atelier artisanal à marque désirable" },
      { path: "/etudes/ombeline-mares", brand: "Ombeline Mares", teaser: "D'une activité de création à une marque de joaillerie" },
    ],
  },
} as const;

type Family = (typeof FAMILIES)[keyof typeof FAMILIES];
export type EtudeEntry = Family["entries"][number];

export type EtudeNeighbours = {
  current: EtudeEntry;
  prev: EtudeEntry;
  next: EtudeEntry;
  listingPath: Family["listingPath"];
  listingLabel: string;
  offerPath: Family["offerPath"];
  offerLabel: string;
};

/**
 * Renvoie les voisins d'une étude dans sa famille, en boucle (la dernière est
 * suivie de la première). Null si le chemin est inconnu : la navigation ne
 * s'affiche pas, plutôt que d'afficher des liens faux.
 */
export function getEtudeNeighbours(pathname: string): EtudeNeighbours | null {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  for (const family of Object.values(FAMILIES) as Family[]) {
    const entries = family.entries as readonly EtudeEntry[];
    const i = entries.findIndex((e) => e.path === clean);
    if (i === -1) continue;
    const n = entries.length;
    if (n < 2) return null;
    return {
      current: entries[i],
      prev: entries[(i - 1 + n) % n],
      next: entries[(i + 1) % n],
      listingPath: family.listingPath,
      listingLabel: family.listingLabel,
      offerPath: family.offerPath,
      offerLabel: family.offerLabel,
    };
  }
  return null;
}

/** Tous les chemins indexés — sert au contrôle de cohérence avec les routes. */
export function allEtudePaths(): string[] {
  return Object.values(FAMILIES).flatMap((f) => f.entries.map((e) => e.path));
}
