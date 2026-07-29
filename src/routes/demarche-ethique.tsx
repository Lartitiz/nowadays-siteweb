import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CALENDLY_URL } from "@/lib/links";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/demarche-ethique")({
  head: () => ({
    meta: [
      { title: "Notre démarche éthique — Faire mieux, pas plus | Nowadays" },
      {
        name: "description",
        content:
          "Notre démarche éthique en toute transparence : dire vrai sans manipuler, émanciper et rendre visible, refuser le marketing anxiogène. Nos méthodes, et nos limites assumées.",
      },
      { property: "og:title", content: "Notre démarche éthique — Faire mieux, pas plus" },
      {
        property: "og:description",
        content:
          "La communication comme outil d'émancipation, pas de manipulation. Ce qu'on met en place, et nos limites.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/demarche-ethique") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/demarche-ethique") }],
  }),
  component: Page,
});

const H2 = "font-serif text-3xl md:text-5xl leading-[1.1] text-ink";
const H3 = "font-serif text-xl md:text-2xl leading-[1.2] text-ink";

function CtaButton({ children = "Réserver un appel découverte" }: { children?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-rose-dark px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-cream transition-colors hover:bg-bordeaux md:text-sm"
    >
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose-dark">
          · Notre démarche éthique ·
        </p>
        <h1 className="mx-auto mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
          Faire mieux, pas plus
        </h1>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 font-mono text-base leading-relaxed text-ink">
          <p>
            Je crée cette page par besoin de transparence. Je veux montrer ce que
            je mets en place, mais aussi mes limites. Car je souhaite faire de la
            communication un <em>outil d'émancipation</em> et non de manipulation.
          </p>
          <p>
            Tout en l'adaptant aux réalités de l'artisanat, de la mode éthique,
            des ONG, de la culture et du design.
          </p>
        </div>
      </div>
    </section>
  );
}

