'use client';

import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export default function ContactSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="contact" className="bg-slate-950/95 px-6 py-20 sm:px-10 lg:px-20" ref={ref}>
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className={isInView ? 'animate-fade-in-left stagger-1' : 'opacity-0'}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Ready to build enterprise-grade systems?</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Let's discuss your full-stack and infrastructure needs. I deliver complete solutions from frontend UI to cloud architecture, with proven DevOps practices and operational excellence.
            </p>
          </div>
          <div className={`group relative rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 text-slate-200 shadow-soft transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 hover:bg-slate-950/80 active:scale-95 active:shadow-md cursor-pointer overflow-hidden ${
            isInView ? 'animate-fade-in-right stagger-2' : 'opacity-0'
          }`}>
            <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 group-active:opacity-50 transition-all duration-300"></div>
            <div className="relative z-10 space-y-5">
              <div className="transition-all duration-300 group-hover:translate-x-1 group-active:translate-x-0">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 transition-all duration-300 group-hover:text-accent/70 group-active:text-accent">Email</p>
                <p className="mt-2 text-sm transition-all duration-300 group-hover:text-white group-active:text-accent cursor-pointer font-medium">zakobu4k@gmail.com</p>
              </div>
              <div className="transition-all duration-300 group-hover:translate-x-1 group-active:translate-x-0">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 transition-all duration-300 group-hover:text-accent/70 group-active:text-accent">Phone</p>
                <p className="mt-2 text-sm transition-all duration-300 group-hover:text-white group-active:text-accent cursor-pointer font-medium">+44 7466 983561</p>
              </div>
              <div className="transition-all duration-300 group-hover:translate-x-1 group-active:translate-x-0">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 transition-all duration-300 group-hover:text-accent/70 group-active:text-accent">Expertise</p>
                <p className="mt-2 text-sm transition-all duration-300 group-hover:text-slate-100 group-active:text-slate-200">Full-stack development, cloud infrastructure, Kubernetes, DevOps automation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
