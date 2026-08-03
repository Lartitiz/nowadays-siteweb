import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { getRedirect } from "./lib/redirects";
import { SITE_ORIGIN } from "./lib/site";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);

    // Redirections 301 des anciennes URLs Squarespace (SEO). Traitées avant
    // le SSR : pas de rendu React inutile, un vrai 301 côté serveur.
    const redirectTo = getRedirect(url.pathname);

    // Le site répondait à l'identique sur www ET sur l'apex : deux sites
    // jumeaux pour Google, qui indexait encore le www hérité de Squarespace.
    // Le canonical seul ne suffit pas — on force un vrai 301 vers l'apex.
    // On applique au passage l'éventuelle redirection d'URL pour rester à UN
    // seul saut (www/ancienne-url → apex/nouvelle-url directement).
    // `SITE_ORIGIN` reste la source de vérité du domaine canonique.
    if (url.hostname.startsWith("www.")) {
      return new Response(null, {
        status: 301,
        headers: {
          Location: `${SITE_ORIGIN}${redirectTo ?? url.pathname}${url.search}`,
        },
      });
    }

    if (redirectTo) {
      return new Response(null, {
        status: 301,
        headers: { Location: `${redirectTo}${url.search}` },
      });
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
