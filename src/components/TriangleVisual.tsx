interface TriangleVisualProps {
  product: number;
  factorA: number | null;
  factorB: number | null;
  showMissing?: boolean;
}

export function TriangleVisual({ 
  product, 
  factorA, 
  factorB, 
  showMissing = true 
}: TriangleVisualProps) {
  // Determine which operation is active based on what's missing
  // If a factor is missing, we need division (product ÷ known factor = ?)
  // If product would be missing (not in current use case), we need multiplication
  const hasMissingFactor = factorA === null || factorB === null;
  const activeOperator = hasMissingFactor ? "÷" : "×";

  return (
    <div className="triangle-container relative flex flex-col items-center">
      {/* Product node at top */}
      <div className="triangle-node triangle-node-product">
        {product}
      </div>
      
      {/* Triangle body with operator in center */}
      <div className="relative">
        {/* Connecting lines */}
        <svg 
          className="w-32 h-16 text-border" 
          viewBox="0 0 128 64" 
          fill="none"
          aria-hidden="true"
        >
          {/* Left line */}
          <path 
            d="M64 0 L20 64" 
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Right line */}
          <path 
            d="M64 0 L108 64" 
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Bottom line */}
          <path 
            d="M20 64 L108 64" 
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Operator in center of triangle */}
        <div className="absolute inset-0 flex items-center justify-center pt-4">
          <span className="text-xl font-semibold text-primary">
            {activeOperator}
          </span>
        </div>
      </div>
      
      {/* Factor nodes at bottom */}
      <div className="flex items-center gap-12 -mt-2">
        {showMissing && factorA === null ? (
          <div className="triangle-node triangle-node-missing">
            ?
          </div>
        ) : (
          <div className="triangle-node triangle-node-factor">
            {factorA}
          </div>
        )}
        {showMissing && factorB === null ? (
          <div className="triangle-node triangle-node-missing">
            ?
          </div>
        ) : (
          <div className="triangle-node triangle-node-factor">
            {factorB}
          </div>
        )}
      </div>
    </div>
  );
}
