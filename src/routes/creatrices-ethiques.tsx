import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/da/PageHero";
import { DaLayout } from "@/components/da/DaLayout";
import { CtaFinal } from "@/components/da/CtaFinal";
import { VichyBand } from "@/components/da/VichyBand";

export const Route = createFileRoute("/creatrices-ethiques")({
  head: () => ({
    meta: [
      { title: "Créatrices éthiques | Études de cas | Nowadays" },
      {
        name: "description",
        content:
          "Une sélection de projets créatifs et engagés (mode, design, beauté, bien-être, culture) que nous avons accompagnés avec passion.",
      },
      {
        property: "og:title",
        content: "Créatrices éthiques | Études de cas | Nowadays",
      },
      {
        property: "og:description",
        content:
          "Marques engagées, artisanes et créatrices : découvrez les projets que nous avons accompagnés.",
      },
      { property: "og:url", content: absoluteUrl("/creatrices-ethiques") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/creatrices-ethiques") }],
  }),
  component: Page,
});

import blackStallion from "@/assets/etudes/black-stallion-trading.webp.asset.json";
import fatMoose from "@/assets/etudes/fat-moose.jpg.asset.json";
import ressources from "@/assets/etudes/ressources.png.asset.json";
import jeanBelgueule from "@/assets/etudes/jean-belgueule.jpg.asset.json";
import religionClothing from "@/assets/etudes/religion-clothing.png.asset.json";
import cawa from "@/assets/etudes/cawa.png.asset.json";
import samanthaPorpiglia from "@/assets/etudes/samantha-porpiglia.webp.asset.json";
import stillNordic from "@/assets/etudes/still-nordic.jpg.asset.json";
import napperon from "@/assets/etudes/napperon.jpg.asset.json";
import weSlow from "@/assets/etudes/we-slow.jpg.asset.json";
import essentialOilSupplies from "@/assets/etudes/essential-oil-supplies.jpg.asset.json";
import myPilatesWorld from "@/assets/etudes/my-pilates-world.jpg.asset.json";
import belle from "@/assets/etudes/belle.jpg.asset.json";
import roseDonald from "@/assets/etudes/rose-donald.jpg.asset.json";
import boomBoomDance from "@/assets/etudes/boom-boom-dance.jpg.asset.json";
import mazehParis from "@/assets/etudes/mazeh-paris.webp.asset.json";
import atelierTiket from "@/assets/etudes/atelier-tiket.webp.asset.json";
import laSlowFashionitude from "@/assets/etudes/la-slow-fashionitude.png.asset.json";
import intiPersonalShopper from "@/assets/etudes/inti-personal-shopper.jpg.asset.json";
import ecoleFemmesMassoba from "@/assets/etudes/ecole-femmes-massoba.png.asset.json";
import sophieBrillouet from "@/assets/etudes/sophie-brillouet.webp.asset.json";
import oliEmoi from "@/assets/etudes/oli-emoi.jpg.asset.json";
import commeUnRubanDetoile from "@/assets/etudes/comme-un-ruban-detoile.jpg.asset.json";
import jonesie from "@/assets/etudes/jonesie.jpg.asset.json";
import hoplaStudio from "@/assets/etudes/hopla-studio.png.asset.json";
import terraYMar from "@/assets/etudes/terra-y-mar.png.asset.json";
import fileTonCuir from "@/assets/etudes/file-ton-cuir.jpg.asset.json";
import yzaHandmade from "@/assets/etudes/yza-handmade.webp.asset.json";
import tiMatelot from "@/assets/etudes/ti-matelot.jpg.asset.json";
import awqa from "@/assets/etudes/awqa.jpg.asset.json";
import pelineCoachSopk from "@/assets/etudes/peline-coach-sopk.jpg.asset.json";
import leJardinParfume from "@/assets/etudes/le-jardin-parfume.webp.asset.json";
import flanelleAtelierStyliste from "@/assets/etudes/flanelle-atelier-styliste.jpg.asset.json";
import ombelineMares from "@/assets/etudes/ombeline-mares.jpg.asset.json";
import { absoluteUrl } from "@/lib/site";
import { imageSize } from "@/lib/image-sizes";

type Project = {
  name: string;
  description: string;
  image?: string;
  slug?: string;
  externalUrl?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Black Stallion Trading",
    slug: "black-stallion-trading",
    image: blackStallion.url,
    description:
      "Une marque-showroom qui revendique le luxe conscient. Stratégie digitale complète, identité visuelle et influence pour fédérer une communauté engagée.",
  },
  {
    name: "Fat Moose",
    slug: "fat-moose",
    image: fatMoose.url,
    description:
      "Marque danoise outdoor au design minimaliste. Stratégie de contenu, direction artistique et campagnes d'influence pour ancrer un univers entre aventure et élégance nordique.",
  },
  {
    name: "Ressources Emmanuelle Riboud",
    slug: "ressources",
    image: ressources.url,
    description:
      "Changer la cantine pour changer le monde. Pose des bases d'une stratégie de marque et de communication autour d'une alimentation scolaire pleine de sens.",
  },
  {
    name: "Jean Belgueule",
    slug: "jean-belgueule",
    image: jeanBelgueule.url,
    description:
      "Soins pour hommes simples et éco-responsables. Structuration de la présence digitale : storytelling, identité visuelle et calendrier social media.",
  },
  {
    name: "Religion Clothing",
    slug: "religion-clothing",
    image: religionClothing.url,
    description:
      "Marque britannique née dans les années 90, inspirée par la scène musicale. Campagnes d'influence et événements pour porter un univers audacieux et décalé.",
  },
  {
    name: "Cawa",
    image: cawa.url,
    externalUrl: "https://cawa.me/",
    description:
      "Sacs en cuir indépendants qui célèbrent l'individualité. Positionnement streetwear, ligne éditoriale et collaborations pour incarner une vision urbaine et durable.",
  },
  {
    name: "Samantha Porpiglia",
    image: samanthaPorpiglia.url,
    externalUrl: "https://samanthaporpiglia.com/",
    description:
      "Lovecoach n°1 pour femmes en France. Fondations de branding : identité de marque, message et positionnement.",
  },
  {
    name: "Still Nordic",
    slug: "still-nordic",
    image: stillNordic.url,
    description:
      "Minimalisme scandinave et cuir d'exception. Présence digitale cohérente et élégante : réseaux, e-commerce et influence.",
  },
  {
    name: "Napperon",
    image: napperon.url,
    externalUrl: "https://napperon.fr/",
    description:
      "Lingerie upcyclée qui célèbre une féminité libre et consciente. Positionnement, stratégie de communication et fondations de marque dans le cadre de la Now Academy.",
  },
  {
    name: "We Slow",
    image: weSlow.url,
    externalUrl: "https://www.instagram.com/weslow.fr/",
    description:
      "Accélérateur de marques de mode écoresponsables. Atelier pour structurer leur plan de communication et clarifier leur stratégie de visibilité.",
  },
  {
    name: "Essential Oil Supplies",
    image: essentialOilSupplies.url,
    externalUrl: "https://eu.eosupplies.com/",
    description:
      "E-shop des passionné·es d'aromathérapie. Stratégie Instagram et animation d'une communauté autour du DIY et des huiles essentielles.",
  },
  {
    name: "My Pilates World",
    slug: "my-pilates-world",
    image: myPilatesWorld.url,
    description:
      "Plateforme bien-être qui amène l'expérience du studio à la maison. Positionnement, social media, email marketing et création de contenus.",
  },
  {
    name: "Belle.",
    image: belle.url,
    externalUrl: "https://www.instagram.com/belle._paris/",
    description:
      "Cosmétiques bio, vegan et fabriqués en France. Branding et stratégie Instagram pour incarner une beauté éthique et désirable.",
  },
  {
    name: "Rose Donald",
    image: roseDonald.url,
    externalUrl: "https://www.instagram.com/rosedonaldparis/",
    description:
      "Maison capillaire nichée dans le Marais, inspirée par la nature. Stratégie de marque et présence en ligne (site, Instagram, influence).",
  },
  {
    name: "Boom Boom Dance",
    image: boomBoomDance.url,
    externalUrl: "https://www.boomboum.fr/",
    description:
      "Cours de danse avec bébé qui transforment le post-partum en moments de joie. Structuration complète de la communication via la Now Academy.",
  },
  {
    name: "Mazeh Paris",
    image: mazehParis.url,
    description:
      "Atelier d'upcycling qui redonne vie aux textiles oubliés. Pose des bases de sa visibilité avec la Now Academy.",
  },
  {
    name: "Atelier Tiket",
    image: atelierTiket.url,
    externalUrl: "https://www.atelier-tiket.fr/",
    description:
      "Créatrice de mode durable qui dessine des pièces intemporelles. Accompagnée par la Now Academy pour communiquer avec authenticité.",
  },
  {
    name: "La Slow Fashionitude",
    image: laSlowFashionitude.url,
    description:
      "Plateforme dédiée à la slow fashion. Structuration de la communication et de la communauté via la Now Academy.",
  },
  {
    name: "Inti Personal Shopper",
    image: intiPersonalShopper.url,
    externalUrl: "https://www.instagram.com/intipersonalshopper/",
    description:
      "Personal shopper éco-responsable qui guide vers une garde-robe consciente. Now Academy pour structurer son offre et sa communication.",
  },
  {
    name: "L'école des femmes de Massoba",
    image: ecoleFemmesMassoba.url,
    externalUrl: "https://www.lecoledesfemmesdemassoba.com/",
    description:
      "Espace d'accompagnement sur mesure pour les femmes qui veulent affirmer leur présence. Now Academy pour faire rayonner sa mission.",
  },
  {
    name: "Sophie Brillouet",
    image: sophieBrillouet.url,
    externalUrl: "https://www.instagram.com/sophie_brillouet/",
    description:
      "Sculptrice de coquillages et artisane d'art. Now Academy pour rendre visible un univers singulier et poétique.",
  },
  {
    name: "Oli Emoi",
    image: oliEmoi.url,
    externalUrl: "https://www.oliemoi.com/",
    description:
      "Sacs à main en cuir de poisson, matière noble issue de la valorisation des déchets. Now Academy pour révéler ce savoir-faire rare.",
  },
  {
    name: "Comme un ruban d'étoile",
    image: commeUnRubanDetoile.url,
    externalUrl: "https://www.instagram.com/commeunrubandetoiles/",
    description:
      "Bijoux au fil d'argent, délicats et lumineux. Now Academy pour faire briller une marque artisane.",
  },
  {
    name: "Jonesie",
    image: jonesie.url,
    externalUrl: "https://studio.jonesie.fr/",
    description:
      "Illustratrice et typographe franco-américaine basée à Paris. Stratégie de communication digitale pour des lettrages et illustrations « super cute ».",
  },
  {
    name: "Hopla Studio",
    image: hoplaStudio.url,
    externalUrl: "https://hoplastudio.com/",
    description:
      "Studio de design culinaire qui sublime les produits en expériences visuelles gourmandes. Now Academy pour développer sa stratégie digitale.",
  },
  {
    name: "Terra y mar",
    image: terraYMar.url,
    externalUrl: "https://terraemar.shop/",
    description:
      "Sportwear éthique qui allie performance, style et respect du vivant. Now Academy pour une communication alignée avec ses valeurs.",
  },
  {
    name: "File ton cuir",
    image: fileTonCuir.url,
    externalUrl: "https://filetoncuir.com/",
    description:
      "Laetitia, sculptrice sur cuir qui transforme la matière brute en pièces uniques. Now Academy pour raconter son savoir-faire.",
  },
  {
    name: "Yza Handmade",
    image: yzaHandmade.url,
    externalUrl: "https://yza-shop.com/",
    description:
      "Vestiaire marocain réinventé : silhouettes fluides et accessoires intemporels fabriqués localement. Now Academy pour développer sa présence digitale.",
  },
  {
    name: "Ti Matelot",
    image: tiMatelot.url,
    description:
      "Vêtements éthiques pour enfants qui allient confort, durabilité et style. Now Academy pour toucher les bonnes familles.",
  },
  {
    name: "Awqa",
    image: awqa.url,
    externalUrl: "https://www.awqa.fr/",
    description:
      "Broderie artisanale et maroquinerie de haute qualité, entre chic parisien et savoir-faire ancestral des Andes. Now Academy pour raconter cette histoire unique.",
  },
  {
    name: "Péline Coach Sportive SOPK",
    image: pelineCoachSopk.url,
    externalUrl: "https://www.pelinecoachsopk.com/",
    description:
      "Coach sportive spécialisée dans l'accompagnement des femmes atteintes du SOPK. Now Academy pour communiquer son expertise avec justesse.",
  },
  {
    name: "Le Jardin Parfumé Marseille",
    image: leJardinParfume.url,
    externalUrl: "https://www.lejardinparfume.fr/",
    description:
      "Lingerie fine et parfums de niche dans un univers sensuel et raffiné. Now Academy pour cultiver sa communauté avec élégance.",
  },
  {
    name: "Flanelle, l'Atelier de Styliste",
    slug: "flanelle",
    image: flanelleAtelierStyliste.url,
    description:
      "Univers magnifique mais invisible. Pose des fondations d'une marque d'upcycling joyeuse, lisible et désirable, sans trahir son ADN artisanal.",
  },
  {
    name: "Ombeline Mares",
    slug: "ombeline-mares",
    image: ombelineMares.url,
    description:
      "Joaillière au savoir-faire exceptionnel. Positionnement, manifeste éthique, direction artistique et stratégie de contenu : le bijou devenu langage.",
  },
];

function Hero() {
  return (
    <PageHero
      vichy="jaune"
      pill="Créateur·ices lifestyle éthiques"
      pillTon="bordeaux"
      titre={
        <>
          Créatrices et artisanes nous ont fait <em>confiance</em>
        </>
      }
      chapo={
        <>
          Mode, design, beauté, bien-être, culture : voici ce qu'on a construit avec elles, et ce
          que ça a donné.
        </>
      }
    />
  );
}

function EtudesGrid() {
  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => {
            const inner = (
              <>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-sm bg-rose-pale">
                  {p.image && (
                    <img
                      src={p.image}
                      {...imageSize(p.image)}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                </div>
                <h2 className="mt-5 font-titre text-2xl leading-tight text-encre">{p.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-encre">{p.description}</p>
                {(p.slug || p.externalUrl) && (
                  <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-framboise transition-all group-hover:gap-3">
                    Voir le projet
                    <span aria-hidden="true">{p.externalUrl ? "↗" : "→"}</span>
                  </span>
                )}
              </>
            );
            if (p.slug) {
              return (
                <a key={p.name} href={`/etudes/${p.slug}`} className="group flex flex-col">
                  {inner}
                </a>
              );
            }
            if (p.externalUrl) {
              return (
                <a
                  key={p.name}
                  href={p.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visiter le site de ${p.name} (nouvel onglet)`}
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
    <DaLayout>
      <Hero />
      <EtudesGrid />
      <VichyBand />
      <CtaFinal />
    </DaLayout>
  );
}
