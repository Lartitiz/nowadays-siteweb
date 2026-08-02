import { createFileRoute } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { CtaFinal } from "@/components/da/CtaFinal";
import { VichyBand } from "@/components/da/VichyBand";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import cover from "@/assets/etudes-pro/sea-shepherd.jpg.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/sea-shepherd")({
  head: () => ({
    meta: [
      { title: "Sea Shepherd | Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "Campagne #PlutôtQue pour soutenir l'appel aux dons de Sea Shepherd : un plan en 4 actes, vidéo d'archives à faible impact, actions ciblées sur Twitter, Instagram et auprès des leaders d'opinion.",
      },
      { property: "og:title", content: "Sea Shepherd | Étude de cas" },
      {
        property: "og:description",
        content: "Soutenir l'appel au don grâce à une stratégie social media.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/sea-shepherd") },
      { property: "og:image", content: absoluteUrl(cover.url) },
      { name: "twitter:image", content: absoluteUrl(cover.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/sea-shepherd") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Sea Shepherd",
  logo: { src: cover.url, alt: "Sea Shepherd × Racines de Demain" },
  title: "Stratégie social media pour Sea Shepherd",
  subtitle:
    "Soutenir l'appel au don grâce à une stratégie social media ; en collaboration avec Racines de Demain.",
  context: {
    paragraphs: [
      "Malgré une perception publique de Sea Shepherd comme une organisation fortement financée, la réalité est qu'ils dépendent principalement des dons de particuliers.",
      "L'objectif : corriger cette perception erronée et encourager davantage de dons grâce à une stratégie pertinente sur les réseaux sociaux.",
      "Trois objectifs concrets : éduquer le public sur la véritable structure financière de Sea Shepherd, encourager une augmentation des dons individuels et engager une communauté solidaire et informée.",
    ],
  },
  solutions: [
    {
      title: "#PlutôtQue, ou l'art de choisir la liberté",
      paragraphs: [
        "La campagne s'est articulée autour du concept #PlutôtQue : un hashtag qui joue sur des oppositions claires et marquantes, reflétant les valeurs et le positionnement unique de l'association. Plutôt seul que mal accompagné, plutôt traqueur que trappeur… autant de déclinaisons percutantes qui ont servi de fil conducteur.",
        "Pour limiter l'impact environnemental de la campagne, toutes les images utilisées dans la vidéo centrale provenaient des archives de l'association, assurant une cohérence visuelle tout en restant fidèle aux principes de Sea Shepherd.",
      ],
    },
    {
      title: "Un plan en 4 actes",
      paragraphs: [
        "1 · Poser les bases et informer : Sea Shepherd a partagé des informations sur sa dépendance aux dons individuels, accompagnées de teasers et pré-annonces pour éveiller la curiosité.",
        "2 · Une vidéo pour mobiliser : mêlant archives et messages forts, elle a lancé la campagne en incarnant le choix du « loup libre ».",
        "3 · Maintenir une dynamique : un live interactif a permis d'échanger avec la communauté, de répondre aux questions et de montrer l'impact des dons en temps réel.",
        "4 · Remercier et préparer la suite : la campagne s'est terminée par un appel à poursuivre le combat.",
      ],
    },
    {
      title: "Des actions ciblées pour plus d'impact",
      paragraphs: [
        "Twitter : interpellation des figures publiques et des communautés influentes.",
        "Instagram : commentaires pour encourager les conversations.",
        "Leaders d'opinion : mobiliser leur influence et étendre la portée de la campagne.",
      ],
    },
  ],
  results: {
    intro:
      "Une campagne sobre, fidèle à l'ADN de l'association, qui a remis la mécanique du don au centre.",
    items: [
      { value: "4", label: "Actes de campagne" },
      { value: "100 %", label: "Visuels issus des archives" },
      { value: "1", label: "Vidéo manifeste #PlutôtQue" },
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
