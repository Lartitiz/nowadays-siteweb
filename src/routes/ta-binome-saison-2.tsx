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
const NOTE_CTA = "Tu me le dis, et je t'envoie une proposition de plan.";

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
      <h2 className="text-center">Là où tu en es</h2>
      <ol className="s2-chemin">
        <li>
          <p>
            En saison 1, on n'a pas seulement posé tes bases : on est vraiment passées à l'action
            ensemble.
          </p>
        </li>
        <li>
          <p>
            Aujourd'hui, ta com' tient debout, elle a ses outils, son plan, et tu sais décider seule
            de ce qui compte.
          </p>
        </li>
        <li>
          <p>
            Normalement, tu es capable de prendre ton envol toute seule, mais si tu en as besoin, je
            reste là.
          </p>
        </li>
      </ol>
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
      <h2 className="text-center">
        Ce qu'on fait dans la <em>saison 2</em>
      </h2>
      <p>
        On continue sur la lancée de la saison 1, et on va plus loin sur la visibilité qu'on a
        commencé à construire.
      </p>
      <p>
        On reprend ce qui a démarré, et on ouvre ce qu'on avait laissé de côté faute de temps, comme
        lancer ton podcast, contacter la presse ou préparer ta prochaine campagne.
      </p>
      <div className="s2-binome">
        <div>
          <p className="s2-chute">Je reste ta binôme.</p>
          <p>
            Tu n'avances pas seule, et tu avances plus vite, parce qu'à chaque séance on fait un
            vrai <span className="surligne">bond</span>, et que c'est plus facile de tenir le rythme
            quand quelqu'un t'attend au tournant (gentiment, hein).
          </p>
        </div>
        <CourbeBinome />
      </div>
    </Section>
  );
}

/*
 * Deux chemins vers le même but : seule, une pente douce ; à deux, un bond à
 * chaque séance. Le dessin redit la phrase d'à côté, il ne la remplace pas.
 */
function CourbeBinome() {
  return (
    <figure className="s2-courbe" aria-hidden="true">
      <svg viewBox="0 0 360 240" role="presentation">
        {/* sol */}
        <line x1="16" y1="212" x2="344" y2="212" className="s2-courbe-sol" />
        {/* seule : pente douce */}
        <path d="M24 204 L336 168" className="s2-courbe-seule" />
        <text x="336" y="190" textAnchor="end" className="s2-courbe-lib s2-courbe-lib-seule">
          seule
        </text>
        {/* à deux : un bond à chaque séance */}
        <path
          d="M24 204 L92 196 L100 160 L168 152 L176 112 L244 104 L252 60 L336 50"
          className="s2-courbe-deux"
        />
        {[
          [96, 178],
          [172, 132],
          [248, 82],
        ].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="7" className="s2-courbe-bond" />
        ))}
        <text x="336" y="36" textAnchor="end" className="s2-courbe-lib s2-courbe-lib-deux">
          à deux
        </text>
        <path d="M58 104 Q 70 150 90 172" className="s2-courbe-fleche" />
        <text x="16" y="72" className="s2-courbe-note">
          <tspan x="16">un bond à</tspan>
          <tspan x="16" dy="18">
            chaque séance
          </tspan>
        </text>
      </svg>
    </figure>
  );
}

function Trimestre() {
  return (
    <Section wrapClassName="s2-etroit">
      <h2 className="text-center">Sur chaque cycle de trois mois, concrètement</h2>
      <div className="s2-trimestre">
        <h3 className="s2-h3 text-center">Trois séances d'une heure en visio</h3>
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
        <p className="text-center">
          Tu les places quand tu veux dans les trois mois : deux le même mois si tu lances quelque
          chose, aucune le mois où tu as la tête ailleurs. À chaque séance, on regarde ce qui a
          marché, ce qui coince, et on décide de la suite.
        </p>
      </div>
    </Section>
  );
}

