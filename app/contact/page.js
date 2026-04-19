export default function ContactPage() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let's discuss your software development project.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Whether you need full-stack development, cloud infrastructure, or DevOps automation, I'm ready to help bring your technical vision to life. Share your requirements and let's build something exceptional.
          </p>
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-10 shadow-soft">
            <div className="space-y-6 text-slate-200">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Email</p>
                <p className="mt-2 text-sm">marvinamofa@hotmail.com</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Phone</p>
                <p className="mt-2 text-sm">+44 7466 983561</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Location</p>
                <p className="mt-2 text-sm">Manchester, UK</p>
              </div>
            </div>
          </div>

          <form className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-10 shadow-soft">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <div>
                <label htmlFor="project" className="text-sm font-semibold text-slate-200">
                  Project brief
                </label>
                <textarea
                  id="project"
                  rows="5"
                  placeholder="Describe your project requirements"
                  className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Send inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
