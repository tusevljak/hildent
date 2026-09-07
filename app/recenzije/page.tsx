import type { Metadata } from "next";
import OrbitDecor from "@/components/OrbitDecor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReviewsSlider from "@/components/ReviewsSlider";
import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Recenzije pacijenata – iskustva iz Hildenta",
  description:
    "Iskustva pacijenata stomatološke ordinacije Hildent (Stari Grad, Beograd). Pročitajte recenzije o implantologiji, Invisalign terapiji, estetskoj i opštoj stomatologiji.",
  alternates: { canonical: "/recenzije" },
};

export default function RecenzijePage() {
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
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center mb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
                Iskustva pacijenata
              </span>
              <h1
                className="font-extrabold mt-2 mb-6 leading-tight"
                style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#1A1A1A" }}
              >
                Šta kažu naši<br />
                <span style={{ color: "#008cb2" }}>pacijenti</span>
              </h1>
            </div>
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5]"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <Image
                src="/images/recenzije-1.jpg"
                alt="Zadovoljna pacijentkinja nakon tretmana u Hildent ordinaciji"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Overall rating */}
          <div className="flex flex-wrap items-center gap-6">
            <div
              className="flex items-center gap-3 px-6 py-4 rounded-xl"
              style={{ background: "#fff", boxShadow: "var(--shadow-md)" }}
            >
              <span className="text-4xl font-extrabold" style={{ color: "#1A1A1A" }}>5.0</span>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={16} fill="#f9a11b" style={{ color: "#f9a11b" }} />
                  ))}
                </div>
                <p className="text-xs font-medium" style={{ color: "#6B6B6B" }}>
                  Google recenzije
                </p>
              </div>
            </div>
            <p className="text-base" style={{ color: "#6B6B6B" }}>
              50+ zadovoljnih pacijenata koji su nam ukazali poverenje
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-16 pb-24" style={{ background: "#fff" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <ReviewsSlider />
        </div>
      </section>

      {/* LEAVE REVIEW CTA */}
      <section className="py-20" style={{ background: "#F0F8FA" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1A1A1A" }}>
            Bili ste kod nas?
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "#6B6B6B" }}>
            Vaše mišljenje nam je izuzetno važno. Pomozite drugima da nas pronađu i ostavite recenziju na Google-u.
          </p>
          <a
            href="https://maps.app.goo.gl/5LHrN8GphyaGrJ6i6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{ background: "#008cb2" }}
          >
            Ostavi recenziju na Google
            <ExternalLink size={15} />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
