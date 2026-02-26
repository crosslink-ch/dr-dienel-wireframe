import Link from "next/link";

const posts = [
  { slug: "versteckte-kosten-hochverarbeiteter-lebensmittel", title: "Die versteckten Kosten hochverarbeiteter Lebensmittel", date: "20. Februar 2026", excerpt: "Warum die Bequemlichkeit moderner Nahrung einen Preis hat, für den unser Körper nicht gemacht ist.", category: "Forschung" },
  { slug: "mikrobiom-ernaehrungs-zusammenhang", title: "Dein Mikrobiom ist, was du isst", date: "12. Februar 2026", excerpt: "Neue Forschungen zeigen, wie schnell Ernährungsumstellungen unser Darm-Ökosystem umgestalten.", category: "Wissenschaft" },
  { slug: "lektionen-aus-40-jahren-geriatrie", title: "Was mich 40 Jahre Geriatrie über Ernährung gelehrt haben", date: "28. Januar 2026", excerpt: "Rückblick auf Jahrzehnte klinischer Beobachtung und die Muster, die sich immer wieder zeigen.", category: "Persönlich" },
  { slug: "praevention-vs-behandlung", title: "Prävention vs. Behandlung: Eine falsche Rechnung", date: "15. Januar 2026", excerpt: "Warum unser Gesundheitssystem Milliarden für die Behandlung von Krankheiten ausgibt, die es für Pfennige verhindern könnte.", category: "Meinung" },
  { slug: "zucker-entzuendung-zusammenhang", title: "Zucker, Entzündung und die Krankheitskaskade", date: "3. Januar 2026", excerpt: "Den molekularen Weg von Nahrungszucker zu chronischer systemischer Entzündung nachverfolgen.", category: "Forschung" },
  { slug: "traditionelle-ernaehrung-moderne-wissenschaft", title: "Traditionelle Ernährung im Licht moderner Wissenschaft", date: "18. Dezember 2025", excerpt: "Was passiert, wenn wir zeitgenössische Forschungsmethoden auf überlieferte Ernährungsmuster anwenden.", category: "Wissenschaft" },
];

export default function Blog() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Startseite / Blog</p>
          <h1 className="text-3xl font-bold text-wire-heading">Blog</h1>
          <p className="mt-2 text-wire-dark">
            Einblicke, Forschungsupdates und Perspektiven von Dr. Dienel.
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
                  [Titelbild]
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
                <p className="mt-3 text-sm text-wire-dark">Weiterlesen →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
