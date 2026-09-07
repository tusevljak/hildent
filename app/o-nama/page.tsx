import type { Metadata } from "next";
import OrbitDecor from "@/components/OrbitDecor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "O nama – Dr Igor Bratić, stomatolog na Starom gradu",
  description:
    "Upoznajte Hildent — stomatološku ordinaciju Dr Igora Bratića u centru Beograda (Hilandarska 10, Stari Grad). Iskustvo, savremena oprema i individualan pristup svakom pacijentu.",
  alternates: { canonical: "/o-nama" },
};

const values = [
  {
    title: "Preciznost",
    desc: "Svaki zahvat izvodi se sa maksimalnom pažnjom i korišćenjem najsavremenije opreme.",
  },
  {
    title: "Transparentnost",
    desc: "Jasno objašnjavamo svaki korak lečenja i troškove – bez iznenađenja.",
  },
  {
    title: "Udobnost",
    desc: "Ordinacija je dizajnirana da bude prijatna i opuštajuća sredina za svakog pacijenta.",
  },
  {
    title: "Kontinuitet",
    desc: "Pratimo pacijente dugoročno i gradimo odnos poverenja koji traje godinama.",
  },
];

export default function ONamaPage() {
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
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
                Ko smo mi
              </span>
              <h1
                className="font-extrabold mt-2 mb-6 leading-tight"
                style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#1A1A1A" }}
              >
                Hildent –<br />
                <span style={{ color: "#008cb2" }}>Stomatologija sa dušom</span>
              </h1>
              <p className="text-lg font-light leading-relaxed" style={{ color: "#6B6B6B" }}>
                Hildent stomatološka ordinacija otvorena je sa jednom misijom: pružiti svakom pacijentu onaj nivo brige koji bi poželeli za svoju porodicu. Smestili smo se u centru Beograda, na Hilandarskoj 10, kako bismo bili dostupni svima.
              </p>
            </div>
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <Image
                src="/images/DSCF3900.jpg"
                alt="Hildent tim sa pacijentom u ordinaciji"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* DR BRATIĆ */}
      <section className="py-24" style={{ background: "#fff" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Dr Bratić portret */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4]"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <Image
                src="/images/DSCF3888.jpg"
                alt="Dr Igor Bratić — specijalista stomatologije, Hildent Beograd"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
                Vaš doktor
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-2" style={{ color: "#1A1A1A" }}>
                Dr Igor Bratić
              </h2>
              <p className="text-base font-medium mb-6" style={{ color: "#008cb2" }}>
                Specijalista stomatologije
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#6B6B6B" }}>
                Dr Igor Bratić je iskusan stomatolog sa višegodišnjom praksom u opštoj i estetskoj stomatologiji, implantologiji i ortodonciji.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6B6B6B" }}>
                Njegova filozofija je jednostavna: slušati pacijenta, dijagnostikovati precizno i lečiti pažljivo. Svaki pacijent dobija punu pažnju i plan lečenja prilagođen upravo njemu.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  "10+ godina kliničkog iskustva",
                  "Kontinuirana stručna edukacija",
                  "Ekspert za implantologiju i Invisalign",
                  "Individualan pristup svakom pacijentu",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: "#008cb2" }} />
                    <span className="text-sm font-medium" style={{ color: "#1A1A1A" }}>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="http://zakazi.online/hildent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ background: "#f9a11b" }}
              >
                Zakaži pregled
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PHOTO */}
      <section className="py-24" style={{ background: "#fff" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4]"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <Image
                src="/images/DSCF2558.jpg"
                alt="Hildent tim — Dr Igor Bratić i asistentkinja sa pacijentom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
                Naš tim
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-6" style={{ color: "#1A1A1A" }}>
                Ljudi iza osmeha
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#6B6B6B" }}>
                Iza svakog uspešnog zahvata stoji posvećen tim. U Hildentu pacijent nije broj — svakog gosta dočekujemo po imenu, sa osmehom i pažnjom koju zaslužuje.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#6B6B6B" }}>
                Asistentski tim ima višegodišnje iskustvo u savremenoj stomatologiji i pruža podršku od trenutka zakazivanja do završetka terapije.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24" style={{ background: "#F0F8FA" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
              Naša filozofija
            </span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: "#1A1A1A" }}>
              Šta nas vodi
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-xl p-6 bg-white"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4"
                  style={{ background: "#008cb2" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "#1A1A1A" }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24" style={{ background: "#fff" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
                Gde se nalazimo
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-6" style={{ color: "#1A1A1A" }}>
                U srcu Beograda
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6B6B6B" }}>
                Ordinacija se nalazi na Hilandarskoj 10, u samom centru Beograda. Lako dostupna javnim prevozom, a za one koji dolaze automobilom – obezbeđen je parking.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin size={18} style={{ color: "#008cb2" }} />
                  <span className="text-sm font-medium" style={{ color: "#1A1A1A" }}>Hilandarska 10, Beograd (Centar)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} style={{ color: "#008cb2" }} />
                  <a href="tel:+381653223093" className="text-sm font-medium hover:underline" style={{ color: "#1A1A1A" }}>
                    +381 65 32 23 093
                  </a>
                </div>
              </div>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ background: "#008cb2" }}
              >
                Kontaktirajte nas
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden" style={{ height: "400px", boxShadow: "var(--shadow-lg)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.5!2d20.457!3d44.819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSGlsYW5kYXJza2EgMTA!5e0!3m2!1ssr!2srs!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#008cb2" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Spremni za vaš osmeh
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Zakažite pregled i uverite se lično zašto nam pacijenti veruju godinama.
          </p>
          <a
            href="http://zakazi.online/hildent"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-md font-semibold text-white transition-all hover:-translate-y-0.5 inline-block"
            style={{ background: "#f9a11b" }}
          >
            Zakaži pregled →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
