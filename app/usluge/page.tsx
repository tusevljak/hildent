"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { serviceCategories } from "@/data/services";
import { ChevronDown, ChevronUp, ArrowRight, Clock } from "lucide-react";

function formatPrice(price: number) {
  return price.toLocaleString("sr-RS") + " rsd";
}

function ServiceAccordion({ category }: { category: typeof serviceCategories[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: "#fff",
        boxShadow: open ? "var(--shadow-md)" : "var(--shadow-sm)",
        border: open ? "1.5px solid #D4EBF0" : "1.5px solid transparent",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200"
        style={{ background: open ? "#F0F8FA" : "transparent" }}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-base" style={{ color: "#1A1A1A" }}>
              {category.title}
            </h3>
            {category.comingSoon && (
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "#F5A800", color: "#fff" }}
              >
                Uskoro
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          {!category.comingSoon && (
            <span className="text-xs font-medium hidden sm:block" style={{ color: "#6B6B6B" }}>
              {category.items.length} usluga
            </span>
          )}
          {open ? (
            <ChevronUp size={18} style={{ color: "#0095B6" }} />
          ) : (
            <ChevronDown size={18} style={{ color: "#6B6B6B" }} />
          )}
        </div>
      </button>

      {open && !category.comingSoon && (
        <div className="px-6 pb-6">
          <p className="text-sm mb-4" style={{ color: "#6B6B6B" }}>
            {category.description}
          </p>
          <div className="flex flex-col divide-y" style={{ borderColor: "#D4EBF0" }}>
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between py-3 gap-4"
              >
                <span className="text-sm" style={{ color: "#2C2C2C" }}>
                  {item.name}
                </span>
                <span
                  className="text-sm font-semibold shrink-0"
                  style={{ color: "#0095B6" }}
                >
                  {formatPrice(item.price)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {open && category.comingSoon && (
        <div className="px-6 pb-6">
          <p className="text-sm" style={{ color: "#6B6B6B" }}>
            Ova usluga je u pripremi. Pratite naš{" "}
            <a
              href="https://www.instagram.com/hildent10/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
              style={{ color: "#0095B6" }}
            >
              Instagram
            </a>{" "}
            za više informacija.
          </p>
        </div>
      )}
    </div>
  );
}

export default function UslugePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="pt-40 pb-24"
        style={{ background: "linear-gradient(135deg, #F0F8FA 0%, #ffffff 70%)" }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#0095B6" }}>
            Cenovnik i usluge
          </span>
          <h1
            className="font-extrabold mt-2 mb-6 leading-tight"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#1A1A1A" }}
          >
            Sve što vaši<br />
            <span style={{ color: "#0095B6" }}>zubi trebaju</span>
          </h1>
          <p className="text-lg font-light leading-relaxed max-w-2xl mb-8" style={{ color: "#6B6B6B" }}>
            Od preventivnih pregleda do kompleksnih hirurških zahvata – pružamo kompletnu stomatološku zaštitu pod jednim krovom. Transparentni cenovnik, bez skrivenih troškova.
          </p>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
            style={{ background: "rgba(245,168,0,0.1)", color: "#D98F00" }}
          >
            <Clock size={14} />
            Cene su informativne. Tačna cena se utvrđuje na pregledu.
          </div>
        </div>
      </section>

      {/* SERVICES ACCORDION */}
      <section className="py-16 pb-24" style={{ background: "#fff" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="flex flex-col gap-4">
            {serviceCategories.map((cat) => (
              <ServiceAccordion key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#0095B6" }}>
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
            style={{ background: "#F5A800" }}
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
