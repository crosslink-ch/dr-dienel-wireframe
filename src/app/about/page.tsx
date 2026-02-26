export default function About() {
  const timeline = [
    { year: "1984", event: "Completed medical degree" },
    { year: "1985–1995", event: "General practice and internal medicine" },
    { year: "1996–2010", event: "Specialized in geriatric medicine" },
    { year: "2010–present", event: "Senior attending physician in geriatrics" },
    { year: "2026", event: "Retirement — full-time dedication to nutrition education" },
  ];

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Home / About</p>
          <h1 className="text-3xl font-bold text-wire-heading">
            About Dr. Dienel
          </h1>
        </div>
      </section>

      {/* PROFILE / BIO */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-3 gap-12">
            <div className="col-span-1">
              <div className="aspect-[3/4] bg-wire-placeholder border-2 border-dashed border-wire-border rounded flex items-center justify-center text-wire-dark">
                [Professional Photo]
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-dashed border-wire-border inline-block" />
                  <span>Senior Attending Physician</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-dashed border-wire-border inline-block" />
                  <span>Geriatric Medicine</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-dashed border-wire-border inline-block" />
                  <span>40+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-2xl font-bold text-wire-heading mb-4">
                A Lifetime in Medicine. A Mission for Change.
              </h2>
              <p className="mb-4">
                Dr. Dienel has spent over four decades observing the devastating
                effects of modern nutrition on human health. As a senior
                attending physician in geriatrics, he has witnessed firsthand how
                dietary changes have accelerated degenerative disease across
                generations.
              </p>
              <p className="mb-4">
                His approach combines clinical observation with modern
                nutritional science to challenge the status quo of preventive
                medicine.
              </p>

              <h3 className="text-lg font-bold text-wire-heading mt-8 mb-3">
                Motivation
              </h3>
              <p className="mb-4">
                After decades of treating the consequences of poor nutrition,
                Dr. Dienel is now focused on addressing the root cause. His
                mission is to educate both the medical community and the general
                public about the systemic impact of dietary change.
              </p>

              <h3 className="text-lg font-bold text-wire-heading mt-8 mb-3">
                Areas of Expertise
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-wire-accent rounded-full" />
                  Geriatric medicine and age-related disease
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-wire-accent rounded-full" />
                  Nutritional impact on metabolic health
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-wire-accent rounded-full" />
                  Ultra-processed food and chronic disease
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-wire-accent rounded-full" />
                  Preventive medicine and public health education
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
            Career Path
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
