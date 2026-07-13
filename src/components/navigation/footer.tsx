"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function isExerciseDetailPath(pathname: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  return parts[0] === "rutina" && parts.length === 3;
}

export default function Footer() {
  const pathname = usePathname();

  if (isExerciseDetailPath(pathname)) {
    return null;
  }

  return (
    <footer
      className="mt-auto w-full bg-foreground text-background"
      role="contentinfo"
    >
      <div className="py-8 sm:py-10">
        <div className="container mx-auto max-w-3xl px-3 sm:px-4">
          <Link href="/" className="mb-3 inline-flex items-center space-x-3">
            <div className="relative h-8 w-8">
              <Image
                src="/img/logo.png"
                alt=""
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="font-display text-lg font-semibold">
              Gym Routine
            </span>
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-background/70">
            Anotaciones personales de rutina de gym: ejercicios por día con
            referencias de video e imagen.
          </p>
        </div>
      </div>

      <div className="border-t border-background/15 py-5">
        <div className="container mx-auto flex max-w-3xl flex-col justify-between gap-2 px-3 text-sm text-background/55 sm:flex-row sm:px-4">
          <p>© 2026 Gym Routine</p>
          <p>Roberto Jordan — Software Dev.</p>
        </div>
      </div>
    </footer>
  );
}
