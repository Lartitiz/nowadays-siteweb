import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import cover from "@/assets/etudes-pro/ensad.jpg.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/ensad")({
  head: () => ({
    meta: [
      { title: "École des Arts Décoratifs — Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "700 visiteurs en une semaine, 5 articles et plus de 100 clics vers l'événement : social media, emailing ciblé et micro-influence pour l'exposition Gérard Baudoin.",
      },
      {
        property: "og:title",
        content: "École des Arts Décoratifs — Étude de cas",
      },
      {
        property: "og:description",
        content: "Comment faire venir du monde à un événement ?",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/ensad") },
      { property: "og:image", content: absoluteUrl(cover.url) },
      { name: "twitter:image", content: absoluteUrl(cover.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/ensad") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "EnsAD",
  logo: { src: cover.url, alt: "École nationale supérieure des Arts Décoratifs" },
  title: "Communication pour l'École nationale supérieure des Arts Décoratifs",
  subtitle: "Comment faire venir du monde à un événement ?",
  context: {
    paragraphs: [
      "L'École nationale supérieure des Arts Décoratifs de Paris souhaitait attirer une audience ciblée à une exposition organisée au sein de ses murs, mettant en lumière le talent de l'artiste Gérard Baudoin.",
      "L'objectif : faire de cette exposition un véritable rendez-vous, grâce à une stratégie qui mélange influence, bouche-à-oreille et communication ciblée.",
    ],
  },
  solutions: [
    {
      title: "Social Media",
      paragraphs: [
        "Twitter, Instagram, LinkedIn, Facebook et un événement Facebook dédié. Calendriers éditoriaux millimétrés, posts engageants et teasing bien pensé… tout pour donner envie de poser son agenda et de venir découvrir l'expo.",
      ],
    },
    {
      title: "Emailing",
      paragraphs: [
        "Des campagnes ciblées pour séduire à la fois les habitués et ceux qui auraient pu passer à côté de l'info.",
      ],
    },
    {
      title: "Stratégie de micro-influence",
      paragraphs: [
        "Plutôt que de viser les stars des réseaux, nous avons misé sur des influenceurs culturels et locaux, ceux qui savent vraiment parler au bon public.",
        "Et comme rien ne vaut un réseau bien activé, nous avons formé les acteurs de l'événement (étudiant·es, professeur·es, organisateurs) pour qu'ils passent en mode ambassadeurs.",
      ],
    },
    {
      title: "Communication événementielle",
      paragraphs: [
        "L'exposition s'est invitée dans les webmagazines culturels qui comptent. Le site web de l'école s'est transformé en vitrine digitale prête à accueillir les curieux. Parutions : Le Parisien, Télérama, Connaissance des Arts, Fête de la science, Florilège, Loisiramag.",
      ],
    },
  ],
  results: {
    items: [
      { value: "700", label: "Visiteurs en une semaine" },
      { value: "5", label: "Articles publiés" },
      { value: "20K", label: "Lecteurs cumulés estimés" },
      { value: "+100", label: "Clics vers l'événement" },
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
