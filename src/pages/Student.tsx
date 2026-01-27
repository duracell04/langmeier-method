import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, CheckCircle2 } from "lucide-react";
import { TriangleVisual } from "@/components/TriangleVisual";

const demoProblems = [
  { product: 12, factorA: 3, factorB: null, answer: 4 },
  { product: 20, factorA: null, factorB: 5, answer: 4 },
  { product: 18, factorA: 6, factorB: null, answer: 3 },
];

const Student = () => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [completed, setCompleted] = useState<number[]>([]);

  const problem = demoProblems[currentProblem];

  const handleReveal = () => {
    setShowAnswer(true);
    if (!completed.includes(currentProblem)) {
      setCompleted([...completed, currentProblem]);
    }
  };

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentProblem((prev) => (prev + 1) % demoProblems.length);
  };

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
            <span className="text-sm">Zurück</span>
          </Link>
          <span className="text-lg font-semibold tracking-tight">Dreieck-1×1</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Demo-Modus</span>
          </div>
        </div>
      </header>

      <main className="section-padding">
        <div className="container-wide max-w-lg">
          {/* Progress */}
          <div className="flex justify-center gap-2 mb-8">
            {demoProblems.map((_, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  completed.includes(index) 
                    ? 'bg-primary' 
                    : index === currentProblem 
                      ? 'bg-primary/40' 
                      : 'bg-muted'
                }`}
              />
            ))}
          </div>

          {/* Triangle Interface */}
          <div className="card-elevated p-8 md:p-12 mb-6">
            <div className="text-center mb-8">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Aufgabe {currentProblem + 1} von {demoProblems.length}
              </span>
            </div>

            <div className="flex justify-center mb-8">
              <TriangleVisual
                product={problem.product}
                factorA={showAnswer && problem.factorA === null ? problem.answer : problem.factorA}
                factorB={showAnswer && problem.factorB === null ? problem.answer : problem.factorB}
                showMissing={!showAnswer}
              />
            </div>

            {/* Equation display */}
            <div className="text-center mb-8">
              <span className="text-xl font-medium text-foreground">
                {problem.product} = {problem.factorA ?? '?'} × {problem.factorB ?? '?'}
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              {!showAnswer ? (
                <Button variant="hero" size="lg" onClick={handleReveal} className="w-full">
                  <Play className="mr-2 h-5 w-5" />
                  Lösung zeigen
                </Button>
              ) : (
                <>
                  <div className="flex items-center justify-center gap-2 text-primary py-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-medium">
                      {problem.product} = {problem.factorA ?? problem.answer} × {problem.factorB ?? problem.answer}
                    </span>
                  </div>
                  <Button variant="hero" size="lg" onClick={handleNext} className="w-full">
                    Nächste Aufgabe
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Hint */}
          <p className="text-center text-sm text-muted-foreground">
            Dies ist eine Demo. Im echten Modus tippst du die Lösung selbst ein.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Student;
