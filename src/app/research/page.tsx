export default function Research() {
  const sources = [
    { author: "Monteiro, C. et al.", year: 2019, title: "Ultra-processed foods: what they are and how to identify them", journal: "Public Health Nutrition" },
    { author: "Sonnenburg, J. & Sonnenburg, E.", year: 2019, title: "The Good Gut: Taking Control of Your Weight, Your Mood, and Your Long-term Health", journal: "Penguin Books" },
    { author: "Lustig, R.", year: 2021, title: "Metabolical: The Lure and the Lies of Processed Food, Nutrition, and Modern Medicine", journal: "Harper Wave" },
    { author: "Zinöcker, M. & Lindseth, I.", year: 2018, title: "The Western Diet–Microbiome-Host Interaction and Its Role in Metabolic Disease", journal: "Nutrients" },
    { author: "Srour, B. et al.", year: 2019, title: "Ultra-processed food intake and risk of cardiovascular disease", journal: "BMJ" },
  ];

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Startseite / Forschung & Perspektiven</p>
          <h1 className="text-3xl font-bold text-wire-heading">
            Forschung & Perspektiven
          </h1>
        </div>
      </section>

      {/* RICH TEXT */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-4">
            Moderne Forschung
          </h2>
          <p className="mb-4">
            Die letzten zwei Jahrzehnte haben eine Fülle von Forschungsergebnissen
            hervorgebracht, die den Konsum hochverarbeiteter Lebensmittel mit
            chronischen Krankheiten verbinden. Studien zum menschlichen Mikrobiom,
            zu Stoffwechselwegen und epigenetischen Veränderungen zeichnen ein
            immer klareres Bild.
          </p>

          <h3 className="text-lg font-bold text-wire-heading mt-8 mb-3">Hochverarbeitete Lebensmittel</h3>
          <p className="mb-4">
            Forschungen zeigen, dass hochverarbeitete Lebensmittel 50–60 % der
            Kalorienaufnahme in westlichen Ländern ausmachen. Das
            NOVA-Klassifikationssystem bietet einen Rahmen zum Verständnis
            dieser Produkte und ihrer gesundheitlichen Auswirkungen.
          </p>

          <h3 className="text-lg font-bold text-wire-heading mt-8 mb-3">Das Mikrobiom</h3>
          <p className="mb-4">
            Das Darmmikrobiom erweist sich als zentraler Vermittler zwischen
            Ernährung und Krankheit. Moderne Ernährungsweisen reduzieren
            nachweislich die mikrobielle Vielfalt, mit weitreichenden Folgen
            für Immunität, Stoffwechsel und sogar die psychische Gesundheit.
          </p>

          <h3 className="text-lg font-bold text-wire-heading mt-8 mb-3">Metabolische Folgen</h3>
          <p className="mb-4">
            Insulinresistenz, chronische Entzündungen und hormonelle Störungen
            werden heute als zusammenhängende metabolische Reaktionen auf
            Ernährungsumstellungen verstanden — nicht als isolierte Erkrankungen.
          </p>
        </div>
      </section>

      {/* LITERATURE LIST */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Literaturverzeichnis / Quellen
          </h2>
          <div className="space-y-4">
            {sources.map((s, i) => (
              <div
                key={i}
                className="border-l-4 border-wire-accent pl-4 py-2"
              >
                <p className="text-sm font-bold text-wire-heading">
                  {s.author} ({s.year})
                </p>
                <p className="text-sm italic">{s.title}</p>
                <p className="text-xs text-wire-dark">{s.journal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <h2 className="text-xl font-bold text-wire-heading mb-2">
            Das vollständige Whitepaper herunterladen
          </h2>
          <p className="mb-6 text-wire-dark">
            Eine umfassende Synthese aus 40 Jahren klinischer Beobachtung und
            moderner Ernährungswissenschaft.
          </p>
          <button className="border-2 border-dashed border-wire-heading bg-white px-6 py-3 font-bold text-wire-heading">
            Whitepaper herunterladen (PDF)
          </button>
        </div>
      </section>
    </div>
  );
}
