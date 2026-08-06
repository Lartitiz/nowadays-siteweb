import { createFileRoute, Link } from "@tanstack/react-router";
import { DaLayout } from "@/components/da/DaLayout";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité | Nowadays Agency" },
      {
        name: "description",
        content:
          "Politique de confidentialité de Nowadays Agency : données collectées, finalités, durées de conservation, destinataires, vos droits et cookies.",
      },
      { property: "og:title", content: "Politique de confidentialité ; Nowadays Agency" },
      {
        property: "og:description",
        content:
          "Comment Nowadays Agency traite vos données personnelles, et quels sont vos droits.",
      },
      { property: "og:url", content: absoluteUrl("/confidentialite") },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/confidentialite") }],
  }),
  component: Page,
});

/* ------------------------------------------------------------------ Data */

const LAST_UPDATE = "4 août 2026";

function Page() {
  return (
    <DaLayout>
      <Header />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pb-24">
          <Toc />
          <Section id="responsable" title="01 · Responsable de traitement">
            <P>
              Laetitia Mattioli, Nowadays Agency,{" "}
              <a
                href="mailto:laetitia@nowadaysagency.com"
                className="underline underline-offset-4 hover:text-framboise"
              >
                laetitia@nowadaysagency.com
              </a>
              .
            </P>
          </Section>

          <Section id="donnees" title="02 · Données collectées et pourquoi">
            <Ul>
              <li>
                <strong>Formulaire de contact et prise de rendez-vous</strong> : nom, e-mail,
                message, pour répondre à votre demande. Base légale : votre demande. Conservation :
                3 ans après le dernier contact.
              </li>
              <li>
                <strong>Inscription à la newsletter Le Mégaphone</strong> : e-mail et prénom, pour
                vous envoyer nos contenus. Base légale : votre consentement, retirable à tout moment
                via le lien de désinscription. Conservation : jusqu'au retrait.
              </li>
              <li>
                <strong>Mesure d'audience</strong> : pages consultées, provenance et type d'appareil
                (mobile ou ordinateur), pour comprendre ce qui vous intéresse. Base légale : intérêt
                légitime. Votre adresse IP n'est jamais conservée : elle sert uniquement à calculer
                une empreinte chiffrée qui change chaque jour et ne permet pas de vous identifier.
              </li>
            </Ul>
          </Section>

          <Section id="destinataires" title="03 · Destinataires">
            <P>
              Vos données ne sont ni vendues ni cédées. Elles sont traitées par nos prestataires
              techniques :
            </P>
            <Ul>
              <li>
                <strong>MailerLite</strong> : e-mail et prénom des inscrites à la newsletter.
              </li>
              <li>
                <strong>Resend</strong> : acheminement des messages envoyés depuis le formulaire de
                contact.
              </li>
              <li>
                <strong>Supabase</strong> : conservation des messages de contact et des statistiques
                de visite.
              </li>
              <li>
                <strong>Lovable</strong> et <strong>Cloudflare</strong> : hébergement du site.
              </li>
            </Ul>
            <P>
              Les polices de caractères sont servies depuis notre propre domaine : aucun tiers n'est
              sollicité pour afficher cette page.
            </P>
            <P>
              Calendly n'intervient que si vous cliquez pour réserver un appel : vous quittez alors
              ce site et vos données relèvent de la politique de Calendly.
            </P>
          </Section>

          <Section id="droits" title="04 · Vos droits">
            <P>
              Accès, rectification, effacement, opposition, portabilité, limitation. Écrivez à{" "}
              <a
                href="mailto:laetitia@nowadaysagency.com"
                className="underline underline-offset-4 hover:text-framboise"
              >
                laetitia@nowadaysagency.com
              </a>
              .
            </P>
            <P>
              En cas de désaccord, vous pouvez saisir la CNIL :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-framboise"
              >
                cnil.fr
              </a>
              .
            </P>
          </Section>

          <Section id="cookies" title="05 · Cookies">
            <P>
              Ce site ne dépose <strong>aucun cookie</strong> et n'utilise aucun stockage sur votre
              navigateur. Aucune bannière de consentement n'est donc nécessaire.
            </P>
            <P>
              Un unique cookie technique, nommé « coulisses », existe : il n'est déposé que lorsque
              l'éditrice du site se connecte à son tableau de bord privé. Il ne vous concerne pas.
            </P>
          </Section>

          <Section id="mentions" title="06 · Informations légales">
            <P>
              L'éditeur du site, l'hébergeur et les conditions d'utilisation sont détaillés dans nos{" "}
              <Link
                to="/mentions-legales"
                className="underline underline-offset-4 hover:text-framboise"
              >
                mentions légales
              </Link>
              .
            </P>
          </Section>
        </div>
      </article>
    </DaLayout>
  );
}

/* ----------------------------------------------------------------- HERO */

function Header() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <p className="text-xs uppercase tracking-[0.24em] text-framboise">
          · Informations &amp; transparence ·
        </p>
        <h1 className="mt-6 font-titre text-5xl md:text-7xl leading-[1.02] text-encre">
          Politique de <em className="text-framboise">confidentialité</em>
        </h1>
        <p className="mt-6 text-sm text-encre leading-relaxed">
          Ce que nous collectons, pourquoi, combien de temps, et comment reprendre la main sur vos
          données.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-encre/70">
          Dernière mise à jour : {LAST_UPDATE}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ TOC */

const TOC = [
  ["responsable", "Responsable de traitement"],
  ["donnees", "Données collectées et pourquoi"],
  ["destinataires", "Destinataires"],
  ["droits", "Vos droits"],
  ["cookies", "Cookies"],
  ["mentions", "Informations légales"],
] as const;

function Toc() {
  return (
    <nav aria-label="Sommaire" className="mb-16 border-t border-b border-ink/15 py-8">
      <p className="text-xs uppercase tracking-[0.24em] text-framboise">Sommaire</p>
      <ol className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 text-sm text-encre sm:grid-cols-2">
        {TOC.map(([id, label], i) => (
          <li key={id}>
            <a href={`#${id}`} className="underline underline-offset-4 hover:text-framboise">
              <span className="text-framboise">{String(i + 1).padStart(2, "0")} ;</span> {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------- Building blocks */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-ink/15 py-14 first-of-type:border-t-0 first-of-type:pt-0 bg-rose-pale"
    >
      <h2 className="font-titre text-3xl md:text-5xl leading-[1.1] text-encre">{title}</h2>
      <div className="mt-8 space-y-5">{children}</div>
    </section>
  );
}

function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm text-encre leading-relaxed ${className}`}>{children}</p>;
}

function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 space-y-3 text-sm text-encre leading-relaxed list-disc pl-5 marker:text-framboise">
      {children}
    </ul>
  );
}
