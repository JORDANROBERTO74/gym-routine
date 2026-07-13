import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";
import type { Exercise, TrainingDayId } from "@/types/routine";
import { cn } from "@/lib/utils";
import { formatRestShort } from "@/lib/format";

interface ExerciseRowProps {
  exercise: Exercise;
  index: number;
  dayId: TrainingDayId;
}

export default function ExerciseRow({
  exercise,
  index,
  dayId,
}: ExerciseRowProps) {
  const hasMedia = Boolean(exercise.videoUrl || exercise.imageUrl);
  const restShort = formatRestShort(exercise.rest);

  return (
    <Link
      href={`/rutina/${dayId}/${exercise.id}`}
      aria-label={`${index + 1}. ${exercise.name}, ${exercise.sets} series por ${exercise.reps} repeticiones`}
      className={cn(
        "flex min-h-14 items-center gap-3 px-3.5 py-3.5 transition-colors",
        "active:scale-[0.99] active:bg-muted/80 sm:active:scale-100",
        "hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-semibold tabular-nums text-primary">
        {index + 1}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-foreground">{exercise.name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
          {exercise.sets} × {exercise.reps}
          {restShort ? ` · ${restShort}` : null}
        </p>
      </div>
      {hasMedia ? (
        <Play className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
      ) : null}
      <ChevronRight
        className="h-4 w-4 shrink-0 text-muted-foreground"
        aria-hidden
      />
    </Link>
  );
}
