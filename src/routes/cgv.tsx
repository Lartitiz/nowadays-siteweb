import { createFileRoute, Link } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { absoluteUrl } from "@/lib/site";
import { ASSISTANT_URL } from "@/components/da/constants";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "Conditions générales de vente | Nowadays Agency" },
      {
        name: "description",
        content:
          "Conditions générales de vente de Nowadays Agency : offres, prix, paiement, droit de rétractation de 14 jours et médiation de la consommation.",
      },
      { property: "og:title", content: "Conditions générales de vente ; Nowadays Agency" },
      {
        property: "og:description",
        content: "Les règles qui encadrent nos prestations et l'abonnement à L'Assistant Com'.",
      },
      { property: "og:url", content: absoluteUrl("/cgv") },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/cgv") }],
  }),
  component: Page,
});

/* ------------------------------------------------------------------ Data */

const LAST_UPDATE = "14 août 2026";

function Page() {
  return (
    <DaLayout>
      <Header />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pb-24">
          <Toc />

          <Section id="champ" title="01 · Champ d'application">
            <P>
              Les présentes conditions générales de vente (CGV) s'appliquent à toutes les ventes
              conclues par Nowadays Agency, que ce soit des <strong>prestations de service</strong>{" "}
              (accompagnement communication, dit « ta binôme de com' » ; accompagnement coopératives
              &amp; associations) ou l'<strong>abonnement à l'outil L'Assistant Com'</strong>{" "}
              proposé sur{" "}
              <a
                href={ASSISTANT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-framboise"
              >
                nowadays-assistant.fr
              </a>
              . Elles s'appliquent aussi bien aux client·es professionnel·les (entreprises,
              associations, coopératives) qu'aux consommateur·rices agissant en dehors de toute
              activité professionnelle.
            </P>
            <P>
              Passer commande, signer un devis ou activer un abonnement payant vaut acceptation
              pleine et entière des présentes CGV, qui prévalent sur tout autre document sauf accord
              écrit contraire.
            </P>
            <P>
              L'abonnement à L'Assistant Com' est en outre encadré par ses propres{" "}
              <a
                href={`${ASSISTANT_URL}/cgu-cgv`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-framboise"
              >
                conditions d'utilisation
              </a>{" "}
              acceptées lors de l'inscription, qui détaillent le fonctionnement de l'outil (crédits,
              fonctionnalités par plan). En cas de contradiction sur le droit de rétractation, les
              présentes CGV priment : ce sont elles qui font foi.
            </P>
          </Section>

          <Section id="entreprise" title="02 · Qui vend">
            <P>
              Laetitia Mattioli, entrepreneuse individuelle exerçant sous le nom commercial Nowadays
              Agency — SIRET 832 189 070 00028, 6 rue Saint-Jacques, 89300 Joigny. Voir les{" "}
              <Link
                to="/mentions-legales"
                className="underline underline-offset-4 hover:text-framboise"
              >
                mentions légales
              </Link>{" "}
              pour le détail de l'identité de l'éditrice.
            </P>
          </Section>

          <Section id="offres" title="03 · Nos offres et leurs prix">
            <P>
              <strong>Accompagnement « ta binôme de com' »</strong> : 350&nbsp;€/mois pendant 6 mois
              (soit 2&nbsp;100&nbsp;€ au total), sans engagement au-delà des 6 mois.
            </P>
            <P>
              <strong>Accompagnement coopératives &amp; associations</strong> : sur devis, de
              2&nbsp;000&nbsp;€ à 20&nbsp;000&nbsp;€ selon l'ampleur du projet ; le devis précise le
              périmètre, le calendrier et le prix avant toute commande.
            </P>
            <P>
              <strong>Abonnement L'Assistant Com'</strong> : un plan Gratuit sans carte bancaire, et
              un plan Premium à 39&nbsp;€/mois, sans engagement de durée, résiliable à tout moment
              depuis l'outil. Le détail des plans est affiché et tenu à jour sur{" "}
              <a
                href={`${ASSISTANT_URL}/pricing`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-framboise"
              >
                {ASSISTANT_URL.replace("https://", "")}/pricing
              </a>
              .
            </P>
            <P>
              Tous les prix sont exprimés en euros. TVA non applicable, article 293 B du Code
              général des impôts.
            </P>
          </Section>

          <Section id="commande" title="04 · Commande et formation du contrat">
            <P>
              Pour l'accompagnement, la commande se forme par la signature d'un devis ou la
              validation écrite d'une proposition, généralement à la suite d'un appel de diagnostic.
              Pour l'abonnement Premium, la commande se forme au moment du paiement en ligne depuis
              l'outil.
            </P>
            <P>
              Dans les deux cas, un e-mail de confirmation reprenant l'objet, le prix et les
              présentes CGV est envoyé ; il constitue la preuve de la commande.
            </P>
          </Section>

          <Section id="paiement" title="05 · Paiement">
            <P>
              L'accompagnement se règle par prélèvement ou virement mensuel, à échéance convenue au
              devis. L'abonnement Premium se règle par carte bancaire, prélevé automatiquement
              chaque mois par notre prestataire de paiement (Stripe) jusqu'à résiliation.
            </P>
            <P>
              Tout retard de paiement peut entraîner la suspension de la prestation ou de l'accès à
              l'outil, après relance restée sans effet.
            </P>
          </Section>

          <Section id="retractation" title="06 · Droit de rétractation (14 jours)">
            <P>
              Conformément aux articles L.221-18 et suivants du Code de la consommation, si vous
              êtes un·e <strong>consommateur·rice</strong> (vous achetez en dehors de toute activité
              professionnelle) et que le contrat a été conclu <strong>à distance</strong> (par
              téléphone, e-mail, ou en ligne, sans rendez-vous physique préalable), vous disposez
              d'un délai de <strong>14 jours francs</strong> à compter de la conclusion du contrat
              pour vous rétracter, sans avoir à motiver votre décision ni à supporter d'autres frais
              que, le cas échéant, ceux prévus ci-dessous.
            </P>
            <P className="text-encre/70">
              Ce droit ne concerne pas les client·es professionnel·les (entreprises, associations,
              coopératives agissant pour les besoins de leur activité), pour lesquel·les seul le
              droit de rétractation éventuellement prévu au devis s'applique.
            </P>

            <p className="font-titre text-xl text-encre mt-8">
              Accompagnement (prestation de service)
            </p>
            <P>
              Si vous demandez expressément que la prestation commence avant la fin du délai de 14
              jours, vous conservez votre droit de rétractation, mais vous nous devrez le prix de la
              part de prestation déjà exécutée au moment où vous exercez ce droit (article
              L.221-25). Cette demande expresse est recueillie par écrit (e-mail ou mention sur le
              devis) avant tout début d'exécution anticipé.
            </P>
            <P>
              Si l'exécution de la prestation est intégralement achevée avant la fin du délai de 14
              jours, le droit de rétractation est perdu à compter de cette exécution complète, à
              condition que vous en ayez fait la demande expresse préalable et que vous ayez reconnu
              que votre droit de rétractation disparaîtrait une fois le contrat pleinement exécuté.
            </P>

            <p className="font-titre text-xl text-encre mt-8">
              Abonnement L'Assistant Com' (contenu numérique)
            </p>
            <P>
              L'abonnement donne accès à un contenu numérique fourni sur support immatériel (l'outil
              en ligne). Conformément à l'article L.221-28 13°, vous perdez votre droit de
              rétractation dès que l'exécution a commencé, <strong>à la double condition</strong>{" "}
              que vous ayez donné votre <strong>accord exprès préalable</strong> pour un accès
              immédiat à l'outil et que vous ayez <strong>reconnu perdre</strong> votre droit de
              rétractation en donnant cet accord. Ces deux éléments vous sont demandés séparément,
              par une case à cocher dédiée, au moment de l'activation de l'abonnement —
              l'acceptation générale des CGU ne suffit pas à elle seule à emporter cette
              renonciation.
            </P>
            <P>
              Si vous n'avez pas donné cet accord exprès, vous disposez des 14 jours pleins pour
              vous rétracter sans frais ; l'accès Premium déjà utilisé pendant ce délai n'est pas
              facturé.
            </P>

            <p className="font-titre text-xl text-encre mt-8">Comment exercer ce droit</p>
            <P>
              Avant l'expiration du délai de 14 jours, adressez votre décision de rétractation sans
              ambiguïté à{" "}
              <a
                href="mailto:laetitia@nowadaysagency.com"
                className="underline underline-offset-4 hover:text-framboise"
              >
                laetitia@nowadaysagency.com
              </a>
              , par exemple au moyen du formulaire type ci-dessous. Un accusé de réception vous est
              envoyé sans délai. Les sommes déjà versées, déduction faite le cas échéant de la part
              de prestation exécutée avec votre accord (voir ci-dessus), sont remboursées dans les
              14 jours suivant la rétractation, par le même moyen de paiement que celui utilisé pour
              la commande.
            </P>

            <div className="mt-8 rounded-lg border border-dashed border-ink/25 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-framboise">
                Formulaire type de rétractation
              </p>
              <p className="mt-3 text-sm text-encre leading-relaxed">
                (Veuillez compléter et renvoyer ce formulaire uniquement si vous souhaitez vous
                rétracter du contrat, à laetitia@nowadaysagency.com)
              </p>
              <p className="mt-4 text-sm text-encre leading-relaxed">
                Je/nous (*) vous notifie/notifions (*) par la présente ma/notre (*) rétractation du
                contrat portant sur la prestation / l'abonnement ci-dessous (*) :
              </p>
              <ul className="mt-3 space-y-1 text-sm text-encre leading-relaxed">
                <li>— Commandé le (*) / reçu le (*) :</li>
                <li>— Nom du/de la consommateur·rice :</li>
                <li>— Adresse du/de la consommateur·rice :</li>
                <li>— Signature (uniquement en cas de notification papier) :</li>
                <li>— Date :</li>
              </ul>
              <p className="mt-3 text-xs text-encre/70">(*) Rayez la mention inutile.</p>
            </div>
          </Section>

          <Section id="execution" title="07 · Durée, exécution et résiliation">
            <P>
              L'accompagnement « ta binôme de com' » court sur 6 mois à compter de son démarrage ;
              l'accompagnement coopératives &amp; associations suit le calendrier fixé au devis.
              Au-delà, aucune reconduction automatique n'est prévue.
            </P>
            <P>
              L'abonnement Premium à L'Assistant Com' est{" "}
              <strong>mensuel, sans engagement de durée</strong> : il se renouvelle automatiquement
              chaque mois jusqu'à résiliation, que vous pouvez effectuer à tout moment depuis votre
              espace « Abonnement » dans l'outil. La résiliation prend effet à la fin de la période
              déjà payée ; aucun remboursement au prorata n'est dû pour le mois en cours, sauf
              rétractation dans les conditions de la section 06.
            </P>
          </Section>

          <Section id="responsabilite" title="08 · Responsabilité">
            <P>
              Nowadays Agency met en œuvre les moyens nécessaires à la bonne exécution des
              prestations et au bon fonctionnement de l'outil, sans garantir un résultat commercial
              particulier (visibilité, ventes, croissance d'audience), qui dépend aussi de facteurs
              hors de son contrôle. Nowadays Agency ne saurait être tenue responsable d'une
              inexécution due à un cas de force majeure ou au fait du/de la client·e.
            </P>
          </Section>

          <Section id="mediation" title="09 · Réclamation et médiation de la consommation">
            <P>
              Toute réclamation est à adresser à{" "}
              <a
                href="mailto:laetitia@nowadaysagency.com"
                className="underline underline-offset-4 hover:text-framboise"
              >
                laetitia@nowadaysagency.com
              </a>
              . Si le désaccord persiste, conformément à l'article L.612-1 du Code de la
              consommation, tout·e client·e consommateur·rice peut recourir gratuitement au
              médiateur de la consommation désigné par Nowadays Agency :
            </P>
            <P>
              CM2C — Centre de la Médiation de la Consommation de Conciliateurs de Justice, 49 rue
              de Ponthieu, 75008 Paris ;{" "}
              <a
                href="https://www.cm2c.net"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-framboise"
              >
                cm2c.net
              </a>
              .
            </P>
            <P className="text-encre/70">
              Cette même information figure dans les{" "}
              <Link
                to="/mentions-legales"
                className="underline underline-offset-4 hover:text-framboise"
              >
                mentions légales
              </Link>
              , section « Médiation de la consommation ».
            </P>
          </Section>

          <Section id="droit" title="10 · Droit applicable et juridiction">
            <P>
              Les présentes CGV sont soumises au droit français. En cas de litige, et à défaut de
              résolution amiable ou par médiation, les tribunaux français sont seuls compétents,
              sous réserve des règles impératives protectrices du consommateur qui lui permettent de
              saisir la juridiction de son propre domicile.
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
          Conditions <em className="text-framboise">générales de vente</em>
        </h1>
        <p className="mt-6 text-sm text-encre leading-relaxed">
          Nos offres, nos prix, et vos droits — notamment celui de vous rétracter.
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
  ["champ", "Champ d'application"],
  ["entreprise", "Qui vend"],
  ["offres", "Nos offres et leurs prix"],
  ["commande", "Commande et formation du contrat"],
  ["paiement", "Paiement"],
  ["retractation", "Droit de rétractation (14 jours)"],
  ["execution", "Durée, exécution et résiliation"],
  ["responsabilite", "Responsabilité"],
  ["mediation", "Réclamation et médiation"],
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
