import { Phone, CalendarCheck } from "lucide-react";

export default function MobileCTA() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-stretch gap-2 px-3 py-2.5"
      style={{
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid #D4EBF0",
        boxShadow: "0 -4px 20px rgba(0,140,178,0.10)",
        paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))",
      }}
    >
      <a
        href="tel:+381653223093"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold"
        style={{ border: "1.5px solid #008cb2", color: "#008cb2" }}
      >
        <Phone size={16} />
        Pozovi
      </a>
      <a
        href="http://zakazi.online/hildent"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-white"
        style={{ background: "#f9a11b", boxShadow: "0 4px 14px rgba(249,161,27,0.35)" }}
      >
        <CalendarCheck size={16} />
        Zakaži
      </a>
    </div>
  );
}
