import Link from "next/link";

const posts = [
  { slug: "ultra-processed-foods-hidden-cost", title: "The Hidden Cost of Ultra-Processed Foods", date: "February 20, 2026", excerpt: "Why the convenience of modern food comes at a price our bodies weren't designed to pay.", category: "Research" },
  { slug: "microbiome-diet-connection", title: "Your Microbiome Is What You Eat", date: "February 12, 2026", excerpt: "New research reveals just how quickly dietary changes reshape our gut ecosystem.", category: "Science" },
  { slug: "geriatric-nutrition-lessons", title: "What 40 Years in Geriatrics Taught Me About Food", date: "January 28, 2026", excerpt: "Reflections on decades of clinical observation and the patterns that keep emerging.", category: "Personal" },
  { slug: "prevention-vs-treatment", title: "Prevention vs. Treatment: A False Economy", date: "January 15, 2026", excerpt: "Why our healthcare system spends billions treating diseases it could prevent for pennies.", category: "Opinion" },
  { slug: "sugar-inflammation-link", title: "Sugar, Inflammation, and the Disease Cascade", date: "January 3, 2026", excerpt: "Tracing the molecular pathway from dietary sugar to chronic systemic inflammation.", category: "Research" },
  { slug: "traditional-diets-modern-science", title: "Traditional Diets Through the Lens of Modern Science", date: "December 18, 2025", excerpt: "What happens when we apply contemporary research methods to ancestral eating patterns.", category: "Science" },
];

export default function Blog() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Home / Blog</p>
          <h1 className="text-3xl font-bold text-wire-heading">Blog</h1>
          <p className="mt-2 text-wire-dark">
            Insights, research updates, and perspectives from Dr. Dienel.
          </p>
        </div>
      </section>

      {/* CARD GRID */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border-2 border-dashed border-wire-border p-6 hover:border-wire-dark transition-colors"
              >
                <div className="mb-3 h-40 bg-wire-placeholder rounded flex items-center justify-center text-wire-dark">
                  [Cover Image]
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="border border-wire-accent px-2 py-0.5 text-xs text-wire-dark">
                    {post.category}
                  </span>
                  <span className="text-xs text-wire-dark">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-wire-heading mb-2">
                  {post.title}
                </h3>
                <p className="text-sm">{post.excerpt}</p>
                <p className="mt-3 text-sm text-wire-dark">Read more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
