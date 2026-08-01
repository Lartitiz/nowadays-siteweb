// Liens sortants de la page d'accueil, regroupés pour n'avoir qu'un endroit à
// changer si l'agenda ou un article de presse bouge.

export const CALENDLY_URL = "https://calendly.com/laetitia-mattioli/30-min-de-diagnostic-offert";

export const ASSISTANT_URL = "https://nowadays-assistant.fr";

export const PRESSE = [
  {
    nom: "L'ADN",
    href: "https://www.ladn.eu/adn-business/experts-metiers/marketing/marketing-strategique/future-of-influence/comment-reussir-programme-dambassadeurs-marque/",
    src: "/images/home/presse-ladn.png",
    hauteur: 40,
  },
  {
    nom: "e-marketing.fr",
    href: "https://www.e-marketing.fr/Thematique/academie-1078/webreportage-10162/Laetitia-Mattioli-Fondatrice-nowadays-Agency-330712.htm",
    src: "/images/home/presse-emarketing.png",
    hauteur: 44,
  },
  {
    nom: "Le Bonbon",
    href: "https://www.lebonbon.fr/paris/loisirs/marche-ecolo-nowadays-market-jardin-21/",
    src: "/images/home/presse-lebonbon.png",
    hauteur: 38,
  },
] as const;
