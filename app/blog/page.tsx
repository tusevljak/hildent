import OrbitDecor from "@/components/OrbitDecor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("sr-RS", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F0F8FA 0%, #ffffff 70%)" }}
      >
        <OrbitDecor className="top-[-140px] right-[-140px] w-[560px] h-[560px]" />
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#008cb2" }}>
            Saveti i novosti
          </span>
          <h1
            className="font-extrabold mt-2 mb-6 leading-tight"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#1A1A1A" }}
          >
            Blog<br />
            <span style={{ color: "#008cb2" }}>ordinacije</span>
          </h1>
          <p className="text-lg font-light leading-relaxed max-w-2xl" style={{ color: "#6B6B6B" }}>
            Ostanite informisani o najnovijim trendovima u stomatologiji i saznajte kako da što bolje brinete o svom osmehu.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-16 pb-24" style={{ background: "#fff" }}>
        <div className="max-w-content mx-auto px-6 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
                style={{ background: "#fff", boxShadow: "var(--shadow-sm)", border: "1px solid #D4EBF0" }}
              >
                <div className="relative h-48 overflow-hidden" style={{ background: "#F0F8FA" }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(0,140,178,0.1)", color: "#008cb2" }}
                    >
                      <Tag size={10} />
                      {post.category}
                    </span>
                    <span className="text-xs flex items-center gap-1" style={{ color: "#6B6B6B" }}>
                      <Clock size={10} />
                      {post.readTime} min čitanja
                    </span>
                  </div>

                  <h2 className="font-bold text-lg leading-snug mb-3 group-hover:text-teal transition-colors" style={{ color: "#1A1A1A" }}>
                    {post.title}
                  </h2>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B6B6B" }}>
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#6B6B6B" }}>
                      {formatDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold transition-colors hover:underline"
                      style={{ color: "#008cb2" }}
                    >
                      Pročitaj više
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
