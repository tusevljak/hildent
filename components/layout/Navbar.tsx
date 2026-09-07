"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/o-nama",    label: "O nama" },
  { href: "/usluge",   label: "Usluge" },
  { href: "/recenzije",label: "Recenzije" },
  { href: "/kontakt",  label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #D4EBF0" : "none",
        boxShadow: scrolled ? "0 2px 16px rgba(0,140,178,0.08)" : "none",
      }}
    >
      <div
        className={`max-w-content mx-auto px-6 lg:px-16 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-20" : "h-36"
        }`}
      >
        {/* Logo — wordmark na vrhu, na scroll se pretapa u planeta-ikonicu */}
        <Link
          href="/"
          aria-label="HilDent početna"
          className={`relative shrink-0 transition-all duration-500 ease-out ${
            scrolled ? "h-12 w-12" : "h-28 w-[210px]"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo.svg"
            alt="HilDent"
            className={`absolute inset-0 h-full w-auto object-contain object-left transition-all duration-500 ease-out ${
              scrolled ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
            }`}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/planeta-plava.svg"
            alt="HilDent"
            className={`absolute inset-0 h-full w-full object-contain transition-all duration-500 ease-out ${
              scrolled ? "opacity-100 scale-100 delay-200" : "opacity-0 scale-50 pointer-events-none"
            }`}
          />

          {/* Roj zvezdica — prsne kad se logo "rastopi" */}
          {scrolled && (
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              {[
                { dx: "-54px", dy: "-16px", size: 16, delay: "0ms",  color: "#f9a11b" },
                { dx: "48px",  dy: "-28px", size: 12, delay: "40ms", color: "#008cb2" },
                { dx: "-36px", dy: "26px",  size: 13, delay: "80ms", color: "#f9a11b" },
                { dx: "60px",  dy: "14px",  size: 10, delay: "60ms", color: "#70c9c0" },
                { dx: "8px",   dy: "-40px", size: 14, delay: "20ms", color: "#008cb2" },
                { dx: "30px",  dy: "34px",  size: 11, delay: "100ms", color: "#f9a11b" },
              ].map((s, i) => (
                <svg
                  key={i}
                  className="sparkle-burst absolute left-1/2 top-1/2"
                  style={{
                    width: s.size,
                    height: s.size,
                    marginLeft: -s.size / 2,
                    marginTop: -s.size / 2,
                    ["--dx" as string]: s.dx,
                    ["--dy" as string]: s.dy,
                    animationDelay: s.delay,
                  }}
                  viewBox="0 0 24 24"
                  fill={s.color}
                >
                  <path d="M12 0C12.9 6.6 17.4 11.1 24 12 17.4 12.9 12.9 17.4 12 24 11.1 17.4 6.6 12.9 0 12 6.6 11.1 11.1 6.6 12 0Z" />
                </svg>
              ))}
            </div>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-teal"
              style={{ color: "#1A1A1A" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+381653223093"
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: "#008cb2" }}
          >
            <Phone size={15} />
            065 32 23 093
          </a>
          <a
            href="http://zakazi.online/hildent"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#f9a11b" }}
          >
            Zakaži pregled
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Meni"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-medium text-dark hover:text-teal transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="http://zakazi.online/hildent"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 rounded-md text-sm font-semibold text-white text-center"
            style={{ background: "#f9a11b" }}
          >
            Zakaži pregled
          </a>
        </div>
      )}
    </header>
  );
}
