import { CalendarDays, ListOrdered, PlayCircle } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Elige el día",
    description: "Abre la card del día que entrenas hoy.",
    icon: CalendarDays,
  },
  {
    number: "2",
    title: "Revisa la lista",
    description: "Series, reps y orden de los ejercicios.",
    icon: ListOrdered,
  },
  {
    number: "3",
    title: "Abre el detalle",
    description: "Video, notas de técnica y siguiente ejercicio.",
    icon: PlayCircle,
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="como-usarla"
      className="scroll-mt-20 border-t border-border"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto max-w-3xl px-4 py-10 sm:py-12 md:py-16">
        <h2
          id="how-it-works-heading"
          className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl"
        >
          Cómo usarla
        </h2>
        <p className="mt-1.5 text-sm text-muted-foreground sm:mt-2 md:text-base">
          Tres pasos. Sin distracciones en el gym.
        </p>

        <ol className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card sm:mt-8 sm:grid sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-y-0">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className="flex items-start gap-3 px-4 py-4 sm:flex-col sm:gap-0 sm:p-5"
              >
                <div className="flex shrink-0 items-center gap-2 sm:mb-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                    aria-hidden
                  >
                    {step.number}
                  </span>
                  <Icon className="hidden h-5 w-5 text-primary sm:block" aria-hidden />
                </div>
                <div className="min-w-0 pt-0.5 sm:pt-0">
                  <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground sm:mt-1.5">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
