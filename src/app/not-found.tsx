"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-4 text-center pt-16">
      <h1 className="text-2xl font-semibold text-foreground">Página no encontrada</h1>
      <p className="text-muted-foreground text-sm">
        La ruta que buscas no existe.
      </p>
      <Link
        href="/"
        className="text-primary underline-offset-4 hover:underline text-sm font-medium"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
