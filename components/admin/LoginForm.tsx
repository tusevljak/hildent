"use client";

import { useActionState } from "react";
import { login } from "@/app/admin/actions";

export default function LoginForm() {
  const [error, formAction, pending] = useActionState(login, undefined);

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "linear-gradient(135deg, #F0F8FA 0%, #ffffff 70%)" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-8"
        style={{ background: "#fff", boxShadow: "var(--shadow-lg)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo.svg" alt="HilDent" className="h-12 w-auto mb-6" />
        <h1 className="text-xl font-bold mb-1" style={{ color: "#1A1A1A" }}>Admin prijava</h1>
        <p className="text-sm mb-6" style={{ color: "#6B6B6B" }}>Unesite admin lozinku.</p>

        <form action={formAction} className="flex flex-col gap-4">
          <input
            type="password"
            name="password"
            placeholder="Lozinka"
            autoFocus
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{ background: "#F8F8F8", border: "1.5px solid #D4EBF0", color: "#1A1A1A" }}
          />
          {error && (
            <p className="text-sm" style={{ color: "#d13b3b" }}>{error}</p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="w-full px-6 py-3 rounded-lg font-semibold text-white transition-all hover:-translate-y-0.5 disabled:opacity-60"
            style={{ background: "#008cb2" }}
          >
            {pending ? "Prijava..." : "Prijavi se"}
          </button>
        </form>
      </div>
    </main>
  );
}
