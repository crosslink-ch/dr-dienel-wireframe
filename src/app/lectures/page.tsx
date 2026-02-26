const topics = [
  { title: "Die systemischen Auswirkungen moderner Ernährung", description: "Ein umfassender Überblick darüber, wie die Industrialisierung der Ernährung chronische Krankheiten antreibt.", tag: "Signature" },
  { title: "Hochverarbeitete Lebensmittel & Metabolisches Syndrom", description: "Die Mechanismen hinter der globalen metabolischen Gesundheitskrise verstehen.", tag: "Medizin" },
  { title: "Die Mikrobiom-Revolution", description: "Was die Darmforschung über die Zukunft der Präventivmedizin verrät.", tag: "Forschung" },
  { title: "Ernährung in der Geriatrie", description: "Praktische Ansätze zur Ernährungsintervention bei alternden Bevölkerungsgruppen.", tag: "Klinisch" },
];

const events = [
  { date: "15. März 2026", title: "Medizinische Konferenz München", location: "München, Deutschland", status: "Bestätigt" },
  { date: "8. April 2026", title: "Public-Health-Symposium", location: "Zürich, Schweiz", status: "Bestätigt" },
  { date: "22. Mai 2026", title: "Ernährungswissenschaftlicher Kongress", location: "Wien, Österreich", status: "Ausstehend" },
  { date: "10. Juni 2026", title: "Forum für Geriatrische Medizin", location: "Berlin, Deutschland", status: "Ausstehend" },
];

export default function Lectures() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Startseite / Vorträge</p>
          <h1 className="text-3xl font-bold text-wire-heading">
            Vorträge & Fachpublikum
          </h1>
          <p className="mt-2 text-wire-dark">
            Dr. Dienel steht für Konferenzen, Symposien und Fachveranstaltungen zur Verfügung.
          </p>
        </div>
      </section>

      {/* LECTURE TOPICS */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Vortragsthemen
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {topics.map((t, i) => (
              <div
                key={i}
                className="border-2 border-dashed border-wire-border p-6"
              >
                <span className="inline-block border border-wire-accent px-2 py-0.5 text-xs text-wire-dark mb-3">
                  {t.tag}
                </span>
                <h3 className="text-lg font-bold text-wire-heading mb-2">
                  {t.title}
                </h3>
                <p className="text-sm">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCES / TESTIMONIALS */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Referenzen
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border-2 border-dashed border-wire-border p-6">
                <p className="italic text-sm mb-4">
                  &quot;Platzhalter-Testimonial eines Konferenzveranstalters oder
                  Teilnehmers, der den Vortrag von Dr. Dienel lobt.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-wire-placeholder border border-wire-border" />
                  <div>
                    <p className="text-sm font-bold text-wire-heading">Vorname Nachname</p>
                    <p className="text-xs text-wire-dark">Organisation</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT LIST */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Kommende Veranstaltungen
          </h2>
          <div className="space-y-4">
            {events.map((e, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-2 border-dashed border-wire-border p-4"
              >
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm font-bold text-wire-heading">{e.date}</p>
                  </div>
                  <div>
                    <p className="font-bold text-wire-heading">{e.title}</p>
                    <p className="text-sm text-wire-dark">{e.location}</p>
                  </div>
                </div>
                <span className={`border px-3 py-1 text-xs ${e.status === "Bestätigt" ? "border-wire-heading text-wire-heading" : "border-wire-accent text-wire-dark"}`}>
                  {e.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-2">
            Vortrag anfragen
          </h2>
          <p className="text-wire-dark mb-8">
            Sie möchten Dr. Dienel als Redner für Ihre Veranstaltung buchen? Füllen Sie das untenstehende Formular aus.
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-wire-heading mb-1">Name</label>
                <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-wire-heading mb-1">Organisation</label>
                <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-wire-heading mb-1">E-Mail</label>
              <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-wire-heading mb-1">Veranstaltungsart & Datum</label>
              <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-wire-heading mb-1">Nachricht</label>
              <div className="h-32 w-full border-2 border-dashed border-wire-border bg-white" />
            </div>
            <button className="border-2 border-dashed border-wire-heading px-6 py-3 font-bold text-wire-heading">
              Anfrage absenden
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
