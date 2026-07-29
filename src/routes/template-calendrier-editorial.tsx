import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useSubscribe } from "@/lib/useSubscribe";
import { SiteLayout } from "@/components/site/SiteLayout";
import cover from "@/assets/calendrier-editorial/cover.png";
import mockup from "@/assets/calendrier-editorial/mockup.png";
import { absoluteUrl } from "@/lib/site";

// Le "calendrier éditorial" est une fonctionnalité de L'Assistant Com' :
// cette route redirige directement vers l'app (pas une page de freebie).
export const Route = createFileRoute("/template-calendrier-editorial")({
  beforeLoad: () => {
    throw redirect({ href: "https://nowadays-assistant.fr" });
  },
  head: () => ({
    meta: [
      { title: "Template Calendrier éditorial gratuit — Modèle PDF | Nowadays Agency" },
      {
        name: "description",
        content:
          "Reçois gratuitement notre template de calendrier éditorial pour organiser tes contenus (Instagram, Pinterest, blog) et publier sans stress. Modèle à modifier inclus.",
      },
      { property: "og:title", content: "Template Calendrier éditorial gratuit — Modèle PDF" },
      {
        property: "og:description",
        content:
          "Organise tes contenus sans stress avec notre modèle de calendrier éditorial gratuit. Pensé pour les créatrices et marques engagées.",
      },
      { property: "og:url", content: absoluteUrl("/template-calendrier-editorial") },
      { property: "og:type", content: "article" },
      { property: "og:image", content: absoluteUrl(cover) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/template-calendrier-editorial") }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Hero />
      <SocialProof />
      <Why />
      <Benefits />
      <Audience />
      <FinalCTA />
      <Signature />
    </SiteLayout>
  );
}

/* ---------------------------------------------------------------- HERO --- */

function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:items-center md:gap-12">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose-dark">
              · Ressource gratuite ·
            </p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-ink">
              Le calendrier éditorial <em className="text-rose-dark">gratuit</em>
            </h1>
            <p className="mt-8 max-w-xl font-mono text-base text-ink leading-relaxed">
              Organise tes contenus en un coup d'œil — la trame qu'on utilise
              chez Nowadays pour planifier les posts Instagram, Pinterest et
              blog de nos clientes, sans publier au feeling.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#recevoir"
                className="inline-flex items-center justify-center rounded-sm bg-ink px-7 py-4 font-mono text-sm uppercase tracking-[0.16em] text-cream transition-colors hover:bg-bordeaux"
              >
                Recevoir mon modèle
              </a>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70">
                Modèle à modifier · PDF + tableur · prêt en 2 min
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <img
              src={cover}
              alt="Aperçu du template Calendrier éditorial gratuit Nowadays : structure mensuelle et catégories de contenu."
              width={1024}
              height={1280}
              className="w-full rounded-sm shadow-[0_30px_60px_-30px_rgba(26,5,13,0.35)]"
              style={{ transform: "rotate(-1.5deg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- SOCIAL PROOF --- */

function SocialProof() {
  return (
    <section className="bg-cream border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <p className="text-center font-mono text-xs uppercase tracking-[0.24em] text-ink">
          ⭐ ⭐ ⭐ ⭐ ⭐ · « Très structuré et pratique. » · +1 200 téléchargements
        </p>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- WHY --- */

function Why() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
          Pourquoi un <em className="text-rose-dark">calendrier éditorial</em> ?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-3 space-y-6 font-mono text-base text-ink leading-relaxed">
            <p>
              Tu publies <em>quand tu peux</em>, entre deux urgences. Tu
              cherches une idée le matin pour un post qui devait sortir hier.
              Et tu finis par lâcher pendant deux semaines, frustrée.
            </p>
            <p>
              Le problème, ce n'est pas ta motivation. C'est l'absence de
              structure. Avec un calendrier éditorial clair, tu sais
              <em> quoi </em>publier, <em>quand</em> et <em>pourquoi</em> —
              sans devoir tout réinventer chaque semaine.
            </p>
            <p>
              Ce modèle te donne la trame, les catégories de contenu et la
              méthode pour planifier 3 mois d'avance, en 30 minutes par mois.
            </p>
          </div>

          <blockquote className="md:col-span-2 border-l-2 border-bordeaux pl-6 font-serif text-2xl italic text-rose-dark leading-snug">
            « J'ai enfin arrêté de poster au feeling. En une heure tout mon
            mois est calé. »
            <footer className="mt-4 font-mono text-xs not-italic uppercase tracking-[0.2em] text-ink/70">
              — Témoignage lectrice
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ BENEFITS --- */

const BENEFITS = [
  {
    n: "01",
    title: "Une vue d'ensemble claire",
    body: "Tous tes contenus de la semaine, du mois, du trimestre en un seul tableau lisible — fini les post-it.",
  },
  {
    n: "02",
    title: "Des catégories prêtes à l'emploi",
    body: "Pédagogique, coulisses, témoignage, offre, inspiration : la grille pour ne plus jamais sécher.",
  },
  {
    n: "03",
    title: "Une planification multi-canal",
    body: "Pensé pour Instagram, Pinterest et le blog — pour que rien ne se chevauche ni ne disparaisse.",
  },
  {
    n: "04",
    title: "Zéro stress de dernière minute",
    body: "Tu sais à l'avance ce qui sort demain. Tu produis groupé, tu publies sereinement.",
  },
];

function Benefits() {
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
              Ce que tu vas en <em className="text-rose-dark">tirer</em>
            </h2>
            <p className="mt-8 font-mono text-sm text-ink leading-relaxed">
              4 acquis concrets, pour passer d'une com' subie à une com'
              organisée — sans y passer tes week-ends.
            </p>
          </div>

          <ul className="md:col-span-7 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <li key={b.n}>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose-dark">
                  {b.n}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-ink leading-snug">
                  {b.title}
                </h3>
                <p className="mt-3 font-mono text-sm text-ink leading-relaxed">
                  {b.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <img
            src={mockup}
            alt="Mockup du template calendrier éditorial : grille hebdomadaire avec catégories de contenu colorées."
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-sm shadow-[0_30px_60px_-30px_rgba(26,5,13,0.3)]"
            style={{ transform: "rotate(-0.8deg)" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ AUDIENCE --- */

const AUDIENCE = [
  {
    label: "Entrepreneur·e débordée",
    body: "Tu jongles avec dix casquettes, la com' passe toujours en dernier — il te faut un cadre simple à appliquer.",
  },
  {
    label: "Créateur·ice de contenu",
    body: "Tu veux passer du post quotidien improvisé à une vraie ligne éditoriale qui sert ton projet.",
  },
  {
    label: "Petite équipe à impact",
    body: "Vous êtes deux ou trois à gérer la com' — il vous faut un document partagé pour ne plus se marcher dessus.",
  },
];

function Audience() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
          Pour qui c'est <em className="text-rose-dark">fait</em> ?
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {AUDIENCE.map((a, i) => (
            <div key={a.label} className="border-t border-ink pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose-dark">
                0{i + 1}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-ink leading-snug">
                {a.label}
              </h3>
              <p className="mt-3 font-mono text-sm text-ink leading-relaxed">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- FINAL CTA --- */

function FinalCTA() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const { sent, sending, error, submit } = useSubscribe("calendrier-editorial");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    void submit(firstName, email);
  }

  return (
    <section id="recevoir" className="bg-bordeaux">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16 md:items-end">
          <div className="md:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cream/80">
              · Téléchargement gratuit ·
            </p>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.1] text-cream">
              Reçois ton modèle <em className="text-rose-mid">maintenant</em>
            </h2>
            <p className="mt-6 font-mono text-sm text-cream/80 leading-relaxed">
              Le modèle arrive directement dans ta boîte mail. Pas de spam,
              désinscription en 1 clic.
            </p>
          </div>

          <div className="md:col-span-6">
            {sent ? (
              <div className="border border-rose-light/40 p-8 rounded-sm">
                <p className="font-serif text-2xl text-cream leading-snug">
                  Merci — ton modèle arrive dans quelques minutes.
                </p>
                <p className="mt-4 font-mono text-sm text-cream/80">
                  Pense à vérifier tes spams. Belle planification ♡
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="ce-prenom"
                    className="font-mono text-xs uppercase tracking-[0.2em] text-cream/80"
                  >
                    Ton prénom
                  </label>
                  <input
                    id="ce-prenom"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 block w-full rounded-sm bg-cream/10 border border-rose-light/40 px-4 py-3 font-mono text-sm text-cream placeholder:text-cream/50 outline-none focus:border-rose-mid"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ce-email"
                    className="font-mono text-xs uppercase tracking-[0.2em] text-cream/80"
                  >
                    Ton e-mail
                  </label>
                  <input
                    id="ce-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 block w-full rounded-sm bg-cream/10 border border-rose-light/40 px-4 py-3 font-mono text-sm text-cream placeholder:text-cream/50 outline-none focus:border-rose-mid"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center rounded-sm bg-cream px-7 py-4 font-mono text-sm uppercase tracking-[0.16em] text-ink transition-colors hover:bg-rose-mid hover:text-ink disabled:opacity-60"
                >
                  {sending ? "Envoi…" : "Envoyer le modèle"}
                </button>
                {error && (
                  <p className="font-mono text-[11px] text-rose-mid leading-relaxed">
                    {error}
                  </p>
                )}
                <p className="font-mono text-[11px] text-cream/60 leading-relaxed">
                  En soumettant, tu acceptes de recevoir le modèle et nos
                  emails. Tes données restent confidentielles (RGPD).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- SIGNATURE --- */

function Signature() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-16 text-right">
        <p className="font-serif text-2xl italic text-ink">
          Belle planification, <span className="text-rose-dark">♡ Laetitia</span>
        </p>
      </div>
    </section>
  );
}
