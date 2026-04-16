"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Clock, ParkingCircle, Send } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const usluge = [
  "Opšta stomatologija",
  "Implantologija",
  "Ortodoncija / Invisalign",
  "Estetska stomatologija",
  "Oralna hirurgija",
  "Ostalo",
];

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    ime: "", telefon: "", email: "", usluga: "", poruka: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    setSent(true);
  }

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
            Stupite u kontakt
          </span>
          <h1
            className="font-extrabold mt-2 mb-4 leading-tight"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#1A1A1A" }}
          >
            Kontaktirajte<br />
            <span style={{ color: "#0095B6" }}>nas</span>
          </h1>
          <p className="text-lg font-light leading-relaxed max-w-xl" style={{ color: "#6B6B6B" }}>
            Tu smo za sva vaša pitanja, konsultacije i zakazivanje. Odgovaramo u najkraćem mogućem roku.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 pb-24" style={{ background: "#fff" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">

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
                      style={{ background: "#F0F8FA", color: "#0095B6" }}
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

            {/* FORM */}
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: "#1A1A1A" }}>
                Pošaljite upit
              </h2>

              {sent ? (
                <div
                  className="rounded-xl p-8 text-center"
                  style={{ background: "#F0F8FA", border: "1.5px solid #D4EBF0" }}
                >
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#1A1A1A" }}>
                    Upit je poslat!
                  </h3>
                  <p className="text-sm" style={{ color: "#6B6B6B" }}>
                    Javićemo vam se u najkraćem mogućem roku.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  {/* Ime */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6B6B6B" }}>
                      Ime i prezime *
                    </label>
                    <input
                      type="text"
                      name="ime"
                      value={form.ime}
                      onChange={handleChange}
                      placeholder="Vaše ime i prezime"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                      style={{
                        background: "#F8F8F8",
                        border: "1.5px solid #D4EBF0",
                        color: "#1A1A1A",
                      }}
                    />
                  </div>

                  {/* Telefon + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6B6B6B" }}>
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="telefon"
                        value={form.telefon}
                        onChange={handleChange}
                        placeholder="06X XXX XXXX"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ background: "#F8F8F8", border: "1.5px solid #D4EBF0", color: "#1A1A1A" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6B6B6B" }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="vasa@email.com"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ background: "#F8F8F8", border: "1.5px solid #D4EBF0", color: "#1A1A1A" }}
                      />
                    </div>
                  </div>

                  {/* Usluga */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6B6B6B" }}>
                      Usluga
                    </label>
                    <select
                      name="usluga"
                      value={form.usluga}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all appearance-none"
                      style={{ background: "#F8F8F8", border: "1.5px solid #D4EBF0", color: form.usluga ? "#1A1A1A" : "#6B6B6B" }}
                    >
                      <option value="">Izaberite uslugu</option>
                      {usluge.map((u) => (
                        <option key={u} value={u}>{u}</option>
                      ))}
                    </select>
                  </div>

                  {/* Poruka */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6B6B6B" }}>
                      Poruka
                    </label>
                    <textarea
                      name="poruka"
                      value={form.poruka}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Vaša poruka ili pitanje..."
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                      style={{ background: "#F8F8F8", border: "1.5px solid #D4EBF0", color: "#1A1A1A" }}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white transition-all hover:-translate-y-0.5 mt-2"
                    style={{ background: "#F5A800", boxShadow: "0 4px 16px rgba(245,168,0,0.3)" }}
                  >
                    <Send size={15} />
                    Pošalji upit
                  </button>

                  <p className="text-xs text-center" style={{ color: "#6B6B6B" }}>
                    Ili nas odmah pozovite na{" "}
                    <a href="tel:+381653223093" className="font-medium hover:underline" style={{ color: "#0095B6" }}>
                      065 32 23 093
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
