import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaInline } from "@/components/da/CtaInline";
import { DaLayout } from "@/components/da/DaLayout";
import { Pill } from "@/components/da/Pill";
import { StickerNote } from "@/components/da/StickerNote";
import { VichyBand } from "@/components/da/VichyBand";
import { CALENDLY_URL } from "@/lib/links";
import { absoluteUrl } from "@/lib/site";

// Refonte du 07/08/2026 : la page absorbe le document de travail « Faire
// mieux, pas plus » et la position IA, et perd les sections influence de
// l'ancien manifeste (l'agence n'est plus spécialisée là-dedans). L'URL ne
// change pas : /manifeste et /communication-ethique redirigent déjà ici.
//
// 🔑 Les fourchettes de prix du bloc IA sont sourcées (baromètres publics
// 2025-2026, liens dans le bloc). Ne jamais y ajouter un chiffre sans
// source : c'est la règle que la page elle-même énonce.
//
// 🔑 La feuille de route ne contient QUE du déjà-commencé ou du non-daté :
// une promesse datée non tenue décrédibiliserait toute la page. Le comptage
// des indicateurs s'appuie sur le registre tenu en interne (MARKCOM).

export const Route = createFileRoute("/demarche-ethique")({
  head: () => ({
    meta: [
      { title: "Faire mieux, pas plus : ma démarche éthique | Nowadays" },
      {
        name: "description",
        content:
          "Ma démarche plus éthique : ce que je mets en place, ce que je refuse, mes limites, et ma position sur l'IA. Transparente et vérifiable.",
      },
      { property: "og:title", content: "Faire mieux, pas plus | Ma démarche éthique" },
      {
        property: "og:description",
        content:
          "La communication comme outil d'émancipation, pas de manipulation. Ce que je mets en place, ce que je refuse, et mes limites.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/demarche-ethique") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/demarche-ethique") }],
  }),
  component: Page,
});

function Hero() {
  return (
    <section className="relative bg-white">
      <VichyBand />
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-16 text-center md:pb-32 md:pt-24">
        <Pill>Ma démarche plus éthique</Pill>
        <h1 className="mx-auto mt-6 font-titre text-4xl leading-[1.05] text-encre md:text-6xl">
          Faire mieux, <span className="surligne">pas</span> plus.
        </h1>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-encre">
          <p>
            Je ne me dirai jamais « agence 100 % éthique » : ça n'existe pas. Ce que je peux
            faire, c'est vous montrer ce que je mets en place, ce que je refuse, et ce que je ne
            sais pas encore faire. Cette page, c'est ça. Elle sera plus juste l'an prochain
            qu'aujourd'hui.
          </p>
        </div>
      </div>
      <StickerNote>
        Une page qui ne parle que de ce qui va bien, ça s'appelle une plaquette.
      </StickerNote>
    </section>
  );
}

function Pourquoi() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-24">
        <h2>Pourquoi je publie ça</h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-encre">
          <p>
            Par besoin de transparence, franchement. Quand vous confiez votre communication à
            quelqu'un, vous avez le droit de savoir comment cette personne travaille, ce qu'elle
            accepte et ce qu'elle refuse. Et moi, j'ai besoin de l'écrire pour m'y tenir.
          </p>
          <p>
            Il ne s'agit pas de me décerner un label maison, encore moins de me peindre en vert.
            Il s'agit de rendre vérifiable ce que j'affirme. Une démarche qui n'écrit rien ne
            s'engage à rien.
          </p>
          <p>
            Il y a une deuxième raison, plus égoïste : j'aimerais que ça donne des idées. On peut
            communiquer autrement que par la peur, la honte et l'urgence fabriquée. On peut même le
            faire joyeusement. <em>(C'est un peu le projet de toute l'agence, en fait.)</em>
          </p>
        </div>
      </div>
    </section>
  );
}

