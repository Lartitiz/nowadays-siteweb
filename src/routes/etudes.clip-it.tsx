import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import cover from "@/assets/etudes-pro/clip-it.jpg.asset.json";

export const Route = createFileRoute("/etudes/clip-it")({
  head: () => ({
    meta: [
      { title: "Clip It — Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "Site, SEO et stratégie d'influence pour Clip It, jeu de construction éco-responsable en plastique recyclé fabriqué en France. 50 micro-influenceur·ses alignés.",
      },
      { property: "og:title", content: "Clip It — Étude de cas" },
      {
        property: "og:description",
        content:
          "Quand un jeu engagé trouve sa voix digitale : site, SEO et influence.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/etudes/clip-it" },
      { property: "og:image", content: cover.url },
      { name: "twitter:image", content: cover.url },
    ],
    links: [{ rel: "canonical", href: "/etudes/clip-it" }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Clip It",
  logo: { src: cover.url, alt: "Clip It" },
  title: "Clip It, quand un jeu engagé trouve sa voix digitale",
  subtitle: "Site, SEO et influence pour un jeu de construction éco-responsable.",
  context: {
    paragraphs: [
      "Clip It, c'est un jeu né du recyclage, qui apprend aux enfants à créer plutôt qu'à consommer : un jeu de construction éco-responsable en plastique recyclé, pensé dès 4-5 ans et fabriqué en France. Le principe est simple — des clips permettent d'assembler des bouchons recyclés, et le geste du tri devient jeu.",
      "La marque voulait non seulement vendre, mais aussi sensibiliser : motricité fine, imagination, recyclage. Le fond était fort, mais le site ne racontait pas encore assez bien l'histoire — architecture SEO fragile, message « éco-responsable » pas assez mis en avant, potentiel d'influence non structuré.",
      "Le défi : traduire cette ambition dans une présence digitale claire, optimisée et engageante, sans perdre l'âme artisanale de la marque.",
    ],
  },
  solutions: [
    {
      title: "Un socle SEO solide",
      paragraphs: [
        "Audit complet autour des mots-clés du secteur (jouet éco-responsable, jeu de motricité fine, jeu en plastique recyclé).",
        "Architecture de site optimisée en silos thématiques, maillage interne, balises titres, méta-descriptions et textes alternatifs des images.",
      ],
    },
    {
      title: "Un site et un tunnel de conversion",
      paragraphs: [
        "Réarchitecture autour de 3 piliers : jeux éco-responsables, espace éducation, solutions pro.",
        "Un parcours clair — découverte → choix → conversion — qui met en avant les preuves sociales et les valeurs (fabrication française, plastique recyclé).",
      ],
    },
    {
      title: "Une stratégie d'influence alignée",
      paragraphs: [
        "Sélection d'influenceur·ses cohérent·es avec la marque (parents, enseignant·es, animateur·ices), relations pensées sur le long terme autour de contenus utiles.",
        "Suivi via codes promo et engagement, piloté par un tableau de bord partagé des partenariats.",
      ],
    },
  ],
  results: {
    intro:
      "Une présence digitale qui raconte enfin l'histoire de la marque — et un réseau d'ambassadeur·ices activable.",
    items: [
      { value: "50", label: "Micro-influenceur·ses aligné·es sélectionné·es" },
      { value: "3", label: "Piliers thématiques structurant le site" },
      { value: "SEO", label: "Architecture complète optimisée" },
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
