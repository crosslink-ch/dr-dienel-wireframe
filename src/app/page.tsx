import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="mx-auto mb-6 h-4 w-48 bg-wire-accent rounded" />
          <h1 className="text-4xl font-bold text-wire-heading mb-4">
            Ernährung neu denken. Gesundheit verändern.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-wire-dark mb-8">
            Nach 40 Jahren in der Medizin präsentiert Dr. Dienel eine neue
            Perspektive darauf, wie radikale Ernährungsveränderungen moderne
            Krankheiten geprägt haben — und was wir dagegen tun können.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/lectures"
              className="border-2 border-dashed border-wire-heading bg-white px-6 py-3 font-bold text-wire-heading"
            >
              Vortrag anfragen
            </Link>
            <Link
              href="/research"
              className="border-2 border-dashed border-wire-dark px-6 py-3 text-wire-dark"
            >
              Whitepaper herunterladen
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
                [Foto]
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-2xl font-bold text-wire-heading mb-4">
                Dr. Dienel kennenlernen
              </h2>
              <p className="mb-4">
                Leitender Oberarzt in der Geriatrie mit über vier Jahrzehnten
                klinischer Erfahrung. Sein Lebenswerk dreht sich um eine Frage:
                Wie hat unsere moderne Ernährung die menschliche Gesundheit
                verändert — und können wir den Schaden rückgängig machen?
              </p>
              <p className="text-wire-dark">
                Kurz vor dem Ruhestand widmet er sich nun vollständig der
                Aufklärung der Öffentlichkeit und der medizinischen Gemeinschaft
                über die systemischen Folgen der Ernährungsumstellung.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-block border-b-2 border-dashed border-wire-dark text-wire-dark"
              >
                Vollständige Biografie lesen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER SECTION */}
      <section className="bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <h2 className="text-xl font-bold text-wire-heading mb-2">
            Whitepaper herunterladen
          </h2>
          <p className="mb-6 text-wire-dark">
            &quot;Die systemischen Auswirkungen moderner Ernährung&quot; — ein
            umfassender Überblick über 40 Jahre klinischer Beobachtung und
            Forschung.
          </p>
          <div className="inline-flex items-center gap-4 border-2 border-dashed border-wire-border bg-white px-6 py-3">
            <div className="h-4 w-48 bg-wire-accent rounded" />
            <span className="text-sm text-wire-dark">[E-Mail-Eingabe]</span>
            <button className="border-2 border-dashed border-wire-heading px-4 py-1 font-bold text-wire-heading">
              Herunterladen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
