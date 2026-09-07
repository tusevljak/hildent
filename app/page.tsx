import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrbitDecor from "@/components/OrbitDecor";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, ParkingCircle, ArrowRight, CheckCircle } from "lucide-react";
import ReviewsSlider from "@/components/ReviewsSlider";

const featuredServices = [
  {
    title: "Implantologija",
    desc: "Trajno rešenje za nedostajuće zube uz Nobel, Straumann i Alpha implantate.",
    icon: "/brand/planeta-plava.svg",
  },
  {
    title: "Invisalign",
    desc: "Nevidljive ortodontske folije za ravan osmeh – bez aparatića.",
    icon: "/brand/planeta-zuta.svg",
  },
  {
    title: "Estetska stomatologija",
    desc: "Beljenje zuba, viniri i fasete za savršen, prirodan osmeh.",
    icon: "/brand/planeta-ljubicasta.svg",
  },
  {
    title: "Opšta stomatologija",
    desc: "Preventivni pregledi, plombe, čišćenje i endodoncija.",
    icon: "/brand/planeta-zelena.svg",
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
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #EFF8FA 0%, #ffffff 60%)" }}
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 40%, rgba(0,140,178,0.06) 100%)",
          }}
        />

        {/* Planeta motiv — orbite + sjajevi */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <svg
            className="absolute -top-40 -right-40 w-[720px] h-[720px]"
            viewBox="0 0 400 400"
            fill="none"
          >
            <g stroke="#008cb2" strokeOpacity="0.13">
              <ellipse cx="200" cy="200" rx="190" ry="74" transform="rotate(-22 200 200)" strokeWidth="1.5" />
              <ellipse cx="200" cy="200" rx="150" ry="150" strokeWidth="1.5" strokeDasharray="2 10" />
              <circle cx="200" cy="200" r="96" strokeWidth="1.5" />
            </g>
          </svg>
          <svg className="absolute bottom-24 left-[8%] w-8 h-8 animate-sparkle" viewBox="0 0 24 24" fill="#f9a11b">
            <path d="M12 0C12.9 6.6 17.4 11.1 24 12 17.4 12.9 12.9 17.4 12 24 11.1 17.4 6.6 12.9 0 12 6.6 11.1 11.1 6.6 12 0Z" />
          </svg>
          <svg className="absolute top-[22%] left-[46%] w-5 h-5 animate-sparkle" viewBox="0 0 24 24" fill="#008cb2" fillOpacity="0.4">
            <path d="M12 0C12.9 6.6 17.4 11.1 24 12 17.4 12.9 12.9 17.4 12 24 11.1 17.4 6.6 12.9 0 12 6.6 11.1 11.1 6.6 12 0Z" />
          </svg>
        </div>

        <div className="max-w-content mx-auto px-6 lg:px-16 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ background: "rgba(0,140,178,0.1)", color: "#008cb2" }}
              >
                Stomatološka ordinacija · Beograd
              </div>

              <h1
                className="font-extrabold leading-none mb-6"
                style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1A1A1A" }}
              >
                Vaš osmeh,{" "}
                <span style={{ color: "#008cb2" }}>naša</span>{" "}
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
                  style={{ background: "#f9a11b", boxShadow: "0 4px 16px rgba(249,161,27,0.35)" }}
                >
                  Zakaži pregled
                  <ArrowRight size={16} />
                </a>
                <Link
                  href="/usluge"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold border-2 transition-all hover:-translate-y-0.5"
                  style={{ borderColor: "#008cb2", color: "#008cb2" }}
                >
                  Pogledaj usluge
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 text-sm" style={{ color: "#6B6B6B" }}>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} style={{ color: "#008cb2" }} />
                  Hilandarska 10
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone size={14} style={{ color: "#008cb2" }} />
                  065 32 23 093
                </span>
                <span className="flex items-center gap-1.5">
                  <ParkingCircle size={14} style={{ color: "#008cb2" }} />
                  Obezbeđen parking
                </span>
              </div>
            </div>

            {/* Hero image + stats */}
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/planeta-plava.svg"
                alt=""
                aria-hidden
                className="absolute -top-8 -right-6 w-24 h-24 z-20 drop-shadow-lg animate-sparkle hidden sm:block"
              />
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/5]"
                style={{ boxShadow: "0 24px 60px rgba(0,140,178,0.25)" }}
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
                style={{ background: "#fff", boxShadow: "0 12px 32px rgba(0,140,178,0.18)" }}
              >
                {[
                  { value: "10+", label: "God. iskustva" },
                  { value: "5★", label: "Google" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5 px-3">
                    <span className="text-2xl font-extrabold" style={{ color: "#008cb2" }}>
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
      <section className="py-24 relative overflow-hidden" style={{ background: "#fff" }}>
        <OrbitDecor className="top-[-160px] right-[-160px] w-[560px] h-[560px]" />
        <div className="max-w-content mx-auto px-6 lg:px-16 relative z-10">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
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
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ background: "#EFF8FA", boxShadow: "var(--shadow-sm)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.icon} alt="" aria-hidden className="w-16 h-16 mb-4" />
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
              style={{ color: "#008cb2" }}
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
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Image — full height */}
            <div
              className="relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-full order-1"
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

            {/* Text + checklist */}
            <div className="flex flex-col justify-center order-2">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
                Zašto Hildent
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-6" style={{ color: "#1A1A1A" }}>
                Stomatologija kojoj<br />možete verovati
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#6B6B6B" }}>
                Dr Igor Bratić i tim posvećeni su pružanju vrhunske stomatološke zaštite uz korišćenje najsavremenije opreme i individualnog pristupa svakom pacijentu.
              </p>
              <Link
                href="/o-nama"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white transition-all hover:-translate-y-0.5 self-start mb-8"
                style={{ background: "#008cb2" }}
              >
                Saznaj više o nama
                <ArrowRight size={15} />
              </Link>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white"
                    style={{ boxShadow: "var(--shadow-sm)" }}
                  >
                    <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: "#008cb2" }} />
                    <span className="text-sm font-medium" style={{ color: "#1A1A1A" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TOPLINA / ZA CELU PORODICU */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#fff" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Tekst */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
                Za celu porodicu
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-6" style={{ color: "#1A1A1A" }}>
                Toplina u svakom<br />pregledu
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#6B6B6B" }}>
                Od prvog mlečnog zuba do osmeha koji traje ceo život — kod nas su dobrodošli svi uzrasti. Verujemo da dobra stomatologija počinje osećajem sigurnosti, pa gradimo opuštenu i prijatnu atmosferu u kojoj se i najmlađi i najstariji pacijenti osećaju kao kod kuće.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Nežan i strpljiv pristup deci i anksioznim pacijentima",
                  "Individualan plan terapije za svakog člana porodice",
                  "Iskren razgovor i jasna cena — bez iznenađenja",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                      style={{ background: "rgba(112,201,192,0.25)" }}
                    >
                      <CheckCircle size={14} style={{ color: "#008cb2" }} />
                    </span>
                    <span className="text-sm font-medium" style={{ color: "#2C2C2C" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolaž slika */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4]" style={{ boxShadow: "var(--shadow-md)" }}>
                  <Image src="/images/toplina-1.webp" alt="Zadovoljna pacijentkinja Hildent" fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] translate-y-8" style={{ boxShadow: "var(--shadow-md)" }}>
                  <Image src="/images/toplina-3.webp" alt="Nasmejan tim ordinacije Hildent" fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] col-span-2 mt-4" style={{ boxShadow: "var(--shadow-md)" }}>
                  <Image src="/images/toplina-2.webp" alt="Dr Igor Bratić sa timom tokom pregleda" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                </div>
              </div>
              <svg className="absolute -top-4 -left-4 w-8 h-8 animate-sparkle" viewBox="0 0 24 24" fill="#f9a11b">
                <path d="M12 0C12.9 6.6 17.4 11.1 24 12 17.4 12.9 12.9 17.4 12 24 11.1 17.4 6.6 12.9 0 12 6.6 11.1 11.1 6.6 12 0Z" />
              </svg>
            </div>
          </div>

          {/* Dečiji ugao — Mali istraživači svemira */}
          <div
            className="mt-20 rounded-3xl overflow-hidden relative p-8 lg:p-14"
            style={{ background: "linear-gradient(120deg, #4b53a2 0%, #008cb2 100%)" }}
          >
            {/* orbita deko */}
            <svg className="absolute -right-16 -bottom-20 w-[380px] h-[380px] pointer-events-none" viewBox="0 0 400 400" fill="none" aria-hidden>
              <g stroke="#ffffff" strokeOpacity="0.18">
                <ellipse cx="200" cy="200" rx="185" ry="72" transform="rotate(-20 200 200)" strokeWidth="2" />
                <circle cx="200" cy="200" r="120" strokeWidth="2" strokeDasharray="3 12" />
              </g>
            </svg>
            <svg className="absolute top-8 right-10 w-7 h-7 animate-sparkle pointer-events-none" viewBox="0 0 24 24" fill="#f9a11b" aria-hidden>
              <path d="M12 0C12.9 6.6 17.4 11.1 24 12 17.4 12.9 12.9 17.4 12 24 11.1 17.4 6.6 12.9 0 12 6.6 11.1 11.1 6.6 12 0Z" />
            </svg>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/planeta-zuta.svg" alt="" aria-hidden className="w-28 h-28 shrink-0 drop-shadow-xl animate-sparkle" />
              <div className="text-center sm:text-left">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#70c9c0" }}>
                  Za naše najmlađe
                </span>
                <h3 className="text-3xl font-bold text-white mt-2 mb-3">Mali istraživači svemira</h3>
                <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Kod nas deca ne strahuju od stolice — pretvaramo pregled u malu svemirsku avanturu na Planeti HilDent. Posle svake uspešne posete, mali istraživač dobija svoju HilDent nalepnicu za hrabrost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#fff" }}>
        <OrbitDecor flip className="bottom-[-180px] left-[-160px] w-[540px] h-[540px]" />
        <div className="max-w-content mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
                Iskustva pacijenata
              </span>
              <h2 className="text-4xl font-bold mt-2" style={{ color: "#1A1A1A" }}>
                Šta kažu naši pacijenti
              </h2>
            </div>
            <Link
              href="/recenzije"
              className="text-sm font-semibold flex items-center gap-1 hover:underline"
              style={{ color: "#008cb2" }}
            >
              Sve recenzije <ArrowRight size={14} />
            </Link>
          </div>

          <ReviewsSlider />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#008cb2" }}>
        <OrbitDecor tone="white" className="top-[-140px] right-[-120px] w-[440px] h-[440px]" />
        <OrbitDecor tone="white" flip className="bottom-[-160px] left-[-120px] w-[440px] h-[440px]" />
        <div className="max-w-content mx-auto px-6 lg:px-16 text-center relative z-10">
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
              style={{ background: "#f9a11b", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
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