function EntreDeux() {
  const fiches = [
    ["Relecture & retours", "Ta page de vente ou ton article, relus avant publication."],
    ["Déblocage express", "Le petit réglage qui coince dans ta newsletter ou ton outil."],
    ["Aide à la décision", "Valider un choix avant de partir dans la mauvaise direction."],
  ];
  return (
    <Section fond="rose" wrapClassName="s2-etroit">
      <h2 className="text-center s2-h2-deux">
        Et entre deux séances ? <em>Tu n'es jamais lâchée dans la nature.</em>
      </h2>
      <div className="s2-entre">
        <div className="s2-colonne">
          <h3 className="s2-h3">Je travaille sur ton projet</h3>
          <ul className="s2-fiches">
            {fiches.map(([t, d]) => (
              <li key={t}>
                <strong>{t}</strong>
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <p className="s2-devis">
            Un site, des visuels ou une vidéo, ça se fait à part, sur devis.
          </p>
        </div>
        <div className="s2-colonne">
          <h3 className="s2-h3">WhatsApp quand tu en as besoin</h3>
          <div className="s2-chat" aria-label="Exemple d'échange WhatsApp avec Laetitia">
            <div className="s2-chat-entete" aria-hidden="true">
              <img src="/images/home/laetitia-portrait.jpg" alt="" width="36" height="36" />
              <span>Laetitia</span>
            </div>
            <p className="s2-bulle s2-toi">
              Laetitia, j'hésite entre ces deux accroches pour mon lancement de jeudi…
            </p>
            <p className="s2-bulle s2-moi">
              La deuxième, sans hésiter ! Elle va droit au but. Je t'ai peaufiné deux phrases.
            </p>
          </div>
          <span className="s2-badge">Les jours ouvrés · réponse sous 48 h</span>
        </div>
      </div>
    </Section>
  );
}

function CafeDeCom() {
  const vignettes = [
    [
      "Tous les 3 mois",
      "1 h en visio, un thé ou un café à la main, pour lever la tête du guidon et faire le point.",
    ],
    [
      "Le partage sans filtre",
      "Ce qui a cartonné, les flops, les astuces d'or, les outils testés… On se dit tout sans langue de bois.",
    ],
    [
      "Le réseau qui perdure",
      "Accessible que tu continues en saison 2 ou que tu aies déjà pris ton envol.",
    ],
  ];
  return (
    <Section wrapClassName="s2-large">
      <div className="s2-cafe">
        <figure className="s2-cafe-photo">
          {/* Laetitia qui anime une visio : la photo du Café de Com'. */}
          <img
            src="/images/saison2/laetitia-visio.jpg"
            alt="Laetitia anime une visio de groupe devant sa grande fenêtre"
            width="720"
            height="960"
            loading="lazy"
          />
        </figure>
        <div className="s2-cafe-texte">
          <span className="s2-encours">en projet</span>
          <h2>
            Et aussi : le <em>Café de Com'</em>
          </h2>
          <p className="s2-cafe-accroche">
            Un rendez-vous tous les 3 mois pour ne plus jamais entreprendre seule.
          </p>
          <ul className="s2-cafe-liste">
            {vignettes.map(([t, d]) => (
              <li key={t}>
                <h3 className="s2-h3">{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="s2-memo">
        « Je l'avais déjà testé avec mes anciennes clientes : c'était magique de voir des
        collaborations et de vraies amitiés naître entre créatrices. »<span>Laetitia</span>
      </p>
    </Section>
  );
}

function CombienDeTemps() {
  const etapes = [
    { cle: "s1", lib: "Saison 1", duree: "6 mois", sortie: true },
    { cle: "c1", lib: "Saison 2, cycle 1", duree: "3 mois", sortie: true },
    { cle: "c2", lib: "Saison 2, cycle 2", duree: "3 mois", sortie: false },
  ];
  return (
    <Section fond="rose" wrapClassName="s2-etroit">
      <h2 className="text-center">Combien de temps</h2>
      <p className="text-center">
        Ça marche par cycles de trois mois : à chaque étape, tu décides si on continue ou si tu
        t'arrêtes là.
      </p>

      <div
        className="s2-frise"
        role="img"
        aria-label="Saison 1 : six mois. Saison 2 : un premier cycle de trois mois, puis un second. Tu peux t'arrêter à la fin de chaque étape. Au bout : un an ensemble."
      >
        {etapes.map((e) => (
          <div key={e.cle} className={`s2-seg s2-${e.cle}`}>
            <span className="s2-barre" />
            <div className="s2-seg-texte">
              <div>
                <div className="s2-lib">{e.lib}</div>
                <div className="s2-duree">{e.duree}</div>
              </div>
              {e.sortie ? (
                <span className="s2-sortie">tu t'arrêtes là</span>
              ) : (
                <span className="s2-fin">
                  <span className="s2-point" />
                  un an
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function PlusBesoinDeMoi() {
  return (
    <Section className="manifesto s2-manifeste" wrapClassName="s2-etroit">
      <h2 className="text-center s2-h2-deux">
        Mon but, c'est que tu n'aies <em>plus besoin de moi.</em>
      </h2>
      <p className="s2-citation">
        Deux cycles de trois mois, soit six mois en saison 2. Avec la saison 1, cela fait un an de
        travail ensemble : à ce stade, ta communication roule et tu as toutes les clés en main.
      </p>
      <div className="s2-sticker-zone">
        <p className="s2-sticker">
          Oui, je te vends une offre en t'expliquant que mon objectif est de devenir dispensable.
          Côté business classique, on a vu plus malin… mais c'est exactement ça, une communication
          saine.
        </p>
      </div>
    </Section>
  );
}

function FeuilleDeRoute() {
  const etapes = [
    [
      "On fait le point",
      "Où en est ton activité aujourd'hui, et quelles sont tes priorités pour les mois à venir.",
    ],
    [
      "Je prépare ton plan",
      "Je t'envoie une proposition personnalisée pour tes six prochains mois, calibrée pour toi.",
    ],
    ["Tu valides", "Si le cap te plaît, on lance le premier cycle de trois mois."],
  ];
  return (
    <Section fond="rose" wrapClassName="s2-etroit">
      <h2 className="text-center s2-h2-deux">
        Avant de commencer : <em>ta feuille de route sur mesure</em>
      </h2>
      <ol className="s2-etapes">
        {etapes.map(([t, d], i) => (
          <li key={t} className="s2-etape-carte">
            <span className="s2-num">{i + 1}</span>
            <h3 className="s2-h3">{t}</h3>
            <p>{d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Prix() {
  return (
    <Section wrapClassName="s2-etroit">
      <h2 className="text-center">Le prix</h2>
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
      <h2 className="text-center">Tes questions</h2>
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
      <CombienDeTemps />
      <Trimestre />
      <EntreDeux />
      <CafeDeCom />
      <PlusBesoinDeMoi />
      <FeuilleDeRoute />
      <Prix />
      <PourToi />
      <Faq />
      <DernierEcran />
    </DaLayout>
  );
}
