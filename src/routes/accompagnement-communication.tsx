import type { CSSProperties, ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { Pill } from "@/components/da/Pill";
import { PageHero } from "@/components/da/PageHero";
import { VichyBand } from "@/components/da/VichyBand";
import { Section } from "@/components/da/Section";
import { PostIt } from "@/components/da/PostIt";
import { CardPointillee } from "@/components/da/CardPointillee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoAtelierTiket from "@/assets/clients-accompagnement/atelier-tiket.png.asset.json";
import logoIkigai from "@/assets/clients-accompagnement/ikigai.png.asset.json";
import logoBoomBoomDance from "@/assets/clients-accompagnement/boom-boom-dance.png.asset.json";
import logoHopla from "@/assets/clients-accompagnement/hopla.png.asset.json";
import logoNapperon from "@/assets/clients-accompagnement/napperon.png.asset.json";
import { CALENDLY_URL } from "@/lib/links";
import { absoluteUrl } from "@/lib/site";
import { imageSize } from "@/lib/image-sizes";

const CALENDLY = CALENDLY_URL;

export const Route = createFileRoute("/accompagnement-communication")({
  head: () => ({
    meta: [
      { title: "Ta binôme de com | Accompagnement 6 mois | Nowadays" },
      {
        name: "description",
        content:
          "Accompagnement communication 6 mois pour solopreneur·es engagé·es. On construit ta stratégie, on crée tes contenus, on met tout en place. Ensemble. 350 €/mois.",
      },
      {
        property: "og:title",
        content: "Ta binôme de com | Accompagnement 6 mois",
      },
      {
        property: "og:description",
        content: "Deviens visible sans vendre ton âme. 350 €/mois pendant 6 mois.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/accompagnement-communication") }],
  }),
  component: Page,
});

/* ------------------------------ helpers ------------------------------ */

function CtaButton({ children = "Réserver un appel découverte" }: { children?: React.ReactNode }) {
  return (
    <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
      {children}
    </a>
  );
}


function Temoin({
  variante,
  qui,
  role,
  children,
  className = "",
}: {
  variante: "t1" | "t2" | "t3";
  qui: string;
  role: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`bn-temoin bn-temoin--${variante} ${className}`.trim()}>
      {children}
      <p className="bn-qui">
        <b>{qui}</b> <span>· {role}</span>
      </p>
    </div>
  );
}

/* ============================== sections ============================== */

function HeroAccompagnement() {
  return (
    <PageHero
      vichy="jaune"
      logo={{
        src: "/images/offres/logo-ta-binome-de-com.png",
        alt: "Ta binôme de com'",
        width: 250,
      }}
      titre={
        <>
          Tu fais un travail <em>magnifique</em>. Mais personne ne le{" "}
          <span className="surligne">voit</span>.
        </>
      }
      chapo={
        <>
          Ta com' te prend la tête ? On la fait ensemble : on construit ta stratégie, on crée tes
          contenus, on met tout en place. Tu n'es plus seul·e face à ta com'.
        </>
      }
      mention="350 € par mois, pendant six mois."
      photo={{
        src: "/images/home/laetitia-fauteuil.jpg",
        alt: "Portrait de Laetitia, fondatrice de Nowadays",
        position: "60% 40%",
        positionMobile: "62% 38%",
      }}
    />

  );
}

