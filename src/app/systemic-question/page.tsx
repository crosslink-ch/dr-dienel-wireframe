export default function SystemicQuestion() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Startseite / Die Systemfrage</p>
          <h1 className="text-3xl font-bold text-wire-heading">
            Die Systemfrage
          </h1>
        </div>
      </section>

      {/* RICH TEXT CONTENT */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Historische Ernährungsumstellung
          </h2>
          <div className="space-y-4 mb-10">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-4/6 bg-wire-placeholder rounded" />
          </div>
          <p className="mb-6">
            Im letzten Jahrhundert hat die menschliche Ernährung eine
            radikalere Veränderung durchgemacht als in den vorangegangenen
            zehntausend Jahren. Die Industrialisierung der Lebensmittelproduktion,
            der Aufstieg hochverarbeiteter Produkte und die Abkehr von
            traditioneller Ernährung haben eine neue Grundlage für den
            menschlichen Stoffwechsel geschaffen — eine, für die unser Körper
            nie vorgesehen war.
          </p>

          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Degenerative Muster
          </h2>
          <p className="mb-6">
            Dr. Dienel hat über Jahrzehnte der geriatrischen Praxis konsistente
            degenerative Muster beobachtet. Dieselben chronischen Erkrankungen
            treten mit zunehmender Häufigkeit und in immer jüngerem Alter auf:
            metabolisches Syndrom, Autoimmunerkrankungen, Herz-Kreislauf-
            Erkrankungen und kognitiver Verfall.
          </p>
          <div className="my-8 border-2 border-dashed border-wire-border bg-wire-placeholder p-8 text-center text-wire-dark">
            [Illustrative Grafik: Zeitstrahl Ernährungsumstellung vs. Krankheitsprävalenz]
          </div>

          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Offene Fragen der modernen Prävention
          </h2>
          <p className="mb-4">
            Wenn Ernährung die Hauptursache so vieler moderner Krankheiten ist,
            warum konzentriert sich die Schulmedizin weiterhin auf
            Symptombehandlung? Wie würde ein wirklich präventiver Ansatz
            aussehen — und was steht seiner Umsetzung im Weg?
          </p>
          <div className="space-y-4">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-3/4 bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
          </div>
        </div>
      </section>
    </div>
  );
}
