import { isAuthed } from "@/lib/auth";
import LoginForm from "@/components/admin/LoginForm";
import ReviewsAdmin from "@/components/admin/ReviewsAdmin";
import { logout } from "./actions";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Admin · Hildent",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const authed = await isAuthed();

  if (!authed) {
    return <LoginForm />;
  }

  return (
    <main style={{ background: "#F0F8FA", minHeight: "100vh" }}>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo.svg" alt="HilDent" className="h-10 w-auto mb-2" />
            <h1 className="text-2xl font-bold" style={{ color: "#1A1A1A" }}>Admin panel</h1>
          </div>
          <form action={logout}>
            <button
              className="px-4 py-2 rounded-md text-sm font-semibold"
              style={{ background: "#fff", color: "#008cb2", boxShadow: "var(--shadow-sm)" }}
            >
              Odjava
            </button>
          </form>
        </div>

        <ReviewsAdmin />
      </div>
    </main>
  );
}
