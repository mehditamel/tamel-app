import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/shared/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | TAMEL — Centres d'Affaires",
    default: "TAMEL — Centres d'Affaires Marseille & Toulon",
  },
  description:
    "Domiciliation, carte grise, assurance, création d'entreprise et 15 autres services. 7 agences à Marseille et Toulon. Agrément N°2021/AEFDJ/13/03.",
  keywords: [
    "domiciliation Marseille",
    "carte grise en ligne",
    "assurance professionnelle",
    "création entreprise",
    "centre d'affaires",
    "TAMEL",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tamel.fr",
    siteName: "TAMEL",
    title: "TAMEL — Tous vos services, une seule plateforme",
    description:
      "18 services pour professionnels et particuliers. 7 agences à Marseille et Toulon.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0D1B4B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
