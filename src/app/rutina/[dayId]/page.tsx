import { notFound } from "next/navigation";
import DaySessionHeader from "@/components/routine/DaySessionHeader";
import ExerciseRow from "@/components/routine/ExerciseRow";
import FadeIn from "@/components/routine/FadeIn";
import PageBackLink from "@/components/routine/PageBackLink";
import {
  getDayById,
  isValidDayId,
  routineDays,
} from "@/data/routine";

interface DayPageProps {
  params: { dayId: string };
}

export function generateStaticParams() {
  return routineDays.map((day) => ({ dayId: day.id }));
}

export function generateMetadata({ params }: DayPageProps) {
  if (!isValidDayId(params.dayId)) {
    return { title: "Día no encontrado | Gym Routine" };
  }
  const day = getDayById(routineDays, params.dayId);
  if (!day) {
    return { title: "Día no encontrado | Gym Routine" };
  }
  return {
    title: `${day.label} · ${day.focus} | Gym Routine`,
    description: `${day.detail}. ${day.exercises.length} ejercicios.`,
  };
}

export default function DayPage({ params }: DayPageProps) {
  if (!isValidDayId(params.dayId)) {
    notFound();
  }

  const day = getDayById(routineDays, params.dayId);
  if (!day) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-14 sm:pt-16">
      <section className="container mx-auto max-w-3xl px-3 py-5 sm:px-4 sm:py-6">
        <FadeIn>
          <PageBackLink href="/" label="Rutinas" />

          <div className="mt-2">
            <DaySessionHeader day={day} />
          </div>

          {day.exercises.length === 0 ? (
            <p className="py-10 text-center text-muted-foreground">
              No hay ejercicios para este día.
            </p>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-border bg-card divide-y divide-border">
              {day.exercises.map((exercise, index) => (
                <ExerciseRow
                  key={exercise.id}
                  exercise={exercise}
                  index={index}
                  dayId={day.id}
                />
              ))}
            </div>
          )}
        </FadeIn>
      </section>
    </div>
  );
}
