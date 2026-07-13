import type { RoutineDay } from "@/types/routine";
import { cn } from "@/lib/utils";
import { getFocusStyle } from "@/lib/focus-styles";

interface DaySessionHeaderProps {
  day: RoutineDay;
}

export default function DaySessionHeader({ day }: DaySessionHeaderProps) {
  const style = getFocusStyle(day.focus);
  const dayNumber = String(day.number).padStart(2, "0");

  return (
    <header className="relative mb-6 sm:mb-8">
      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
                style.badge
              )}
            >
              Día {day.number}
            </span>
            <span className={cn("h-1.5 w-1.5 rounded-full", style.bar)} aria-hidden />
            <span className="text-xs font-medium text-muted-foreground">
              {day.exercises.length} ejercicios
            </span>
          </div>

          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {day.focus}
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
            {day.detail}
          </p>
        </div>

        <span
          className="hidden select-none font-display text-6xl font-semibold leading-none text-foreground/[0.06] tabular-nums sm:block"
          aria-hidden
        >
          {dayNumber}
        </span>
      </div>

      {day.summary ? (
        <div className="mt-4 rounded-xl border border-border bg-accent/50 px-3.5 py-3 sm:mt-5 sm:px-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
            Tip
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {day.summary}
          </p>
        </div>
      ) : null}

      <div
        className={cn("mt-5 h-0.5 w-12 rounded-full sm:mt-6", style.bar)}
        aria-hidden
      />
    </header>
  );
}
