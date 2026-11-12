import { useRef, type MouseEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { PageHero } from "@/components/da/PageHero";
import { Section } from "@/components/da/Section";
import { CardPointillee } from "@/components/da/CardPointillee";
import { VichyBand } from "@/components/da/VichyBand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import pageCss from "../styles/ta-binome-saison-2.css?url";

/*
 * Page cachée « Ta Binôme, saison 2 », pour les clientes qui finissent la
 * saison 1. Aucun lien vers elle sur le site, noindex, absente du sitemap
 * (src/lib/sitemap.ts liste ses pages à la main). Le texte reprend mot pour
 * mot la maquette validée : docs/maquettes/ta-binome-saison-2-maquette.html.
 */

const TITRE = "Ta Binôme, saison 2 · Nowadays Agency";
const DESCRIPTION = "Ta com' est lancée. En saison 2, on continue à deux.";
const WHATSAPP = "https://wa.me/33614133921?text=Je%20veux%20ma%20saison%202";
const LIBELLE_CTA = "Je veux ma saison 2";
const NOTE_CTA =
  "Tu me le dis, et je t'envoie une proposition de plan.";

export const Route = createFileRoute("/ta-binome-saison-2")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESCRIPTION },
    ],
    links: [{ rel: "stylesheet", href: pageCss }],
  }),
  component: Page,
});

/* ------------------------------ helpers ------------------------------ */

