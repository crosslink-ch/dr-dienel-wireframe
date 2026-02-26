import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="mx-auto mb-6 h-4 w-48 bg-wire-accent rounded" />
          <h1 className="text-4xl font-bold text-wire-heading mb-4">
            Rethinking Nutrition. Transforming Health.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-wire-dark mb-8">
            After 40 years in medicine, Dr. Dienel presents a new perspective on
            how radical dietary changes have shaped modern disease — and what we
            can do about it.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/lectures"
              className="border-2 border-dashed border-wire-heading bg-white px-6 py-3 font-bold text-wire-heading"
            >
              Request a Lecture
            </Link>
            <Link
              href="/research"
              className="border-2 border-dashed border-wire-dark px-6 py-3 text-wire-dark"
            >
              Download Whitepaper
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO TEASER SECTION */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-3 gap-8 items-center">
            <div className="col-span-1">
              <div className="aspect-square bg-wire-placeholder border-2 border-dashed border-wire-border rounded-full flex items-center justify-center text-wire-dark">
                [Photo]
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-2xl font-bold text-wire-heading mb-4">
                Meet Dr. Dienel
              </h2>
              <p className="mb-4">
                Senior attending physician in geriatrics with over four decades
                of clinical experience. His life&apos;s work centers on one question:
                how has our modern diet reshaped human health — and can we
                reverse the damage?
              </p>
              <p className="text-wire-dark">
                Now approaching retirement, he is dedicating himself fully to
                educating the public and the medical community about the
                systemic consequences of dietary change.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-block border-b-2 border-dashed border-wire-dark text-wire-dark"
              >
                Read full bio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER SECTION */}
      <section className="bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <h2 className="text-xl font-bold text-wire-heading mb-2">
            Download the Whitepaper
          </h2>
          <p className="mb-6 text-wire-dark">
            &quot;The Systemic Impact of Modern Nutrition&quot; — a comprehensive
            overview of 40 years of clinical observation and research.
          </p>
          <div className="inline-flex items-center gap-4 border-2 border-dashed border-wire-border bg-white px-6 py-3">
            <div className="h-4 w-48 bg-wire-accent rounded" />
            <span className="text-sm text-wire-dark">[Email input]</span>
            <button className="border-2 border-dashed border-wire-heading px-4 py-1 font-bold text-wire-heading">
              Download
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