function Convictions() {
  const pancartes = [
    {
      title: "Dire vrai, sans manipuler",
      text: "Je refuse les mécaniques qui poussent à l'achat par la peur, la honte ou la confusion. Une communication juste montre ses limites, explique, remet dans le contexte. On promet ce qu'on livre, jamais ce que ça produira.",
      rotation: "md:-rotate-1",
    },
    {
      title: "Émanciper, pas rendre dépendante",
      text: "La bonne communication libère : elle transmet des savoirs, elle rend les équipes autonomes, elle éclaire les coulisses d'un métier. Mon objectif, c'est que vous puissiez vous passer de moi. (Oui, y compris commercialement.)",
      rotation: "md:rotate-1",
    },
    {
      title: "Rendre visible ce qui mérite de l'être",
      text: "La visibilité, c'est déjà une forme de liberté. Une créatrice qui vit de son métier, c'est une personne de moins qui subit un travail qu'elle n'a pas choisi. Une association qu'on entend, c'est une cause qui avance.",
      rotation: "md:-rotate-1",
    },
  ];
  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-center">
          Trois <em>convictions</em>, et tout le reste en découle
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pancartes.map((p) => (
            <article
              key={p.title}
              className={`rounded-[14px_26px_12px_22px] bg-white p-8 transition-transform duration-300 hover:rotate-0 ${p.rotation}`}
            >
              <h3 className="font-titre text-2xl text-bordeaux">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-encre">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Filtre() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center">
          À qui je dis <em>oui</em>, et à qui je dis non
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-encre">
          Je travaille surtout avec des artisanes, des créatrices, des associations, des
          coopératives, des artistes, des petits lieux. Pas par principe esthétique : c'est là que
          je vois le plus souvent le discours et les actes tenir ensemble.
        </p>

        <div className="mt-14 flex flex-col items-center">
          <p className="rounded-full border-2 border-encre/15 px-6 py-2 text-sm font-medium text-encre">
            Votre projet
          </p>
          <span className="my-2 text-2xl text-encre/40" aria-hidden="true">
            ↓
          </span>
        </div>

        <div className="space-y-6">
          <article className="rounded-carte border-l-8 border-framboise bg-rose-pale p-7">
            <h3 className="font-titre text-2xl text-bordeaux">On y va</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-encre">
              <li>
                Artisanat et mode éthique : matières responsables, productions maîtrisées,
                transparence des prix, réparabilité, upcycling.
              </li>
              <li>
                Beauté et bien-être naturel : composition claire, filières tracées, engagement
                social réel.
              </li>
              <li>
                Design durable et culture : objets, lieux, programmation avec une démarche assumée.
              </li>
              <li>
                Associations, ONG, coopératives, tiers-lieux : éducation, inclusion, alimentation,
                mobilité douce.
              </li>
            </ul>
            <p className="mt-4 text-sm italic leading-relaxed text-encre/80">
              Ma seule condition : des engagements réels, même imparfaits. Je ne demande pas la
              perfection. Je demande la sincérité et des jalons.
            </p>
          </article>

          <article className="rounded-carte border-l-8 border-jaune bg-rose-pale p-8 md:p-10">
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="font-titre text-2xl text-bordeaux">On y va, au rythme des preuves</h3>
              <span className="rounded-full bg-jaune px-3 py-1 text-xs font-medium text-bordeaux">
                la voie la plus fréquente
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-encre">
              Vous n'êtes pas encore là où vous voudriez être ? Bienvenue, c'est la majorité des
              projets. On pose des jalons honnêtes, on nomme ce qui est déjà vrai aujourd'hui, et
              on communique au rythme des preuves. Ce qui n'est pas encore fait, on ne le raconte
              pas au présent.
            </p>
          </article>

          <article className="rounded-carte border-l-8 border-encre/20 bg-rose-pale/60 p-7">
            <h3 className="font-titre text-2xl text-encre/70">Je décline</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-encre/80">
              <li>
                Les grandes structures qui veulent redorer une image sans changer leurs pratiques.
              </li>
              <li>La fast fashion.</li>
              <li>
                Le greenwashing et le social washing, y compris involontaires, quand la marque
                refuse d'ajuster son discours une fois le problème posé.
              </li>
              <li>
                Les organisations qui accélèrent le dépassement des limites planétaires : énergies
                fossiles en tête.
              </li>
              <li>Les campagnes construites sur la culpabilisation ou l'angoisse.</li>
            </ul>
            <p className="mt-4 text-sm italic leading-relaxed text-encre/70">
              Les seules grosses structures avec lesquelles je travaille sont des associations ou
              des coopératives, parce que la mission est dans leurs statuts, pas dans leur plan de
              com'.
            </p>
          </article>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-6 pb-24">
        <CtaInline accroche="Vous vous reconnaissez dans la première ou la deuxième voie ?" />
      </div>
    </section>
  );
}

function Ficelles() {
  const paires = [
    {
      non: "Le compte à rebours qui redémarre tout seul à minuit",
      oui: "Une date de fin vraie. Quand c'est fini, c'est fini.",
    },
    {
      non: "« Plus que 3 places » quand il en reste trente",
      oui: "Le nombre réel, ou pas de nombre du tout.",
    },
    {
      non: "La promesse de résultat : « 10 000 abonnées en trois mois »",
      oui: "Ce que je livre, précisément. Ce que ça produira ne m'appartient pas.",
    },
    {
      non: "Le témoignage arrangé, la citation reconstituée",
      oui: "Uniquement des phrases réellement prononcées, relues et validées par la personne.",
    },
    {
      non: "Le prix barré qui n'a jamais été pratiqué",
      oui: "Le prix, et sa modalité : un paiement étalé n'est pas un abonnement.",
    },
    {
      non: "La culpabilisation : « si vous n'achetez pas, vous… »",
      oui: "Dire clairement à qui ça s'adresse, et à qui ça ne s'adresse pas.",
    },
    {
      non: "La peur et la honte comme moteur",
      oui: "L'envie et l'utilité. C'est plus lent au démarrage, ça tient beaucoup plus longtemps.",
    },
  ];
  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-center">
          Les <em>ficelles</em> que je ne tirerai pas
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-encre">
          Autant être précise, parce que « communication éthique » ne veut rien dire tant qu'on ne
          dit pas ce qu'on s'interdit. Voilà les mécaniques classiques, et ce que je mets à la
          place.
        </p>
        <div className="mt-14 rounded-carte bg-white p-6 md:p-10">
          <div className="hidden gap-10 pb-4 md:grid md:grid-cols-2">
            <p className="text-xs uppercase tracking-[0.2em] text-encre/40">
              Ce que je ne fais pas
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-bordeaux">
              Ce que je fais à la place
            </p>
          </div>
          {paires.map((p) => (
            <div
              key={p.non}
              className="grid gap-2 border-t border-encre/10 py-5 md:grid-cols-2 md:gap-10"
            >
              <p className="text-sm leading-relaxed text-encre/45">{p.non}</p>
              <p className="text-sm font-medium leading-relaxed text-bordeaux">{p.oui}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm italic leading-relaxed text-encre">
          Et si un jour je vous propose quelque chose qui ressemble à une de ces lignes,
          dites-le-moi. Ça arrive de glisser sans s'en rendre compte.
        </p>
      </div>
    </section>
  );
}

function FaconDeFaire() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-center">
          Ma façon de faire, en trois <em>points</em>
        </h2>
        <div className="mt-16 grid items-start gap-6 md:grid-cols-3">
          <article className="rounded-[12px_24px_10px_20px] bg-rose-pale p-8 md:mt-6">
            <h3>Je transmets, je ne garde pas la main</h3>
            <p className="mt-3 text-sm leading-relaxed text-encre">
              Workshops, canevas, checklists, relectures commentées. Je documente ce que je fais
              pour que ce soit réutilisable sans moi. « Je fais pour vous » quand c'est utile, mais
              surtout « on fait ensemble » pour que vous soyez autonome à la fin. C'est aussi pour
              ça que j'enseigne : à l'ENSAD-PSL, à Sup de Pub, à l'EPSAA, entre autres.
            </p>
          </article>
          <article className="rounded-[20px_12px_22px_10px] bg-rose-pale p-8">
            <h3>L'accessibilité dès la conception, pas en rattrapage</h3>
            <p className="mt-3 text-sm leading-relaxed text-encre">
              Texte alternatif sur les images, sous-titres sur les vidéos, langage clair,
              contrastes vérifiés, checklist anti-stéréotypes sur les représentations. Ce sont des
              réflexes de départ, pas une case cochée à la fin.{" "}
              <em>(Et non, ça ne coûte pas plus cher quand c'est prévu au départ.)</em>
            </p>
          </article>
          <div className="md:mt-10">
            <article className="rounded-[14px_20px_14px_24px] bg-rose-pale p-8">
              <h3>Des conditions de travail qui tiennent</h3>
              <p className="mt-3 text-sm leading-relaxed text-encre">
                Pas d'urgence toxique, pas de réunion en dehors des horaires convenus, du temps
                pour le soin et pour la vie de famille. Ça vaut pour moi comme pour les personnes
                avec qui je collabore.
              </p>
            </article>
            <div className="mt-6 -rotate-1 rounded-[10px_22px_8px_18px] bg-rose-doux p-6 md:-mr-4">
              <p className="text-sm leading-relaxed text-bordeaux">
                Je travaille avec l'écosystème d'ici quand c'est pertinent : j'ai co-fondé{" "}
                <strong className="font-medium">La Prochaine Aire</strong>, un tiers-lieu à Joigny
                dans une maison éclusière sur la véloroute, et je participe à{" "}
                <strong className="font-medium">« du bio sur nos plateaux »</strong>, qui relie les
                acteurs locaux pour améliorer l'alimentation dans les écoles et les crèches de la
                ville. Avec une part de bénévolat quand il faut.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-6 pb-24">
        <CtaInline accroche="Si cette façon de faire vous parle, la suite se passe de vive voix." />
      </div>
    </section>
  );
}

function Limites() {
  const limites = [
    {
      title: "La sobriété numérique",
      text: "Je ne suis pas une agence d'éco-conception. J'avance, je m'informe, mais je ne suis pas encore outillée pour mesurer le poids de ce que je produis, et je ne le vendrai pas comme une expertise tant que ce ne sera pas vrai.",
      rotation: "md:-rotate-2",
    },
    {
      title: "Mes outils",
      text: "J'utilise des outils qui ne sont pas tous alignés avec ce que je raconte : réseaux sociaux, suites logicielles, hébergements parfois discutables. J'en change quand une alternative tient la route, et pas avant.",
      rotation: "md:rotate-1",
    },
    {
      title: "Le risque de glisser moi-même",
      text: "En communication, on peut basculer dans le greenwashing sans s'en apercevoir : une formule un peu large, un chiffre arrondi du bon côté. Mon remède : ralentir, vérifier, reformuler. Et renoncer quand il le faut.",
      rotation: "md:-rotate-1",
    },
  ];
  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-center">
          Ce que je ne sais <em>pas encore</em> faire
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-encre">
          Le passage le plus important de cette page, et le seul que vous ne trouverez pas chez la
          plupart de mes consœurs.
        </p>
        <div className="mt-16 grid items-start gap-8 md:grid-cols-3">
          {limites.map((l) => (
            <article
              key={l.title}
              className={`rounded-[10px_22px_8px_18px] bg-rose-doux p-7 ${l.rotation}`}
            >
              <h3 className="font-titre text-2xl text-bordeaux">{l.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-encre">{l.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PositionIa() {
  const chaine = [
    { etape: "Recherche, vérification", qui: "avec l'IA", ton: "jaune" },
    { etape: "Stratégie, angle, décisions", qui: "moi, jamais l'IA", ton: "bordeaux" },
    { etape: "Premières versions", qui: "avec l'IA", ton: "jaune" },
    { etape: "Réécriture, voix, nuance", qui: "moi", ton: "bordeaux" },
    { etape: "Validation finale", qui: "vous, toujours", ton: "rose" },
  ] as const;
  const addition = [
    {
      poste: "Stratégie de marque complète (positionnement, ADN, audit)",
      prix: "à partir de 4 000 €",
    },
    { poste: "Stratégie et contenus réseaux sociaux, 6 mois", prix: "3 000 – 4 800 €" },
    { poste: "Audit et recommandations SEO", prix: "500 – 3 000 €" },
    { poste: "Rédaction d'articles, un par mois", prix: "900 – 2 100 €" },
    { poste: "Une page de vente", prix: "200 – 600 €" },
    { poste: "Newsletters, une par mois", prix: "360 – 900 €" },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <Pill ton="bordeaux">Ma position sur l'IA</Pill>
          <h2 className="mt-6">
            Oui, j'utilise l'IA. Voilà <em>où</em>, et où jamais.
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-left text-base leading-relaxed text-encre">
            <p>
              Mes clientes sont des créatrices et des artisanes, c'est-à-dire exactement les
              personnes à qui le sujet coûte quelque chose. Ne rien dire, ce serait esquiver.
              Alors voilà, sans emballage : l'IA me permet de tenir des prix accessibles, et
              d'aller plus vite pour des projets qui n'ont pas le temps. Je sais que ce n'est pas
              propre sur tous les plans. Je le fais quand même, et j'assume ce que ça coûte
              ailleurs. C'est un pari, pas une certitude — et un pari, ça se discute.
            </p>
          </div>
        </div>

        <h3 className="mt-16 text-center font-titre text-2xl text-encre">
          Quand on travaille seule, sans IA, il n'y a que deux portes
        </h3>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-carte bg-rose-pale/70 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-encre/40">Porte 1</p>
            <p className="mt-2 font-medium text-encre/60">Je facture plus</p>
            <p className="mt-2 text-sm leading-relaxed text-encre/60">
              Le même accompagnement, à un prix que mes clientes ne peuvent pas payer.
            </p>
          </article>
          <article className="rounded-carte bg-rose-pale/70 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-encre/40">Porte 2</p>
            <p className="mt-2 font-medium text-encre/60">Je livre moins</p>
            <p className="mt-2 text-sm leading-relaxed text-encre/60">
              Le prix tient, mais sans la recherche en amont, sans l'outil, avec moins
              d'allers-retours.
            </p>
          </article>
          <article className="rounded-carte bg-bordeaux p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-rose-doux">
              Porte 3 · avec l'IA
            </p>
            <p className="mt-2 font-medium text-white">Je tiens les deux</p>
            <p className="mt-2 text-sm leading-relaxed text-rose-doux">
              Elle prend les heures invisibles ; le prix reste accessible et tout reste dedans.
            </p>
          </article>
        </div>

        <div className="mx-auto mt-16 max-w-xl rounded-carte bg-rose-pale p-6 md:p-8">
          <h3 className="font-titre text-2xl text-encre">
            L'addition, si vous achetiez tout au détail
          </h3>
          <div className="mt-5 text-sm">
            {addition.map((a) => (
              <div
                key={a.poste}
                className="flex items-baseline justify-between gap-4 border-b border-dotted border-bordeaux/25 py-2.5"
              >
                <span className="text-encre">{a.poste}</span>
                <span className="whitespace-nowrap text-encre/70">{a.prix}</span>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4 border-b border-dotted border-bordeaux/25 py-2.5">
              <span className="text-encre">L'Assistant Com', l'outil qui reste après</span>
              <span className="whitespace-nowrap font-medium text-framboise">inclus</span>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-2.5">
              <span className="text-encre">Quelqu'un au bout du fil pendant 6 mois</span>
              <span className="whitespace-nowrap font-medium text-framboise">
                ça ne s'achète pas au détail
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-4 border-t-2 border-encre pt-4 text-base font-medium text-encre">
            <span>Total au détail</span>
            <span className="whitespace-nowrap">≈ 9 000 à 15 000 €</span>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-carte bg-bordeaux px-5 py-4">
            <span className="font-titre text-xl text-white">
              Chez moi, tout ensemble, en binôme
            </span>
            <span className="font-medium text-jaune">
              2 100 € <span className="text-sm text-rose-doux">(350 €/mois × 6)</span>
            </span>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-encre/60">
            Fourchettes basses et hautes des baromètres publics 2025-2026, arrondies :{" "}
            <a
              className="underline underline-offset-2"
              href="https://www.lafabriquedunet.fr/agences/pages/agences-branding/tarifs"
              target="_blank"
              rel="noopener noreferrer"
            >
              La Fabrique du Net
            </a>
            ,{" "}
            <a
              className="underline underline-offset-2"
              href="https://www.malt.fr/t/barometre-tarifs/communication/community-manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              Malt
            </a>
            ,{" "}
            <a
              className="underline underline-offset-2"
              href="https://www.referenseo.com/blog/cout-prestation-seo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReferenSEO
            </a>
            . Et une différence à dire honnêtement : au détail, chaque prestataire fait{" "}
            <em>pour</em> vous ; en binôme, on fait <em>ensemble</em>. C'est ça, plus les heures
            invisibles que prend l'IA, qui rend ce prix possible. Le temps gagné ne part pas dans
            ma marge : à prix égal, je livre plus.
          </p>
        </div>

        <h3 className="mt-16 text-center font-titre text-2xl text-encre">
          Sur un contenu, qui fait quoi
        </h3>
        <div className="mt-8 flex flex-col gap-2 md:flex-row md:items-stretch">
          {chaine.map((c) => (
            <div
              key={c.etape}
              className={`flex-1 rounded-carte p-4 ${
                c.ton === "jaune"
                  ? "bg-jaune"
                  : c.ton === "bordeaux"
                    ? "bg-bordeaux"
                    : "bg-rose-doux"
              }`}
            >
              <p
                className={`text-sm font-medium leading-snug ${
                  c.ton === "bordeaux" ? "text-white" : "text-bordeaux"
                }`}
              >
                {c.etape}
              </p>
              <p
                className={`mt-1.5 text-xs ${
                  c.ton === "bordeaux" ? "text-rose-doux" : "text-bordeaux/70"
                }`}
              >
                {c.qui}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-encre/50">
          jaune = l'IA m'aide · bordeaux = humain uniquement · rose = entre vos mains
        </p>

        <div className="mx-auto mt-14 max-w-2xl space-y-4 text-base leading-relaxed text-encre">
          <p>
            Mes lignes rouges, écrites pour être vérifiables : je dis quand l'IA a servi, sans
            qu'on ait à me le demander. Je ne lui délègue jamais la stratégie ni les arbitrages de
            fond. Je ne publie aucun texte que je n'ai pas réécrit. Et je ne fais jamais parler une
            cliente à sa place : aucune citation, aucun ressenti, aucun chiffre sans son accord.
          </p>
          <p>
            Ça vaut aussi pour{" "}
            <a
              className="text-bordeaux underline underline-offset-4"
              href="https://nowadays-assistant.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              L'Assistant Com'
            </a>
            , l'outil que j'ai construit : le principe « l'IA propose, vous décidez » y est écrit
            depuis le premier jour, et les données de mes clientes qui y passent ne servent pas à
            entraîner les modèles.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 md:grid-cols-2">
          <article className="rounded-[10px_22px_8px_18px] bg-rose-doux p-7 md:-rotate-1">
            <h3 className="font-titre text-2xl text-bordeaux">Pas résolu : l'écologie</h3>
            <p className="mt-3 text-sm leading-relaxed text-encre">
              Ça consomme de l'eau et de l'électricité, je le sais, et je continue. Je ne vais pas
              compenser ça par une formule bien tournée. C'est le point où je suis la plus
              attaquable, et c'est normal qu'on me le dise.
            </p>
          </article>
          <article className="rounded-[10px_22px_8px_18px] bg-rose-doux p-7 md:rotate-1">
            <h3 className="font-titre text-2xl text-bordeaux">
              Pas résolu : les données d'entraînement
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-encre">
              Ces modèles ont appris sur du travail d'auteur·ices et d'artistes qui n'ont ni été
              prévenu·es ni payé·es — et mon audience est directement concernée. Les premières
              condamnations commencent à faire payer les fabricants ; c'est un début, pas une
              réparation.
            </p>
          </article>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="max-w-md -rotate-1 rounded-[10px_22px_8px_18px] bg-jaune p-6">
            <p className="font-titre text-xl italic leading-snug text-bordeaux">
              « IA éthique », ça n'existe pas non plus. Un usage un peu plus responsable chaque
              année, oui — et je dis honnêtement ce qui n'est pas résolu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Compteurs() {
  const indicateurs = [
    "La part de projets acceptés et de demandes refusées, avec les motifs de refus rendus anonymes.",
    "La part des contenus livrés réellement accessibles : texte alternatif, sous-titres, langage clair.",
    "La part de contenus faits pour durer (articles, e-mails, pages piliers) par rapport aux contenus jetables.",
    "Les moments de transmission dans chaque mission : ateliers, canevas remis, relectures commentées, et leurs heures.",
  ];
  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-center">
          Ce que je commence à <em>mesurer</em>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-encre">
          Je préfère les courbes aux slogans, mais je n'ai pas encore d'année pleine derrière moi.
          Voici les quatre choses que je compte depuis août 2026, sur tous les projets.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {indicateurs.map((texte) => (
            <article key={texte} className="rounded-carte bg-white p-7 text-center">
              <p className="font-titre text-5xl text-encre/20" aria-hidden="true">
                — %
              </p>
              <p className="mt-4 text-sm leading-relaxed text-encre">{texte}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-encre">
          Les cases sont vides exprès : je ne mets pas de faux chiffres en attendant les vrais.
          Premier relevé publié après une année pleine de comptage. Quatre chiffres, ça ne fait pas
          un rapport RSE, mais c'est un début, et c'est vérifiable.
        </p>
      </div>
    </section>
  );
}

function FeuilleDeRoute() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-center">
          La suite, sans promesse <em>intenable</em>
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <article className="rounded-carte bg-rose-pale p-7">
            <h3 className="font-titre text-2xl text-bordeaux">D'ici la fin 2026</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-encre">
              <li>Publier cette page, et la tenir à jour.</li>
              <li>
                Compter les quatre indicateurs sur tous les projets : le registre existe et se
                remplit depuis août 2026.
              </li>
            </ul>
          </article>
          <article className="rounded-carte bg-rose-pale/60 p-7">
            <h3 className="font-titre text-xl text-bordeaux/90">
              Après une année pleine de comptage
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-encre/90">
              Publier le premier relevé des quatre indicateurs, tels quels, même s'ils ne me
              flattent pas.
            </p>
          </article>
          <article className="rounded-carte border-2 border-dashed border-encre/20 p-7">
            <h3 className="font-titre text-lg text-encre/60">Ce que je ne date pas encore</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-encre/60">
              <li>Mes checklists mises au propre et partagées.</li>
              <li>Deux cas clients détaillés, avec ce que je referais autrement.</li>
              <li>Un ordre de grandeur de l'empreinte numérique de l'agence.</li>
              <li>Une éco-conception que je saurais vendre, mesurer et défendre.</li>
              <li>Ce que je découvrirai en chemin.</li>
            </ul>
          </article>
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-encre">
          Je publierai ce qui est fait, ce qui ne l'est pas, et pourquoi.
        </p>
      </div>
      <div className="mx-auto max-w-3xl px-6 pb-24">
        <CtaInline accroche="Une question sur un point précis de cette page ?" />
      </div>
    </section>
  );
}

function Faq() {
  const questions = [
    {
      q: "Vous faites les promos « 48 h, moins 50 %, dernier jour » ?",
      r: "Non. Sauf si c'est vrai, utile, et expliqué sans forcer la main. Une vraie date de fin, un vrai stock, un vrai motif : ça existe, et ça se dit très bien.",
    },
    {
      q: "Vous travaillez avec des grandes entreprises ?",
      r: "Seulement si la mission est dans l'ADN et si les preuves sont là. Sinon je décline. Ça m'est déjà arrivé, et ça m'arrivera encore.",
    },
    {
      q: "Et si mon projet est encore imparfait ?",
      r: "C'est le cas de presque tous. On nomme ce qui est vrai aujourd'hui, on ne raconte pas au présent ce qui est prévu pour l'an prochain, et on communique au rythme des preuves.",
    },
    {
      q: "Pourquoi « plus éthique » et pas « éthique » ?",
      r: "Parce qu'une agence 100 % éthique, ça n'existe pas. Il y a toujours un outil, un déplacement, un compromis. Dire « plus éthique », c'est s'engager à progresser plutôt qu'à avoir déjà fini.",
    },
  ];
  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center">
          Les questions qui <em>reviennent</em>
        </h2>
        <div className="mt-12">
          {questions.map((item) => (
            <details key={item.q} className="group border-b border-encre/10 py-5">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-titre text-xl text-bordeaux [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  className="shrink-0 text-encre/40 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-encre">{item.r}</p>
            </details>
          ))}
          <details className="group border-b border-encre/10 py-5">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-titre text-xl text-bordeaux [&::-webkit-details-marker]:hidden">
              Est-ce que ça coûte plus cher ?
              <span
                className="shrink-0 text-encre/40 transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-encre">
              Non. Les tarifs sont les mêmes pour tout le monde, et ils sont détaillés sur les
              pages d'offres :{" "}
              <Link
                to="/accompagnement-communication"
                className="text-bordeaux underline underline-offset-4"
              >
                l'accompagnement en binôme
              </Link>{" "}
              si vous êtes seule aux commandes,{" "}
              <Link to="/cooperative-asso" className="text-bordeaux underline underline-offset-4">
                la prise en charge complète
              </Link>{" "}
              si vous êtes une structure.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}

function PourquoiNowadays() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2>
              Pourquoi <em>Nowadays</em> ?
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="max-w-[60ch] text-base leading-relaxed text-encre">
              Parce que Nowadays signifie « de nos jours ». Pas pour coller à une tendance ni pour
              surfer sur un effet de mode, mais pour affirmer ce qui compte vraiment : construire
              des projets engagés avec éthique, qui respectent le vivant et participent à un avenir
              plus juste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Charte() {
  const lignes = [
    { titre: "Dire vrai.", texte: "Documenter, sourcer, expliquer les limites." },
    { titre: "Respecter les gens.", texte: "Pas de culpabilisation, pas d'urgence toxique." },
    { titre: "Émanciper.", texte: "Transmettre la méthode plutôt que créer de la dépendance." },
    {
      titre: "Inclure.",
      texte: "Représentations non stéréotypées, accessibilité prévue dès le début.",
    },
    {
      titre: "Choisir.",
      texte: "Le droit de dire non quand ce n'est pas aligné, des deux côtés.",
    },
    { titre: "Progresser.", texte: "Publier ce qui avance, pas des promesses." },
  ];
  return (
    <section className="manifesto">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center">
          Six phrases, et je m'y <em>tiens</em>
        </h2>
        <ol className="mx-auto mt-14 max-w-xl space-y-6">
          {lignes.map((l, i) => (
            <li key={l.titre} className="flex items-baseline gap-5">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-jaune font-titre text-lg text-bordeaux"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <p className="text-base leading-relaxed text-white">
                <strong className="font-medium text-jaune">{l.titre}</strong> {l.texte}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <>
      <VichyBand />
      <section className="bg-jaune">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-bordeaux">
            Je ne cherche pas la perfection. Je cherche la <em>cohérence</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-encre">
            Faire de la communication un outil d'émancipation : qui dit vrai, qui transmet, qui
            rend visible, qui fait du bien. Si vous vous reconnaissez là-dedans, on avance
            ensemble, à votre rythme, au rythme de vos preuves.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-plum"
            >
              Réserver un appel découverte
            </a>
          </div>
          <p className="mt-4 text-sm text-encre/70">30 minutes, gratuites, sans engagement.</p>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-encre">
            Et si vous voyez sur cette page quelque chose qui cloche, ou une promesse que je ne
            tiens pas : écrivez-moi. C'est exactement pour ça qu'elle est publique.
          </p>
        </div>
      </section>
    </>
  );
}

function Page() {
  return (
    <DaLayout>
      <Hero />
      <Pourquoi />
      <Convictions />
      <Filtre />
      <Ficelles />
      <FaconDeFaire />
      <Limites />
      <PositionIa />
      <Compteurs />
      <FeuilleDeRoute />
      <Faq />
      <PourquoiNowadays />
      <Charte />
      <FinalCta />
    </DaLayout>
  );
}
