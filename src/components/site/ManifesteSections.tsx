import { Pill } from "@/components/da/Pill";
import { StickerNote } from "@/components/da/StickerNote";

// Le manifeste « L'influence comme levier de transformation », rapatrié depuis
// l'ancienne page /manifeste.
//
// Pourquoi la fusion : deux pages minces (914 et 597 mots) sur le même terrain
// sémantique, qui ne se citaient que l'une l'autre. /manifeste n'avait AUCUN
// lien entrant — le « Le Manifeste » du pied de page pointe vers une ancre de
// l'accueil, pas vers elle. Réunies, elles font une page qui a du poids, et
// une seule adresse vers laquelle pointer.
//
// 🔑 Les phrases sont reprises telles quelles. Seuls changements : le <h1> de
// l'ancienne page devient un <h2> (une page = un seul h1), et le sticker ne
// renvoie plus vers /demarche-ethique, qui est désormais la page elle-même.
//
// La voix a été harmonisée à la première personne (06/08), pour coller à la
// démarche éthique qui l'accueille. On n'a changé QUE la personne : le
// vocabulaire, le rythme et la ponctuation sont ceux d'origine.
//
// 🔑 Restent volontairement impersonnels les « on » qui désignent les gens en
// général, pas l'agence : « qu'on vous perçoive », « qu'on parle à leur
// place », « L'influence, on l'a trop longtemps réduite », « on le retrouve
// parmi ses collaborateurs ». Ainsi que « les enjeux de nos sociétés »
// (collectif) et « Nowadays signifie de nos jours » (l'expression).

function ManifesteIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="text-xs uppercase tracking-[0.24em] text-framboise">· Mon manifeste ·</p>
        <h2 className="mx-auto mt-6 font-titre text-4xl leading-[1.05] text-encre md:text-6xl">
          L'influence comme levier de <em>transformation</em>
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-encre">
          <p>
            Ici, j'accompagne celles et ceux qui veulent faire bouger les lignes. Créatrices
            éthiques, artistes engagées, associations inspirantes… Celles qui osent imaginer un
            autre futur, plus doux, plus juste, plus vivant.
          </p>
          <p>
            Celles qui ne veulent pas « juste vendre », mais transmettre une vision. Mon métier ?
            Développer leur influence ; <em>sans trahir leur éthique.</em>
          </p>
          <p>
            Pas de stratégies toutes faites. Pas de marketing agressif. Juste une communication qui
            fait du lien, qui inspire, qui rassemble.
          </p>
        </div>
      </div>
    </section>
  );
}