function ClientsBand() {
  const clients = [
    { name: "Atelier Tiket", logo: logoAtelierTiket.url, alt: "Atelier Tiket" },
    { name: "Cap sur Ikigaï", logo: logoIkigai.url, alt: "Cap sur Ikigaï" },
    { name: "Boom Boom Dance", logo: logoBoomBoomDance.url, alt: "Boom Boom Dance" },
    { name: "Hopla Studio", logo: logoHopla.url, alt: "Hopla Studio" },
    { name: "Napperon", logo: logoNapperon.url, alt: "Napperon" },
  ];

  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-center text-xs font-bold uppercase tracking-[0.08em] text-gris-chaud">
          Ils·elles m'ont fait confiance
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((c) => (
            <div key={c.name} className="flex h-12 items-center justify-center">
              <img
                src={c.logo}
                {...imageSize(c.logo)}
                alt={c.alt}
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
    <Section className="bn-centre">
      <h2 style={{ maxWidth: "16em" }}>
        Ce que tu proposes est beau et responsable. 
        Il est temps qu'on le voie.
      </h2>
      <p className="lead">Sauf que pour l'instant, tu es seul·e face à ta com'. Et ça se sent.</p>
      <Temoin variante="t1" qui="Violaine" role="Cap sur Ikigaï">
        <blockquote>
          « Je me suis rendu compte que j'avais même plus de page contact, tellement je réfléchissais
          toute seule à vide. »
        </blockquote>
      </Temoin>
    </Section>
  );
}

function ConvergenceSection() {
  return (
    <Section fond="rose" className="bn-relative">
      <h2 style={{ textAlign: "center", marginInline: "auto" }}>Souvent, tu es seule au moment d'appliquer.</h2>

      <div className="bn-conv">
        <div className="bn-gauche3">
          <div className="bn-deja">
            <b>Un·e coach qui te donne des mantras</b>
            <span>Tu ressors motivé·e. Et lundi matin, il faut quand même écrire le post.</span>
            <span className="bn-seule">…et tu te retrouves seul·e.</span>
          </div>
          <div className="bn-deja">
            <b>Une formation de 47 vidéos</b>
            <span>Que tu regardes à 23 h, en te disant que tu appliqueras plus tard.</span>
            <span className="bn-seule">…et tu te retrouves seul·e.</span>
          </div>
          <div className="bn-deja">
            <b>Un plan dans un Google Doc</b>
            <span>Très bien fait, d'ailleurs. Jamais rouvert depuis mars.</span>
            <span className="bn-seule">…et tu te retrouves seul·e.</span>
          </div>
        </div>
        <div className="bn-milieu">
          <svg viewBox="0 0 130 340" fill="none" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M 8 58 C 60 58 70 150 118 166"
              stroke="#FFA7C6"
              strokeWidth="2.5"
              strokeDasharray="7 7"
            />
            <path
              d="M 8 170 C 55 170 70 170 118 170"
              stroke="#FFA7C6"
              strokeWidth="2.5"
              strokeDasharray="7 7"
            />
            <path
              d="M 8 282 C 60 282 70 190 118 174"
              stroke="#FFA7C6"
              strokeWidth="2.5"
              strokeDasharray="7 7"
            />
            <path
              d="M 106 160 l 14 10 l -14 10"
              stroke="#FF7A33"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <div>
          <div className="bn-binome">
            <span className="bn-bpil">Ta binôme de com'</span>
            <p className="bn-binome-titre">Ici, tu n'appliques jamais seul·e.</p>
            <ul>
              <li>
                <b>Du concret :</b> tu repars de chaque visio avec des choses faites, pas des
                mantras.
              </li>
              <li>
                <b>En direct :</b> ce qu'on apprend, on le fait ensemble, sur ton projet.
              </li>
              <li>
                <b>Appliqué :</b> ce qu'on crée un mardi est en ligne le jeudi.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="bn-chute bn-chute--grand">
        Le problème, ça n'a jamais été toi.
        <br />
        <em>C'était la solitude.</em>
      </p>
    </Section>
  );
}

function BesoinsSection() {
  return (
    <Section>
      <div className="bn-duo2">
        <div>
          <h2>Ce dont tu as besoin, en vrai.</h2>
          <p className="lead">Tu l'as sûrement déjà listé. 
            Un mardi soir, probablement.</p>
        </div>
        <div className="bn-postits bn-relative">
          <PostIt titre="LE SITE" couleur="rose-doux" className="bn-postit-1">
            « J'ai besoin d'un site qui donne envie. »
          </PostIt>
          <PostIt titre="LES RÉSEAUX" couleur="jaune" className="bn-postit-2">
            « Il faut que mes réseaux tournent. »
          </PostIt>
          <PostIt titre="LA NEWSLETTER" couleur="rose" className="bn-postit-3">
            « Il me faudrait une newsletter, non ? »
          </PostIt>
          <PostIt titre="LA PRESSE" couleur="rose-doux" className="bn-postit-4">
            « Et la presse, ça serait bien aussi. »
          </PostIt>
        </div>
      </div>
    </Section>
  );
}

function PhraseVichySection() {
  return (
    <div className="vichy bn-vichy-phrase">
      <div className="bn-carte">
        <p className="bn-avant">En vrai, tu n'as pas besoin de quatre prestataires.</p>
        <p className="bn-phrase">
          Tu as besoin que ta com' tourne, 
          <span className="surligne">dans son ensemble.</span>
          <br />
          <em>Et de quelqu'un qui la fait avec toi.</em>
        </p>
      </div>
    </div>
  );
}

function ReparsSection() {
  const lignes = [
    <>
      <b>Ta marque, posée</b> : pourquoi on te choisit toi.
    </>,
    <>
      <b>Ton plan des six mois, écrit</b>, avec tes vingt premiers posts.
    </>,
    <>
      <b>Tes réseaux qui tournent</b>, avec tes modèles prêts à remplir pour la suite.
    </>,
    <>
      <b>Ton site en ligne</b>, qui donne envie et qui vend.
    </>,
    <>
      <b>Ta newsletter qui part</b>, et tes emails automatiques avec.
    </>,
    <>
      <b>Ta presse et tes partenariats, lancés.</b>
    </>,
  ];
  return (
    <Section>
      <div className="bn-entete">
        <div>
          <h2>
            Dans six mois, ta communication tourne.
            <br />
            Et tu n'es plus seul·e.
          </h2>
          <p className="lead">Voilà ce qui existe à la fin, concrètement.</p>
        </div>
        <div className="bn-sticker">
          Fait.
          <br />
          Pas « à faire ».
        </div>
      </div>
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
            <b>Et toi, qui sais faire. Tu ne dépends plus de personne.</b>
          </span>
        </div>
      </div>
      <p className="bn-chute">
        Et surtout : tu n'auras rien fait de tout ça <span className="surligne">seul·e</span>.
      </p>
    </Section>
  );
}

function SixMoisSection() {
  return (
    <Section fond="rose">
      <div style={{ textAlign: "center" }}>
        <Pill ton="framboise">Comment on s'y prend</Pill>
        <h2 style={{ marginTop: 18 }}>
          On pose le gros au début.
          <br />
          Ensuite, on fait ensemble.
        </h2>
      </div>

      <div className="bn-chart">
        <div className="bn-mois">
          <div className="bn-stack" style={{ height: "100%" }}>
            <div className="bn-seg bn-seg--moi" style={{ flex: 1 }}>
              Je pose tout :<br />
              l'état des lieux, ta marque
            </div>
          </div>
          <div className="bn-mlab">1</div>
        </div>
        <div className="bn-mois">
          <div className="bn-stack" style={{ height: "92%" }}>
            <div className="bn-seg bn-seg--moi" style={{ flex: 1 }}>
              Ton plan des six mois, tes vingt premiers posts
            </div>
          </div>
          <div className="bn-mlab">2</div>
        </div>
        <div className="bn-mois">
          <div className="bn-stack" style={{ height: "58%" }}>
            <div className="bn-seg bn-seg--toi" style={{ flex: 1 }}>
              Tu publies
            </div>
            <div className="bn-seg bn-seg--moi" style={{ flex: 1.2 }}>
              Je construis
            </div>
          </div>
          <div className="bn-mlab">3</div>
        </div>
        <div className="bn-mois">
          <div className="bn-stack" style={{ height: "58%" }}>
            <div className="bn-seg bn-seg--toi" style={{ flex: 1.1 }}>
              Tu publies
            </div>
            <div className="bn-seg bn-seg--moi" style={{ flex: 1.1 }}>
              Je construis
            </div>
          </div>
          <div className="bn-mlab">4</div>
        </div>
        <div className="bn-mois">
          <div className="bn-stack" style={{ height: "58%" }}>
            <div className="bn-seg bn-seg--toi" style={{ flex: 1.2 }}>
              Tu publies
            </div>
            <div className="bn-seg bn-seg--moi" style={{ flex: 1 }}>
              J'ajuste
            </div>
          </div>
          <div className="bn-mlab">5</div>
        </div>
        <div className="bn-mois">
          <div className="bn-stack" style={{ height: "58%" }}>
            <div className="bn-seg bn-seg--toi" style={{ flex: 1.4 }}>
              Tu pilotes
            </div>
            <div className="bn-seg bn-seg--moi" style={{ flex: 0.8 }}>
              Je veille
            </div>
          </div>
          <div className="bn-mlab">6</div>
        </div>
      </div>


      <div className="bn-legend">
        <span>
          <span className="bn-dot" style={{ background: "var(--framboise)" }} />
          ce que je fais
        </span>
        <span>
          <span className="bn-dot" style={{ background: "var(--jaune)" }} />
          ce que tu fais, jamais seul·e
        </span>
      </div>
      <p className="bn-caveat">
        Ce que je construis et ce que tu portes, on le décide au démarrage, selon tes objectifs.
      </p>

      <Temoin variante="t2" qui="Nora" role="accompagne des dirigeant·es à trouver leur vision">
        <blockquote>
          « Je sens que tu me comprends. Et maintenant je sais qu'on est à deux dessus. »
        </blockquote>
      </Temoin>
    </Section>
  );
}

function ManifesteSection() {
  return (
    <section className="section bn-manif">
      <div className="wrap">
        <Pill ton="jaune">Pourquoi j'ai créé cet accompagnement</Pill>
        <h2 style={{ marginTop: 18 }}>
          Pour celles et ceux qui créent des projets magnifiques, mais qui restent invisibles.
        </h2>
        <div className="bn-manif-corps">
          <div>
            <p>Invisibles, pas parce que le travail n'est pas bon. Parce qu'on leur a appris que :</p>
            <ul className="bn-manif-trois">
              <li>parler de soi, c'est être prétentieux·se ;</li>
              <li>vendre, c'est manipuler ;</li>
              <li>le marketing, c'est l'ennemi de l'authenticité.</li>
            </ul>
            <p style={{ marginTop: 22 }}>C'est ça que je veux changer. Dans le beau et dans la joie.</p>
            <p className="bn-manif-fin">
              Un·e créateur·rice qui vit de son métier, c'est une personne de moins qui subit un travail
              qu'elle n'a pas choisi.
            </p>
          </div>
          <div>
            <svg
              className="bn-manif-mega"
              viewBox="0 0 340 260"
              aria-hidden="true"
              style={{ marginTop: 30 }}
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
          </div>
        </div>
      </div>
    </section>
  );
}

function EnchanteeSection() {
  return (
    <Section fond="rose">
      <h2>Enchantée, moi c'est Laetitia Mattioli.</h2>
      <p className="lead">Ta binôme, c'est moi. Celle qui sera dans la visio avec toi.</p>
      <div className="bn-idcards">
        <div className="bn-c">
          <div className="bn-num">01</div>
          <p>
            <b>10 ans</b> de marketing digital, <b>+150 projets accompagnés</b>, de 0 à 10 000
            abonné·es.
          </p>
        </div>
        <div className="bn-c">
          <div className="bn-num">02</div>
          <p>
            Des conférences à l'<b>École des arts décoratifs de Paris</b>, des formations au{" "}
            <b>Bureau de la mode et du design</b>, des interventions à l'<b>ENS</b> et aux{" "}
            <b>Mines</b>.
          </p>
        </div>
        <div className="bn-c">
          <div className="bn-num">03</div>
          <p>
            Fondatrice de <b>Nowadays</b>, agence de communication engagée et responsable.
          </p>
        </div>
      </div>
    </Section>
  );
}

function ComparatifSection() {
  return (
    <Section>
      <h2>Tu veux déléguer. Regardons ce que ça coûte vraiment.</h2>
      <p className="lead">Les mêmes cinq chantiers, dans les deux cas.</p>

      <div className="bn-duo">
        <div className="bn-pan bn-pan--a">
          <div className="bn-tete">
            <div className="bn-t">Si tu délègues tout</div>
            <div className="bn-st">Cinq prestataires, cinq devis</div>
          </div>
          <div className="bn-corps">
            <div className="bn-li">
              <span className="bn-nom">Ton image de marque</span>
              <span className="bn-val">3 000 €</span>
            </div>
            <div className="bn-li">
              <span className="bn-nom">Tes réseaux sociaux</span>
              <span className="bn-val">5 400 €</span>
            </div>
            <div className="bn-li">
              <span className="bn-nom">Ton site et ton référencement Google</span>
              <span className="bn-val">5 000 €</span>
            </div>
            <div className="bn-li">
              <span className="bn-nom">Ta newsletter et tes emails</span>
              <span className="bn-val">1 500 €</span>
            </div>
            <div className="bn-li">
              <span className="bn-nom">Ta presse, tes partenariats</span>
              <span className="bn-val">2 500 €</span>
            </div>
            <div className="bn-li bn-li--qual">
              <span className="bn-nom">Qui suit ton projet en entier</span>
              <span className="bn-neg">Personne</span>
            </div>
            <div className="bn-li bn-li--qual">
              <span className="bn-nom">À la fin, tu sais faire</span>
              <span className="bn-neg">Non</span>
            </div>
            <div className="bn-tot">
              <span className="bn-lab">TOTAL</span>
              <span className="bn-gros">17 400 €</span>
            </div>
            <div className="bn-jauge">
              <i style={{ width: "100%" }} />
            </div>
          </div>
        </div>
        <div className="bn-pan bn-pan--b">
          <div className="bn-tete">
            <div className="bn-t">Ta binôme de com'</div>
            <div className="bn-st">Une seule personne, six mois</div>
          </div>
          <div className="bn-corps">
            <div className="bn-li">
              <span className="bn-nom">Ton image de marque</span>
              <span className="bn-inc">✓ compris</span>
            </div>
            <div className="bn-li">
              <span className="bn-nom">Tes réseaux sociaux</span>
              <span className="bn-inc">✓ compris</span>
            </div>
            <div className="bn-li">
              <span className="bn-nom">Ton site et ton référencement Google</span>
              <span className="bn-inc">✓ compris</span>
            </div>
            <div className="bn-li">
              <span className="bn-nom">Ta newsletter et tes emails</span>
              <span className="bn-inc">✓ compris</span>
            </div>
            <div className="bn-li">
              <span className="bn-nom">Ta presse, tes partenariats</span>
              <span className="bn-inc">✓ compris</span>
            </div>
            <div className="bn-li bn-li--qual">
              <span className="bn-nom">Qui suit ton projet en entier</span>
              <span className="bn-inc">Moi</span>
            </div>
            <div className="bn-li bn-li--qual">
              <span className="bn-nom">À la fin, tu sais faire</span>
              <span className="bn-inc">Oui</span>
            </div>
            <div className="bn-tot">
              <span className="bn-lab">TOTAL</span>
              <span className="bn-gros">2 100 €</span>
            </div>
            <div className="bn-jauge">
              <i style={{ width: "12%" }} />
            </div>
          </div>
        </div>
      </div>

      <p className="bn-methode">
        Tarifs médians France 2026, bas de fourchette (source : La Fabrique du Net).
      </p>
      <p className="bn-chute">
        Huit fois moins cher, parce qu'on le fait <span className="surligne">ensemble</span>.
      </p>

      <Temoin
        variante="t3"
        qui="Armelle"
        role="infusions pour les femmes qui souffrent de troubles ovariens"
      >
        <blockquote>
          « Ton accompagnement m'a vraiment aidée à clarifier les choses, surtout au niveau du
          positionnement. »
        </blockquote>
      </Temoin>
    </Section>
  );
}

function PrixSection() {
  return (
    <Section fond="rose" id="rdv">
      <div style={{ textAlign: "center" }}>
        <Pill>Le prix</Pill>
      </div>
      <div className="bn-prixbloc">
        <div className="bn-gros">
          350 € par mois,
          <br />
          pendant six mois.
        </div>
        <div className="bn-sous">Soit 2 100 € pour les six mois.</div>
      </div>

      <Temoin
        variante="t2"
        qui="Péline"
        role="coach sportive spécialisée SOPK"
        className="mx-auto"
      >
        <p className="bn-constat">
          Dès le deuxième mois, Péline avait récupéré ce qu'elle avait investi, avec les client·es
          signé·es entre-temps.
        </p>
      </Temoin>

      <div className="bn-garantie">
        <p className="bn-lab">La garantie</p>
        <p>
          Si tu appliques ce qu'on met en place ensemble et que tu ne vois rien bouger, je te
          rembourse. Je ne peux pas faire le travail à ta place, mais ça, je peux le tenir.
        </p>
      </div>

      <div className="bn-cta">
        <p className="bn-amorce">Pour que je devienne ta binôme de com'.</p>
        <CtaButton>Réserver un appel découverte</CtaButton>
        <p className="page-hero-mini">30 minutes, gratuites, sans engagement.</p>
      </div>
    </Section>
  );
}

const PROJETS_LARGES = [
  {
    image: "/projets/napperon.webp",
    alt: "Napperon",
    nom: "Napperon",
    q: "Lingerie upcyclée",
    a: "On a posé son positionnement, sa stratégie et les fondations de sa marque.",
  },
  {
    image: "/projets/boom-boom-dance.webp",
    alt: "Boom Boom Dance",
    nom: "Boom Boom Dance",
    q: "Cours de danse avec bébé, post-partum",
    a: "On a structuré toute sa communication, de la ligne édito aux contenus.",
  },
  {
    image: "/projets/sophie-brillouet.webp",
    alt: "Sophie Brillouet",
    nom: "Sophie Brillouet",
    q: "Sculptrice de coquillages, artisane d'art",
    a: "On a rendu visible un univers singulier, sans le trahir.",
  },
];

const PROJETS_COMPACTS = [
  { image: "/projets/mazeh-paris.webp", alt: "Mazeh Paris", nom: "Mazeh Paris", q: "Atelier d'upcycling textile" },
  { image: "/projets/atelier-tiket.webp", alt: "Atelier Tiket", nom: "Atelier Tiket", q: "Mode durable" },
  { image: "/projets/hopla-studio.webp", alt: "Hopla Studio", nom: "Hopla Studio", q: "Design culinaire" },
  {
    image: "/projets/la-slow-fashionitude.webp",
    alt: "La Slow Fashionitude",
    nom: "La Slow Fashionitude",
    q: "Plateforme slow fashion",
  },
  {
    image: "/projets/inti-personal-shopper.webp",
    alt: "Inti Personal Shopper",
    nom: "Inti Personal Shopper",
    q: "Personal shopper éco-responsable",
  },
  {
    image: "/projets/ecole-femmes-massoba.webp",
    alt: "L'école des femmes de Massoba",
    nom: "L'école des femmes de Massoba",
    q: "Accompagnement sur mesure",
  },
  {
    image: "/projets/yza-handmade.webp",
    alt: "Yza Handmade",
    nom: "Yza Handmade",
    q: "Vestiaire marocain fabriqué localement",
  },
  { image: "/projets/peline-coach-sopk.webp", alt: "Péline", nom: "Péline", q: "Coach sportive spécialisée SOPK" },
  {
    image: "/projets/comme-un-ruban-detoile.webp",
    alt: "Comme un ruban d'étoile",
    nom: "Comme un ruban d'étoile",
    q: "Bijoux au fil d'argent",
  },
];

function ProjetsSection() {
  return (
    <Section>
      <Pill>Douze projets</Pill>
      <h2 style={{ marginTop: 18 }}>Ils·elles sont passé·es par là avant toi.</h2>
      <p className="lead">
        Des créateur·rices, des artisan·es, des accompagnant·es. Voilà ce qu'on a construit ensemble.
      </p>

      <div className="bn-cas1">
        {PROJETS_LARGES.map((p) => (
          <div className="bn-c" key={p.nom}>
            <div className="bn-im">
              <img src={p.image} {...imageSize(p.image)} alt={p.alt} loading="lazy" />
            </div>
            <div className="bn-tx">
              <div className="bn-n">{p.nom}</div>
              <div className="bn-q">{p.q}</div>
              <div className="bn-a">{p.a}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bn-cas2">
        {PROJETS_COMPACTS.map((p) => (
          <div className="bn-c" key={p.nom}>
            <div className="bn-im">
              <img src={p.image} {...imageSize(p.image)} alt={p.alt} loading="lazy" />
            </div>
            <div>
              <div className="bn-n">{p.nom}</div>
              <div className="bn-q">{p.q}</div>
            </div>
          </div>
        ))}
      </div>

      <p className="bn-caslien">
        Envie du détail ?{" "}
        <Link to="/creatrices-ethiques">Les études de cas complètes sont là.</Link>
      </p>
    </Section>
  );
}

function AutoQualifSection() {
  return (
    <Section fond="rose">
      <h2>Avant qu'on se parle, soyons honnêtes tou·tes les deux.</h2>
      <div className="audience-grid">
        <CardPointillee titre="C'est pour toi si…" ton="rose">
          <ul>
            <li>Tu es solopreneur·euse dans l'univers lifestyle éthique.</li>
            <li>Ton travail est bon, et ça ne se sait pas encore.</li>
            <li>Tu veux des choses faites, pas des choses à faire.</li>
            <li>Tu peux dégager deux heures par semaine.</li>
            <li>Tu veux savoir faire après, sans dépendre de personne.</li>
          </ul>
        </CardPointillee>
        <CardPointillee titre="Ce n'est pas le moment si…" ton="gris">
          <ul>
            <li>Tu attends que ça décolle en trois semaines.</li>
            <li>
              Ta trésorerie tient sur un ou deux mois. On en reparle quand ce sera plus calme.
            </li>
            <li>Tu cherches des hacks de croissance.</li>
            <li>
              Tu veux que quelqu'un fasse tout, sans toi. Ça existe : Ton Agency de Com'.
            </li>
          </ul>
        </CardPointillee>
      </div>
    </Section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Concrètement, comment ça se passe quand je m'inscris ?",
      a: "On commence par un appel découverte de 30 minutes, gratuit et sans engagement. Si ça matche, on démarre par un atelier de lancement : deux heures où tu me racontes tout. Ensuite je bosse de mon côté : l'état des lieux de ta com', ton positionnement, ton plan des six mois, et on se retrouve pour la restitution. À partir du mois 3, on passe en mode application : une visio de 2 h par mois, et WhatsApp entre les sessions.",
    },
    {
      q: "Est-ce que tu fais vraiment pour moi, ou tu me donnes juste des conseils ?",
      a: "Les deux, et pas au même moment. Sur les mois 1 et 2, je construis : ta marque, ton plan, tes modèles, tes vingt premiers posts. C'est du fait pour toi. Sur les mois 3 à 6, on fait ensemble en visio : je prends la main, tu vois comment je travaille, tu participes. Et entre les sessions, je te relis, je te valide, je te débloque.",
    },
    {
      q: "Pourquoi 350 € par mois, et pas un prix en une fois ?",
      a: "Parce que c'est plus tenable pour une trésorerie de solopreneur·euse. À savoir quand même : le gros du travail est concentré sur les deux premiers mois, là où je construis tout. Les mensualités suivantes paient l'application, le suivi et la disponibilité.",
    },
    {
      q: "Je peux arrêter quand je veux ?",
      a: "Oui. L'accompagnement est pensé sur six mois parce que c'est le temps qu'il faut pour que ta com' tourne vraiment, mais tu n'es enfermé·e nulle part : tu me préviens et on arrête les mensualités suivantes. Les mois déjà faits restent dus, forcément. Et si ta situation change en cours de route, dis-le-moi tôt : on trouvera une solution ensemble.",
    },
    {
      q: "Et la garantie, ça marche comment ?",
      a: "Si tu appliques ce qu'on met en place ensemble et qu'au bout des six mois tu ne vois rien bouger, je te rembourse. Je ne peux pas faire le travail à ta place, mais ça, je peux le tenir.",
    },
    {
      q: "J'ai déjà suivi des formations en com' et ça n'a rien donné. En quoi c'est différent ?",
      a: "On ne reste pas dans la théorie. Tu ne regardes pas des vidéos seul·e à 23 h : tu as quelqu'un en face de toi qui travaille sur ton projet, avec tes contraintes et tes valeurs. Et tu repars chaque mois avec des choses faites, pas des choses à faire.",
    },
    {
      q: "Et si je préfère que quelqu'un fasse tout à ma place ?",
      a: "Ça existe, et je le fais aussi : c'est Ton Agency de Com', à partir de 1 500 € en budget global de mission, échelonnable. Mais pour un projet qui démarre, c'est rarement le bon moment : tout déléguer, c'est autour de 17 400 € sur six mois, et tu n'apprends rien au passage. Dis-le-moi à l'appel, on regardera ce qui est juste pour toi.",
    },
    {
      q: "À qui s'adresse cet accompagnement, exactement ?",
      a: "Aux solopreneur·euses de l'univers lifestyle éthique : mode, beauté, artisanat, bien-être, déco, food, sport, culture, accompagnement. Que tu vendes des produits ou des services, le besoin est le même : être visible sans trahir tes valeurs.",
    },
    {
      q: "Combien de temps ça me prend chaque semaine ?",
      a: "Deux heures. Pas plus. Le temps d'un épisode de série. Ce qu'on prépare ensemble est fait pour être publié vite, pas pour te rajouter du travail.",
    },
    {
      q: "Dois-je avoir déjà un plan de communication avant de démarrer ?",
      a: "Non. C'est justement ce qu'on construit sur les deux premiers mois. Tu peux arriver de zéro, c'est prévu.",
    },
    {
      q: "Ce qu'on crée, ça reste à moi ?",
      a: "Oui, tout : tes modèles, ton plan, tes textes, tes maquettes. Et ton accès à L'Assistant Com' reste actif tant que tu gardes ton compte.",
    },
  ];
  return (
    <Section fond="rose">
      <h2 className="text-center">Tu as des questions ?</h2>
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

function CtaFinalAccompagnement() {
  return (
    <section className="final-cta centre">
      <div className="wrap">
        <h2>Prêt·e à devenir visible ?</h2>
        <p>
          On en parle 30 minutes, sans engagement. Tu repars avec une vision claire, que tu
          démarres avec moi ou pas.
        </p>
        <div className="actions">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-plum">
            Réserver un appel découverte
          </a>
        </div>
        <span className="cta-note">30 minutes, gratuites, sans engagement.</span>
      </div>
    </section>
  );
}

/* ================================ page ================================ */

function Page() {
  return (
    <DaLayout className="page-binome">
      <HeroAccompagnement />
      <ClientsBand />
      <DouleurSection />
      <ConvergenceSection />
      <BesoinsSection />
      <PhraseVichySection />
      <ReparsSection />
      <SixMoisSection />
      <ManifesteSection />
      <EnchanteeSection />
      <ComparatifSection />
      <PrixSection />
      <ProjetsSection />
      <AutoQualifSection />
      <FaqSection />
      <VichyBand />
      <CtaFinalAccompagnement />
    </DaLayout>
  );
}
