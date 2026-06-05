import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import logo from "@/assets/etudes/black-stallion-trading/black-stallion-trading.webp.asset.json";
import imgSite from "@/assets/etudes/black-stallion-trading/Site-Web-Pr-sentation.webp.asset.json";
import imgMobile from "@/assets/etudes/black-stallion-trading/Black-Stallion-Trading-mobile.webp.asset.json";
import ig1 from "@/assets/etudes/black-stallion-trading/instagram_black_stallion_trading.webp.asset.json";
import ig2 from "@/assets/etudes/black-stallion-trading/instagram_revamp_followers.webp.asset.json";
import ig3 from "@/assets/etudes/black-stallion-trading/instagram_esthetique_.webp.asset.json";
import ig4 from "@/assets/etudes/black-stallion-trading/BST_instagram_esthetique.webp.asset.json";
import ig5 from "@/assets/etudes/black-stallion-trading/top_instagram_esthetique.webp.asset.json";
import ig6 from "@/assets/etudes/black-stallion-trading/instagram_best_aesthetic.webp.asset.json";
import infYael from "@/assets/etudes/black-stallion-trading/Yael-Hupert.png.asset.json";
import infAnja from "@/assets/etudes/black-stallion-trading/anjabrook.png.asset.json";
import inf16r from "@/assets/etudes/black-stallion-trading/Romina-16R-fashion-brand.png.asset.json";
import infMarut from "@/assets/etudes/black-stallion-trading/marut-studio-.png.asset.json";
import infAesth from "@/assets/etudes/black-stallion-trading/aesthetic-distance-photographer.png.asset.json";
import infKirsten from "@/assets/etudes/black-stallion-trading/kirstenanderton.png.asset.json";

export const Route = createFileRoute("/etudes/black-stallion-trading")({
  head: () => ({
    meta: [
      { title: "Black Stallion Trading — Étude de cas | Nowadays" },
      { name: "description", content: "Développer la notoriété d'un showroom à NYC avec une communication digitale globale." },
      { property: "og:title", content: "Black Stallion Trading — Étude de cas | Nowadays" },
      { property: "og:description", content: "Développer la notoriété d'un showroom à NYC avec une communication digitale globale." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/etudes/black-stallion-trading" },
      { property: "og:image", content: logo.url },
      { name: "twitter:image", content: logo.url },
    ],
    links: [{ rel: "canonical", href: "/etudes/black-stallion-trading" }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Black Stallion Trading",
  logo: { src: logo.url, alt: "Black Stallion Trading" },
  title: "Développer la notoriété d'un showroom à NYC avec communication digitale globale",
  subtitle: "Vous êtes une marque lifestyle et éthique et vous souhaitez de l'aide ?",
  context: {
    paragraphs: [
      "Quand on parle de mode à New York, il ne s'agit pas seulement de bien s'habiller. Il s'agit de faire une entrée remarquée.",
      "Pour ce showroom, l'objectif était clair : attirer l'attention des marques de mode et des distributeurs, tout en bâtissant une présence digitale solide.",
    ],
  },
  solutions: [
    {
      title: "Une identité graphique taillée sur mesure",
      paragraphs: [
        "Parce que dans la mode, le style, c'est tout. Nous avons créé une charte graphique adaptée à l'identité du showroom, histoire que la marque ait son propre « It factor » sur tous les supports.",
      ],
      images: [{ src: imgSite.url, alt: "Site web Black Stallion Trading" }],
    },
    {
      title: "Un site web vitrine digne d'une invitation VIP",
      paragraphs: [
        "Nous avons conçu et géré un site web vitrine pour présenter la marque sous son meilleur jour, avec un design épuré, une navigation intuitive et des visuels à faire pâlir les plus grandes enseignes.",
      ],
      images: [{ src: imgMobile.url, alt: "Site mobile Black Stallion Trading" }],
    },
    {
      title: "Un Community Management ultra-connecté",
      paragraphs: [
        "Instagram, Facebook, Twitter… Nous avons fait en sorte que la marque soit là où il faut, quand il faut. Avec des contenus engageants, des stories de style et des interactions, nous avons transformé les followers en ambassadeurs.",
      ],
      images: [
        { src: ig1.url, alt: "Feed Instagram Black Stallion Trading" },
        { src: ig2.url, alt: "Instagram revamp followers" },
        { src: ig3.url, alt: "Instagram esthétique" },
        { src: ig4.url, alt: "Instagram BST esthétique" },
        { src: ig5.url, alt: "Top Instagram esthétique" },
        { src: ig6.url, alt: "Best aesthetic Instagram" },
      ],
      imageLayout: "grid",
    },
    {
      title: "Un blog lifestyle, parce que la mode, c'est aussi un art de vivre",
      paragraphs: [
        "Pour enrichir l'univers de la marque, nous avons lancé un blog lifestyle : conseils mode, coulisses du showroom, inspirations new-yorkaises… Nous avons également optimisé le référencement de la marque ; parce qu'être bien habillé, c'est bien, mais être bien référencé, c'est encore mieux.",
      ],
    },
    {
      title: "Des influenceurs en invités de choix",
      paragraphs: [
        "Nous avons organisé des interviews d'influenceurs, qui ont partagé leur expérience avec le showroom et renforcé sa visibilité auprès de leur communauté.",
      ],
    },
  ],
  influencers: {
    intro: "Tous ces influenceurs ont été interviewés pour le blog de la marque.",
    items: [
      { avatar: infYael.url, handle: "@Yaelhupert", role: "Peintre", followers: "29,3K Followers", link: "https://www.instagram.com/yaelhupert/" },
      { avatar: infAnja.url, handle: "@anjabrook", role: "Modèle", followers: "2K Followers", link: "https://www.instagram.com/marienovosad/" },
      { avatar: inf16r.url, handle: "@16rfirenze", role: "Mode — tricot de luxe", followers: "5K Followers" },
      { avatar: infMarut.url, handle: "@marutstudio", role: "Mode Lifestyle", followers: "13K Followers" },
      { avatar: infAesth.url, handle: "@aestheticdistance", role: "Photographe de mode", followers: "20,8K Followers" },
      { avatar: infKirsten.url, handle: "@kirstenanderton", role: "Lifestyle", followers: "61,1K Followers" },
    ],
  },
  results: {
    items: [
      { value: "1K", label: "Visiteurs uniques / mois sur le blog" },
      { value: "10K", label: "Interactions sur les médias sociaux" },
      { value: "+2K", label: "Audience sur les médias sociaux" },
      { value: "12", label: "Partenariats influenceurs" },
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
