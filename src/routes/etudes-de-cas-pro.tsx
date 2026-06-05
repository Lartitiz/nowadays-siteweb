import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";

export const Route = createFileRoute("/etudes-de-cas-pro")({
  head: () => ({
    meta: [
      {
        title:
          "Études de cas — Associations, ONG & marques engagées | Nowadays",
      },
      {
        name: "description",
        content:
          "Une sélection de projets créatifs et engagés (Associations, ONG, start-up et entreprises responsables et éthiques) que nous avons accompagnés avec passion.",
      },
      {
        property: "og:title",
        content:
          "Études de cas — Associations, ONG & marques engagées | Nowadays",
      },
      {
        property: "og:description",
        content:
          "Associations, ONG, coopératives, PME et start-up engagées : découvrez les projets que nous avons accompagnés.",
      },
    ],
    links: [{ rel: "canonical", href: "/etudes-de-cas-pro" }],
  }),
  component: Page,
});

// Visuels neufs
import ensad from "@/assets/etudes-pro/ensad.jpg.asset.json";
import seaShepherd from "@/assets/etudes-pro/sea-shepherd.jpg.asset.json";
import decathlonQuechua from "@/assets/etudes-pro/decathlon-quechua.jpg.asset.json";
import emmausDefi from "@/assets/etudes-pro/emmaus-defi.jpg.asset.json";
import clipIt from "@/assets/etudes-pro/clip-it.jpg.asset.json";
import l214 from "@/assets/etudes-pro/l214.jpg.asset.json";
import cooperativeOasis from "@/assets/etudes-pro/cooperative-oasis.jpg.asset.json";
import okahinaWave from "@/assets/etudes-pro/okahina-wave.jpg.asset.json";
import studyCo from "@/assets/etudes-pro/study-co.webp.asset.json";
import mira from "@/assets/etudes-pro/mira.jpg.asset.json";
import brunoZana from "@/assets/etudes-pro/bruno-zana.jpg.asset.json";
import atelierDesLunettes from "@/assets/etudes-pro/atelier-des-lunettes.webp.asset.json";
import elvezia from "@/assets/etudes-pro/elvezia.jpg.asset.json";
import laProchaineAire from "@/assets/etudes-pro/la-prochaine-aire.jpg.asset.json";

// Visuels réutilisés depuis la page créatrices
import blackStallion from "@/assets/etudes/black-stallion-trading.webp.asset.json";
import ressources from "@/assets/etudes/ressources.png.asset.json";
import jeanBelgueule from "@/assets/etudes/jean-belgueule.jpg.asset.json";
import weSlow from "@/assets/etudes/we-slow.jpg.asset.json";
import essentialOilSupplies from "@/assets/etudes/essential-oil-supplies.jpg.asset.json";
import myPilatesWorld from "@/assets/etudes/my-pilates-world.jpg.asset.json";
import belle from "@/assets/etudes/belle.jpg.asset.json";
import roseDonald from "@/assets/etudes/rose-donald.jpg.asset.json";

type Project = {
  name: string;
  description: string;
  image: string;
  alt: string;
  /** Route interne (sans slash de tête) si le projet a une page dédiée. */
  internal?: string;
  /** URL externe sinon. */
  external?: string;
};