function CtaSaison2({ onClick }: { onClick?: (e: MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noopener" onClick={onClick}>
      {LIBELLE_CTA}
    </a>
  );
}

/* ============================== sections ============================== */

function Hero() {
  return (
    <PageHero
      vichy="clair"
      titre={
        <>
          Ta Binôme, <em>saison 2</em>
        </>
      }
      chapo="Ta com' est lancée. En saison 2, on continue à deux : on pousse plus loin ce qui marche déjà, et on ouvre ce qui attendait son tour."
      photo={{
        src: "/images/home/laetitia-fauteuil.jpg",
        alt: "Laetitia, ta binôme",
        position: "60% 40%",
      }}
      cta={LIBELLE_CTA}
      ctaHref={WHATSAPP}
      note={NOTE_CTA}
    />
  );
}

function LaOuTuEnEs() {
  return (
    <Section wrapClassName="s2-etroit">
      <h2>Là où tu en es</h2>
      <p>
        En saison 1, on n'a pas seulement posé tes bases : on est vraiment passées à l'action ensemble.
        {'\u00a0'}
        <br />
        <br />
        Aujourd'hui, ta com' tient debout, elle a ses outils, son plan, et tu sais décider seule de ce qui compte.
        {'\u00a0'}
        <br />
        <br />
        Normalement, tu es capable de prendre ton envol toute seule, mais si tu en as besoin, je reste là.
      </p>
    </Section>
  );
}

function EcranPhrase() {
  return (
    <section className="s2-phrase">
      <div className="wrap s2-etroit">
        <p>
          Parce que ce que je vois avec mes binômes, c'est qu'au moment où tout commence enfin à
          tourner, personne n'a très envie de se retrouver seule.
        </p>
      </div>
    </section>
  );
}

function CeQuOnFait() {
  return (
    <Section wrapClassName="s2-etroit">
      <h2>
        Ce qu'on fait dans la <em>saison 2</em>
      </h2>
      <p>
        On continue sur la lancée de la saison 1, et on va plus loin sur la visibilité qu'on a
        commencé à construire.
        {'\u00a0'}
        <br />
        <br />
        On reprend ce qui a démarré, et on ouvre ce qu'on avait laissé de côté faute de temps, comme
        lancer ton podcast, contacter la presse ou préparer ta prochaine campagne.
      </p>
      <p>
        Je reste ta binôme.
        {'\u00a0'}
        <br />
        <br />
        Tu n'avances pas seule, et tu avances plus vite, parce qu'à chaque séance on fait un vrai{' '}
        <span className="surligne">bond</span>, et que c'est plus facile de tenir le rythme quand
        quelqu'un t'attend au tournant (gentiment, hein).
      </p>
    </Section>
  );
}

function Trimestre() {
  return (
    <Section fond="rose" wrapClassName="s2-etroit">
      <h2 className="text-center">Sur chaque cycle de trois mois, concrètement</h2>
      <div className="s2-trimestre">
        <h3 className="s2-h3">Trois séances d'une heure en visio</h3>
        <div className="s2-mois" aria-hidden="true">
          <div>
            <span className="s2-nom">MOIS 1</span>
            <span className="s2-seance">1 h</span>
            <span className="s2-seance">1 h</span>
          </div>
          <div>
            <span className="s2-nom">MOIS 2</span>
            <span className="s2-vide">la tête ailleurs</span>
          </div>
          <div>
            <span className="s2-nom">MOIS 3</span>
            <span className="s2-seance s2-b">1 h</span>
          </div>
        </div>
        <p>
          Tu les places quand tu veux dans les trois mois : deux le même mois si tu lances quelque
          chose, aucune le mois où tu as la tête ailleurs. À chaque séance, on regarde ce qui a
          marché, ce qui coince, et on décide de la suite.
        </p>
      </div>
      <div className="s2-cartes">
        <div className="s2-carte">
          <h3 className="s2-h3">Entre deux séances, je travaille sur ton projet.</h3>
          <p>
            Je relis ta page avant que tu la publies, je règle ce petit truc dans ta newsletter qui
            te bloque. À la fin de la séance, tu me dis ce qui t'aiderait, et je te dis ce qui tient
            d'ici la prochaine. Un site, des visuels ou une vidéo, ça se fait à part, sur devis.
          </p>
        </div>
        <div className="s2-carte s2-c2">
          <h3 className="s2-h3">WhatsApp quand tu en as besoin</h3>
          <p>Les jours ouvrés, avec une réponse sous 48 h.</p>
        </div>
      </div>
    </Section>
  );
}

function CafeDeCom() {
  return (
    <Section wrapClassName="s2-etroit">
      <span className="s2-pilule">EN CONSTRUCTION</span>
      <h2>
        Et aussi : le <em>Café de Com'</em>
      </h2>
      <p>
        Pour l'instant, c'est en construction, mais j'aimerais vraiment réunir les anciennes
        clientes de la binôme tous les trois mois autour d'un Café de Com', que tu sois en saison 2
        ou pas. On se rencontrerait, chacune partagerait ses astuces et ce qu'elle a testé, et on se
        créerait un petit réseau entre personnes qui vivent la même chose. Je l'avais déjà fait avec
        mes clientes.
      </p>
    </Section>
  );
}

function CombienDeTemps() {
  return (
    <Section fond="rose" wrapClassName="s2-etroit">
      <h2>Combien de temps</h2>
      <p>
        Ça marche par cycles de trois mois : à la fin de chacun, tu renouvelles si tu veux, ou tu
        t'arrêtes là.
      </p>

      <div
        className="s2-frise"
        role="img"
        aria-label="Saison 1 : six mois. Saison 2 : un premier cycle de trois mois, puis un second. Tu peux t'arrêter à la fin de chaque étape. Au bout : un an ensemble."
      >
        <div className="s2-barre s2-s1" />
        <div className="s2-etape">
          <div>
            <div className="s2-lib">Saison 1</div>
            <div className="s2-duree">6 mois</div>
          </div>
          <span className="s2-sortie">tu t'arrêtes là</span>
        </div>
        <div className="s2-gap" />
        <div className="s2-gap" />
        <div className="s2-barre s2-c1" />
        <div className="s2-etape">
          <div>
            <div className="s2-lib">Saison 2, cycle 1</div>
            <div className="s2-duree">3 mois</div>
          </div>
          <span className="s2-sortie">tu t'arrêtes là</span>
        </div>
        <div className="s2-gap" />
        <div className="s2-gap" />
        <div className="s2-barre s2-c2" />
        <div className="s2-etape">
          <div>
            <div className="s2-lib">Saison 2, cycle 2</div>
            <div className="s2-duree">3 mois</div>
          </div>
        </div>
        <div className="s2-fin">
          <span className="s2-point" />
          <span>un an</span>
        </div>
      </div>

      <p>
        Je l'ai pensée pour deux cycles, soit six mois. Avec la saison 1, ça nous fait un an de
        travail ensemble, et au bout d'un an, l'idée, c'est que tu n'aies plus besoin de moi, sauf
        si un nouveau projet arrive.
      </p>
      <div className="s2-avec-sticker">
        <p>
          Oui, je te vends une offre en t'expliquant que mon but, c'est que tu n'en aies plus
          besoin.
        </p>
        <span className="s2-sticker">Je sais, côté business, on a vu plus malin.</span>
      </div>
      <p style={{ marginTop: 24 }}>
        Avant de commencer, je t'envoie une proposition personnalisée pour tes six prochains mois, à
        partir de là où tu en es.
      </p>
    </Section>
  );
}

function Prix() {
  return (
    <Section wrapClassName="s2-etroit">
      <h2 className="s2-titre-centre">Le prix</h2>
      <div className="s2-prix">
        <div className="s2-montant">225 € HT par mois</div>
        <p className="s2-detail">
          270 € TTC par mois, par cycles de trois mois (675 € HT le cycle, soit 810 € TTC)
        </p>
        <CtaSaison2 />
      </div>
    </Section>
  );
}

function PourToi() {
  return (
    <Section fond="rose" wrapClassName="s2-large">
      <div className="audience-grid">
        <CardPointillee titre="C'est pour toi si…" ton="rose">
          <p>
            tu as envie d'aller plus loin maintenant que ta com' est lancée, si tu as un chantier en
            tête que tu n'oses pas ouvrir seule, ou si tu sens que tu avances mieux quand on avance
            à deux.
          </p>
        </CardPointillee>
        <CardPointillee titre="Ce n'est pas le moment si…" ton="rose">
          <p>
            tu as envie de souffler et de voler de tes propres ailes. Et c'est très bien comme ça :
            c'est pour ça qu'on a fait la saison 1. Si ce qu'il te faut, c'est un site, une identité
            ou une campagne faits pour toi, regarde plutôt du côté de{" "}
            <Link to="/cooperative-asso">Ton Agency de Com'</Link>.
          </p>
        </CardPointillee>
      </div>
    </Section>
  );
}

const FAQS = [
  {
    q: "Je peux t'envoyer une petite question de temps en temps sans prendre la saison 2 ?",
    a: "Oui. Après la saison 1, tu peux toujours m'écrire de temps en temps sur WhatsApp, tant que ça reste léger. En saison 2, tu m'écris quand tu en as besoin, et on avance vraiment ensemble.",
  },
  {
    q: "Ton travail entre deux séances, ça représente combien de temps ?",
    a: "Trois heures de mon côté sur chaque cycle, en plus des séances, soit une heure par mois en moyenne. Tu me proposes le sujet à la fin d'une séance, et je te dis ce qui tient dans ce temps-là.",
  },
  {
    q: "Qu'est-ce qui n'est pas compris ?",
    a: "La production lourde : un site, des visuels, une vidéo, une série d'e-mails entière. Si tu en as besoin, je te fais un devis à part.",
  },
  {
    q: "Je paie comment ?",
    a: "Chaque mois, 225 € HT (270 € TTC). Un cycle, c'est trois mensualités.",
  },
  {
    q: "Je dois commencer juste après la saison 1 ?",
    a: "Quand tu veux : juste après la saison 1, ou plus tard, quand tu sens que tu en as besoin.",
  },
  {
    q: "Et si je rate une séance ?",
    a: "Elle n'est pas perdue : tu la places quand tu veux avant la fin du cycle. Elle ne se reporte pas sur le cycle suivant.",
  },
  {
    q: "Comment j'arrête ?",
    a: "À la fin de chaque cycle, je te demande si tu continues. Si tu ne renouvelles pas, ça s'arrête là. Un cycle commencé reste dû.",
  },
];

function Faq() {
  return (
    <Section wrapClassName="s2-etroit">
      <h2>Tes questions</h2>
      <Accordion type="single" collapsible className="mt-12 space-y-3">
        {FAQS.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-carte border border-rose-doux bg-white px-6"
          >
            <AccordionTrigger className="py-6 text-left font-courant text-lg font-semibold text-encre hover:no-underline md:text-xl">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm text-encre">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

const COULEURS_CONFETTIS = ["#FB3D80", "#FF7A33", "#FFA7C6", "#91014B"];

function DernierEcran() {
  const fait = useRef(false);

  // Salve de confettis au clic, une seule fois, et rien si l'appareil demande
  // moins de mouvement. Le lien s'ouvre dans un nouvel onglet : la salve reste
  // visible quand on revient sur la page.
  function salve(e: MouseEvent<HTMLAnchorElement>) {
    if (fait.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    fait.current = true;
    const page = e.currentTarget.closest(".page-saison2") ?? document.body;
    const r = e.currentTarget.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top;
    for (let i = 0; i < 24; i++) {
      const c = document.createElement("span");
      c.className = "s2-confetti";
      c.style.background = COULEURS_CONFETTIS[i % 4];
      c.style.left = `${cx}px`;
      c.style.top = `${cy}px`;
      page.appendChild(c);
      const a = Math.random() * Math.PI - Math.PI;
      const d = 80 + Math.random() * 120;
      const anim = c.animate(
        [
          { transform: "translate(0,0) rotate(0)", opacity: 1 },
          {
            transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d + 60}px) rotate(${Math.random() * 360}deg)`,
            opacity: 0,
          },
        ],
        { duration: 900, easing: "ease-out" },
      );
      anim.onfinish = () => c.remove();
    }
  }

  return (
    <>
      <VichyBand />
      <section className="final-cta centre">
        <div className="wrap s2-etroit">
          <h2>On continue ?</h2>
          <div className="actions">
            <CtaSaison2 onClick={salve} />
          </div>
          <p className="s2-note-finale">{NOTE_CTA}</p>
        </div>
      </section>
    </>
  );
}

/* ================================ page ================================ */

function Page() {
  return (
    <DaLayout className="page-saison2">
      <Hero />
      <LaOuTuEnEs />
      <EcranPhrase />
      <CeQuOnFait />
      <Trimestre />
      <CafeDeCom />
      <CombienDeTemps />
      <Prix />
      <PourToi />
      <Faq />
      <DernierEcran />
    </DaLayout>
  );
}
