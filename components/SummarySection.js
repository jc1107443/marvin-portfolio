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
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Senior Software Engineer with expertise in scalable web applications and cloud infrastructure.</h2>
          </div>
          <div className="max-w-4xl">
            <div className={`space-y-6 text-slate-300 ${isInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
              <p>
                I'm a Senior Software Engineer with 9+ years of experience designing, developing, and deploying scalable web applications, cloud-native platforms, and enterprise infrastructure. My expertise spans modern full-stack development using React, Next.js, Node.js, and Python, combined with deep experience in AWS/Azure cloud environments and CI/CD automation.
              </p>
              <p>
                I have a proven track record of delivering end-to-end solutions from responsive frontend interfaces to secure backend APIs and highly available cloud infrastructure. My skills include system design, performance optimization, and building reliable production systems using modern DevOps practices. I'm passionate about creating scalable, user-focused applications with clean architecture, strong API design, and efficient deployment pipelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
