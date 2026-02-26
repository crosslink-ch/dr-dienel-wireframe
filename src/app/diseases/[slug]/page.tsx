const diseases: Record<string, { title: string; content: string }> = {
  "metabolisches-syndrom": { title: "Metabolisches Syndrom", content: "Ein Bündel von Erkrankungen — erhöhter Blutdruck, hoher Blutzucker, überschüssiges Körperfett im Bauchbereich und abnormale Cholesterinwerte — die zusammen auftreten und das Risiko für Herzerkrankungen, Schlaganfall und Typ-2-Diabetes erhöhen." },
  "typ-2-diabetes": { title: "Typ-2-Diabetes", content: "Einst als Alterskrankheit betrachtet, betrifft Typ-2-Diabetes heute zunehmend jüngere Bevölkerungsgruppen. Der Zusammenhang zwischen dem Konsum hochverarbeiteter Lebensmittel und Insulinresistenz ist gut dokumentiert." },
  "herz-kreislauf-erkrankungen": { title: "Herz-Kreislauf-Erkrankungen", content: "Herzerkrankungen bleiben weltweit die häufigste Todesursache. Forschungen weisen zunehmend auf Ernährungsfaktoren — über einfaches Cholesterin hinaus — als primäre Treiber hin." },
  "autoimmunerkrankungen": { title: "Autoimmunerkrankungen", content: "Der dramatische Anstieg von Autoimmunerkrankungen korreliert mit Veränderungen der Darmmikrobiom-Zusammensetzung, die durch moderne Ernährungsmuster verursacht werden." },
  "kognitiver-verfall": { title: "Kognitiver Verfall & Demenz", content: "Die Alzheimer-Krankheit wurde von Forschern als ‚Typ-3-Diabetes' bezeichnet, die metabolische Dysfunktion als Schlüsselfaktor für den kognitiven Abbau identifiziert haben." },
  "adipositas": { title: "Adipositas", content: "Adipositas ist nicht einfach eine Frage der Willenskraft. Hochverarbeitete Lebensmittel sind darauf ausgelegt, die natürliche Appetitregulation auszuhebeln und eine metabolische Falle zu schaffen." },
  "chronische-entzuendungen": { title: "Chronische Entzündungen", content: "Niedriggradige chronische Entzündungen sind der gemeinsame Nenner, der die meisten modernen degenerativen Erkrankungen verbindet. Die Ernährung ist ihr wichtigster Modulator." },
  "verdauungsstoerungen": { title: "Verdauungsstörungen", content: "Der Darm ist der Ort, an dem ernährungsbedingte Schäden beginnen. Erkrankungen wie Reizdarm, Morbus Crohn und Leaky-Gut-Syndrom haben parallel zur Industrialisierung der Ernährung explosionsartig zugenommen." },
};

export default async function DiseaseDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const disease = diseases[slug] || {
    title: "Krankheit",
    content: "Inhalt zu dieser Erkrankung.",
  };

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">
            Startseite / Krankheiten / {disease.title}
          </p>
          <h1 className="text-3xl font-bold text-wire-heading">
            {disease.title}
          </h1>
        </div>
      </section>

      {/* RICH TEXT CONTENT */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="my-8 border-2 border-dashed border-wire-border bg-wire-placeholder p-8 text-center text-wire-dark h-48 flex items-center justify-center">
            [Titelbild / Illustration]
          </div>

          <p className="mb-6 text-lg">{disease.content}</p>

          <h2 className="text-xl font-bold text-wire-heading mb-4 mt-8">
            Ursachen & Ernährungszusammenhang
          </h2>
          <div className="space-y-3 mb-8">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-3/4 bg-wire-placeholder rounded" />
          </div>

          <h2 className="text-xl font-bold text-wire-heading mb-4">
            Gesundheitstipps & Prävention
          </h2>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 shrink-0 border-2 border-dashed border-wire-border" />
              <div className="h-4 w-full bg-wire-placeholder rounded" />
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 shrink-0 border-2 border-dashed border-wire-border" />
              <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 shrink-0 border-2 border-dashed border-wire-border" />
              <div className="h-4 w-4/6 bg-wire-placeholder rounded" />
            </div>
          </div>

          <h2 className="text-xl font-bold text-wire-heading mb-4">
            Weiterführende Literatur
          </h2>
          <div className="space-y-2">
            <div className="border-l-4 border-wire-accent pl-4 py-1">
              <div className="h-3 w-3/4 bg-wire-placeholder rounded" />
            </div>
            <div className="border-l-4 border-wire-accent pl-4 py-1">
              <div className="h-3 w-2/3 bg-wire-placeholder rounded" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
