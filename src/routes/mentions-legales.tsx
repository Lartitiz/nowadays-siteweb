import { createFileRoute } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | Nowadays Agency" },
      {
        name: "description",
        content:
          "Mentions légales de Nowadays Agency : éditrice, hébergement, propriété intellectuelle, données personnelles, cookies et droit applicable.",
      },
      { property: "og:title", content: "Mentions légales | Nowadays Agency" },
      {
        property: "og:description",
        content:
          "Informations légales de Nowadays Agency : éditrice, hébergement, propriété intellectuelle et données personnelles.",
      },
      { property: "og:url", content: absoluteUrl("/mentions-legales") },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/mentions-legales") }],
  }),
  component: Page,
});

/* ------------------------------------------------------------------ Data */

const LAST_UPDATE = "5 août 2026";

function Page() {
  return (
    <DaLayout>
      <Header />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pb-24">
          <Toc />
          <Section id="editrice" title="01 · Éditrice du site">
            <P>
              Le site nowadaysagency.com est édité par{" "}
              <strong>Laetitia Mattioli</strong>, entrepreneur individuel (EI), exerçant sous le nom
              commercial <strong>Nowadays Agency</strong>.
            </P>
            <Dl>
              <Dt>Adresse</Dt>
              <Dd>6 rue Saint-Jacques, 89300 Joigny, France</Dd>

              <Dt>SIREN</Dt>
              <Dd>832 189 070</Dd>

              <Dt>SIRET du siège</Dt>
              <Dd>832 189 070 00028</Dd>

              <Dt>Code APE</Dt>
              <Dd>70.21Z — Conseil en relations publiques et communication</Dd>

              <Dt>Immatriculation</Dt>
              <Dd>
                Immatriculée au Registre National des Entreprises (RNE) tenu par l'INPI depuis le 10
                septembre 2025.
              </Dd>

              <Dt>TVA</Dt>
              <Dd>Non applicable, article 293 B du code général des impôts.</Dd>

              <Dt>Téléphone</Dt>
              <Dd>
                <a
                  href="tel:+33614133921"
                  className="underline underline-offset-4 hover:text-framboise"
                >
                  06 14 13 39 21
                </a>
              </Dd>

              <Dt>E-mail</Dt>
              <Dd>
                <a
                  href="mailto:laetitia@nowadaysagency.com"
                  className="underline underline-offset-4 hover:text-framboise"
                >
                  laetitia@nowadaysagency.com
                </a>
              </Dd>
            </Dl>
          </Section>

          <Section id="publication" title="02 · Directrice de la publication">
            <P>
              <strong>Laetitia Mattioli.</strong>
            </P>
          </Section>

          <Section id="hebergeur" title="03 · Hébergement">
            <P>
              Le site est hébergé par <strong>OVH SAS</strong>, société par actions simplifiée au
              capital de 10 174 560 €, immatriculée au RCS de Lille Métropole sous le numéro 424 761
              419 00045, dont le siège social est situé 2 rue Kellermann, 59100 Roubaix, France. Site :{" "}
              <a
                href="https://www.ovhcloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-framboise"
              >
                ovhcloud.com
              </a>
              .
            </P>
          </Section>

          <Section id="pi" title="04 · Propriété intellectuelle">
            <P>
              L'ensemble des contenus de ce site — textes, images, illustrations, graphismes, logos,
              éléments d'identité visuelle, structure et code — est protégé par le droit de la
              propriété intellectuelle. Sauf mention contraire, ces contenus sont la propriété de
              Laetitia Mattioli ou font l'objet d'une autorisation d'usage.
            </P>
            <P>
              Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, sur
              quelque support que ce soit, est interdite sans autorisation écrite préalable.
            </P>
            <P>
              Les marques, noms et logos des structures citées à titre de références appartiennent à
              leurs titulaires respectifs et sont reproduits avec leur accord ou dans le cadre du droit
              de citation.
            </P>
          </Section>

          <Section id="donnees" title="05 · Données personnelles">
            <P>
              Les données collectées sur ce site le sont uniquement à partir des informations que vous
              transmettez : formulaire de contact, prise de rendez-vous, inscription à la newsletter{" "}
              <em>Le Mégaphone</em>. Elles servent à répondre à votre demande, à organiser un échange,
              ou à vous envoyer la newsletter à laquelle vous vous êtes inscrit·e. Elles ne sont ni
              vendues, ni cédées, ni transmises à des tiers à des fins commerciales.
            </P>
            <P>
              Conformément au règlement général sur la protection des données (RGPD) et à la loi
              Informatique et Libertés, vous disposez d'un droit d'accès, de rectification,
              d'effacement, de limitation, d'opposition et de portabilité sur vos données. Pour
              l'exercer, écrivez à{" "}
              <a
                href="mailto:hello@nowadaysagency.com"
                className="underline underline-offset-4 hover:text-framboise"
              >
                laetitia@nowadaysagency.com
              </a>
              . Vous pouvez également introduire une réclamation auprès de la CNIL :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-framboise"
              >
                cnil.fr
              </a>
              .
            </P>
            <P>
              Le détail des traitements, des durées de conservation et des sous-traitants figure dans
              la politique de confidentialité.
            </P>
          </Section>

          <Section id="cookies" title="06 · Cookies">
            <P>
              Ce site utilise des cookies strictement nécessaires à son fonctionnement, ainsi que des
              cookies de mesure d'audience soumis à votre consentement. Vous pouvez modifier vos choix
              à tout moment depuis le gestionnaire de préférences.
            </P>
          </Section>

          <Section id="liens" title="07 · Liens hypertextes">
            <P>
              Le site peut contenir des liens vers des sites tiers. Nowadays Agency n'exerce aucun
              contrôle sur leur contenu et ne saurait être tenue responsable de ce qui y est publié.
            </P>
          </Section>

          <Section id="mediation" title="08 · Médiation de la consommation">
            <P>
              Conformément à l'article L.612-1 du Code de la consommation, tout client consommateur a le
              droit de recourir gratuitement à un médiateur en cas de litige non résolu à l'amiable.
            </P>
            <P>
              <Todo>
                À compléter : désigner un médiateur (nom, adresse, URL) ou confirmer que l'activité est
                exclusivement B2B et qu'aucun consommateur n'est concerné.
              </Todo>
            </P>
          </Section>

          <Section id="droit" title="09 · Droit applicable">
            <P>
              Les présentes mentions légales sont soumises au droit français. Tout litige relatif à
              l'utilisation du site relève de la compétence exclusive des tribunaux de Paris, sous
              réserve d'une attribution de compétence particulière découlant d'un texte de loi ou
              réglementaire.
            </P>
          </Section>

          <Section id="historique" title="10 · Historique des mises à jour">
            <P>
              Dernière mise à jour : <strong>{LAST_UPDATE}</strong>. Cette version remplace
              intégralement la précédente, qui mentionnait une SAS liquidée et une adresse parisienne
              désormais close.
            </P>
          </Section>
        </div>
      </article>
    </DaLayout>
  );
}

