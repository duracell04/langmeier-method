import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Impressum", href: "/impressum" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-secondary/20">
      <div className="container-wide py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Wordmark */}
          <div>
            <Link 
              to="/" 
              className="text-lg font-semibold text-foreground transition-subtle hover:text-primary"
            >
              Langmeier Dreieck-1×1
            </Link>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground transition-subtle hover:text-foreground focus-ring rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Langmeier Dreieck-1×1. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
