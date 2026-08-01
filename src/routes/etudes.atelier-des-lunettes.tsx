import { createFileRoute } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { CtaFinal } from "@/components/da/CtaFinal";
import { VichyBand } from "@/components/da/VichyBand";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import cover from "@/assets/etudes-pro/atelier-des-lunettes.webp.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/atelier-des-lunettes")({
  head: () => ({
    meta: [
      { title: "Atelier des Lunettes | Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "Stratégie social media, site vitrine et manifeste de marque pour une boutique de lunettes de créateurs : +46 % de reach, première page SEO, +2 000 followers.",
      },
      { property: "og:title", content: "Atelier des Lunettes | Étude de cas" },
      {
        property: "og:description",
        content: "Faire passer un cap à une boutique de lunettes de créateurs.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/atelier-des-lunettes") },
      { property: "og:image", content: absoluteUrl(cover.url) },
      { name: "twitter:image", content: absoluteUrl(cover.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/atelier-des-lunettes") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Atelier des Lunettes",
  logo: { src: cover.url, alt: "Atelier des Lunettes" },
  title: "Communication et marketing digital pour opticiens",
  subtitle:
    "Faire connaître Atelier des Lunettes, une boutique de lunettes de créateurs, grâce à une stratégie de communication digitale.",
  context: {
    paragraphs: [
      "Atelier des Lunettes, une boutique spécialisée dans les lunettes de créateurs, souhaitait passer un cap.",
      "L'objectif ? Affirmer son positionnement face à une concurrence bien établie tout en améliorant sa présence digitale pour séduire de nouveaux clients et renforcer son image.",
    ],
  },
  solutions: [
    {
      title: "Une stratégie qui voit loin sur les réseaux sociaux",
      paragraphs: [
        "Nous avons optimisé et développé leur présence sur Instagram, Facebook et LinkedIn avec des calendriers éditoriaux soignés, pensés pour refléter leur univers créatif et leur savoir-faire.",
      ],
    },
    {
      title: "Un site vitrine pour clarifier l'image de marque",
      paragraphs: [
        "Du contenu sur mesure pour le site web, mêlant storytelling et design épuré, pour une expérience cohérente avec un positionnement haut de gamme.",
      ],
    },
    {
      title: "Mettre ses valeurs de marque en pleine lumière",
      paragraphs: [
        "Conception et rédaction d'un manifeste de marque : une déclaration forte qui incarne valeurs, expertise et engagement.",
      ],
    },
    {
      title: "Des visuels Instagram à couper le flou",
      paragraphs: [
        "Une identité visuelle forte et cohérente pour le flux Instagram, transformant le compte en galerie d'inspiration qui respire le design et l'élégance.",
      ],
    },
  ],
  results: {
    intro: "Une marque qui voit clair, et qui rayonne au-delà de sa boutique parisienne.",
    items: [
      { value: "+46 %", label: "Reach sur les médias sociaux" },
      { value: "1ʳᵉ", label: "Page SEO sur « lunette paris »" },
      { value: "+2 000", label: "Followers Instagram" },
      { value: "6 %", label: "Taux d'engagement" },
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
