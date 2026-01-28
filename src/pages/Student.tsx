import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TriangleVisual } from "@/components/TriangleVisual";
import { NumpadInput } from "@/components/NumpadInput";
import { StructureLensGrid } from "@/components/StructureLensGrid";
import { cn } from "@/lib/utils";

const demoProblems = [
  { product: 12, factorA: 3, factorB: null, answer: 4 },
  { product: 20, factorA: null, factorB: 5, answer: 4 },
  { product: 18, factorA: 6, factorB: null, answer: 3 },
];

const Student = () => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);

  const problem = demoProblems[currentProblem];
  const isAnswered = feedback !== null;

  const handleSubmit = () => {
    const isCorrect = parseInt(userAnswer) === problem.answer;
    setFeedback(isCorrect ? "correct" : "wrong");
    
    if (isCorrect && !completed.includes(currentProblem)) {
      setCompleted([...completed, currentProblem]);
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setUserAnswer("");
    setCurrentProblem((prev) => (prev + 1) % demoProblems.length);
  };

  const handleRetry = () => {
    setFeedback(null);
    setUserAnswer("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container-wide flex h-14 items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-subtle"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Zurück</span>
          </Link>
          <span className="text-lg font-semibold tracking-tight">Dreieck-1×1</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded-full">Demo</span>
          </div>
        </div>
      </header>

      {/* Main Content - Desktop/Tablet: side by side, Mobile: stacked with fixed numpad */}
      <main className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-center gap-6 p-4 lg:p-8 pb-[320px] lg:pb-8">
        {/* Triangle Card */}
        <div className="flex-1 flex flex-col items-center lg:items-end lg:max-w-md">
          {/* Progress */}
          <div className="flex justify-center gap-2 mb-6 w-full max-w-sm">
            {demoProblems.map((_, index) => (
              <div 
                key={index}
                className={cn(
                  "h-2 flex-1 rounded-full transition-colors",
                  completed.includes(index) 
                    ? "bg-primary" 
                    : index === currentProblem 
                      ? "bg-primary/40" 
                      : "bg-muted"
                )}
              />
            ))}
          </div>

          <div className="card-elevated p-6 md:p-8 w-full max-w-sm">
            <div className="text-center mb-6">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Aufgabe {currentProblem + 1} von {demoProblems.length}
              </span>
            </div>

            <div className="flex justify-center mb-6">
              <TriangleVisual
                product={problem.product}
                factorA={feedback === "correct" && problem.factorA === null ? problem.answer : problem.factorA}
                factorB={feedback === "correct" && problem.factorB === null ? problem.answer : problem.factorB}
                showMissing={feedback !== "correct"}
              />
            </div>

            {/* Equation display */}
            <div className="text-center mb-4">
              <span className="text-xl font-medium text-foreground">
                {problem.product} = {problem.factorA ?? "?"} × {problem.factorB ?? "?"}
              </span>
            </div>

            {/* Feedback */}
            {feedback && (
              <div className={cn(
                "flex flex-col items-center gap-3 py-3 rounded-lg mb-4",
                feedback === "correct" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
              )}>
                {feedback === "correct" ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-medium">Richtig! {problem.answer}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    <span className="font-medium">Nicht ganz. Schau dir die Hilfe an!</span>
                  </div>
                )}
              </div>
            )}

            {/* Structure Grid Helper on wrong answer */}
            {feedback === "wrong" && (
              <div className="card-elevated p-4 mb-4 bg-muted/30">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Strukturlinse
                  </span>
                </div>
                <div className="flex justify-center">
                  <StructureLensGrid
                    product={problem.product}
                    factorA={problem.factorA}
                    factorB={problem.factorB}
                    answer={problem.answer}
                  />
                </div>
              </div>
            )}

            {/* Actions after answer */}
            {feedback === "correct" && (
              <Button variant="hero" size="lg" onClick={handleNext} className="w-full">
                Nächste Aufgabe
              </Button>
            )}
            {feedback === "wrong" && (
              <Button variant="secondary" size="lg" onClick={handleRetry} className="w-full">
                Nochmal versuchen
              </Button>
            )}
          </div>
        </div>

        {/* Numpad - Desktop: right side */}
        <div className="hidden lg:flex flex-col items-start lg:max-w-xs">
          <div className="card-elevated p-6 w-full">
            <div className="text-center mb-4">
              <span className="text-sm font-medium text-muted-foreground">Deine Antwort</span>
            </div>
            <NumpadInput
              value={userAnswer}
              onChange={setUserAnswer}
              onSubmit={handleSubmit}
              disabled={isAnswered}
            />
          </div>
        </div>
      </main>

      {/* Numpad - Mobile: fixed at bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border p-4 pb-6 safe-area-pb">
        <NumpadInput
          value={userAnswer}
          onChange={setUserAnswer}
          onSubmit={handleSubmit}
          disabled={isAnswered}
        />
      </div>
    </div>
  );
};

export default Student;
