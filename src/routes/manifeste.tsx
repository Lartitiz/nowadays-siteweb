import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CALENDLY_URL } from "@/lib/links";

export const Route = createFileRoute("/manifeste")({
  head: () => ({
    meta: [
      { title: "Notre manifeste — L'influence éthique | Nowadays Agency" },
      {
        name: "description",
        content:
          "Notre manifeste pour une influence éthique : la communication comme écosystème, redéfinir l'influenceur en ambassadeur, de nouveaux indicateurs de performance au service du vivant.",
      },
      {
        property: "og:title",
        content: "Notre manifeste — L'influence comme levier de transformation",
      },
      {
        property: "og:description",
        content:
          "Développer l'influence sans trahir l'éthique. Notre vision d'une communication qui fait du lien, redéfinit l'influenceur et repense les indicateurs de réussite.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/manifeste" },
    ],
    links: [{ rel: "canonical", href: "/manifeste" }],
  }),
  component: Page,
});

const H2 = "font-serif text-3xl md:text-5xl leading-[1.1] text-ink";
const H3 = "font-serif text-xl md:text-2xl leading-[1.2] text-ink";

function CtaButton({
  children = "Prends rdv pour discuter de ton projet",
}: {
  children?: string;
}) {
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
          · Notre manifeste ·
        </p>
        <h1 className="mx-auto mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
          L'influence comme levier de <em>transformation</em>
        </h1>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 font-mono text-base leading-relaxed text-ink">
          <p>
            Ici, on accompagne celles et ceux qui veulent faire bouger les
            lignes. Créatrices éthiques, artistes engagées, associations
            inspirantes… Celles qui osent imaginer un autre futur, plus doux,
            plus juste, plus vivant.
          </p>
          <p>
            Celles qui ne veulent pas « juste vendre », mais transmettre une
            vision. Notre métier ? Développer leur influence — <em>sans trahir
            leur éthique.</em>
          </p>
          <p>
            Pas de stratégies toutes faites. Pas de marketing agressif. Juste
            une communication qui fait du lien, qui inspire, qui rassemble.
          </p>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  const questions = [
    "Qui tu veux toucher",
    "Comment tu veux qu'on te perçoive",
    "Qui peut porter ton message avec toi",
  ];
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose-dark">
          · Notre vision ·
        </p>
        <h2 className={`${H2} mt-6`}>
          La communication est un <em>écosystème</em>.
        </h2>
        <div className="mt-8 space-y-5 font-mono text-base leading-relaxed text-ink">
          <p>
            Beaucoup d'agences misent tout sur « l'idée créative ». Nous, on
            commence par tisser du lien. Pas juste un logo ou un post Instagram :
            un réseau vivant de connexions, d'alliances, d'authenticité.
          </p>
          <p>Avant de parler design ou storytelling, on regarde avec toi :</p>
        </div>
        <ul className="mt-8 space-y-4">
          {questions.map((q) => (
            <li
              key={q}
              className="flex gap-4 rounded-[24px] bg-cream p-6 font-mono text-sm leading-relaxed text-ink"
            >
              <span className="shrink-0 text-lg leading-none" aria-hidden="true">
                👉
              </span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-mono text-base leading-relaxed text-ink">
          Parce qu'une marque forte, c'est avant tout une marque bien entourée.
        </p>
      </div>
    </section>
  );
}

function Creatrices() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className={H2}>
          Pourquoi les <em>créatrices éthiques</em> ?
        </h2>
        <div className="mt-8 space-y-5 font-mono text-base leading-relaxed text-ink">
          <p>
            Chez Nowadays, on accompagne les femmes qui façonnent un art de
            vivre éthique. Celles qui imaginent des marques sensibles, belles et
            engagées. Celles qui ne séparent pas l'esthétique du sens, ni la
            stratégie de l'alignement.
          </p>
          <p>
            Ce sont des créatrices de mode responsable, d'objets durables, de
            rituels bien-être, de médias conscients. Elles n'ont pas besoin
            qu'on parle à leur place. Elles ont juste besoin d'un espace
            stratégique pour être visibles, affirmer leur vision, structurer
            leur présence.
          </p>
          <p>
            Nous, on est là pour ça. Pour les aider à bâtir des marques qui leur
            ressemblent, et à faire rayonner un lifestyle éthique qui donne
            envie de vivre autrement.
          </p>
        </div>
      </div>
    </section>
  );
}

