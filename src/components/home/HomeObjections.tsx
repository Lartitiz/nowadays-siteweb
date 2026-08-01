import { Pill } from "@/components/da/Pill";
import { CtaInline } from "@/components/da/CtaInline";

const QUESTIONS = [
  {
    question: "« J'ai peur d'investir et que ça ne fonctionne pas. »",
    reponse:
      "Vous avez peut-être déjà payé une formation que vous n'avez jamais finie. Je ne vais pas vous promettre des résultats : personne ne peut le faire honnêtement. Ce que je peux vous promettre, c'est ce que je livre, et quand je le livre. Et on commence par 30 minutes gratuites où je vous dis franchement si je peux vous aider.",
  },
  {
    question: "« Je n'ai pas le temps. »",
    reponse:
      "C'est justement le point de départ. Selon la formule choisie, soit on fait ensemble et ça vous demande deux heures par mois, soit on s'en occupe et il ne vous reste qu'à valider. Dans les deux cas, on part de votre agenda réel, pas d'un rythme théorique.",
  },
  {
    question: "« C'est au-dessus de notre budget. »",
    reponse:
      "Côté structures, on ne raisonne pas en abonnement : on définit un budget global de mission, à partir de 1 500 €, échelonnable. On construit à la hauteur de ce que vous pouvez mettre, quitte à faire moins de choses mais à les faire bien.",
  },
  {
    question: "« Mon cas est particulier. »",
    reponse:
      "Il l'est. Une joaillière, une coopérative d'écolieux et une association de protection animale n'ont pas du tout les mêmes leviers. C'est pour ça qu'il n'y a pas de package tout prêt : on part de ce que vous proposez, de vos client·es et de vos contraintes.",
  },
  {
    question: "« Je n'aime pas vendre, je ne veux pas être trop commerciale. »",
    reponse:
      "Nous non plus, si vendre veut dire forcer la main. Mais rendre visible ce que vous faites, quand ça aide vraiment les gens, c'est un service que vous leur rendez. On ne vous demandera jamais de devenir quelqu'un d'autre.",
  },
  {
    question: "« Je préfère faire moi-même. » (ou : on a déjà quelqu'un en interne)",
    reponse:
      "Tant mieux, c'est même tout le principe de Ta binôme de com' : on construit ensemble et vous gardez la main. Et quand il y a déjà quelqu'un en interne, on travaille avec cette personne, pas à sa place.",
  },
  {
    question: "« Six mois, c'est un long engagement. »",
    reponse:
      "Les premiers mois, c'est moi qui fais le gros du travail : votre stratégie, votre branding, votre plan sur six mois. Le montant est étalé pour votre trésorerie, ce n'est pas un abonnement mensuel. Et à la fin de la phase stratégie, on fait un point ensemble avant de passer à l'application.",
  },
] as const;

export function HomeObjections() {
  return (
    <section className="section objections">
      <div className="wrap">
        <div className="obj-head">
          <div>
            <Pill>Les vraies questions</Pill>
            <h2>Vous vous dites peut-être…</h2>
          </div>
          <img
            className="obj-photo"
            src="/images/home/laetitia-objections.jpg"
            alt="Laetitia, sourcils levés"
            loading="lazy"
          />
        </div>

        <div style={{ marginTop: 40 }}>
          {QUESTIONS.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>{item.question}</summary>
              <div className="answer">{item.reponse}</div>
            </details>
          ))}

          <CtaInline accroche="Il vous reste une question ? Posez-la moi de vive voix." />
        </div>
      </div>
    </section>
  );
}
