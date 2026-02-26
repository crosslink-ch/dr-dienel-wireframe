import Link from "next/link";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div>
      {/* BLOG POST LAYOUT */}
      <article>
        {/* Header */}
        <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
          <div className="mx-auto max-w-3xl px-6 py-12">
            <p className="text-sm text-wire-dark mb-1">
              <Link href="/blog" className="hover:text-wire-heading">
                Blog
              </Link>{" "}
              / Article
            </p>
            <h1 className="text-3xl font-bold text-wire-heading mt-2">
              {title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-wire-dark">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-wire-accent" />
                <span>Dr. Dienel</span>
              </div>
              <span>|</span>
              <span>February 20, 2026</span>
              <span>|</span>
              <span>5 min read</span>
            </div>
          </div>
        </section>

        {/* Featured image */}
        <div className="mx-auto max-w-3xl px-6 pt-8">
          <div className="h-64 bg-wire-placeholder border-2 border-dashed border-wire-border rounded flex items-center justify-center text-wire-dark">
            [Featured Image]
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-6 py-8">
          <p className="text-lg mb-6">
            This is the introduction paragraph of the blog post. It provides a
            compelling overview of the topic and draws the reader in with a clear
            thesis statement about the relationship between modern nutrition and
            health outcomes.
          </p>

          <h2 className="text-xl font-bold text-wire-heading mb-4 mt-8">
            Section Heading
          </h2>
          <div className="space-y-3 mb-6">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-4/6 bg-wire-placeholder rounded" />
          </div>

          <p className="mb-6">
            Additional body text that elaborates on the main points. This
            section includes specific examples, data references, and clinical
            observations that support the article&apos;s central argument.
          </p>

          <blockquote className="border-l-4 border-wire-accent pl-6 my-8 italic text-wire-dark">
            &quot;A compelling pull-quote from the article that captures a key
            insight or memorable statement from Dr. Dienel.&quot;
          </blockquote>

          <h2 className="text-xl font-bold text-wire-heading mb-4 mt-8">
            Another Section
          </h2>
          <div className="space-y-3 mb-6">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-3/4 bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
          </div>

          <div className="my-8 border-2 border-dashed border-wire-border bg-wire-placeholder p-8 text-center text-wire-dark h-48 flex items-center justify-center">
            [Inline Image / Chart]
          </div>

          <div className="space-y-3 mb-6">
            <div className="h-4 w-full bg-wire-placeholder rounded" />
            <div className="h-4 w-5/6 bg-wire-placeholder rounded" />
            <div className="h-4 w-2/3 bg-wire-placeholder rounded" />
          </div>

          {/* Share / Tags */}
          <div className="mt-12 border-t-2 border-dashed border-wire-border pt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="border border-wire-accent px-3 py-1 text-xs text-wire-dark">
                Nutrition
              </span>
              <span className="border border-wire-accent px-3 py-1 text-xs text-wire-dark">
                Research
              </span>
              <span className="border border-wire-accent px-3 py-1 text-xs text-wire-dark">
                Prevention
              </span>
            </div>
            <div className="flex gap-3 text-sm text-wire-dark">
              [Share icons]
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
