import { WifiOff, UserX, HeartHandshake, Shield } from "lucide-react";

const features = [
  {
    icon: WifiOff,
    text: "Offline-fähig nach dem ersten Laden",
  },
  {
    icon: UserX,
    text: "Keine Schüler:innen-Accounts nötig",
  },
  {
    icon: HeartHandshake,
    text: "Ruhige, ermutigende Rückmeldungen",
  },
  {
    icon: Shield,
    text: "Lehrperson behält volle Kontrolle",
  },
];

export function CredibilitySection() {
  return (
    <section id="schueler" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2>Für ruhiges, fokussiertes Lernen</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-muted-foreground">
          Designed in Switzerland · Made for classrooms
        </p>
      </div>
    </section>
  );
}
