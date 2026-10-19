import { createFileRoute } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "Conditions générales de vente | Nowadays Agency" },
      {
        name: "description",
        content:
          "Conditions générales de vente de Nowadays Agency : engagement, prix et paiement, arrêt et pause, livrables, données personnelles.",
      },
      { property: "og:title", content: "Conditions générales de vente | Nowadays Agency" },
      {
        property: "og:description",
        content:
          "Conditions générales de vente de Nowadays Agency : engagement, prix et paiement, arrêt et pause, livrables, données personnelles.",
      },
      { property: "og:url", content: absoluteUrl("/cgv") },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/cgv") }],
  }),
  component: Page,
});

/* ------------------------------------------------------------------ Data */

const LAST_UPDATE = "19 octobre 2026";

// Le sommaire et les numéros de section sont tirés de cette liste.
const SECTIONS = [
  ["qui", "Qui je suis"],
  ["public", "À qui s'adressent ces conditions"],
  ["engagement", "Comment on s'engage"],
  ["mes-engagements", "Ce que je m'engage à faire"],
  ["vos-engagements", "Ce qui dépend de vous"],
  ["prix", "Le prix et le paiement"],
  ["arret-pause", "Arrêter ou mettre en pause"],
  ["rendez-vous", "Les rendez-vous"],
  ["non-inclus", "Ce qui n'est pas inclus"],
  ["livrables", "Les livrables et mes méthodes"],
  ["confidentialite", "La confidentialité"],
  ["ia", "Les outils d'IA"],
  ["donnees", "Les données personnelles"],
  ["fin", "La fin de l'accompagnement"],
  ["responsabilite", "Ma responsabilité"],
  ["desaccord", "En cas de désaccord"],
  ["version", "Version et mises à jour"],
] as const;

type SectionId = (typeof SECTIONS)[number][0];

