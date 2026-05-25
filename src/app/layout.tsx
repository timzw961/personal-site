import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlackHoleLoader } from "@/components/BlackHoleLoader";

export const metadata: Metadata = {
  title: {
    default: "Timothy Wang",
    template: "%s · Timothy Wang",
  },
  description:
    "Senior Frontend Engineer — building performant, accessible web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <BlackHoleLoader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
