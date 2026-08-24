import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { buildSitemapXml } from "@/lib/sitemap";

// N'est atteint que si `src/server.ts` n'a pas déjà intercepté /sitemap.xml
// en amont (ex. dev server hors flux Worker). En prod, la requête est servie
// directement par server.ts pour contourner un bug de TanStack Start qui
// écrase ce Content-Type par "text/html" quand l'Accept du client ne
// mentionne pas explicitement application/xml — le cas de Googlebot et de la
// plupart des lecteurs de sitemap.
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = await buildSitemapXml();
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
