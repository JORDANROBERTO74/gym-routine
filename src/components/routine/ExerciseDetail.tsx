import Link from "next/link";
import type { Exercise, TrainingDayId } from "@/types/routine";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import MediaEmbed from "./MediaEmbed";
import ExerciseMetrics from "./ExerciseMetrics";
import ExerciseProgress from "./ExerciseProgress";

interface ExerciseDetailProps {
  exercise: Exercise;
  index: number;
  total: number;
}

export default function ExerciseDetail({
  exercise,
  index,
  total,
}: ExerciseDetailProps) {
  return (
    <div>
      <header className="mb-4 sm:mb-5">
        <ExerciseProgress index={index} total={total} />
        <h1 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl">
          {exercise.name}
        </h1>
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {exercise.description}
        </p>
      </header>

      <MediaEmbed
        imageUrl={exercise.imageUrl}
        videoUrl={exercise.videoUrl}
        title={exercise.name}
      />

      <div className="mt-5 sm:mt-6">
        <ExerciseMetrics exercise={exercise} />
      </div>

      {exercise.tips.length > 0 ? (
        <div className="mt-5 rounded-xl border border-border bg-accent/50 px-4 py-3.5 sm:mt-6">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
            Consejos
          </p>
          <ol className="mt-2.5 list-decimal space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground">
            {exercise.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}

interface ExerciseNavProps {
  dayId: TrainingDayId;
  prev: Exercise | null;
  next: Exercise | null;
}

export function ExerciseNav({ dayId, prev, next }: ExerciseNavProps) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm"
      aria-label="Navegación entre ejercicios"
    >
      <div className="container mx-auto flex max-w-3xl gap-2 px-3 py-3 sm:gap-3 sm:px-4">
        {prev ? (
          <Button
            variant="outline"
            className="h-12 min-h-12 flex-1 justify-start px-3"
            asChild
          >
            <Link href={`/rutina/${dayId}/${prev.id}`}>
              <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
              <span className="truncate">
                <span className="sm:hidden">Anterior</span>
                <span className="hidden sm:inline">{prev.name}</span>
              </span>
            </Link>
          </Button>
        ) : (
          <Button
            variant="outline"
            className="h-12 min-h-12 flex-1 justify-start px-3"
            disabled
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Anterior
          </Button>
        )}

        {next ? (
          <Button
            variant="default"
            className="h-12 min-h-12 flex-1 justify-end px-3"
            asChild
          >
            <Link href={`/rutina/${dayId}/${next.id}`}>
              <span className="truncate">
                <span className="sm:hidden">Siguiente</span>
                <span className="hidden sm:inline">{next.name}</span>
              </span>
              <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
          </Button>
        ) : (
          <Button
            variant="default"
            className="h-12 min-h-12 flex-1 justify-end px-3"
            asChild
          >
            <Link href={`/rutina/${dayId}/fin`}>
              <span className="truncate">Fin del día</span>
              <Check className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
