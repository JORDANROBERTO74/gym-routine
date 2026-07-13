import { cn } from "@/lib/utils";

interface ExerciseProgressProps {
  index: number;
  total: number;
}

export default function ExerciseProgress({
  index,
  total,
}: ExerciseProgressProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium uppercase tracking-wider text-primary">
        Ejercicio {index + 1} de {total}
      </p>
      <div
        className="flex items-center gap-1.5"
        role="progressbar"
        aria-valuenow={index + 1}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Progreso: ejercicio ${index + 1} de ${total}`}
      >
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              i <= index ? "bg-primary" : "bg-border"
            )}
          />
        ))}
      </div>
    </div>
  );
}