function Vision() {
  const questions = [
    "Qui vous voulez toucher",
    "Comment vous voulez qu'on vous perçoive",
    "Qui peut porter votre message avec vous",
  ];
  return (
    <section className="manifesto">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Pill ton="jaune">Ma vision</Pill>
        <h2 className="mt-6">
          La communication est un <em>écosystème</em>.
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-white">
          <p>
            Beaucoup d'agences misent tout sur « l'idée créative ». Moi, je commence par tisser du
            lien. Pas juste un logo ou un post Instagram : un réseau vivant de connexions,
            d'alliances, d'authenticité.
          </p>
          <p>Avant de parler design ou storytelling, je regarde avec vous :</p>
        </div>
        <ul className="mt-8 space-y-4">
          {questions.map((q) => (
            <li
              key={q}
              className="flex gap-4 rounded-carte bg-white p-6 text-sm leading-relaxed text-encre"
            >
              <span className="shrink-0 text-lg leading-none" aria-hidden="true">
                👉
              </span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base leading-relaxed text-jaune">
          Parce qu'une marque forte, c'est avant tout une marque bien entourée.
        </p>
        <StickerNote>
          « 100 % éthique », ça n'existe pas.
          <br />
          Plus éthique chaque année, oui.
        </StickerNote>
      </div>
    </section>
  );
}


function Creatrices() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2>
          Pourquoi les <em>créatrices éthiques</em> ?
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-encre">
          <p>
            Chez Nowadays, j'accompagne les femmes qui façonnent un art de vivre éthique. Celles
            qui imaginent des marques sensibles, belles et engagées. Celles qui ne séparent pas
            l'esthétique du sens, ni la stratégie de l'alignement.
          </p>
          <p>
            Ce sont des créatrices de mode responsable, d'objets durables, de rituels bien-être, de
            médias conscients. Elles n'ont pas besoin qu'on parle à leur place. Elles ont juste
            besoin d'un espace stratégique pour être visibles, affirmer leur vision, structurer leur
            présence.
          </p>
          <p>
            Je suis là pour ça. Pour les aider à bâtir des marques qui leur ressemblent, et à
            faire rayonner un lifestyle éthique qui donne envie de vivre autrement.
          </p>
        </div>
      </div>
    </section>
  );
}


function Redefinir() {
  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2>
          Redéfinir l'<em>influence</em>
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-encre">
          <p>
            L'influence, on l'a trop longtemps réduite à une question de visibilité. À des likes,
            des partenariats creux, et une image lisse.
          </p>
          <p>
            Mais l'influence, la vraie, c'est ce qui reste quand la hype est passée. C'est ce que
            votre projet change, inspire, construit autour de lui. Moi, je veux aider mes clientes
            à développer cette influence-là : durable, alignée, engagée.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <h3>Qu'est-ce qu'un influenceur ?</h3>
          <div className="rounded-carte bg-white p-6 text-sm leading-relaxed text-encre">
            <p className="text-encre/70">La définition la plus communément admise :</p>
            <p className="mt-3">
              <strong className="font-medium">Influenceur (n.m.)</strong> : leader d'opinion qui
              collabore avec des marques pour faire leur promotion, moyennant une rémunération.
            </p>
          </div>
          <p className="text-base leading-relaxed text-encre">
            Mon problème avec cette définition : le biais commercial y est central. De nombreux
            partenariats ont donné lieu à des dérives (dropshipping frauduleux, escroqueries, manque
            d'authenticité) qui ont décrédibilisé ce métier. Dans une démarche de transparence et
            d'éthique, il me faut donc repenser la définition même du terme.
          </p>
          <div className="rounded-carte border-2 border-framboise/30 bg-white p-6 text-sm leading-relaxed text-encre">
            <p className="text-encre/70">Le sens que je lui donne chez Nowadays :</p>
            <p className="mt-3">
              <strong className="font-medium">Influenceur (n.m.)</strong> : leader d'opinion qui
              collabore avec des marques pour avoir un <em>impact positif</em> sur le monde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function Ambassadeur() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2>
          De l'influence marketing <em>éthique</em>
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-encre">
          <p>
            Pour répondre à la crise de confiance que subit le marketing d'influence, il est de
            mon devoir de m'interroger sur l'avenir des collaborations entre influenceurs et
            marques.
          </p>
          <p>
            Aujourd'hui, le terme « influenceur » est connoté négativement : il implique une
            personne qui influence et une personne influencée. C'est pourquoi je préfère le
            terme d'<em>ambassadeur</em>.
          </p>
          <p>
            Un « influenceur » ne doit pas être synonyme de personne aux millions d'abonnés. Au
            contraire, il s'agit d'un profil reconnu par son réseau : on le retrouve parmi ses
            collaborateurs, ses fournisseurs, ses clients, ses partenaires… Derrière toutes ces
            pistes se cache sûrement votre ambassadeur idéal.
          </p>
        </div>
      </div>
    </section>
  );
}


function Kpi() {
  return (
    <section className="bg-rose-pale">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2>
          Nouvelle donne = nouveaux <em>indicateurs</em>
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-encre">
          <p>
            Toute stratégie part d'objectifs chiffrés et d'indicateurs de performance. Aujourd'hui,
            ils tournent généralement autour du nombre de ventes et du chiffre d'affaires.
          </p>
          <p>
            Dans un monde où la croissance infinie est une illusion, comment continuer à se baser
            sur le profit à tout prix comme critère de réussite ? Il est de mon devoir d'intégrer
            de nouveaux indicateurs, qui prennent en compte les enjeux environnementaux de nos
            sociétés.
          </p>
          <p>
            Le chiffre d'affaires reste central ; il est indispensable à la survie d'une marque.
            Chez Nowadays, je travaille sur le meilleur compromis entre rentabilité et réduction
            d'empreinte carbone, en repensant les KPI pour les faire évoluer vers des objectifs plus
            réalistes et respectueux de vos valeurs, et de la planète.
          </p>
        </div>
      </div>
    </section>
  );
}


function EnBref() {
  const points = [
    "La création ; de contenu, de liens, d'émotions.",
    "L'influence qui transforme ; pas celle qui surimpose.",
    "Les projets qui osent être sincères ; même s'ils ne cochent pas toutes les cases.",
    "Une autre façon de communiquer ; plus humaine et plus sensible.",
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center">En bref, chez Nowadays, je suis pour :</h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <li
              key={p}
              className="flex gap-4 rounded-carte bg-rose-pale p-6 text-sm leading-relaxed text-encre"
            >
              <span className="shrink-0 text-xl leading-none" aria-hidden="true">
                ✨
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


function PourquoiNowadays() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2>
              Pourquoi <em>Nowadays</em> ?
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="max-w-[60ch] text-base leading-relaxed text-encre">
              Parce que Nowadays signifie « de nos jours ». Pas pour coller à une tendance ni pour
              surfer sur un effet de mode, mais pour affirmer ce qui compte vraiment : construire
              des projets engagés avec éthique, qui respectent le vivant et participent à un avenir
              plus juste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


export function ManifesteSections() {
  return (
    <>
      <ManifesteIntro />
      <Vision />
      <Creatrices />
      <Redefinir />
      <Ambassadeur />
      <Kpi />
      <PourquoiNowadays />
      <EnBref />
    </>
  );
}
