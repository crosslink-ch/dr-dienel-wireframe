import Link from "next/link";

const diseases = [
  { slug: "metabolisches-syndrom", title: "Metabolisches Syndrom", excerpt: "Das Zusammenspiel von Übergewicht, Insulinresistenz und kardiovaskulären Risikofaktoren." },
  { slug: "typ-2-diabetes", title: "Typ-2-Diabetes", excerpt: "Wie Ernährungsmuster Insulinresistenz und Funktionsstörungen der Bauchspeicheldrüse antreiben." },
  { slug: "herz-kreislauf-erkrankungen", title: "Herz-Kreislauf-Erkrankungen", excerpt: "Die ernährungsbedingten Wurzeln von Arteriosklerose, Bluthochdruck und Herzinsuffizienz." },
  { slug: "autoimmunerkrankungen", title: "Autoimmunerkrankungen", excerpt: "Darmpermeabilität, Mikrobiom-Störung und Immundysregulation." },
  { slug: "kognitiver-verfall", title: "Kognitiver Verfall & Demenz", excerpt: "Metabolische Zusammenhänge zwischen Ernährung, Neuroinflammation und kognitivem Abbau." },
  { slug: "adipositas", title: "Adipositas", excerpt: "Jenseits der Kalorien: Wie hochverarbeitete Lebensmittel die Appetitregulation umprogrammieren." },
  { slug: "chronische-entzuendungen", title: "Chronische Entzündungen", excerpt: "Der stille Treiber hinter den meisten modernen degenerativen Erkrankungen." },
  { slug: "verdauungsstoerungen", title: "Verdauungsstörungen", excerpt: "Von Reizdarm bis Morbus Crohn: Der Darm als Ausgangspunkt ernährungsbedingter Schäden." },
];

export default function Diseases() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Startseite / Krankheiten</p>
          <h1 className="text-3xl font-bold text-wire-heading">
            Zivilisationskrankheiten & Gesundheitstipps
          </h1>
          <p className="mt-2 text-wire-dark">
            Verstehen, wie moderne Ernährung mit chronischen Krankheiten zusammenhängt.
          </p>
        </div>
      </section>

      {/* CARD GRID */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-2 gap-6">
            {diseases.map((d) => (
              <Link
                key={d.slug}
                href={`/diseases/${d.slug}`}
                className="block border-2 border-dashed border-wire-border p-6 hover:border-wire-dark transition-colors"
              >
                <div className="mb-3 h-32 bg-wire-placeholder rounded flex items-center justify-center text-wire-dark">
                  [Bild]
                </div>
                <h3 className="text-lg font-bold text-wire-heading mb-2">
                  {d.title}
                </h3>
                <p className="text-sm">{d.excerpt}</p>
                <p className="mt-3 text-sm text-wire-dark">Mehr erfahren →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
