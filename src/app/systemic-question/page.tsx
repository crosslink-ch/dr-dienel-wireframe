export default function SystemicQuestion() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Home / The Systemic Question</p>
          <h1 className="text-3xl font-bold text-wire-heading">
            The Systemic Question
          </h1>
        </div>
      </section>

      {/* RICH TEXT CONTENT */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Historical Dietary Change
          </h2>
          <div className="space-y-4 mb-10">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-4/6 bg-wire-placeholder rounded" />
          </div>
          <p className="mb-6">
            Over the past century, the human diet has undergone a more radical
            transformation than in the preceding ten thousand years. The
            industrialization of food production, the rise of ultra-processed
            products, and the shift away from traditional nutrition have created
            a new baseline for human metabolism — one our bodies were never
            designed for.
          </p>

          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Degenerative Patterns
          </h2>
          <p className="mb-6">
            Dr. Dienel has observed consistent degenerative patterns across
            decades of geriatric practice. The same chronic conditions appear
            with increasing frequency and at younger ages: metabolic syndrome,
            autoimmune disorders, cardiovascular disease, and cognitive decline.
          </p>
          <div className="my-8 border-2 border-dashed border-wire-border bg-wire-placeholder p-8 text-center text-wire-dark">
            [Illustrative diagram: timeline of dietary change vs. disease prevalence]
          </div>

          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Open Questions in Modern Prevention
          </h2>
          <p className="mb-4">
            If diet is the root cause of so many modern diseases, why does
            mainstream medicine continue to focus on symptom management? What
            would a truly preventive approach look like — and what stands in the
            way of its adoption?
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
