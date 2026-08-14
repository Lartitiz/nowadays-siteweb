import { createFileRoute, Link } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | Nowadays Agency" },
      {
        name: "description",
        content:
          "Mentions légales de Nowadays Agency : éditeur, hébergeur, propriété intellectuelle, données personnelles, médiation et accessibilité.",
      },
      { property: "og:title", content: "Mentions légales ; Nowadays Agency" },
      {
        property: "og:description",
        content: "Informations légales du site de Nowadays Agency.",
      },
      { property: "og:url", content: absoluteUrl("/mentions-legales") },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/mentions-legales") }],
  }),
  component: Page,
});

/* ------------------------------------------------------------------ Data */

const LAST_UPDATE = "4 août 2026";

function Page() {
  return (
    <DaLayout>
      <Header />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pb-24">
          <Toc />
          <Section id="editeur" title="01 · Éditeur du site">
            <P>
              Laetitia Mattioli, entrepreneuse individuelle, exerçant sous le nom commercial
              Nowadays Agency.
            </P>
            <Dl>
              <Dt>SIRET</Dt>
              <Dd>832 189 070 00028</Dd>

              <Dt>Siège</Dt>
              <Dd>6 rue Saint-Jacques, 89300 Joigny, France</Dd>

              <Dt>Contact</Dt>
              <Dd>
                <a
                  href="mailto:laetitia@nowadaysagency.com"
                  className="underline underline-offset-4 hover:text-framboise"
                >
                  laetitia@nowadaysagency.com
                </a>{" "}
                · 06 14 13 39 21
              </Dd>

              <Dt>TVA</Dt>
              <Dd>TVA non applicable, article 293 B du Code général des impôts.</Dd>

              <Dt>Marque déposée</Dt>
              <Dd>
                « Nowadays Agency » ; marque déposée à l'INPI sous le numéro 4401319 (dépôt du
                03/11/2017).
              </Dd>
            </Dl>
          </Section>

          <Section id="publication" title="02 · Directrice de la publication">
            <P>Laetitia Mattioli.</P>
          </Section>

          <Section id="hebergeur" title="03 · Hébergement">
            <P>
              Le site est hébergé sur l'infrastructure <strong>Lovable</strong> qui s'appuie sur le
              réseau de distribution <strong>Cloudflare</strong>.
            </P>
            <Dl>
              <Dt>Lovable AB</Dt>
              <Dd>
                Stockholm, Suède ;{" "}
                <a
                  href="https://lovable.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-framboise"
                >
                  lovable.dev
                </a>
              </Dd>

              <Dt>Cloudflare, Inc.</Dt>
              <Dd>
                101 Townsend Street, San Francisco, CA 94107, États-Unis ;{" "}
                <a
                  href="https://www.cloudflare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-framboise"
                >
                  cloudflare.com
                </a>
              </Dd>
            </Dl>
          </Section>

          <Section id="cgu" title="04 · Conditions d'utilisation">
            <P>
              L'utilisation du site nowadaysagency.com implique l'acceptation pleine et entière des
              présentes conditions. Elles peuvent être modifiées à tout moment : les utilisateurs
              sont invités à les consulter régulièrement.
            </P>
            <P>
              Le site est accessible 24h/24, sauf interruption ; programmée ou non ; pour
              maintenance technique. Nowadays Agency s'efforce alors d'en limiter la durée.
            </P>
            <P>
              Nowadays Agency met tout en œuvre pour fournir des informations aussi précises que
              possible, sans pouvoir être tenue responsable des omissions, inexactitudes ou défauts
              de mise à jour ; qu'ils soient de son fait ou de partenaires.
            </P>
            <P>
              L'utilisateur s'engage à accéder au site avec un matériel récent, exempt de virus et
              un navigateur à jour. Nowadays Agency ne saurait être tenue responsable des dommages
              matériels liés à l'utilisation du site.
            </P>
            <P>
              L'achat d'une prestation ou d'un abonnement est régi par les{" "}
              <Link to="/cgv" className="underline underline-offset-4 hover:text-framboise">
                conditions générales de vente
              </Link>
              , qui détaillent notamment le droit de rétractation de 14 jours.
            </P>
          </Section>

          <Section id="pi" title="05 · Propriété intellectuelle">
            <P>
              L'ensemble des contenus de ce site (textes, images, identité visuelle, méthodes) est
              la propriété de Nowadays Agency, sauf mention contraire. Toute reproduction sans
              autorisation écrite est interdite.
            </P>
          </Section>

          <Section id="donnees" title="06 · Données personnelles">
            <P>
              Le traitement de vos données est décrit dans notre{" "}
              <Link
                to="/confidentialite"
                className="underline underline-offset-4 hover:text-framboise"
              >
                politique de confidentialité
              </Link>
              .
            </P>
          </Section>

          <Section id="liens" title="07 · Liens hypertextes">
            <P>
              Le site peut contenir des liens vers d'autres sites. Nowadays Agency n'exerce aucun
              contrôle sur ces sites et décline toute responsabilité quant à leur contenu, services
              ou disponibilité. Ces liens ne constituent ni approbation, ni partenariat.
            </P>
          </Section>

          <Section id="mediation" title="08 · Médiation de la consommation">
            <P>
              Conformément à l'article L.612-1 du Code de la consommation, tout litige avec un
              client consommateur peut être soumis gratuitement à un médiateur de la consommation.
            </P>
            <P>
              Médiateur désigné : <Todo>nom, adresse et site du médiateur</Todo>
            </P>
          </Section>

          <Section id="accessibilite" title="09 · Accessibilité">
            <P>
              Nowadays Agency s'efforce de rendre son site accessible au plus grand nombre, en
              s'appuyant sur les recommandations du Référentiel Général d'Amélioration de
              l'Accessibilité (RGAA). Le site est actuellement en{" "}
              <strong>conformité partielle</strong> ; un audit complet sera publié dès qu'il sera
              réalisé.
            </P>
            <P>
              Pour signaler un défaut d'accessibilité ou demander un contenu dans un format
              alternatif :{" "}
              <a
                href="mailto:laetitia@nowadaysagency.com"
                className="underline underline-offset-4 hover:text-framboise"
              >
                laetitia@nowadaysagency.com
              </a>
              .
            </P>
          </Section>

          <Section id="credits" title="10 · Crédits">
            <Dl>
              <Dt>Conception &amp; rédaction</Dt>
              <Dd>Laetitia Mattioli, Nowadays Agency.</Dd>

              <Dt>Typographies</Dt>
              <Dd>
                Instrument Serif (Rodrigo Fuenzalida) et Hanken Grotesk (Alfredo Marco Pradil),
                distribuées sous licence SIL Open Font License 1.1.
              </Dd>

              <Dt>Photographies &amp; visuels</Dt>
              <Dd>
                Visuels propriétaires de Nowadays Agency et de ses clientes, utilisés avec
                autorisation.
              </Dd>
            </Dl>
          </Section>

          <Section id="droit" title="11 · Droit applicable">
            <P>
              Les présentes mentions sont soumises au droit français. Tout litige relatif à
              l'utilisation du site relève de la compétence des tribunaux français, sous réserve
              d'une attribution de compétence particulière découlant d'un texte de loi ou
              réglementaire.
            </P>
            <P className="text-encre/70">
              Textes principaux applicables : RGPD (UE) 2016/679, loi Informatique et Libertés n°
              78-17 du 6 janvier 1978 modifiée, loi n° 2004-575 du 21 juin 2004 pour la confiance
              dans l'économie numérique, Code de la propriété intellectuelle, Code de la
              consommation.
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
        <h1 className="mt-6 font-titre text-5xl md:text-7xl leading-[1.02] text-encre">
          Mentions <em className="text-framboise">légales</em>
        </h1>
        <p className="mt-6 text-sm text-encre leading-relaxed">
          Tout ce qu'il faut savoir sur l'éditeur de ce site et vos droits.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-encre/70">
          Dernière mise à jour : {LAST_UPDATE}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ TOC */

const TOC = [
  ["editeur", "Éditeur du site"],
  ["publication", "Directrice de la publication"],
  ["hebergeur", "Hébergement"],
  ["cgu", "Conditions d'utilisation"],
  ["pi", "Propriété intellectuelle"],
  ["donnees", "Données personnelles"],
  ["liens", "Liens hypertextes"],
  ["mediation", "Médiation de la consommation"],
  ["accessibilite", "Accessibilité"],
  ["credits", "Crédits"],
  ["droit", "Droit applicable"],
] as const;

function Toc() {
  return (
    <nav aria-label="Sommaire" className="mb-16 border-t border-b border-ink/15 py-8">
      <p className="text-xs uppercase tracking-[0.24em] text-framboise">Sommaire</p>
      <ol className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 text-sm text-encre sm:grid-cols-2">
        {TOC.map(([id, label], i) => (
          <li key={id}>
            <a href={`#${id}`} className="underline underline-offset-4 hover:text-framboise">
              <span className="text-framboise">{String(i + 1).padStart(2, "0")} ;</span> {label}
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
      <h2 className="font-titre text-3xl md:text-5xl leading-[1.1] text-encre">{title}</h2>
      <div className="mt-8 space-y-5">{children}</div>
    </section>
  );
}

function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm text-encre leading-relaxed ${className}`}>{children}</p>;
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
  return <dd className="text-sm text-encre leading-relaxed">{children}</dd>;
}

function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="border-b border-dashed border-bordeaux text-bordeaux"
      title="Donnée à confirmer"
    >
      [À compléter ; {children}]
    </span>
  );
}
