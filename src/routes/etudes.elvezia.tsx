import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import cover from "@/assets/etudes-pro/elvezia.jpg.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/elvezia")({
  head: () => ({
    meta: [
      { title: "Elvezia — Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "Repositionnement stratégique complet d'Elvezia : d'un distributeur de chocolat à une marque premium incarnée. Plateforme de marque, identité visuelle et stratégie 360°.",
      },
      { property: "og:title", content: "Elvezia — Étude de cas" },
      {
        property: "og:description",
        content:
          "D'un discours produit à une marque premium incarnée et stratégique.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/elvezia") },
      { property: "og:image", content: absoluteUrl(cover.url) },
      { name: "twitter:image", content: absoluteUrl(cover.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/elvezia") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Elvezia",
  logo: { src: cover.url, alt: "Elvezia" },
  title: "D'un distributeur de chocolat à une marque premium incarnée",
  subtitle:
    "Repositionnement stratégique complet pour le partenaire premium des artisans de bouche.",
  context: {
    paragraphs: [
      "Elvezia avait un énorme potentiel, mais un problème de fond : une marque invisible et mal comprise. La communication était centrée sur un seul produit au lieu d'une vision globale, l'identité visuelle était incohérente, et la force de vente manquait d'outils pour défendre un prix premium.",
      "En clair : une boîte avec un produit exceptionnel, racontée de manière trop pauvre. Notre travail : passer d'un discours produit à une marque incarnée et stratégique.",
    ],
  },
  solutionsTitle: "La méthode en 6 étapes",
  solutions: [
    {
      title: "1 · Diagnostic stratégique",
      paragraphs: [
        "Audit complet : positionnement flou, communication centrée produit, identité incohérente. On pose les fondations avant de construire.",
      ],
    },
    {
      title: "2 · Plateforme de marque",
      paragraphs: [
        "Mission, vision, valeurs, ton, piliers éditoriaux et messages clés — la colonne vertébrale qui aligne toute la communication.",
      ],
    },
    {
      title: "3 · Identité visuelle",
      paragraphs: [
        "Logo, palette chromatique, illustrations botaniques : un système visuel cohérent et résolument premium.",
      ],
    },
    {
      title: "4 · Stratégie 360°",
      paragraphs: [
        "Déploiement sur 6 canaux : Instagram, LinkedIn, emailing, site, relations presse et événements.",
      ],
    },
    {
      title: "5 · Sales enablement",
      paragraphs: [
        "Kits prêts à vendre, argumentaires prix et templates pour donner à la force de vente les outils qui défendent le positionnement premium.",
      ],
    },
    {
      title: "6 · Stratégie de recrutement",
      paragraphs: [
        "LinkedIn ciblé, cooptation, landing page dédiée et Open Day VRP pour faire grandir l'équipe autour de la nouvelle marque.",
      ],
    },
  ],
  results: {
    intro:
      "Une marque enfin à la hauteur du produit : cohérente, incarnée et outillée pour vendre.",
    items: [
      { value: "360°", label: "Stratégie déployée sur 6 canaux" },
      { value: "6", label: "Étapes, du diagnostic au recrutement" },
      { value: "1", label: "Plateforme de marque complète livrée" },
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
