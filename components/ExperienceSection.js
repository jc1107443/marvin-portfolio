'use client';

import { useInViewAnimation } from '@/hooks/useInViewAnimation';

const skills = [
  'Frontend: React, Next.js, TypeScript, Tailwind CSS',
  'Backend: Node.js, Python, Go, Express, APIs',
  'Databases: PostgreSQL, MongoDB, RDS, DynamoDB',
  'Cloud & Infrastructure: AWS, Azure, GCP, Kubernetes, Terraform',
  'DevOps: CI/CD, Docker, Kubernetes, ArgoCD, GitlabCI',
  'Observability: Prometheus, Grafana, CloudWatch, ELK, NewRelic',
];

export default function ExperienceSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section className="bg-slate-950/95 px-6 py-20 sm:px-10 lg:px-20" ref={ref}>
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className={isInView ? 'animate-fade-in-left stagger-1' : 'opacity-0'}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Core skills</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Full-stack and infrastructure expertise across the entire stack.</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              I deliver end-to-end solutions: polished frontend interfaces, scalable backend systems, robust infrastructure, and proven DevOps practices. Every layer is designed for reliability, performance, and operational excellence.
            </p>
          </div>
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`group relative rounded-3xl border border-slate-700/70 bg-slate-950/90 p-6 transition-all duration-300 hover:border-accent/60 hover:bg-slate-950/70 hover:-translate-x-1 hover:shadow-lg hover:shadow-accent/10 cursor-pointer overflow-hidden ${
                  isInView ? `animate-fade-in-right stagger-${Math.min(index + 2, 8)}` : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="relative z-10 text-sm text-slate-300 transition-colors duration-300 group-hover:text-slate-100 font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
