export default function SectionSkeleton() {
  return (
    <div className="rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-12 shadow-soft">
      <div className="space-y-4 animate-pulse">
        <div className="h-8 w-3/5 rounded-full bg-slate-700" />
        <div className="h-5 w-4/5 rounded-full bg-slate-700" />
        <div className="h-5 w-5/6 rounded-full bg-slate-700" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="h-28 rounded-[1.5rem] bg-slate-800" />
          <div className="h-28 rounded-[1.5rem] bg-slate-800" />
        </div>
      </div>
    </div>
  );
}
