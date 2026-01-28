import { cn } from "@/lib/utils";

interface StructureLensGridProps {
  product?: number;
  factorA?: number | null;
  factorB?: number | null;
  answer?: number;
  className?: string;
}

export function StructureLensGrid({ 
  product = 12, 
  factorA = 3, 
  factorB = 4, 
  answer,
  className 
}: StructureLensGridProps) {
  // Determine the grid size based on the factors
  const knownFactor = factorA ?? factorB ?? 1;
  const effectiveAnswer = answer ?? (factorA ? factorB : factorA) ?? 4;
  const maxFactor = Math.max(knownFactor ?? 1, effectiveAnswer);
  const size = Math.max(maxFactor + 1, 6); // At least 6x6 for visibility
  
  // Determine which row and column to highlight
  const highlightRow = factorA ?? effectiveAnswer;
  const highlightCol = factorB ?? effectiveAnswer;
  
  return (
    <div className={cn("inline-flex flex-col gap-0.5", className)} role="img" aria-label="Strukturlinse Hilfe">
      {/* Column headers */}
      <div className="flex gap-0.5 mb-1">
        <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-bold text-muted-foreground">
          ×
        </div>
        {Array.from({ length: size }, (_, i) => (
          <div 
            key={`header-${i + 1}`}
            className={cn(
              "w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-medium rounded-sm transition-colors",
              i + 1 === highlightCol 
                ? "bg-primary/20 text-primary font-semibold" 
                : "text-muted-foreground/70"
            )}
          >
            {i + 1}
          </div>
        ))}
      </div>
      
      {/* Grid rows */}
      {Array.from({ length: size }, (_, row) => (
        <div key={`row-${row + 1}`} className="flex gap-0.5">
          {/* Row header */}
          <div className={cn(
            "w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-medium rounded-sm transition-colors",
            row + 1 === highlightRow 
              ? "bg-primary/20 text-primary font-semibold" 
              : "text-muted-foreground/70"
          )}>
            {row + 1}
          </div>
          
          {/* Cells */}
          {Array.from({ length: size }, (_, col) => {
            const value = (row + 1) * (col + 1);
            const isTarget = value === product && row + 1 === highlightRow && col + 1 === highlightCol;
            const isInRow = row + 1 === highlightRow && col + 1 <= highlightCol;
            const isInCol = col + 1 === highlightCol && row + 1 <= highlightRow;
            
            return (
              <div
                key={`cell-${row + 1}-${col + 1}`}
                className={cn(
                  "w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs rounded-sm transition-all",
                  isTarget 
                    ? "bg-primary text-primary-foreground font-bold ring-2 ring-primary ring-offset-1" 
                    : isInRow || isInCol
                      ? "bg-primary/10 text-primary/80"
                      : "bg-muted/30 text-muted-foreground/40"
                )}
              >
                {value}
              </div>
            );
          })}
        </div>
      ))}
      
      {/* Explanation */}
      <div className="mt-3 text-center text-sm text-muted-foreground">
        <span className="font-medium text-primary">{highlightRow}</span>
        <span> × </span>
        <span className="font-medium text-primary">{highlightCol}</span>
        <span> = </span>
        <span className="font-semibold text-foreground">{product}</span>
      </div>
    </div>
  );
}
