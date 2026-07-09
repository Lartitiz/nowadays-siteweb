import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { TiredSection } from "@/components/site/TiredSection";
import { VisibilityBanner } from "@/components/site/VisibilityBanner";
import { ManifestoSection } from "@/components/site/ManifestoSection";
import { OffersSection } from "@/components/site/OffersSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { DifferencesSection } from "@/components/site/DifferencesSection";
import { ExpertiseSection } from "@/components/site/ExpertiseSection";
import { LaetitiaSection } from "@/components/site/LaetitiaSection";
import { PourquoiNowadaysSection } from "@/components/site/PourquoiNowadaysSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { PressSection } from "@/components/site/PressSection";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";

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
          "Nowadays accompagne les projets engagés (solopreneur·es, créateur·ices, assos, coopératives, PME à impact) avec une communication joyeuse, éthique et efficace.",
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
      <ProcessSection />
      <DifferencesSection />
      <ExpertiseSection />
      <LaetitiaSection />
      <PourquoiNowadaysSection />
      <TestimonialsSection />
      <PressSection />
      <FinalCtaSection />
    </SiteLayout>
  );
}

