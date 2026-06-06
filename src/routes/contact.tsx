import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Calendar, Mail, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { submitContact } from "@/lib/contact.functions";

const CALENDLY_URL =
  "https://calendly.com/laetitia-mattioli/30-min-de-diagnostic-offert";
const CONTACT_EMAIL = "hello@nowadaysagency.com";
const INSTAGRAM_URL = "https://www.instagram.com/nowadays.agency/";
const LINKEDIN_URL = "https://www.linkedin.com/company/nowadays-agency/";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Discutons de votre projet | Nowadays" },
      {
        name: "description",
        content:
          "Solopreneur·e, asso, coopérative ou PME engagée ? Envoyez-nous un mot, on revient sous 24 h ouvrées avec une réponse réelle, pas un script de vente.",
      },
      { property: "og:title", content: "Contact — Nowadays Agency" },
      {
        property: "og:description",
        content:
          "Réponse sous 24 h ouvrées. Pour les projets qui ont du sens.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Status = "idle" | "sending" | "success" | "error";

function ContactPage() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg(null);

    const fd = new FormData(e.currentTarget);
    try {
      await submit({
        data: {
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          organization: String(fd.get("organization") || ""),
          needType: String(fd.get("needType") || "autre") as
            | "accompagnement"
            | "cooperative-asso"
            | "formation"
            | "autre",
          message: String(fd.get("message") || ""),
          consent: fd.get("consent") === "on",
          website: String(fd.get("website") || ""),
        },
      });
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue");
    }
  }

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-rose-light">
        <div className="mx-auto max-w-4xl px-6 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-rose-dark">
            On vous écoute
          </p>
          <h1 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
            Discutons de <em className="not-italic italic text-rose-dark">votre projet</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-mono text-base text-ink leading-relaxed whitespace-pre-line">
            Réponse sous 24 h ouvrées.{"\n"}(normalement si tout se passe bien on reste humaine :)
          </p>
        </div>
      </section>

      {/* Form + sidecar */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Form */}
          <div className="rounded-md bg-rose-light p-6 md:p-10">
            {status === "success" ? (
              <div className="py-12 text-center">
                <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
                  Message <em className="not-italic italic text-rose-dark">bien reçu</em>.
                </h2>
                <p className="mx-auto mt-6 max-w-md font-mono text-base text-ink leading-relaxed">
                  On revient vers vous sous 24 h ouvrées. En attendant,
                  vous pouvez aussi réserver un créneau directement.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-dark px-8 py-4 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-bordeaux"
                >
                  Réserver un appel <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6" noValidate>
                {/* honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />

                <div>
                  <label htmlFor="c-name" className="font-mono text-sm text-ink">
                    Nom & prénom <span className="text-rose-dark">*</span>
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={100}
                    className="mt-2 block w-full rounded-full bg-cream px-5 py-3 font-mono text-sm text-ink outline-none focus:ring-2 focus:ring-rose-dark"
                  />
                </div>

                <div>
                  <label htmlFor="c-email" className="font-mono text-sm text-ink">
                    Email <span className="text-rose-dark">*</span>
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="mt-2 block w-full rounded-full bg-cream px-5 py-3 font-mono text-sm text-ink outline-none focus:ring-2 focus:ring-rose-dark"
                  />
                </div>

                <div>
                  <label htmlFor="c-org" className="font-mono text-sm text-ink">
                    Structure ou projet{" "}
                    <span className="text-ink/60">(optionnel)</span>
                  </label>
                  <input
                    id="c-org"
                    name="organization"
                    type="text"
                    maxLength={200}
                    className="mt-2 block w-full rounded-full bg-cream px-5 py-3 font-mono text-sm text-ink outline-none focus:ring-2 focus:ring-rose-dark"
                  />
                </div>

                <div>
                  <label htmlFor="c-need" className="font-mono text-sm text-ink">
                    Type de besoin <span className="text-rose-dark">*</span>
                  </label>
                  <select
                    id="c-need"
                    name="needType"
                    required
                    defaultValue=""
                    className="mt-2 block w-full rounded-full bg-cream px-5 py-3 font-mono text-sm text-ink outline-none focus:ring-2 focus:ring-rose-dark"
                  >
                    <option value="" disabled>
                      Choisissez une option…
                    </option>
                    <option value="accompagnement">
                      Accompagnement communication
                    </option>
                    <option value="cooperative-asso">
                      Coopérative, asso ou ONG
                    </option>
                    <option value="formation">Formation / atelier</option>
                    <option value="autre">Autre / je ne sais pas encore</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="c-msg" className="font-mono text-sm text-ink">
                    Votre message <span className="text-rose-dark">*</span>
                  </label>
                  <textarea
                    id="c-msg"
                    name="message"
                    required
                    minLength={10}
                    maxLength={4000}
                    rows={6}
                    placeholder="Racontez-nous votre projet, vos défis, vos délais…"
                    className="mt-2 block w-full rounded-3xl bg-cream px-5 py-4 font-mono text-sm text-ink outline-none focus:ring-2 focus:ring-rose-dark"
                  />
                </div>

                <label className="flex items-start gap-3 font-mono text-sm text-ink leading-relaxed">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 accent-rose-dark"
                  />
                  <span>
                    J'accepte que mes informations soient utilisées pour répondre
                    à ma demande. Aucune revente, aucune newsletter sans accord
                    explicite.
                  </span>
                </label>

                {status === "error" && errorMsg && (
                  <p
                    role="alert"
                    className="rounded-md bg-bordeaux/10 px-4 py-3 font-mono text-sm text-bordeaux"
                  >
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-dark px-10 py-5 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-bordeaux disabled:opacity-60"
                >
                  {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
                  {status !== "sending" && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>

          {/* Sidecar */}
          <aside className="space-y-8">
            <div className="rounded-md border border-rose-light bg-cream p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-rose-dark">
                Plutôt en visio ?
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.1] text-ink">
                Réservez un <em className="not-italic italic text-rose-dark">appel
                de 30 min</em>, gratuit.
              </h2>
              <p className="mt-4 font-mono text-sm text-ink leading-relaxed">
                Pour voir si on est alignés sans engagement.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-cream transition-colors hover:bg-bordeaux"
              >
                <Calendar className="h-4 w-4" /> Choisir un créneau
              </a>
            </div>

            <div className="space-y-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink">
                Autres canaux
              </p>
              <ul className="space-y-4 font-mono text-sm text-ink">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-rose-dark" aria-hidden />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="underline underline-offset-4 hover:text-rose-dark"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="h-4 w-4 text-rose-dark" aria-hidden />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-rose-dark"
                  >
                    @nowadays.agency
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-rose-dark" aria-hidden />
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-rose-dark"
                  >
                    Nowadays Agency
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-md bg-rose-light p-6">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink">
                Pour qui ?
              </p>
              <p className="mt-4 font-mono text-sm text-ink leading-relaxed">
                Solopreneur·es, créateur·ices, artisan·es, assos, coopératives
                et PME à impact. Si votre projet a du sens, on a sans doute
                quelque chose à se dire.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Ce qui se passe ensuite */}
      <section className="bg-rose-light">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink text-center">
            Ce qui se passe <em className="not-italic italic text-rose-dark">ensuite</em>.
          </h2>
          <ol className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Vous écrivez",
                d: "Quelques lignes suffisent : qui vous êtes, votre projet, ce qui vous bloque.",
              },
              {
                n: "02",
                t: "On échange 30 min",
                d: "Visio sans pression. On clarifie l'enjeu et on dit franchement si on peut aider.",
              },
              {
                n: "03",
                t: "Devis sur-mesure",
                d: "Sous 5 jours ouvrés. Pas de copier-coller, pas de couverture marketing.",
              },
            ].map((s) => (
              <li key={s.n}>
                <p className="font-serif text-5xl text-rose-dark leading-none">
                  {s.n}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-ink leading-tight">
                  {s.t}
                </h3>
                <p className="mt-3 font-mono text-sm text-ink leading-relaxed">
                  {s.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
            Questions <em className="not-italic italic text-rose-dark">fréquentes</em>
          </h2>
          <dl className="mt-12 space-y-8">
            {[
              {
                q: "Quels types de structures accompagnez-vous ?",
                a: "Des solopreneur·es jusqu'aux PME, en passant par les assos, ONG et coopératives. Le point commun : un projet engagé, éthique ou à impact.",
              },
              {
                q: "Sous quel délai démarrons-nous ?",
                a: "Premier échange sous une semaine, démarrage opérationnel généralement 2 à 4 semaines après signature, selon le périmètre.",
              },
              {
                q: "Travaillez-vous à distance ou en présentiel ?",
                a: "Les deux. Nous sommes basées à Saint-Aubin-sur-Yonne et accompagnons partout en France (et au-delà) en visio.",
              },
              {
                q: "Donnez-vous une fourchette tarifaire ?",
                a: "Oui, dès le premier appel. Nos formats vont de l'atelier ponctuel à l'accompagnement mensuel. Aucun engagement long terme imposé.",
              },
            ].map((f) => (
              <div key={f.q} className="border-b border-rose-light pb-6">
                <dt className="font-serif text-xl text-ink">{f.q}</dt>
                <dd className="mt-3 font-mono text-sm text-ink leading-relaxed">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}
