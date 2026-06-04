import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/accompagnement-communication")({
  head: () => ({
    meta: [
      { title: "Ta binôme de com — Nowadays" },
      {
        name: "description",
        content:
          "Accompagnement communication 6 mois pour solopreneur·es : on construit ta stratégie, on crée tes contenus, on met tout en place. Ensemble. 290€/mois.",
      },
      { property: "og:title", content: "Ta binôme de com — Nowadays" },
      {
        property: "og:description",
        content:
          "Accompagnement communication 6 mois pour solopreneur·es engagé·es.",
      },
    ],
    links: [{ rel: "canonical", href: "/accompagnement-communication" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl">Ta binôme de com</h1>
        <p className="mt-6 text-foreground/70">
          Contenu de cette page à migrer à l'étape 8.
        </p>
      </section>
    </SiteLayout>
  );
}
