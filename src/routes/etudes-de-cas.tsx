import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";

export const Route = createFileRoute("/etudes-de-cas")({
  head: () => ({
    meta: [
      { title: "Études de cas — Créateur·ices éthiques | Nowadays" },
      {
        name: "description",
        content:
          "Une sélection de projets créatifs et engagés (mode, design, beauté, bien-être, culture) que nous avons accompagnés avec passion.",
      },
      {
        property: "og:title",
        content: "Études de cas — Créateur·ices éthiques | Nowadays",
      },
      {
        property: "og:description",
        content:
          "Marques engagées, artisanes et créatrices : découvrez les projets que nous avons accompagnés.",
      },
    ],
    links: [{ rel: "canonical", href: "/etudes-de-cas" }],
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

type Project = {
  name: string;
  description: string;
  image?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Black Stallion Trading",
    description:
      "Une marque-showroom qui revendique le luxe conscient. Stratégie digitale complète, identité visuelle et influence pour fédérer une communauté engagée.",
  },
  {
    name: "Fat Moose",
    description:
      "Marque danoise outdoor au design minimaliste. Stratégie de contenu, direction artistique et campagnes d'influence pour ancrer un univers entre aventure et élégance nordique.",
  },
  {
    name: "Ressources Emmanuelle Riboud",
    description:
      "Changer la cantine pour changer le monde. Pose des bases d'une stratégie de marque et de communication autour d'une alimentation scolaire pleine de sens.",
  },
  {
    name: "Jean Belgueule",
    description:
      "Soins pour hommes simples et éco-responsables. Structuration de la présence digitale : storytelling, identité visuelle et calendrier social media.",
  },
  {
    name: "Religion Clothing",
    description:
      "Marque britannique née dans les années 90, inspirée par la scène musicale. Campagnes d'influence et événements pour porter un univers audacieux et décalé.",
  },
  {
    name: "Cawa",
    description:
      "Sacs en cuir indépendants qui célèbrent l'individualité. Positionnement streetwear, ligne éditoriale et collaborations pour incarner une vision urbaine et durable.",
  },
  {
    name: "Samantha Porpiglia",
    description:
      "Lovecoach n°1 pour femmes en France. Fondations de branding : identité de marque, message et positionnement.",
  },
  {
    name: "Still Nordic",
    description:
      "Minimalisme scandinave et cuir d'exception. Présence digitale cohérente et élégante : réseaux, e-commerce et influence.",
  },
  {
    name: "Napperon",
    description:
      "Lingerie upcyclée qui célèbre une féminité libre et consciente. Positionnement, stratégie de communication et fondations de marque dans le cadre de la Now Academy.",
  },
  {
    name: "We Slow",
    description:
      "Accélérateur de marques de mode écoresponsables. Atelier pour structurer leur plan de communication et clarifier leur stratégie de visibilité.",
  },
  {
    name: "Essential Oil Supplies",
    description:
      "E-shop des passionné·es d'aromathérapie. Stratégie Instagram et animation d'une communauté autour du DIY et des huiles essentielles.",
  },
  {
    name: "My Pilates World",
    description:
      "Plateforme bien-être qui amène l'expérience du studio à la maison. Positionnement, social media, email marketing et création de contenus.",
  },
  {
    name: "Belle.",
    description:
      "Cosmétiques bio, vegan et fabriqués en France. Branding et stratégie Instagram pour incarner une beauté éthique et désirable.",
  },
  {
    name: "Rose Donald",
    description:
      "Maison capillaire nichée dans le Marais, inspirée par la nature. Stratégie de marque et présence en ligne (site, Instagram, influence).",
  },
  {
    name: "Boom Boom Dance",
    description:
      "Cours de danse avec bébé qui transforment le post-partum en moments de joie. Structuration complète de la communication via la Now Academy.",
  },
  {
    name: "Mazeh Paris",
    description:
      "Atelier d'upcycling qui redonne vie aux textiles oubliés. Pose des bases de sa visibilité avec la Now Academy.",
  },
  {
    name: "Atelier Tiket",
    description:
      "Créatrice de mode durable qui dessine des pièces intemporelles. Accompagnée par la Now Academy pour communiquer avec authenticité.",
  },
  {
    name: "La Slow Fashionitude",
    description:
      "Plateforme dédiée à la slow fashion. Structuration de la communication et de la communauté via la Now Academy.",
  },
  {
    name: "Inti Personal Shopper",
    description:
      "Personal shopper éco-responsable qui guide vers une garde-robe consciente. Now Academy pour structurer son offre et sa communication.",
  },
  {
    name: "L'école des femmes de Massoba",
    description:
      "Espace d'accompagnement sur mesure pour les femmes qui veulent affirmer leur présence. Now Academy pour faire rayonner sa mission.",
  },
  {
    name: "Sophie Brillouet",
    description:
      "Sculptrice de coquillages et artisane d'art. Now Academy pour rendre visible un univers singulier et poétique.",
  },
  {
    name: "Oli Emoi",
    description:
      "Sacs à main en cuir de poisson, matière noble issue de la valorisation des déchets. Now Academy pour révéler ce savoir-faire rare.",
  },
  {
    name: "Comme un ruban d'étoile",
    description:
      "Bijoux au fil d'argent, délicats et lumineux. Now Academy pour faire briller une marque artisane.",
  },
  {
    name: "Jonesie",
    description:
      "Illustratrice et typographe franco-américaine basée à Paris. Stratégie de communication digitale pour des lettrages et illustrations « super cute ».",
  },
  {
    name: "Hopla Studio",
    description:
      "Studio de design culinaire qui sublime les produits en expériences visuelles gourmandes. Now Academy pour développer sa stratégie digitale.",
  },
  {
    name: "Terra y mar",
    description:
      "Sportwear éthique qui allie performance, style et respect du vivant. Now Academy pour une communication alignée avec ses valeurs.",
  },
  {
    name: "File ton cuir",
    description:
      "Laetitia, sculptrice sur cuir qui transforme la matière brute en pièces uniques. Now Academy pour raconter son savoir-faire.",
  },
  {
    name: "Yza Handmade",
    description:
      "Vestiaire marocain réinventé : silhouettes fluides et accessoires intemporels fabriqués localement. Now Academy pour développer sa présence digitale.",
  },
  {
    name: "Ti Matelot",
    description:
      "Vêtements éthiques pour enfants qui allient confort, durabilité et style. Now Academy pour toucher les bonnes familles.",
  },
  {
    name: "Awqa",
    description:
      "Broderie artisanale et maroquinerie de haute qualité, entre chic parisien et savoir-faire ancestral des Andes. Now Academy pour raconter cette histoire unique.",
  },
  {
    name: "Péline Coach Sportive SOPK",
    description:
      "Coach sportive spécialisée dans l'accompagnement des femmes atteintes du SOPK. Now Academy pour communiquer son expertise avec justesse.",
  },
  {
    name: "Le Jardin Parfumé Marseille",
    description:
      "Lingerie fine et parfums de niche dans un univers sensuel et raffiné. Now Academy pour cultiver sa communauté avec élégance.",
  },
  {
    name: "Flanelle, l'Atelier de Styliste",
    description:
      "Univers magnifique mais invisible. Pose des fondations d'une marque d'upcycling joyeuse, lisible et désirable, sans trahir son ADN artisanal.",
  },
  {
    name: "Ombeline Mares",
    description:
      "Joaillière au savoir-faire exceptionnel. Positionnement, manifeste éthique, direction artistique et stratégie de contenu : le bijou devenu langage.",
  },
];

function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink">
          Créateur·ices lifestyle éthiques
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-ink md:text-6xl lg:text-7xl">
          Ils nous ont fait <em className="text-rose-dark">confiance</em>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl font-mono text-base text-ink md:text-lg">
          Une sélection de projets créatifs et engagés (mode, design, beauté,
          bien-être, culture) que nous avons accompagnés avec passion.
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
          {PROJECTS.map((p) => (
            <article key={p.name} className="flex flex-col">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-sm bg-rose-soft" />
              <h2 className="mt-5 font-serif text-2xl leading-tight text-ink">
                {p.name}
              </h2>
              <p className="mt-3 font-mono text-sm leading-relaxed text-ink">
                {p.description}
              </p>
            </article>
          ))}
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
