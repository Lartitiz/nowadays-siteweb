import { createFileRoute, Link } from "@tanstack/react-router";

import { DaLayout } from "@/components/da/DaLayout";
import { CtaFinal } from "@/components/da/CtaFinal";
import { VichyBand } from "@/components/da/VichyBand";
import { absoluteUrl } from "@/lib/site";

// Page « À propos ».
//
// Deux trous repérés à l'audit SEO du 03/08 :
//   1. Aucun ancrage local. « Bourgogne » et « Yonne » n'apparaissaient NULLE
//      PART sur le site, « Joigny » deux fois sur l'accueil — alors que les
//      données structurées portent bien l'adresse. Une requête du type
//      « agence de communication Yonne » n'avait rien à se mettre sous la dent.
//   2. Aucune page « qui je suis » vers laquelle pointer : la bio vivait au
//      milieu d'une page de vente.
//
// 🔑 Aucune phrase n'invente quoi que ce soit : les chiffres (dix ans, +150
// projets, les écoles) et les partis pris sont ceux déjà publiés ailleurs sur
// le site. Le « pourquoi Nowadays » n'est pas recopié — il vit sur
// /demarche-ethique, on y renvoie, ce qui fait un lien interne de plus.

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos | Laetitia Mattioli, fondatrice | Nowadays" },
      {
        name: "description",
        content:
          "Qui est derrière Nowadays : Laetitia Mattioli, dix ans de marketing digital et plus de 150 projets éthiques accompagnés, depuis Joigny dans l'Yonne.",
      },
      { property: "og:title", content: "À propos | Laetitia Mattioli, fondatrice de Nowadays" },
      {
        property: "og:description",
        content:
          "Qui est derrière Nowadays : Laetitia Mattioli, dix ans de marketing digital et plus de 150 projets éthiques accompagnés, depuis Joigny dans l'Yonne.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: absoluteUrl("/a-propos") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/a-propos") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl("/a-propos"),
          name: "À propos de Nowadays Agency",
          mainEntity: {
            "@type": "Person",
            name: "Laetitia Mattioli",
            jobTitle: "Fondatrice de Nowadays Agency",
            worksFor: { "@type": "Organization", name: "Nowadays Agency" },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Joigny",
              postalCode: "89300",
              addressRegion: "Bourgogne-Franche-Comté",
              addressCountry: "FR",
            },
          },
        }),
      },
    ],
  }),
  component: Page,
});

const REPERES = [
  { chiffre: "10 ans", libelle: "dans le marketing digital" },
  { chiffre: "+150", libelle: "projets éthiques accompagnés" },
  { chiffre: "5 écoles", libelle: "où j'enseigne la communication" },
];

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="text-xs uppercase tracking-[0.24em] text-framboise">· À propos ·</p>
        <h1 className="mx-auto mt-6 font-titre text-4xl leading-[1.05] text-encre md:text-6xl">
          Derrière Nowadays, il y a <em>Laetitia</em>
        </h1>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-encre">
          <p>
            Je m'appelle Laetitia Mattioli. J'ai créé Nowadays parce que trop de projets qui font du
            bien restent invisibles — pas faute de qualité, mais faute d'avoir appris à parler
            d'eux sans se trahir.
          </p>
          <p>
            Pour moi, la communication n'est pas un outil de manipulation. C'est un outil
            d'émancipation.
          </p>
        </div>
      </div>
    </section>
  );
}

function Reperes() {
  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center font-titre text-3xl leading-[1.1] text-encre md:text-4xl">
          En <em>bref</em>
        </h2>
        <dl className="mt-14 grid gap-10 sm:grid-cols-3">
          {REPERES.map((r) => (
            <div key={r.chiffre} className="text-center">
              <dt className="font-titre text-4xl leading-none text-bordeaux md:text-5xl">
                {r.chiffre}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-gris-chaud">{r.libelle}</dd>
            </div>
          ))}
        </dl>
        <p className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-encre">
          J'enseigne à l'ENSAD Paris, au CESACOM, à l'ISCPA, à l'ENS et aux Mines. Transmettre fait
          partie du métier : une communication qui n'émancipe pas ses destinataires n'est pas une
          communication qui m'intéresse.
        </p>
      </div>
    </section>
  );
}

