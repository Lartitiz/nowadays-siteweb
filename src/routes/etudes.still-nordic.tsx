import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type Block } from "@/components/site/CaseStudy";
import img_still_nordic from "@/assets/etudes/still-nordic/still-nordic.webp.asset.json";
import img_still_nordic_influencer_2 from "@/assets/etudes/still-nordic/still-nordic-influencer-2.png.asset.json";
import img_influencer_ambassadeur_like from "@/assets/etudes/still-nordic/influencer-ambassadeur-like.png.asset.json";
import img_comment_like_instagram_fashion from "@/assets/etudes/still-nordic/comment-like-instagram-fashion.png.asset.json";
import img_Capture_d_e_cran_2017_12_20_a_10_23_00 from "@/assets/etudes/still-nordic/Capture-d-e-cran-2017-12-20-a-10.23.00.png.asset.json";
import img_still_nordic_dying_season from "@/assets/etudes/still-nordic/still-nordic-dying-season.png.asset.json";
import img_still_nordic_influencer from "@/assets/etudes/still-nordic/still-nordic-influencer.png.asset.json";
import img_Capture_d_e_cran_2017_12_20_a_10_22_16 from "@/assets/etudes/still-nordic/Capture-d-e-cran-2017-12-20-a-10.22.16.png.asset.json";
import img_still_nordic_instagram from "@/assets/etudes/still-nordic/still-nordic-instagram.png.asset.json";
import img_leather_bag_influence_agency from "@/assets/etudes/still-nordic/leather-bag-influence-agency.png.asset.json";
import img_still_nordic_2 from "@/assets/etudes/still-nordic/still-nordic.jpg.asset.json";
import img_still_nordic_instagram_take_over_Nowadays_agency from "@/assets/etudes/still-nordic/still_nordic_instagram_take_over_Nowadays_agency.webp.asset.json";
import img_instagram_take_over_Nowadays_agency from "@/assets/etudes/still-nordic/instagram_take_over_Nowadays_agency.webp.asset.json";
import img_strategy_instagram_Nowadays_agency from "@/assets/etudes/still-nordic/strategy_instagram_Nowadays_agency.webp.asset.json";
import img_best_esthetic_instagram from "@/assets/etudes/still-nordic/best_esthetic_instagram.webp.asset.json";
import img_top_esthetic_instagram from "@/assets/etudes/still-nordic/top_esthetic_instagram.webp.asset.json";
import img_square_esthetic_instagram from "@/assets/etudes/still-nordic/square_esthetic_instagram.webp.asset.json";

export const Route = createFileRoute("/etudes/still-nordic")({
  head: () => ({
    meta: [
      { title: "Still Nordic — Étude de cas | Nowadays" },
      { name: "description", content: "Minimalisme scandinave et cuir d'exception — présence digitale, e-commerce et influence." },
      { property: "og:title", content: "Still Nordic — Étude de cas | Nowadays" },
      { property: "og:description", content: "Minimalisme scandinave et cuir d'exception — présence digitale, e-commerce et influence." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/etudes/still-nordic" },
        { property: "og:image", content: img_still_nordic.url },
        { name: "twitter:image", content: img_still_nordic.url },
    ],
    links: [{ rel: "canonical", href: "/etudes/still-nordic" }],
  }),
  component: Page,
});

const BLOCKS: Block[] = [
  { type: "h1", text: "Comment développer mes audiences sur le digital ?" },
  { type: "h2", text: "tout en ayant une identité cohérente et différenciante" },
  { type: "img", src: img_still_nordic.url, alt: "Still Nordic" },
  { type: "h2", text: "Contexte - Objectifs" },
  { type: "p", text: "Développer l'engagement des communautés sur les médias sociaux" },
  { type: "p", text: "Accroître sa présence sur le digital" },
  { type: "h2", text: "Nowadays Solutions" },
  { type: "p", text: "Optimisation et développement des médias sociaux" },
  { type: "p", text: "Lancement d'un site web e-commerce" },
  { type: "p", text: "Création de contenus (photos pour les médias sociaux)" },
  { type: "p", text: "Partenariats avec des influenceurs" },
  { type: "h2", text: "Résultats" },
  { type: "p", text: "+2 000 followers sur Instagram" },
  { type: "p", text: "800 visiteurs uniques par mois au lancement du site web" },
  { type: "p", text: "20k personnes atteintes sur les médias sociaux (Reach)" },
  { type: "p", text: "15k likes générés sur les contenus Influenceurs" },
  { type: "h2", text: "Influenceurs" },
  { type: "p", text: "Toutes ces photos ont été prises dans le cadre de la campagne d'influence pour Still Nordic" },
  { type: "img", src: img_still_nordic_influencer_2.url, alt: "Still Nordic" },
  { type: "p", text: "@dyingseasons\nPhotographe\n10k Followers" },
  { type: "img", src: img_influencer_ambassadeur_like.url, alt: "Still Nordic" },
  { type: "img", src: img_comment_like_instagram_fashion.url, alt: "Still Nordic" },
  { type: "img", src: img_Capture_d_e_cran_2017_12_20_a_10_23_00.url, alt: "Still Nordic" },
  { type: "img", src: img_still_nordic_dying_season.url, alt: "Still Nordic" },
  { type: "img", src: img_still_nordic_influencer.url, alt: "Still Nordic" },
  { type: "p", text: "@aesthetnik\nContent Creator\n18.5K Followers" },
  { type: "img", src: img_Capture_d_e_cran_2017_12_20_a_10_22_16.url, alt: "Still Nordic" },
  { type: "img", src: img_still_nordic_instagram.url, alt: "Still Nordic" },
  { type: "img", src: img_leather_bag_influence_agency.url, alt: "Still Nordic" },
  { type: "img", src: img_still_nordic_2.url, alt: "Still Nordic" },
  { type: "h2", text: "Instagram" },
  { type: "img", src: img_still_nordic_instagram_take_over_Nowadays_agency.url, alt: "Still Nordic" },
  { type: "img", src: img_instagram_take_over_Nowadays_agency.url, alt: "Still Nordic" },
  { type: "img", src: img_strategy_instagram_Nowadays_agency.url, alt: "Still Nordic" },
  { type: "img", src: img_best_esthetic_instagram.url, alt: "Still Nordic" },
  { type: "img", src: img_top_esthetic_instagram.url, alt: "Still Nordic" },
  { type: "img", src: img_square_esthetic_instagram.url, alt: "Still Nordic" }
];

function Page() {
  return (
    <SiteLayout>
      <CaseStudy
        brand="Still Nordic"
        tagline="Minimalisme scandinave et cuir d'exception — présence digitale, e-commerce et influence."
        blocks={BLOCKS}
      />
      <FinalCtaSection />
    </SiteLayout>
  );
}
