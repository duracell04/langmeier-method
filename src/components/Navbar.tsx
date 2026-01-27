import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Methode", href: "#methode" },
  { label: "Für Lehrpersonen", href: "#lehrpersonen" },
  { label: "Für Schüler:innen", href: "#schueler" },
  { label: "Preise", href: "#preise" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container-wide flex h-16 items-center justify-between">
        {/* Wordmark */}
        <Link 
          to="/" 
          className="flex items-center gap-2 font-semibold text-foreground transition-subtle hover:text-primary"
        >
          <span className="text-lg tracking-tight">Langmeier Dreieck-1×1</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-subtle hover:text-foreground focus-ring rounded-md px-2 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#login"
            className="text-sm text-muted-foreground transition-subtle hover:text-foreground focus-ring rounded-md px-2 py-1"
          >
            Login
          </a>
          <Button 
            variant="hero" 
            size="default"
            onClick={() => document.getElementById('preise')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Jetzt starten
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground focus-ring rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background animate-fade-in">
          <div className="container-wide py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-base text-muted-foreground transition-subtle hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#login"
              className="block py-2 text-base text-muted-foreground transition-subtle hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </a>
            <div className="pt-2">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('preise')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Jetzt starten
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
