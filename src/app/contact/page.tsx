export default function Contact() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b-2 border-dashed border-wire-border bg-wire-placeholder">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm text-wire-dark mb-1">Home / Contact</p>
          <h1 className="text-3xl font-bold text-wire-heading">Contact</h1>
          <p className="mt-2 text-wire-dark">
            Get in touch with Dr. Dienel for inquiries, collaborations, or media requests.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-3 gap-12">
          {/* CONTACT FORM */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-wire-heading mb-6">
              Send a Message
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-wire-heading mb-1">
                    First Name
                  </label>
                  <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-wire-heading mb-1">
                    Last Name
                  </label>
                  <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-wire-heading mb-1">
                  Email
                </label>
                <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-wire-heading mb-1">
                  Subject
                </label>
                <div className="h-10 w-full border-2 border-dashed border-wire-border bg-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-wire-heading mb-1">
                  Message
                </label>
                <div className="h-40 w-full border-2 border-dashed border-wire-border bg-white" />
              </div>
              <button className="border-2 border-dashed border-wire-heading px-6 py-3 font-bold text-wire-heading">
                Send Message
              </button>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-wire-heading mb-6">
              Contact Info
            </h2>
            <div className="space-y-6">
              <div className="border-2 border-dashed border-wire-border p-4">
                <p className="font-bold text-wire-heading text-sm mb-1">Email</p>
                <p className="text-sm">kontakt@dr-dienel.de</p>
              </div>
              <div className="border-2 border-dashed border-wire-border p-4">
                <p className="font-bold text-wire-heading text-sm mb-1">Location</p>
                <p className="text-sm">Germany</p>
              </div>
              <div className="border-2 border-dashed border-wire-border p-4">
                <p className="font-bold text-wire-heading text-sm mb-1">LinkedIn</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-8 w-8 border-2 border-dashed border-wire-border flex items-center justify-center text-xs text-wire-dark">
                    in
                  </div>
                  <span className="text-sm">Dr. Dienel on LinkedIn</span>
                </div>
              </div>
              <div className="border-2 border-dashed border-wire-border p-4">
                <p className="font-bold text-wire-heading text-sm mb-1">For Lectures</p>
                <p className="text-sm">
                  To book Dr. Dienel for a speaking engagement, please use the{" "}
                  <span className="text-wire-heading underline">lecture inquiry form</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
