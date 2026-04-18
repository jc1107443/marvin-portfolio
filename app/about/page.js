export default function AboutPage() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">About me</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Strategic freelance web design and Next.js development for growing businesses.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I help companies and freelancers present their services with premium digital experiences that feel modern, polished, and easy to manage. My projects combine strong visual design, fast performance, and a clear path to conversion.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">What I build</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Landing pages, marketing websites, SaaS product pages, and portfolio sites that look premium and scale with your business.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">How I work</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              I focus on clarity, speed, and collaboration. Every site is built in Next.js App Router so pages render fast and content updates are easy.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Why choose me</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              I deliver projects that look refined, perform reliably, and leave clients with websites they’re proud to share.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-white">Process built for fast freelance delivery</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                I keep the process simple and transparent so you can move quickly from idea to launch. Each phase is structured around your goals, reviews, and polished execution.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Discovery</p>
                <p className="mt-3 text-slate-300">Clarify project goals, audience, and conversion outcomes.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Design</p>
                <p className="mt-3 text-slate-300">Create polished layouts, copy structure, and visual brand direction.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Launch</p>
                <p className="mt-3 text-slate-300">Ship a fast, responsive website built on Next.js and ready for growth.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
