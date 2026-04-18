'use client';
import ProjectCard from './ProjectCard';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

const items = [
  {
    title: 'Enterprise platform infrastructure migration',
    description:
      'Led Kubernetes cluster setup and Terraform IaC implementation for multi-cloud deployment. Built monitoring with Prometheus/Grafana, CI/CD pipelines with GitlabCI, reducing deployment time by 60% and infrastructure costs by 35%.',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD'],
  },
  {
    title: 'Full-stack SaaS application',
    description:
      'Developed end-to-end platform: React frontend with TypeScript, Node.js backend with PostgreSQL, deployed on AWS with automated scaling. Achieved 99.9% uptime and sub-100ms response times.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Cloud cost optimization & security hardening',
    description:
      'Conducted infrastructure audit, implemented IAM security best practices, configured GuardDuty and Macie for threat detection. Reduced cloud spend by 40% through resource optimization and reserved instances strategy.',
    tags: ['AWS Security', 'Cost Optimization', 'Infrastructure'],
  },
];

export default function ProjectsSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="projects" className="px-6 py-20 sm:px-10 lg:px-20" ref={ref}>
      <div className="mx-auto max-w-6xl space-y-10">
        <div className={`rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12 ${isInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Full-stack systems and infrastructure projects delivering measurable impact.</h2>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            From complete application platforms to cloud infrastructure modernization, these projects demonstrate full-stack delivery: user-facing excellence, backend reliability, and operational resilience.
          </p>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          {items.map((item, index) => (
            <ProjectCard
              key={item.title}
              title={item.title}
              description={item.description}
              tags={item.tags}
              isVisible={isInView}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
