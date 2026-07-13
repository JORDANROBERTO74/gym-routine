import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HomeHeroProps {
  dayCount: number;
  exerciseCount: number;
}

export default function HomeHero({ dayCount, exerciseCount }: HomeHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-[#1C1C1C] text-white"
      aria-labelledby="home-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(62,207,142,0.22),transparent_60%)]"
        aria-hidden
      />
      <div className="relative container mx-auto max-w-3xl px-4 pt-[5.5rem] pb-10 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20">
        <div className="mb-5 flex items-center gap-2.5 sm:mb-8 sm:gap-3">
          <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <Image
              src="/img/logo.png"
              alt=""
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <p className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
            Gym Routine
          </p>
        </div>

        <h1
          id="home-hero-heading"
          className="font-display max-w-[14ch] text-[2rem] font-semibold leading-[1.15] tracking-tight text-white sm:max-w-xl sm:text-4xl md:text-5xl"
        >
          Tu semana de entrenamiento
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base md:text-lg">
          <span className="text-primary font-medium">
            {dayCount} días · {exerciseCount} ejercicios
          </span>
          <span className="hidden sm:inline">
            {" "}
            con series, descanso y referencias en video.
          </span>
          <span className="sm:hidden">. Elige el día y entrena.</span>
        </p>

        <div className="mt-6 sm:mt-8">
          <Button
            size="lg"
            className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 sm:w-auto sm:min-w-[11rem]"
            asChild
          >
            <Link href="#rutinas">
              Ver rutinas
              <ChevronDown className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
