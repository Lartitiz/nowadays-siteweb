import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type Block } from "@/components/site/CaseStudy";


export const Route = createFileRoute("/etudes/ressources")({
  head: () => ({
    meta: [
      { title: "Ressources — Emmanuelle Riboud — Étude de cas | Nowadays" },
      { name: "description", content: "Changer la cantine pour changer le monde — stratégie de marque et campagne d'influence éthique." },
      { property: "og:title", content: "Ressources — Emmanuelle Riboud — Étude de cas | Nowadays" },
      { property: "og:description", content: "Changer la cantine pour changer le monde — stratégie de marque et campagne d'influence éthique." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/etudes/ressources" },
    ],
    links: [{ rel: "canonical", href: "/etudes/ressources" }],
  }),
  component: Page,
});

const BLOCKS: Block[] = [
  { type: "h1", text: "Campagne Influence Marketing Éthique" },
  { type: "h2", text: "Comment inciter des enseignes agroalimentaires à s'engager contre les pires pratiques d'élevage et d'abattage de poulet ?" },
  { type: "h2", text: "L’histoire : Le jour où le vent à changé" },
  { type: "h3", text: "C’était un été caniculaire" },
  { type: "p", text: "Le soleil brûlait dans le ciel, et nous, éclairés par une flamme intérieure, prêt.es à faire bouger les choses avec L214." },
  { type: "h3", text: "L'ennemi invisible" },
  { type: "p", text: "Nous avions en ligne de mire le géant agroalimentaire, le groupe LDC." },
  { type: "p", text: "Vous connaissez peut-être leurs marques – Le Gaulois, Marie, Maître Coq – mais ce qu'on ne sait pas toujours, c'est le tableau d'horreur caché derrière leurs étiquettes." },
  { type: "p", text: "Des poulets génétiquement modifiés incapables de supporter leur propre poids..." },
  { type: "p", text: "Une souffrance animale inimaginable, et l’absence totale de lumière naturelle." },
  { type: "p", text: "Bref l'horreur..." },
  { type: "h3", text: "La mission" },
  { type: "p", text: "L’objectif était donc de les pousser à signer l'European Chicken Commitment, un pacte qui établit des normes éthiques pour l'élevage de poulets." },
  { type: "h3", text: "La stratégie" },
  { type: "p", text: "Lorsqu'ils nous ont approchés, nous avons suggéré une tactique qui changerait la donne : mobiliser des micro-influenceurs." },
  { type: "p", text: "Car dans un monde saturé par le bruit médiatique, ce sont les murmures sincères qui ont le pouvoir de crier fort." },
  { type: "h3", text: "Cap sur la République !" },
  { type: "p", text: "Alors, nous avons mis le cap sur l'avenue de la République, avec un camion reproduisant ces abominables conditions d'élevage." },
  { type: "p", text: "Une scène dure à regarder, mais impossible à ignorer." },
  { type: "h3", text: "L’exécution" },
  { type: "p", text: "Nous avons contacté une cinquantaine d’influenceurs choisis avec soin, des ambassadeurs du changement." },
  { type: "p", text: "TikTok, Twitch, YouTube, Instagram... Nombreux ont répondu à l’appel pour cette campagne en pro-bono." },
  { type: "p", text: "Près d'un demi-million de personnes ont vu la campagne." },
  { type: "p", text: "Un raz-de-marée d'engagement." },
  { type: "h2", text: "Le contexte, les objectifs" },
  { type: "p", text: "Sensibiliser le grand public aux pires pratiques d'élevage et d'abattage." },
  { type: "p", text: "Faire pression sur les enseignes agroalimentaires pour qu'elles s'engagent publiquement à améliorer les conditions de vie et d'abattage des poulets." },
  { type: "h2", text: "La campagne" },
  { type: "p", text: "Recherche & Documentation :" },
  { type: "p", text: "Rassembler des données, vidéos, et témoignages concernant les conditions d'élevage et d'abattage." },
  { type: "p", text: "Créer un dossier Influence complet avec ces informations." },
  { type: "p", text: "Partenariats avec des influenceurs :" },
  { type: "p", text: "Identification et collaboration avec des influenceurs (Youtube, Twitch, TitkTok et Instagram) engagés sur les sujets de l'éthique, du végétarisme, ou de la cause animale." },
  { type: "p", text: "Campagne sur les réseaux sociaux :" },
  { type: "p", text: "Diffusion d’une vidéo parodique avec une stratégie d’engagement sociale de “faux jeu-concours”" },
  { type: "p", text: "Pétition en ligne :" },
  { type: "p", text: "Lancement d'une pétition en ligne" },
  { type: "p", text: "Promotion de cette pétition via les réseaux sociaux et les influenceurs partenaires." },
  { type: "p", text: "Événementiel :" },
  { type: "p", text: "Organisation d'événements de sensibilisation dans plusieurs villes" },
  { type: "p", text: "Camion reproduisant les pratiques d’élevages place de la République à Paris" },
  { type: "h2", text: "Les résultats" },
  { type: "h2", text: "22 créateur.ices ont relayé" },
  { type: "h3", text: "avec 50k followers en moyenne et 10k vues en moyenne" },
  { type: "h2", text: "+500 000 vues" },
  { type: "h3", text: "sur tous les supports" },
  { type: "h2", text: "+10 000 nouvelles signatures à la pétition" },
  { type: "h3", text: "sur tous les supports" },
  { type: "h1", text: "Mentions" },
  { type: "h1", text: "Contenus créés" }
];

function Page() {
  return (
    <SiteLayout>
      <CaseStudy
        brand="Ressources — Emmanuelle Riboud"
        tagline="Changer la cantine pour changer le monde — stratégie de marque et campagne d'influence éthique."
        blocks={BLOCKS}
      />
      <FinalCtaSection />
    </SiteLayout>
  );
}
