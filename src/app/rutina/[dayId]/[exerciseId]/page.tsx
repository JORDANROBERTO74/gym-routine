import { notFound } from "next/navigation";
import ExerciseDetail, {
  ExerciseNav,
} from "@/components/routine/ExerciseDetail";
import FadeIn from "@/components/routine/FadeIn";
import PageBackLink from "@/components/routine/PageBackLink";
import {
  getAdjacentExercises,
  getDayById,
  getExerciseById,
  isValidDayId,
  routineDays,
} from "@/data/routine";

interface ExercisePageProps {
  params: { dayId: string; exerciseId: string };
}

export function generateStaticParams() {
  return routineDays.flatMap((day) =>
    day.exercises.map((exercise) => ({
      dayId: day.id,
      exerciseId: exercise.id,
    }))
  );
}

export function generateMetadata({ params }: ExercisePageProps) {
  if (!isValidDayId(params.dayId)) {
    return { title: "Ejercicio no encontrado | Gym Routine" };
  }
  const day = getDayById(routineDays, params.dayId);
  const exercise = day
    ? getExerciseById(day, params.exerciseId)
    : undefined;
  if (!day || !exercise) {
    return { title: "Ejercicio no encontrado | Gym Routine" };
  }
  return {
    title: `${exercise.name} | ${day.label} | Gym Routine`,
    description: exercise.description,
  };
}

export default function ExercisePage({ params }: ExercisePageProps) {
  if (!isValidDayId(params.dayId)) {
    notFound();
  }

  const day = getDayById(routineDays, params.dayId);
  if (!day) {
    notFound();
  }

  const exercise = getExerciseById(day, params.exerciseId);
  if (!exercise) {
    notFound();
  }

  const { prev, next } = getAdjacentExercises(day, exercise.id);
  const index = day.exercises.findIndex((item) => item.id === exercise.id);

  return (
    <div className="min-h-screen pt-14 sm:pt-16">
      <section className="container mx-auto max-w-3xl px-3 py-5 pb-28 sm:px-4 sm:py-6 sm:pb-28">
        <FadeIn>
          <PageBackLink
            href={`/rutina/${day.id}`}
            label={`${day.label} · ${day.focus}`}
          />

          <div className="mt-3">
            <ExerciseDetail
              exercise={exercise}
              index={index}
              total={day.exercises.length}
            />
          </div>
        </FadeIn>
      </section>

      <ExerciseNav dayId={day.id} prev={prev} next={next} />
    </div>
  );
}
