const topics = [
  { title: "The Systemic Impact of Modern Nutrition", description: "A comprehensive overview of how dietary industrialization drives chronic disease.", tag: "Signature" },
  { title: "Ultra-Processed Food & Metabolic Syndrome", description: "Understanding the mechanisms behind the global metabolic health crisis.", tag: "Medical" },
  { title: "The Microbiome Revolution", description: "What gut science tells us about the future of preventive medicine.", tag: "Research" },
  { title: "Nutrition in Geriatric Care", description: "Practical approaches to dietary intervention for aging populations.", tag: "Clinical" },
];

const events = [
  { date: "March 15, 2026", title: "Medical Conference Munich", location: "Munich, Germany", status: "Confirmed" },
  { date: "April 8, 2026", title: "Public Health Symposium", location: "Zurich, Switzerland", status: "Confirmed" },
  { date: "May 22, 2026", title: "Nutrition Science Congress", location: "Vienna, Austria", status: "Pending" },
  { date: "June 10, 2026", title: "Geriatric Medicine Forum", location: "Berlin, Germany", status: "Pending" },
];

export default function Lectures() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Home / Lectures</p>
          <h1 className="text-3xl font-bold text-wire-heading">
            Lectures & Professional Audiences
          </h1>
          <p className="mt-2 text-wire-dark">
            Dr. Dienel is available for conferences, symposia, and professional events.
          </p>
        </div>
      </section>

      {/* LECTURE TOPICS */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Lecture Topics
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {topics.map((t, i) => (
              <div
                key={i}
                className="border-2 border-dashed border-wire-border p-6"
              >
                <span className="inline-block border border-wire-accent px-2 py-0.5 text-xs text-wire-dark mb-3">
                  {t.tag}
                </span>
                <h3 className="text-lg font-bold text-wire-heading mb-2">
                  {t.title}
                </h3>
                <p className="text-sm">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCES / TESTIMONIALS */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            References
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border-2 border-dashed border-wire-border p-6">
                <p className="italic text-sm mb-4">
                  &quot;Placeholder testimonial text from a conference organizer or
                  attendee praising Dr. Dienel&apos;s presentation.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-wire-placeholder border border-wire-border" />
                  <div>
                    <p className="text-sm font-bold text-wire-heading">Name Surname</p>
                    <p className="text-xs text-wire-dark">Organization</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT LIST */}
      <section className="border-b-2 border-dashed border-wire-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-6">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            {events.map((e, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-2 border-dashed border-wire-border p-4"
              >
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm font-bold text-wire-heading">{e.date}</p>
                  </div>
                  <div>
                    <p className="font-bold text-wire-heading">{e.title}</p>
                    <p className="text-sm text-wire-dark">{e.location}</p>
                  </div>
                </div>
                <span className={`border px-3 py-1 text-xs ${e.status === "Confirmed" ? "border-wire-heading text-wire-heading" : "border-wire-accent text-wire-dark"}`}>
                  {e.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-wire-heading mb-2">
            Request a Lecture
          </h2>
          <p className="text-wire-dark mb-8">
            Interested in having Dr. Dienel speak at your event? Fill out the form below.
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-wire-heading mb-1">Name</label>
                <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-wire-heading mb-1">Organization</label>
                <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-wire-heading mb-1">Email</label>
              <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-wire-heading mb-1">Event Type & Date</label>
              <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-wire-heading mb-1">Message</label>
              <div className="h-32 w-full border-2 border-dashed border-wire-border bg-white" />
            </div>
            <button className="border-2 border-dashed border-wire-heading px-6 py-3 font-bold text-wire-heading">
              Submit Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
