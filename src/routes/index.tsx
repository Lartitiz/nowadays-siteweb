import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";

import { DaLayout } from "@/components/da/DaLayout";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePreuve } from "@/components/home/HomePreuve";
import { HomeConstat } from "@/components/home/HomeConstat";
import { HomeManifeste } from "@/components/home/HomeManifeste";
import { HomeConcretement } from "@/components/home/HomeConcretement";
import { HomeOffres } from "@/components/home/HomeOffres";
import { HomeEtapes } from "@/components/home/HomeEtapes";
import { HomeResultats } from "@/components/home/HomeResultats";
import { HomeDifferences } from "@/components/home/HomeDifferences";
import { HomePourQui } from "@/components/home/HomePourQui";
import { HomeObjections } from "@/components/home/HomeObjections";
import { HomeLaetitia } from "@/components/home/HomeLaetitia";
import { HomeTemoignages } from "@/components/home/HomeTemoignages";
import { HomeMegaphone } from "@/components/home/HomeMegaphone";
import { HomePresse } from "@/components/home/HomePresse";
import { HomeCtaFinal } from "@/components/home/HomeCtaFinal";

const TITRE = "Agence de communication engagée et responsable | Nowadays Agency";

const DESCRIPTION =
  "Nowadays Agency, agence de communication engagée et responsable. On vise une communication plus éthique, On aide les créatrices, associations, coopératives et PME à impact à gagner en visibilité, sans vendre leur âme. Basée à Joigny, partout en France.";

const OG_IMAGE = absoluteUrl("/og-image-nowadays.jpg");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:title", content: TITRE },
      {
        property: "og:description",
        content: "On aide les projets engagés à gagner en visibilité, sans vendre leur âme.",
      },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITRE },
      {
        name: "twitter:description",
        content: "On aide les projets engagés à gagner en visibilité, sans vendre leur âme.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    // Polices et feuille du design system sont désormais chargées pour tout le
    // site depuis __root.tsx : elles servent aussi aux pages converties.
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Nowadays Agency",
          description:
            "Agence de communication engagée et responsable, qui vise une communication plus éthique, pour les créatrices, associations, coopératives et PME à impact.",
          url: absoluteUrl("/"),
          email: "laetitia@nowadaysagency.com",
          telephone: "+33614133921",
          founder: { "@type": "Person", name: "Laetitia Mattioli" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Joigny",
            postalCode: "89300",
            addressCountry: "FR",
          },
          areaServed: "FR",
          priceRange: "€€",
          knowsAbout: [
            "communication engagée",
            "communication responsable",
            "communication éthique",
            "stratégie de communication",
            "réseaux sociaux",
            "relations presse",
            "référencement naturel",
          ],
          sameAs: [
            "https://www.instagram.com/nowadays.agency/",
            "https://www.linkedin.com/company/nowadays-agency/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

// La home passe par DaLayout, le gabarit du design system (en-tête, pied de
// page et classe .nowadays-da). Les pages pas encore converties gardent
// SiteLayout, inchangé.
function Index() {
  return (
    <DaLayout className="page-accueil">
      <HomeHero />
      <HomePreuve />
      <HomeConstat />
      <HomeManifeste />
      <HomeConcretement />
      <HomeOffres />
      <HomeEtapes />
      <HomeResultats />
      <HomeDifferences />
      <HomePourQui />
      <HomeObjections />
      <HomeLaetitia />
      <HomeTemoignages />
      <HomeMegaphone />
      <HomePresse />
      <HomeCtaFinal />
    </DaLayout>
  );
}
