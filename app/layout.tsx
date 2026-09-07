import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import MobileCTA from "@/components/layout/MobileCTA";
import ScrollReveal from "@/components/ScrollReveal";

const firaSans = Fira_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-fira",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hildent.rs"),
  title: {
    default: "Stomatolog Stari Grad, Beograd – Hildent | Dr Igor Bratić",
    template: "%s · Hildent",
  },
  description:
    "Hildent – stomatološka ordinacija na Starom gradu, u centru Beograda (Hilandarska 10). Implantati, Invisalign, estetska i opšta stomatologija. Online zakazivanje, obezbeđen parking.",
  keywords: [
    "stomatolog Stari Grad",
    "stomatolog centar Beograda",
    "zubar Stari Grad",
    "stomatološka ordinacija centar Beograd",
    "stomatolog Hilandarska",
    "implantati Beograd",
    "Invisalign Beograd",
    "estetska stomatologija Beograd",
    "Hildent",
    "Dr Igor Bratić",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://hildent.rs",
    siteName: "Hildent",
    title: "Stomatolog Stari Grad, Beograd – Hildent",
    description:
      "Stomatološka ordinacija u centru Beograda (Hilandarska 10, Stari Grad). Implantati, Invisalign, estetska i opšta stomatologija.",
    images: [{ url: "/images/naslovna-1.jpg", width: 1200, height: 630, alt: "Hildent stomatološka ordinacija" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stomatolog Stari Grad, Beograd – Hildent",
    description: "Stomatološka ordinacija u centru Beograda (Hilandarska 10, Stari Grad).",
    images: ["/images/naslovna-1.jpg"],
  },
  robots: { index: true, follow: true },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Hildent – Stomatološka ordinacija Dr Igor Bratić",
  image: "https://hildent.rs/images/naslovna-1.jpg",
  url: "https://hildent.rs",
  telephone: "+381653223093",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hilandarska 10",
    addressLocality: "Beograd",
    addressRegion: "Stari Grad",
    postalCode: "11000",
    addressCountry: "RS",
  },
  geo: { "@type": "GeoCoordinates", latitude: 44.8186, longitude: 20.4685 },
  areaServed: ["Stari Grad", "Centar", "Beograd"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  sameAs: ["https://www.instagram.com/hildent10/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={firaSans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        {children}
        <MobileCTA />
        <ScrollReveal />
      </body>
    </html>
  );
}
