import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

import { DaLayout } from "@/components/da/DaLayout";
import {
  connexionCoulisses,
  deconnexionCoulisses,
  lireStatistiques,
  type Periode,
  type Statistiques,
} from "@/lib/mesure.functions";

/*
 * Page privée : la mesure d'audience du site, lisible en trente secondes.
 * Hors du menu, hors du sitemap, interdite aux moteurs, protégée par un mot de
 * passe vérifié côté serveur. Le contenu n'est jamais rendu tant que le
 * serveur n'a pas accepté la session.
 */

export const Route = createFileRoute("/coulisses")({
  head: () => ({
    meta: [{ title: "Les coulisses" }, { name: "robots", content: "noindex, nofollow, noarchive" }],
  }),
  component: Page,
});

const PERIODES: Array<{ cle: Periode; libelle: string }> = [
  { cle: "7j", libelle: "7 jours" },
  { cle: "30j", libelle: "30 jours" },
  { cle: "tout", libelle: "Tout" },
];

const LIBELLES_AIMANTS: Record<string, string> = {
  "formation-instagram": "La formation Instagram",
  "guide-storytelling": "Le guide storytelling",
  "plan-communication": "Le plan de com'",
  "calendrier-editorial": "Le calendrier éditorial",
  "template-branding": "Le template branding",
  newsletter: "Le Mégaphone",
};

function Page() {
  const [stats, setStats] = useState<Statistiques | null>(null);
  const [periode, setPeriode] = useState<Periode>("7j");
  const [refuse, setRefuse] = useState(false);
  const [panne, setPanne] = useState<string | null>(null);
  const [chargement, setChargement] = useState(true);
  const [tentative, setTentative] = useState(0);

  const lire = useServerFn(lireStatistiques);

  useEffect(() => {
    let annule = false;
    setChargement(true);
    lire({ data: { periode } })
      .then((r) => {
        if (annule) return;
        if (r.ok) {
          setStats(r.stats);
          setRefuse(false);
          setPanne(null);
        } else if (r.raison === "acces") {
          setRefuse(true);
        } else {
          setPanne(r.message);
        }
      })
      .catch((e: unknown) => {
        if (!annule) setPanne(e instanceof Error ? e.message : "Erreur inconnue");
      })
      .finally(() => {
        if (!annule) setChargement(false);
      });
    return () => {
      annule = true;
    };
  }, [periode, lire, tentative]);

  if (refuse) {
    return (
      <Connexion
        onEntre={() => {
          setRefuse(false);
          setTentative((n) => n + 1);
        }}
      />
    );
  }

  return (
    <DaLayout>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <EnTete periode={periode} onPeriode={setPeriode} />
          {panne ? (
            <div className="rounded-carte-douce border-framboise-dense bg-rose-pale mt-10 border p-5">
              <p className="text-encre text-base">Les chiffres n'ont pas pu être lus.</p>
              <p className="text-gris-chaud mt-2 text-sm">{panne}</p>
              <p className="text-gris-chaud mt-2 text-sm">
                Si c'est la première fois : la table de mesure n'existe peut-être pas encore côté
                Supabase.
              </p>
            </div>
          ) : chargement && !stats ? (
            <p className="mt-10 text-encre">Un instant…</p>
          ) : stats ? (
            <Tableau stats={stats} />
          ) : null}
        </div>
      </section>
    </DaLayout>
  );
}

/* --------------------------------------------------------- Connexion */

function Connexion({ onEntre }: { onEntre: () => void }) {
  const connexion = useServerFn(connexionCoulisses);
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [envoi, setEnvoi] = useState(false);

  async function soumettre(e: React.FormEvent) {
    e.preventDefault();
    if (envoi) return;
    setEnvoi(true);
    setErreur(null);
    try {
      const r = await connexion({ data: { motDePasse } });
      if (r.ok) onEntre();
      else setErreur(r.message);
    } catch {
      setErreur("Connexion impossible pour le moment.");
    } finally {
      setEnvoi(false);
    }
  }

  return (
    <DaLayout>
      <section className="bg-white">
        <div className="mx-auto max-w-md px-6 py-24 md:py-32">
          <h1 className="font-titre text-4xl leading-[1.05] text-encre">Les coulisses</h1>
          <p className="mt-4 text-base text-encre">Cette page est privée.</p>
          <form onSubmit={soumettre} className="mt-8 space-y-4">
            <label className="block text-sm text-encre" htmlFor="mdp">
              Mot de passe
            </label>
            <input
              id="mdp"
              type="password"
              autoComplete="current-password"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              className="w-full rounded-full border border-rose-pale bg-white px-5 py-3 text-base text-encre outline-none focus:border-framboise-dense"
            />
            {erreur ? <p className="text-sm text-framboise-dense">{erreur}</p> : null}
            <button type="submit" className="btn btn-primary" disabled={envoi}>
              {envoi ? "Un instant…" : "Entrer"}
            </button>
          </form>
        </div>
      </section>
    </DaLayout>
  );
}

/* --------------------------------------------------------- Tableau */

