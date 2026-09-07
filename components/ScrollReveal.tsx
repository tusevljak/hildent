"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    // Sačekaj da se novi sadržaj oboji (bitno posle client-navigacije)
    const raf = requestAnimationFrame(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
      if (els.length === 0) return;

      // Elemente koji su već u vidokrugu odmah prikaži (bez blinkanja)
      const inView = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
      };
      els.forEach((e) => {
        if (inView(e)) e.classList.add("in");
      });

      root.classList.add("reveal-ready");

      const rest = els.filter((e) => !e.classList.contains("in"));
      if (!("IntersectionObserver" in window)) {
        rest.forEach((e) => e.classList.add("in"));
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      rest.forEach((e) => io.observe(e));
      cleanup = () => io.disconnect();
    });

    let cleanup: (() => void) | undefined;
    return () => {
      cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
