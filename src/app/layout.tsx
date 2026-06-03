import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopLoadBar } from "@/components/TopLoadBar";

// Sans: a geometric grotesque for headings and body - sharp, modern.
const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Mono: paired monospace for data labels, indices and metadata.
const mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Timothy Wang - Senior Frontend Engineer",
    template: "%s · Timothy Wang",
  },
  description:
    "Senior Frontend Engineer building performant, accessible product experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <TopLoadBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
