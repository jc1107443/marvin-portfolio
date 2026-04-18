'use client';

import Link from 'next/link';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export default function HeroSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className={`rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <p className={`inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-accent ${isInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
                Full Stack + DevOps Engineer
              </p>
              <h1 className={`text-4xl font-semibold tracking-tight text-white sm:text-5xl ${isInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
                Full-stack applications backed by robust cloud infrastructure and automation.
              </h1>
              <p className={`max-w-xl text-base leading-8 text-slate-300 sm:text-lg ${isInView ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
                I build end-to-end platforms combining frontend excellence, scalable APIs, and enterprise-grade infrastructure. From React and Next.js to Kubernetes and Terraform—I deliver complete, production-ready systems.
              </p>
              <div className={`flex flex-col gap-4 sm:flex-row ${isInView ? 'animate-fade-in-up stagger-4' : 'opacity-0'}`}>
                <Link href="#contact" className="group relative inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-sky-400 hover:shadow-xl hover:shadow-accent/50 active:scale-95 overflow-hidden">
                  <span className="relative z-10">Let's talk</span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
                <Link href="#projects" className="group relative inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 active:scale-95">
                  <span className="relative">View projects</span>
                </Link>
              </div>
            </div>
            <div className={`rounded-[2rem] border border-slate-700/70 bg-slate-950/95 p-8 shadow-soft ${isInView ? 'animate-fade-in-right stagger-3' : 'opacity-0'}`}>
              <div className="space-y-6 text-slate-200">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Core strengths</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent border border-accent/20">Full-stack web with React, Next.js, Node.js</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent border border-accent/20">AI/ML integration & automation</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent border border-accent/20">CI/CD automation & Infrastructure as Code</span>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <p className="text-sm text-slate-400">Years experience</p>
                    <p className="mt-3 text-2xl font-semibold text-white">10+ years</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <p className="text-sm text-slate-400">Specialties</p>
                    <p className="mt-3 text-2xl font-semibold text-white">Full Stack + Ops</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
