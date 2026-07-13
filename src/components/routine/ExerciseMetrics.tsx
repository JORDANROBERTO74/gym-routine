import type { Exercise } from "@/types/routine";
import { formatRestShort } from "@/lib/format";
import { cn } from "@/lib/utils";

interface ExerciseMetricsProps {
  exercise: Exercise;
}

export default function ExerciseMetrics({ exercise }: ExerciseMetricsProps) {
  const restShort = formatRestShort(exercise.rest) ?? "—";

  const items = [
    { label: "Series", value: String(exercise.sets) },
    { label: "Reps", value: exercise.reps },
    { label: "Descanso", value: restShort },
  ];

  return (
    <div
      className="grid grid-cols-3 divide-x divide-border border-y border-border py-3 sm:py-4"
      role="group"
      aria-label="Series, repeticiones y descanso"
    >
      {items.map((item) => (
        <div key={item.label} className="px-2 text-center sm:px-4">
          <p
            className={cn(
              "font-display text-xl font-semibold tabular-nums tracking-tight text-foreground sm:text-2xl"
            )}
          >
            {item.value}
          </p>
          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
