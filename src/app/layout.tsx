import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harbor — Dévotion quotidienne & IA biblique",
  description:
    "Harbor est votre compagnon de dévotion quotidienne : posez n'importe quelle question sur la Bible et recevez des réponses claires, fondées sur les Écritures, ainsi que des lectures quotidiennes, des prières guidées et de la musique de louange.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-harbor-cream text-harbor-ink">
        {children}
      </body>
    </html>
  );
}