function Coeur() {
  const valeurs = [
    {
      emoji: "💛",
      title: "Dire vrai, sans manipuler",
      text: "Je refuse les artifices qui poussent à l'achat par la peur, la honte ou la confusion. Une communication juste, c'est une communication qui montre ses limites, qui explique, qui contextualise.",
    },
    {
      emoji: "🧡",
      title: "Chercher l'impact positif des messages",
      text: "Le fond compte autant que la forme. J'aide à fabriquer des messages qui font du bien : clairs, utiles, respectueux. Pour ton audience, pour ton équipe, pour le vivant.",
    },
    {
      emoji: "🩷",
      title: "Émanciper et rendre visible",
      text: "La bonne com, pour moi, libère : elle transmet des savoirs, elle rend les équipes autonomes, elle éclaire les coulisses d'un métier.",
    },
  ];
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose-dark">
            · Le cœur de mon travail ·
          </p>
          <h2 className={`${H2} mt-6`}>
            Un manifeste pour une communication plus <em>éthique</em> et
            transparente.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {valeurs.map((v) => (
            <article
              key={v.title}
              className="flex flex-col rounded-[32px] bg-cream p-8"
            >
              <span className="text-4xl leading-none" aria-hidden="true">
                {v.emoji}
              </span>
              <h3 className={`${H3} mt-5`}>{v.title}</h3>
              <p className="mt-3 font-mono text-sm leading-relaxed text-ink">
                {v.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Refus() {
  const points = [
    "Les mécaniques qui exploitent volontairement les biais cognitifs pour manipuler (fabriquer du doute, forcer la rareté, culpabiliser, jouer sur l'urgence artificielle, etc.).",
    "Les campagnes sans finalité positive pour le bien commun.",
    "Les organisations qui accélèrent les dépassements des limites planétaires (énergies fossiles, fast fashion, etc.).",
    "Les campagnes culpabilisantes ou anxiogènes par principe (comptes à rebours agressifs, promesses miracles, « si tu n'achètes pas, tu es… »).",
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className={`${H2} text-center`}>
          Pourquoi refuser les méthodes de marketing manipulatrices ?
        </h2>
        <ul className="mt-12 space-y-5">
          {points.map((p) => (
            <li
              key={p}
              className="flex gap-4 rounded-[24px] bg-rose-light p-6 font-mono text-sm leading-relaxed text-ink"
            >
              <span className="shrink-0 text-xl leading-none" aria-hidden="true">
                🛑
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pedagogie() {
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-3xl px-6 py-24 space-y-10">
        <div className="space-y-5 font-mono text-base leading-relaxed text-ink">
          <p>
            Je travaille majoritairement avec des artisanes, créatrices, petits
            projets, associations, artistes, coopératives. Parce que c'est là que
            j'observe le plus d'alignement entre discours et actes.
          </p>
        </div>
        <div>
          <h2 className={H2}>
            Mon truc, c'est la <em>pédagogie</em> et la transmission.
          </h2>
          <p className="mt-6 font-mono text-base leading-relaxed text-ink">
            Je crois profondément que la com doit émanciper. Concrètement : je
            documente, je rends les choses compréhensibles et réutilisables, je
            livre des méthodes et des templates. « Faire pour » quand c'est
            utile, mais surtout « faire avec » pour que tu sois autonome.
          </p>
        </div>
      </div>
    </section>
  );
}

function Limites() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className={H2}>Mes limites, en toute honnêteté.</h2>
        <div className="mt-8 space-y-5 font-mono text-base leading-relaxed text-ink">
          <p>
            <strong className="font-mono font-medium">
              Je ne suis pas une agence d'éco-conception ou de sobriété
              numérique.
            </strong>{" "}
            J'avance, mais je ne suis pas encore spécialisée. Je sais que
            j'utilise des outils qui ne sont pas toujours alignés (réseaux
            sociaux, suites logicielles, hébergements parfois perfectibles). J'ai
            des efforts à faire, et je m'y engage pas à pas.
          </p>
          <p>
            Même chose pour l'<em>IA générative</em> : je l'utilise avec
            discernement (gain de temps, accessibilité, itérations), mais je
            reste vigilante sur l'éthique (sources, biais, confidentialité) et
            sur la place du travail humain (le sens, la voix, la nuance).
          </p>
        </div>
      </div>
    </section>
  );
}

function Methodes() {
  const methodes = [
    {
      title: "Co-création & transfert",
      text: "Workshops, canevas, checklists, relectures structurées : je veux que toi et ton équipe montiez en compétence.",
    },
    {
      title: "Inclusion by design",
      text: "Checklist anti-stéréotypes, langage accessible, ALT-text, sous-titres, dès la conception.",
    },
    {
      title: "Vente sans manipulation",
      text: "Des CTA clairs, des preuves concrètes, pas de compte à rebours anxiogène, pas de promesse miracle.",
    },
  ];
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className={`${H2} text-center`}>
          Alors, quelles sont mes <em>méthodes</em> ?
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {methodes.map((m) => (
            <article key={m.title} className="rounded-[32px] bg-cream p-8">
              <h3 className={H3}>{m.title}</h3>
              <p className="mt-3 font-mono text-sm leading-relaxed text-ink">
                {m.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className={H2}>On partage la même vision ?</h2>
        <p className="mx-auto mt-6 max-w-xl font-mono text-base leading-relaxed text-ink">
          Réservons 30 minutes pour en parler. Sans engagement, et honnêtement.
        </p>
        <div className="mt-10 flex justify-center">
          <CtaButton>Réserver un appel découverte</CtaButton>
        </div>
      </div>
    </section>
  );
}

function Page() {
  return (
    <SiteLayout>
      <Hero />
      <Coeur />
      <Refus />
      <Pedagogie />
      <Limites />
      <Methodes />
      <FinalCta />
    </SiteLayout>
  );
}
