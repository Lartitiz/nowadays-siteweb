import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer
      className="w-full border-t"
      style={{ backgroundColor: "var(--rose-light)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-center gap-1">
          <span className="font-serif text-2xl text-foreground">now</span>
          <span className="font-serif text-2xl text-foreground">a</span>
          <span
            className="font-serif text-2xl"
            style={{ color: "var(--orange)" }}
          >
            days
          </span>
        </div>

        <p className="mt-4 max-w-md text-sm text-foreground/80">
          Agence de communication engagée au service de projets éthiques.
        </p>

        <nav className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link
            to="/accompagnement-communication"
            className="text-foreground hover:text-primary"
          >
            Accompagnement communication
          </Link>
          <Link
            to="/cooperative-asso"
            className="text-foreground hover:text-primary"
          >
            Coopératives & associations
          </Link>
        </nav>

        <p className="mt-10 text-xs text-foreground/60">
          © {new Date().getFullYear()} Nowadays Agency
        </p>
      </div>
    </footer>
  );
}
