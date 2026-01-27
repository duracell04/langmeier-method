interface TriangleVisualProps {
  product: number;
  factorA: number;
  factorB: number | null;
  showMissing?: boolean;
}

export function TriangleVisual({ 
  product, 
  factorA, 
  factorB, 
  showMissing = true 
}: TriangleVisualProps) {
  return (
    <div className="triangle-container flex flex-col items-center gap-3">
      {/* Product node at top */}
      <div className="triangle-node triangle-node-product">
        {product}
      </div>
      
      {/* Connecting lines - simplified SVG */}
      <svg 
        className="w-24 h-6 text-border" 
        viewBox="0 0 96 24" 
        fill="none"
        aria-hidden="true"
      >
        <path 
          d="M48 0 L16 24 M48 0 L80 24" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      
      {/* Factor nodes at bottom */}
      <div className="flex items-center gap-8">
        <div className="triangle-node triangle-node-factor">
          {factorA}
        </div>
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
      
      {/* Operator labels */}
      <div className="flex items-center gap-6 mt-2 text-xs text-muted-foreground">
        <span>×</span>
        <span className="text-primary font-medium">÷</span>
      </div>
    </div>
  );
}
