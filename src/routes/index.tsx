import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { StatBand } from "@/components/site/StatBand";
import { TiredSection } from "@/components/site/TiredSection";
import { ManifestoSection } from "@/components/site/ManifestoSection";

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
      <StatBand />
      <TiredSection />
      <ManifestoSection />
    </SiteLayout>
  );
}

