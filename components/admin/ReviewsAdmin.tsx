"use client";

import { useEffect, useState } from "react";
import { Star, Trash2, Plus } from "lucide-react";

type Review = {
  id: number | string;
  name: string;
  rating: number;
  text: string;
  service?: string | null;
  date: string;
};

const emptyForm = { name: "", rating: 5, text: "", service: "", date: "" };

export default function ReviewsAdmin() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ ...emptyForm });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/reviews", { cache: "no-store" });
      const data = res.ok ? await res.json() : [];
      setReviews(Array.isArray(data) ? data : []);
    } catch {
      setError("Ne mogu da učitam recenzije (proveri DATABASE_URL).");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function addReview(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.text.trim()) {
      setError("Ime i tekst su obavezni.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          rating: Number(form.rating),
          text: form.text.trim(),
          service: form.service.trim() || undefined,
          date: form.date || undefined,
        }),
      });
      if (!res.ok) {
        setError(res.status === 401 ? "Sesija istekla — osveži i uloguj se ponovo." : "Greška pri čuvanju.");
        return;
      }
      setForm({ ...emptyForm });
      await load();
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: number | string) {
    if (!confirm("Obrisati ovu recenziju?")) return;
    const res = await fetch(`/api/reviews/${id}`, { method: "DELETE" });
    if (res.ok) setReviews((rs) => rs.filter((r) => r.id !== id));
  }

  const inputStyle = {
    background: "#F8F8F8",
    border: "1.5px solid #D4EBF0",
    color: "#1A1A1A",
  } as const;

  return (
    <div className="flex flex-col gap-8">
      {/* ADD FORM */}
      <div className="rounded-2xl p-6" style={{ background: "#fff", boxShadow: "var(--shadow-sm)" }}>
        <h2 className="text-lg font-bold mb-4" style={{ color: "#1A1A1A" }}>Dodaj recenziju</h2>
        <form onSubmit={addReview} className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              placeholder="Ime i prezime *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="px-4 py-2.5 rounded-lg text-sm outline-none"
              style={inputStyle}
            />
            <input
              placeholder="Usluga (npr. Implantologija)"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="px-4 py-2.5 rounded-lg text-sm outline-none"
              style={inputStyle}
            />
          </div>
          <textarea
            placeholder="Tekst recenzije *"
            rows={3}
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            className="px-4 py-2.5 rounded-lg text-sm outline-none resize-none"
            style={inputStyle}
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="flex items-center gap-3 text-sm" style={{ color: "#6B6B6B" }}>
              Ocena
              <select
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                className="px-3 py-2 rounded-lg text-sm outline-none"
                style={inputStyle}
              >
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>{n} ★</option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-3 text-sm" style={{ color: "#6B6B6B" }}>
              Datum
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="px-3 py-2 rounded-lg text-sm outline-none"
                style={inputStyle}
              />
            </label>
          </div>
          {error && <p className="text-sm" style={{ color: "#d13b3b" }}>{error}</p>}
          <button
            type="submit"
            disabled={saving}
            className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white transition-all hover:-translate-y-0.5 disabled:opacity-60"
            style={{ background: "#f9a11b" }}
          >
            <Plus size={16} />
            {saving ? "Čuvam..." : "Dodaj recenziju"}
          </button>
        </form>
      </div>

      {/* LIST */}
      <div>
        <h2 className="text-lg font-bold mb-4" style={{ color: "#1A1A1A" }}>
          Postojeće recenzije {reviews.length > 0 && `(${reviews.length})`}
        </h2>
        {loading ? (
          <p className="text-sm" style={{ color: "#6B6B6B" }}>Učitavam...</p>
        ) : reviews.length === 0 ? (
          <p className="text-sm" style={{ color: "#6B6B6B" }}>
            Još nema recenzija u bazi. Dodaj prvu iznad.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="rounded-xl p-4 flex items-start justify-between gap-4"
                style={{ background: "#fff", boxShadow: "var(--shadow-sm)" }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>{r.name}</span>
                    <span className="flex gap-0.5">
                      {Array.from({ length: Math.min(5, Math.max(1, r.rating)) }).map((_, i) => (
                        <Star key={i} size={12} fill="#f9a11b" style={{ color: "#f9a11b" }} />
                      ))}
                    </span>
                    {r.service && (
                      <span className="text-xs" style={{ color: "#008cb2" }}>· {r.service}</span>
                    )}
                  </div>
                  <p className="text-sm" style={{ color: "#2C2C2C" }}>{r.text}</p>
                </div>
                <button
                  onClick={() => remove(r.id)}
                  aria-label="Obriši"
                  className="shrink-0 p-2 rounded-lg transition-colors"
                  style={{ color: "#d13b3b", background: "#fdecec" }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
