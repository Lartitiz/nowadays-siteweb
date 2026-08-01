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
          "Mentions légales de Nowadays Agency : éditeur, hébergeur, propriété intellectuelle, RGPD, cookies, médiation et accessibilité.",
      },
      { property: "og:title", content: "Mentions légales ; Nowadays Agency" },
      {
        property: "og:description",
        content: "Informations légales et politique de confidentialité de Nowadays Agency.",
      },
      { property: "og:url", content: absoluteUrl("/mentions-legales") },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/mentions-legales") }],
  }),
  component: Page,
});

/* ------------------------------------------------------------------ Data */

const LAST_UPDATE = "5 juin 2026";

function Page() {
  return (
    <DaLayout>
      <Header />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pb-24">
          <Toc />
          <Section id="editeur" title="01 ; Éditeur du site">
            <Dl>
              <Dt>Raison sociale</Dt>
              <Dd>Nowadays Agency, SAS (société par actions simplifiée)</Dd>

              <Dt>Représentante légale & directrice de la publication</Dt>
              <Dd>Laetitia Mattioli</Dd>

              <Dt>Siège social</Dt>
              <Dd>193 rue du Faubourg Saint-Denis, 75010 Paris, France</Dd>

              <Dt>Lieu d'activité</Dt>
              <Dd>
                La Prochaine Aire ; Maison éclusière, Les Petits Pâtis, 89300 Saint-Aubin-sur-Yonne,
                France
              </Dd>

              <Dt>SIREN</Dt>
              <Dd>902 834 688</Dd>

              <Dt>SIRET</Dt>
              <Dd>902 834 688 00019</Dd>

              <Dt>Code APE / NAF</Dt>
              <Dd>
                <Todo>à compléter (ex. 7311Z ; Activités des agences de publicité)</Todo>
              </Dd>

              <Dt>Capital social</Dt>
              <Dd>
                <Todo>montant en € à compléter</Todo>
              </Dd>

              <Dt>RCS</Dt>
              <Dd>
                <Todo>Paris B 902 834 688 ; à confirmer</Todo>
              </Dd>

              <Dt>N° TVA intracommunautaire</Dt>
              <Dd>
                <Todo>FR XX 902834688 ; à compléter</Todo>
              </Dd>

              <Dt>Contact</Dt>
              <Dd>
                <a
                  href="mailto:hello@nowadaysagency.com"
                  className="underline underline-offset-4 hover:text-framboise"
                >
                  hello@nowadaysagency.com
                </a>
              </Dd>

              <Dt>Marque déposée</Dt>
              <Dd>
                « Nowadays Agency » ; marque déposée à l'INPI sous le numéro 4401319 (dépôt du
                03/11/2017).
              </Dd>
            </Dl>
          </Section>

          <Section id="hebergeur" title="02 ; Hébergement">
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
            <P>
              Webmaster : Laetitia Mattioli ; joignable à{" "}
              <a
                href="mailto:laetitia.mattioli@nowadaysagency.com"
                className="underline underline-offset-4 hover:text-framboise"
              >
                laetitia.mattioli@nowadaysagency.com
              </a>
              .
            </P>
          </Section>

          <Section id="cgu" title="03 ; Conditions d'utilisation">
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
          </Section>

          <Section id="pi" title="04 ; Propriété intellectuelle">
            <P>
              Nowadays Agency est propriétaire des droits de propriété intellectuelle ou détient les
              droits d'usage sur tous les éléments accessibles sur le site : textes, images,
              photographies, graphismes, logos, icônes, sons, vidéos et logiciels.
            </P>
            <P>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou
              partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
              interdite sans autorisation écrite préalable.
            </P>
            <P>
              Toute exploitation non autorisée sera considérée comme une contrefaçon et poursuivie
              conformément aux articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </P>
          </Section>

          <Section id="rgpd" title="05 ; Données personnelles (RGPD)">
            <H3>Responsable de traitement</H3>
            <P>
              Nowadays Agency (SAS), représentée par Laetitia Mattioli, joignable à{" "}
              <a
                href="mailto:laetitia.mattioli@nowadaysagency.com"
                className="underline underline-offset-4 hover:text-framboise"
              >
                laetitia.mattioli@nowadaysagency.com
              </a>
              .
            </P>

            <H3>Finalités et bases légales</H3>
            <ul className="mt-4 space-y-3 text-sm text-encre leading-relaxed list-disc pl-5 marker:text-framboise">
              <li>
                <strong>Réponse à une demande de contact</strong> ; base légale : exécution de
                mesures précontractuelles à la demande de l'utilisateur (RGPD art. 6.1.b).
              </li>
              <li>
                <strong>Envoi de la newsletter et du guide gratuit</strong> ; base légale :
                consentement explicite (RGPD art. 6.1.a), retirable à tout moment via le lien de
                désinscription présent dans chaque email.
              </li>
              <li>
                <strong>Réservation d'un appel découverte</strong> via Calendly ; base légale :
                exécution de mesures précontractuelles (RGPD art. 6.1.b).
              </li>
              <li>
                <strong>Mesure d'audience anonyme</strong> du site ; base légale : intérêt légitime
                (RGPD art. 6.1.f) ;{" "}
                <Todo>à confirmer selon l'outil retenu (Plausible, GA4, aucun)</Todo>.
              </li>
            </ul>

            <H3>Destinataires</H3>
            <P>
              Les données sont accessibles à Laetitia Mattioli et, le cas échéant, aux
              sous-traitants techniques nécessaires à la fourniture du service (hébergeur,
              fournisseur d'email, Calendly). Aucune donnée n'est revendue à des tiers.
            </P>

            <H3>Durée de conservation</H3>
            <ul className="mt-4 space-y-3 text-sm text-encre leading-relaxed list-disc pl-5 marker:text-framboise">
              <li>Demandes de contact : 3 ans après le dernier échange.</li>
              <li>Newsletter : jusqu'à désinscription, puis suppression sous 30 jours.</li>
              <li>Données de facturation : 10 ans (obligation légale comptable).</li>
            </ul>

            <H3>Vos droits</H3>
            <P>
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit
              d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité
              de vos données, ainsi que du droit de définir des directives post-mortem. Pour exercer
              ces droits :{" "}
              <a
                href="mailto:laetitia.mattioli@nowadaysagency.com"
                className="underline underline-offset-4 hover:text-framboise"
              >
                laetitia.mattioli@nowadaysagency.com
              </a>
              .
            </P>
            <P>
              En cas de désaccord persistant, vous pouvez introduire une réclamation auprès de la
              CNIL :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-framboise"
              >
                www.cnil.fr
              </a>
              .
            </P>
          </Section>

          <Section id="cookies" title="06 ; Cookies">
            <P>Le site utilise un minimum de cookies, classés en deux catégories :</P>
            <H3>Cookies techniques (exemptés de consentement)</H3>
            <P>
              Strictement nécessaires au fonctionnement du site (préférences d'affichage, sécurité).
              Ils ne nécessitent pas votre accord.
            </P>
            <H3>Cookies tiers (soumis à consentement)</H3>
            <ul className="mt-4 space-y-3 text-sm text-encre leading-relaxed list-disc pl-5 marker:text-framboise">
              <li>
                <strong>Calendly</strong> ; déposé uniquement si vous interagissez avec le widget de
                réservation d'appel.
              </li>
              <li>
                <strong>Mesure d'audience</strong> ;{" "}
                <Todo>
                  à préciser selon l'outil retenu (ex. Plausible sans cookie, ou GA4 avec
                  consentement)
                </Todo>
                .
              </li>
            </ul>
            <P>
              Vous pouvez à tout moment refuser ou retirer votre consentement via les paramètres de
              votre navigateur, ou en nous écrivant à{" "}
              <a
                href="mailto:laetitia.mattioli@nowadaysagency.com"
                className="underline underline-offset-4 hover:text-framboise"
              >
                laetitia.mattioli@nowadaysagency.com
              </a>
              . Le refus de cookies tiers n'altère pas l'accès au site.
            </P>
          </Section>

          <Section id="liens" title="07 ; Liens hypertextes">
            <P>
              Le site peut contenir des liens vers d'autres sites. Nowadays Agency n'exerce aucun
              contrôle sur ces sites et décline toute responsabilité quant à leur contenu, services
              ou disponibilité. Ces liens ne constituent ni approbation, ni partenariat.
            </P>
          </Section>

          <Section id="mediation" title="08 ; Médiation de la consommation">
            <P>
              Conformément à l'article L.612-1 du Code de la consommation, tout client consommateur
              a le droit de recourir gratuitement à un médiateur en cas de litige non résolu à
              l'amiable.
            </P>
            <P>
              <Todo>
                À compléter : soit désigner un médiateur (nom + adresse + URL), soit préciser que
                l'activité est exclusivement B2B et qu'aucun consommateur n'est concerné.
              </Todo>
            </P>
          </Section>

          <Section id="accessibilite" title="09 ; Accessibilité">
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
                href="mailto:laetitia.mattioli@nowadaysagency.com"
                className="underline underline-offset-4 hover:text-framboise"
              >
                laetitia.mattioli@nowadaysagency.com
              </a>
              .
            </P>
          </Section>

          <Section id="credits" title="10 ; Crédits">
            <Dl>
              <Dt>Conception &amp; rédaction</Dt>
              <Dd>Laetitia Mattioli, Nowadays Agency.</Dd>

              <Dt>Typographies</Dt>
              <Dd>
                Libre Baskerville (Pablo Impallari) et IBM Plex Mono (Mike Abbink &amp; Bold
                Monday), distribuées sous licence SIL Open Font License 1.1.
              </Dd>

              <Dt>Photographies &amp; visuels</Dt>
              <Dd>
                Visuels propriétaires de Nowadays Agency et de ses clientes, utilisés avec
                autorisation.
              </Dd>
            </Dl>
          </Section>

          <Section id="droit" title="11 ; Droit applicable">
            <P>
              Les présentes mentions sont soumises au droit français. Tout litige relatif à
              l'utilisation du site relève de la compétence exclusive des tribunaux de Paris, sous
              réserve d'une attribution de compétence particulière découlant d'un texte de loi ou
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
          Tout ce qu'il faut savoir sur l'éditeur de ce site, le traitement de vos données et vos
          droits.
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
  ["hebergeur", "Hébergement"],
  ["cgu", "Conditions d'utilisation"],
  ["pi", "Propriété intellectuelle"],
  ["rgpd", "Données personnelles (RGPD)"],
  ["cookies", "Cookies"],
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

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 font-titre text-2xl text-encre leading-snug">{children}</h3>;
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
