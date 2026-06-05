import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import nowadaysLogo from "@/assets/nowadays-logo.webp.asset.json";

const CALENDLY_URL =
  "https://calendly.com/laetitia-mattioli/30-min-de-diagnostic-offert";

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
          <Link
            to="/accompagnement-communication"
            className="text-sm text-foreground hover:text-primary"
          >
            Solutions de communication
          </Link>
          <Link
            to="/cooperative-asso"
            className="text-sm text-foreground hover:text-primary"
          >
            Coopératives & assos
          </Link>
          <Link
            to="/etudes-de-cas"
            className="text-sm text-foreground hover:text-primary"
          >
            Créatrices éthiques
          </Link>
          <Link
            to="/etudes-de-cas-pro"
            className="text-sm text-foreground hover:text-primary"
          >
            Assos & marques engagées
          </Link>
          <Link
            to="/blog"
            className="text-sm text-foreground hover:text-primary"
          >
            Blog
          </Link>
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
