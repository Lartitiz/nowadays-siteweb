import { createFileRoute } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { CtaFinal } from "@/components/da/CtaFinal";
import { VichyBand } from "@/components/da/VichyBand";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import cover from "@/assets/etudes-pro/okahina-wave.jpg.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/okahina-wave")({
  head: () => ({
    meta: [
      { title: "Okahina Wave | Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "1 500 personnes touchées chaque semaine et 2 000 visiteurs uniques pour la start-up des vagues artificielles : LinkedIn, blog et 10 influenceurs surf.",
      },
      { property: "og:title", content: "Okahina Wave | Étude de cas" },
      {
        property: "og:description",
        content: "Stratégie de communication digitale pour une marque éthique en lancement.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/okahina-wave") },
      { property: "og:image", content: absoluteUrl(cover.url) },
      { name: "twitter:image", content: absoluteUrl(cover.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/okahina-wave") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  backTo: "/etudes-de-cas-pro",
  brand: "Okahina Wave",
  logo: { src: cover.url, alt: "Okahina Wave" },
  title: "Communication pour Okahina Wave, marque engagée",
  subtitle:
    "Comment développer une stratégie de communication digitale pour une marque éthique en lancement ?",
  context: {
    paragraphs: [
      "Okahina Wave, start-up visionnaire spécialisée dans les vagues artificielles écoresponsables, cherchait à surfer sur le digital.",
      "L'objectif ? Améliorer sa présence web pour mieux se faire connaître, tout en bâtissant une image solide et désirable.",
    ],
  },
  solutions: [
    {
      title: "Community management : cap sur les réseaux sociaux",
      paragraphs: [
        "Nous avons pris les commandes des comptes Twitter et LinkedIn d'Okahina Wave. Le but : créer une voix et engager des conversations autour de l'innovation, du surf et de l'écologie.",
      ],
    },
    {
      title: "Gestion du blog : raconter leur histoire",
      paragraphs: [
        "Nous avons animé leur blog avec des articles sur l'impact environnemental, les innovations technologiques et l'avenir du surf durable.",
      ],
    },
    {
      title: "Interview d'influenceurs surf : donner la parole aux pros",
      paragraphs: [
        "Pour renforcer leur crédibilité et leur impact, nous avons collaboré avec des personnalités reconnues dans le milieu du surf.",
      ],
    },
    {
      title: "Optimisation du site web",
      paragraphs: [
        "Nous avons revu leur site web pour le rendre plus intuitif, rapide et visuellement cohérent avec leur vision.",
      ],
    },
  ],
  results: {
    intro: "Une voix nouvelle pour une start-up qui change radicalement la façon de surfer.",
    items: [
      { value: "1,5K", label: "Personnes atteintes chaque semaine sur Twitter" },
      { value: "2K", label: "Visiteurs uniques sur le blog" },
      { value: "10", label: "Influenceurs activés" },
      { value: "50K", label: "Audience cumulée via les influenceurs" },
    ],
  },
};

function Page() {
  return (
    <DaLayout>
      <CaseStudy data={data} />
      <VichyBand />
      <CtaFinal />
    </DaLayout>
  );
}
