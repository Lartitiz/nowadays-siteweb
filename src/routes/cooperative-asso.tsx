import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { PageHero } from "@/components/da/PageHero";
import { VichyBand } from "@/components/da/VichyBand";
import { Section } from "@/components/da/Section";
import { Pill } from "@/components/da/Pill";
import { PostIt } from "@/components/da/PostIt";
import { CardPointillee } from "@/components/da/CardPointillee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import l214Logo from "@/assets/coop-logos/l214.png.asset.json";
import cooperativeOasisLogo from "@/assets/coop-logos/cooperative-oasis.png.asset.json";
import ensadPslLogo from "@/assets/coop-logos/ensad-psl.jpg.asset.json";
import emmausDefiLogo from "@/assets/coop-logos/emmaus-defi.png.asset.json";
import seaShepherdLogo from "@/assets/coop-logos/sea-shepherd.png.asset.json";
import imgEnsad from "@/assets/etudes-pro/ensad.jpg.asset.json";
import imgSeaShepherd from "@/assets/etudes-pro/sea-shepherd.jpg.asset.json";
import imgDecathlon from "@/assets/etudes-pro/decathlon-quechua.jpg.asset.json";
import imgEmmaus from "@/assets/etudes-pro/emmaus-defi.jpg.asset.json";
import imgClipIt from "@/assets/etudes-pro/clip-it.jpg.asset.json";
import imgL214 from "@/assets/etudes-pro/l214.jpg.asset.json";
import imgCoopOasis from "@/assets/etudes-pro/cooperative-oasis.jpg.asset.json";
import imgOkahina from "@/assets/etudes-pro/okahina-wave.jpg.asset.json";
import imgStudyCo from "@/assets/etudes-pro/study-co.webp.asset.json";
import imgWeSlow from "@/assets/etudes/we-slow.jpg.asset.json";
import imgAtelierLunettes from "@/assets/etudes-pro/atelier-des-lunettes.webp.asset.json";
import imgLaProchaineAire from "@/assets/etudes-pro/la-prochaine-aire.jpg.asset.json";
import { absoluteUrl } from "@/lib/site";
import { imageSize } from "@/lib/image-sizes";

const CALENDLY_URL = "https://calendly.com/laetitia-mattioli/appel-decouverte-atelier";

export const Route = createFileRoute("/cooperative-asso")({
  head: () => ({
    meta: [
      { title: "Votre agency de com | Coopératives & assos | Nowadays" },
      {
        name: "description",
        content:
          "Une agence de communication pour coopératives, associations et structures engagées. Budget global de mission, échelonnable, à partir de 1 500 €.",
      },
      {
        property: "og:title",
        content: "Votre agency de com | Coopératives & assos | Nowadays",
      },
      {
        property: "og:description",
        content:
          "Déléguez votre com' à une agence qui partage vos valeurs. Réactive, autonome, efficace.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/cooperative-asso") }],
  }),
  component: Page,
});

/* ------------------------------ helpers ------------------------------ */

function CtaButton({ children = "Réserver un appel découverte" }: { children?: React.ReactNode }) {
  return (
    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
      {children}
    </a>
  );
}

// Astérisque-confetti, décoratif : même dessin que le composant partagé
// `Confettis`/`ConfettisBord`, mais avec une couleur et une position propres à
// chaque section de cette page (la maquette les place au cas par cas).
function Confetti({ couleur, style }: { couleur: string; style: CSSProperties }) {
  return (
    <svg className="conf" style={style} viewBox="0 0 100 100" aria-hidden="true">
      <g fill={couleur}>
        <rect x="8" y="41" width="84" height="18" rx="9" />
        <rect x="8" y="41" width="84" height="18" rx="9" transform="rotate(60 50 50)" />
        <rect x="8" y="41" width="84" height="18" rx="9" transform="rotate(120 50 50)" />
      </g>
    </svg>
  );
}

/* ============================== sections ============================== */

