"use client";

import { useState } from "react";
import { serviceCategories } from "@/data/services";
import { ChevronDown, ChevronUp } from "lucide-react";

function formatPrice(price: number) {
  return price.toLocaleString("sr-RS") + " rsd";
}

function ServiceAccordion({ category }: { category: typeof serviceCategories[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: "#fff",
        boxShadow: open ? "var(--shadow-md)" : "var(--shadow-sm)",
        border: open ? "1.5px solid #D4EBF0" : "1.5px solid transparent",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200"
        style={{ background: open ? "#F0F8FA" : "transparent" }}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-base" style={{ color: "#1A1A1A" }}>
              {category.title}
            </h3>
            {category.comingSoon && (
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "#f9a11b", color: "#fff" }}
              >
                Uskoro
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          {!category.comingSoon && (
            <span className="text-xs font-medium hidden sm:block" style={{ color: "#6B6B6B" }}>
              {category.items.length} usluga
            </span>
          )}
          {open ? (
            <ChevronUp size={18} style={{ color: "#008cb2" }} />
          ) : (
            <ChevronDown size={18} style={{ color: "#6B6B6B" }} />
          )}
        </div>
      </button>

      {open && !category.comingSoon && (
        <div className="px-6 pb-6 pt-5">
          <p className="text-sm mb-5 pb-4" style={{ color: "#6B6B6B", borderBottom: "1px solid #D4EBF0" }}>
            {category.description}
          </p>
          <div className="flex flex-col divide-y" style={{ borderColor: "#D4EBF0" }}>
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between py-3 gap-4"
              >
                <span className="text-sm" style={{ color: "#2C2C2C" }}>
                  {item.name}
                </span>
                <span
                  className="text-sm font-semibold shrink-0"
                  style={{ color: "#008cb2" }}
                >
                  {formatPrice(item.price)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {open && category.comingSoon && (
        <div className="px-6 pb-6 pt-5">
          <p className="text-sm" style={{ color: "#6B6B6B" }}>
            Ova usluga je u pripremi. Pratite naš{" "}
            <a
              href="https://www.instagram.com/hildent10/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
              style={{ color: "#008cb2" }}
            >
              Instagram
            </a>{" "}
            za više informacija.
          </p>
        </div>
      )}
    </div>
  );
}

export default function ServicesAccordionList() {
  return (
    <div className="flex flex-col gap-4">
      {serviceCategories.map((cat) => (
        <ServiceAccordion key={cat.id} category={cat} />
      ))}
    </div>
  );
}