/* ----------------------------------------------------------------- HERO */

function Header() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <p className="text-xs uppercase tracking-[0.24em] text-framboise">
          · Informations &amp; transparence ·
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-ink mt-6">
          Mentions <em className="text-framboise">légales</em>
        </h1>
        <p className="mt-6 text-sm text-ink leading-relaxed">
          Tout ce qu'il faut savoir sur l'éditrice de ce site, le traitement de vos données et vos
          droits.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-ink/70">
          Dernière mise à jour : {LAST_UPDATE}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ TOC */

const TOC = [
  ["editrice", "Éditrice du site"],
  ["publication", "Directrice de la publication"],
  ["hebergeur", "Hébergement"],
  ["pi", "Propriété intellectuelle"],
  ["donnees", "Données personnelles"],
  ["cookies", "Cookies"],
  ["liens", "Liens hypertextes"],
  ["mediation", "Médiation de la consommation"],
  ["droit", "Droit applicable"],
  ["historique", "Historique des mises à jour"],
] as const;

function Toc() {
  return (
    <nav aria-label="Sommaire" className="mb-16 border-t border-b border-ink/15 py-8">
      <p className="text-xs uppercase tracking-[0.24em] text-framboise">Sommaire</p>
      <ol className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 text-sm text-ink sm:grid-cols-2">
        {TOC.map(([id, label], i) => (
          <li key={id}>
            <a href={`#${id}`} className="underline underline-offset-4 hover:text-framboise">
              <span className="text-framboise">{String(i + 1).padStart(2, "0")} ·</span> {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------- Building blocks */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-ink/15 py-14 first-of-type:border-t-0 first-of-type:pt-0 bg-rose-pale"
    >
      <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">{title}</h2>
      <div className="mt-8 space-y-5">{children}</div>
    </section>
  );
}

function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm text-ink leading-relaxed ${className}`}>{children}</p>;
}

function Dl({ children }: { children: React.ReactNode }) {
  return (
    <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-[max-content_1fr]">
      {children}
    </dl>
  );
}

function Dt({ children }: { children: React.ReactNode }) {
  return <dt className="text-xs uppercase tracking-[0.2em] text-framboise sm:pt-1">{children}</dt>;
}

function Dd({ children }: { children: React.ReactNode }) {
  return <dd className="text-sm text-ink leading-relaxed">{children}</dd>;
}

function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="border-b border-dashed border-bordeaux text-bordeaux"
      title="Donnée à confirmer"
    >
      [À compléter · {children}]
    </span>
  );
}
