import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { StickyCallCta } from "@/components/site/StickyCallCta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoAtelierTiket from "@/assets/clients-accompagnement/atelier-tiket.png.asset.json";
import logoIkigai from "@/assets/clients-accompagnement/ikigai.png.asset.json";
import logoBoomBoomDance from "@/assets/clients-accompagnement/boom-boom-dance.png.asset.json";
import logoHopla from "@/assets/clients-accompagnement/hopla.png.asset.json";
import logoNapperon from "@/assets/clients-accompagnement/napperon.png.asset.json";
import logoSlf from "@/assets/clients-accompagnement/slf.png.asset.json";
import laetitiaPhoto from "@/assets/accompagnement/laetitia.jpg.asset.json";
import projetsData from "../../scripts/projets-accompagnes.json";
import { CALENDLY_URL } from "@/lib/links";
import { absoluteUrl } from "@/lib/site";

const CALENDLY = CALENDLY_URL;

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
    links: [{ rel: "canonical", href: absoluteUrl("/accompagnement-communication") }],
  }),
  component: Page,
});

/* ------------------------------ helpers ------------------------------ */

const H2 = "font-serif text-3xl md:text-5xl leading-[1.1] text-ink";
const H3 = "font-serif text-xl md:text-2xl leading-[1.2] text-ink";

