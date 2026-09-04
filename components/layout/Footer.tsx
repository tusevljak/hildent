import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#1A1A1A", color: "#fff" }}>
      <div className="max-w-content mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo.svg" alt="HilDent" className="h-12 w-auto mb-4" />
            <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
              Stomatološka ordinacija Dr Igor Bratić. Savremena stomatologija u centru Beograda.
            </p>
            <a
              href="https://www.instagram.com/hildent10/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: "#9CA3AF" }}
            >
              <InstagramIcon size={16} />
              @hildent10
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-widest" style={{ color: "#6B7280" }}>
              Stranice
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/o-nama",     label: "O nama" },
                { href: "/usluge",    label: "Usluge" },
                { href: "/recenzije", label: "Recenzije" },
                { href: "/blog",      label: "Blog" },
                { href: "/kontakt",   label: "Kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#9CA3AF" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-widest" style={{ color: "#6B7280" }}>
              Usluge
            </h4>
            <ul className="flex flex-col gap-3">
              {["Implantologija", "Invisalign", "Estetska stomatologija", "Ortodoncija", "Oralna hirurgija"].map((s) => (
                <li key={s}>
                  <Link
                    href="/usluge"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#9CA3AF" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-widest" style={{ color: "#6B7280" }}>
              Kontakt
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm" style={{ color: "#9CA3AF" }}>
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "#008cb2" }} />
                Hilandarska 10, Beograd
              </li>
              <li>
                <a href="tel:+381653223093" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "#9CA3AF" }}>
                  <Phone size={15} style={{ color: "#008cb2" }} />
                  +381 65 32 23 093
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: "#9CA3AF" }}>
                <Clock size={15} className="mt-0.5 shrink-0" style={{ color: "#008cb2" }} />
                <span>Pon–Pet: 09–20h<br />Sub: 09–15h</span>
              </li>
            </ul>
            <a
              href="http://zakazi.online/hildent"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-5 py-2.5 rounded-md text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ background: "#f9a11b" }}
            >
              Zakaži online →
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid #2C2C2C" }}>
          <p className="text-xs" style={{ color: "#6B7280" }}>
            © 2025 Hildent stomatološka ordinacija. Sva prava zadržana.
          </p>
          <p className="text-xs" style={{ color: "#6B7280" }}>
            Hilandarska 10, Beograd · Obezbeđen parking
          </p>
        </div>
      </div>
    </footer>
  );
}
