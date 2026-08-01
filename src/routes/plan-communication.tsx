import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useSubscribe } from "@/lib/useSubscribe";
import { DaLayout } from "@/components/da/DaLayout";
import cover from "@/assets/plan-communication/cover.png";
import mockup from "@/assets/plan-communication/mockup.png";
import { absoluteUrl } from "@/lib/site";

// Le "template plan de com" est une fonctionnalité de L'Assistant Com' :
// cette route redirige directement vers l'app (pas une page de freebie).
export const Route = createFileRoute("/plan-communication")({
  beforeLoad: () => {
    throw redirect({ href: "https://nowadays-assistant.fr" });
  },
  head: () => ({
    meta: [
      { title: "Template Plan de communication gratuit | Canva à remplir | Nowadays Agency" },
      {
        name: "description",
        content:
          "Le template Canva gratuit pour savoir exactement quoi poster, quand et pourquoi. Calendrier éditorial 3 mois, méthode et questions clés inclus.",
      },
      { property: "og:title", content: "Template Plan de communication gratuit ; Canva à remplir" },
      {
        property: "og:description",
        content:
          "Ton plan de com' prêt à remplir et à appliquer ; pour aligner ta com' avec ton activité réelle.",
      },
      { property: "og:url", content: absoluteUrl("/plan-communication") },
      { property: "og:type", content: "article" },
      { property: "og:image", content: absoluteUrl(cover) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/plan-communication") }],
  }),
  component: Page,
});

function Page() {
  return (
    <DaLayout>
      <Hero />
      <SocialProof />
      <Why />
      <Benefits />
      <Audience />
      <FinalCTA />
      <Signature />
    </DaLayout>
  );
}

/* ---------------------------------------------------------------- HERO --- */

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:items-center md:gap-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.24em] text-framboise">
              · Ressource gratuite ·
            </p>
            <h1 className="mt-6 font-titre text-5xl md:text-7xl leading-[1.02] text-encre">
              Ton plan de com' <em className="text-framboise">prêt à remplir</em>
            </h1>
            <p className="mt-8 max-w-xl text-base text-encre leading-relaxed">
              Le template Canva pour savoir exactement quoi poster, quand et pourquoi ; sans te
              prendre la tête. La méthode qu'on déploie chez Nowadays avec les marques engagées
              qu'on accompagne.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#recevoir"
                className="inline-flex items-center justify-center rounded-sm bg-ink px-7 py-4 text-sm uppercase tracking-[0.16em] text-white transition-colors hover:bg-bordeaux"
              >
                Télécharger mon plan
              </a>
              <p className="text-xs uppercase tracking-[0.2em] text-encre/70">
                Template Canva · 3 mois · prêt à remplir
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <img
              src={cover}
              alt="Aperçu du template Plan de communication Nowadays : piliers de contenu, objectifs et mix canal."
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
    <section className="border-t border-ink/10 bg-rose-pale">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-encre">
          La com' responsable · mais jamais boring · ⭐ ⭐ ⭐ ⭐ ⭐
        </p>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- WHY --- */

function Why() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <h2 className="font-titre text-3xl md:text-5xl leading-[1.1] text-encre">
          Arrête de poster au <em className="text-framboise">feeling</em>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-3 space-y-6 text-base text-encre leading-relaxed">
            <p>
              Un plan de com', ce n'est pas un PowerPoint corporate qui finit dans un dossier
              oublié. C'est une boussole : à quoi sert ta com' ce trimestre, quels messages tu
              portes, sur quels canaux, pour quel résultat.
            </p>
            <p>
              Sans ce cadre, on poste pour poster. Avec ce cadre, chaque contenu sert une intention
              claire ; et tu peux mesurer ce qui fonctionne au lieu de naviguer à vue.
            </p>
            <p>
              Ce template Canva te guide étape par étape : tu remplis les cases, tu obtiens un plan
              de com' sur 3 mois cohérent avec ton activité réelle.
            </p>
          </div>

          <blockquote className="md:col-span-2 rounded-carte bg-rose-pale px-8 py-6 font-titre text-2xl italic text-framboise leading-snug">
            « Pour la première fois, j'ai une vision claire de ma com' sur 3 mois ; et ça change
            tout. »
            <footer className="mt-4 text-xs not-italic uppercase tracking-[0.2em] text-encre/70">
              ; Témoignage cliente
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
    title: "Un calendrier éditorial 3 mois",
    body: "La trame complète pour organiser tes contenus sur un trimestre ; piliers, formats, fréquence.",
  },
  {
    n: "02",
    title: "Les questions qui alignent",
    body: "Les questions clés à te poser pour que ta com' colle vraiment à ton activité du moment.",
  },
  {
    n: "03",
    title: "La méthode étape par étape",
    body: "Tu remplis dans l'ordre, tu obtiens un plan cohérent. Pas besoin d'être stratège pour le faire.",
  },
  {
    n: "04",
    title: "Reprends le contrôle",
    body: "Tu sais pourquoi tu publies, pour qui, et ce que tu attends en retour. Fini la com' subie.",
  },
];

