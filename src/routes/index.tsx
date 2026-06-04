import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { TiredSection } from "@/components/site/TiredSection";
import { VisibilityBanner } from "@/components/site/VisibilityBanner";
import { ManifestoSection } from "@/components/site/ManifestoSection";
import { OffersSection } from "@/components/site/OffersSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nowadays — Agence de communication engagée et éthique" },
      {
        name: "description",
        content:
          "Nowadays accompagne les projets engagés (solopreneur·es, créateur·ices, assos, coopératives, PME à impact) avec une communication joyeuse, éthique et efficace.",
      },
      {
        property: "og:title",
        content: "Nowadays — Agence de communication engagée et éthique",
      },
      {
        property: "og:description",
        content:
          "Une communication joyeuse, éthique et efficace pour les projets plus doux pour le monde.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TiredSection />
      <VisibilityBanner />
      <ManifestoSection />
      <OffersSection />
    </SiteLayout>
  );
}