function EnTete({ periode, onPeriode }: { periode: Periode; onPeriode: (p: Periode) => void }) {
  const deconnexion = useServerFn(deconnexionCoulisses);
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-titre text-4xl leading-[1.05] text-encre md:text-5xl">Les coulisses</h1>
        <p className="mt-2 text-sm text-gris-chaud">
          Aucun cookie, aucune donnée personnelle, rien n'est envoyé à Google.
        </p>
      </div>
      <div className="flex items-center gap-2">
        {PERIODES.map((p) => (
          <button
            key={p.cle}
            type="button"
            onClick={() => onPeriode(p.cle)}
            aria-pressed={periode === p.cle}
            className={
              periode === p.cle
                ? "rounded-full border border-framboise-dense bg-framboise-dense px-4 py-2 text-sm text-white"
                : "rounded-full border border-rose-pale px-4 py-2 text-sm text-encre"
            }
          >
            {p.libelle}
          </button>
        ))}
        <button
          type="button"
          onClick={() => void deconnexion({}).then(() => window.location.reload())}
          className="ml-2 text-sm text-gris-chaud underline underline-offset-4"
        >
          Sortir
        </button>
      </div>
    </div>
  );
}

function evolution(actuel: number, avant: number | null): string | null {
  if (avant === null) return null;
  if (avant === 0) return actuel > 0 ? "aucune la période passée" : null;
  const pourCent = Math.round(((actuel - avant) / avant) * 100);
  const signe = pourCent > 0 ? "+" : "";
  return `${signe}${pourCent} % vs période passée`;
}

function Chiffre({
  titre,
  valeur,
  dessous,
  vedette = false,
}: {
  titre: string;
  valeur: string | number;
  dessous?: string | null;
  vedette?: boolean;
}) {
  return (
    <div
      className={
        vedette
          ? "rounded-carte-douce border border-framboise-dense bg-rose-pale p-5"
          : "rounded-carte-douce border border-rose-pale bg-white p-5"
      }
    >
      <div className={vedette ? "text-sm text-framboise-dense" : "text-sm text-gris-chaud"}>
        {titre}
      </div>
      <div
        className={
          vedette
            ? "mt-1 font-titre text-5xl leading-none text-framboise-dense"
            : "mt-1 font-titre text-5xl leading-none text-encre"
        }
      >
        {valeur}
      </div>
      {dessous ? <div className="mt-2 text-sm text-gris-chaud">{dessous}</div> : null}
    </div>
  );
}

function Tableau({ stats }: { stats: Statistiques }) {
  const totalVues = stats.provenances.reduce((s, p) => s + p.nombre, 0) || 1;

  return (
    <div className="mt-10 space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Chiffre
          titre="Visiteuses"
          valeur={stats.visiteuses}
          dessous={evolution(stats.visiteuses, stats.visiteusesAvant)}
        />
        <Chiffre
          vedette
          titre="Ont cliqué pour réserver un appel"
          valeur={stats.appels}
          dessous={evolution(stats.appels, stats.appelsAvant)}
        />
        <Chiffre titre="Messages reçus" valeur={stats.messages} dessous="formulaire de contact" />
        <Chiffre titre="Inscriptions" valeur={stats.aimants} dessous="aimants et Mégaphone" />
      </div>

      <div className="rounded-carte-douce border border-rose-pale bg-white p-5">
        <p className="text-base text-encre">
          Sur 100 visiteuses,{" "}
          <span className="text-framboise-dense">{stats.tauxPourCent.toLocaleString("fr-FR")}</span>{" "}
          {stats.tauxPourCent > 1 ? "demandent" : "demande"} un appel.
          {stats.tauxAvantPourCent !== null ? (
            <span className="text-gris-chaud">
              {" "}
              La période passée : {stats.tauxAvantPourCent.toLocaleString("fr-FR")}.
            </span>
          ) : null}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-carte-douce border border-rose-pale bg-white p-5">
          <h2 className="font-titre text-2xl text-encre">D'où elles viennent</h2>
          {stats.provenances.length === 0 ? (
            <p className="mt-4 text-sm text-gris-chaud">Rien encore sur cette période.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {stats.provenances.map((p) => (
                <li key={p.nom}>
                  <div className="flex justify-between text-sm text-encre">
                    <span>{p.nom}</span>
                    <span className="text-gris-chaud">{p.nombre}</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-rose-pale">
                    <div
                      className="h-full bg-framboise-dense"
                      style={{ width: `${Math.round((p.nombre / totalVues) * 100)}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-carte-douce border border-rose-pale bg-white p-5">
          <h2 className="font-titre text-2xl text-encre">Par quelle page elles entrent</h2>
          {stats.pagesEntree.length === 0 ? (
            <p className="mt-4 text-sm text-gris-chaud">Rien encore sur cette période.</p>
          ) : (
            <ul className="mt-4">
              {stats.pagesEntree.map((p) => (
                <li
                  key={p.chemin}
                  className="flex justify-between gap-4 border-b border-rose-pale py-2 text-sm last:border-0"
                >
                  <span className="text-encre">{LIBELLES_AIMANTS[p.chemin] ?? p.chemin}</span>
                  <span className="whitespace-nowrap text-gris-chaud">{p.nombre}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <p className="text-sm text-gris-chaud">
        Une visiteuse revenue un autre jour compte deux fois : c'est le prix à payer pour ne poser
        aucun cookie.
        {stats.tronque ? " Affichage limité aux 100 000 derniers événements." : ""}
      </p>
    </div>
  );
}
