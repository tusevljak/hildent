import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrbitDecor from "@/components/OrbitDecor";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Zakazivanje pregleda online",
  description:
    "Zakažite stomatološki pregled online u Hildentu (Hilandarska 10, Stari Grad, Beograd). Izaberite termin koji vam odgovara — brzo i jednostavno.",
  alternates: { canonical: "/zakazivanje" },
};

const bookingScript = `
(function (C, A, L) { var p = function (a, ar) { a.q.push(ar); }; var d = C.document; C.Cal = C.Cal || function () { var cal = C.Cal; var ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { var api = function () { p(api, arguments); }; var namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else { p(cal, ar); } return; } p(cal, ar); };
})(window, "https://app.qbdent.rs/embed/embed.js", "init");
Cal("init", { origin: "https://app.qbdent.rs" });
Cal("inline", {
  elementOrSelector: "#qbdent-booker",
  calLink: "hildent/pregled",
  config: { layout: "month_view", theme: "light" }
});
Cal("ui", {
  theme: "light",
  hideEventTypeDetails: false,
  cssVarsPerTheme: { light: { "cal-brand": "#008cb2" } }
});
`;

export default function ZakazivanjePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="pt-40 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F0F8FA 0%, #ffffff 70%)" }}
      >
        <OrbitDecor className="top-[-140px] right-[-140px] w-[560px] h-[560px]" />
        <div className="max-w-content mx-auto px-6 lg:px-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
            Online zakazivanje
          </span>
          <h1
            className="font-extrabold mt-2 mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 60px)", color: "#1A1A1A" }}
          >
            Zakažite svoj termin
          </h1>
          <p className="text-lg font-light leading-relaxed max-w-2xl mx-auto" style={{ color: "#6B6B6B" }}>
            Izaberite uslugu i termin koji vam odgovara — potvrda stiže odmah. Ako više volite telefon, tu smo na{" "}
            <a href="tel:+381653223093" className="font-medium hover:underline" style={{ color: "#008cb2" }}>
              065 32 23 093
            </a>.
          </p>
        </div>
      </section>

      {/* BOOKING WIDGET */}
      <section className="pb-24" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl overflow-hidden p-2 sm:p-4"
            style={{ background: "#fff", boxShadow: "var(--shadow-md)", border: "1px solid #D4EBF0" }}
          >
            <div id="qbdent-booker" style={{ minHeight: 640, width: "100%" }} />
          </div>

          {/* Fallback */}
          <div className="mt-8 text-center">
            <p className="text-sm mb-3" style={{ color: "#6B6B6B" }}>
              Widget se ne učitava? Pozovite nas direktno:
            </p>
            <a
              href="tel:+381653223093"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ background: "#008cb2" }}
            >
              <Phone size={16} />
              065 32 23 093
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <Script id="qbdent-embed" strategy="afterInteractive">
        {bookingScript}
      </Script>
    </>
  );
}
