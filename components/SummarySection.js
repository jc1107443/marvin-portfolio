'use client';

import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export default function SummarySection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="about" className="px-6 py-20 sm:px-10 lg:px-20" ref={ref}>
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
        <div className="space-y-8">
          <div className={isInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Summary</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Results-driven Full Stack Engineer with deep DevOps expertise.</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className={`space-y-6 text-slate-300 ${isInView ? 'animate-fade-in-left stagger-2' : 'opacity-0'}`}>
              <p>
                I'm a full-stack engineer with 8+ years building and scaling production systems. I combine frontend expertise in React and Next.js with backend development in Node.js, Python, and Go. More importantly, I understand infrastructure deeply—I design cloud architectures, orchestrate Kubernetes clusters, and automate deployments using Terraform and CI/CD pipelines.
              </p>
              <p>
                My work spans the entire development lifecycle: architecting scalable systems, writing performant code, managing cloud infrastructure, and ensuring operational excellence. I've led infrastructure modernization projects, mentored engineering teams, and consistently delivered systems that accelerate development workflows and maintain production stability.
              </p>
            </div>
            <div className={`space-y-4 ${isInView ? 'animate-fade-in-right stagger-3' : 'opacity-0'}`}>
              <div className="rounded-3xl border border-slate-700/70 bg-slate-950/90 p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
                <p className="text-sm font-medium text-slate-300">Full-Stack Development</p>
                <p className="mt-2 text-xs text-slate-400">React, Next.js, Node.js, Python, TypeScript</p>
              </div>
              <div className="rounded-3xl border border-slate-700/70 bg-slate-950/90 p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
                <p className="text-sm font-medium text-slate-300">Cloud Architecture</p>
                <p className="mt-2 text-xs text-slate-400">AWS, Azure, GCP, Multi-cloud strategies</p>
              </div>
              <div className="rounded-3xl border border-slate-700/70 bg-slate-950/90 p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
                <p className="text-sm font-medium text-slate-300">Infrastructure & DevOps</p>
                <p className="mt-2 text-xs text-slate-400">Kubernetes, Terraform, CI/CD, Automation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
