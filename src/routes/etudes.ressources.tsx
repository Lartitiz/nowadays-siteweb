import { createFileRoute } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { CtaFinal } from "@/components/da/CtaFinal";
import { VichyBand } from "@/components/da/VichyBand";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import logo from "@/assets/etudes/ressources/logo.png.asset.json";
import imgUnnamed from "@/assets/etudes/ressources/unnamed.jpg.asset.json";
import imgEquipe from "@/assets/etudes/ressources/equipe.png.asset.json";
import imgBureau from "@/assets/etudes/ressources/bureau-ressources.png.asset.json";
import imgInterview from "@/assets/etudes/ressources/interview-emmanuelle.jpg.asset.json";
import imgStrategie from "@/assets/etudes/ressources/strategie.png.asset.json";
import imgSocial from "@/assets/etudes/ressources/social-media.png.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/ressources")({
  head: () => ({
    meta: [
      { title: "Ressources Green | Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "Quand un traiteur bio et durable devient un laboratoire d'idées ; branding, site web, social media.",
      },
      { property: "og:title", content: "Ressources Green | Étude de cas | Nowadays" },
      {
        property: "og:description",
        content:
          "Quand un traiteur bio et durable devient un laboratoire d'idées ; branding, site web, social media.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/ressources") },
      { property: "og:image", content: absoluteUrl(logo.url) },
      { name: "twitter:image", content: absoluteUrl(logo.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/ressources") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Ressources Green",
  logo: { src: logo.url, alt: "Ressources Green" },
  title: "Quand un traiteur bio et durable devient un laboratoire d'idées",
  subtitle:
    "Découvrez la campagne de communication digitale (branding, site web, social media). Vous souhaitez vous développer sur le web ?",
  ctaHref: "https://calendly.com/laetitia-mattioli/30-min-de-diagnostic-offert",
  context: {
    paragraphs: [
      "Emmanuelle Riboud avait tout d'un laboratoire d'innovation en cuisine durable, mais communiquait encore comme un traiteur de quartier. En 4 mois, nous avons repositionné Ressources Green de A à Z : stratégie de marque, personal branding, formation complète de l'équipe.",
      "Résultat : une fondatrice qui ose enfin incarner sa marque, un message clair, et les outils pour passer à l'échelle en toute autonomie.",
      "Ressources Green, c'est l'histoire d'Emmanuelle Riboud, cheffe écoresponsable passionnée par la transmission d'une cuisine durable. Une cuisine qui relie l'alimentation à l'humain, qui questionne nos pratiques, qui forme et qui transforme.",
    ],
    image: { src: imgUnnamed.url, alt: "Ressources Green | atelier cuisine" },
  },
  solutions: [
    {
      title: "Le problème : l'écart entre ce qu'ils étaient et ce qu'ils montraient",
      paragraphs: [
        "« Ils avaient tout d'un laboratoire d'innovation, mais communiquaient encore comme un traiteur de quartier. »",
        "Leur message ne reflétait pas l'ampleur de leur expertise. Emmanuelle restait dans l'ombre alors qu'elle EST la marque. La communication B2C écrasait leur potentiel B2B, et il manquait des outils pour convaincre entreprises, institutions et acteurs de la restauration collective.",
      ],
      images: [
        { src: imgBureau.url, alt: "Bureau Ressources Green" },
        { src: imgEquipe.url, alt: "Équipe Ressources Green" },
      ],
      imageLayout: "grid",
    },
    {
      title: "La stratégie : un repositionnement qui change tout",
      paragraphs: [
        "Nous avons conçu une stratégie en 2 axes, pensée pour refléter enfin ce qu'ils étaient vraiment :",
        "Axe 1 · Repositionnement de marque : de « traiteur bio » à « laboratoire pour la transmission d'une cuisine durable ».",
        "Axe 2 · Personal branding : faire d'Emmanuelle la porte-parole visible de la cuisine durable.",
      ],
      images: [{ src: imgStrategie.url, alt: "Stratégie Ressources Green" }],
    },
    {
      title: "Axe 1 | Repositionnement de marque",
      paragraphs: [
        "Clarification du message : pédagogie, actions concrètes, effets durables et positifs.",
        "Nouvelle proposition de valeur : Ressources Green comme créateur de ressources et d'actions, pas simplement fournisseur de repas.",
        "Définition des audiences : B2B entreprises, restauration collective, partenaires institutionnels, B2C engagé.",
        "Création d'une charte graphique et d'une ligne éditoriale alignées avec cette nouvelle dimension.",
      ],
    },
    {
      title: "Axe 2 | Personal branding",
      paragraphs: [
        "Stratégie LinkedIn et Instagram pour positionner Emmanuelle comme experte de référence.",
        "Storytelling autour de son parcours, ses convictions, sa vision.",
        "Contenus pédagogiques qui prouvent son expertise (pas de l'auto-promo, de la transmission).",
      ],
      images: [{ src: imgInterview.url, alt: "Interview Emmanuelle Riboud" }],
    },
    {
      title: "L'exécution | sur 4 mois",
      paragraphs: [
        "Mois 1-2 · Stratégie & Branding : audit complet, charte graphique, ligne éditoriale, stratégie d'acquisition, parcours client optimisé.",
        "Mois 2-3 · Site web & SEO : audit du site, propositions de refonte alignées sur le nouveau branding, optimisations SEO, mise en place d'analytics et de KPIs.",
        "Mois 3-4 · Social Media & Personal Branding : stratégie Instagram et LinkedIn, templates réutilisables, prise de parole pour Emmanuelle, checklist d'engagement.",
      ],
      images: [{ src: imgSocial.url, alt: "Social media Ressources Green" }],
    },
    {
      title: "La transformation : où ils en sont",
      paragraphs: [
        "Aujourd'hui, Ressources Green n'est plus un traiteur de quartier. C'est un laboratoire reconnu, avec une vision claire, une fondatrice visible, et des outils pour passer à l'échelle.",
        "Emmanuelle se sent alignée. Elle sait comment communiquer sans avoir l'impression de « vendre ». Elle incarne sa marque publiquement, et ça change tout.",
        "L'équipe a gagné plusieurs années grâce à ce repositionnement : ils savent où ils vont, comment y aller, et avec quels outils. Ils ne se cachent plus.",
      ],
    },
  ],
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
