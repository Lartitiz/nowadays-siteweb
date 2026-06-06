import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CALENDLY = "https://calendly.com/laetitia-mattioli/appel-decouverte";

export const Route = createFileRoute("/accompagnement-communication")({
  head: () => ({
    meta: [
      { title: "Ta binôme de com — Accompagnement 6 mois — Nowadays" },
      {
        name: "description",
        content:
          "Accompagnement communication 6 mois pour solopreneur·es engagé·es. On construit ta stratégie, on crée tes contenus, on met tout en place. Ensemble. 290€/mois.",
      },
      {
        property: "og:title",
        content: "Ta binôme de com — Accompagnement 6 mois",
      },
      {
        property: "og:description",
        content:
          "Deviens visible sans vendre ton âme. 290€/mois pendant 6 mois.",
      },
    ],
    links: [{ rel: "canonical", href: "/accompagnement-communication" }],
  }),
  component: Page,
});

/* ------------------------------ helpers ------------------------------ */

const H2 = "font-serif text-3xl md:text-5xl leading-[1.1] text-ink";

function CtaButton({
  children = "Réserve ton café visio pour discuter de ton projet",
}: {
  children?: React.ReactNode;
}) {
  return (
    <a
      href={CALENDLY}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-full bg-rose-dark py-3 pl-7 pr-3 font-mono text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-bordeaux md:text-sm"
    >
      {children}
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink transition-transform group-hover:translate-x-1">
        <ArrowRight className="h-4 w-4" />
      </span>
    </a>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-rose-dark">
      {children}
    </p>
  );
}

/* ============================== sections ============================== */

function HeroAccompagnement() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <h1 className="font-serif text-4xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
          Tu fais un travail <em>magnifique</em>.
          <br />
          Mais personne ne le voit.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl font-serif text-2xl text-ink md:text-4xl">
          Deviens <em>visible</em> sans vendre ton âme.
        </p>

        <p className="mt-10 font-mono text-base text-ink">
          Ta com' te prend la tête ? On la fait ensemble.
        </p>

        <p className="mx-auto mt-4 max-w-2xl font-mono text-sm italic text-ink">
          290€/mois pendant 6 mois. Soit moins de 9€ par jour. Le prix d'un
          matcha latte et d'un croissant si tu es à Paris. 😅{" "}
          <span className="not-italic">
            (Sauf que là, ça nourrit ton business pour des années.)
          </span>
        </p>

        <div className="mt-10 flex justify-center">
          <CtaButton>Prends rdv pour discuter de ton projet</CtaButton>
        </div>

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-ink">
          ✨ Appel gratuit · 30 minutes · Sans engagement
        </p>
      </div>
    </section>
  );
}

function ClientsBand() {
  const clients = [
    { name: "Atelier Tiket", style: "serif" },
    { name: "Ikigai", style: "serif-italic" },
    { name: "Boom Boom Dance", style: "mono" },
    { name: "Hopla", style: "serif" },
    { name: "NAPPERON", style: "mono" },
    { name: "SLF", style: "serif" },
  ] as const;

  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-center font-serif text-xl italic text-rose-dark md:text-2xl">
          Elles m'ont fait confiance
        </p>
        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-6">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex h-16 w-full items-center justify-center"
            >
              <span
                className={
                  c.style === "serif"
                    ? "font-serif text-lg text-ink"
                    : c.style === "serif-italic"
                      ? "font-serif text-lg italic text-ink"
                      : "font-mono text-xs uppercase tracking-[0.18em] text-ink"
                }
              >
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className={H2}>
          Ce que tu proposes est beau et responsable. Il est temps qu'on le
          voie.
        </h2>
        <div className="mt-10 space-y-6 font-mono text-base text-ink">
          <p>
            Tu sais que ta com' est importante, mais tu ne sais pas par où
            commencer. Et quand tu essaies, t'as l'impression de parler dans
            le vide.
          </p>
          <p>
            Le pire ? T'as déjà suivi des formations. T'as déjà téléchargé des
            templates. T'as peut-être même payé quelqu'un pour te faire un
            « plan ». Sauf que le plan, il est resté dans un Google Doc que tu
            n'as jamais rouvert. <em>(On en a tou·tes un.)</em>
          </p>
          <p>
            Le problème, c'est pas toi. C'est qu'on t'a donné des outils sans
            personne pour les utiliser avec toi.
          </p>
        </div>
      </div>
    </section>
  );
}

