import { useEffect, useState } from "react";
import { clinic } from "../data/clinic.js";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#especialidades" },
  { label: "Por que NEXUS", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group flex min-w-0 items-center gap-2.5 rounded-xl outline-none ring-nexus-500/40 focus-visible:ring-2"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-nexus-800 to-nexus-900 text-sm font-bold text-white shadow-lg shadow-nexus-900/25 ring-1 ring-white/10">
            N
          </span>
          <span className="min-w-0 font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
            <span className="hidden sm:inline">{clinic.name}</span>
            <span className="sm:hidden">NEXUS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-nexus-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href={clinic.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-nexus-900"
          >
            @{clinic.instagramHandle}
          </a>
          <a
            href={clinic.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center rounded-xl bg-nexus-900 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-nexus-900/20 transition hover:bg-nexus-800"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-4 rounded-full bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-4 rounded-full bg-current transition ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 top-16 z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
        onClick={() => setOpen(false)}
      />

      <div
        className={`border-b border-slate-200 bg-white shadow-lg transition-[transform,opacity] duration-200 ease-out md:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={clinic.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            Instagram @{clinic.instagramHandle}
          </a>
          <a
            href={clinic.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-nexus-900 px-4 py-3 text-base font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Agendar pelo Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
