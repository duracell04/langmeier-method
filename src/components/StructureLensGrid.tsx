export function StructureLensGrid() {
  // Show a 6x6 preview of the multiplication table structure
  const size = 6;
  const highlightProduct = 12; // Highlight cells that equal 12
  
  return (
    <div className="inline-flex flex-col gap-0.5" role="img" aria-label="Strukturlinse Vorschau">
      {/* Column headers */}
      <div className="flex gap-0.5 mb-1">
        <div className="w-6 h-6 md:w-7 md:h-7" /> {/* Empty corner */}
        {Array.from({ length: size }, (_, i) => (
          <div 
            key={`header-${i + 1}`}
            className="grid-cell text-muted-foreground/70 font-medium"
          >
            {i + 1}
          </div>
        ))}
      </div>
      
      {/* Grid rows */}
      {Array.from({ length: size }, (_, row) => (
        <div key={`row-${row + 1}`} className="flex gap-0.5">
          {/* Row header */}
          <div className="grid-cell text-muted-foreground/70 font-medium">
            {row + 1}
          </div>
          
          {/* Cells */}
          {Array.from({ length: size }, (_, col) => {
            const value = (row + 1) * (col + 1);
            const isHighlighted = value === highlightProduct;
            
            return (
              <div
                key={`cell-${row + 1}-${col + 1}`}
                className={`grid-cell ${
                  isHighlighted ? "grid-cell-active" : "grid-cell-inactive"
                }`}
              >
                {value}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
