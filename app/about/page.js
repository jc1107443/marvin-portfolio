export default function AboutPage() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">About me</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Senior Software Engineer specializing in scalable web applications and cloud infrastructure.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            With 9+ years of experience, I design, develop, and deploy enterprise-scale applications using modern full-stack technologies and cloud-native practices. My expertise spans from responsive frontend interfaces to secure backend APIs and highly available infrastructure.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">What I build</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Scalable web applications, cloud-native platforms, and enterprise infrastructure solutions that perform reliably at scale.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">How I work</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              I focus on clean architecture, strong API design, and efficient deployment pipelines. Every project follows best practices for maintainability and scalability.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Why choose me</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              I deliver production-ready systems with proven expertise in full-stack development, cloud platforms, and DevOps automation.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white">Education & Certifications</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Formal education combined with continuous learning through certifications and professional development.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <h3 className="font-semibold text-white">Bachelor's in Computer Science</h3>
                <p className="mt-3 text-slate-300">Kwame Nkrumah' University of Science and Technology, Kumasi - Sep 2012</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <h3 className="font-semibold text-white">AWS Certified Solutions Architect</h3>
                <p className="mt-3 text-slate-300">Associate level certification for cloud architecture expertise</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <h3 className="font-semibold text-white">Python Test Badge</h3>
                <p className="mt-3 text-slate-300">Top 10% performance in Python proficiency assessment</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
