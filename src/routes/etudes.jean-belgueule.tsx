import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type Block } from "@/components/site/CaseStudy";
import img_logo_jbg_jean_belgueule from "@/assets/etudes/jean-belgueule/logo-jbg-jean-belgueule.jpg.asset.json";
import img_instagram_jean_belgueule_case_study from "@/assets/etudes/jean-belgueule/instagram-jean-belgueule-case-study.webp.asset.json";
import img_Capture_d_e_cran_2018_07_11_a_13_10_32 from "@/assets/etudes/jean-belgueule/Capture-d-e-cran-2018-07-11-a-13.10.32.png.asset.json";
import img_instagram_feed from "@/assets/etudes/jean-belgueule/instagram-feed.webp.asset.json";
import img_Capture_d_e_cran_2018_07_11_a_13_09_46 from "@/assets/etudes/jean-belgueule/Capture-d-e-cran-2018-07-11-a-13.09.46.png.asset.json";

export const Route = createFileRoute("/etudes/jean-belgueule")({
  head: () => ({
    meta: [
      { title: "Jean Belgueule — Étude de cas | Nowadays" },
      { name: "description", content: "Soins pour hommes simples et éco-responsables — storytelling, identité visuelle et social media." },
      { property: "og:title", content: "Jean Belgueule — Étude de cas | Nowadays" },
      { property: "og:description", content: "Soins pour hommes simples et éco-responsables — storytelling, identité visuelle et social media." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/etudes/jean-belgueule" },
        { property: "og:image", content: img_logo_jbg_jean_belgueule.url },
        { name: "twitter:image", content: img_logo_jbg_jean_belgueule.url },
    ],
    links: [{ rel: "canonical", href: "/etudes/jean-belgueule" }],
  }),
  component: Page,
});

const BLOCKS: Block[] = [
  { type: "h1", text: "Comment développer une image de marque forte pour une marque de cosmétiques pour hommes ?" },
  { type: "p", text: "Cliquez pour voir la vidéo" },
  { type: "img", src: img_logo_jbg_jean_belgueule.url, alt: "Jean Belgueule" },
  { type: "h2", text: "Contexte - Objectifs" },
  { type: "p", text: "Créer une identité de marque forte sur le digital" },
  { type: "p", text: "Développer une communauté engagée sur les médias sociaux" },
  { type: "h2", text: "Nowadays Solutions" },
  { type: "p", text: "Community Management Instagram/Twitter/Facebook/Pinterest" },
  { type: "p", text: "Création de contenu : shooting photos pour les médias sociaux" },
  { type: "p", text: "Stratégie de micro-influence" },
  { type: "p", text: "Communication événementielle" },
  { type: "h2", text: "Résultats" },
  { type: "p", text: "+83% de followers sur Instagram" },
  { type: "p", text: "11% de taux d’engagement" },
  { type: "p", text: "3 events d’organisés avec 200 personnes" },
  { type: "h1", text: "Instagram" },
  { type: "img", src: img_instagram_jean_belgueule_case_study.url, alt: "Jean Belgueule" },
  { type: "img", src: img_Capture_d_e_cran_2018_07_11_a_13_10_32.url, alt: "Jean Belgueule" },
  { type: "img", src: img_instagram_feed.url, alt: "Jean Belgueule" },
  { type: "img", src: img_Capture_d_e_cran_2018_07_11_a_13_09_46.url, alt: "Jean Belgueule" },
  { type: "h1", text: "Micro Influence" },
  { type: "h1", text: "Événements" },
  { type: "p", text: "Cliquez pour voir la vidéo" },
  { type: "h1", text: "Production de contenu" }
];

function Page() {
  return (
    <SiteLayout>
      <CaseStudy
        brand="Jean Belgueule"
        tagline="Soins pour hommes simples et éco-responsables — storytelling, identité visuelle et social media."
        blocks={BLOCKS}
      />
      <FinalCtaSection />
    </SiteLayout>
  );
}