function Benefits() {
  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="font-titre text-3xl md:text-5xl leading-[1.1] text-encre">
              Ce que tu vas en <em className="text-framboise">tirer</em>
            </h2>
            <p className="mt-8 text-sm text-encre leading-relaxed">
              4 acquis concrets, pour passer d'une com' improvisée à une stratégie alignée ; et
              tenable dans le temps.
            </p>
          </div>

          <ul className="md:col-span-7 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <li key={b.n}>
                <p className="text-xs uppercase tracking-[0.24em] text-framboise">{b.n}</p>
                <h3 className="mt-3 font-titre text-2xl text-encre leading-snug">{b.title}</h3>
                <p className="mt-3 text-sm text-encre leading-relaxed">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <img
            src={mockup}
            alt="Mockup du template Plan de communication : tableau croisé piliers / objectifs / canaux sur 3 mois."
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
    label: "Solopreneure qui se lance",
    body: "Tu démarres ton projet et tu veux poser une base solide, pas réinventer ta com' chaque semaine.",
  },
  {
    label: "Marque en quête d'un cap",
    body: "Tu publies depuis un moment, mais tu ne sais plus trop pourquoi. Il est temps de remettre du sens.",
  },
  {
    label: "Asso ou coopérative",
    body: "Vous voulez une vision partagée par toute l'équipe ; un document de référence à actualiser ensemble.",
  },
];

function Audience() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <h2 className="font-titre text-3xl md:text-5xl leading-[1.1] text-encre">
          Pour qui c'est <em className="text-framboise">fait</em> ?
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {AUDIENCE.map((a, i) => (
            <div key={a.label} className="border-t border-ink pt-6">
              <p className="text-xs uppercase tracking-[0.24em] text-framboise">0{i + 1}</p>
              <h3 className="mt-4 font-titre text-2xl text-encre leading-snug">{a.label}</h3>
              <p className="mt-3 text-sm text-encre leading-relaxed">{a.body}</p>
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
  const { sent, sending, error, submit } = useSubscribe("plan-communication");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    void submit(firstName, email);
  }

  return (
    <section id="recevoir" className="bg-jaune">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16 md:items-end">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.24em] text-white/80">
              · Téléchargement gratuit ·
            </p>
            <h2 className="mt-6 font-titre text-3xl md:text-5xl leading-[1.1] text-white">
              Télécharge ton plan <em className="text-rose-mid">maintenant</em>
            </h2>
            <p className="mt-6 text-sm text-white/80 leading-relaxed">
              Le template Canva arrive directement dans ta boîte mail. Pas de spam, désinscription
              en 1 clic.
            </p>
          </div>

          <div className="md:col-span-6">
            {sent ? (
              <div className="border border-rose-pale/40 p-8 rounded-sm">
                <p className="font-titre text-2xl text-white leading-snug">
                  Merci ; ton plan arrive dans quelques minutes.
                </p>
                <p className="mt-4 text-sm text-white/80">
                  Pense à vérifier tes spams. Belle structuration ♡
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="pc-prenom"
                    className="text-xs uppercase tracking-[0.2em] text-white/80"
                  >
                    Ton prénom
                  </label>
                  <input
                    id="pc-prenom"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 block w-full rounded-sm bg-white/10 border border-rose-pale/40 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-rose-mid"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pc-email"
                    className="text-xs uppercase tracking-[0.2em] text-white/80"
                  >
                    Ton e-mail
                  </label>
                  <input
                    id="pc-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 block w-full rounded-sm bg-white/10 border border-rose-pale/40 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-rose-mid"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-4 text-sm uppercase tracking-[0.16em] text-encre transition-colors hover:bg-rose-mid hover:text-encre disabled:opacity-60"
                >
                  {sending ? "Envoi…" : "Télécharger mon plan"}
                </button>
                {error && <p className="text-[11px] text-rose-mid leading-relaxed">{error}</p>}
                <p className="text-[11px] text-white/60 leading-relaxed">
                  En soumettant, tu acceptes de recevoir le template et nos emails. Tes données
                  restent confidentielles (RGPD).
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
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 text-right">
        <p className="font-titre text-2xl italic text-encre">
          Belle structuration, <span className="text-framboise">♡ Laetitia</span>
        </p>
      </div>
    </section>
  );
}