// Hero déjà en ligne : conservé tel quel, à l'identique.
function Hero() {
  return (
    <PageHero
      vichy="prune"
      pill="Ton agency de com' · mission"
      pillTon="jaune"
      titre={
        <>
          Déléguez <em>votre com'</em> et concentrez-vous sur{" "}
          <span className="surligne">l'essentiel</span>.
        </>
      }
      chapo={
        <>
          Une communication pro, réactive et stylée pour les structures qui ont mieux à faire que de
          galérer sur Instagram. On prend en charge votre stratégie, vos contenus, vos canaux.
        </>
      }
      mention="À partir de 1 500 € : budget global de mission, échelonnable."
      photo={{
        src: "/images/home/laetitia-bureau.jpg",
        alt: "Laetitia Mattioli, fondatrice de Nowadays Agency, au travail",
      }}
    />
  );
}

function ClientsBand() {
  const clients = [
    { name: "L214", src: l214Logo.url },
    { name: "Emmaüs Défi", src: emmausDefiLogo.url },
    { name: "Sea Shepherd", src: seaShepherdLogo.url },
    { name: "École des Arts Décoratifs PSL", src: ensadPslLogo.url },
    { name: "Coopérative Oasis", src: cooperativeOasisLogo.url },
  ];

  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-center text-xs font-bold uppercase tracking-[0.08em] text-gris-chaud">
          Ils et elles nous ont fait confiance
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((c) => (
            <div key={c.name} className="flex h-12 items-center justify-center">
              <img
                src={c.src}
                {...imageSize(c.src)}
                alt={c.name}
                className="max-h-12 w-auto object-contain opacity-70"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DouleurSection() {
  return (
    <Section>
      <div className="bn-duo2">
        <div>
          <h2>Vous portez un projet qui a du sens. Mais la com', ça coince.</h2>
          <p className="lead">Coopérative, association, PME engagée : on connaît la musique.</p>
        </div>
        <div className="bn-postits bn-relative">
          <Confetti couleur="#FFE561" style={{ right: -6, top: -34, width: 56, height: 56 }} />
          <Confetti couleur="#FF7A33" style={{ left: -18, bottom: -26, width: 40, height: 40 }} />
          <PostIt titre="DANS L'ÉQUIPE" couleur="rose-doux" className="bn-postit-1">
            Tout le monde est débordé. La com' passe toujours après.
          </PostIt>
          <PostIt titre="SUR LES RÉSEAUX" couleur="jaune" className="bn-postit-2">
            Vous postez quand vous pouvez, sans vraie stratégie.
          </PostIt>
          <PostIt titre="CÔTÉ PRESTATAIRES" couleur="rose" className="bn-postit-3">
            Vous avez besoin de quelqu'un qui fasse, pas juste qui conseille.
          </PostIt>
          <PostIt titre="ET SURTOUT" couleur="rose-doux" className="bn-postit-4">
            Personne n'a le temps de relire quinze versions.
          </PostIt>
        </div>
      </div>
    </Section>
  );
}

function PhraseVichySection() {
  return (
    <div className="vichy bn-vichy-phrase">
      <Confetti couleur="#FFE561" style={{ left: "7%", top: 44, width: 64, height: 64 }} />
      <Confetti couleur="#FF7A33" style={{ right: "6%", bottom: 40, width: 48, height: 48 }} />
      <div className="bn-carte">
        <p className="bn-avant">Vous n'avez pas besoin d'un prestataire de plus à piloter.</p>
        <p className="bn-phrase">
          Vous avez besoin de quelqu'un qui prend votre com' en main,{" "}
          <span className="surligne">en entier</span>.
          <br />
          <em>On fait pour vous. Vous respirez.</em>
        </p>
      </div>
    </div>
  );
}

function ComTourneSection() {
  const lignes = [
    <>
      <b>Vos réseaux qui vivent</b> : posts, visuels, reels : créés, rédigés, publiés.
    </>,
    <>
      <b>Votre site qui donne envie</b>, et qui convertit.
    </>,
    <>
      <b>Vos newsletters qui partent</b>, vos emails automatisés.
    </>,
    <>
      <b>Vos événements remplis</b> : lancement, festival, conférence.
    </>,
    <>
      <b>Votre presse et vos partenariats, activés.</b>
    </>,
  ];
  return (
    <Section>
      <h2>Votre com' tourne. Sans vous épuiser.</h2>
      <p className="lead">Voilà ce qui existe quand on travaille ensemble.</p>
      <div className="bn-repars">
        {lignes.map((ligne, i) => (
          <div className="bn-rrow" key={i}>
            <span className="bn-ck">✓</span>
            <span>{ligne}</span>
          </div>
        ))}
        <div className="bn-rrow bn-rrow--toi">
          <span className="bn-ck">✓</span>
          <span>
            <b>Et vous, concentré·es sur votre mission.</b>
          </span>
        </div>
      </div>
      <p className="bn-chute">
        Rien ne sort sans votre accord. Mais rien n'attend après vous{" "}
        <span className="surligne">non plus</span>.
      </p>
    </Section>
  );
}

function EtapesSection() {
  const etapes = [
    {
      titre: "On se parle.",
      texte:
        "Un appel découverte de 30 minutes : votre projet, vos objectifs, vos contraintes. Et on vous dit franchement si on peut vous aider.",
    },
    {
      titre: "On vous propose un plan sur-mesure.",
      texte:
        "Pas de package générique : un devis adapté à vos besoins, un planning clair, un budget global défini avant de commencer.",
    },
    {
      titre: "On avance.",
      texte: "On produit, vous validez les grandes lignes, on met en ligne. À la fin, c'est fait, pas « à faire ».",
    },
  ];
  return (
    <Section fond="rose">
      <Pill ton="framboise">Comment ça se passe</Pill>
      <h2 style={{ marginTop: 18 }}>Trois étapes. Zéro prise de tête.</h2>
      <div className="bn-etapes">
        {etapes.map((e, i) => (
          <div className="bn-et" key={e.titre}>
            <div className="bn-et-num">{i + 1}</div>
            <b>{e.titre}</b>
            <p>{e.texte}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function PerimetreSection() {
  const lignes = [
    <>
      <b>Stratégie &amp; cadrage</b> : état des lieux, positionnement, plan d'action sur 3, 6 ou 12
      mois.
    </>,
    <>
      <b>Réseaux sociaux &amp; influence</b> : contenus, calendrier, animation Instagram, LinkedIn,
      Pinterest, campagnes.
    </>,
    <>
      <b>Site web &amp; référencement Google</b> : création ou refonte, pages qui convertissent.
    </>,
    <>
      <b>Newsletters &amp; emails</b> : séquences de bienvenue, campagnes, automatisation.
    </>,
    <>
      <b>Presse &amp; événementiel</b> : relations presse, partenariats, lancement, festival,
      conférence.
    </>,
  ];
  return (
    <Section>
      <h2>Selon vos besoins, on intervient sur :</h2>
      <div className="bn-repars" style={{ maxWidth: "52em" }}>
        {lignes.map((ligne, i) => (
          <div className="bn-rrow" key={i}>
            <span className="bn-ck">✓</span>
            <span>{ligne}</span>
          </div>
        ))}
      </div>
      <p className="bn-methode" style={{ maxWidth: "44em" }}>
        Chaque mission a son devis : un budget global, échelonnable, défini avant de commencer. Site
        web et identité visuelle font l'objet de devis séparés.
      </p>
    </Section>
  );
}

function ManifesteSection() {
  return (
    <section className="section bn-manif">
      <div className="wrap">
        <Pill ton="jaune">Notre conviction</Pill>
        <h2 style={{ marginTop: 18 }}>Une communication engagée comme outil d'émancipation.</h2>
        <div className="bn-manif-corps">
          <div>
            <p>
              Une association qu'on entend, c'est une cause qui avance. Rendre visible, ce n'est pas
              décorer : c'est donner à un projet les moyens d'exister.
            </p>
            <p>Et on choisit de le faire dans le beau et dans la joie.</p>
            <p className="bn-manif-fin">
              Parce que le beau n'est pas futile : c'est un levier de changement.
            </p>
          </div>
          <div>
            <svg
              className="bn-manif-mega"
              viewBox="0 0 340 260"
              aria-hidden="true"
              style={{ maxWidth: 400 }}
            >
              <rect
                x="150"
                y="170"
                width="34"
                height="70"
                rx="14"
                fill="#FFE561"
                transform="rotate(18 167 205)"
              />
              <polygon points="40,110 210,70 210,170 40,145" fill="#FB3D80" />
              <ellipse cx="215" cy="120" rx="26" ry="52" fill="#FF7A33" />
              <rect
                x="258"
                y="52"
                width="64"
                height="16"
                rx="8"
                fill="#FFE561"
                transform="rotate(-18 290 60)"
              />
              <rect x="266" y="110" width="60" height="16" rx="8" fill="#FFE561" />
              <rect
                x="258"
                y="168"
                width="56"
                height="16"
                rx="8"
                fill="#FFE561"
                transform="rotate(16 286 176)"
              />
            </svg>
            <div className="bn-sticker" style={{ marginTop: 26, transform: "rotate(-2deg)" }}>
              « 100 % éthique », ça n'existe pas.
              <br />
              Plus éthique chaque année, oui.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PasGrosseAgenceSection() {
  return (
    <Section fond="rose">
      <h2>Pas une grosse agence. Et c'est votre avantage.</h2>
      <div className="bn-idcards">
        <div className="bn-c">
          <div className="bn-num">01</div>
          <p>
            <b>Des prix pensés pour vous.</b> Un budget global de 1 500 à 20 000 € selon l'ampleur,
            échelonnable. Vous payez du travail concret, pas un open space.
          </p>
        </div>
        <div className="bn-c">
          <div className="bn-num">02</div>
          <p>
            <b>Réactive et autonome.</b> On comprend vite, on livre propre, on respecte les délais.
            Votre temps est précieux : on ne le gaspille pas.
          </p>
        </div>
        <div className="bn-c">
          <div className="bn-num">03</div>
          <p>
            <b>Une com' qui donne envie.</b> Être éthique, ce n'est pas être ennuyeux : exit les
            visuels tristes en vert sapin, place aux récits désirables.
          </p>
        </div>
      </div>
      <p className="bn-bio">
        Derrière l'agency : <b>Laetitia Mattioli</b>. 10 ans de marketing digital, +150 projets
        accompagnés, des cours à l'École des arts décoratifs de Paris, des interventions à l'ENS et
        aux Mines. Dans la presse : L'ADN, e-marketing.fr, Maddyness, Le Bonbon.
      </p>
    </Section>
  );
}

const ETUDES_LARGES = [
  {
    image: imgL214.url,
    alt: "L214",
    nom: "L214",
    q: "Camion immersif + 50 micro-influenceur·ses contre l'élevage intensif",
    a: <><b>500 000 vues</b> et plus de 10 000 signatures à la pétition.</>,
  },
  {
    image: imgEnsad.url,
    alt: "École des Arts Décoratifs",
    nom: "École des Arts Décoratifs",
    q: "Réseaux sociaux, emailing ciblé et micro-influence pour une exposition",
    a: <><b>700 visiteurs en une semaine</b>, 5 articles de presse.</>,
  },
  {
    image: imgOkahina.url,
    alt: "Okahina Wave",
    nom: "Okahina Wave",
    q: "Twitter, LinkedIn, blog et influence surf",
    a: <><b>1 500 personnes atteintes par semaine</b>, 50 000 fans via 10 influenceurs.</>,
  },
];

const ETUDES_COMPACTES = [
  { image: imgSeaShepherd.url, alt: "Sea Shepherd", nom: "Sea Shepherd × Racines de Demain", q: "Campagne #PlutôtQue, mobilisation des dons" },
  { image: imgDecathlon.url, alt: "Decathlon × Quechua", nom: "Decathlon × Quechua", q: "Campagne pour leur révolution circulaire" },
  { image: imgEmmaus.url, alt: "Emmaüs Défi", nom: "Emmaüs Défi", q: "Atelier de personal branding des équipes" },
  { image: imgAtelierLunettes.url, alt: "L'Atelier des Lunettes", nom: "L'Atelier des Lunettes", q: "Réseaux renforcés, site refondu, manifeste" },
  { image: imgClipIt.url, alt: "Clip It", nom: "Clip It", q: "Jeu créatif upcyclé : SEO et Instagram" },
  { image: imgCoopOasis.url, alt: "Coopérative Oasis", nom: "Coopérative Oasis", q: "Identité, storytelling et community management pour leur festival" },
  { image: imgStudyCo.url, alt: "Study & Co", nom: "Study & Co", q: "Onboarding digitalisé : +20 % de conversion" },
  { image: imgWeSlow.url, alt: "We Slow", nom: "We Slow", q: "Slow tourisme : visibilité et contenus" },
  { image: imgLaProchaineAire.url, alt: "La Prochaine Aire", nom: "La Prochaine Aire", q: "Tiers-lieu dans l'Yonne, co-fondé par Nowadays" },
];

function EtudesDeCasSection() {
  return (
    <Section>
      <Pill>Ce qu'on a mis en place, et ce que ça a donné</Pill>
      <h2 style={{ marginTop: 18 }}>Celles et ceux qui font bouger les lignes avec nous.</h2>
      <p className="lead">Associations, ONG, coopératives, écoles, entreprises engagées.</p>

      <div className="bn-cas1">
        {ETUDES_LARGES.map((e) => (
          <div className="bn-c" key={e.nom}>
            <div className="bn-im">
              <img src={e.image} {...imageSize(e.image)} alt={e.alt} loading="lazy" />
            </div>
            <div className="bn-tx">
              <div className="bn-n">{e.nom}</div>
              <div className="bn-q">{e.q}</div>
              <div className="bn-a">{e.a}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bn-cas2">
        {ETUDES_COMPACTES.map((e) => (
          <div className="bn-c" key={e.nom}>
            <div className="bn-im">
              <img src={e.image} {...imageSize(e.image)} alt={e.alt} loading="lazy" />
            </div>
            <div>
              <div className="bn-n">{e.nom}</div>
              <div className="bn-q">{e.q}</div>
            </div>
          </div>
        ))}
      </div>

      <p className="bn-caslien">
        Envie du détail ? <Link to="/etudes-de-cas-pro">Les études de cas complètes sont là.</Link>
      </p>
    </Section>
  );
}

function AutoQualifSection() {
  return (
    <Section fond="rose">
      <h2>Avant qu'on se parle, soyons honnêtes.</h2>
      <div className="audience-grid">
        <CardPointillee titre="C'est pour vous si…" ton="rose">
          <ul>
            <li>Vous êtes une structure engagée : coopérative, association, ONG, PME, tiers-lieu, festival.</li>
            <li>Votre mission engagée est dans l'ADN du projet, pas dans un slide.</li>
            <li>Vous voulez du concret et des livrables, pas des recommandations en l'air.</li>
            <li>Vous voulez déléguer, en gardant la validation des grandes lignes.</li>
          </ul>
        </CardPointillee>
        <CardPointillee titre="Ce n'est pas le bon moment si…" ton="gris">
          <ul>
            <li>Chaque contenu doit passer par un comité : on avancera trop lentement pour vous être utiles.</li>
            <li>Vous cherchez un coup d'éclat viral pour le mois prochain.</li>
            <li>La communication doit verdir un projet qui ne l'est pas : c'est non, et c'est assumé.</li>
            <li>Votre budget est sous 1 500 € : on vous orientera vers d'autres formats.</li>
          </ul>
        </CardPointillee>
      </div>
    </Section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Combien ça coûte ?",
      a: "Chaque mission a son budget global, à partir de 1 500 € et jusqu'à 20 000 € selon l'ampleur, échelonnable, défini avant de commencer. Pas de compteur horaire, pas de surprise. Site web et identité visuelle font l'objet de devis séparés.",
    },
    {
      q: "Qui fait le travail, concrètement ?",
      a: "Laetitia, fondatrice de l'agence, avec une interlocutrice unique du début à la fin. Selon les missions, une graphiste intervient : elle est comprise dans le budget global, vous n'avez rien à gérer.",
    },
    {
      q: "Combien de temps dure une mission ?",
      a: "Ça dépend de la vôtre : une campagne se joue en quelques semaines, une mission au long cours sur plusieurs mois. Le planning est posé dans le devis, avant de commencer.",
    },
    {
      q: "Comment on garde la main sur ce qui sort ?",
      a: "Vous validez les grandes lignes : la stratégie, les messages, les moments clés. Rien ne sort sans votre accord, et vous n'avez pas quinze allers-retours à faire non plus : c'est exactement ce qu'on vous enlève.",
    },
    {
      q: "On est une association : des aides existent ?",
      a: "Oui. Nowadays est référencée auprès du Dispositif local d'accompagnement (DLA) en Bourgogne-Franche-Comté. Si votre structure en bénéficie, la mission peut s'inscrire dans ce cadre : parlez-en à votre chargé·e d'accompagnement, et à nous.",
    },
    {
      q: "Et si on préfère apprendre à faire nous-mêmes ?",
      a: "On forme aussi les équipes : réseaux sociaux, référencement, prospection éthique. Et pour les solopreneur·es, il existe un accompagnement à quatre mains : Ta Binôme de Com'.",
    },
    {
      q: "Vous travaillez avec qui, exactement ?",
      a: "Uniquement avec des projets dont la mission engagée est dans l'ADN. C'est notre critère d'entrée, et on le tient, même quand le budget est beau.",
    },
    {
      q: "« Plus éthique », ça veut dire quoi ?",
      a: "On ne se dira jamais « agence 100 % éthique » : ça n'existe pas. On est une agence de communication plus éthique : un peu plus juste chaque année, et on le dit honnêtement. Notre démarche est publiée, limites comprises.",
    },
  ];
  return (
    <Section>
      <h2 className="text-center">Vous vous demandez peut-être…</h2>
      <Accordion type="single" collapsible className="mt-12 space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-carte border border-rose-doux bg-white px-6"
          >
            <AccordionTrigger className="py-6 text-left font-titre text-lg text-encre hover:no-underline md:text-xl">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm text-encre">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

function CtaFinalAgency() {
  return (
    <section className="final-cta centre">
      <div className="wrap">
        <h2>Prêt·es à avancer ?</h2>
        <p>
          Réservez un appel découverte de 30 minutes. On regarde ensemble ce qui manque à votre
          com', et on vous dit franchement si on peut vous aider.
        </p>
        <div className="actions">
          <CtaButton>Réserver un appel découverte</CtaButton>
        </div>
        <span className="cta-note">30 minutes, gratuites, sans engagement.</span>
      </div>
    </section>
  );
}

/* ================================ page ================================ */

function Page() {
  return (
    <DaLayout className="page-agency">
      <Hero />
      <ClientsBand />
      <DouleurSection />
      <PhraseVichySection />
      <ComTourneSection />
      <EtapesSection />
      <PerimetreSection />
      <ManifesteSection />
      <PasGrosseAgenceSection />
      <EtudesDeCasSection />
      <AutoQualifSection />
      <FaqSection />
      <VichyBand />
      <CtaFinalAgency />
    </DaLayout>
  );
}
