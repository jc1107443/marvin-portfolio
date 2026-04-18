import ProjectCard from '../../components/ProjectCard';

const projectList = [
  {
    title: 'Modern SaaS landing page',
    description:
      'Delivered a high-conversion landing page with polished visuals, responsive interactions, and fast load times for a B2B SaaS launch.',
    tags: ['Next.js', 'Tailwind', 'UX'],
  },
  {
    title: 'Freelancer portfolio refresh',
    description:
      'Built a premium freelancer portfolio with streamlined messaging, case studies, and a strong visual identity for higher inquiry rates.',
    tags: ['Brand', 'Performance', 'Design'],
  },
  {
    title: 'Conversion-first product site',
    description:
      'Created an engaging product website focused on clear value positioning, onboarding flow, and strong mobile experience.',
    tags: ['SEO', 'Landing page', 'Speed'],
  },
];

export default function ProjectsPage() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Selected work</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Portfolio projects built for real client impact.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore curated examples of websites and landing pages that blend visual polish with fast performance and strong conversion structure.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {projectList.map((project) => (
            <ProjectCard key={project.title} title={project.title} description={project.description} tags={project.tags} />
          ))}
        </section>
      </div>
    </main>
  );
}
