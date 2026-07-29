import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import logo from "@/assets/etudes/still-nordic/still-nordic.jpg.asset.json";
import ig1 from "@/assets/etudes/still-nordic/still_nordic_instagram_take_over_Nowadays_agency.webp.asset.json";
import ig2 from "@/assets/etudes/still-nordic/instagram_take_over_Nowadays_agency.webp.asset.json";
import ig3 from "@/assets/etudes/still-nordic/strategy_instagram_Nowadays_agency.webp.asset.json";
import ig4 from "@/assets/etudes/still-nordic/best_esthetic_instagram.webp.asset.json";
import ig5 from "@/assets/etudes/still-nordic/top_esthetic_instagram.webp.asset.json";
import ig6 from "@/assets/etudes/still-nordic/square_esthetic_instagram.webp.asset.json";
import infDying from "@/assets/etudes/still-nordic/still-nordic-influencer-2.png.asset.json";
import infAesth from "@/assets/etudes/still-nordic/still-nordic-influencer.png.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/still-nordic")({
  head: () => ({
    meta: [
      { title: "Still Nordic — Étude de cas | Nowadays" },
      { name: "description", content: "Social Media et Branding pour Still Nordic — sacs en cuir au design scandinave." },
      { property: "og:title", content: "Still Nordic — Étude de cas | Nowadays" },
      { property: "og:description", content: "Social Media et Branding pour Still Nordic — sacs en cuir au design scandinave." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/still-nordic") },
      { property: "og:image", content: absoluteUrl(logo.url) },
      { name: "twitter:image", content: absoluteUrl(logo.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/still-nordic") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Still Nordic",
  logo: { src: logo.url, alt: "Still Nordic" },
  title: "Social Media et Branding pour Still Nordic",
  subtitle: "Comment développer ses audiences sur le digital tout en ayant une identité cohérente et différenciante ?",
  context: {
    paragraphs: [
      "Still Nordic, marque de sacs en cuir au design minimaliste et épuré, voulait passer à la vitesse supérieure. L'idée ? Créer plus de lien avec sa communauté sur les réseaux sociaux tout en renforçant sa présence digitale.",
      "Il ne s'agissait pas juste de faire des sacs (très stylés qui plus est), mais aussi de bâtir un univers en ligne correspondant à leur esthétique scandinave.",
    ],
  },
  solutions: [
    {
      title: "Donner vie aux réseaux sociaux",
      paragraphs: [
        "Instagram, Facebook… Nous avons optimisé chaque plateforme pour refléter l'ADN minimaliste de Still Nordic. Au menu : des visuels épurés, une charte éditoriale cohérente et une stratégie d'engagement et d'interaction. Le tout pensé pour que chaque post parle autant aux fans de design qu'aux accros du cuir.",
      ],
      images: [
        { src: ig1.url, alt: "Instagram Still Nordic" },
        { src: ig2.url, alt: "Instagram Still Nordic" },
        { src: ig3.url, alt: "Instagram Still Nordic" },
        { src: ig4.url, alt: "Instagram Still Nordic" },
        { src: ig5.url, alt: "Instagram Still Nordic" },
        { src: ig6.url, alt: "Instagram Still Nordic" },
      ],
      imageLayout: "grid",
    },
    {
      title: "Lancer le site e-commerce",
      paragraphs: [
        "Pour vendre en ligne, nous avons travaillé sur le lancement d'un site e-commerce. Navigation fluide, visuels immersifs et mise en avant des produits phares : tout a été conçu pour séduire et convertir.",
      ],
    },
    {
      title: "Créer des contenus à l'image de la marque",
      paragraphs: [
        "Idées minimalistes, shooting produit, mises en scène urbaines, close-ups détaillés… Chaque image a été pensée pour capter l'essence des sacs Still Nordic. L'objectif ? Inspirer, sans jamais en faire trop.",
      ],
    },
    {
      title: "Activer des influenceurs triés sur le volet",
      paragraphs: [
        "On a collaboré avec des influenceurs lifestyle et mode, alignés avec les valeurs de la marque. Résultat : des collaborations qui ont permis à Still Nordic de rayonner auprès d'audiences qualifiées, sans jamais forcer le message.",
      ],
    },
  ],
  influencers: {
    intro: "Toutes ces photos ont été prises dans le cadre de la campagne d'influence pour Still Nordic.",
    items: [
      { avatar: infDying.url, handle: "@dyingseasons", role: "Photographe", followers: "10K Followers", link: "https://www.instagram.com/dyingseasons/" },
      { avatar: infAesth.url, handle: "@aesthetnik", role: "Content Creator", followers: "18,5K Followers", link: "https://www.instagram.com/aesthetnik/" },
    ],
  },
  results: {
    items: [
      { value: "+2 000", label: "Followers sur Instagram" },
      { value: "800", label: "Visiteurs uniques / mois (site)" },
      { value: "15K", label: "Likes contenus influenceurs" },
      { value: "20K", label: "Personnes atteintes (reach)" },
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
