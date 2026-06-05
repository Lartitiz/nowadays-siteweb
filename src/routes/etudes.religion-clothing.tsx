import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type Block } from "@/components/site/CaseStudy";
import img_religion_clothing from "@/assets/etudes/religion-clothing/religion-clothing.webp.asset.json";
import img_Capture_d_e_cran_2017_12_15_a_19_37_16 from "@/assets/etudes/religion-clothing/Capture-d-e-cran-2017-12-15-a-19.37.16.png.asset.json";

export const Route = createFileRoute("/etudes/religion-clothing")({
  head: () => ({
    meta: [
      { title: "Religion Clothing — Étude de cas | Nowadays" },
      { name: "description", content: "Marque britannique née dans les années 90 — campagnes d'influence et événements." },
      { property: "og:title", content: "Religion Clothing — Étude de cas | Nowadays" },
      { property: "og:description", content: "Marque britannique née dans les années 90 — campagnes d'influence et événements." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/etudes/religion-clothing" },
        { property: "og:image", content: img_religion_clothing.url },
        { name: "twitter:image", content: img_religion_clothing.url },
    ],
    links: [{ rel: "canonical", href: "/etudes/religion-clothing" }],
  }),
  component: Page,
});

const BLOCKS: Block[] = [
  { type: "h1", text: "Comment assurer un lancement de produit avec une stratégie de partenariats événementiels ?" },
  { type: "img", src: img_religion_clothing.url, alt: "Religion Clothing" },
  { type: "h2", text: "Contexte - Objectifs" },
  { type: "p", text: "Atteindre un nouveau public parisien" },
  { type: "p", text: "Mettre en scène la robe phare de Religion" },
  { type: "h2", text: "Nowadays Solutions" },
  { type: "p", text: "Collaboration avec Anetha, une des DJs les plus influentes d'Europe" },
  { type: "p", text: "Promotion de Religion Clothing lors d'un événement techno à paris" },
  { type: "p", text: "Reportage photo et vidéo" },
  { type: "h2", text: "Résultats" },
  { type: "p", text: "+5k occasions de voir lors de la soirée" },
  { type: "p", text: "50 mentions de ReligionxAnetha sur les médias sociaux" },
  { type: "p", text: "20 contenus à diffuser" },
  { type: "img", src: img_Capture_d_e_cran_2017_12_15_a_19_37_16.url, alt: "Religion Clothing" }
];

function Page() {
  return (
    <SiteLayout>
      <CaseStudy
        brand="Religion Clothing"
        tagline="Marque britannique née dans les années 90 — campagnes d'influence et événements."
        blocks={BLOCKS}
      />
      <FinalCtaSection />
    </SiteLayout>
  );
}
