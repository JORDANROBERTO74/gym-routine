import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import MainContent from "@/components/navigation/MainContent";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Gym Routine | Rutina semanal de entrenamiento",
  description:
    "Anotaciones de rutina de gym por día: ejercicios, series, repeticiones y referencias en video o imagen.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "gym, rutina, entrenamiento, ejercicios, series, repeticiones, workout",
  openGraph: {
    title: "Gym Routine",
    description: "Rutina semanal de entrenamiento con referencias visuales",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "font-sans antialiased min-h-screen",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense
            fallback={
              <div className="h-full flex justify-center items-center">
                <Spinner />
              </div>
            }
          >
            <TooltipProvider>
              <Header />
              <MainContent>{children}</MainContent>
              <Footer />
              <Toaster />
            </TooltipProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
