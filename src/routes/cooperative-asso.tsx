import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import l214Logo from "@/assets/coop-logos/l214.png.asset.json";
import cooperativeOasisLogo from "@/assets/coop-logos/cooperative-oasis.png.asset.json";
import ensadPslLogo from "@/assets/coop-logos/ensad-psl.jpg.asset.json";
import emmausDefiLogo from "@/assets/coop-logos/emmaus-defi.png.asset.json";
import seaShepherdLogo from "@/assets/coop-logos/sea-shepherd.png.asset.json";
import laetitiaPhoto from "@/assets/coop/laetitia.jpg.asset.json";
import imgEnsad from "@/assets/etudes-pro/ensad.jpg.asset.json";
import imgSeaShepherd from "@/assets/etudes-pro/sea-shepherd.jpg.asset.json";
import imgDecathlon from "@/assets/etudes-pro/decathlon-quechua.jpg.asset.json";
import imgEmmaus from "@/assets/etudes-pro/emmaus-defi.jpg.asset.json";
import imgClipIt from "@/assets/etudes-pro/clip-it.jpg.asset.json";
import imgL214 from "@/assets/etudes-pro/l214.jpg.asset.json";
import imgCoopOasis from "@/assets/etudes-pro/cooperative-oasis.jpg.asset.json";
import imgOkahina from "@/assets/etudes-pro/okahina-wave.jpg.asset.json";
import imgStudyCo from "@/assets/etudes-pro/study-co.webp.asset.json";
import imgMira from "@/assets/etudes-pro/mira.jpg.asset.json";
import imgBlackStallion from "@/assets/etudes/black-stallion-trading.webp.asset.json";
import imgRessources from "@/assets/etudes/ressources.png.asset.json";
import imgWeSlow from "@/assets/etudes/we-slow.jpg.asset.json";
import imgJeanBelgueule from "@/assets/etudes/jean-belgueule.jpg.asset.json";
import imgEssentialOil from "@/assets/etudes/essential-oil-supplies.jpg.asset.json";
import imgBrunoZana from "@/assets/etudes-pro/bruno-zana.jpg.asset.json";
import imgAtelierLunettes from "@/assets/etudes-pro/atelier-des-lunettes.webp.asset.json";
import imgMyPilates from "@/assets/etudes/my-pilates-world.jpg.asset.json";
import imgBelle from "@/assets/etudes/belle.jpg.asset.json";
import imgRoseDonald from "@/assets/etudes/rose-donald.jpg.asset.json";
import imgLaProchaineAire from "@/assets/etudes-pro/la-prochaine-aire.jpg.asset.json";

const CALENDLY_URL =
  "https://calendly.com/laetitia-mattioli/appel-decouverte-atelier";

export const Route = createFileRoute("/cooperative-asso")({
  head: () => ({
    meta: [
      { title: "Ton agency de com — Coopératives & assos | Nowadays" },
      {
        name: "description",
        content:
          "Une agence de communication pour coopératives, associations et structures engagées. On prend en charge stratégie, contenus et canaux. À partir de 2 000 €.",
      },
      {
        property: "og:title",
        content: "Ton agency de com — Coopératives & assos | Nowadays",
      },
      {
        property: "og:description",
        content:
          "Déléguez votre com' à une agence qui partage vos valeurs. Réactive, autonome, efficace.",
      },
    ],
    links: [{ rel: "canonical", href: "/cooperative-asso" }],
  }),
  component: Page,
});

