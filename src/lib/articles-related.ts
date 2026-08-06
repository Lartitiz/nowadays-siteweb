// Choix des 3 articles « À lire aussi ».
//
// Le bloc affichait `allArticles.slice(0, 3)` : les 3 articles les plus
// récents, identiques au bas de CHAQUE article. Résultat mesuré le 03/08 :
// 3 articles recevaient 13 liens internes, les 10 autres un seul. Tout le jus
// interne se déversait au même endroit et les articles de fond restaient
// invisibles.
//
// Les articles n'ont ni étiquette ni catégorie en base : on écrit donc la
// parenté à la main. Ils sont 14 et stables. Pour tout slug absent de la table
// (article ajouté plus tard), on retombe sur une rotation : les 3 articles qui
// suivent dans la liste, en boucle. Ce n'est pas thématique, mais ça reste
// équilibré — jamais deux fois les mêmes.

const RELATED: Record<string, string[]> = {
  // Choisir une agence / la posture éthique
  "agence-communication-engagee": [
    "communication-ethique",
    "alternative-formation-instagram",
    "creatrice-ethique-communication",
  ],
  // Se faire accompagner : quel format choisir, et à quel prix
  "alternative-formation-instagram": [
    "agence-communication-engagee",
    "creatrice-ethique-communication",
    "brand-content",
  ],
  "communication-ethique": [
    "agence-communication-engagee",
    "vocabulaire-marketing-responsable",
    "influence-ethique",
  ],
  "vocabulaire-marketing-responsable": [
    "communication-ethique",
    "agence-communication-engagee",
    "brand-content",
  ],
  "communication-durable": [
    "influence-recit-ecologie",
    "packagings-eco-responsable-mode",
    "communication-ethique",
  ],

  // Influence
  "communication-influence": [
    "influenceur-virtuel",
    "influence-ethique",
    "visibilite-presse-partenariat",
  ],
  "influence-ethique": [
    "communication-influence",
    "influenceur-virtuel",
    "influence-recit-ecologie",
  ],
  "influenceur-virtuel": [
    "communication-influence",
    "influence-ethique",
    "visibilite-presse-partenariat",
  ],
  "influence-recit-ecologie": [
    "communication-durable",
    "influence-ethique",
    "communication-influence",
  ],
  "visibilite-presse-partenariat": [
    "communication-influence",
    "influenceur-virtuel",
    "agence-communication-engagee",
  ],

  // Marques, créatrices, contenu
  "brand-content": [
    "exemples-communication-mode",
    "creatrice-ethique-communication",
    "vocabulaire-marketing-responsable",
  ],
  "creatrice-ethique-communication": [
    "alternative-formation-instagram",
    "exemples-communication-mode",
    "agence-communication-engagee",
  ],
  "exemples-communication-mode": [
    "brand-content",
    "packagings-eco-responsable-mode",
    "creatrice-ethique-communication",
  ],
  "packagings-eco-responsable-mode": [
    "exemples-communication-mode",
    "communication-durable",
    "brand-content",
  ],
};

/**
 * Renvoie jusqu'à `count` articles à proposer en fin de lecture.
 *
 * Les articles choisis à la main passent en premier (dans l'ordre écrit), et
 * on complète par rotation s'il en manque — un article de la table peut avoir
 * été dépublié, et un nouvel article n'y est pas encore.
 */
export function pickRelated<T extends { slug: string }>(
  currentSlug: string,
  articles: T[],
  count = 3,
): T[] {
  const others = articles.filter((a) => a.slug !== currentSlug);
  if (others.length <= count) return others;

  const bySlug = new Map(others.map((a) => [a.slug, a]));
  const picked: T[] = [];
  const seen = new Set<string>();

  for (const slug of RELATED[currentSlug] ?? []) {
    const a = bySlug.get(slug);
    if (a && !seen.has(slug)) {
      picked.push(a);
      seen.add(slug);
    }
    if (picked.length === count) return picked;
  }

  // Rotation : on repart de la position de l'article courant dans la liste,
  // pour que deux articles voisins ne proposent pas la même chose.
  const start = Math.max(articles.findIndex((a) => a.slug === currentSlug), 0);
  for (let i = 0; i < others.length && picked.length < count; i++) {
    const a = others[(start + i) % others.length];
    if (!seen.has(a.slug)) {
      picked.push(a);
      seen.add(a.slug);
    }
  }
  return picked;
}
