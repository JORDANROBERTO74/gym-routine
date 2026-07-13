import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageBackLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function PageBackLink({
  href,
  label,
  className,
}: PageBackLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 max-w-full items-center gap-1 -ml-1 truncate px-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground active:text-foreground",
        className
      )}
    >
      <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
      <span className="truncate">{label}</span>
    </Link>
  );
}
