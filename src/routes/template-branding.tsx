import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useSubscribe } from "@/lib/useSubscribe";
import { DaLayout } from "@/components/da/DaLayout";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/template-branding")({
  head: () => ({
    meta: [
      { title: "Template Branding gratuit | Stratégie de marque | Nowadays" },
      {
        name: "description",
        content:
          "Reçois gratuitement notre template de branding : 8 étapes pour construire ta stratégie de marque, de la mission au storytelling et à l'identité visuelle.",
      },
      { property: "og:title", content: "Template Branding gratuit ; Stratégie de marque" },
      {
        property: "og:description",
        content:
          "Le modèle à modifier pour clarifier ta marque en 8 étapes. Gratuit, reçu directement par email.",
      },
      { property: "og:url", content: absoluteUrl("/template-branding") },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/template-branding") }],
  }),
  component: Page,
});

const PLAN = [
  {
    n: "01",
    title: "Ta mission",
    body: "Définis la raison d'être de ta marque : pourquoi elle existe et quel problème elle cherche à résoudre. C'est le socle de ton identité.",
  },
  {
    n: "02",
    title: "Ton audience",
    body: "Identifie tes clientes idéales. Comprends leurs besoins, leurs désirs et comment elles interagissent avec des marques comme la tienne.",
  },
  {
    n: "03",
    title: "Ton offre & positionnement",
    body: "Détaille tes produits ou services et positionne ta marque de manière unique pour te démarquer de la concurrence.",
  },
  {
    n: "04",
    title: "Tes storytellings",
    body: "Crée des histoires captivantes qui communiquent tes valeurs et résonnent émotionnellement avec ton audience.",
  },
  {
    n: "05",
    title: "Tes valeurs, ennemis et combats",
    body: "Expose tes valeurs fondamentales, identifie les problématiques que tu combats et montre comment ta marque s'y oppose activement.",
  },
  {
    n: "06",
    title: "Ton identité visuelle",
    body: "Développe une identité cohérente qui reflète ta mission : logo, palette de couleurs, style typographique.",
  },
  {
    n: "07",
    title: "Tes territoires d'expression",
    body: "Identifie les plateformes et les moyens de communication où ta marque peut s'exprimer pleinement et toucher ton audience.",
  },
  {
    n: "08",
    title: "Ta liste de contenus à créer",
    body: "Planifie les contenus qui soutiennent ta stratégie de marque, des vidéos engageantes aux articles de blog.",
  },
];

function Page() {
  return (
    <DaLayout>
      <Hero />
      <Plan />
      <Pour />
      <FinalCTA />
      <Signature />
    </DaLayout>
  );
}

function CaptureForm({ id }: { id: string }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const { sent, sending, error, submit } = useSubscribe("template-branding");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    void submit(firstName, email);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-framboise/30 bg-white p-8">
        <p className="font-titre text-2xl text-encre leading-snug">
          Merci ; ton template arrive dans quelques minutes.
        </p>
        <p className="mt-4 text-sm text-encre/70">Pense à vérifier tes spams. Bonne stratégie ♡</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label
          htmlFor={`${id}-prenom`}
          className="text-xs uppercase tracking-[0.2em] text-encre/70"
        >
          Ton prénom
        </label>
        <input
          id={`${id}-prenom`}
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="mt-2 block w-full rounded-full bg-rose-pale px-5 py-3 text-sm text-encre placeholder:text-encre/40 outline-none focus:ring-2 focus:ring-framboise"
        />
      </div>
      <div>
        <label htmlFor={`${id}-email`} className="text-xs uppercase tracking-[0.2em] text-encre/70">
          Ton e-mail
        </label>
        <input
          id={`${id}-email`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 block w-full rounded-full bg-rose-pale px-5 py-3 text-sm text-encre placeholder:text-encre/40 outline-none focus:ring-2 focus:ring-framboise"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center rounded-full bg-framboise px-8 py-4 text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-bordeaux disabled:opacity-60 md:text-sm"
      >
        {sending ? "Envoi…" : "Recevoir mon modèle à modifier"}
      </button>
      {error && <p className="text-[11px] leading-relaxed text-framboise">{error}</p>}
      <p className="text-[11px] leading-relaxed text-encre/50">
        En soumettant, tu acceptes de recevoir le template et nos emails. Tes données restent
        confidentielles (RGPD).
      </p>
    </form>
  );
}

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:items-center md:gap-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.24em] text-framboise">
              · Ressource gratuite ·
            </p>
            <h1 className="mt-6 font-titre text-4xl leading-[1.05] text-encre md:text-6xl">
              Ton template pour ton <em>Branding</em> en cadeau 🎁
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-encre">
              Un modèle à modifier, structuré et pratique, pour clarifier ta stratégie de marque en
              8 étapes. Pensé pour les entrepreneures et créatrices engagées, débutantes ou
              expérimentées.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-carte bg-white p-8">
              <p className="font-titre text-xl text-encre leading-snug">
                Reçois ta ressource gratuite par email
              </p>
              <div className="mt-6">
                <CaptureForm id="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Plan() {
  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-framboise">
            · Le plan du template ·
          </p>
          <h2 className="mt-6 font-titre text-3xl md:text-5xl leading-[1.1] text-encre">
            Ta stratégie de marque, en <em>8 étapes</em>
          </h2>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {PLAN.map((step) => (
            <li key={step.n} className="flex gap-5">
              <span className="font-titre text-4xl leading-none text-framboise" aria-hidden="true">
                {step.n}
              </span>
              <div>
                <h3 className="font-titre text-xl md:text-2xl leading-[1.2] text-encre">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-encre">{step.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pour() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="font-titre text-3xl md:text-5xl leading-[1.1] text-encre">
          À qui s'adresse ce <em>modèle</em> ?
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-encre">
          <p>
            Ce template s'adresse aux entrepreneures et créatrices engagées qui cherchent à
            développer leur activité avec une approche stratégique, que tu sois novice ou
            expérimentée.
          </p>
          <p>Il est conçu pour :</p>
        </div>
        <ul className="mt-6 space-y-4">
          {[
            "Faciliter la création et le renforcement de ton identité de marque.",
            "Explorer diverses stratégies de positionnement pour distinguer ta marque sur le marché.",
            "Maintenir une cohérence de marque dans le temps.",
          ].map((p) => (
            <li
              key={p}
              className="flex gap-4 rounded-carte bg-rose-pale p-6 text-sm leading-relaxed text-encre"
            >
              <span className="shrink-0 text-lg leading-none" aria-hidden="true">
                ✅
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-jaune">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="rounded-carte bg-white p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.24em] text-framboise">
            · Téléchargement gratuit ·
          </p>
          <h2 className="mt-6 font-titre text-3xl md:text-4xl leading-[1.1] text-encre">
            Reçois ton template <em>maintenant</em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-encre/70">
            Le modèle arrive directement dans ta boîte mail. Pas de spam, désinscription en 1 clic.
          </p>
          <div className="mt-8 max-w-md">
            <CaptureForm id="final" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Signature() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 text-right">
        <p className="font-titre text-2xl italic text-encre">
          Bonne stratégie, <span className="text-framboise">♡ Laetitia</span>
        </p>
      </div>
    </section>
  );
}
