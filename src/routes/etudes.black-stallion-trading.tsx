import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type Block } from "@/components/site/CaseStudy";
import img_black_stallion_trading from "@/assets/etudes/black-stallion-trading/black-stallion-trading.webp.asset.json";
import img_Yael_Hupert from "@/assets/etudes/black-stallion-trading/Yael-Hupert.png.asset.json";
import img_anjabrook from "@/assets/etudes/black-stallion-trading/anjabrook.png.asset.json";
import img_Romina_16R_fashion_brand from "@/assets/etudes/black-stallion-trading/Romina-16R-fashion-brand.png.asset.json";
import img_marut_studio_ from "@/assets/etudes/black-stallion-trading/marut-studio-.png.asset.json";
import img_aesthetic_distance_photographer from "@/assets/etudes/black-stallion-trading/aesthetic-distance-photographer.png.asset.json";
import img_kirstenanderton from "@/assets/etudes/black-stallion-trading/kirstenanderton.png.asset.json";
import img_instagram_black_stallion_trading from "@/assets/etudes/black-stallion-trading/instagram_black_stallion_trading.webp.asset.json";
import img_instagram_revamp_followers from "@/assets/etudes/black-stallion-trading/instagram_revamp_followers.webp.asset.json";
import img_instagram_esthetique_ from "@/assets/etudes/black-stallion-trading/instagram_esthetique_.webp.asset.json";
import img_BST_instagram_esthetique from "@/assets/etudes/black-stallion-trading/BST_instagram_esthetique.webp.asset.json";
import img_top_instagram_esthetique from "@/assets/etudes/black-stallion-trading/top_instagram_esthetique.webp.asset.json";
import img_instagram_best_aesthetic from "@/assets/etudes/black-stallion-trading/instagram_best_aesthetic.webp.asset.json";
import img_Site_Web_Pr_sentation from "@/assets/etudes/black-stallion-trading/Site-Web-Pr-sentation.webp.asset.json";
import img_Black_Stallion_Trading_mobile from "@/assets/etudes/black-stallion-trading/Black-Stallion-Trading-mobile.webp.asset.json";

export const Route = createFileRoute("/etudes/black-stallion-trading")({
  head: () => ({
    meta: [
      { title: "Black Stallion Trading — Étude de cas | Nowadays" },
      { name: "description", content: "Une marque-showroom qui revendique le luxe conscient — stratégie digitale, identité visuelle et influence." },
      { property: "og:title", content: "Black Stallion Trading — Étude de cas | Nowadays" },
      { property: "og:description", content: "Une marque-showroom qui revendique le luxe conscient — stratégie digitale, identité visuelle et influence." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/etudes/black-stallion-trading" },
        { property: "og:image", content: img_black_stallion_trading.url },
        { name: "twitter:image", content: img_black_stallion_trading.url },
    ],
    links: [{ rel: "canonical", href: "/etudes/black-stallion-trading" }],
  }),
  component: Page,
});

const BLOCKS: Block[] = [
  { type: "h1", text: "Comment mettre en place un programme d'influence pour développer sa visibilité et sa notoriété ?" },
  { type: "img", src: img_black_stallion_trading.url, alt: "Black Stallion Trading" },
  { type: "h2", text: "Contexte - Objectifs" },
  { type: "p", text: "Accroître la visibilité de la marque auprès des marques de mode et des distributeurs" },
  { type: "p", text: "Développer sa présence sur le digital" },
  { type: "h2", text: "Nowadays Solutions" },
  { type: "p", text: "Charte graphique" },
  { type: "p", text: "Création et management du site web vitrine" },
  { type: "p", text: "Community Management : Instagram / Facebook / Twitter" },
  { type: "p", text: "Développement d'un blog lifestyle" },
  { type: "p", text: "Stratégie de référencement : Search Engine Optimisation (SEO)" },
  { type: "p", text: "Publicités digitales : promotion sur Facebook / Instagram / Google" },
  { type: "p", text: "Interview d'influenceurs" },
  { type: "h2", text: "Résultats" },
  { type: "h2", text: "INFLUENCEURS" },
  { type: "p", text: "Tous ces influenceurs ont été interviewés pour le blog de la marque" },
  { type: "img", src: img_Yael_Hupert.url, alt: "Black Stallion Trading" },
  { type: "p", text: "@Yaelhupert\nPeintre\n29.3K Followers" },
  { type: "img", src: img_anjabrook.url, alt: "Black Stallion Trading" },
  { type: "p", text: "@anjabrook\nModèle\n2K Followers" },
  { type: "img", src: img_Romina_16R_fashion_brand.url, alt: "Black Stallion Trading" },
  { type: "p", text: "@16rfirenze\nMode - tricot de luxe\n5K Followers" },
  { type: "img", src: img_marut_studio_.url, alt: "Black Stallion Trading" },
  { type: "p", text: "@marutstudio\nMode Lifestyle\n13K Followers" },
  { type: "img", src: img_aesthetic_distance_photographer.url, alt: "Black Stallion Trading" },
  { type: "p", text: "@aestheticdistance\nPhotographe de mode\n20.8K Followers" },
  { type: "img", src: img_kirstenanderton.url, alt: "Black Stallion Trading" },
  { type: "p", text: "@kirstenanderton\n61.1K Followers" },
  { type: "h2", text: "INSTAGRAM" },
  { type: "img", src: img_instagram_black_stallion_trading.url, alt: "Black Stallion Trading" },
  { type: "img", src: img_instagram_revamp_followers.url, alt: "Black Stallion Trading" },
  { type: "img", src: img_instagram_esthetique_.url, alt: "Black Stallion Trading" },
  { type: "img", src: img_BST_instagram_esthetique.url, alt: "Black Stallion Trading" },
  { type: "img", src: img_top_instagram_esthetique.url, alt: "Black Stallion Trading" },
  { type: "img", src: img_instagram_best_aesthetic.url, alt: "Black Stallion Trading" },
  { type: "h2", text: "WEBSITE" },
  { type: "img", src: img_Site_Web_Pr_sentation.url, alt: "Black Stallion Trading" },
  { type: "img", src: img_Black_Stallion_Trading_mobile.url, alt: "Black Stallion Trading" }
];

function Page() {
  return (
    <SiteLayout>
      <CaseStudy
        brand="Black Stallion Trading"
        tagline="Une marque-showroom qui revendique le luxe conscient — stratégie digitale, identité visuelle et influence."
        blocks={BLOCKS}
      />
      <FinalCtaSection />
    </SiteLayout>
  );
}
