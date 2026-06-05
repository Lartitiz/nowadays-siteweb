import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import cover from "@/assets/etudes/ombeline-mares.jpg.asset.json";

export const Route = createFileRoute("/etudes/ombeline-mares")({
  head: () => ({
    meta: [
      { title: "Ombeline Mares — Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "Transformer une activité de création en marque de joaillerie incarnée : positionnement, manifeste éthique, direction artistique et stratégie de contenu.",
      },
      { property: "og:title", content: "Ombeline Mares — Étude de cas | Nowadays" },
      {
        property: "og:description",
        content:
          "Transformer une activité de création en marque de joaillerie incarnée : positionnement, manifeste éthique, direction artistique et stratégie de contenu.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/etudes/ombeline-mares" },
      { property: "og:image", content: cover.url },
      { name: "twitter:image", content: cover.url },
    ],
    links: [{ rel: "canonical", href: "/etudes/ombeline-mares" }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Ombeline Mares",
  logo: { src: cover.url, alt: "Ombeline Mares" },
  title: "Transformer une activité de création en marque de joaillerie incarnée",
  subtitle:
    "Positionnement, plateforme de marque, manifeste éthique, direction artistique et stratégie de contenu pour une joaillerie sensible et engagée.",
  context: {
    paragraphs: [
      "Ombeline Mares crée des bijoux d'exception : bagues sculptées à la cire perdue, pierres précieuses choisies une à une, pièces uniques pensées comme des talismans. Son savoir-faire est indiscutable.",
      "Mais son Instagram racontait une autre histoire. Des photos produit sur fond neutre, magnifiques techniquement, mais froides. Aucune narration. Aucun univers. Le bijou existait seul, hors du corps, hors du monde, hors de l'émotion.",
      "Résultat : une audience confidentielle, un engagement faible, et surtout un décalage profond entre la puissance de son travail et la perception qu'en avait le monde extérieur.",
    ],
  },
  solutions: [
    {
      title: "01 — Clarification du positionnement",
      paragraphs: [
        "Passage de « créatrice de bijoux » à « bijou comme langage intime ». Ancrage entre artisanat d'art, design contemporain et quête de sens.",
      ],
    },
    {
      title: "02 — Plateforme de marque complète",
      paragraphs: [
        "Mission, valeurs, combats, vision. Une joaillerie lucide, imparfaite mais honnête. Structuration de la stratégie de A à Z.",
      ],
    },
    {
      title: "03 — Manifeste éthique",
      paragraphs: [
        "Un manifeste qui refuse les discours creux, assume les dilemmes (diamants, or, recyclage) et pose des choix concrets.",
        "La crédibilité, pas la perfection.",
      ],
    },
    {
      title: "04 — Persona ultra-fine",
      paragraphs: [
        "Femme 30-40 ans, cultivée, sensible, en transformation. Freins psychologiques, déclencheurs d'achat, rapport émotionnel au bijou.",
        "Ce qui permet de vendre sans forcer.",
      ],
    },
    {
      title: "05 — Storytelling fondateur",
      paragraphs: [
        "Point de départ : une bague de fiançailles ratée. Frustration, dépossession, déclic, apprentissage, création.",
        "« Je crée les bijoux que je n'ai pas trouvés. »",
      ],
    },
    {
      title: "06 — Direction artistique",
      paragraphs: [
        "Univers botanique, animal, mythologique. Matières brutes : lin, cire, peau, pierre.",
        "Lumière douce, gestes du quotidien, intimité. Chaque élément visuel sert le sens.",
      ],
    },
    {
      title: "07 — Stratégie de contenu",
      paragraphs: [
        "Trois piliers : bijou symbole (émotion, talismans), artisanat incarné (geste, matière, savoir-faire), éthique & élégance (réflexion, vision).",
        "Cohérent et profond.",
      ],
    },
    {
      title: "08 — Repositionnement de l'offre",
      paragraphs: [
        "Bijou de collection (accessible, porteur de sens), sur-mesure (forte valeur émotionnelle), logique de transmission.",
        "On sort du produit pour entrer dans l'expérience intime.",
      ],
    },
  ],
  results: {
    intro:
      "Avant : « créatrice de bijoux », photos produit froides, luxe ostentatoire, discours éthique lisse. Après : bijou comme langage intime, univers sensoriel et incarné, luxe sensible et symbolique, manifeste assumant les zones grises.",
    items: [
      { value: "8", label: "Chantiers stratégiques" },
      { value: "1", label: "Manifeste éthique" },
      { value: "3", label: "Piliers de contenu" },
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