function Page() {
  return (
    <DaLayout>
      <Header />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pb-24">
          <EnBref />
          <Toc />

          <Section id="qui">
            <P>
              Je m'appelle Laetitia Mattioli et je travaille seule, sous le nom commercial Nowadays
              Agency.
            </P>
            <Ul>
              <Li>Laetitia Mattioli EI (entrepreneure individuelle, micro-entreprise)</Li>
              <Li>Nom commercial : Nowadays Agency</Li>
              <Li>Adresse : 6 rue Saint-Jacques, 89300 Joigny, France</Li>
              <Li>SIREN : 832 189 070 · SIRET : 832 189 070 00028</Li>
              <Li>Immatriculée au Registre national des entreprises (RNE)</Li>
              <Li>
                TVA non applicable, art. 293 B du code général des impôts : le prix que je vous
                annonce est celui que vous payez.
              </Li>
              <Li>
                Contact : <Mail /> · 06 14 13 39 21
              </Li>
            </Ul>
            <P>
              Dans ce document, « je » désigne Laetitia Mattioli EI, et « vous », la personne ou la
              structure qui travaille avec moi.
            </P>
          </Section>

          <Section id="public">
            <P>
              Ces conditions s'appliquent à tout ce que je vends : Ta Binôme de Com', Ton Agency de
              Com', mes ateliers et mes formations. Quand une règle ne concerne qu'une seule offre,
              je le précise dans la partie concernée.
            </P>
            <P>
              Je travaille uniquement avec des professionnel·les : micro-entrepreneur·es et
              indépendant·es, associations, entreprises, établissements et collectivités. Je ne
              vends pas à des particuliers.
            </P>
            <P>
              Les rendez-vous d'accompagnement se font en visio. Un atelier ou une formation peut se
              tenir sur place : dans ce cas, le lieu, ainsi que les frais de déplacement et
              d'hébergement, sont écrits dans le devis.
            </P>
            <P>
              J'interviens par prestation d'ateliers et non en organisme de formation certifié
              Qualiopi. Si le financement est un enjeu pour vous, dites-le-moi : je regarde ce qui
              est possible et je reviens vers vous.
            </P>
          </Section>

          <Section id="engagement">
            <P>
              Avant de travailler ensemble, je vous envoie une proposition ou un devis qui décrit ce
              que je vais faire, le prix et le calendrier. Il reste valable 30 jours : pendant ce
              délai, le prix et le contenu sont garantis. Au-delà, je refais le point avec vous
              avant de m'engager.
            </P>
            <P>Vous vous engagez de deux façons, selon l'offre :</P>
            <Ul>
              <Li>
                Pour Ta Binôme de Com', en cochant la case « J'accepte les conditions générales de
                vente » au moment du paiement en ligne.
              </Li>
              <Li>Pour Ton Agency de Com', les ateliers et les formations, en signant le devis.</Li>
            </Ul>
            <P>
              Dans les deux cas, tout se fait à distance, même quand un atelier ou une formation se
              tient sur place. En vous engageant, vous acceptez ces conditions.
            </P>
            <P>
              Si votre proposition ou votre devis dit autre chose que ces conditions, c'est la
              proposition ou le devis qui compte.
            </P>
          </Section>

          <Section id="mes-engagements">
            <P>
              Je m'engage à mettre mon savoir-faire et le temps prévu au service de votre projet.
              C'est ce qu'on appelle une obligation de moyens : je m'engage sur ce que je fais,
              jamais sur les résultats commerciaux qui en découlent, parce qu'ils dépendent aussi de
              vous et de votre marché.
            </P>
            <P>
              Le détail de ce que je fais pour vous (livrables, nombre de sessions, calendrier) est
              écrit dans votre proposition ou votre devis.
            </P>
            <P>
              Les chiffres que je pose avec vous (projections, prévisionnels, repères) sont des
              hypothèses de travail pour vous aider à décider. Ce ne sont ni des objectifs que je
              garantis, ni des promesses.
            </P>
            <P>
              Si une mission demande une compétence que je n'ai pas (le graphisme, par exemple), je
              peux faire appel à un·e freelance de confiance. Je vous le dis avant, c'est inclus
              dans le prix annoncé, et je reste votre seule interlocutrice.
            </P>
            <P>
              Pour Ta Binôme de Com', je réponds à vos messages WhatsApp les jours ouvrés, sous 48
              heures.
            </P>
            <P>Je vous donne mon avis franchement, et c'est toujours vous qui décidez.</P>
          </Section>

          <Section id="vos-engagements">
            <P>Pour que le travail avance, quelle que soit l'offre, vous vous engagez à :</P>
            <Ul>
              <Li>
                me transmettre les informations, les documents et les accès dont j'ai besoin, dans
                les délais convenus ;
              </Li>
              <Li>relire et valider ce que je vous propose : rien ne sort sans votre accord.</Li>
            </Ul>
            <P>
              Pour Ta Binôme de Com', une bonne partie du travail se fait de votre côté, et c'est
              voulu : mon objectif, c'est que vous sachiez faire seule à la fin de l'accompagnement.
              Comptez au minimum une demi-journée par semaine (3 à 4 heures) en dehors de nos
              rendez-vous, un peu plus pendant les premiers mois. Ce que chacune porte se décide
              ensemble au démarrage.
            </P>
            <P>
              Si le temps vous manque pour appliquer, valider ou me transmettre ce qu'il faut,
              l'accompagnement avance moins vite, mais ce qui est prévu reste dû.
            </P>
          </Section>

          <Section id="prix">
            <P>
              Le prix est celui écrit dans votre proposition ou votre devis. Mes tarifs de référence
              sont indiqués sur mon site ou communiqués sur simple demande. La TVA ne s'applique pas
              : vous payez le montant annoncé.
            </P>
            <P>
              Pour Ta Binôme de Com', le paiement est mensuel, en ligne, et prélevé automatiquement
              chaque mois. Si une mensualité n'est pas payée, je vous préviens. Sans régularisation
              sous 15 jours, je peux suspendre l'accompagnement jusqu'au paiement.
            </P>
            <P>
              Pour Ton Agency de Com', je demande un acompte de 30 % à la signature du devis. Le
              reste suit l'échéancier écrit dans le devis.
            </P>
            <P>
              Pour les ateliers et les formations, je vous envoie une facture après la prestation.
            </P>
            <P>
              Ces factures se règlent par virement bancaire, sous 30 jours après leur date
              d'émission. Aucun escompte n'est accordé pour un paiement anticipé.
            </P>
            <P>
              En cas de retard de paiement, des pénalités s'appliquent dès le lendemain de
              l'échéance, sans relance préalable, au taux de trois fois le taux d'intérêt légal. S'y
              ajoute une indemnité forfaitaire de 40 € pour frais de recouvrement, par facture payée
              en retard.
            </P>
            <P>
              Le paiement reste dû quels que soient vos résultats commerciaux, puisque je m'engage
              sur les moyens et jamais sur les résultats. Je ne propose aucun remboursement lié aux
              résultats.
            </P>
          </Section>

          <Section id="arret-pause">
            <P>
              Pour Ta Binôme de Com', vous pouvez arrêter avant la fin du premier mois en me
              prévenant par écrit (un e-mail suffit). Le premier mois reste dû, vous ne payez rien
              après, et vous gardez ce qui vous a déjà été livré.
            </P>
            <P>
              Après le premier mois, vous pouvez arrêter quand vous voulez, toujours par écrit. Le
              mois commencé reste dû. Dès que je vous ai remis les livrables de la phase de
              construction nommés dans votre proposition, trois mensualités au minimum sont dues,
              même si vous arrêtez avant. Avant cette remise, seuls les mois commencés sont dus.
            </P>
            <P>
              Vous pouvez aussi mettre l'accompagnement en pause, sur simple demande écrite, pour
              deux mois au maximum sur toute sa durée. Pendant la pause, aucune mensualité n'est
              prélevée. On reprend là où on s'était arrêtées, et les mensualités restantes sont
              décalées d'autant.
            </P>
            <P>
              Si c'est moi qui ne peux plus assurer l'accompagnement (maladie, imprévu), je vous
              préviens au plus vite et on s'organise ensemble. Si je ne peux pas reprendre, vous ne
              payez plus rien à partir de ce moment, et vous gardez tout ce qui a été livré.
            </P>
            <P>
              Si vous annulez une mission Ton Agency de Com', l'acompte reste acquis et le travail
              déjà réalisé est dû.
            </P>
            <P>
              Si vous annulez un atelier ou une formation, l'annulation est sans frais à plus de 30
              jours de la date prévue. Entre 30 et 15 jours, 50 % du prix est dû, et la totalité à
              moins de 15 jours. Vous pouvez reporter une fois sans frais. Si c'est moi qui annule,
              je vous propose une nouvelle date, et si elle ne vous convient pas, je vous rembourse
              intégralement.
            </P>
          </Section>

          <Section id="rendez-vous">
            <P>
              Les dates de rendez-vous se fixent ensemble. Si vous avez un empêchement, prévenez-moi
              dès que possible : je suis souple, et on trouve une autre date. Si vous ne venez pas
              sans prévenir, la session est perdue.
            </P>
            <P>
              Pour Ta Binôme de Com', il arrive que l'accompagnement s'étire, de votre côté comme du
              mien. Une session qui n'a pas eu lieu peut donc être rattrapée après la fin prévue de
              l'accompagnement, dans la limite de 3 mois.
            </P>
          </Section>

          <Section id="non-inclus">
            <P>
              Ce que je fais pour vous est listé dans votre proposition ou votre devis : tout ce qui
              n'y figure pas n'est pas inclus. Selon l'offre, il peut s'agir par exemple de la
              création de vos contenus pour les réseaux sociaux, de la refonte complète de votre
              site, d'un logo, du montage vidéo, des budgets publicitaires ou des abonnements à des
              outils payants.
            </P>
            <P>
              Si vous souhaitez ajouter un travail en cours de route, je vous fais un devis séparé.
              Celui que vous avez signé ne change pas.
            </P>
          </Section>

          <Section id="livrables">
            <P>
              Ce que je crée pour vous dans le cadre de la mission (textes, plans, maquettes,
              documents) vous appartient dès qu'il est payé. Je vous cède les droits d'auteur sur
              ces créations, pour tous supports, dans le monde entier et pour toute la durée des
              droits : vous pouvez les utiliser, les modifier et les diffuser librement.
            </P>
            <P>
              Chaque livrable comprend deux séries de corrections. Au-delà, je vous fais un devis.
              Sans retour de votre part sous 15 jours, le livrable est considéré comme validé.
            </P>
            <P>
              Mes méthodes, mes trames, mes modèles et mes outils restent à moi. Vous pouvez les
              utiliser pour votre projet, mais pas les revendre ni les diffuser.
            </P>
            <P>
              Je ne cite votre nom, votre projet ou le travail réalisé ensemble (sur mon site, mes
              réseaux ou mon portfolio) qu'avec votre accord écrit.
            </P>
            <P>
              Les supports de mes ateliers et formations (présentations, exercices, fiches) restent
              à moi. Les participant·es peuvent les garder pour leur usage personnel ou interne,
              mais pas les diffuser, les vendre ni s'en servir pour former d'autres personnes.
            </P>
            <P>
              Les éléments qui ne sont pas de moi (polices, photos, illustrations, modèles d'outils
              comme Canva) restent soumis à leur propre licence. Je ne peux pas vous en céder les
              droits, et certains demandent que vous ayez votre propre accès.
            </P>
            <P>
              Une session ne s'enregistre qu'avec notre accord mutuel, et l'enregistrement reste
              pour votre usage.
            </P>
            <P>
              Une partie de ce que je produis passe par des outils d'IA. En France, ce qui est
              généré par une IA n'est pas toujours protégé par le droit d'auteur : la cession porte
              sur ce qui l'est.
            </P>
          </Section>

          <Section id="confidentialite">
            <P>
              Tout ce que vous me confiez (informations sur votre projet, vos chiffres, vos
              client·es, vos documents) reste confidentiel, pendant la mission et après, sans limite
              de durée. Je ne le partage qu'avec un·e freelance qui travaille sur votre mission, et
              seulement ce dont iel a besoin.
            </P>
          </Section>

          <Section id="ia">
            <P>
              J'utilise des outils d'intelligence artificielle générative dans mon travail, et je
              préfère vous le dire dès le départ. Le fond de votre stratégie, c'est moi qui le
              construis avec vous : l'IA m'aide à mettre en forme, jamais à décider à votre place.
              Rien ne sort sans votre validation.
            </P>
            <P>
              Je ne transmets pas aux outils d'IA vos données personnelles, celles de vos client·es,
              ni vos chiffres et documents confidentiels.
            </P>
            <P>
              Si vous préférez qu'aucune IA ne soit utilisée sur votre projet, dites-le-moi avant de
              vous engager : je recalcule honnêtement le délai et le prix.
            </P>
          </Section>

          <Section id="donnees">
            <P>
              Je suis responsable des données personnelles que vous me confiez : vos coordonnées,
              les informations sur votre projet et vos données de facturation. Je les utilise pour
              mener la mission, échanger avec vous et vous facturer, parce que c'est nécessaire à
              notre contrat et à mes obligations légales. Je ne les vends ni ne les cède à personne.
            </P>
            <P>
              Elles passent par les outils que j'utilise pour travailler : Stripe, Indy, Gmail,
              WhatsApp, Calendly, Zoom, MailerLite, Google Drive, Mission Flow et Claude. Certains
              peuvent stocker des données hors de l'Union européenne, dans le cadre prévu par le
              RGPD.
            </P>
            <P>
              Quand je travaille sur des données qui vous appartiennent (votre liste d'abonné·es,
              votre fichier de prospection, les coordonnées de vos client·es), j'agis pour votre
              compte et uniquement sur vos instructions. Je ne les utilise que pour votre mission,
              je les garde confidentielles et je les protège. En dehors des outils que vous utilisez
              déjà, je ne fais appel à un autre prestataire pour les traiter qu'avec votre accord.
              Je vous préviens sans tarder en cas de fuite ou de piratage, et je vous aide à
              répondre si une personne exerce ses droits. À la fin de la mission, je les supprime ou
              je vous les rends, selon votre choix.
            </P>
            <P>
              Je les conserve le temps de notre collaboration, puis 5 ans en archive, le temps de la
              prescription légale. Les factures sont gardées 10 ans, comme la loi l'impose. Si nous
              n'avons pas travaillé ensemble, je conserve vos coordonnées 3 ans après notre dernier
              échange.
            </P>
            <P>
              Vous pouvez à tout moment accéder à vos données, les corriger, les supprimer, vous
              opposer à leur utilisation, en limiter l'usage ou les récupérer, en m'écrivant à{" "}
              <Mail />. Vous pouvez aussi adresser une réclamation à la CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-framboise"
              >
                cnil.fr
              </a>
              ).
            </P>
          </Section>

          <Section id="fin">
            <P>
              Pour Ta Binôme de Com', la dernière session peut servir de bilan, ou à avancer sur ce
              qui compte le plus à ce moment-là : c'est vous qui choisissez. Le fil WhatsApp se
              ferme à la date de fin.
            </P>
            <P>
              Pour Ton Agency de Com', la mission se termine quand le dernier livrable prévu au
              devis est validé.
            </P>
            <P>
              Les documents livrés restent à vous. Vous gardez l'accès à votre espace de suivi en
              ligne pendant trois mois après la fin, le temps de tout récupérer.
            </P>
          </Section>

          <Section id="responsabilite">
            <P>
              Je m'engage sur les moyens : ma responsabilité ne peut être engagée que si une faute
              de ma part est prouvée.
            </P>
            <P>Je ne suis pas responsable :</P>
            <Ul>
              <Li>des décisions que vous prenez et de ce que vous publiez ;</Li>
              <Li>
                des contenus, informations et images que vous me fournissez, sur lesquels vous
                garantissez avoir les droits ;
              </Li>
              <Li>
                de ce qui dépend des plateformes (changement d'algorithme, compte suspendu,
                piratage, panne).
              </Li>
            </Ul>
            <P>
              Si ma responsabilité est engagée, elle est limitée au montant que vous m'avez payé
              pour la mission concernée. Cette limite ne s'applique pas en cas de faute grave ou
              intentionnelle de ma part, comme la loi l'impose.
            </P>
            <P>
              Si un événement indépendant de nos volontés empêche l'une ou l'autre d'honorer ses
              engagements (force majeure), on suspend sans pénalité et on cherche une solution
              ensemble.
            </P>
          </Section>

          <Section id="desaccord">
            <P>
              Si quelque chose ne va pas, parlons-en d'abord : écrivez-moi, et on cherche ensemble
              une solution à l'amiable pendant 30 jours. Si on n'y arrive pas, ces conditions sont
              soumises au droit français, et le litige est porté devant les tribunaux compétents
              selon les règles habituelles.
            </P>
          </Section>

          <Section id="version">
            <P>
              Version du 19 octobre 2026. Ces conditions s'appliquent aux engagements pris à partir
              de cette date. Si vous vous êtes engagée avant, ce sont les conditions de votre
              proposition qui s'appliquent jusqu'à la fin de votre accompagnement. Je peux faire
              évoluer ces conditions : celle qui s'applique à vous est la version en vigueur au
              moment où vous vous engagez.
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
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-ink">
          Conditions générales <em className="text-framboise">de vente</em>
        </h1>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink/70">
          Dernière mise à jour : {LAST_UPDATE}
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- EN BREF */

function EnBref() {
  return (
    <div className="mb-16">
      <p className="text-xs uppercase tracking-[0.24em] text-framboise">En bref</p>
      <P className="mt-6">
        Je m'engage sur les moyens, jamais sur les résultats : je mets mon savoir-faire et le temps
        prévu au service de votre projet. Je travaille uniquement avec des professionnel·les. Pour
        Ta Binôme de Com', vous pouvez arrêter avant la fin du premier mois en ne payant que ce
        mois-là, puis arrêter ou faire une pause quand vous voulez (trois mensualités restent dues
        une fois les premiers livrables remis). Ce que je crée pour vous vous appartient dès que
        c'est payé, et ce que vous me confiez reste confidentiel.
      </P>
    </div>
  );
}

/* ------------------------------------------------------------------ TOC */

function Toc() {
  return (
    // Pas de <nav> : la règle `.nowadays-da nav` du menu du haut (hauteur fixe,
    // flex) écraserait le sommaire.
    <div
      role="navigation"
      aria-label="Sommaire"
      className="mb-16 border-t border-b border-ink/15 py-8"
    >
      <p className="text-xs uppercase tracking-[0.24em] text-framboise">Sommaire</p>
      <ol className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 text-sm text-ink sm:grid-cols-2">
        {SECTIONS.map(([id, label], i) => (
          <li key={id}>
            <a href={`#${id}`} className="underline underline-offset-4 hover:text-framboise">
              <span className="text-framboise">{sectionNumber(i)} ·</span> {label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------- Building blocks */

function sectionNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function Section({ id, children }: { id: SectionId; children: React.ReactNode }) {
  const index = SECTIONS.findIndex(([sectionId]) => sectionId === id);
  const title = SECTIONS[index][1];
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-ink/15 py-14 first-of-type:border-t-0 first-of-type:pt-0 bg-rose-pale"
    >
      <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
        {sectionNumber(index)} · {title}
      </h2>
      <div className="mt-8 space-y-5">{children}</div>
    </section>
  );
}

function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm text-ink leading-relaxed ${className}`}>{children}</p>;
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5 text-sm text-ink leading-relaxed">{children}</ul>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

function Mail() {
  return (
    <a
      href="mailto:laetitia@nowadaysagency.com"
      className="underline underline-offset-4 hover:text-framboise"
    >
      laetitia@nowadaysagency.com
    </a>
  );
}
