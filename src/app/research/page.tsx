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
          <p className="text-sm text-wire-dark mb-1">Home / Research & Perspectives</p>
          <h1 className="text-3xl font-bold text-wire-heading">
            Research & Perspectives
          </h1>
        </div>
      </section>

      {/* RICH TEXT */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-4">
            Modern Research
          </h2>
          <p className="mb-4">
            The last two decades have produced a wealth of research connecting
            ultra-processed food consumption with chronic disease. Studies on the
            human microbiome, metabolic pathways, and epigenetic changes are
            painting an increasingly clear picture.
          </p>

          <h3 className="text-lg font-bold text-wire-heading mt-8 mb-3">Ultra-Processed Foods</h3>
          <p className="mb-4">
            Research now shows that ultra-processed foods make up 50–60% of
            caloric intake in Western countries. The NOVA classification system
            has provided a framework for understanding these products and their
            health impact.
          </p>

          <h3 className="text-lg font-bold text-wire-heading mt-8 mb-3">The Microbiome</h3>
          <p className="mb-4">
            The gut microbiome is emerging as a central mediator between diet and
            disease. Modern diets have been shown to reduce microbial diversity,
            with cascading effects on immunity, metabolism, and even mental health.
          </p>

          <h3 className="text-lg font-bold text-wire-heading mt-8 mb-3">Metabolic Consequences</h3>
          <p className="mb-4">
            Insulin resistance, chronic inflammation, and hormonal disruption are
            now understood as interconnected metabolic responses to dietary change
            rather than isolated conditions.
          </p>
        </div>
      </section>

      {/* LITERATURE LIST */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Bibliography / Sources
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
            Download the Full Whitepaper
          </h2>
          <p className="mb-6 text-wire-dark">
            A comprehensive synthesis of 40 years of clinical observation and
            modern nutritional science.
          </p>
          <button className="border-2 border-dashed border-wire-heading bg-white px-6 py-3 font-bold text-wire-heading">
            Download Whitepaper (PDF)
          </button>
        </div>
      </section>
    </div>
  );
}
