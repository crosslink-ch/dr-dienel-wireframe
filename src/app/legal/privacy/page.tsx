export default function Privacy() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Startseite / Rechtliches / Datenschutz</p>
          <h1 className="text-3xl font-bold text-wire-heading">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* RICH TEXT */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-xl font-bold text-wire-heading mb-4">
            1. Datenschutz auf einen Blick
          </h2>
          <div className="space-y-3 mb-8">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-3/4 bg-wire-placeholder rounded" />
          </div>

          <h2 className="text-xl font-bold text-wire-heading mb-4">
            2. Hosting
          </h2>
          <div className="space-y-3 mb-8">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-4/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
          </div>

          <h2 className="text-xl font-bold text-wire-heading mb-4">
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <div className="space-y-3 mb-8">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-2/3 bg-wire-placeholder rounded" />
          </div>

          <h2 className="text-xl font-bold text-wire-heading mb-4">
            4. Datenerfassung auf dieser Website
          </h2>
          <div className="space-y-3 mb-8">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-3/4 bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-full bg-wire-placeholder rounded" />
          </div>

          <h2 className="text-xl font-bold text-wire-heading mb-4">
            5. Newsletter / Kontaktformulare
          </h2>
          <div className="space-y-3 mb-8">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-2/3 bg-wire-placeholder rounded" />
          </div>

          <h2 className="text-xl font-bold text-wire-heading mb-4">
            6. Ihre Rechte
          </h2>
          <div className="space-y-3">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-4/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
          </div>
        </div>
      </section>
    </div>
  );
}
