import Link from "next/link";

const diseases = [
  { slug: "metabolic-syndrome", title: "Metabolic Syndrome", excerpt: "The interplay of obesity, insulin resistance, and cardiovascular risk factors." },
  { slug: "type-2-diabetes", title: "Type 2 Diabetes", excerpt: "How dietary patterns drive insulin resistance and pancreatic dysfunction." },
  { slug: "cardiovascular-disease", title: "Cardiovascular Disease", excerpt: "The dietary roots of atherosclerosis, hypertension, and heart failure." },
  { slug: "autoimmune-disorders", title: "Autoimmune Disorders", excerpt: "Gut permeability, microbiome disruption, and immune dysregulation." },
  { slug: "cognitive-decline", title: "Cognitive Decline & Dementia", excerpt: "Metabolic links between diet, neuroinflammation, and cognitive deterioration." },
  { slug: "obesity", title: "Obesity", excerpt: "Beyond calories: how ultra-processed food rewires appetite regulation." },
  { slug: "chronic-inflammation", title: "Chronic Inflammation", excerpt: "The silent driver behind most modern degenerative conditions." },
  { slug: "digestive-disorders", title: "Digestive Disorders", excerpt: "From IBS to Crohn's: the gut as ground zero for dietary damage." },
];

export default function Diseases() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Home / Diseases</p>
          <h1 className="text-3xl font-bold text-wire-heading">
            Civilization Diseases & Health Tips
          </h1>
          <p className="mt-2 text-wire-dark">
            Understanding how modern nutrition connects to chronic disease.
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
                  [Image]
                </div>
                <h3 className="text-lg font-bold text-wire-heading mb-2">
                  {d.title}
                </h3>
                <p className="text-sm">{d.excerpt}</p>
                <p className="mt-3 text-sm text-wire-dark">Read more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
