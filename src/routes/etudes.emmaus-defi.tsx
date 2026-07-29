import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import cover from "@/assets/etudes-pro/emmaus-defi.jpg.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/emmaus-defi")({
  head: () => ({
    meta: [
      { title: "Emmaüs Défi — Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "Un atelier de personal branding d'une demi-journée pour humaniser la marque : 3× plus de contenus personnalisés et des équipes à l'aise pour raconter leur histoire.",
      },
      { property: "og:title", content: "Emmaüs Défi — Étude de cas" },
      {
        property: "og:description",
        content: "Augmenter l'engagement grâce au personal branding.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/emmaus-defi") },
      { property: "og:image", content: absoluteUrl(cover.url) },
      { name: "twitter:image", content: absoluteUrl(cover.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/emmaus-defi") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Emmaüs Défi",
  logo: { src: cover.url, alt: "Emmaüs Défi" },
  title: "Atelier en communication pour Emmaüs Défi",
  subtitle: "Augmenter l'engagement grâce au personal branding.",
  context: {
    paragraphs: [
      "Emmaüs Défi, connu pour son engagement envers les personnes en situation de précarité, voulait renforcer son impact réel et toucher le cœur de sa communauté.",
      "L'idée ? Augmenter la proximité et créer plus d'interactions sur les réseaux. Bref, du vrai lien, pas juste des likes.",
      "Donner aux communicants d'Emmaüs Défi les clés d'un personal branding efficace : parce que derrière chaque marque engagée, il y a des humains. En racontant leur propre histoire, ils renforcent l'authenticité de l'organisation, créent plus de proximité et augmentent l'engagement.",
    ],
  },
  solutions: [
    {
      title: "Un atelier de personal branding",
      paragraphs: [
        "En une demi-journée, nous avons accompagné les communicants d'Emmaüs Défi à développer leur personal branding. L'objectif : leur apprendre à incarner les valeurs de l'organisation de manière authentique et engageante.",
      ],
    },
    {
      title: "Au programme",
      paragraphs: [
        "Comprendre l'importance du personal branding pour humaniser la marque.",
        "Identifier leurs forces, valeurs et passions, et les aligner avec la mission d'Emmaüs Défi.",
        "Apprendre à raconter leur histoire, engager la communauté et créer des dialogues.",
        "Concevoir du contenu personnel mais aligné avec les messages-clés de l'organisation.",
        "Mesurer l'impact et ajuster.",
      ],
    },
  ],
  results: {
    intro:
      "Une équipe outillée, autonome et prête à incarner la mission au quotidien.",
    items: [
      { value: "×3", label: "Contenus personnalisés post-atelier" },
      { value: "100 %", label: "Participants formés au personal branding" },
      { value: "1", label: "Plan de mesure & ajustement livré" },
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
