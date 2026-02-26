export default function Contact() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Startseite / Kontakt</p>
          <h1 className="text-3xl font-bold text-wire-heading">Kontakt</h1>
          <p className="mt-2 text-wire-dark">
            Nehmen Sie Kontakt mit Dr. Dienel auf für Anfragen, Kooperationen oder Medienanfragen.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-3 gap-12">
          {/* CONTACT FORM */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-wire-heading mb-6">
              Nachricht senden
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-wire-heading mb-1">
                    Vorname
                  </label>
                  <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-wire-heading mb-1">
                    Nachname
                  </label>
                  <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-wire-heading mb-1">
                  E-Mail
                </label>
                <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-wire-heading mb-1">
                  Betreff
                </label>
                <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-wire-heading mb-1">
                  Nachricht
                </label>
                <div className="h-40 w-full border-2 border-dashed border-wire-border bg-white" />
              </div>
              <button className="border-2 border-dashed border-wire-heading px-6 py-3 font-bold text-wire-heading">
                Nachricht senden
              </button>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-wire-heading mb-6">
              Kontaktdaten
            </h2>
            <div className="space-y-6">
              <div className="border-2 border-dashed border-wire-border p-4">
                <p className="font-bold text-wire-heading text-sm mb-1">E-Mail</p>
                <p className="text-sm">kontakt@dr-dienel.de</p>
              </div>
              <div className="border-2 border-dashed border-wire-border p-4">
                <p className="font-bold text-wire-heading text-sm mb-1">Standort</p>
                <p className="text-sm">Deutschland</p>
              </div>
              <div className="border-2 border-dashed border-wire-border p-4">
                <p className="font-bold text-wire-heading text-sm mb-1">LinkedIn</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-8 w-8 border-2 border-dashed border-wire-border flex items-center justify-center text-xs text-wire-dark">
                    in
                  </div>
                  <span className="text-sm">Dr. Dienel auf LinkedIn</span>
                </div>
              </div>
              <div className="border-2 border-dashed border-wire-border p-4">
                <p className="font-bold text-wire-heading text-sm mb-1">Für Vorträge</p>
                <p className="text-sm">
                  Um Dr. Dienel als Redner zu buchen, nutzen Sie bitte das{" "}
                  <span className="text-wire-heading underline">Vortragsanfrage-Formular</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
