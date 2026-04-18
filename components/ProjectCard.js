export default function ProjectCard({ title, description, tags, isVisible = false, delay = 0 }) {
  const staggerClass = `stagger-${Math.min(delay + 2, 8)}`;

  return (
    <article className={`group relative rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10 active:translate-y-0 active:scale-95 active:shadow-md cursor-pointer overflow-hidden ${
      isVisible ? `animate-fade-in-up ${staggerClass}` : 'opacity-0'
    }`}>
      <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 group-active:opacity-50 transition-all duration-300"></div>
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white transition-all duration-300 group-hover:text-accent group-active:scale-95 origin-left">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300 transition-all duration-300 group-hover:text-slate-200 group-active:text-slate-300">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 transition-all duration-300 group-hover:bg-accent/20 group-hover:text-accent group-active:bg-accent/40 group-active:text-white transform origin-center">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