function Ancrage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-titre text-3xl leading-[1.1] text-encre md:text-4xl">
          Une agence de communication engagée à <em>Joigny</em>, en Bourgogne
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-encre">
          <p>
            Nowadays est basée à Joigny, dans l'Yonne, en Bourgogne-Franche-Comté. Les ateliers et
            les sessions de travail se font en visio : on peut donc construire votre communication
            depuis n'importe où en France, et c'est ce qu'on fait la plupart du temps.
          </p>
          <p>
            Les projets accompagnés vont de la créatrice installée à son atelier jusqu'à la
            coopérative nationale — mode responsable, artisanat, associations, ONG, culture, design.
          </p>
        </div>
      </div>
    </section>
  );
}

function Convictions() {
  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-titre text-3xl leading-[1.1] text-encre md:text-4xl">
          Ce que je <em>refuse</em>, et pourquoi
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-encre">
          <p>
            Pas de fausse rareté, pas de compte à rebours agressif, pas de message qui culpabilise.
            Une communication juste montre ses limites, explique, contextualise. C'est plus lent, et
            ça tient plus longtemps.
          </p>
          <p>
            J'ai écrit tout ça noir sur blanc — les méthodes, les refus, et mes propres limites —
            dans{" "}
            <Link to="/demarche-ethique" className="text-bordeaux underline underline-offset-4">
              ma démarche éthique et mon manifeste
            </Link>
            . C'est aussi là que j'explique d'où vient le nom « Nowadays ».
          </p>
        </div>
      </div>
    </section>
  );
}

function TravaillerEnsemble() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-titre text-3xl leading-[1.1] text-encre md:text-4xl">
          Travailler <em>ensemble</em>
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            to="/accompagnement-communication"
            className="group block bg-rose-pale p-6 transition-colors hover:bg-creme"
            style={{ borderRadius: "var(--card-radius, 22px)" }}
          >
            <span className="block font-titre text-xl text-encre">Ta binôme de com'</span>
            <span className="mt-1 block text-sm leading-relaxed text-gris-chaud">
              Vous êtes seule aux commandes : on construit votre communication à deux, sur six mois.
            </span>
            <span className="mt-3 block text-sm text-bordeaux group-hover:underline">
              Voir l'accompagnement →
            </span>
          </Link>
          <Link
            to="/cooperative-asso"
            className="group block bg-rose-pale p-6 transition-colors hover:bg-creme"
            style={{ borderRadius: "var(--card-radius, 22px)" }}
          >
            <span className="block font-titre text-xl text-encre">Déléguer votre com'</span>
            <span className="mt-1 block text-sm leading-relaxed text-gris-chaud">
              Vous êtes une coopérative, une association ou une PME engagée : on prend en charge.
            </span>
            <span className="mt-3 block text-sm text-bordeaux group-hover:underline">
              Voir l'offre →
            </span>
          </Link>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-gris-chaud">
          Ou regardez d'abord{" "}
          <Link to="/etudes-de-cas-pro" className="text-bordeaux underline underline-offset-4">
            ce qu'on a fait pour d'autres
          </Link>{" "}
          et{" "}
          <Link to="/creatrices-ethiques" className="text-bordeaux underline underline-offset-4">
            les créatrices déjà accompagnées
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function Page() {
  return (
    <DaLayout>
      <Hero />
      <Reperes />
      <Ancrage />
      <Convictions />
      <TravaillerEnsemble />
      <VichyBand />
      <CtaFinal />
    </DaLayout>
  );
}
