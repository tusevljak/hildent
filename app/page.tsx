import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, ParkingCircle, Star, ArrowRight, CheckCircle } from "lucide-react";
import { reviews } from "@/data/reviews";

const featuredServices = [
  {
    title: "Implantologija",
    desc: "Trajno rešenje za nedostajuće zube uz Nobel, Straumann i Alpha implantate.",
    icon: "🦷",
  },
  {
    title: "Invisalign",
    desc: "Nevidljive ortodontske folije za ravan osmeh – bez aparatića.",
    icon: "✨",
  },
  {
    title: "Estetska stomatologija",
    desc: "Beljenje zuba, viniri i fasete za savršen, prirodan osmeh.",
    icon: "💎",
  },
  {
    title: "Opšta stomatologija",
    desc: "Preventivni pregledi, plombe, čišćenje i endodoncija.",
    icon: "🏥",
  },
];

const whyUs = [
  "Savremena dijagnostika i oprema",
  "Individualni pristup svakom pacijentu",
  "Prijatna i opuštajuća atmosfera",
  "Transparentni cenovnik",
  "Centar Beograda – obezbeđen parking",
  "Online zakazivanje 24/7",
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ background: "linear-gradient(135deg, #F0F8FA 0%, #ffffff 60%)" }}
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 40%, rgba(0,149,182,0.06) 100%)",
          }}
        />

        <div className="max-w-content mx-auto px-6 lg:px-16 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ background: "rgba(0,149,182,0.1)", color: "#0095B6" }}
              >
                Stomatološka ordinacija · Beograd
              </div>

              <h1
                className="font-extrabold leading-none mb-6"
                style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1A1A1A" }}
              >
                Vaš osmeh,{" "}
                <span style={{ color: "#0095B6" }}>naša</span>{" "}
                strast.
              </h1>

              <p className="text-lg font-light leading-relaxed mb-8 max-w-lg" style={{ color: "#6B6B6B" }}>
                Savremena stomatološka ordinacija u srcu Beograda. Maksimalna posvećenost, najnovija tehnologija i individualan pristup svakom pacijentu.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="http://zakazi.online/hildent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "#F5A800", boxShadow: "0 4px 16px rgba(245,168,0,0.35)" }}
                >
                  Zakaži pregled
                  <ArrowRight size={16} />
                </a>
                <Link
                  href="/usluge"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold border-2 transition-all hover:-translate-y-0.5"
                  style={{ borderColor: "#0095B6", color: "#0095B6" }}
                >
                  Pogledaj usluge
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 text-sm" style={{ color: "#6B6B6B" }}>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} style={{ color: "#0095B6" }} />
                  Hilandarska 10
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone size={14} style={{ color: "#0095B6" }} />
                  065 32 23 093
                </span>
                <span className="flex items-center gap-1.5">
                  <ParkingCircle size={14} style={{ color: "#0095B6" }} />
                  Obezbeđen parking
                </span>
              </div>
            </div>

            {/* Hero image + stats */}
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/5]"
                style={{ boxShadow: "0 24px 60px rgba(0,149,182,0.25)" }}
              >
                <Image
                  src="/images/naslovna-1.webp"
                  alt="Dr Igor Bratić sa asistentkinjom u Hildent ordinaciji"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div
                className="absolute -bottom-6 -left-6 hidden sm:grid grid-cols-2 gap-3 p-4 rounded-xl"
                style={{ background: "#fff", boxShadow: "0 12px 32px rgba(0,149,182,0.18)" }}
              >
                {[
                  { value: "10+", label: "God. iskustva" },
                  { value: "5★", label: "Google" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5 px-3">
                    <span className="text-2xl font-extrabold" style={{ color: "#0095B6" }}>
                      {s.value}
                    </span>
                    <span className="text-xs font-medium" style={{ color: "#6B6B6B" }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-24" style={{ background: "#fff" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#0095B6" }}>
              Šta nudimo
            </span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: "#1A1A1A" }}>
              Istaknute usluge
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ background: "#F0F8FA", boxShadow: "var(--shadow-sm)" }}
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "#1A1A1A" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/usluge"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-colors hover:underline"
              style={{ color: "#0095B6" }}
            >
              Pogledaj sve usluge i cenovnik
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY HILDENT */}
      <section className="py-24" style={{ background: "#F0F8FA" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-8"
                style={{ boxShadow: "var(--shadow-lg)" }}
              >
                <Image
                  src="/images/dr-igor-bratic.webp"
                  alt="Dr Igor Bratić u ordinaciji Hildent"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#0095B6" }}>
                Zašto Hildent
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-6" style={{ color: "#1A1A1A" }}>
                Stomatologija kojoj<br />možete verovati
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6B6B6B" }}>
                Dr Igor Bratić i tim posvećeni su pružanju vrhunske stomatološke zaštite uz korišćenje najsavremenije opreme i individualnog pristupa svakom pacijentu.
              </p>
              <Link
                href="/o-nama"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ background: "#0095B6" }}
              >
                Saznaj više o nama
                <ArrowRight size={15} />
              </Link>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: "#0095B6" }} />
                  <span className="text-sm font-medium" style={{ color: "#1A1A1A" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="py-24" style={{ background: "#fff" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#0095B6" }}>
                Iskustva pacijenata
              </span>
              <h2 className="text-4xl font-bold mt-2" style={{ color: "#1A1A1A" }}>
                Šta kažu naši pacijenti
              </h2>
            </div>
            <Link
              href="/recenzije"
              className="text-sm font-semibold flex items-center gap-1 hover:underline"
              style={{ color: "#0095B6" }}
            >
              Sve recenzije <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r) => (
              <div
                key={r.id}
                className="rounded-xl p-6"
                style={{ background: "#F0F8FA", boxShadow: "var(--shadow-sm)" }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#F5A800" style={{ color: "#F5A800" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#2C2C2C" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>{r.name}</p>
                  {r.service && (
                    <p className="text-xs mt-0.5" style={{ color: "#0095B6" }}>{r.service}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20" style={{ background: "#0095B6" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vaš osmeh zaslužuje pažnju
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Zakažite pregled danas i napravite prvi korak ka zdravijim zubima.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="http://zakazi.online/hildent"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-md font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ background: "#F5A800", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
            >
              Zakaži online →
            </a>
            <a
              href="tel:+381653223093"
              className="px-8 py-3.5 rounded-md font-semibold border-2 border-white text-white transition-all hover:bg-white hover:text-teal"
            >
              Pozovi nas
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