const PROJECTS: Project[] = [
  {
    name: "École des Arts Décoratifs",
    image: ensad.url,
    alt: "Bâtiment moderne avec un grand panneau blanc affichant le nom 'École Nationale Supérieure des Arts Décoratifs' à Paris.",
    description:
      "Pour attirer du monde à l’exposition de Gérard Baudoin, on a coordonné réseaux sociaux, emailing ciblé et micro-influence : 700 visiteurs en une semaine, 5 articles et plus de 100 clics vers l’événement.",
    internal: "ensad",
  },
  {
    name: "Sea Shepherd x Racines de Demain",
    image: seaShepherd.url,
    alt: "Un bateau de la mission Sea Shepherd naviguant en mer agitée sous un ciel gris, avec le logo crâne et trident et la mention « SEA SHEPHERD ».",
    description:
      "Campagne #PlutôtQue pour corriger la perception et mobiliser les dons : un plan en 4 actes, des images d’archives pour limiter l’impact et des actions ciblées sur Twitter, Instagram et via des leaders d’opinion.",
    internal: "sea-shepherd",
  },
  {
    name: "Decathlon x Quechua",
    image: decathlonQuechua.url,
    alt: "Deux personnes portent des sandales de randonnée vert foncé sur un sentier de terre, avec des montagnes en arrière-plan.",
    description:
      "Dans leur révolution circulaire (seconde main, réparation, location, recyclage), nous avons créé une campagne accessible pour expliquer l’initiative.",
  },
  {
    name: "Emmaüs Défi",
    image: emmausDefi.url,
    alt: "Brocante avec des meubles anciens et modernes, canapés, fauteuils et objets décoratifs dans un espace lumineux.",
    description:
      "Un atelier de personal branding d’une demi-journée pour humaniser la marque : 3 fois plus de contenus personnalisés et des équipes désormais à l’aise pour raconter leur histoire.",
    internal: "emmaus-defi",
  },
  {
    name: "Clip It",
    image: clipIt.url,
    alt: "Deux enfants jouant avec des jouets de construction en plastique colorés sur un sol en bois.",
    description:
      "Jeu créatif à base de bouchons upcyclés : l’upcycling transforme la matière sans gaspillage et réduit les émissions de CO₂. Nous avons aidé à raconter cette aventure ludique et écologique (SEO et Instagram).",
    external: "https://www.nowadaysagency.com/clip-it",
  },
  {
    name: "L214",
    image: l214.url,
    alt: "Une femme avec des lunettes tient un microphone et parle lors d’une manifestation en plein air contre la ferme des 1000 vaches.",
    description:
      "Un camion immersif et 50 micro-influenceur·ses pour dénoncer l’élevage intensif et pousser LDC à signer l’European Chicken Commitment : 500 000 vues et plus de 10 000 signatures.",
    internal: "l214",
  },
  {
    name: "Coopérative Oasis",
    image: cooperativeOasis.url,
    alt: "Une femme avec chapeau et gants dans un jardin devant une maison en cours de rénovation, entourée d’arbres.",
    description:
      "Un écosystème d’écolieux qui bâtissent un autre modèle de société. Nous avons accompagné la Coopérative Oasis sur sa stratégie de communication pour son festival : identité, storytelling et community management.",
    external: "https://www.nowadaysagency.com/cooperative-oasis",
  },
  {
    name: "Okahina Wave",
    image: okahinaWave.url,
    alt: "Vue aérienne d’une structure flottante avec piscine à vagues, plateforme centrale arborée et zones de détente, sur une rivière.",
    description:
      "Gestion des comptes Twitter et LinkedIn, blog et interviews d’influenceurs surf : 1 500 personnes atteintes chaque semaine, 2 000 visiteurs uniques sur le blog et 50 000 fans via 10 influenceurs.",
    internal: "okahina-wave",
  },
  {
    name: "Study & Co",
    image: studyCo.url,
    alt: "Groupe de quatre personnes souriantes posant devant deux sapins de Noël en ville.",
    description:
      "Plateforme qui digitalise l’onboarding des étudiant·es pour 20 % de conversion en plus et 260 h de demandes en moins dans les écoles. Nous avons structuré leur marque et leur communication autour de ces atouts.",
    external: "https://studynco.com/",
  },
  {
    name: "Mira",
    image: mira.url,
    alt: "Huiles de beauté naturelles en flacons avec pipettes, marque Mira, avec un bâton de lèvres et le texte 'VIRAL', fond beige.",
    description:
      "Huiles naturelles, non raffinées, récoltées en France et à Madagascar, avec une production française et une transparence totale. Nous avons structuré leur stratégie de marque pour mettre en avant leurs valeurs (biodiversité, emballages réutilisables).",
    external: "https://mymira.fr/",
  },
  {
    name: "Black Stallion Trading",
    image: blackStallion.url,
    alt: "Groupe de cinq personnes assises autour d’une table de bureau avec des ordinateurs, dans une salle lumineuse.",
    description:
      "Une marque-showroom qui revendique le luxe conscient. Pour elle, nous avons imaginé une stratégie digitale complète, de l’identité visuelle à l’influence, afin d’accroître sa notoriété et créer une communauté engagée.",
    internal: "black-stallion-trading",
  },
  {
    name: "Ressources Emmanuelle Riboud",
    image: ressources.url,
    alt: "Deux chefs posent devant la vitrine d’une boutique de restauration à Paris, avec un néon 'Ressources' au-dessus d’eux.",
    description:
      "Changer la cantine pour changer le monde. Cette initiative repense l’alimentation scolaire avec du bon sens, du goût et beaucoup d’amour du vivant. Ensemble, nous avons posé les bases d’une stratégie de marque et de communication.",
    internal: "ressources",
  },
  {
    name: "We Slow",
    image: weSlow.url,
    alt: "Illustration de plusieurs jambes portant des pantalons colorés et des chaussures, tenant une bannière jaune avec le nom 'WESLOW'.",
    description:
      "Accélérateur de marques de mode écoresponsables, WeSlow soutient une nouvelle génération de créateur·ices engagé·es. Nous avons animé un atelier pour structurer leur plan de communication et clarifier leur stratégie de visibilité.",
    external: "https://www.instagram.com/weslow.fr/",
  },
  {
    name: "Jean Belgueule",
    image: jeanBelgueule.url,
    alt: "Deux tubes de crème de Jean Belgueule, l’un rouge et l’autre bleu, posés sur une surface colorée devant un fond de graffiti.",
    description:
      "Une marque de soins pour hommes qui assume la simplicité et l’éco-responsabilité. Nous l’avons accompagnée pour structurer leur présence digitale et construire une image cohérente et sensible : storytelling, identité visuelle et calendrier social media.",
    internal: "jean-belgueule",
  },
  {
    name: "Essential Oil Supplies",
    image: essentialOilSupplies.url,
    alt: "Deux petits flacons en verre avec bouchons en liège contenant des huiles essentielles, avec des fleurs de prairie en arrière-plan.",
    description:
      "L’e-shop des passionné·es d’aromathérapie : accessoires et contenus pour créer ses propres remèdes. Notre mission ? Gérer la stratégie de leur compte Instagram et fédérer une communauté autour du DIY et des bienfaits des huiles essentielles.",
    external:
      "https://eu.eosupplies.com/?shpxid=7615bb2f-a8cb-4f18-9c95-7a1be7f0605b",
  },
  {
    name: "Bruno Zana",
    image: brunoZana.url,
    alt: "Groupe de personnes dans un café, équipées de lunettes et d’instruments optiques, faisant des expériences liées à la vision.",
    description:
      "Opticien indépendant à Paris, il sélectionne des lunettes de créateurs et accompagne ses clients avec soin. Nous avons retravaillé son branding et sa stratégie de communication : site élégant, manifeste de marque et contenus pédagogiques.",
    external: "https://www.brunozanaopticiens.com/",
  },
  {
    name: "Atelier des lunettes",
    image: atelierDesLunettes.url,
    alt: "Groupe de sept jeunes adultes posant ensemble dans une pièce avec des étagères à lunettes en arrière-plan.",
    description:
      "Boutique de lunettes de créateurs qui voulait franchir un cap. Nous avons renforcé sa présence sur Instagram, Facebook et LinkedIn, refondu son site web et rédigé un manifeste pour mettre en lumière ses valeurs. Résultat ? +46 % de reach social, première page SEO et +2 000 followers.",
    internal: "atelier-des-lunettes",
  },
  {
    name: "My Pilates World",
    image: myPilatesWorld.url,
    alt: "Trois femmes assises sur des marches extérieures, souriant et riant, partageant un moment convivial.",
    description:
      "Plateforme bien-être née du désir de proposer l’expérience du studio à la maison. Sa fondatrice, ancienne danseuse, partage passion et expertise via des cours en ligne. Nous avons élaboré une stratégie globale : positionnement, réseaux sociaux, email marketing et création de contenus.",
    external: "https://www.nowadaysagency.com/my-pilates-world",
  },
  {
    name: "Belle.",
    image: belle.url,
    alt: "Galerie de neuf portraits de femmes de différentes origines ethniques sur un fond rose clair.",
    description:
      "Cosmétiques bio, vegan et fabriqués en France. Leur mission : révéler la beauté naturelle avec des soins visage certifiés. Nous les avons aidés à travailler leur branding et leur stratégie Instagram pour incarner une beauté éthique et désirable.",
    external: "https://www.instagram.com/belle._paris/",
  },
  {
    name: "Rose Donald",
    image: roseDonald.url,
    alt: "Salon de coiffure avec deux chaises, deux miroirs ronds, un vase de fleurs au centre et des décorations murales.",
    description:
      "Maison capillaire nichée dans un passage du Marais, elle propose des rituels de soin performants et sur-mesure, inspirée par la nature et les fleurs. Nous avons structuré sa stratégie de marque et sa présence en ligne (site web, Insta, Influence…).",
    external: "https://www.instagram.com/rosedonaldparis/?hl=fr",
  },
  {
    name: "Elvezia",
    image: elvezia.url,
    alt: "Chocolats Elvezia mis en scène dans une nature morte gourmande.",
    description:
      "Elvezia vendait du chocolat. On en a fait une marque. Repositionnement stratégique, identité visuelle et sales enablement pour le partenaire premium des artisans de bouche.",
    external: "https://www.nowadaysagency.com/elvezia",
  },
  {
    name: "La prochaine aire",
    image: laProchaineAire.url,
    alt: "Tiers-lieu La prochaine aire installé dans une ancienne maison éclusière au bord de l’Yonne.",
    description:
      "Tiers-lieu associatif installé dans une ancienne maison éclusière, au bord de l’Yonne. Nous avons accompagné le lancement de sa communication (storytelling, relations presse, Instagram), avec un article dans Brut et plusieurs posts devenus viraux.",
    external:
      "https://linktr.ee/la_prochaine_aire",
  },
];

