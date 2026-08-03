import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

import { DaLayout } from "@/components/da/DaLayout";
import {
  connexionCoulisses,
  deconnexionCoulisses,
  envoyerRecapMaintenant,
  lireLignePlanification,
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

/*
 * Les chemins bruts (/etudes/l214) sont lisibles par un développeur, pas par
 * quelqu'un qui regarde ses chiffres du lundi. On les traduit.
 */
const LIBELLES_PAGES: Record<string, string> = {
  "/": "L'accueil",
  "/accompagnement-communication": "Ta binôme de com'",
  "/cooperative-asso": "Votre agency de com'",
  "/etudes-de-cas-pro": "Études de cas — assos",
  "/creatrices-ethiques": "Études de cas — créatrices",
  "/contact": "Contact",
  "/manifeste": "Le manifeste",
  "/demarche-ethique": "La démarche éthique",
  "/blog": "Le blog",
  "/guide-storytelling": "Aimant — guide storytelling",
  "/formation-gratuite-instagram": "Aimant — formation Instagram",
  "/template-branding": "Aimant — template branding",
  "/template-calendrier-editorial": "Aimant — calendrier éditorial",
  "/mentions-legales": "Mentions légales",
};

function nommerPage(chemin: string): string {
  if (LIBELLES_PAGES[chemin]) return LIBELLES_PAGES[chemin];
  // Une étude de cas : /etudes/atelier-des-lunettes → « Étude — atelier des lunettes »
  const etude = chemin.match(/^\/etudes\/(.+)$/);
  if (etude) return `Étude — ${etude[1].replace(/-/g, " ")}`;
  const article = chemin.match(/^\/blog\/(.+)$/);
  if (article) return `Article — ${article[1].replace(/-/g, " ")}`;
  return chemin;
}

const LIBELLES_APPAREILS: Record<string, string> = {
  mobile: "Téléphone",
  ordinateur: "Ordinateur",
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

/* --------------------------------------------------------- Briques */

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div className="rounded-carte-douce border border-rose-pale bg-white p-5">
      <h2 className="font-titre text-2xl text-encre">{titre}</h2>
      {children}
    </div>
  );
}

function Vide() {
  return <p className="mt-4 text-sm text-gris-chaud">Rien encore sur cette période.</p>;
}

function Liste({
  lignes,
  libelle,
}: {
  lignes: Array<{ cle: string; nombre: number }>;
  libelle?: (c: string) => string;
}) {
  if (lignes.length === 0) return <Vide />;
  return (
    <ul className="mt-4">
      {lignes.map((l) => (
        <li
          key={l.cle}
          className="flex justify-between gap-4 border-b border-rose-pale py-2 text-sm last:border-0"
        >
          <span className="text-encre">{libelle ? libelle(l.cle) : l.cle}</span>
          <span className="whitespace-nowrap text-gris-chaud">{l.nombre}</span>
        </li>
      ))}
    </ul>
  );
}

/*
 * Le croisement visiteuses × appels. C'est le tableau qui répond à « est-ce
 * qu'Instagram m'amène des clientes ou seulement du monde ». On met le taux en
 * évidence, pas le volume : c'est lui qui départage.
 */
