export default function Impressum() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Home / Legal / Impressum</p>
          <h1 className="text-3xl font-bold text-wire-heading">Impressum</h1>
        </div>
      </section>

      {/* RICH TEXT */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-xl font-bold text-wire-heading mb-4">
            Information pursuant to Sect. 5 German Telemedia Act (TMG)
          </h2>
          <div className="space-y-4 mb-8">
            <p>Dr. med. [Full Name] Dienel</p>
            <p>[Street Address]<br />[Postal Code] [City]<br />Germany</p>
          </div>

          <h2 className="text-xl font-bold text-wire-heading mb-4">Contact</h2>
          <div className="space-y-2 mb-8">
            <p>Phone: [Phone number]</p>
            <p>Email: kontakt@dr-dienel.de</p>
          </div>

          <h2 className="text-xl font-bold text-wire-heading mb-4">
            Professional Designation
          </h2>
          <div className="space-y-3 mb-8">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-3/4 bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
          </div>

          <h2 className="text-xl font-bold text-wire-heading mb-4">
            Liability for Content
          </h2>
          <div className="space-y-3 mb-8">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-2/3 bg-wire-placeholder rounded" />
          </div>

          <h2 className="text-xl font-bold text-wire-heading mb-4">
            Liability for Links
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
