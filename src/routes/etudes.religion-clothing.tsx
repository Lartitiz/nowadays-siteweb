import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { CaseStudy, type CaseStudyData } from "@/components/site/CaseStudy";
import logo from "@/assets/etudes/religion-clothing/religion-clothing.webp.asset.json";
import imgEvt from "@/assets/etudes/religion-clothing/Capture-d-e-cran-2017-12-15-a-19.37.16.png.asset.json";

export const Route = createFileRoute("/etudes/religion-clothing")({
  head: () => ({
    meta: [
      { title: "Religion Clothing — Étude de cas | Nowadays" },
      { name: "description", content: "Lancement de produit pour Religion Clothing avec une stratégie de partenariats événementiels." },
      { property: "og:title", content: "Religion Clothing — Étude de cas | Nowadays" },
      { property: "og:description", content: "Lancement de produit pour Religion Clothing avec une stratégie de partenariats événementiels." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/etudes/religion-clothing" },
      { property: "og:image", content: logo.url },
      { name: "twitter:image", content: logo.url },
    ],
    links: [{ rel: "canonical", href: "/etudes/religion-clothing" }],
  }),
  component: Page,
});

const data: CaseStudyData = {
  brand: "Religion Clothing",
  logo: { src: logo.url, alt: "Religion Clothing" },
  title: "Lancement de produit pour Religion Clothing",
  subtitle: "Comment assurer un lancement de produit avec une stratégie de partenariats événementiels ?",
  context: {
    paragraphs: [
      "Religion Clothing, marque londonienne au style rebelle et alternatif, souhaitait marquer les esprits à Paris.",
      "L'objectif ? Toucher un nouveau public parisien et mettre sous les projecteurs sa robe phare, pièce emblématique de la collection. Mais ici, pas question d'un lancement classique. Il fallait un terrain d'expression qui reflète l'ADN de Religion avec une bonne dose de contre-culture.",
    ],
  },
  solutions: [
    {
      title: "Une collaboration avec Anetha, figure incontournable de la techno",
      paragraphs: [
        "Pour faire résonner la robe phare de Religion, nous avons collaboré avec Anetha, l'une des DJs les plus influentes de la scène techno européenne. Pourquoi elle ? Parce que son univers, entre énergie brute et sophistication, reflète parfaitement l'ADN de la marque.",
      ],
      images: [{ src: imgEvt.url, alt: "Soirée Religion x Anetha" }],
    },
    {
      title: "Religion Clothing x Blaucaus",
      paragraphs: [
        "L'événement s'est tenu lors d'une soirée techno à Paris, pour plonger la marque au cœur de la culture underground.",
      ],
    },
  ],
  results: {
    items: [
      { value: "+5 000", label: "Occasions de voir lors de l'événement" },
      { value: "50", label: "Mentions #ReligionxAnetha" },
      { value: "20", label: "Contenus exclusifs créés" },
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
