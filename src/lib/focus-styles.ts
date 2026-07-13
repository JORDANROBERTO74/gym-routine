export type FocusStyle = {
  bar: string;
  badge: string;
  glow: string;
};

export const focusStyles: Record<string, FocusStyle> = {
  Legs: {
    bar: "bg-primary",
    badge: "bg-primary/15 text-primary",
    glow: "sm:group-hover:shadow-[0_12px_40px_-16px_rgba(62,207,142,0.45)]",
  },
  Pull: {
    bar: "bg-[#1C1C1C]",
    badge: "bg-[#1C1C1C]/10 text-[#1C1C1C]",
    glow: "sm:group-hover:shadow-[0_12px_40px_-16px_rgba(28,28,28,0.35)]",
  },
  Push: {
    bar: "bg-primary/70",
    badge: "bg-primary/10 text-primary",
    glow: "sm:group-hover:shadow-[0_12px_40px_-16px_rgba(62,207,142,0.35)]",
  },
  Upper: {
    bar: "bg-[#1C1C1C]/80",
    badge: "bg-[#1C1C1C]/10 text-[#1C1C1C]",
    glow: "sm:group-hover:shadow-[0_12px_40px_-16px_rgba(28,28,28,0.3)]",
  },
};

export const defaultFocusStyle: FocusStyle = {
  bar: "bg-primary",
  badge: "bg-primary/15 text-primary",
  glow: "sm:group-hover:shadow-[0_12px_40px_-16px_rgba(62,207,142,0.35)]",
};

export function getFocusStyle(focus: string): FocusStyle {
  return focusStyles[focus] ?? defaultFocusStyle;
}
