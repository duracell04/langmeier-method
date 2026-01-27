import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Einzel",
    description: "Für einzelne Lehrpersonen",
    features: [
      "Unbegrenzte Sessions",
      "Bis zu 30 Schüler:innen",
      "Fortschrittsübersicht",
      "Export-Funktionen",
    ],
    cta: "Mehr erfahren",
    highlighted: false,
  },
  {
    name: "Schule",
    description: "Für Teams und Schulen",
    features: [
      "Alles aus Einzel",
      "Unbegrenzte Lehrpersonen",
      "Schulweite Verwaltung",
      "Prioritäts-Support",
    ],
    cta: "Kontakt aufnehmen",
    highlighted: true,
  },
];

export function PricingSection() {
  return (
    <section id="preise" className="section-padding">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2>Preise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Flexible Optionen für jede Situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card-elevated p-6 md:p-8 animate-fade-in ${
                plan.highlighted ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
                  Empfohlen
                </span>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-muted-foreground mt-1 mb-6">
                {plan.description}
              </p>
              
              {/* Placeholder price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">—</span>
                <span className="text-muted-foreground ml-1">/ Monat</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
