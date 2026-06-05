import { Link } from "@tanstack/react-router";
import { ChevronDown, Phone } from "lucide-react";
import nowadaysLogo from "@/assets/nowadays-logo-v2.webp.asset.json";

const CALENDLY_URL =
  "https://calendly.com/laetitia-mattioli/30-min-de-diagnostic-offert";

type SubItem = { label: string; description: string; to: string };

const solutionsItems: SubItem[] = [
  {
    label: "Ta binôme de com",
    description: "Pour les solopreneures et créatrices éthiques",
    to: "/accompagnement-communication",
  },
  {
    label: "Ton agency",
    description: "Pour les coopératives, associations et PME engagées",
    to: "/cooperative-asso",
  },
];

const etudesItems: SubItem[] = [
  {
    label: "Coopératives, assos & PME",
    description: "Études de cas pour structures engagées",
    to: "/cooperative-asso",
  },
  {
    label: "Créatrices éthiques",
    description: "Études de cas pour marques de créatrices",
    to: "/creatrices-ethiques",
  },
];

function NavDropdown({ label, items }: { label: string; items: SubItem[] }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-primary"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
        <div className="w-80 rounded-2xl border border-[color:var(--ink)]/10 bg-background p-2 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.label + item.to}
              to={item.to}
              className="block rounded-xl px-4 py-3 transition-colors hover:bg-[color:var(--rose-light)]"
            >
              <div className="font-serif text-base text-ink">{item.label}</div>
              <div className="mt-1 text-xs text-foreground/70">
                {item.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="w-full bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center" aria-label="Nowadays Agency">
          <img
            src={nowadaysLogo.url}
            alt="Nowadays Agency"
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavDropdown label="Solutions" items={solutionsItems} />
          <NavDropdown label="Études de cas" items={etudesItems} />
          <Link
            to="/contact"
            className="text-sm text-foreground hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground transition-colors hover:bg-[color:var(--bordeaux)]"
        >
          Appel découverte gratuit
          <Phone className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
