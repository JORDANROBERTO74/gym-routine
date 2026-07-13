import { notFound } from "next/navigation";
import DayComplete from "@/components/routine/DayComplete";
import FadeIn from "@/components/routine/FadeIn";
import PageBackLink from "@/components/routine/PageBackLink";
import {
  getDayById,
  isValidDayId,
  routineDays,
} from "@/data/routine";

interface DayFinPageProps {
  params: { dayId: string };
}

export function generateStaticParams() {
  return routineDays.map((day) => ({ dayId: day.id }));
}

export function generateMetadata({ params }: DayFinPageProps) {
  if (!isValidDayId(params.dayId)) {
    return { title: "Día no encontrado | Gym Routine" };
  }
  const day = getDayById(routineDays, params.dayId);
  if (!day) {
    return { title: "Día no encontrado | Gym Routine" };
  }
  return {
    title: `¡Día completado! · ${day.label} | Gym Routine`,
    description: `Completaste ${day.label} (${day.focus}). Recuerda el cardio y la hidratación.`,
  };
}

export default function DayFinPage({ params }: DayFinPageProps) {
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
          <PageBackLink
            href={`/rutina/${day.id}`}
            label={`${day.label} · ${day.focus}`}
          />
          <DayComplete day={day} />
        </FadeIn>
      </section>
    </div>
  );
}
