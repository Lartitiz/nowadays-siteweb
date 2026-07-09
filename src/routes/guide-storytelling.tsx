import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useSubscribe } from "@/lib/useSubscribe";
import { SiteLayout } from "@/components/site/SiteLayout";
import cover from "@/assets/guide-storytelling/cover.png";
import canvas from "@/assets/guide-storytelling/mockup-canvas.png";

export const Route = createFileRoute("/guide-storytelling")({
  head: () => ({
    meta: [
      { title: "Guide storytelling gratuit — Méthode PDF en 5 étapes | Nowadays Agency" },
      {
        name: "description",
        content:
          "Reçois le guide PDF gratuit pour écrire le storytelling de ta marque en 5 étapes. Canevas pratique, exemples concrets, méthode testée sur des marques éthiques.",
      },
      { property: "og:title", content: "Guide storytelling gratuit — Méthode PDF en 5 étapes" },
      {
        property: "og:description",
        content:
          "Le guide PDF gratuit pour structurer ton récit de marque en 5 étapes. Canevas pratique inclus.",
      },
      { property: "og:url", content: "/guide-storytelling" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: cover },
    ],
    links: [{ rel: "canonical", href: "/guide-storytelling" }],
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
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose-dark">
              · Guide gratuit ·
            </p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-ink">
              Le guide storytelling <em className="text-rose-dark">gratuit</em>
            </h1>
            <p className="mt-8 max-w-xl font-mono text-base text-ink leading-relaxed">
              Écris l'histoire de ta marque en 5 étapes — la méthode PDF qu'on
              utilise avec nos clientes pour transformer un message flou en
              récit qui résonne.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#recevoir"
                className="inline-flex items-center justify-center rounded-sm bg-ink px-7 py-4 font-mono text-sm uppercase tracking-[0.16em] text-cream transition-colors hover:bg-bordeaux"
              >
                Recevoir le guide
              </a>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70">
                Guide PDF · 5 étapes · canevas inclus
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <img
                src={cover}
                alt="Aperçu du guide Storytelling gratuit Nowadays : couverture éditoriale et méthode en 5 étapes."
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
          +200 marques engagées · ont structuré leur récit · ⭐ ⭐ ⭐ ⭐ ⭐
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
          Pourquoi écrire son <em className="text-rose-dark">storytelling</em> ?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-3 space-y-6 font-mono text-base text-ink leading-relaxed">
            <p>
              Tu sais ce que tu fais. Tu sais pourquoi tu le fais. Mais quand
              il faut <em>le raconter</em> — bio Instagram, page À propos,
              pitch en soirée — la phrase juste s'évapore.
            </p>
            <p>
              Le storytelling, ce n'est pas un exercice de style. C'est le fil
              qui relie ce que tu fais, à qui tu le fais, et pourquoi ça compte.
              Sans ce fil, ta communication ressemble à toutes les autres.
            </p>
            <p>
              Ce guide te donne une méthode concrète, testée sur les marques
              qu'on accompagne, pour formuler un récit qui te ressemble — et
              que tu pourras décliner partout.
            </p>
          </div>

          <blockquote className="md:col-span-2 border-l-2 border-bordeaux pl-6 font-serif text-2xl italic text-rose-dark leading-snug">
            « Simple, clair et hyper efficace. Ce guide m'a permis de créer un
            storytelling qui résonne vraiment. »
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
    title: "Un récit qui résonne",
    body: "Une histoire de marque ancrée, qui parle au cœur sans tomber dans le pathos ni le storytelling de coach.",
  },
  {
    n: "02",
    title: "Une voix distinctive",
    body: "Un ton de marque reconnaissable en 3 lignes, qui te différencie sans avoir à crier plus fort.",
  },
  {
    n: "03",
    title: "Un fil réutilisable partout",
    body: "Bio, page À propos, posts, pitch client, newsletter — la même colonne vertébrale, déclinée.",
  },
  {
    n: "04",
    title: "Des contenus qui convertissent",
    body: "Sans vendre. Parce qu'une bonne histoire fait plus de travail qu'une promo répétée 30 fois.",
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
              4 acquis concrets, pour passer d'un message qu'on oublie à un
              récit qu'on retient — et qu'on partage.
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
    label: "Entrepreneur·e en quête de voix",
    body: "Tu lances ou refondes ta marque et tu veux poser un récit fondateur clair, pas un slogan de plus.",
  },
  {
    label: "Freelance qui veut sortir du CV",
    body: "Tu ne veux plus vendre tes compétences à la liste — tu veux raconter ce qui te rend unique.",
  },
  {
    label: "Marque éthique en quête d'incarnation",
    body: "Tu as les valeurs, l'impact, le produit. Manque le récit qui les fait tenir ensemble.",
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

        <div className="mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <img
            src={canvas}
            alt="Mockup d'une page intérieure du guide : le canevas de storytelling en 5 étapes."
            loading="lazy"
            className="w-full rounded-sm shadow-[0_30px_60px_-30px_rgba(26,5,13,0.3)]"
            style={{ transform: "rotate(-1deg)" }}
          />
          <img
            src={cover}
            alt="Aperçu de la couverture du guide storytelling."
            loading="lazy"
            className="w-full rounded-sm shadow-[0_30px_60px_-30px_rgba(26,5,13,0.3)]"
            style={{ transform: "rotate(1.2deg)" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- PROGRAM --- */

const STEPS = [
  {
    n: "01",
    duration: "≈ 15 min",
    title: "Le terreau",
    goal:
      "Remonter aux racines : le déclic, la colère ou l'évidence qui a fait naître ta marque.",
    content: [
      "Les 3 questions fondatrices : pourquoi maintenant, pourquoi toi, pourquoi ça.",
      "Distinguer le récit personnel et le récit de marque — sans les confondre.",
      "Exemples : 2 marques éthiques qui racontent leur origine sans tomber dans la confession.",
    ],
    activity:
      "Écrire ton « moment de bascule » en 5 lignes, en répondant à : qu'est-ce qui n'allait plus avant cette marque ?",
    deliverable:
      "Ton paragraphe d'origine prêt à l'emploi (bio long format, page À propos).",
  },
  {
    n: "02",
    duration: "≈ 15 min",
    title: "La mission",
    goal:
      "Formuler la transformation que tu rends possible — pas ce que tu vends.",
    content: [
      "La différence entre offre, mission, vision (et pourquoi on confond les trois).",
      "La formule en une phrase : « j'aide [qui] à [transformation] grâce à [comment] ».",
      "Le test des 3 secondes : ta mission tient-elle dans une réponse à « tu fais quoi ? ».",
    ],
    activity:
      "Rédiger 3 versions de ta mission en une phrase, garder celle qui passe le test des 3 secondes.",
    deliverable: "Ta phrase de mission validée, utilisable en pitch et en bio.",
  },
  {
    n: "03",
    duration: "≈ 15 min",
    title: "Le personnage",
    goal:
      "Mettre ton client·e au centre du récit — pas ta marque. C'est lui ou elle, le héros.",
    content: [
      "Anatomie d'un personnage-cible : désir, obstacle, peur, victoire visée.",
      "Le rôle de ta marque : guide, pas héros (le piège du « regardez comme on est bons »).",
      "Comment éviter la persona stéréotypée façon « Sophie, 34 ans, aime le yoga ».",
    ],
    activity:
      "Écrire le « avant / après » d'une cliente type : ce qu'elle vivait, ce qu'elle vit grâce à toi.",
    deliverable:
      "Une fiche personnage actionnable + 2 phrases d'accroche orientées client·e.",
  },
  {
    n: "04",
    duration: "≈ 20 min",
    title: "Le récit en 3 actes",
    goal:
      "Structurer ton histoire de marque en 3 actes — la mécanique narrative qui fonctionne depuis Aristote.",
    content: [
      "Acte 1 : le monde d'avant (le problème, le statu quo qui dysfonctionne).",
      "Acte 2 : la rencontre (ce qui change, ta proposition, le pivot).",
      "Acte 3 : le monde d'après (la transformation concrète, ce qui devient possible).",
      "Adaptation aux formats courts : bio Instagram, sequence email, page de vente.",
    ],
    activity:
      "Remplir le canevas en 3 actes avec les éléments des étapes 1 à 3.",
    deliverable:
      "Ta narrative complète, prête à être déclinée — la colonne vertébrale de toute ta com'.",
  },
  {
    n: "05",
    duration: "≈ 15 min",
    title: "La mise en voix",
    goal:
      "Décliner le récit partout sans le diluer — un ton de marque cohérent du pitch au post.",
    content: [
      "Les 4 surfaces clés : bio (Insta / LinkedIn), page À propos, pitch oral, signature email.",
      "Les 3 marqueurs de voix : vocabulaire récurrent, rythme de phrase, ce qu'on ne dit jamais.",
      "Les pièges : voix corporate, jargon coach, fausse intimité.",
    ],
    activity:
      "Réécrire ta bio Instagram et ta phrase d'ouverture de page À propos avec ton nouveau récit.",
    deliverable:
      "2 textes prêts à publier + ta charte de voix de marque condensée en 1 page.",
  },
];

function Program() {
  return (
    <section className="bg-cream border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose-dark">
            · La méthode ·
          </p>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
            5 étapes, <em className="text-rose-dark">~80 min</em> pour écrire ton récit
          </h2>
        </div>

        <ol className="mt-16 divide-y divide-ink/15">
          {STEPS.map((m) => (
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
  const { sent, sending, error, submit } = useSubscribe("guide-storytelling");

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
                  Pense à vérifier tes spams. Bonne écriture ♡
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="gs-prenom"
                    className="font-mono text-xs uppercase tracking-[0.2em] text-cream/80"
                  >
                    Ton prénom
                  </label>
                  <input
                    id="gs-prenom"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 block w-full rounded-sm bg-cream/10 border border-rose-light/40 px-4 py-3 font-mono text-sm text-cream placeholder:text-cream/50 outline-none focus:border-rose-mid"
                  />
                </div>
                <div>
                  <label
                    htmlFor="gs-email"
                    className="font-mono text-xs uppercase tracking-[0.2em] text-cream/80"
                  >
                    Ton e-mail
                  </label>
                  <input
                    id="gs-email"
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
          Bonne écriture, <span className="text-rose-dark">♡ Laetitia</span>
        </p>
      </div>
    </section>
  );
}
