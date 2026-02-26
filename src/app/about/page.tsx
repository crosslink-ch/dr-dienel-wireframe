export default function About() {
  const timeline = [
    { year: "1984", event: "Abschluss des Medizinstudiums" },
    { year: "1985–1995", event: "Allgemeinmedizin und Innere Medizin" },
    { year: "1996–2010", event: "Spezialisierung auf Geriatrie" },
    { year: "2010–heute", event: "Leitender Oberarzt in der Geriatrie" },
    { year: "2026", event: "Ruhestand — volle Widmung an Ernährungsaufklärung" },
  ];

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Startseite / Über mich</p>
          <h1 className="text-3xl font-bold text-wire-heading">
            Über Dr. Dienel
          </h1>
        </div>
      </section>

      {/* PROFILE / BIO */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-3 gap-12">
            <div className="col-span-1">
              <div className="aspect-[3/4] bg-wire-placeholder border-2 border-dashed border-wire-border rounded flex items-center justify-center text-wire-dark">
                [Professionelles Foto]
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-dashed border-wire-border inline-block" />
                  <span>Leitender Oberarzt</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-dashed border-wire-border inline-block" />
                  <span>Geriatrische Medizin</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-dashed border-wire-border inline-block" />
                  <span>Über 40 Jahre Erfahrung</span>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-2xl font-bold text-wire-heading mb-4">
                Ein Leben in der Medizin. Eine Mission für Veränderung.
              </h2>
              <p className="mb-4">
                Dr. Dienel hat über vier Jahrzehnte die verheerenden Auswirkungen
                moderner Ernährung auf die menschliche Gesundheit beobachtet. Als
                leitender Oberarzt in der Geriatrie hat er aus erster Hand
                miterlebt, wie Ernährungsumstellungen degenerative Erkrankungen
                über Generationen hinweg beschleunigt haben.
              </p>
              <p className="mb-4">
                Sein Ansatz verbindet klinische Beobachtung mit moderner
                Ernährungswissenschaft, um den Status quo der Präventivmedizin
                herauszufordern.
              </p>

              <h3 className="text-lg font-bold text-wire-heading mt-8 mb-3">
                Motivation
              </h3>
              <p className="mb-4">
                Nach Jahrzehnten der Behandlung von Folgen schlechter Ernährung
                konzentriert sich Dr. Dienel nun darauf, die Ursache anzugehen.
                Seine Mission ist es, sowohl die medizinische Gemeinschaft als
                auch die breite Öffentlichkeit über die systemischen Auswirkungen
                der Ernährungsumstellung aufzuklären.
              </p>

              <h3 className="text-lg font-bold text-wire-heading mt-8 mb-3">
                Fachliche Schwerpunkte
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-wire-accent rounded-full" />
                  Geriatrische Medizin und altersbedingte Erkrankungen
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-wire-accent rounded-full" />
                  Ernährungseinfluss auf die metabolische Gesundheit
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-wire-accent rounded-full" />
                  Hochverarbeitete Lebensmittel und chronische Krankheiten
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-wire-accent rounded-full" />
                  Präventivmedizin und Gesundheitsaufklärung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-8 text-center">
            Werdegang
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full border-2 border-dashed border-wire-heading bg-white shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-wire-border" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-bold text-wire-heading text-sm">
                    {item.year}
                  </p>
                  <p className="text-sm">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
