import ProjectCard from '../../components/ProjectCard';

const projectList = [
  {
    title: 'Enterprise Fundraising Platform',
    description:
      'Led full-stack development for enterprise-scale fundraising applications, implementing backend services, cloud infrastructure, and CI/CD pipelines.',
    tags: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
  },
  {
    title: 'Healthcare Management System',
    description:
      'Developed DevOps infrastructure for healthcare applications, including CI/CD pipelines, cloud deployments, and monitoring systems.',
    tags: ['Docker', 'Kubernetes', 'Azure', 'CI/CD'],
  },
  {
    title: 'Global Business Applications',
    description:
      'Built full-stack web applications with React, Angular, and Node.js, focusing on scalable architectures and performance optimization.',
    tags: ['React', 'Angular', 'Node.js', 'MongoDB'],
  },
];

export default function ProjectsPage() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Selected work</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Professional software development projects and enterprise solutions.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore examples of full-stack applications, cloud infrastructure projects, and enterprise systems I've developed across various industries and technologies.
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
