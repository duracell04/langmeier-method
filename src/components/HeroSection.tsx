import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TriangleVisual } from "@/components/TriangleVisual";
import { StructureLensGrid } from "@/components/StructureLensGrid";
import { GraduationCap, User } from "lucide-react";

export function HeroSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            <h1 className="animate-fade-in">
              Multiplikation und Division bis 100 – produktzentriert lernen.
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Ein Lernwerkzeug, das Produkte ins Zentrum stellt. 
              Faktorenfamilien erkennen, Dreiecksrelationen verstehen – 
              für nachhaltiges mathematisches Verständnis.
            </p>
            
            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/teacher">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Ich bin Lehrperson
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/student">
                  <User className="mr-2 h-5 w-5" />
                  Ich bin Schülerin/Schüler
                </Link>
              </Button>
            </div>
            
            {/* Privacy note */}
            <p className="mt-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" aria-hidden="true" />
                Kein Login für Schüler:innen. Datenschutzfreundlich.
              </span>
            </p>
          </div>
          
          {/* Right: Visual Demo */}
          <div className="flex flex-col items-center lg:items-end gap-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Triangle Interface Mock */}
            <div className="card-elevated p-8 md:p-10">
              <div className="text-center mb-6">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Dreiecks-Interface
                </span>
              </div>
              <TriangleVisual 
                product={12} 
                factorA={3} 
                factorB={null} 
                showMissing={true} 
              />
              <div className="mt-6 text-center">
                <span className="text-sm text-muted-foreground">
                  12 = 3 × ?
                </span>
              </div>
            </div>
            
            {/* Structure Lens Preview */}
            <div className="card-elevated p-6">
              <div className="text-center mb-4">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Strukturlinse
                </span>
              </div>
              <StructureLensGrid />
              <div className="mt-4 text-center">
                <span className="text-xs text-muted-foreground">
                  Alle Wege zu 12 sichtbar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
