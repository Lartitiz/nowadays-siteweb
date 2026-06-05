import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import logo from "@/assets/etudes/jean-belgueule/logo-jbg-jean-belgueule.jpg.asset.json";
import ig1 from "@/assets/etudes/jean-belgueule/instagram-jean-belgueule-case-study.webp.asset.json";
import ig2 from "@/assets/etudes/jean-belgueule/Capture-d-e-cran-2018-07-11-a-13.10.32.png.asset.json";
import ig3 from "@/assets/etudes/jean-belgueule/instagram-feed.webp.asset.json";
import ig4 from "@/assets/etudes/jean-belgueule/Capture-d-e-cran-2018-07-11-a-13.09.46.png.asset.json";

export const Route = createFileRoute("/etudes/jean-belgueule")({
  head: () => ({
    meta: [
      { title: "Jean Belgueule — Étude de cas | Nowadays" },
      { name: "description", content: "Communication digitale pour une marque de cosmétiques bio pour hommes." },
      { property: "og:title", content: "Jean Belgueule — Étude de cas | Nowadays" },
      { property: "og:description", content: "Communication digitale pour une marque de cosmétiques bio pour hommes." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/etudes/jean-belgueule" },
      { property: "og:image", content: logo.url },
      { name: "twitter:image", content: logo.url },
    ],
    links: [{ rel: "canonical", href: "/etudes/jean-belgueule" }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Jean Belgueule",
  logo: { src: logo.url, alt: "Jean Belgueule" },
  title: "Communication digitale pour cosmétique bio : Jean Belgueule",
  subtitle: "Comment se faire connaître sur le web pour une marque de cosmétiques pour hommes ?",
  context: {
    paragraphs: [
      "Jean Belgueule, une marque de cosmétiques pour hommes, voulait une stratégie digitale avec une identité forte.",
      "L'idée ? Parler aux hommes d'aujourd'hui avec une bonne dose de caractère et un soupçon de street art.",
    ],
  },
  solutions: [
    {
      title: "Des réseaux sociaux bien taillés",
      paragraphs: [
        "Nous avons pris en main les comptes Instagram, Twitter, Facebook et Pinterest. Avec des interactions aussi nettes qu'un bon coup de tondeuse et une présence constante pour peigner le quotidien des hommes, on a misé sur la simplicité (avec un brin d'humour).",
      ],
      images: [
        { src: ig1.url, alt: "Instagram Jean Belgueule" },
        { src: ig2.url, alt: "Instagram Jean Belgueule" },
        { src: ig3.url, alt: "Feed Instagram Jean Belgueule" },
        { src: ig4.url, alt: "Instagram Jean Belgueule" },
      ],
      imageLayout: "grid",
    },
    {
      title: "Création de contenu",
      paragraphs: [
        "Nous avons mis en scène les produits de la marque dans un contexte urbain (street art) grâce à un shooting photo pensé pour les réseaux sociaux.",
      ],
    },
    {
      title: "Des ambassadeurs qui en ont sous le menton",
      paragraphs: [
        "Nous avons collaboré avec des micro-influenceurs loin des paillettes et des clichés. Ces partenariats ont permis de créer des contenus partagés avec leurs communautés et en phase avec les valeurs de la marque.",
      ],
    },
    {
      title: "Des événements pas barbants",
      paragraphs: [
        "Parce que rien ne vaut un bon moment avec sa communauté, nous avons organisé 3 événements exclusifs, rassemblant 200 personnes autour des produits et de l'univers Jean Belgueule.",
      ],
    },
  ],
  results: {
    items: [
      { value: "+2 000", label: "Followers sur Instagram" },
      { value: "11%", label: "Taux d'engagement" },
      { value: "3", label: "Événements (200 personnes)" },
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