function CtaButton({
  children = "Réserver mon appel découverte",
}: {
  children?: React.ReactNode;
}) {
  return (
    <a
      href={CALENDLY}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-full bg-rose-dark py-3 pl-7 pr-3 font-mono text-xs uppercase tracking-[0.18em] text-cream transition-colors hover:bg-bordeaux md:text-sm"
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
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <h1 className="mx-auto font-serif text-4xl leading-[1.08] text-ink md:text-5xl">
          Tu fais un travail <em>magnifique</em>.
          <br />
          Mais personne ne le voit.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl font-serif text-2xl text-ink md:text-3xl">
          Deviens <em>visible</em> sans vendre ton âme.
        </p>

        <p className="mt-8 font-mono text-base text-ink">
          Ta com' te prend la tête ? On la fait ensemble.
        </p>

        <p className="mx-auto mt-5 max-w-xl font-mono text-sm italic leading-relaxed text-ink/70">
          290&nbsp;€/mois pendant 6 mois. Soit moins de 9&nbsp;€ par jour. Le prix
          d'un matcha latte et d'un croissant si tu es à Paris. 😅 (Sauf que là,
          ça nourrit ton business pour des années.)
        </p>

        <div className="mt-10 flex justify-center">
          <CtaButton>Prends RDV pour discuter de ton projet</CtaButton>
        </div>

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-ink">
          ✨ Appel gratuit · 30 minutes · Sans engagement
        </p>

        <div className="mx-auto mt-14 max-w-sm overflow-hidden rounded-[32px] bg-rose-light">
          <img
            src={laetitiaPhoto.url}
            alt="Portrait de Laetitia, fondatrice de Nowadays"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ClientsBand() {
  const clients = [
    { name: "Atelier Tiket", logo: logoAtelierTiket.url, alt: "Logo Atelier Tiket" },
    { name: "Ikigai", logo: logoIkigai.url, alt: "Logo Ikigai" },
    { name: "Boom Boom Dance", logo: logoBoomBoomDance.url, alt: "Logo Boom Boom Dance" },
    { name: "Hopla", logo: logoHopla.url, alt: "Logo Hopla" },
    { name: "Napperon", logo: logoNapperon.url, alt: "Logo Napperon" },
    { name: "SLF", logo: logoSlf.url, alt: "Logo SLF" },
  ];

  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-center font-serif text-xl italic text-rose-dark md:text-2xl">
          Elles m'ont fait confiance
        </p>
        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-6">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex h-20 w-full items-center justify-center"
            >
              <img
                src={c.logo}
                alt={c.alt}
                className="max-h-16 w-auto object-contain"
                loading="lazy"
              />
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
            Tu as déjà suivi des formations, téléchargé des templates et
            peut-être même payé quelqu'un pour te faire un « plan ». Sauf
            que le plan, il est resté dans un Google Doc que tu n'as jamais
            rouvert. (On en a tou·tes un.)
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
              <p className="mt-3 font-serif text-lg italic text-rose-dark md:mt-0 md:text-xl">
                → {r.right}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 font-serif text-xl italic text-rose-dark md:text-2xl">
          C'est ça, « Ta binôme de com ».
        </p>
      </div>
    </section>
  );
}

function TransformationGrid() {
  const items = [
    {
      emoji: "🤝",
      title: "Tu n'es plus seule face à ta com'",
      text: "Fini de fixer ton écran en te demandant quoi poster. Tu as une binôme qui bosse avec toi, qui répond à tes questions, qui te débloque quand ça coince.",
    },
    {
      emoji: "🗺️",
      title: "Tu as un plan clair, et il avance",
      text: "Branding, réseaux, site, newsletter, SEO : tout est structuré, priorisé, planifié. Tu sais exactement quoi faire chaque semaine. L'éparpillement, c'est terminé.",
    },
    {
      emoji: "⚡",
      title: "Quelqu'un fait pour toi (en vrai)",
      text: "Je crée tes templates, tes accroches, ton calendrier éditorial. Tu n'as plus qu'à personnaliser et publier. La page blanche, c'est fini.",
    },
    {
      emoji: "📈",
      title: "Tu vois enfin des résultats",
      text: "Plus de visibilité, plus de demandes, plus de ventes. Parce que ta com' est devenue un vrai système qui travaille pour toi.",
    },
    {
      emoji: "💜",
      title: "Tu communiques sans trahir tes valeurs",
      text: "Il existe une manière de rendre ton projet visible sans devenir « commerciale », sans forcer, sans te sentir illégitime. Ta voix, amplifiée. Pas déformée.",
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
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="flex flex-col rounded-[32px] bg-rose-light p-8"
            >
              <span className="text-4xl leading-none" aria-hidden="true">
                {it.emoji}
              </span>
              <h3 className={`${H3} mt-5`}>{it.title}</h3>
              <p className="mt-3 font-mono text-sm text-ink">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LaetitiaIntroSection() {
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <SectionEyebrow>Enchantée</SectionEyebrow>
        <h2 className={H2}>
          Je suis Laetitia. Pour moi, la communication n'est pas de la
          manipulation, mais un outil <em>d'émancipation</em>.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl font-mono text-base text-ink">
          Parce qu'il existe une autre façon de communiquer. Ici je te propose{" "}
          <strong className="font-mono font-medium">une safe place</strong> : un
          espace où ta vision et tes valeurs sont respectées. Où tu peux enfin
          te sentir légitime et en confiance dans ta communication.
        </p>
      </div>
    </section>
  );
}

function PourquoiSection() {
  const prejuges = [
    "Parler de soi, c'est être prétentieuse",
    "Vendre, c'est manipuler",
    "Le marketing, c'est l'ennemi de l'authenticité",
  ];
  const bio = [
    "10 ans dans le marketing digital",
    "+150 projets éthiques accompagnés (de 0 à 10k followers)",
    "J'enseigne en grandes écoles : ENSAD Paris, CESACOM, ISCPA, ENS, Mines",
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <SectionEyebrow>Pourquoi j'ai créé cet accompagnement</SectionEyebrow>
          <h2 className={H2}>
            Tu vois ces femmes qui créent des projets <em>magnifiques</em> ?
          </h2>
        </div>
        <div className="mt-10 space-y-5 font-mono text-base text-ink">
          <p>
            Des projets qui améliorent notre manière de vivre, de consommer,
            d'exister. Pour certaines, elles restent invisibles. Pas parce que
            leur travail n'est pas bon. Mais parce qu'on leur a appris que :
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
          <p className="font-serif text-xl italic text-rose-dark md:text-2xl">
            C'est ça que je veux changer.
          </p>
        </div>

        <div className="mt-12 rounded-[32px] bg-rose-light p-8 text-center">
          <p className="font-serif text-lg italic text-ink md:text-xl">
            D'ailleurs, enchantée ! Moi c'est Laetitia Mattioli. En bref :
          </p>
          <ul className="mx-auto mt-6 inline-flex flex-col gap-3 text-left">
            {bio.map((b) => (
              <li key={b} className="flex gap-3 font-mono text-sm text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-dark" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <CtaButton>
              Réserve ton café visio pour discuter de ton projet
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const cols = [
    {
      emoji: "🎯",
      meta: "Mois 1 → 2",
      title: "On pose ta stratégie",
      text: "Atelier de lancement pour tout poser à plat. Ensuite je construis avec toi : branding, positionnement, plan d'action, calendrier éditorial. Tout est intégré dans ton espace de travail.",
    },
    {
      emoji: "⚡",
      meta: "Mois 3 → 6",
      title: "On applique ensemble",
      text: "Sessions visio mensuelles. On crée tes contenus, on optimise ton profil, on ajuste ce qui marche pas. Tu repars avec du concret à chaque fois. Pas une to-do list : du fait.",
    },
    {
      emoji: "💬",
      meta: "Au quotidien",
      title: "Un doute ? Je suis là.",
      text: "Entre les sessions, tu me poses tes questions sur WhatsApp, jours ouvrés. Réponse sous 24-48h. Tu n'es jamais seule avec un problème de com'.",
    },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>6 mois pour tout mettre en place</SectionEyebrow>
          <h2 className={H2}>Pas un programme. Un accompagnement.</h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cols.map((c) => (
            <article
              key={c.title}
              className="rounded-[32px] bg-rose-light p-8 text-left"
            >
              <span className="text-4xl leading-none" aria-hidden="true">
                {c.emoji}
              </span>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-rose-dark">
                {c.meta}
              </p>
              <h3 className={`${H3} mt-2`}>{c.title}</h3>
              <p className="mt-4 font-mono text-sm text-ink">{c.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-16 text-center font-serif text-xl italic text-rose-dark md:text-2xl">
          À la fin de nos sessions, c'est pas « à faire ». C'est fait.
        </p>
      </div>
    </section>
  );
}

function ComparaisonAgenceSection() {
  const rows = [
    { label: "Branding", desc: "Positionnement, storytelling, ligne éditoriale", agence: "2 000 €", binome: "290 €" },
    { label: "Social Media", desc: "Instagram, Pinterest, LinkedIn", agence: "2 000 €", binome: "290 €" },
    { label: "Site web & SEO", desc: "Optimisation, pages de vente, référencement", agence: "3 500 €", binome: "290 €" },
    { label: "Emailing", desc: "Newsletter, séquences, automatisation", agence: "2 000 €", binome: "290 €" },
    { label: "Presse & Influence", desc: "Relations presse, partenariats créateur·ices", agence: "3 000 €", binome: "290 €" },
    { label: "Coaching & suivi", desc: "Accompagnement personnalisé, disponibilité", agence: "3 500 €", binome: "290 €" },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className={`${H2} text-center`}>
          Déléguer à une agence est <em>hors de prix.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center font-mono text-base text-ink">
          Voici ce que coûte chacun de ces livrables séparément en agence vs
          dans l'accompagnement.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Agence classique */}
          <div className="rounded-[32px] border border-rose-light bg-rose-light p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70">
              Prestation externalisée
            </p>
            <h3 className={`${H3} mt-2`}>Agence classique</h3>
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
            <span className="absolute -top-4 left-8 inline-flex rounded-full bg-rose-dark px-4 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-cream">
              Recommandé
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-rose-dark">
              On fait ensemble, tu deviens autonome
            </p>
            <h3 className={`${H3} mt-2`}>Ta binôme de com</h3>
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

        <p className="mt-12 text-center font-serif text-xl italic text-rose-dark md:text-2xl">
          Soit 91% d'économie. Et tu repars avec des compétences à vie.
        </p>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  const items = [
    {
      emoji: "🎨",
      title: "Ton branding posé",
      text: "Tu sais qui tu es, à qui tu parles, et comment en parler. Ton positionnement, ton storytelling, tes messages clés : tout est clair. Tu n'hésites plus quand on te demande « tu fais quoi dans la vie ? »",
    },
    {
      emoji: "📱",
      title: "Tes réseaux qui vivent",
      text: "Un calendrier éditorial tenable (pas « poster tous les jours ou mourir »). Des templates à ta sauce. Tu sais quoi publier, quand, et pourquoi. Et surtout : tu prends du plaisir à le faire.",
    },
    {
      emoji: "💻",
      title: "Un site qui convertit",
      text: "Pas juste joli : efficace. Tes pages retravaillées, ton parcours client fluide, ton SEO amélioré. Un vrai outil de vente qui bosse pour toi même quand tu dors.",
    },
    {
      emoji: "✉️",
      title: "Ta newsletter qui tourne",
      text: "Un canal qui t'appartient (bye bye les algorithmes). On crée ton template, on rédige ensemble, on programme. Tu as un lien direct avec ton audience, sans dépendre d'Instagram.",
    },
    {
      emoji: "✨",
      title: "Ta stratégie presse et influence",
      text: "Tu sais comment contacter les médias et les créateur·ices de contenu. Sans y laisser un rein. Un système pour développer ta visibilité au-delà de tes propres réseaux.",
    },
    {
      emoji: "🛠️",
      title: "Une boîte à outils complète",
      text: "Templates Canva, scripts de posts, calendrier pré-rempli, mini-guide tournage smartphone, suivi de performance. Plus de 20 outils que tu gardes à vie.",
    },
  ];
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Concrètement tu repars avec</SectionEyebrow>
          <h2 className={H2}>
            En 6 mois, voilà ce qui est <em>fait</em>.
          </h2>
          <p className="mt-4 font-serif text-xl italic text-rose-dark md:text-2xl">
            Pas « à faire ». Fait.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="flex flex-col rounded-[32px] bg-rose-light p-8"
            >
              <span className="text-4xl leading-none" aria-hidden="true">
                {it.emoji}
              </span>
              <h3 className={`${H3} mt-5`}>{it.title}</h3>
              <p className="mt-3 font-mono text-sm text-ink">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrixSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
        <h2 className={H2}>Pour 290&nbsp;€ / mois pendant 6&nbsp;mois</h2>
        <p className="mt-8 font-mono text-base text-ink">
          Le prix de 3 restos par mois. Sauf que dans 6 mois, t'as un business
          qui tourne.
        </p>
        <p className="mt-10 font-mono text-sm text-ink">
          Et si tu n'as pas de résultats :
        </p>
        <p className="mt-2 font-serif text-2xl italic text-rose-dark md:text-3xl">
          Je te rembourse entièrement.
        </p>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.22em] text-rose-dark">
          🔽 Pour intégrer le programme 🔽
        </p>
        <div className="mt-6 flex justify-center">
          <CtaButton>
            Réserve ton café visio pour discuter de ton projet
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

function InclusSection() {
  const concretement = [
    "6 sessions visio de 2h avec Laetitia (à 4 mains sur ton projet, en direct)",
    "Support WhatsApp jours ouvrés (réponse sous 24-48h)",
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
          <SectionEyebrow>L'offre</SectionEyebrow>
          <h2 className={H2}>
            290&nbsp;€ par mois, pendant 6&nbsp;mois.
          </h2>
          <p className="mt-4 font-serif text-xl italic text-rose-dark md:text-2xl">
            Total : 1&nbsp;740&nbsp;€
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-mono text-sm italic text-ink">
            Soit moins de 9 € par jour. Le prix d'un matcha latte et d'un
            croissant à Paris. Sauf que là, ça nourrit ton business pour des
            années.
          </p>
        </div>

        <div className="mt-16">
          <p className="text-center font-mono text-xs uppercase tracking-[0.22em] text-rose-dark">
            Ce qui est inclus
          </p>
          <p className="mt-2 text-center font-serif text-lg italic text-ink md:text-xl">
            Pas des conseils dans un PDF. Du concret, du fait, du livré.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-[32px] bg-cream p-8">
            <h3 className={H3}>👋 Toi + moi, concrètement</h3>
            <ul className="mt-6 space-y-3">
              {concretement.map((c) => (
                <li key={c} className="flex gap-3 font-mono text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-dark" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[32px] bg-cream p-8">
            <h3 className={H3}>🛠️ Ce qu'on construit ensemble (à vie)</h3>
            <ul className="mt-6 space-y-3">
              {construit.map((c) => (
                <li key={c} className="flex gap-3 font-mono text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-dark" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-[28px] border-2 border-rose-dark bg-cream p-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink">
            Et si tu n'as pas de résultats
          </p>
          <p className="mt-2 font-serif text-xl italic text-rose-dark md:text-2xl">
            Je te rembourse entièrement.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function TemoignagesSection() {
  const captures = [
    {
      src: "/temoignages/peline.webp",
      alt: "Témoignage de Péline, coach sportive, sur son accompagnement en communication",
    },
    {
      src: "/temoignages/whatsapp-1.webp",
      alt: "Message de témoignage : un changement positif sur les réseaux sociaux",
    },
    {
      src: "/temoignages/whatsapp-2.webp",
      alt: "Capture d'écran d'un message WhatsApp de gratitude sur l'accompagnement",
    },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className={`${H2} text-center`}>Ce qu'elles en disent.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-center font-mono text-base italic text-ink">
          Des retours, en vrai, de créatrices accompagnées.
        </p>
        <div className="mt-16 grid items-start gap-8 sm:grid-cols-2 md:grid-cols-3">
          {captures.map((c) => (
            <figure
              key={c.src}
              className="overflow-hidden rounded-[24px] bg-rose-light shadow-[0_14px_36px_-18px_rgba(26,5,13,0.25)]"
            >
              <img
                src={c.src}
                alt={c.alt}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjetsAccompagnesGrid() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={H2}>Elles sont passées par mon accompagnement.</h2>
          <p className="mt-6 font-mono text-base italic text-ink">
            Une sélection de projets créatifs et engagés que nous avons
            accompagnés avec passion.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projetsData.map((p) => (
            <article key={p.name} className="flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-rose-light">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className={`${H3} mt-5`}>{p.name}</h3>
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

function PourToiSection() {
  const pour = [
    {
      title: "Tu es solopreneuse dans l'univers lifestyle éthique.",
      text: "Mode, beauté, artisanat, bien-être, food, déco, sport, culture. Tant que ton projet est doux pour le monde.",
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
      text: "Pas de baguette magique. On construit quelque chose de durable, pas un coup de com' éphémère.",
    },
    {
      title: "Tu es au bord du gouffre financièrement.",
      text: "Si tu n'as plus que 1-2 mois de trésorerie, cet accompagnement n'est pas une pilule magique.",
    },
    {
      title: "Tu veux du marketing agressif.",
      text: "Crypto, hacks de croissance, promesses de chiffre d'affaires : c'est pas ici.",
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
            <h3 className={H3}>Cet accompagnement est pour toi si…</h3>
            <ul className="mt-8 space-y-6">
              {pour.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-dark text-cream">
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
            <h3 className={H3}>Ce n'est pas pour toi si…</h3>
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
      a: "Je comprends. Sauf que voilà : un·e community manager freelance correct·e, c'est minimum 600 à 1 500€ par mois. Une agence qui fait du boulot propre ? Compte 2 000 à 5 000€. Par mois. L'accompagnement, c'est 290€/mois. Tu apprends à faire toi-même. Et à la fin, tu es libre. Si un jour tu veux déléguer ? Tu sauras exactement quoi déléguer, à qui, et pourquoi.",
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
          <CtaButton>Réserver mon appel découverte</CtaButton>
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
      <DeliverablesSection />
      <InclusSection />
      <TemoignagesSection />
      <PourquoiSection />
      <ProjetsAccompagnesGrid />
      <PourToiSection />
      <FaqSection />
      <CtaFinalAccompagnement />
      <StickyCallCta />
    </SiteLayout>
  );
}
