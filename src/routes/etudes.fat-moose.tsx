import { createFileRoute } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { CtaFinal } from "@/components/da/CtaFinal";
import { VichyBand } from "@/components/da/VichyBand";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import logo from "@/assets/etudes/fat-moose/Fat-Moose-clothing.webp.asset.json";
import ig1 from "@/assets/etudes/fat-moose/Capture-d-e-cran-2017-12-04-a-18.30.17.png.asset.json";
import ig2 from "@/assets/etudes/fat-moose/Capture-d-e-cran-2017-12-04-a-18.29.48.png.asset.json";
import ig3 from "@/assets/etudes/fat-moose/Capture-d-e-cran-2017-12-04-a-18.30.52.png.asset.json";
import ig4 from "@/assets/etudes/fat-moose/Capture-d-e-cran-2017-12-04-a-18.29.58.png.asset.json";
import ig5 from "@/assets/etudes/fat-moose/Capture-d-e-cran-2017-12-04-a-18.30.27.png.asset.json";
import ig6 from "@/assets/etudes/fat-moose/Capture-d-e-cran-2017-12-04-a-18.30.10.png.asset.json";
import imgTumblr from "@/assets/etudes/fat-moose/Tumblr.webp.asset.json";
import inf5 from "@/assets/etudes/fat-moose/5.png.asset.json";
import inf7 from "@/assets/etudes/fat-moose/7.png.asset.json";
import inf6 from "@/assets/etudes/fat-moose/6.png.asset.json";
import inf4 from "@/assets/etudes/fat-moose/4.png.asset.json";
import inf3 from "@/assets/etudes/fat-moose/3.png.asset.json";
import inf2 from "@/assets/etudes/fat-moose/2.png.asset.json";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/etudes/fat-moose")({
  head: () => ({
    meta: [
      { title: "Fat Moose | Étude de cas | Nowadays" },
      {
        name: "description",
        content:
          "Lancer une marque streetwear avec une stratégie 360° : réseaux sociaux, blog lifestyle et contenus qui ancrent Fat Moose dans la culture street.",
      },
      { property: "og:title", content: "Fat Moose | Étude de cas | Nowadays" },
      {
        property: "og:description",
        content:
          "Lancer une marque streetwear avec une stratégie 360° : réseaux sociaux, blog lifestyle et contenus qui ancrent Fat Moose dans la culture street.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/etudes/fat-moose") },
      { property: "og:image", content: absoluteUrl(logo.url) },
      { name: "twitter:image", content: absoluteUrl(logo.url) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/etudes/fat-moose") }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Fat Moose",
  logo: { src: logo.url, alt: "Fat Moose Clothing" },
  title: "Lancement d'une marque de mode : Fat Moose",
  subtitle: "Assurer le lancement de la marque streetwear avec une stratégie de communication 360°",
  context: {
    paragraphs: [
      "L'objectif était simple : gagner en visibilité sur le digital et construire une communauté engagée sur les réseaux sociaux.",
      "En clair, il fallait une stratégie à leur image : qui parle à ceux qui vivent la rue, l'explorent, et la transforment en terrain de jeu.",
    ],
  },
  solutions: [
    {
      title: "Les réseaux sociaux comme terrain de jeu",
      paragraphs: [
        "On a pris les rênes des comptes Instagram, Facebook, Tumblr, et même Soundcloud.",
        "Stories, posts lifestyle et playlists urbaines ont permis d'ancrer la marque dans la culture street.",
      ],
      images: [
        { src: ig1.url, alt: "Instagram Fat Moose" },
        { src: ig2.url, alt: "Instagram Fat Moose" },
        { src: ig3.url, alt: "Instagram Fat Moose" },
        { src: ig4.url, alt: "Instagram Fat Moose" },
        { src: ig5.url, alt: "Instagram Fat Moose" },
        { src: ig6.url, alt: "Instagram Fat Moose" },
      ],
      imageLayout: "grid",
    },
    {
      title: "Le blog #wearefatmoose",
      paragraphs: [
        "Un blog lifestyle, vitrine parfaite de l'univers Fatmoose.",
        "On y a parlé mode, art de rue, nouvelles tendances et sujets de contre-culture.",
      ],
      images: [{ src: imgTumblr.url, alt: "Blog Tumblr Fat Moose" }],
    },
    {
      title: "Du street art XXL",
      paragraphs: [
        "On est donc retournés à la source avec une campagne d'affichage sauvage qui a donné un nouveau souffle à l'espace urbain. Des visuels percutants sur des murs choisis stratégiquement.",
      ],
    },
    {
      title: "Influence marketing",
      paragraphs: [
        "On a activé 15 influenceurs, triés sur le volet, pour incarner les valeurs de Fatmoose et toucher une audience ciblée. Des collaborations authentiques, pensées pour générer de l'engagement et du reach.",
      ],
    },
    {
      title: "Shootings et vidéos produits avec drone",
      paragraphs: [
        "Pour montrer le streetwear sous un nouvel angle (littéralement), on a organisé des shootings et tournages en drone dans les rues de Paris.",
      ],
    },
    {
      title: "Quand Fatmoose croque la nature à pleines dents avec des partenariats décalés",
      paragraphs: [
        "Pour aller encore plus loin, on a noué des partenariats avec des boissons énergisantes bio et des barres chocolatées à base de farine d'insectes pour souligner l'identité outdoor de Fatmoose.",
      ],
    },
  ],
  influencers: {
    intro: "Toutes ces photos ont été prises dans le cadre de la campagne #wearefatmoose.",
    items: [
      {
        avatar: inf5.url,
        handle: "@joeybadass",
        role: "Rappeur",
        followers: "1M Followers",
        link: "https://www.instagram.com/joeybadass/",
      },
      {
        avatar: inf7.url,
        handle: "@marienovosad",
        role: "Content Creator",
        followers: "296K Followers",
        link: "https://www.instagram.com/marienovosad/",
      },
      {
        avatar: inf6.url,
        handle: "@shakuto",
        role: "Sport & lifestyle photo",
        followers: "24K Followers",
        link: "https://www.instagram.com/shakuto/",
      },
      {
        avatar: inf4.url,
        handle: "@victorhernandezm",
        role: "Photographer",
        followers: "20K Followers",
        link: "https://www.instagram.com/victorhernandezm/",
      },
      {
        avatar: inf3.url,
        handle: "@danieldorsa",
        role: "Photographer",
        followers: "3K Followers",
        link: "https://www.instagram.com/danieldorsa/",
      },
      {
        avatar: inf2.url,
        handle: "@ogdrico",
        role: "Creator",
        followers: "1,6K Followers",
        link: "https://www.instagram.com/ogdrico/",
      },
    ],
  },
  results: {
    intro: "Les résultats pour le lancement de cette marque de mode",
    items: [
      { value: "1K", label: "Visiteurs uniques / mois sur le blog" },
      { value: "7K", label: "Reach du jeu-concours" },
      { value: "+10K", label: "Occasions de voir (street art)" },
      { value: "75K", label: "Reach campagne d'influence" },
      { value: "+2K", label: "Audience médias sociaux" },
      { value: "20K", label: "Interactions campagne influenceurs" },
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
