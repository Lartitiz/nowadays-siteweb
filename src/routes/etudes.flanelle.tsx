import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import cover from "@/assets/etudes/flanelle-atelier-styliste.jpg.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/flanelle")({
  head: () => ({
    meta: [
      { title: "Flanelle — Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "D'atelier artisanal inspirant à marque incarnée et désirable : positionnement, plateforme de marque, direction artistique et stratégie de contenu pour Flanelle.",
      },
      { property: "og:title", content: "Flanelle — Étude de cas | Nowadays" },
      {
        property: "og:description",
        content:
          "D'atelier artisanal inspirant à marque incarnée et désirable : positionnement, plateforme de marque, direction artistique et stratégie de contenu pour Flanelle.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/flanelle") },
      { property: "og:image", content: absoluteUrl(cover.url) },
      { name: "twitter:image", content: absoluteUrl(cover.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/flanelle") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Flanelle, l'Atelier de Styliste",
  logo: { src: cover.url, alt: "Flanelle, l'Atelier de Styliste" },
  title: "D'atelier artisanal inspirant à marque incarnée et désirable",
  subtitle:
    "Comment on a posé les fondations d'une marque d'upcycling joyeuse, accessible et mémorable, pour des femmes libres qui aiment la couleur.",
  context: {
    paragraphs: [
      "Flanelle, c'est un atelier-boutique au cœur du 11e arrondissement de Paris qui donne une seconde vie aux textiles oubliés. Torchons brodés, linge ancien, tissus chinés : tout est transformé en pièces uniques, colorées, joyeuses.",
      "Le problème ? L'univers existait de manière intuitive, mais il n'était ni lisible, ni structuré, ni visible. Une marque riche en émotion, portée par une créatrice passionnée, mais qui peinait à se faire connaître au-delà de son quartier.",
      "Trois questions à résoudre : comment rendre l'upcycling désirable sans tomber dans le discours culpabilisant ? Comment parler aux femmes de +50 ans sans cliché ? Comment être à la fois artisanale et professionnelle dans sa communication ?",
    ],
  },
  solutions: [
    {
      title: "01 — Clarification du positionnement",
      paragraphs: [
        "Structuration d'un univers qui existait déjà de façon intuitive : une marque d'upcycling joyeuse, accessible et désirable.",
        "À mi-chemin entre le DIY « bricolé » et le luxe inaccessible, avec un territoire unique autour des femmes +50, de la couleur, de la liberté et de l'artisanat.",
      ],
    },
    {
      title: "02 — Plateforme de marque complète",
      paragraphs: [
        "Mission, vision, valeurs, combats : tout ce qui donne de la profondeur.",
        "Rendre la mode plus joyeuse, responsable et humaine. Faire de l'upcycling un choix désirable, pas un compromis. Repositionner l'écologie sans culpabilité, avec du plaisir.",
      ],
    },
    {
      title: "03 — Persona précis",
      paragraphs: [
        "Une cible qui n'est pas « marketing cliché » : des femmes libres, transgénérationnelles, sensibles à l'histoire et aux matières, attirées par la couleur mais freinées par des clichés.",
        "Deux axes : la locale engagée et l'exploratrice en quête d'authenticité.",
      ],
    },
    {
      title: "04 — Direction artistique",
      paragraphs: [
        "Univers 70's, flower power, solaire. Palette colorée (zéro noir, full émotion). Style bohème, casual-chic, vivant.",
        "Chaque couleur raconte quelque chose : la framboise pour l'énergie, le jaune pour la joie, la lavande pour la douceur.",
      ],
    },
    {
      title: "05 — Refonte stratégique de la communication",
      paragraphs: [
        "Des objectifs clairs (lisibilité, cohérence, désirabilité), des canaux prioritaires (Instagram, site, Pinterest, newsletter), un rôle précis pour chaque levier.",
        "Le storytelling remis au centre de tout.",
      ],
    },
    {
      title: "06 — Recommandations concrètes activables",
      paragraphs: [
        "Formats social media (avant/après, coulisses atelier, mini tutos, carrousels narratifs), concepts créatifs (« un tissu, trois idées », défis upcycling, campagnes incarnées), améliorations du parcours d'achat sur le site.",
        "Du concret, pas de la théorie.",
      ],
    },
  ],
  results: {
    intro:
      "Avant : « couture / recyclage », écolo au sens austère, univers intuitif mais flou. Après : expérience joyeuse et créative, marque claire, incarnée, mémorable.",
    items: [
      { value: "6", label: "Chantiers stratégiques livrés" },
      { value: "1", label: "Plateforme de marque complète" },
      { value: "0", label: "Noir dans la palette" },
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
