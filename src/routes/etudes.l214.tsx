import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import cover from "@/assets/etudes-pro/l214.jpg.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/l214")({
  head: () => ({
    meta: [
      { title: "L214 — Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "Camion immersif place de la République, 50 micro-influenceur·ses, 500 000 vues et +10 000 signatures pour pousser LDC à signer l'European Chicken Commitment.",
      },
      { property: "og:title", content: "L214 — Étude de cas" },
      {
        property: "og:description",
        content: "Mobiliser avec la micro-influence : la campagne L214.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/l214") },
      { property: "og:image", content: absoluteUrl(cover.url) },
      { name: "twitter:image", content: absoluteUrl(cover.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/l214") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "L214",
  logo: { src: cover.url, alt: "L214 — Éthique & Animaux" },
  title: "Mobiliser avec la micro-influence : la campagne L214",
  subtitle:
    "Pour inciter des enseignes agroalimentaires à s'engager contre les pires pratiques d'élevage et d'abattage de poulet.",
  context: {
    paragraphs: [
      "Quand L214 veut faire bouger les géants de l'agroalimentaire (Le Gaulois, Marie, Maître Coq…), il faut une stratégie à la hauteur de l'urgence.",
      "Nous avions en ligne de mire le géant agroalimentaire, le groupe LDC. Derrière leurs étiquettes : des poulets génétiquement modifiés incapables de supporter leur propre poids, et l'absence totale de lumière naturelle.",
      "L'objectif était de les pousser à signer l'European Chicken Commitment : un pacte qui établit des normes éthiques pour l'élevage de poulets.",
    ],
  },
  solutions: [
    {
      title: "La stratégie : la puissance des microréseaux",
      paragraphs: [
        "Lorsque L214 nous a approchés, nous avons suggéré une nouvelle tactique : mobiliser des micro-influenceurs. Nous croyons au pouvoir des microréseaux.",
        "Puis une action choc a été conçue : installer un camion immersif, en plein Paris, sur l'avenue de la République. Objectif : reproduire les conditions d'élevage intensif. Des scènes dures à regarder, mais impossible à ignorer.",
      ],
    },
    {
      title: "L'exécution",
      paragraphs: [
        "Nous avons contacté une cinquantaine d'influenceurs choisis avec soin : TikTok, Twitch, YouTube, Instagram. Nombreux ont répondu à l'appel pour cette campagne en pro-bono.",
        "Les micro-influenceurs, présents sur place, ont relayé en direct. Près d'un demi-million de personnes ont vu la campagne.",
      ],
    },
    {
      title: "La mise en place",
      paragraphs: [
        "1 dossier Influence complet, 1 pétition en ligne lancée avec une page dédiée et des campagnes de promotion, 50 influenceurs identifiés sur YouTube, Twitch, TikTok et Instagram.",
        "3 événements physiques organisés, dont un camion reproduisant les pratiques d'élevage déployé place de la République à Paris.",
        "1 stratégie sociale d'engagement mise en place, incluant un « faux jeu-concours » pour maximiser les interactions, et 1 vidéo parodique produite et diffusée sur plusieurs plateformes.",
      ],
    },
  ],
  results: {
    intro:
      "Le silence n'est plus une option : une campagne qui a fait bouger les lignes.",
    items: [
      { value: "+500K", label: "Vues sur tous les supports" },
      { value: "+10K", label: "Signatures de pétition" },
      { value: "22", label: "Créateur·ices ont relayé" },
      { value: "50K", label: "Followers en moyenne / créateur" },
    ],
  },
};

function Page() {
  return (
    <SiteLayout>
      <CaseStudy data={data} />
      <FinalCtaSection />
    </SiteLayout>
  );
}
