import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useSubscribe } from "@/lib/useSubscribe";
import { SiteLayout } from "@/components/site/SiteLayout";
import cover from "@/assets/formation-ig/cover.png.asset.json";
import mockupOptim from "@/assets/formation-ig/mockup-optimisation.png.asset.json";

export const Route = createFileRoute("/formation-gratuite-instagram")({
  head: () => ({
    meta: [
      { title: "Formation Instagram gratuite — Guide PDF | Nowadays Agency" },
      {
        name: "description",
        content:
          "Reçois gratuitement le guide PDF pour bâtir une stratégie Instagram alignée : 5 modules, ~90 min, pensé pour les créatrices et marques engagées.",
      },
      { property: "og:title", content: "Formation Instagram gratuite — Guide PDF" },
      {
        property: "og:description",
        content:
          "Le guide PDF gratuit pour bâtir une stratégie Instagram alignée et durable. 5 modules, ~90 min.",
      },
      { property: "og:url", content: "/formation-gratuite-instagram" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: cover.url },
    ],
    links: [{ rel: "canonical", href: "/formation-gratuite-instagram" }],
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
      <Program />
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
          {/* Texte */}
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose-dark">
              · Formation gratuite ·
            </p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-ink">
              Formation Instagram <em className="text-rose-dark">gratuite</em>
            </h1>
            <p className="mt-8 max-w-xl font-mono text-base text-ink leading-relaxed">
              Établis toute ta stratégie Instagram grâce à notre guide PDF —
              pensé pour les créatrices, artisanes et marques qui veulent
              communiquer avec sens.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#recevoir"
                className="inline-flex items-center justify-center rounded-sm bg-ink px-7 py-4 font-mono text-sm uppercase tracking-[0.16em] text-cream transition-colors hover:bg-bordeaux"
              >
                Recevoir le guide
              </a>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70">
                Guide PDF · 5 modules · ~90 min
              </p>
            </div>
          </div>

          {/* Visuel */}
          <div className="md:col-span-5">
            <div className="relative">
              <img
                src={cover.url}
                alt="Aperçu du guide Instagram gratuit Nowadays : planches d'écrans, conseils stratégie et exemples de contenus."
                className="w-full rounded-sm shadow-[0_30px_60px_-30px_rgba(26,5,13,0.35)]"
                style={{ transform: "rotate(-1.5deg)" }}
              />
            </div>
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
          +200 créatrices &amp; projets engagés · ont déjà téléchargé le guide
          · ⭐ ⭐ ⭐ ⭐ ⭐
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
          Pourquoi télécharger ce <em className="text-rose-dark">guide</em> ?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-3 space-y-6 font-mono text-base text-ink leading-relaxed">
            <p>
              Tu te sens un peu comme un <em>fantôme digital</em> sur
              Instagram malgré tes efforts ? Tu postes… et personne ne répond
              à l'appel ?
            </p>
            <p>
              Cette mini-formation gratuite est là pour t'aider à
              communiquer avec sens, gagner en visibilité et arrêter de
              t'épuiser à chercher la bonne idée de post à 23h57.
            </p>
            <p>
              Des solutions pratiques pour bâtir une stratégie Instagram
              performante, tout en respectant tes valeurs et tes objectifs.
            </p>
          </div>

          <blockquote className="md:col-span-2 border-l-2 border-bordeaux pl-6 font-serif text-2xl italic text-rose-dark leading-snug">
            « Super utile et bien organisée. Les dossiers sont bien pensés —
            ça change des formations floues qu'on ne termine jamais. »
            <footer className="mt-4 font-mono text-xs not-italic uppercase tracking-[0.2em] text-ink/70">
              — Témoignage participante
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
    title: "Un compte Instagram qui attire",
    body: "Les bases pour capter l'attention en 3 secondes. Sans devoir se transformer en influenceur·se en maillot de bain.",
  },
  {
    n: "02",
    title: "Des techniques hors-tutos YouTube",
    body: "Des méthodes testées sur des marques éthiques. Pas du blabla de coach business.",
  },
  {
    n: "03",
    title: "Une planification simple",
    body: "Fini le syndrome du « je sais pas quoi poster ». Un calendrier clair et tenable.",
  },
  {
    n: "04",
    title: "Une marque qui te ressemble",
    body: "Parce que ton univers est unique — et que ton logo pastel mérite mieux que 12 likes.",
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
              4 acquis concrets, pensés pour passer de « je poste au feeling »
              à une présence Instagram alignée et durable.
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
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ AUDIENCE --- */

const AUDIENCE = [
  {
    label: "Créatrice ou artisane",
    body: "Mode, bien-être, déco, artiste — un univers de marque à faire rayonner.",
  },
  {
    label: "Débordée mais motivée",
    body: "Même avec 2h/semaine à consacrer à ta communication.",
  },
  {
    label: "En quête d'une boussole",
    body: "Tu veux structurer une stratégie claire et alignée avec tes valeurs.",
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
            <div
              key={a.label}
              className="border-t border-ink pt-6"
            >
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

        <div className="mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <img
            src={mockupOptim.url}
            alt="Mockup d'une page du guide : optimisation du compte Instagram (photo de profil, bio, stories, feed)."
            className="w-full rounded-sm shadow-[0_30px_60px_-30px_rgba(26,5,13,0.3)]"
            style={{ transform: "rotate(-1deg)" }}
          />
          <img
            src={cover.url}
            alt="Aperçu des planches du guide stratégie Instagram."
            className="w-full rounded-sm shadow-[0_30px_60px_-30px_rgba(26,5,13,0.3)]"
            style={{ transform: "rotate(1.2deg)" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- PROGRAM --- */

const MODULES = [
  {
    n: "01",
    duration: "≈ 20 min",
    title: "Bases",
    goal:
      "Poser des fondations solides et cohérentes, alignées avec ton univers lifestyle/éthique.",
    content: [
      "Contexte & enjeux : pourquoi un bon profil, alignement des valeurs.",
      "2 axes clés : bio (positionnement, ton, CTA minimal) et photo (cohérence visuelle).",
      "Les « highlights éthiques » triés et structurés.",
    ],
    activity:
      "Remplir une grille « identité visuelle + 3 parties clés de la bio ».",
    deliverable:
      "Version prête de ta bio + plan rapide de 3 highlights alignés.",
  },
  {
    n: "02",
    duration: "≈ 20 min",
    title: "Stratégie média",
    goal:
      "Jeter les bases d'un mix de formats (visuels / vidéos) adaptés à ton audience.",
    content: [
      "Panorama des formats : Reels, Feed, Stories, Carrousels.",
      "Exemples inspirants, codes éthiques centrés communauté & storytelling.",
    ],
    activity:
      "Remplir ta grille média hebdomadaire (ex. Lundi : quote + Reel, Mercredi : carrousel, Vendredi : Story participative).",
    deliverable:
      "Plan média hebdo visuel + note « pourquoi ce choix, impact attendu ».",
  },
  {
    n: "03",
    duration: "≈ 15 min",
    title: "Stratégie description",
    goal:
      "Maîtriser les mots justes, efficaces, alignés, pour inviter à l'action en douceur.",
    content: [
      "Anatomie d'une légende qui fonctionne : accroche, storytelling, valeur, CTA.",
      "3 modèles de légendes : storytelling produit, engagement doux, appel à la réflexion.",
    ],
    activity:
      "Choisir un de tes futurs posts et réécrire la légende en appliquant un modèle.",
    deliverable: "Ta légende prête, avec note « pourquoi ça marche ».",
  },
  {
    n: "04",
    duration: "≈ 15 min",
    title: "Stratégie d'engagement",
    goal: "Réveiller une communauté engagée sans y passer ta vie.",
    content: [
      "Formats d'engagement efficaces : questions ouvertes, sondages Story, tags/collabs.",
      "Calendrier interactif (ex. « poser une question le mardi », « répondre aux DM le jeudi »).",
    ],
    activity:
      "Identifier 2 à 3 tactiques d'engagement à tester cette semaine.",
    deliverable:
      "Mini-planning d'interactions + 2 modèles de phrases à adapter.",
  },
  {
    n: "05",
    duration: "≈ 20 min",
    title: "Planification",
    goal:
      "Transformer ton énergie en routine fluide et créative — sans pression.",
    content: [
      "Pourquoi un calendrier éditorial : clarté, régularité, alignement.",
      "Les 4 piliers de contenu (inspiration, mise en valeur, communauté, valeurs).",
    ],
    activity:
      "Remplir un calendrier type (1 mois) avec ton mix de contenu selon tes 4 piliers.",
    deliverable: "Calendrier éditorial visuel (template Canva) prêt à l'emploi.",
  },
];

function Program() {
  return (
    <section className="bg-cream border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose-dark">
            · Programme ·
          </p>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
            5 modules, <em className="text-rose-dark">~90 min</em> en tout
          </h2>
        </div>

        <ol className="mt-16 divide-y divide-ink/15">
          {MODULES.map((m) => (
            <li
              key={m.n}
              className="grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-2">
                <p
                  className="font-serif text-7xl leading-none text-rose-dark"
                  style={{ opacity: 0.85 }}
                >
                  {m.n}
                </p>
              </div>

              <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-ink/70">
                  {m.duration}
                </p>
                <h3 className="mt-3 font-serif text-3xl text-ink leading-tight">
                  {m.title}
                </h3>
                <p className="mt-4 font-mono text-sm text-ink leading-relaxed">
                  {m.goal}
                </p>
              </div>

              <div className="md:col-span-6 space-y-6">
                <ul className="space-y-2 font-mono text-sm text-ink leading-relaxed list-disc pl-5 marker:text-rose-dark">
                  {m.content.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>

                <div className="space-y-3 border border-ink/20 bg-cream p-5 rounded-sm">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-rose-dark">
                    Activité guidée
                  </p>
                  <p className="font-mono text-sm text-ink leading-relaxed">
                    {m.activity}
                  </p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-rose-dark">
                    Livrable
                  </p>
                  <p className="font-mono text-sm text-ink leading-relaxed">
                    {m.deliverable}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- FINAL CTA --- */

function FinalCTA() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const { sent, sending, error, submit } = useSubscribe("formation-instagram");

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
              Reçois ton guide <em className="text-rose-mid">maintenant</em>
            </h2>
            <p className="mt-6 font-mono text-sm text-cream/80 leading-relaxed">
              Le PDF arrive directement dans ta boîte mail. Pas de spam,
              désinscription en 1 clic.
            </p>
          </div>

          <div className="md:col-span-6">
            {sent ? (
              <div className="border border-rose-light/40 p-8 rounded-sm">
                <p className="font-serif text-2xl text-cream leading-snug">
                  Merci — ton guide arrive dans quelques minutes.
                </p>
                <p className="mt-4 font-mono text-sm text-cream/80">
                  Pense à vérifier tes spams. Bonne planification ♡
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="fi-prenom"
                    className="font-mono text-xs uppercase tracking-[0.2em] text-cream/80"
                  >
                    Ton prénom
                  </label>
                  <input
                    id="fi-prenom"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 block w-full rounded-sm bg-cream/10 border border-rose-light/40 px-4 py-3 font-mono text-sm text-cream placeholder:text-cream/50 outline-none focus:border-rose-mid"
                  />
                </div>
                <div>
                  <label
                    htmlFor="fi-email"
                    className="font-mono text-xs uppercase tracking-[0.2em] text-cream/80"
                  >
                    Ton e-mail
                  </label>
                  <input
                    id="fi-email"
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
                  {sending ? "Envoi…" : "Envoyer le guide"}
                </button>
                {error && (
                  <p className="font-mono text-[11px] text-rose-mid leading-relaxed">
                    {error}
                  </p>
                )}
                <p className="font-mono text-[11px] text-cream/60 leading-relaxed">
                  En soumettant, tu acceptes de recevoir le guide et nos
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
          Bonne planification, <span className="text-rose-dark">♡ Laetitia</span>
        </p>
      </div>
    </section>
  );
}
