import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("sr-RS", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />

      <section
        className="pt-40 pb-16"
        style={{ background: "linear-gradient(135deg, #F0F8FA 0%, #ffffff 70%)" }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:underline"
            style={{ color: "#0095B6" }}
          >
            <ArrowLeft size={15} />
            Nazad na blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: "rgba(0,149,182,0.1)", color: "#0095B6" }}
            >
              <Tag size={10} />
              {post.category}
            </span>
            <span className="text-xs flex items-center gap-1" style={{ color: "#6B6B6B" }}>
              <Clock size={10} />
              {post.readTime} min čitanja
            </span>
          </div>

          <h1
            className="font-extrabold leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#1A1A1A" }}
          >
            {post.title}
          </h1>
          <p className="text-sm mb-6" style={{ color: "#6B6B6B" }}>
            {formatDate(post.date)} · Dr Igor Bratić
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <div
            className="rounded-2xl h-64 flex items-center justify-center mb-10"
            style={{ background: "#F0F8FA" }}
          >
            <span className="text-6xl">🦷</span>
          </div>

          <p className="text-lg leading-relaxed mb-6" style={{ color: "#2C2C2C" }}>
            {post.excerpt}
          </p>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#6B6B6B" }}>
            Ovaj tekst je placeholder. Pravi sadržaj posta biće dodat u sledećoj fazi razvoja sajta. Svaki post će sadržati detaljne savete i informacije koje su korisne za pacijente.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B6B6B" }}>
            Za sva pitanja možete nas kontaktirati na broj{" "}
            <a href="tel:+381653223093" className="font-medium hover:underline" style={{ color: "#0095B6" }}>
              065 32 23 093
            </a>{" "}
            ili zakažite pregled putem našeg online sistema.
          </p>

          <div className="mt-12 pt-8" style={{ borderTop: "1px solid #D4EBF0" }}>
            <a
              href="http://zakazi.online/hildent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ background: "#F5A800" }}
            >
              Zakaži pregled →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
