import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import cover from "@/assets/etudes-pro/cooperative-oasis.jpg.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/cooperative-oasis")({
  head: () => ({
    meta: [
      { title: "Coopérative Oasis — Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "Stratégie de communication pour la Coopérative Oasis, écosystème d'écolieux : identité, storytelling et community management autour de son festival.",
      },
      { property: "og:title", content: "Coopérative Oasis — Étude de cas" },
      {
        property: "og:description",
        content:
          "Donner de la voix à un écosystème d'écolieux qui bâtissent un autre modèle de société.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/cooperative-oasis") },
      { property: "og:image", content: absoluteUrl(cover.url) },
      { name: "twitter:image", content: absoluteUrl(cover.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/cooperative-oasis") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Coopérative Oasis",
  logo: { src: cover.url, alt: "Coopérative Oasis" },
  title: "Donner de la voix à un écosystème d'écolieux",
  subtitle: "Stratégie de communication pour le festival de la Coopérative Oasis.",
  context: {
    paragraphs: [
      "La Coopérative Oasis fédère un écosystème d'écolieux qui bâtissent, concrètement, un autre modèle de société. Un projet dense, porteur de sens — mais dont l'ampleur peut rendre le message difficile à incarner clairement.",
      "Nous avons accompagné la Coopérative Oasis sur sa stratégie de communication autour de son festival : rendre le projet lisible, désirable et mobilisateur.",
    ],
  },
  solutions: [
    {
      title: "Identité",
      paragraphs: [
        "Poser une identité claire et cohérente pour l'événement, à la hauteur des valeurs du réseau.",
      ],
    },
    {
      title: "Storytelling",
      paragraphs: [
        "Structurer le récit du festival et des écolieux pour le rendre concret et incarné, plutôt qu'abstrait.",
      ],
    },
    {
      title: "Community management",
      paragraphs: [
        "Animer la communauté et faire vivre le festival sur les réseaux, avant, pendant et après l'événement.",
      ],
    },
  ],
};

function Page() {
  return (
    <SiteLayout>
      <CaseStudy data={data} />
      <FinalCtaSection />
    </SiteLayout>
  );
}
