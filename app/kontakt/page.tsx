import OrbitDecor from "@/components/OrbitDecor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { MapPin, Phone, Clock, ParkingCircle, ArrowRight } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export default function KontaktPage() {
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
                Stupite u kontakt
              </span>
              <h1
                className="font-extrabold mt-2 mb-4 leading-tight"
                style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#1A1A1A" }}
              >
                Kontaktirajte<br />
                <span style={{ color: "#008cb2" }}>nas</span>
              </h1>
              <p className="text-lg font-light leading-relaxed" style={{ color: "#6B6B6B" }}>
                Tu smo za sva vaša pitanja, konsultacije i zakazivanje. Najbrže do termina — pozovite nas ili zakažite online.
              </p>
            </div>
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <Image
                src="/images/DSCF3910.jpg"
                alt="Hildent ordinacija — tim u radu"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 pb-24" style={{ background: "#fff" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* INFO */}
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: "#1A1A1A" }}>
                Informacije
              </h2>

              <div className="flex flex-col gap-5 mb-10">
                {[
                  {
                    icon: <MapPin size={18} />,
                    label: "Adresa",
                    value: "Hilandarska 10, Beograd (Centar)",
                    href: "https://maps.app.goo.gl/75Jy9Ttz38YBNLoU6",
                  },
                  {
                    icon: <Phone size={18} />,
                    label: "Telefon",
                    value: "+381 65 32 23 093",
                    href: "tel:+381653223093",
                  },
                  {
                    icon: <Clock size={18} />,
                    label: "Radno vreme",
                    value: "Pon–Pet: 09:00–20:00 · Sub: 09:00–15:00",
                    href: undefined,
                  },
                  {
                    icon: <ParkingCircle size={18} />,
                    label: "Parking",
                    value: "Obezbeđen parking u blizini ordinacije",
                    href: undefined,
                  },
                  {
                    icon: <InstagramIcon size={18} />,
                    label: "Instagram",
                    value: "@hildent10",
                    href: "https://www.instagram.com/hildent10/",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "#F0F8FA", color: "#008cb2" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "#6B6B6B" }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:underline"
                          style={{ color: "#1A1A1A" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium" style={{ color: "#1A1A1A" }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden" style={{ height: "280px", boxShadow: "var(--shadow-md)" }}>
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

            {/* CTA */}
            <div
              className="relative rounded-2xl overflow-hidden p-8 lg:p-10"
              style={{ background: "linear-gradient(135deg, #008cb2 0%, #4b53a2 100%)" }}
            >
              <OrbitDecor tone="white" className="top-[-120px] right-[-120px] w-[360px] h-[360px]" />
              <div className="relative z-10">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#70c9c0" }}>
                  Zakažite termin
                </span>
                <h2 className="text-3xl font-bold text-white mt-2 mb-4">
                  Najbrže do vašeg osmeha
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Zakažite pregled online u par klikova — dostupno 24/7 — ili nas jednostavno pozovite u toku radnog vremena. Odgovaramo brzo i pronaći ćemo termin koji vam odgovara.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="http://zakazi.online/hildent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold text-white transition-all hover:-translate-y-0.5"
                    style={{ background: "#f9a11b", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
                  >
                    Zakaži online
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="tel:+381653223093"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold text-white border-2 border-white transition-all hover:bg-white hover:text-teal"
                  >
                    <Phone size={16} />
                    065 32 23 093
                  </a>
                </div>

                <p className="text-xs mt-6" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Radno vreme: Pon–Pet 09–20h · Sub 09–15h
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
