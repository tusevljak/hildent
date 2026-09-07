"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews as seedReviews, type Review } from "@/data/reviews";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("sr-RS", { day: "numeric", month: "long", year: "numeric" });
}

export default function ReviewsSlider() {
  const [reviews, setReviews] = useState<Review[]>(seedReviews);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/reviews")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (alive && Array.isArray(data) && data.length > 0) {
          setReviews(
            data.map((d: Record<string, unknown>) => ({
              id: String(d.id),
              name: String(d.name),
              rating: Number(d.rating) || 5,
              text: String(d.text),
              service: (d.service as string) || undefined,
              date: typeof d.date === "string" ? d.date.slice(0, 10) : String(d.date),
            }))
          );
        }
      })
      .catch(() => {
        /* fallback na seed recenzije */
      });
    return () => {
      alive = false;
    };
  }, []);

  function scrollByCards(dir: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {reviews.map((r) => (
          <div
            key={r.id}
            data-card
            className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-xl p-6 flex flex-col gap-4"
            style={{ background: "#F0F8FA", boxShadow: "var(--shadow-sm)" }}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: Math.min(5, Math.max(1, r.rating)) }).map((_, i) => (
                <Star key={i} size={14} fill="#f9a11b" style={{ color: "#f9a11b" }} />
              ))}
            </div>
            <p className="text-sm leading-relaxed flex-1" style={{ color: "#2C2C2C" }}>
              &ldquo;{r.text}&rdquo;
            </p>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>{r.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                {r.service && (
                  <span className="text-xs font-medium" style={{ color: "#008cb2" }}>{r.service}</span>
                )}
                {r.date && (
                  <span className="text-xs" style={{ color: "#6B6B6B" }}>· {formatDate(r.date)}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {reviews.length > 1 && (
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={() => scrollByCards(-1)}
            aria-label="Prethodne recenzije"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
            style={{ background: "#fff", boxShadow: "var(--shadow-md)", color: "#008cb2" }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollByCards(1)}
            aria-label="Sledeće recenzije"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
            style={{ background: "#fff", boxShadow: "var(--shadow-md)", color: "#008cb2" }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