function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink">
          Associations, ONG & marques engagées
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-ink md:text-6xl lg:text-7xl">
          Ils nous ont fait <em className="text-rose-dark">confiance</em>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl font-mono text-base text-ink md:text-lg">
          Une sélection de projets créatifs et engagés (associations, ONG,
          start-up et entreprises responsables et éthiques) que nous avons
          accompagnés avec passion.
        </p>
      </div>
    </section>
  );
}

function EtudesGrid() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => {
            const inner = (
              <>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-sm bg-rose-soft">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <h2 className="mt-5 font-serif text-2xl leading-tight text-ink">
                  {p.name}
                </h2>
                <p className="mt-3 font-mono text-sm leading-relaxed text-ink">
                  {p.description}
                </p>
              </>
            );
            if (p.internal) {
              return (
                <Link
                  key={p.name}
                  to={`/etudes/${p.internal}`}
                  className="group flex flex-col"
                >
                  {inner}
                </Link>
              );
            }
            if (p.external) {
              return (
                <a
                  key={p.name}
                  href={p.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col"
                >
                  {inner}
                </a>
              );
            }
            return (
              <article key={p.name} className="flex flex-col">
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Page() {
  return (
    <SiteLayout>
      <Hero />
      <EtudesGrid />
      <FinalCtaSection />
    </SiteLayout>
  );
}
