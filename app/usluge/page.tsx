import type { Metadata } from "next";
import OrbitDecor from "@/components/OrbitDecor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesAccordionList from "@/components/ServicesAccordionList";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Usluge i cenovnik – stomatolog centar Beograda",
  description:
    "Cenovnik stomatoloških usluga u Hildentu (Hilandarska 10, Stari Grad, Beograd): implantologija, Invisalign, protetika, estetska i opšta stomatologija, oralna hirurgija. Transparentne cene.",
  alternates: { canonical: "/usluge" },
};

export default function UslugePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F0F8FA 0%, #ffffff 70%)" }}
      >
        <OrbitDecor className="top-[-140px] right-[-140px] w-[560px] h-[560px]" />
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <div className="reveal">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
                Cenovnik i usluge
              </span>
              <h1
                className="font-extrabold mt-2 mb-6 leading-tight"
                style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#1A1A1A" }}
              >
                Sve što vaši<br />
                <span style={{ color: "#008cb2" }}>zubi trebaju</span>
              </h1>
              <p className="text-lg font-light leading-relaxed mb-8" style={{ color: "#6B6B6B" }}>
                Od preventivnih pregleda do kompleksnih hirurških zahvata – pružamo kompletnu stomatološku zaštitu pod jednim krovom. Transparentni cenovnik, bez skrivenih troškova.
              </p>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                style={{ background: "rgba(249,161,27,0.12)", color: "#C77E00" }}
              >
                <Clock size={14} />
                Cene su informativne. Tačna cena se utvrđuje na pregledu.
              </div>
            </div>
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] reveal"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <Image
                src="/images/FUJI6433.jpg"
                alt="Estetska stomatologija — odabir nijanse zuba u Hildentu, Stari Grad"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES ACCORDION */}
      <section className="py-16 pb-24" style={{ background: "#fff" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <ServicesAccordionList />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#008cb2" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Niste sigurni šta vam treba?
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Zakažite konsultativni pregled i Dr Bratić će vam preporučiti optimalan plan lečenja.
          </p>
          <a
            href="http://zakazi.online/hildent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{ background: "#f9a11b" }}
          >
            Zakaži konsultaciju
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
