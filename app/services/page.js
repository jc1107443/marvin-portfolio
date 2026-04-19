export default function ServicesPage() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Services</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Professional software development services for enterprise and business needs.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I offer comprehensive software engineering services, from full-stack web development to cloud infrastructure and DevOps automation. My solutions are built for scalability, performance, and long-term maintainability.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Full-stack development</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Complete web applications using React, Next.js, Node.js, and Python with scalable backend APIs and optimized databases.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Cloud & DevOps</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Cloud-native deployments on AWS/Azure with CI/CD pipelines, containerization, and infrastructure automation.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">AI integration</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Integration of AI/ML capabilities using OpenAI API, machine learning models, and automated workflows.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white">Quality-driven development with enterprise standards</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                I build applications with strong architectural foundations, comprehensive testing, and production-ready deployment practices. Every solution is designed for maintainability, scalability, and operational excellence.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <h3 className="font-semibold text-white">React & Next.js</h3>
                <p className="mt-3 text-slate-300">Modern frontend frameworks for scalable, performant web applications.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <h3 className="font-semibold text-white">Node.js & Python</h3>
                <p className="mt-3 text-slate-300">Backend technologies for robust APIs and server-side logic.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <h3 className="font-semibold text-white">AWS & Azure</h3>
                <p className="mt-3 text-slate-300">Cloud platforms for scalable, secure, and cost-effective infrastructure.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
