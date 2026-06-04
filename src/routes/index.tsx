import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

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
      <section className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-foreground/60">
          Étape 1 — squelette en place
        </p>
        <h1 className="text-5xl md:text-7xl">
          Gagnez en <em>visibilité</em><br />sans vendre votre âme.
        </h1>
        <p className="mt-8 max-w-xl text-base text-foreground/80">
          Le hero, les sections et le contenu réel arrivent à l'étape suivante.
        </p>
      </section>
    </SiteLayout>
  );
}