function Croisement({
  lignes,
}: {
  lignes: Array<{ nom: string; visiteuses: number; appels: number; tauxPourCent: number }>;
}) {
  if (lignes.length === 0) return <Vide />;
  const meilleur = Math.max(...lignes.map((l) => l.tauxPourCent), 0);
  return (
    <table className="mt-4 w-full text-sm">
      <thead>
        <tr className="text-left text-gris-chaud">
          <th className="pb-2 font-normal">&nbsp;</th>
          <th className="pb-2 text-right font-normal">Visiteuses</th>
          <th className="pb-2 text-right font-normal">Appels</th>
          <th className="pb-2 text-right font-normal">Taux</th>
        </tr>
      </thead>
      <tbody>
        {lignes.map((l) => (
          <tr key={l.nom} className="border-t border-rose-pale">
            <td className="py-2 text-encre">{l.nom}</td>
            <td className="py-2 text-right text-gris-chaud">{l.visiteuses}</td>
            <td className="py-2 text-right text-gris-chaud">{l.appels}</td>
            <td
              className={
                l.tauxPourCent > 0 && l.tauxPourCent === meilleur
                  ? "py-2 text-right text-framboise-dense"
                  : "py-2 text-right text-gris-chaud"
              }
            >
              {l.tauxPourCent.toLocaleString("fr-FR")} %
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/*
 * La courbe. Deux séries empilées visuellement : les visites en barres pâles,
 * les appels en points francs par-dessus. Pas de bibliothèque : quelques divs
 * suffisent, et ça évite 80 ko de JavaScript pour dessiner trente barres.
 */
function Courbe({
  points,
}: {
  points: Array<{ jour: string; visiteuses: number; appels: number }>;
}) {
  if (points.length === 0) return <Vide />;
  const haut = Math.max(...points.map((p) => p.visiteuses), 1);
  const jourCourt = (j: string) => {
    const d = new Date(`${j}T12:00:00Z`);
    return d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
  };
  return (
    <div className="mt-5">
      <div className="flex h-32 items-end gap-[3px]">
        {points.map((p) => (
          <div
            key={p.jour}
            className="group relative flex-1"
            title={`${jourCourt(p.jour)} — ${p.visiteuses} visiteuse${p.visiteuses > 1 ? "s" : ""}, ${p.appels} appel${p.appels > 1 ? "s" : ""}`}
          >
            <div
              className="w-full rounded-t-sm bg-rose-doux"
              style={{ height: `${Math.round((p.visiteuses / haut) * 118)}px`, minHeight: "2px" }}
            />
            {p.appels > 0 ? (
              <div className="absolute inset-x-0 -top-2 flex justify-center">
                <span className="h-2 w-2 rounded-full bg-framboise-dense" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-xs text-gris-chaud">
        <span>{jourCourt(points[0].jour)}</span>
        <span>{jourCourt(points[points.length - 1].jour)}</span>
      </div>
      <p className="mt-3 text-sm text-gris-chaud">
        Barres : les visiteuses. <span className="text-framboise-dense">Points</span> : les jours où
        quelqu'un a demandé un appel.
      </p>
    </div>
  );
}

/* --------------------------------------------------------- Tableau */

function Tableau({ stats }: { stats: Statistiques }) {
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

      <Bloc titre="Jour par jour">
        <Courbe points={stats.courbe} />
      </Bloc>

      <Bloc titre="D'où elles viennent, et lesquelles demandent un appel">
        <Croisement lignes={stats.provenances} />
      </Bloc>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Bloc titre="Par quelle page elles entrent">
          <Liste
            lignes={stats.pagesEntree.map((p) => ({ cle: p.chemin, nombre: p.nombre }))}
            libelle={nommerPage}
          />
        </Bloc>
        <Bloc titre="Les pages qui déclenchent un appel">
          <Liste
            lignes={stats.pagesQuiDeclenchent.map((p) => ({ cle: p.chemin, nombre: p.nombre }))}
            libelle={nommerPage}
          />
        </Bloc>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Bloc titre="Quel aimant recrute">
          <Liste
            lignes={stats.aimantsDetail.map((a) => ({ cle: a.nom, nombre: a.nombre }))}
            libelle={(c) => LIBELLES_AIMANTS[c] ?? c}
          />
        </Bloc>
        <Bloc titre="Téléphone ou ordinateur">
          <Croisement
            lignes={stats.appareils.map((a) => ({ ...a, nom: LIBELLES_APPAREILS[a.nom] ?? a.nom }))}
          />
        </Bloc>
      </div>

      <Recap />

      <p className="text-sm text-gris-chaud">
        Une visiteuse revenue un autre jour compte deux fois : c'est le prix à payer pour ne poser
        aucun cookie.
        {stats.tronque ? " Affichage limité aux 100 000 derniers événements." : ""}
      </p>
    </div>
  );
}

/* --------------------------------------------------------- Récap e-mail */

function Recap() {
  const lireLigne = useServerFn(lireLignePlanification);
  const envoyer = useServerFn(envoyerRecapMaintenant);
  const [jeton, setJeton] = useState<string | null>(null);
  const [ouvert, setOuvert] = useState(false);
  const [envoi, setEnvoi] = useState<string | null>(null);

  useEffect(() => {
    if (!ouvert || jeton) return;
    void lireLigne({}).then((r) => {
      if (r.ok) setJeton(r.jeton);
    });
  }, [ouvert, jeton, lireLigne]);

  const sql = jeton
    ? `select cron.schedule(\n  'recap-hebdo-nowadays',\n  '0 6 * * 1',\n  $$ select net.http_get('https://nowadaysagency.com/api/recap-hebdo?cle=${jeton}') $$\n);`
    : "…";

  return (
    <div className="rounded-carte-douce border border-rose-pale bg-white p-5">
      <button
        type="button"
        onClick={() => setOuvert((v) => !v)}
        className="text-sm text-gris-chaud underline underline-offset-4"
      >
        {ouvert ? "Masquer" : "Le récap du lundi par e-mail"}
      </button>

      {ouvert ? (
        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setEnvoi("Envoi…");
                void envoyer({}).then((r) =>
                  setEnvoi(r.ok ? "Envoyé, regarde ta boîte." : r.message),
                );
              }}
            >
              M'envoyer le récap maintenant
            </button>
            {envoi ? <span className="text-sm text-gris-chaud">{envoi}</span> : null}
          </div>

          <div>
            <p className="text-sm text-encre">
              Pour le recevoir chaque lundi à 8 h, colle cette ligne au chat Lovable en lui
              demandant de l'exécuter sur Supabase :
            </p>
            <pre className="mt-2 overflow-x-auto rounded-md bg-rose-pale p-3 text-xs text-encre">
              {sql}
            </pre>
            <p className="mt-2 text-sm text-gris-chaud">
              Elle contient une clé qui ne permet que d'envoyer ce récap. Ce n'est pas ton mot de
              passe.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
