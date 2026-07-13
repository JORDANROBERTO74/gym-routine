"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Droplets, HeartPulse } from "lucide-react";
import type { RoutineDay } from "@/types/routine";
import { cn } from "@/lib/utils";
import { getFocusStyle } from "@/lib/focus-styles";
import { Button } from "@/components/ui/button";

interface DayCompleteProps {
  day: RoutineDay;
}

export default function DayComplete({ day }: DayCompleteProps) {
  const style = getFocusStyle(day.focus);

  return (
    <div className="flex flex-col items-start py-6 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
              style.badge
            )}
          >
            Día {day.number} · {day.focus}
          </span>
          <span
            className={cn("h-1.5 w-1.5 rounded-full", style.bar)}
            aria-hidden
          />
          <span className="text-xs font-medium text-muted-foreground">
            Completado
          </span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          ¡Felicitaciones!
        </h1>
        <p className="mt-2 max-w-md text-base text-muted-foreground sm:text-lg">
          Lo hiciste excelente.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.12 }}
        className="mt-8 w-full max-w-md space-y-4"
      >
        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
          Antes de cerrar
        </p>
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <li className="flex items-start gap-3">
            <HeartPulse
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden
            />
            <span>Recuerda hacer 30 minutos de cardio.</span>
          </li>
          <li className="flex items-start gap-3">
            <Droplets
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden
            />
            <span>Toma agüita y recupérate bien.</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.22 }}
        className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
      >
        <Button className="h-12 min-h-12 flex-1" asChild>
          <Link href={`/rutina/${day.id}`}>Ver ejercicios del día</Link>
        </Button>
        <Button variant="outline" className="h-12 min-h-12 flex-1" asChild>
          <Link href="/">Volver a las rutinas</Link>
        </Button>
      </motion.div>

      <div
        className={cn("mt-10 h-0.5 w-12 rounded-full", style.bar)}
        aria-hidden
      />
    </div>
  );
}
