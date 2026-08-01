import { createFileRoute } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { CtaFinal } from "@/components/da/CtaFinal";
import { VichyBand } from "@/components/da/VichyBand";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import cover from "@/assets/etudes/my-pilates-world.jpg.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/my-pilates-world")({
  head: () => ({
    meta: [
      { title: "My Pilates World | Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "Une stratégie digitale musclée pour une plateforme de Pilates en ligne : branding, social media, influence, tunnel de vente et email marketing.",
      },
      { property: "og:title", content: "My Pilates World | Étude de cas | Nowadays" },
      {
        property: "og:description",
        content:
          "Une stratégie digitale musclée pour une plateforme de Pilates en ligne : branding, social media, influence, tunnel de vente et email marketing.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/my-pilates-world") },
      { property: "og:image", content: absoluteUrl(cover.url) },
      { name: "twitter:image", content: absoluteUrl(cover.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/my-pilates-world") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "My Pilates World",
  logo: { src: cover.url, alt: "My Pilates World" },
  title: "Une stratégie digitale musclée pour une marque pleine de flexibilité",
  subtitle:
    "MyPilatesWorld, plateforme de Pilates en ligne, avait une ambition de souplesse digitale. Objectif : muscler sa stratégie pour un lancement tout en fluidité.",
  context: {
    paragraphs: [
      "MyPilatesWorld est née du désir de proposer l'expérience d'un studio de Pilates… à la maison. Sa fondatrice, ancienne danseuse, partage sa passion et son expertise à travers des cours en ligne adaptés à chaque rythme.",
      "Trois objectifs prioritaires : structurer une stratégie social media performante, mieux exploiter le potentiel des influenceurs pour renforcer la visibilité, et améliorer la performance via une page de vente optimisée et une stratégie d'emailing efficace.",
      "Bref : une communication web aussi fluide qu'un enchaînement de Pilates bien exécuté (et sans courbatures, promis).",
    ],
  },
  solutions: [
    {
      title: "Penser une stratégie globale",
      paragraphs: [
        "Audit en profondeur de la marque, du marché et du parcours client pour cartographier les forces, les faiblesses et les points de friction.",
        "Puis une roadmap claire ; plan d'attaque chirurgical ; pour aligner branding, contenu, acquisition et conversion.",
      ],
    },
    {
      title: "Faire briller Instagram et Pinterest",
      paragraphs: [
        "Lifting digital des comptes : bio optimisée, highlights repensés, charte visuelle cohérente.",
        "Calendrier éditorial pensé pour inspirer, enseigner et fédérer la communauté, avec des recommandations de contenu sur 3 mois.",
        "Coaching en personal branding pour transformer la fondatrice en porte-parole accessible et incarnée de la marque.",
      ],
    },
    {
      title: "Repérer les bons alliés en influence marketing",
      paragraphs: [
        "Construction d'une base de données de +50 influenceurs qualifiés, alignés avec les valeurs de la marque, prête à activer.",
        "Brief influenceur clé en main et accompagnement opérationnel pour piloter les campagnes en autonomie.",
      ],
    },
    {
      title: "Un parcours client sans courbatures",
      paragraphs: [
        "Refonte de la structure de la page de vente : chaque clic a un objectif clair, plus personne ne se perd en chemin.",
        "Copywriting à la fois rassurant et désirable, soutenu par une preuve sociale solide (témoignages, avis, études de cas).",
      ],
    },
    {
      title: "Email marketing : parler au bon abonné, au bon moment",
      paragraphs: [
        "Stratégie d'emailing entièrement repensée pour segmenter les campagnes et adresser chaque audience selon ses besoins.",
        "Séquences automatisées et trois templates prêts à l'emploi (promo, éducatif, relance) accompagnés d'une checklist d'efficacité.",
      ],
    },
  ],
  results: {
    items: [
      { value: "+50", label: "Influenceurs qualifiés en base" },
      { value: "2", label: "Comptes optimisés (IG + Pinterest)" },
      { value: "3", label: "Templates d'emails livrés" },
      { value: "1", label: "Page de vente refondue" },
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
