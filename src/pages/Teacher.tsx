import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, QrCode, BarChart3, Play } from "lucide-react";

const Teacher = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container-wide flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-subtle"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Zurück zur Startseite</span>
          </Link>
          <span className="text-lg font-semibold tracking-tight">Langmeier Dreieck-1×1</span>
        </div>
      </header>

      <main className="section-padding">
        <div className="container-wide max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Lehrpersonen-Bereich
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Erstellen Sie Übungssessions, teilen Sie Zugangscodes und behalten Sie den Überblick über den Lernfortschritt.
            </p>
          </div>

          {/* Demo Flow */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="card-elevated p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Session erstellen</h3>
              <p className="text-sm text-muted-foreground">
                Wählen Sie Produktbereiche und Schwierigkeitsgrad für Ihre Klasse.
              </p>
            </div>

            {/* Step 2 */}
            <div className="card-elevated p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">2. Code teilen</h3>
              <p className="text-sm text-muted-foreground">
                Schüler:innen treten mit QR-Code oder 6-stelligem Code bei.
              </p>
            </div>

            {/* Step 3 */}
            <div className="card-elevated p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">3. Fortschritt sehen</h3>
              <p className="text-sm text-muted-foreground">
                Live-Übersicht über Aktivität und Ergebnisse der Klasse.
              </p>
            </div>
          </div>

          {/* Demo Session Card */}
          <div className="card-elevated p-8 max-w-md mx-auto text-center">
            <h2 className="text-xl font-semibold mb-4">Demo-Session starten</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Testen Sie die Lehrpersonen-Ansicht mit einer Demo-Session.
            </p>
            
            {/* Mock Session Code */}
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Session-Code</span>
              <div className="text-3xl font-mono font-bold tracking-widest mt-1">
                DEMO42
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full">
              <Play className="mr-2 h-5 w-5" />
              Demo starten
            </Button>
            
            <p className="text-xs text-muted-foreground mt-4">
              Keine Anmeldung erforderlich für die Demo.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Teacher;