function Redefinir() {
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className={H2}>
          Redéfinir l'<em>influence</em>
        </h2>
        <div className="mt-8 space-y-5 font-mono text-base leading-relaxed text-ink">
          <p>
            L'influence, on l'a trop longtemps réduite à une question de
            visibilité. À des likes, des partenariats creux, et une image
            lisse.
          </p>
          <p>
            Mais l'influence, la vraie, c'est ce qui reste quand la hype est
            passée. C'est ce que ton projet change, inspire, construit autour de
            lui. Nous, on veut aider nos clientes à développer cette
            influence-là : durable, alignée, engagée.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <h3 className={H3}>Qu'est-ce qu'un influenceur ?</h3>
          <div className="rounded-[24px] bg-cream p-6 font-mono text-sm leading-relaxed text-ink">
            <p className="text-ink/70">
              La définition la plus communément admise :
            </p>
            <p className="mt-3">
              <strong className="font-mono font-medium">
                Influenceur (n.m.)
              </strong>{" "}
              : leader d'opinion qui collabore avec des marques pour faire leur
              promotion, moyennant une rémunération.
            </p>
          </div>
          <p className="font-mono text-base leading-relaxed text-ink">
            Notre problème avec cette définition : le biais commercial y est
            central. De nombreux partenariats ont donné lieu à des dérives
            (dropshipping frauduleux, escroqueries, manque d'authenticité) qui
            ont décrédibilisé ce métier. Dans une démarche de transparence et
            d'éthique, il nous faut donc repenser la définition même du terme.
          </p>
          <div className="rounded-[24px] border-2 border-rose-dark/30 bg-cream p-6 font-mono text-sm leading-relaxed text-ink">
            <p className="text-ink/70">Le sens qu'on lui donne chez Nowadays :</p>
            <p className="mt-3">
              <strong className="font-mono font-medium">
                Influenceur (n.m.)
              </strong>{" "}
              : leader d'opinion qui collabore avec des marques pour avoir un{" "}
              <em>impact positif</em> sur le monde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ambassadeur() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className={H2}>
          De l'influence marketing <em>éthique</em>
        </h2>
        <div className="mt-8 space-y-5 font-mono text-base leading-relaxed text-ink">
          <p>
            Pour répondre à la crise de confiance que subit le marketing
            d'influence, il est de notre devoir de nous interroger sur l'avenir
            des collaborations entre influenceurs et marques.
          </p>
          <p>
            Aujourd'hui, le terme « influenceur » est connoté négativement : il
            implique une personne qui influence et une personne influencée.
            C'est pourquoi nous préférons le terme d'<em>ambassadeur</em>.
          </p>
          <p>
            Un « influenceur » ne doit pas être synonyme de personne aux
            millions d'abonnés. Au contraire, il s'agit d'un profil reconnu par
            son réseau : on le retrouve parmi ses collaborateurs, ses
            fournisseurs, ses clients, ses partenaires… Derrière toutes ces
            pistes se cache sûrement ton ambassadeur idéal.
          </p>
        </div>
      </div>
    </section>
  );
}

function Kpi() {
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className={H2}>
          Nouvelle donne = nouveaux <em>indicateurs</em>
        </h2>
        <div className="mt-8 space-y-5 font-mono text-base leading-relaxed text-ink">
          <p>
            Toute stratégie part d'objectifs chiffrés et d'indicateurs de
            performance. Aujourd'hui, ils tournent généralement autour du nombre
            de ventes et du chiffre d'affaires.
          </p>
          <p>
            Dans un monde où la croissance infinie est une illusion, comment
            continuer à se baser sur le profit à tout prix comme critère de
            réussite ? Il est de notre devoir d'intégrer de nouveaux
            indicateurs, qui prennent en compte les enjeux environnementaux de
            nos sociétés.
          </p>
          <p>
            Le chiffre d'affaires reste central — il est indispensable à la
            survie d'une marque. Chez Nowadays, on travaille sur le meilleur
            compromis entre rentabilité et réduction d'empreinte carbone, en
            repensant les KPI pour les faire évoluer vers des objectifs plus
            réalistes et respectueux de tes valeurs, et de la planète.
          </p>
        </div>
      </div>
    </section>
  );
}

function EnBref() {
  const points = [
    "La création — de contenu, de liens, d'émotions.",
    "L'influence qui transforme — pas celle qui surimpose.",
    "Les projets qui osent être sincères — même s'ils ne cochent pas toutes les cases.",
    "Une autre façon de communiquer — plus humaine et plus sensible.",
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className={`${H2} text-center`}>En bref, chez Nowadays, on est pour :</h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <li
              key={p}
              className="flex gap-4 rounded-[24px] bg-rose-light p-6 font-mono text-sm leading-relaxed text-ink"
            >
              <span className="shrink-0 text-xl leading-none" aria-hidden="true">
                ✨
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-rose-light">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className={H2}>
          Envie de te rendre visible sans trahir ton éthique ?
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-mono text-base leading-relaxed text-ink">
          On en discute autour d'un appel découverte. Sans engagement, et
          honnêtement.
        </p>
        <div className="mt-10 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function Page() {
  return (
    <SiteLayout>
      <Hero />
      <Vision />
      <Creatrices />
      <Redefinir />
      <Ambassadeur />
      <Kpi />
      <EnBref />
      <FinalCta />
    </SiteLayout>
  );
}
