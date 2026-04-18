import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-20">
        <Link href="#home" className="text-base font-semibold tracking-tight text-white">
          Marvin Amofa Marfo
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#home" className="relative text-sm text-slate-300 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Home
          </Link>
          <Link href="#about" className="relative text-sm text-slate-300 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            About
          </Link>
          <Link href="#projects" className="relative text-sm text-slate-300 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Projects
          </Link>
          <Link href="#contact" className="relative text-sm text-slate-300 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </Link>
        </nav>
        <Link
          href="#contact"
          className="group relative inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-accent/50 active:scale-95"
        >
          <span className="relative">Hire me</span>
        </Link>
      </div>
    </header>
  );
}
