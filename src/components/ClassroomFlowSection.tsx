import { Plus, QrCode, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Plus,
    step: "1",
    title: "Session erstellen",
    description:
      "In wenigen Klicks eine Übungssession mit gewünschten Produktbereichen konfigurieren.",
  },
  {
    icon: QrCode,
    step: "2",
    title: "QR/Code teilen",
    description:
      "Schüler:innen scannen den QR-Code oder geben einen kurzen Code ein – kein Login nötig.",
  },
  {
    icon: BarChart3,
    step: "3",
    title: "Üben + Resultate",
    description:
      "Schüler:innen üben selbständig. Lehrpersonen sehen Fortschritte in Echtzeit.",
  },
];

export function ClassroomFlowSection() {
  return (
    <section id="lehrpersonen" className="section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2>Einfach im Unterricht</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            In drei Schritten zur produktiven Übungseinheit.
          </p>
        </div>

        <div className="relative">
          {/* Connection line (desktop only) */}
          <div 
            className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-border"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step indicator */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 shadow-subtle">
                  <step.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                
                {/* Step number badge */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">
                  {step.step}
                </span>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
