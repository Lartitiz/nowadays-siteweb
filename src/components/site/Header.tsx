import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/laetitia-mattioli/30-min-de-diagnostic-offert";

export function Header() {
  return (
    <header className="w-full bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-1">
          <span className="font-serif text-2xl tracking-tight text-foreground">
            now
          </span>
          <span className="font-serif text-2xl tracking-tight text-foreground">
            a
          </span>
          <span
            className="font-serif text-2xl tracking-tight"
            style={{ color: "var(--orange)" }}
          >
            days
          </span>
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
            Études de cas
          </Link>
          <Link
            to="/blog"
            className="text-sm text-foreground hover:text-primary"
          >
            Blog
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
