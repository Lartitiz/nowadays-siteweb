import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import policesCss from "../styles/polices.css?url";
import appCss from "../styles.css?url";
import designSystemCss from "../styles/design-system.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE_ORIGIN, absoluteUrl } from "@/lib/site";
import { DaLayout } from "@/components/da/DaLayout";
import { Confettis } from "@/components/da/primitives";
import { Mesure } from "@/components/Mesure";

// La 404 était en anglais et hors charte. Seule page où le brief autorise
// quelques lignes de texte neuves : on en profite pour la rendre accueillante.
function NotFoundComponent() {
  return (
    <DaLayout>
      <section className="hero vichy">
        <Confettis />
        <div className="wrap">
          <div className="hero-card">
            <h1>
              Cette page n'existe pas.
              <br />
              <em>Votre visibilité, si.</em>
            </h1>
            <p className="hero-copy">
              Le lien est peut-être périmé, ou l'adresse mal recopiée. Reprenons depuis le début.
            </p>
            <div className="actions" style={{ justifyContent: "center" }}>
              <Link className="btn btn-primary" to="/">
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </DaLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const DEFAULT_OG_IMAGE = absoluteUrl("/og-image-nowadays.jpg");

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nowadays | Agence de communication engagée et responsable" },
      {
        name: "description",
        content:
          "Nowadays accompagne les projets engagés (créateur·ices, assos, coopératives, PME à impact) avec une communication joyeuse, éthique et efficace.",
      },
      { property: "og:site_name", content: "Nowadays Agency" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      {
        property: "og:title",
        content: "Nowadays | Agence de communication engagée et responsable",
      },
      {
        property: "og:description",
        content:
          "Nowadays accompagne les projets engagés (créateur·ices, assos, coopératives, PME à impact) avec une communication joyeuse, éthique et efficace.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Nowadays | Agence de communication engagée et responsable",
      },
      {
        name: "twitter:description",
        content:
          "Nowadays accompagne les projets engagés (créateur·ices, assos, coopératives, PME à impact) avec une communication joyeuse, éthique et efficace.",
      },
      // Image de partage par défaut (LinkedIn, WhatsApp, Slack…). C'était une
      // capture d'écran de l'éditeur Lovable, hébergée sur son CDN : hors
      // charte, et hors de notre contrôle. Les pages qui ont leur propre
      // visuel (accueil, articles, études de cas) écrasent ces deux balises.
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [
      // Polices du design system, servies depuis notre domaine. Elles venaient
      // de fonts.googleapis.com, qui recevait donc l'adresse IP de chaque
      // visiteuse sans consentement. Fichiers identiques, rendu inchangé.
      {
        rel: "stylesheet",
        href: policesCss,
      },
      // Les deux fichiers présents sur TOUTES les pages : le corps de texte et
      // les titres. Sans ce préchargement, ils ne sont demandés qu'une fois la
      // feuille analysée, et le texte s'affiche un instant en police de repli.
      // `crossOrigin` est exigé même sur notre propre domaine : une police est
      // toujours chargée en mode CORS, et sans lui le préchargement est perdu.
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/hanken-grotesk-normal-latin.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/instrument-serif-normal-latin.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      // Styles du design system, entièrement scopés sous .nowadays-da : sans
      // cette classe sur la page, ils n'ont aucun effet.
      {
        rel: "stylesheet",
        href: designSystemCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE_ORIGIN}/#organization`,
          name: "Nowadays Agency",
          alternateName: "Nowadays",
          description:
            "Agence de communication engagée et responsable pour les projets plus doux pour le monde.",
          url: absoluteUrl("/"),
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Mesure d'audience maison : voir src/lib/mesure.functions.ts. */}
      <Mesure />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