function LaetitiaIntroSection() {
  return (
    <section className="bg-rose-light">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div className="aspect-[4/5] w-full bg-rose-light" />
        <div>
          <SectionEyebrow>Enchantée</SectionEyebrow>
          <h2 className={H2}>
            Je suis Laetitia, et je crois que la communication n'est pas de la
            manipulation, mais un outil <em>d'émancipation</em>.
          </h2>
          <p className="mt-8 font-mono text-base text-ink">
            Parce qu'il existe une autre façon de communiquer.{" "}
            <strong className="font-mono font-medium">
              Ici je te propose une safe place
            </strong>
            . Un espace où ta vision et tes valeurs sont respectées. Où tu
            peux enfin te sentir légitime et en confiance dans ta
            communication.
          </p>
        </div>
      </div>
    </section>
  );
}

function TransformationGrid() {
  const items = [
    {
      icon: "🤝",
      title: "Tu n'es plus seule face à ta com'",
      text: "Fini de fixer ton écran en te demandant quoi poster. Tu as une binôme qui bosse avec toi, qui répond à tes questions, qui te débloque quand ça coince. Une vraie personne, pas un chatbot.",
    },
    {
      icon: "🗺️",
      title: "Tu as un plan clair, et il avance",
      text: "Branding, réseaux, site, newsletter, SEO : tout est structuré, priorisé, planifié. Tu sais exactement quoi faire chaque semaine. L'éparpillement, c'est terminé.",
    },
    {
      icon: "⚡",
      title: "Quelqu'un fait pour toi (en vrai)",
      text: "Je crée tes templates, tes accroches, ton calendrier éditorial. Tu n'as plus qu'à personnaliser et publier. La page blanche, c'est fini.",
    },
    {
      icon: "📈",
      title: "Tu vois enfin des résultats",
      text: "Plus de visibilité, plus de demandes, plus de ventes. Pas par magie : parce que ta com' est devenue un vrai système qui travaille pour toi. Même quand tu dors.",
    },
    {
      icon: "💜",
      title: "Tu communiques sans trahir tes valeurs",
      text: "Parce qu'il existe une manière de rendre ton projet visible sans devenir « commerciale », sans forcer, sans te sentir illégitime. C'est toute la promesse : ta voix, amplifiée. Pas déformée.",
    },
  ];
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Ce que ça change, concrètement</SectionEyebrow>
          <h2 className={H2}>
            Dans 6 mois, ta com' <em>tourne</em>. Et tu n'es plus seule.
          </h2>
          <p className="mt-8 font-mono text-base text-ink">
            Imagine avoir quelqu'un qui fait le boulot{" "}
            <em>avec</em> toi. Qui structure, qui crée, qui valide. Pas juste
            des conseils que tu n'appliques jamais. Du concret.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-[32px] bg-rose-light p-8"
            >
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-4 font-serif text-xl text-ink">{it.title}</h3>
              <p className="mt-3 font-mono text-sm text-ink">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContrasteSection() {
  const rows = [
    {
      left: "Un·e coach qui te donne des mantras",
      right: "Ici, on est dans le concret.",
    },
    {
      left: "Une formation de 47 vidéos que tu regardes à 23h",
      right: "Ici, on FAIT ensemble.",
    },
    {
      left: "Un plan qui finit dans un Google Doc jamais rouvert",
      right: "Ce qu'on crée, on l'applique.",
    },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <SectionEyebrow>Ta binôme de com</SectionEyebrow>
        <h2 className={H2}>
          Imagine avoir quelqu'un qui bosse sur ta com' avec toi.
        </h2>

        <div className="mt-12 space-y-6">
          {rows.map((r, i) => (
            <div
              key={i}
              className="rounded-[28px] border border-rose-light bg-rose-light p-6 text-left md:flex md:items-center md:justify-between md:gap-6"
            >
              <p className="font-mono text-sm text-ink line-through decoration-rose-dark/40">
                {r.left}
              </p>
              <p className="mt-3 font-serif text-lg italic text-rose-dark md:mt-0">
                → {r.right}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 font-mono text-base text-ink">
          Quelqu'un qui retrousse ses manches à côté de toi.
        </p>
        <p className="mt-2 font-serif text-2xl italic text-rose-dark">
          C'est ça, « Ta binôme de com ».
        </p>
      </div>
    </section>
  );
}

function TimelineSection() {
  const cols = [
    {
      icon: "🎯",
      meta: "Mois 1 → 2",
      title: "On pose ta stratégie",
      text: "Un atelier de lancement pour tout poser à plat. Ensuite, je construis AVEC toi : branding, positionnement, plan d'action, calendrier éditorial. Tout est intégré dans ton espace de travail (L'Assistant Com').",
    },
    {
      icon: "⚡",
      meta: "Mois 3 → 6",
      title: "On applique ensemble",
      text: "Sessions visio mensuelles. On crée tes contenus, on optimise ton profil, on ajuste ce qui marche pas. Tu repars avec du concret à chaque fois. Pas une to-do list : du fait.",
    },
    {
      icon: "💬",
      meta: "Au quotidien",
      title: "Un doute ? Je suis là.",
      text: "Entre les sessions, tu me poses tes questions sur WhatsApp, jours ouvrés. Réponse sous 24-48h. Tu n'es jamais seul·e avec un problème de com'.",
    },
  ];
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>6 mois pour tout mettre en place</SectionEyebrow>
          <h2 className={H2}>Pas un programme. Un accompagnement.</h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cols.map((c) => (
            <article
              key={c.title}
              className="rounded-[32px] bg-cream p-8 text-left"
            >
              <div className="text-3xl">{c.icon}</div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-rose-dark">
                {c.meta}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-ink">{c.title}</h3>
              <p className="mt-4 font-mono text-sm text-ink">{c.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-16 text-center font-serif text-2xl italic text-rose-dark md:text-3xl">
          À la fin de nos sessions, c'est pas « à faire ». C'est fait.
        </p>
      </div>
    </section>
  );
}

function PrixSection() {
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className={H2}>Pour 290 € / mois pendant 6 mois</h2>
        <p className="mt-8 font-mono text-base text-ink">
          Le prix de 3 restos par mois. Sauf que dans 6 mois t'as un business
          qui tourne.
        </p>
        <div className="mx-auto mt-10 max-w-xl rounded-[28px] border border-rose-dark bg-cream p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
            Et si tu n'as pas de résultats :
          </p>
          <p className="mt-2 font-serif text-2xl text-rose-dark md:text-3xl">
            Je te rembourse entièrement.
          </p>
        </div>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-ink">
          🔽 Pour intégrer le programme 🔽
        </p>
        <div className="mt-6 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function ComparaisonAgenceSection() {
  const rows = [
    {
      label: "Branding",
      desc: "Positionnement, storytelling, ligne éditoriale",
      agence: "2 000 €",
      binome: "290 €",
    },
    {
      label: "Social Media",
      desc: "Instagram, Pinterest, LinkedIn",
      agence: "2 000 €",
      binome: "290 €",
    },
    {
      label: "Site web & SEO",
      desc: "Optimisation, pages de vente, référencement",
      agence: "3 500 €",
      binome: "290 €",
    },
    {
      label: "Emailing",
      desc: "Newsletter, séquences, automatisation",
      agence: "2 000 €",
      binome: "290 €",
    },
    {
      label: "Presse & Influence",
      desc: "Relations presse, partenariats créateur·ices",
      agence: "3 000 €",
      binome: "290 €",
    },
    {
      label: "Coaching & suivi",
      desc: "Accompagnement personnalisé, disponibilité",
      agence: "3 500 €",
      binome: "290 €",
    },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className={`${H2} text-center`}>
          Parce que déléguer à une agence est souvent hors de prix…
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Agence classique */}
          <div className="rounded-[32px] border border-rose-light bg-rose-light p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70">
              Prestation externalisée
            </p>
            <h3 className="mt-2 font-serif text-3xl text-ink">
              Agence classique
            </h3>
            <ul className="mt-8 divide-y divide-rose-light">
              {rows.map((r) => (
                <li key={r.label} className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="font-serif text-lg text-ink">{r.label}</p>
                    <p className="font-mono text-xs text-ink/70">{r.desc}</p>
                  </div>
                  <p className="whitespace-nowrap font-mono text-sm text-ink">
                    {r.agence}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-baseline justify-between border-t border-rose-light pt-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
                Total
              </p>
              <p className="font-serif text-3xl text-ink">16 000 €</p>
            </div>
          </div>

          {/* Ta binôme */}
          <div className="relative rounded-[32px] border-2 border-rose-dark bg-cream p-8">
            <span className="absolute -top-4 left-8 inline-flex rounded-full bg-rose-dark px-4 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white">
              Recommandé
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-rose-dark">
              On fait ensemble, tu deviens autonome
            </p>
            <h3 className="mt-2 font-serif text-3xl text-ink">
              Ta binôme de com
            </h3>
            <ul className="mt-8 divide-y divide-rose-light">
              {rows.map((r) => (
                <li key={r.label} className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="font-serif text-lg text-ink">{r.label}</p>
                    <p className="font-mono text-xs text-ink/70">{r.desc}</p>
                  </div>
                  <p className="whitespace-nowrap font-mono text-sm text-rose-dark">
                    {r.binome}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-baseline justify-between border-t border-rose-light pt-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
                Total
              </p>
              <p className="font-serif text-3xl text-rose-dark">1 740 €</p>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center font-serif text-2xl italic text-rose-dark md:text-3xl">
          Soit 91% d'économie par rapport à une agence classique.
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-center font-mono text-base text-ink">
          Et surtout : tu repars avec des compétences à vie. Ici, on met tout
          en place et surtout je t'apprends comment faire. Ce sont des
          compétences que tu as à vie. Et que tu peux utiliser pour n'importe
          quel projet. Tu n'as plus besoin d'être dépendante d'une agence de
          communication.
        </p>
        <div className="mt-10 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function LivrablesGrid() {
  const items = [
    {
      icon: "🎨",
      title: "Ton branding posé",
      text: "Tu sais qui tu es, à qui tu parles, et comment en parler. Ton positionnement, ton storytelling, tes messages clés : tout est clair. Tu n'hésites plus quand on te demande « tu fais quoi dans la vie ? »",
    },
    {
      icon: "📱",
      title: "Tes réseaux qui vivent",
      text: "Un calendrier éditorial tenable (pas « poster tous les jours ou mourir »). Des templates à ta sauce. Tu sais quoi publier, quand, et pourquoi. Et surtout : tu prends du plaisir à le faire.",
    },
    {
      icon: "💻",
      title: "Un site qui convertit",
      text: "Pas juste joli : efficace. Tes pages retravaillées, ton parcours client fluide, ton SEO amélioré. Un vrai outil de vente qui bosse pour toi même quand tu dors.",
    },
    {
      icon: "✉️",
      title: "Ta newsletter qui tourne",
      text: "Un canal qui t'appartient (bye bye les algorithmes). On crée ton template, on rédige ensemble, on programme. Tu as un lien direct avec ton audience, sans dépendre d'Instagram.",
    },
    {
      icon: "✨",
      title: "Ta stratégie presse et influence",
      text: "Tu sais comment contacter les médias et les créateur·ices de contenu. Sans y laisser un rein. Un système pour développer ta visibilité au-delà de tes propres réseaux.",
    },
    {
      icon: "🛠️",
      title: "Une boîte à outils complète",
      text: "Templates Canva, scripts de posts, calendrier pré-rempli, mini-guide tournage smartphone, suivi de performance. Plus de 20 outils que tu gardes à vie.",
    },
  ];
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={H2}>Concrètement tu repars avec :</h2>
          <p className="mt-6 font-mono text-base text-ink">
            En 6 mois, voilà ce qui est fait. Pas « à faire ». Fait.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-[32px] bg-rose-light p-8"
            >
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-4 font-serif text-xl text-ink">{it.title}</h3>
              <p className="mt-3 font-mono text-sm text-ink">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TemoignagesSection() {
  const temoignages = [
    {
      quote:
        "Avec Laetitia, j'ai enfin compris à qui je parlais et pourquoi. En 6 mois, j'ai doublé ma communauté et signé mes premiers clients sans avoir l'impression de me trahir.",
      name: "Péline",
      role: "Coach sportive pour les femmes atteintes de SOPK",
    },
    {
      quote:
        "Je suis passée du syndrome de l'imposteur à la confiance. Plus d'interactions, plus de likes, plus de messages privés, plus d'abonné·es. Et surtout : du plaisir à publier.",
      name: "Sarah",
      role: "Fondatrice de Mazeh Paris",
    },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className={`${H2} text-center`}>
          Pour que tu te sentes fière de ta communication.
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {temoignages.map((t) => (
            <figure
              key={t.name}
              className="rounded-[32px] bg-rose-light p-10"
            >
              <blockquote className="font-serif text-xl italic text-ink md:text-2xl">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-rose-dark">
                {t.name} — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function PourquoiCreeSection() {
  const prejuges = [
    "Parler de soi, c'est être prétentieuse",
    "Vendre, c'est manipuler",
    "Le marketing, c'est l'ennemi de l'authenticité",
  ];
  const bio = [
    { icon: "👥", text: "J'ai passé 10 ans dans le marketing digital" },
    {
      icon: "📈",
      text: "J'ai aidé +150 projets éthiques à développer leur impact sur le web (de 0 à 10k followers)",
    },
    {
      icon: "🌎",
      text: "J'enseigne dans des grandes écoles de communication (CESACOM, ISCPA), de design (École Nationale des Arts Décoratifs de Paris) et d'ingénieurs (ENS, Les Mines)",
    },
  ];
  return (
    <section className="bg-rose-light">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-start">
        <div>
          <h2 className={H2}>Pourquoi j'ai créé cet accompagnement ?</h2>
          <div className="mt-8 space-y-5 font-mono text-base text-ink">
            <p>
              Tu vois ces femmes qui créent des projets magnifiques ?{" "}
              <strong className="font-mono font-medium">
                Des projets qui améliorent notre manière de vivre, de
                consommer, d'exister.
              </strong>
            </p>
            <p>Eh bien, pour certaines, elles restent invisibles.</p>
            <p>
              Pas parce que leur travail n'est pas bon. Pas parce qu'elles
              n'ont rien à dire. Mais parce qu'on leur a appris que :
            </p>
            <ul className="space-y-2 pl-6">
              {prejuges.map((p) => (
                <li
                  key={p}
                  className="list-disc font-mono text-base text-ink marker:text-rose-dark"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p>
              Et pendant ce temps ? Le monde continue de consommer n'importe
              quoi, faute (parfois) de connaître les alternatives.
            </p>
            <p className="font-serif text-2xl italic text-rose-dark">
              C'est ça que je veux changer.
            </p>
          </div>
        </div>

        <div>
          <div className="aspect-[4/5] w-full rounded-[32px] bg-rose-light" />
          <p className="mt-6 font-mono text-base text-ink">
            D'ailleurs, enchantée ! Moi c'est Laetitia Mattioli… En bref :
          </p>
          <ul className="mt-4 space-y-3">
            {bio.map((b) => (
              <li key={b.text} className="flex gap-3 font-mono text-sm text-ink">
                <span className="text-lg">{b.icon}</span>
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjetsAccompagnesGrid() {
  const projets = [
    {
      name: "Napperon",
      desc: "Une marque de lingerie upcyclée qui célèbre la féminité libre et consciente. Nous avons travaillé ensemble son positionnement, sa stratégie de communication et ses fondations de marque.",
    },
    {
      name: "Boom Boom Dance",
      desc: "Boom Boom Dance propose des cours de danse avec bébé qui transforment le post-partum en moments de joie et de reconnexion. Nous avons structuré toute sa communication.",
    },
    {
      name: "Mazeh Paris",
      desc: "Mazeh Paris est un atelier d'upcycling qui redonne vie aux textiles oubliés avec créativité et conscience. Nous avons posé les bases de sa visibilité.",
    },
    {
      name: "Atelier Tiket",
      desc: "Atelier Tiket est une créatrice de mode durable qui dessine des pièces intemporelles et responsables. Elle a appris à communiquer avec authenticité.",
    },
    {
      name: "Hopla Studio",
      desc: "Hopla Studio est un studio de design culinaire qui sublime les produits en expériences visuelles gourmandes. Je l'ai accompagnée pour développer sa stratégie digitale.",
    },
    {
      name: "La Slow Fashionitude",
      desc: "Une plateforme dédiée à la slow fashion qui rassemble et met en lumière les acteurs d'une mode plus responsable. Nous avons structuré sa communication et fédéré sa communauté.",
    },
    {
      name: "Yza Handmade",
      desc: "Yza Handmade réinvente le vestiaire marocain avec des silhouettes fluides et des accessoires intemporels fabriqués localement. Je l'ai accompagnée pour développer sa présence digitale.",
    },
    {
      name: "L'école des femmes de Massoba",
      desc: "Un espace d'accompagnement sur mesure pour les femmes qui souhaitent mieux se comprendre et affirmer leur présence. Nous avons fait rayonner sa mission.",
    },
    {
      name: "Sophie Brillouet",
      desc: "Sophie Brillouet est sculptrice de coquillages et artisane d'art qui transforme les trésors de la mer en pièces poétiques. Nous avons rendu visible son univers singulier.",
    },
    {
      name: "Péline Coach Sportive SOPK",
      desc: "Péline est coach sportive spécialisée dans l'accompagnement des femmes atteintes du syndrome des ovaires polykystiques. Elle a appris à communiquer sur son expertise avec justesse.",
    },
    {
      name: "Comme un ruban d'étoile",
      desc: "Comme un ruban d'étoile façonne des bijoux au fil d'argent, délicats et lumineux comme leur nom. Nous avons fait briller sa marque.",
    },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={H2}>Elles sont passées par mon accompagnement.</h2>
          <p className="mt-6 font-mono text-base italic text-ink">
            Une sélection de projets créatifs et engagés (mode, design,
            beauté, bien-être, culture) que nous avons accompagnés avec
            passion.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projets.map((p) => (
            <article key={p.name} className="flex flex-col">
              <div className="aspect-[4/3] w-full rounded-[24px] bg-rose-light" />
              <h3 className="mt-5 font-serif text-2xl text-ink">{p.name}</h3>
              <p className="mt-3 font-mono text-sm text-ink">{p.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function InclusSection() {
  const concretement = [
    "6 sessions visio de 2h avec Laetitia (on bosse à 4 mains sur ton projet, en direct)",
    "Support WhatsApp jours ouvrés (un doute, une question : tu m'écris, je réponds sous 24-48h)",
    "Validation de tous tes livrables (je relis, je corrige, tu publies sans le doute au ventre)",
    "Audit complet de ta communication actuelle",
  ];
  const construit = [
    "Ta stratégie de com' complète (positionnement, messages clés, storytelling)",
    "Plan d'action sur 6 mois",
    "Calendrier éditorial pré-rempli (30+ idées de posts)",
    "20+ templates Canva créés sur-mesure",
    "Scripts de posts, d'emails, de stories",
    "Boîte à outils complète (guide tournage, planificateur, analytics)",
    "L'Assistant Com' Premium inclus (valeur 39€/mois)",
  ];
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <p className="font-mono text-base italic text-ink">
            Pendant 6 mois, tu as quelqu'un à côté de toi. Quelqu'un qui fait
            avec toi.
          </p>
          <h2 className={`${H2} mt-6`}>
            290 € par mois, pendant 6 mois.
          </h2>
          <p className="mt-4 font-serif text-2xl italic text-rose-dark md:text-3xl">
            Total : 1 740 €
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-mono text-sm text-ink">
            Le prix de 3 restos par mois. Sauf que dans 6 mois, t'as un
            business qui tourne.
          </p>
        </div>

        <div className="mt-16">
          <p className="text-center font-mono text-xs uppercase tracking-[0.22em] text-rose-dark">
            Ce qui est inclus
          </p>
          <p className="mt-2 text-center font-serif text-xl italic text-ink">
            Pas des conseils dans un PDF. Du concret, du fait, du livré.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-[32px] bg-cream p-8">
            <h3 className="font-serif text-2xl text-ink">
              👋 Toi + moi, concrètement
            </h3>
            <ul className="mt-6 space-y-3">
              {concretement.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 font-mono text-sm text-ink"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-dark" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[32px] bg-cream p-8">
            <h3 className="font-serif text-2xl text-ink">
              🛠️ Ce qu'on construit ensemble (à vie)
            </h3>
            <ul className="mt-6 space-y-3">
              {construit.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 font-mono text-sm text-ink"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-dark" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-[28px] border-2 border-rose-dark bg-cream p-8 text-center">
          <p className="font-mono text-sm text-ink">
            Si au bout des 6 mois, après avoir bossé ensemble, les résultats
            ne sont pas là :
          </p>
          <p className="mt-2 font-serif text-2xl italic text-rose-dark md:text-3xl">
            je te rembourse entièrement.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function PourToiSection() {
  const pour = [
    {
      title: "Tu es solopreneuse dans l'univers lifestyle éthique.",
      text: "Mode, beauté, artisanat, bien-être, food, déco, sport, culture. Tant que ton projet est doux pour le monde. 💜",
    },
    {
      title: "Tu as du mal à te faire connaître.",
      text: "Pas parce que ton travail est mauvais, mais parce que tu ne sais pas comment en parler.",
    },
    {
      title: "Tu veux du concret.",
      text: "Des mises en pratique, des résultats tangibles, pas juste de la théorie.",
    },
    {
      title: "Tu es prête à consacrer 2h par semaine à ta com'.",
      text: "Le temps d'un épisode de série. En 6 mois, t'as toute ta com' qui tourne.",
    },
    {
      title: "Tu veux des compétences à vie.",
      text: "Pas une dépendance à une agence ou à un algorithme.",
    },
  ];
  const pasPour = [
    {
      title: "Tu cherches un succès du jour au lendemain.",
      text: "Je n'ai pas de baguette magique. On construit quelque chose de durable, pas un coup de com' éphémère.",
    },
    {
      title: "Tu es au bord du gouffre financièrement.",
      text: "Si tu n'as plus que 1-2 mois de trésorerie, cet accompagnement n'est pas une pilule magique. Il faut le faire sereinement.",
    },
    {
      title: "Tu veux du marketing agressif.",
      text: "Genre crypto, hacks de croissance et promesses de chiffre d'affaires. C'est pas ici.",
    },
    {
      title: "Tu n'as pas envie de t'impliquer.",
      text: "C'est un accompagnement, pas une délégation complète. On fait ensemble, ça veut dire que tu mets les mains dedans aussi.",
    },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-3xl text-ink md:text-4xl">
              Cet accompagnement est pour toi si…
            </h3>
            <ul className="mt-8 space-y-6">
              {pour.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-dark text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-serif text-lg text-ink">{p.title}</p>
                    <p className="mt-1 font-mono text-sm text-ink">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-3xl text-ink md:text-4xl">
              Ce n'est pas pour toi si…
            </h3>
            <ul className="mt-8 space-y-6">
              {pasPour.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ink text-ink">
                    <X className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-serif text-lg text-ink">{p.title}</p>
                    <p className="mt-1 font-mono text-sm text-ink">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Concrètement, comment ça se passe quand je m'inscris ?",
      a: "On commence par un appel découverte de 30 min (gratuit, sans engagement). Si ça matche, on démarre par un atelier de lancement où je te pose toutes les questions pour comprendre ton projet en profondeur. Ensuite, je bosse de mon côté sur ton audit et ta stratégie, et on se retrouve pour la restitution. À partir du mois 3, on passe en mode application : une visio de 2h par mois + WhatsApp entre les sessions.",
    },
    {
      q: "Est-ce que tu fais vraiment pour moi ou tu me donnes juste des conseils ?",
      a: "Les deux. Sur la partie stratégie (mois 1-3), je construis tes outils, tes templates, ton plan : c'est du fait pour toi. Sur la partie application (mois 3-6), on fait ensemble en session visio : je prends la main, tu vois comment je travaille, tu apprends et tu participes. Et entre les sessions, je reste dispo sur WhatsApp pour te relire, te valider, te débloquer.",
    },
    {
      q: "J'ai déjà suivi des formations en com' et ça n'a rien donné. En quoi c'est différent ?",
      a: "La différence, c'est qu'on ne reste pas dans la théorie. Ici, on applique. Ensemble. Tu ne regardes pas des vidéos seule à 23h : tu as quelqu'un en face de toi qui travaille sur TON projet, avec TES contraintes, TES valeurs. Et tu repars chaque mois avec des choses faites, pas des choses à faire.",
    },
    {
      q: "Et si je préfère que quelqu'un fasse tout à ma place ?",
      a: "Je comprends. Franchement, qui n'en rêve pas ? Sauf que voilà : un·e community manager freelance correct·e, c'est minimum 600 à 1 500€ par mois. Une agence qui fait du boulot propre ? Compte 2 000 à 5 000€. Par mois. Et tu dois quand même relire, valider, briefer, corriger. L'accompagnement, c'est 290€/mois. Tu apprends à faire toi-même, pas parce que c'est à la mode, mais parce que c'est la seule option réaliste quand tu es solopreneuse avec un budget serré. Et à la fin, tu es libre. Si un jour tu veux déléguer ? Tu sauras exactement quoi déléguer, à qui, et pourquoi.",
    },
    {
      q: "À qui s'adresse cet accompagnement exactement ?",
      a: "Aux solopreneuses dans l'univers lifestyle éthique : mode, beauté, artisanat, bien-être, déco, food, sport, culture, coaching. Que tu sois créatrice de produits ou prestataire de services, le besoin est le même : être visible sans trahir tes valeurs.",
    },
    {
      q: "Combien de temps ça me prend chaque semaine ?",
      a: "2h par semaine. Pas plus. Le temps d'un épisode de série. Les modules sont conçus pour être actionnables rapidement.",
    },
    {
      q: "Dois-je avoir déjà un plan de communication avant de démarrer ?",
      a: "Non. C'est justement ce qu'on construit ensemble pendant les 3 premiers mois. Tu peux arriver de zéro, c'est prévu.",
    },
    {
      q: "Est-ce que le contenu est accessible à vie ?",
      a: "Oui. Tout ce qu'on crée ensemble (templates, plans, scripts) t'appartient. Et ton accès à L'Assistant Com' reste actif tant que tu gardes ton compte.",
    },
    {
      q: "Comment ça se passe si j'ai une question urgente entre les sessions ?",
      a: "Tu m'écris sur WhatsApp, je te réponds sous 24-48h les jours ouvrés. Un doute sur un post ? Un texte à valider ? Une question technique ? Je suis là.",
    },
    {
      q: "Je peux arrêter quand je veux ?",
      a: "Oui. L'accompagnement est conçu sur 6 mois pour avoir des résultats durables, mais tu peux mettre fin à tout moment si tu le souhaites.",
    },
    {
      q: "Et la garantie, ça marche comment ?",
      a: "Si après avoir appliqué tous mes conseils tu n'as pas de résultats au bout des 6 mois, je te rembourse entièrement. C'est aussi simple que ça.",
    },
  ];
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className={`${H2} text-center`}>
          Tu as des <em>questions</em> ?
        </h2>
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-[24px] border border-rose-light bg-cream px-6"
            >
              <AccordionTrigger className="py-6 text-left font-serif text-lg text-ink hover:no-underline md:text-xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 font-mono text-sm text-ink">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CtaFinalAccompagnement() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className={H2}>
          Prête à devenir <em>visible</em> ?
        </h2>
        <p className="mx-auto mt-8 max-w-xl font-mono text-base text-ink">
          On en parle 30 minutes, sans engagement. Tu repars avec une vision
          claire, que tu démarres avec moi ou pas.
        </p>
        <div className="mt-10 flex justify-center">
          <CtaButton>Réserve ton café virtuel</CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ================================ page ================================ */

function Page() {
  return (
    <SiteLayout>
      <HeroAccompagnement />
      <ClientsBand />
      <ProblemSection />
      <LaetitiaIntroSection />
      <TransformationGrid />
      <ContrasteSection />
      <TimelineSection />
      <PrixSection />
      <ComparaisonAgenceSection />
      <LivrablesGrid />
      <TemoignagesSection />
      <PourquoiCreeSection />
      <ProjetsAccompagnesGrid />
      <InclusSection />
      <PourToiSection />
      <FaqSection />
      <CtaFinalAccompagnement />
    </SiteLayout>
  );
}
