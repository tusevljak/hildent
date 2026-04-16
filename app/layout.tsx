import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hildent – Stomatološka ordinacija Dr Igor Bratić | Beograd",
  description: "Hildent stomatološka ordinacija u centru Beograda. Implantati, Invisalign, estetska stomatologija, opšta stomatologija. Zakazivanje online.",
  keywords: "stomatolog Beograd, zubar Beograd, implantati, Invisalign, Hildent, Dr Igor Bratić",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
