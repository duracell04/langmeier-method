import { Delete, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NumpadInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
  maxLength?: number;
  className?: string;
}

const NumpadInput = ({ 
  value, 
  onChange, 
  onSubmit, 
  disabled = false,
  maxLength = 3,
  className 
}: NumpadInputProps) => {
  const handleNumber = (num: string) => {
    if (disabled) return;
    if (value.length < maxLength) {
      onChange(value + num);
    }
  };

  const handleDelete = () => {
    if (disabled) return;
    onChange(value.slice(0, -1));
  };

  const handleClear = () => {
    if (disabled) return;
    onChange("");
  };

  const numpadKeys = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
  ];

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {/* Display */}
      <div className="bg-muted/50 rounded-lg px-4 py-3 text-center min-h-[52px] flex items-center justify-center border border-border">
        <span className={cn(
          "text-2xl font-semibold tracking-wider transition-all",
          value ? "text-foreground" : "text-muted-foreground/50"
        )}>
          {value || "—"}
        </span>
      </div>

      {/* Numpad Grid */}
      <div className="grid grid-cols-3 gap-2">
        {numpadKeys.map((row, rowIndex) =>
          row.map((num) => (
            <Button
              key={num}
              variant="secondary"
              size="lg"
              onClick={() => handleNumber(num)}
              disabled={disabled}
              className="h-14 text-xl font-semibold hover:bg-secondary/80 active:scale-95 transition-all"
            >
              {num}
            </Button>
          ))
        )}
        
        {/* Bottom row: Clear, 0, Delete */}
        <Button
          variant="ghost"
          size="lg"
          onClick={handleClear}
          disabled={disabled || !value}
          className="h-14 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          AC
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => handleNumber("0")}
          disabled={disabled}
          className="h-14 text-xl font-semibold hover:bg-secondary/80 active:scale-95 transition-all"
        >
          0
        </Button>
        <Button
          variant="ghost"
          size="lg"
          onClick={handleDelete}
          disabled={disabled || !value}
          className="h-14 text-muted-foreground hover:text-foreground"
        >
          <Delete className="h-5 w-5" />
        </Button>
      </div>

      {/* Submit Button */}
      <Button
        variant="hero"
        size="lg"
        onClick={onSubmit}
        disabled={disabled || !value}
        className="h-14 text-lg"
      >
        <Check className="mr-2 h-5 w-5" />
        Prüfen
      </Button>
    </div>
  );
};

export { NumpadInput };