function Cta({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 font-mono text-sm uppercase tracking-[0.16em] transition-colors";
  const cls =
    variant === "primary"
      ? `${base} bg-rose-dark text-cream hover:bg-bordeaux`
      : `${base} border border-ink text-ink hover:bg-ink hover:text-cream`;
  return (
    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <h1 className="font-serif text-4xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
          Déléguez <em>votre com'</em> et concentrez-vous sur l'essentiel.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl font-mono text-base text-ink md:text-lg">
          Une communication pro, réactive et stylée pour les structures qui ont mieux
          à faire que de galérer sur Instagram.
        </p>
        <div className="mt-10">
          <Cta>Réservez votre appel découverte</Cta>
        </div>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-ink">
          ✨ Appel gratuit • 30 minutes • Sans engagement
        </p>
      </div>
    </section>
  );
}

const CLIENT_LOGOS = [
  { name: "L214", src: l214Logo.url },
  { name: "Coopérative Oasis", src: cooperativeOasisLogo.url },
  { name: "École des Arts Décoratifs — PSL", src: ensadPslLogo.url },
  { name: "Emmaüs Défi", src: emmausDefiLogo.url },
  { name: "Sea Shepherd", src: seaShepherdLogo.url },
];

function ClientsBand() {
  return (
    <section className="bg-rose-light py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-serif text-xl italic text-ink md:text-2xl">
          Quelques projets qui nous ont fait confiance
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {CLIENT_LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="h-16 w-auto object-contain md:h-20"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const PROBLEM_POINTS = [
  "L'équipe est débordée, la com' passe toujours après",
  "Vous postez quand vous pouvez, sans vraie stratégie",
  "Vous avez besoin de quelqu'un qui fasse, pas juste qui conseille",
  "Et surtout : vous n'avez pas le temps de relire, corriger, valider 15 versions",
];

function ProblemSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
          Vous portez un projet qui a du sens. Mais <em>la com'</em>, ça coince.
        </h2>
        <p className="mt-8 font-mono text-base text-ink leading-relaxed">
          Vous êtes une coopérative, une association ou une PME engagée ? Votre
          mission est claire, votre équipe est motivée.
        </p>
        <p className="mt-4 font-mono text-base text-ink leading-relaxed">
          Mais côté communication digitale, c'est une autre histoire :
        </p>
        <ul className="mt-6 space-y-3 font-mono text-base text-ink">
          {PROBLEM_POINTS.map((p) => (
            <li key={p} className="flex gap-3">
              <span className="text-rose-dark">→</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-mono text-base text-ink leading-relaxed">
          <strong className="font-semibold">
            Vous avez besoin de déléguer à quelqu'un de confiance. Quelqu'un qui
            comprend votre projet, qui va vite, et qui livre du travail propre.
          </strong>
        </p>
        <div className="mt-10">
          <Cta>Réserver mon appel découverte (gratuit)</Cta>
        </div>
      </div>
    </section>
  );
}

function LaetitiaIntroSection() {
  return (
    <section className="bg-rose-light py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-rose-dark">
            Je vous propose de prendre en main votre communication pour que vous
            respiriez
          </p>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
            Parce que gérer une structure engagée, c'est déjà un job à temps plein
          </h2>
          <p className="mt-8 font-mono text-base text-ink leading-relaxed">
            Je suis Laetitia, fondatrice de Nowadays Agency. Depuis 2017,
            j'accompagne des structures engagées à devenir plus visibles sur le
            web, sans trahir leurs valeurs.
          </p>
          <p className="mt-4 font-mono text-base text-ink leading-relaxed">
            Ce que je vous propose, c'est simple :{" "}
            <strong className="font-semibold">je fais pour vous.</strong>
          </p>
          <p className="mt-4 font-mono text-base text-ink leading-relaxed">
            Pas juste un audit qui finit dans un tiroir. Pas juste des{" "}
            <em>« recommandations stratégiques »</em> que personne n'applique.
            Mais :
          </p>
          <ul className="mt-6 space-y-3 font-mono text-base text-ink">
            <li className="flex gap-3">
              <span className="text-rose-dark">→</span>
              <span>Des contenus créés, rédigés, publiés</span>
            </li>
            <li className="flex gap-3">
              <span className="text-rose-dark">→</span>
              <span>Un site et des e-mails qui convertissent, des réseaux qui vivent</span>
            </li>
            <li className="flex gap-3">
              <span className="text-rose-dark">→</span>
              <span>Des campagnes qui font venir du monde à vos événements</span>
            </li>
            <li className="flex gap-3">
              <span className="text-rose-dark">→</span>
              <span>Et vous : tranquilles, concentrés sur votre mission</span>
            </li>
          </ul>
          <div className="mt-10">
            <Cta>Réserver mon appel découverte (gratuit)</Cta>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-ink">
            ✨ Appel gratuit • 30 minutes • Sans engagement
          </p>
        </div>
        <img
          src={laetitiaPhoto.url}
          alt="Laetitia Mattioli, fondatrice de Nowadays Agency"
          loading="lazy"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}

const PILLARS = [
  {
    emoji: "💛",
    title: "Des prix accessibles",
    body: "Je ne suis pas une grosse agence avec des bureaux sur les Champs-Élysées. Mes tarifs sont pensés pour des structures comme les vôtres : entre 2 000 € et 20 000 € selon l'ampleur du projet. Vous payez pour du travail concret, pas pour financer un open space.",
  },
  {
    emoji: "🧡",
    title: "Réactive, autonome, et efficace",
    body: "Vous n'avez pas besoin de me relire 10 fois. Je comprends vite, je livre propre, je respecte les délais. Votre temps est précieux : je ne le gaspille pas.",
  },
  {
    emoji: "🩷",
    title: "Une com' qui donne envie",
    body: "Être éthique, ce n'est pas être ennuyeux. Je crée des communications belles, désirables, qui donnent envie de s'engager. Exit les visuels tristes en vert sapin et les discours culpabilisants. Place aux récits vraiment désirables.",
  },
];

function PourquoiTravaillerSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-3xl font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
          Pourquoi <em>travailler avec moi</em> plutôt qu'une grosse agence ?
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-2xl bg-background p-8">
              <div className="text-4xl">{p.emoji}</div>
              <h3 className="mt-6 font-serif text-2xl text-ink">{p.title}</h3>
              <p className="mt-4 font-mono text-sm text-ink leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#projets"
            className="inline-flex items-center justify-center rounded-full border border-ink px-8 py-4 font-mono text-sm uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Voir nos études de cas
          </a>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "1️⃣",
    title: "On se rencontre",
    body: "Un appel découverte de 30 minutes pour comprendre votre projet, vos objectifs, vos contraintes. Gratuit, sans engagement.",
  },
  {
    n: "2️⃣",
    title: "Je vous fais une proposition sur-mesure",
    body: "Pas de package générique. Un devis adapté à ce dont vous avez vraiment besoin, avec un planning clair.",
  },
  {
    n: "3️⃣",
    title: "On avance ensemble",
    body: "Je prends en main la partie com', vous validez les grandes lignes, et on fait avancer votre projet. Simple.",
  },
];

function ProcessSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
          Comment <em>ça se passe</em> ?
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.title}>
              <div className="text-3xl">{s.n}</div>
              <h3 className="mt-6 font-serif text-2xl text-ink">{s.title}</h3>
              <p className="mt-4 font-mono text-sm text-ink leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRESTATIONS = [
  {
    title: "Stratégie & cadrage",
    items: [
      "Audit de votre communication existante",
      "Définition de votre stratégie digitale",
      "Plan d'action sur 3, 6 ou 12 mois",
      "Positionnement et messages clés",
    ],
  },
  {
    title: "Réseaux sociaux & Influence",
    items: [
      "Création de contenus (visuels, textes, reels)",
      "Calendrier éditorial et planification",
      "Animation Instagram, LinkedIn, Pinterest",
      "Campagnes sponsorisées et stratégie d'influence",
    ],
  },
  {
    title: "Site web & SEO",
    items: [
      "Création ou refonte de site web",
      "Optimisation pour le référencement naturel",
      "Pages de vente et landing pages",
    ],
  },
  {
    title: "Emailing & événements",
    items: [
      "Campagnes newsletters",
      "Séquences d'emailing automatisées",
      "Communication événementielle (lancement, festival, conférence)",
    ],
  },
];

function PrestationsSection() {
  return (
    <section className="bg-rose-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
          Un accompagnement sur-mesure pour une{" "}
          <em>communication plus éthique</em>
        </h2>
        <p className="mt-8 font-mono text-base text-ink">
          Selon vos besoins et votre budget, je peux intervenir sur :
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {PRESTATIONS.map((p) => (
            <div key={p.title} className="rounded-2xl bg-background p-8">
              <h3 className="font-serif text-2xl text-ink">{p.title}</h3>
              <ul className="mt-6 space-y-2 font-mono text-sm text-ink">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-rose-dark">→</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    name: "École des Arts Décoratifs",
    desc: "Pour attirer du monde à l'exposition de Gérard Baudoin : réseaux sociaux, emailing ciblé et micro-influence — 700 visiteurs en une semaine, 5 articles, +100 clics vers l'événement.",
  },
  {
    name: "Sea Shepherd × Racines de Demain",
    desc: "Campagne #PlutôtQue pour corriger la perception et mobiliser les dons : un plan en 4 actes, des images d'archives pour limiter l'impact, des actions ciblées sur Twitter et Instagram.",
  },
  {
    name: "Decathlon × Quechua",
    desc: "Pour leur révolution circulaire (seconde main, réparation, location, recyclage), nous avons créé une campagne accessible pour expliquer l'initiative.",
  },
  {
    name: "Emmaüs Défi",
    desc: "Un atelier de personal branding d'une demi-journée pour humaniser la marque : 3× plus de contenus personnalisés et des équipes désormais à l'aise pour raconter leur histoire.",
  },
  {
    name: "Clip It",
    desc: "Jeu créatif à base de bouchons upcyclés. Nous avons aidé à raconter cette aventure ludique et écologique (SEO et Instagram).",
  },
  {
    name: "L214",
    desc: "Un camion immersif et 50 micro-influenceur·ses pour dénoncer l'élevage intensif et pousser LDC à signer l'European Chicken Commitment : 500 000 vues, +10 000 signatures.",
  },
  {
    name: "Coopérative Oasis",
    desc: "Un écosystème d'écolieux qui bâtissent un autre modèle de société. Stratégie de communication pour leur festival : identité, storytelling et community management.",
  },
  {
    name: "Okahina Wave",
    desc: "Gestion des comptes Twitter et LinkedIn, blog et interviews d'influenceurs surf : 1 500 personnes atteintes/semaine, 2 000 visiteurs uniques, 50 000 fans via 10 influenceurs.",
  },
  {
    name: "Study & Co",
    desc: "Plateforme qui digitalise l'onboarding des étudiant·es : +20 % de conversion, -260 h de demandes dans les écoles. Nous avons structuré leur marque autour de ces atouts.",
  },
  {
    name: "Mira",
    desc: "Huiles naturelles récoltées en France et à Madagascar, production française et transparence totale. Nous avons structuré leur stratégie de marque autour de leurs valeurs.",
  },
  {
    name: "Black Stallion Trading",
    desc: "Une marque-showroom qui revendique le luxe conscient. Stratégie digitale complète, de l'identité visuelle à l'influence, pour accroître sa notoriété.",
  },
  {
    name: "Ressources — Emmanuelle Riboud",
    desc: "Changer la cantine pour changer le monde. Repenser l'alimentation scolaire avec bon sens et amour du vivant. Bases d'une stratégie de marque et de communication.",
  },
  {
    name: "We Slow",
    desc: "Accélérateur de marques de mode écoresponsables. Atelier pour structurer leur plan de communication et clarifier leur stratégie de visibilité.",
  },
  {
    name: "Jean Belgueule",
    desc: "Soins pour hommes, simplicité et éco-responsabilité. Présence digitale structurée et image cohérente : storytelling, identité visuelle, calendrier social media.",
  },
  {
    name: "Essential Oil Supplies",
    desc: "L'e-shop des passionné·es d'aromathérapie. Stratégie Instagram pour fédérer une communauté autour du DIY et des bienfaits des huiles essentielles.",
  },
  {
    name: "Bruno Zana",
    desc: "Opticien indépendant à Paris : lunettes de créateurs et accompagnement sur-mesure. Branding et stratégie de communication : site élégant, manifeste et contenus pédagogiques.",
  },
  {
    name: "Atelier des lunettes",
    desc: "Boutique de lunettes de créateurs. Refonte site, présence Insta/FB/LinkedIn, manifeste : +46 % de reach social, 1ʳᵉ page SEO et +2 000 followers.",
  },
  {
    name: "My Pilates World",
    desc: "Plateforme bien-être née du désir de proposer l'expérience studio à la maison. Stratégie globale : positionnement, réseaux, email marketing et contenus.",
  },
  {
    name: "Belle.",
    desc: "Cosmétiques bio, vegan, fabriqués en France. Branding et stratégie Instagram pour incarner une beauté éthique et désirable.",
  },
  {
    name: "Rose Donald",
    desc: "Maison capillaire dans un passage du Marais : rituels de soin sur-mesure. Stratégie de marque et présence en ligne (site, Insta, influence).",
  },
  {
    name: "La prochaine aire",
    desc: "Tiers-lieu associatif dans une ancienne maison éclusière. Lancement de la com' : storytelling, relations presse, Instagram. Article dans Brut et posts viraux.",
  },
];

function ProjetsGrid() {
  return (
    <section id="projets" className="bg-rose-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-serif text-xl italic text-ink md:text-2xl">
          Celles et ceux qui font bouger les lignes avec nous
        </p>
        <p className="mx-auto mt-8 max-w-3xl text-center font-mono text-base text-ink leading-relaxed">
          Qu'ils sauvent les océans ou réinventent l'artisanat local, ils nous ont
          fait confiance pour porter leur message. Une sélection de projets
          créatifs et engagés (associations, ONG, start-ups et entreprises
          responsables) que nous avons accompagnés avec passion.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.name} className="flex flex-col">
              <div className="aspect-[16/10] w-full rounded-2xl bg-rose-light" aria-hidden />
              <h3 className="mt-6 font-serif text-2xl text-ink">{p.name}</h3>
              <p className="mt-3 font-mono text-sm text-ink leading-relaxed">
                {p.desc}
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
      <ClientsBand />
      <ProblemSection />
      <LaetitiaIntroSection />
      <PourquoiTravaillerSection />
      <ProcessSection />
      <PrestationsSection />
      <ProjetsGrid />
      <FinalCtaSection />
    </SiteLayout>
  );
}
