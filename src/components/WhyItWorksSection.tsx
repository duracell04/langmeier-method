import { Layers, Triangle, ArrowLeftRight } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Produkte statt Reihen",
    description:
      "Das Lernen wird nach Produkten und ihren Faktorenpaaren organisiert – nicht nach isolierten Reihen. So entsteht vernetztes Wissen.",
  },
  {
    icon: Triangle,
    title: "Dreieck als Relations-Interface",
    description:
      "Das Dreieck zeigt die Beziehung zwischen Produkt und Faktoren. Kinder sehen den Zusammenhang, nicht nur eine Aufgabe.",
  },
  {
    icon: ArrowLeftRight,
    title: "Multiplikation + Division zusammen",
    description:
      "Beide Operationen teilen dieselbe Struktur. Wer multiplizieren kann, versteht auch das Dividieren – ohne neu zu lernen.",
  },
];

export function WhyItWorksSection() {
  return (
    <section id="methode" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2>Warum es funktioniert</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ein didaktisches Konzept, das mathematisches Verständnis fördert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elevated p-6 md:p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
