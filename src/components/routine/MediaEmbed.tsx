"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { getYoutubeEmbedUrl } from "@/lib/youtube";
import { Spinner } from "@/components/ui/spinner";

/** Si el iframe no dispara onLoad, ocultar el spinner de todos modos. */
const LOAD_FALLBACK_MS = 1000;

interface MediaEmbedProps {
  imageUrl?: string;
  videoUrl?: string;
  title: string;
}

function YoutubeEmbed({ src, title }: { src: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const timeoutId = window.setTimeout(() => {
      setLoaded(true);
    }, LOAD_FALLBACK_MS);

    return () => window.clearTimeout(timeoutId);
  }, [src]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
      {!loaded ? (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-muted"
          aria-busy="true"
        >
          <Spinner />
          <span className="text-xs text-muted-foreground">Cargando video…</span>
        </div>
      ) : null}
      <iframe
        src={src}
        title={`Video: ${title}`}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default function MediaEmbed({
  imageUrl,
  videoUrl,
  title,
}: MediaEmbedProps) {
  const embedUrl = videoUrl ? getYoutubeEmbedUrl(videoUrl) : null;

  if (!imageUrl && !embedUrl) {
    return (
      <div className="flex min-h-[7.5rem] w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/40 px-4 py-6 text-muted-foreground sm:aspect-video sm:min-h-0 sm:py-0">
        <PlayCircle className="h-7 w-7 opacity-45 sm:h-8 sm:w-8" aria-hidden />
        <p className="text-sm">Sin video de referencia</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {imageUrl ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
          <Image
            src={imageUrl}
            alt={`Referencia: ${title}`}
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </div>
      ) : null}

      {embedUrl ? <YoutubeEmbed src={embedUrl} title={title} /> : null}
    </div>
  );
}
