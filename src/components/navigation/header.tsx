"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Rutinas", href: "/#rutinas", short: "Rutinas" },
  { name: "Cómo usarla", href: "/#como-usarla", short: "Guía" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300",
        isHome && !isScrolled
          ? "bg-[#1C1C1C]/90 border-white/10 text-white backdrop-blur-sm"
          : "bg-background/95 border-border text-foreground backdrop-blur-sm",
        isScrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <div className="w-full px-3 sm:px-4 md:px-16">
        <div className="mx-auto flex h-14 max-w-[1488px] items-center justify-between sm:h-16">
          <Link
            href="/"
            className="flex min-h-11 items-center gap-2 sm:gap-3"
            aria-label="Gym Routine — inicio"
          >
            <div className="relative h-7 w-7 sm:h-8 sm:w-8">
              <Image
                src="/img/logo.png"
                alt=""
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span
              className={cn(
                "font-display text-base font-semibold sm:text-lg",
                isHome && !isScrolled ? "text-white" : "text-foreground"
              )}
            >
              Gym Routine
            </span>
          </Link>

          <nav
            className="flex items-center gap-1 sm:gap-2"
            aria-label="Principal"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-md px-2.5 text-sm font-medium transition-colors sm:px-3",
                  isHome && !isScrolled
                    ? "text-white/70 active:bg-white/10 hover:text-white"
                    : "text-muted-foreground active:bg-muted hover:text-foreground"
                )}
              >
                <span className="sm:hidden">{item.short}</span>
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
