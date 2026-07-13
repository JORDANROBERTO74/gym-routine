import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { RoutineDay } from "@/types/routine";
import { cn } from "@/lib/utils";
import { getFocusStyle } from "@/lib/focus-styles";

interface RoutineDayCardProps {
  day: RoutineDay;
}

export default function RoutineDayCard({ day }: RoutineDayCardProps) {
  const style = getFocusStyle(day.focus);
  const dayNumber = String(day.number).padStart(2, "0");

  return (
    <Link
      href={`/rutina/${day.id}`}
      aria-label={`${day.label}: ${day.focus}, ${day.detail}. ${day.exercises.length} ejercicios`}
      className={cn(
        "group relative flex overflow-hidden rounded-2xl border border-border bg-card text-card-foreground",
        "min-h-[4.5rem] sm:min-h-[10.5rem]",
        "transition-all duration-200 active:scale-[0.98] active:border-primary/50",
        "sm:hover:-translate-y-1 sm:hover:border-primary/40 sm:active:scale-100",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        style.glow
      )}
    >
      <span
        className={cn("w-1 shrink-0 self-stretch sm:w-1.5", style.bar)}
        aria-hidden
      />

      <div className="flex flex-1 items-center gap-3 px-3.5 py-3.5 sm:hidden">
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold tabular-nums",
            style.badge
          )}
        >
          {dayNumber}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-base font-semibold leading-tight text-foreground">
            {day.focus}
          </p>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {day.detail} · {day.exercises.length} ej.
          </p>
        </div>
        <ArrowRight
          className="h-5 w-5 shrink-0 text-muted-foreground"
          aria-hidden
        />
      </div>

      <div className="hidden flex-1 flex-col justify-between gap-6 p-5 sm:flex sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <span
              className={cn(
                "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
                style.badge
              )}
            >
              Día {day.number}
            </span>
            <h3 className="mt-3 font-display text-[1.75rem] font-semibold leading-none tracking-tight text-foreground">
              {day.focus}
            </h3>
            <p className="mt-2 text-sm leading-snug text-muted-foreground">
              {day.detail}
            </p>
          </div>

          <span
            className="select-none font-display text-4xl font-semibold leading-none text-foreground/[0.07] tabular-nums"
            aria-hidden
          >
            {dayNumber}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="text-sm font-medium text-muted-foreground">
            {day.exercises.length} ejercicios
          </span>
          <span
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background",
              "transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
            )}
          >
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
