export default function ServicesPage() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Services</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">High-end web services for modern freelancers and businesses.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I offer complete website design and development services for clients who need performance, strong branding, and a professional digital presence.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Custom websites</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Tailored Next.js websites for landing pages, agency sites, portfolios, and business platforms.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Visual branding</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Modern visual systems, typographic direction, and polished UI patterns that align with your brand.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Performance & SEO</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Optimized page structure, metadata, and fast loading with Next.js performance features.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white">Engagement-driven development</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                I build pages with clear user journeys, strong calls to action, and a polished aesthetic so your site feels premium from the first interaction.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <h3 className="font-semibold text-white">Next.js App Router</h3>
                <p className="mt-3 text-slate-300">Automatic route splitting, server-side rendering, and great developer tooling.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <h3 className="font-semibold text-white">Tailwind CSS</h3>
                <p className="mt-3 text-slate-300">Clean utility styling for responsive layouts and fast visual iteration.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <h3 className="font-semibold text-white">Conversion-focused design</h3>
                <p className="mt-3 text-slate-300">Landing pages and service pages built to generate inquiries and close clients.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
