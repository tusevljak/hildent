"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/o-nama",    label: "O nama" },
  { href: "/usluge",   label: "Usluge" },
  { href: "/blog",     label: "Blog" },
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
          scrolled ? "h-20" : "h-32"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="HilDent početna">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo.svg"
            alt="HilDent"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-12" : "h-24"}`}
          />
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
