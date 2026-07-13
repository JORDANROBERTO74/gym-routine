import FadeIn from "@/components/routine/FadeIn";
import HomeHero from "@/components/home/HomeHero";
import HowItWorks from "@/components/home/HowItWorks";
import RoutineDayCard from "@/components/routine/RoutineDayCard";
import { routineDays } from "@/data/routine";

export default function Home() {
  const exerciseCount = routineDays.reduce(
    (sum, day) => sum + day.exercises.length,
    0
  );

  return (
    <div className="min-h-screen">
      <FadeIn>
        <HomeHero
          dayCount={routineDays.length}
          exerciseCount={exerciseCount}
        />
      </FadeIn>

      <section
        id="rutinas"
        className="scroll-mt-16 sm:scroll-mt-20"
        aria-labelledby="routines-heading"
      >
        <div className="container mx-auto max-w-3xl px-3 py-8 sm:px-4 sm:py-12 md:py-16">
          <FadeIn delay={0.05}>
            <header className="mb-5 sm:mb-8">
              <h2
                id="routines-heading"
                className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl"
              >
                Elige tu día
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground sm:mt-2 md:text-base">
                Entra a la rutina y sigue los ejercicios en orden.
              </p>
            </header>

            <div className="flex flex-col gap-2.5 sm:grid sm:grid-cols-2 sm:gap-5">
              {routineDays.map((day) => (
                <RoutineDayCard key={day.id} day={day} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn delay={0.08}>
        <HowItWorks />
      </FadeIn>
    </div>
  );
}
