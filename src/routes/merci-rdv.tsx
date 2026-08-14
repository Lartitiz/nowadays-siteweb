import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CalendarCheck } from "lucide-react";

import { DaLayout } from "@/components/da/DaLayout";
import { enregistrerAppelConfirme } from "@/lib/mesure.functions";
import { absoluteUrl } from "@/lib/site";

/*
 * Page de redirection Calendly après une réservation RÉELLEMENT confirmée
 * (réglage « Page de confirmation → rediriger vers un site externe » sur
 * l'événement Calendly, pas quelque chose que ce site déclenche). Elle sert à
 * une seule chose : dire à la mesure qu'un clic vers Calendly a fini par un
 * vrai créneau, pas juste un onglet ouvert puis abandonné. Hors menu, hors
 * sitemap, comme /coulisses.
 */

export const Route = createFileRoute("/merci-rdv")({
  head: () => ({
    meta: [
      { title: "Rendez-vous confirmé | Nowadays" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/merci-rdv") }],
  }),
  component: Page,
});

function Page() {
  const enregistrer = useServerFn(enregistrerAppelConfirme);
  const dejaEnvoye = useRef(false);

  useEffect(() => {
    if (dejaEnvoye.current) return;
    dejaEnvoye.current = true;

    void enregistrer({
      data: {
        path: "/merci-rdv",
        referent: document.referrer || null,
        utmSource: new URLSearchParams(window.location.search).get("utm_source"),
      },
    }).catch(() => {
      /* la mesure ne doit jamais gêner la confirmation */
    });
  }, [enregistrer]);

  return (
    <DaLayout>
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
          <CalendarCheck className="mx-auto h-10 w-10 text-framboise" aria-hidden />
          <h1 className="mt-6 font-titre text-3xl md:text-5xl leading-[1.1] text-encre">
            Rendez-vous <em className="not-italic italic text-framboise">confirmé</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base text-encre leading-relaxed">
            L'invitation avec le lien de connexion arrive dans votre boîte mail. À très vite !
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-framboise px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-bordeaux"
          >
            Retour au site <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </DaLayout>
  );
}
