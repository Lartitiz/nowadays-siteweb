import { createFileRoute } from "@tanstack/react-router";

/*
 * Route déclenchée chaque lundi par Supabase (pg_cron + pg_net) pour envoyer le
 * récap de la semaine. Elle n'est pas dans le sitemap, ne rend aucune page, et
 * refuse tout appel sans le bon jeton.
 *
 * Pourquoi ici et pas une tâche planifiée : le site est déployé sur Cloudflare
 * avec une configuration régénérée à chaque build, où l'on ne peut pas inscrire
 * un cron durablement. Supabase, lui, sait appeler une URL à heure fixe.
 */
export const Route = createFileRoute("/api/recap-hebdo")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { jetonRecap, envoyerRecapHebdo } = await import("@/lib/mesure.server");

        const fourni = new URL(request.url).searchParams.get("cle") ?? "";
        const attendu = jetonRecap();
        // Comparaison en longueur constante : pas de fuite par le temps de réponse.
        if (
          fourni.length !== attendu.length ||
          !fourni.split("").every((c, i) => c === attendu[i])
        ) {
          return new Response("non", { status: 401 });
        }

        const r = await envoyerRecapHebdo();
        return new Response(r.message, { status: r.ok ? 200 : 500 });
      },
    },
  },
});
