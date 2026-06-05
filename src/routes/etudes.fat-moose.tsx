import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type Block } from "@/components/site/CaseStudy";
import img_Fat_Moose_clothing from "@/assets/etudes/fat-moose/Fat-Moose-clothing.webp.asset.json";
import img_img_5 from "@/assets/etudes/fat-moose/5.png.asset.json";
import img_img_7 from "@/assets/etudes/fat-moose/7.png.asset.json";
import img_img_6 from "@/assets/etudes/fat-moose/6.png.asset.json";
import img_img_4 from "@/assets/etudes/fat-moose/4.png.asset.json";
import img_img_3 from "@/assets/etudes/fat-moose/3.png.asset.json";
import img_img_2 from "@/assets/etudes/fat-moose/2.png.asset.json";
import img_Capture_d_e_cran_2017_12_04_a_18_30_17 from "@/assets/etudes/fat-moose/Capture-d-e-cran-2017-12-04-a-18.30.17.png.asset.json";
import img_Capture_d_e_cran_2017_12_04_a_18_29_48 from "@/assets/etudes/fat-moose/Capture-d-e-cran-2017-12-04-a-18.29.48.png.asset.json";
import img_Capture_d_e_cran_2017_12_04_a_18_30_52 from "@/assets/etudes/fat-moose/Capture-d-e-cran-2017-12-04-a-18.30.52.png.asset.json";
import img_Capture_d_e_cran_2017_12_04_a_18_29_58 from "@/assets/etudes/fat-moose/Capture-d-e-cran-2017-12-04-a-18.29.58.png.asset.json";
import img_Capture_d_e_cran_2017_12_04_a_18_30_27 from "@/assets/etudes/fat-moose/Capture-d-e-cran-2017-12-04-a-18.30.27.png.asset.json";
import img_Capture_d_e_cran_2017_12_04_a_18_30_10 from "@/assets/etudes/fat-moose/Capture-d-e-cran-2017-12-04-a-18.30.10.png.asset.json";
import img_Tumblr from "@/assets/etudes/fat-moose/Tumblr.webp.asset.json";

export const Route = createFileRoute("/etudes/fat-moose")({
  head: () => ({
    meta: [
      { title: "Fat Moose — Étude de cas | Nowadays" },
      { name: "description", content: "Marque danoise outdoor au design minimaliste — stratégie de contenu, direction artistique et influence." },
      { property: "og:title", content: "Fat Moose — Étude de cas | Nowadays" },
      { property: "og:description", content: "Marque danoise outdoor au design minimaliste — stratégie de contenu, direction artistique et influence." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/etudes/fat-moose" },
        { property: "og:image", content: img_Fat_Moose_clothing.url },
        { name: "twitter:image", content: img_Fat_Moose_clothing.url },
    ],
    links: [{ rel: "canonical", href: "/etudes/fat-moose" }],
  }),
  component: Page,
});

const BLOCKS: Block[] = [
  { type: "h1", text: "Comment assurer le lancement de la marque à New-York ?" },
  { type: "img", src: img_Fat_Moose_clothing.url, alt: "Fat Moose" },
  { type: "h2", text: "Contexte - Objectifs" },
  { type: "p", text: "Accroître la visibilité de la marque sur le digital" },
  { type: "p", text: "Développer une communauté engagée sur les réseaux sociaux" },
  { type: "h2", text: "Nowadays Solutions" },
  { type: "p", text: "Content et community management : médias sociaux (Instagram, Facebook, Tumblr, Soundcloud)" },
  { type: "p", text: "Blog #wearefatmoose" },
  { type: "p", text: "Street art : campagne d'affichage sauvage" },
  { type: "p", text: "Influence marketing" },
  { type: "p", text: "Partenariats avec des boissons énergisantes bios et des barres en chocolat à base de farine d'insectes" },
  { type: "p", text: "Jeu concours photo" },
  { type: "p", text: "Photo shoot et vidéos produits avec un drone à paris" },
  { type: "h2", text: "Résultats" },
  { type: "p", text: "1k visiteurs uniques par mois sur le blog" },
  { type: "p", text: "Street art +10k occasions de voir" },
  { type: "p", text: "+2k audience sur les médias sociaux" },
  { type: "p", text: "7k reach (lors du jeu-concours)" },
  { type: "p", text: "75k reach (pour toute la campagne d’influence)" },
  { type: "p", text: "20k interactions pour la campagne influenceurs (15 influenceurs engagés)" },
  { type: "h2", text: "INFLUENCEURS" },
  { type: "p", text: "Toutes ces photos ont été prises dans le cadre de la campagne #wearefatmoose" },
  { type: "img", src: img_img_5.url, alt: "Fat Moose" },
  { type: "p", text: "@joeybadass\nRappeur\n1M Followers" },
  { type: "img", src: img_img_7.url, alt: "Fat Moose" },
  { type: "p", text: "@marienovosad\nContent Creator\n296K Followers" },
  { type: "img", src: img_img_6.url, alt: "Fat Moose" },
  { type: "p", text: "@shakuto\nSport and lifestyle photography\n24K Followers" },
  { type: "img", src: img_img_4.url, alt: "Fat Moose" },
  { type: "p", text: "@victorhernandezm\nPhotographer\n20K Followers" },
  { type: "img", src: img_img_3.url, alt: "Fat Moose" },
  { type: "p", text: "@danieldorsa\n3K Followers" },
  { type: "img", src: img_img_2.url, alt: "Fat Moose" },
  { type: "p", text: "@ogdrico\n1,6K Followers" },
  { type: "h2", text: "INSTAGRAM" },
  { type: "img", src: img_Capture_d_e_cran_2017_12_04_a_18_30_17.url, alt: "Fat Moose" },
  { type: "img", src: img_Capture_d_e_cran_2017_12_04_a_18_29_48.url, alt: "Fat Moose" },
  { type: "img", src: img_Capture_d_e_cran_2017_12_04_a_18_30_52.url, alt: "Fat Moose" },
  { type: "img", src: img_Capture_d_e_cran_2017_12_04_a_18_29_58.url, alt: "Fat Moose" },
  { type: "img", src: img_Capture_d_e_cran_2017_12_04_a_18_30_27.url, alt: "Fat Moose" },
  { type: "img", src: img_Capture_d_e_cran_2017_12_04_a_18_30_10.url, alt: "Fat Moose" },
  { type: "h2", text: "TUMBLR" },
  { type: "img", src: img_Tumblr.url, alt: "Fat Moose" }
];

function Page() {
  return (
    <SiteLayout>
      <CaseStudy
        brand="Fat Moose"
        tagline="Marque danoise outdoor au design minimaliste — stratégie de contenu, direction artistique et influence."
        blocks={BLOCKS}
      />
      <FinalCtaSection />
    </SiteLayout>
  );
}
