import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/cooperative-asso")({
  head: () => ({
    meta: [
      { title: "Ton agency de com — Nowadays" },
      {
        name: "description",
        content:
          "Agence de communication pour coopératives, associations et structures engagées. On prend en charge stratégie, contenus et canaux. À partir de 1 500€.",
      },
      { property: "og:title", content: "Ton agency de com — Nowadays" },
      {
        property: "og:description",
        content:
          "Une agence qui partage vos valeurs, pas une agence corporate.",
      },
    ],
    links: [{ rel: "canonical", href: "/cooperative-asso" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl">Ton agency de com</h1>
        <p className="mt-6 text-foreground/70">
          Contenu de cette page à migrer à l'étape 9.
        </p>
      </section>
    </SiteLayout>
  );
}
