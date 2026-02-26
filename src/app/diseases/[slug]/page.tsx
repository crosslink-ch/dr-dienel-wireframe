const diseases: Record<string, { title: string; content: string }> = {
  "metabolic-syndrome": { title: "Metabolic Syndrome", content: "A cluster of conditions — increased blood pressure, high blood sugar, excess body fat around the waist, and abnormal cholesterol levels — that occur together, increasing the risk of heart disease, stroke, and type 2 diabetes." },
  "type-2-diabetes": { title: "Type 2 Diabetes", content: "Once considered a disease of old age, type 2 diabetes now affects increasingly younger populations. The connection between ultra-processed food consumption and insulin resistance is well-documented." },
  "cardiovascular-disease": { title: "Cardiovascular Disease", content: "Heart disease remains the leading cause of death globally. Research increasingly points to dietary factors — beyond simple cholesterol — as primary drivers." },
  "autoimmune-disorders": { title: "Autoimmune Disorders", content: "The dramatic rise in autoimmune conditions correlates with changes in gut microbiome composition driven by modern dietary patterns." },
  "cognitive-decline": { title: "Cognitive Decline & Dementia", content: "Alzheimer's disease has been called 'Type 3 Diabetes' by researchers who have identified metabolic dysfunction as a key driver of cognitive deterioration." },
  "obesity": { title: "Obesity", content: "Obesity is not simply a matter of willpower. Ultra-processed foods are engineered to override natural appetite regulation, creating a metabolic trap." },
  "chronic-inflammation": { title: "Chronic Inflammation", content: "Low-grade chronic inflammation is the common thread connecting most modern degenerative diseases. Diet is its primary modulator." },
  "digestive-disorders": { title: "Digestive Disorders", content: "The gut is where dietary damage begins. Conditions like IBS, Crohn's, and leaky gut syndrome have exploded in prevalence alongside dietary industrialization." },
};

export default async function DiseaseDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const disease = diseases[slug] || {
    title: "Disease",
    content: "Content for this condition.",
  };

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">
            Home / Diseases / {disease.title}
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
            [Header Image / Illustration]
          </div>

          <p className="mb-6 text-lg">{disease.content}</p>

          <h2 className="text-xl font-bold text-wire-heading mb-4 mt-8">
            Causes & Dietary Connection
          </h2>
          <div className="space-y-3 mb-8">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-3/4 bg-wire-placeholder rounded" />
          </div>

          <h2 className="text-xl font-bold text-wire-heading mb-4">
            Health Tips & Prevention
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
            Further Reading
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
