import { useEffect, useState } from "react";
import { clinic } from "../data/clinic.js";
import Logo from "./Logo.jsx";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-brand-navy/10 bg-brand-white/85 shadow-card backdrop-blur-xl"
          : "border-b border-transparent bg-brand-white/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:gap-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group flex min-w-0 max-w-[min(100%,16rem)] items-center gap-2 rounded-2xl outline-none ring-brand-green/30 focus-visible:ring-2 sm:max-w-none"
        >
          <Logo variant="header" />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-2.5 py-2 text-[13px] font-medium text-brand-navy/75 transition hover:bg-brand-mist hover:text-brand-navy xl:px-3 xl:text-sm"
            >
              {item.label}
            </a>
          ))}
          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-xl border border-brand-navy/15 bg-brand-white px-3 py-2 text-[13px] font-semibold text-brand-navy transition hover:border-brand-green/40 hover:bg-brand-mist xl:text-sm"
          >
            WhatsApp
          </a>
          <a
            href="#contato"
            className="ml-1 inline-flex items-center rounded-xl bg-brand-green px-3.5 py-2 text-[13px] font-semibold text-brand-white shadow-sm transition hover:bg-brand-green/90 xl:text-sm"
          >
            Agendar consulta
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl border border-brand-navy/12 px-3 py-2 text-xs font-semibold text-brand-navy sm:inline-flex"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-navy/10 bg-brand-white text-brand-navy shadow-sm lg:hidden"
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
      </div>

      <div
        className={`fixed inset-0 top-16 z-[45] bg-brand-navy/45 transition-opacity sm:top-[4.25rem] lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed inset-x-0 top-16 z-[46] max-h-[calc(100dvh-4rem)] border-b border-brand-navy/10 bg-brand-white shadow-card transition-[transform,opacity] duration-200 ease-out sm:top-[4.25rem] sm:max-h-[calc(100dvh-4.25rem)] lg:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="mx-auto flex max-h-full max-w-6xl flex-col gap-0.5 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-base font-medium text-brand-navy/85 hover:bg-brand-mist"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-4 py-3 text-base font-medium text-brand-navy/85 hover:bg-brand-mist"
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </a>
          <a
            href={clinic.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-4 py-3 text-base font-medium text-brand-navy/85 hover:bg-brand-mist"
            onClick={() => setOpen(false)}
          >
            Instagram @{clinic.instagramHandle}
          </a>
          <a
            href="#contato"
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand-green px-4 py-3 text-base font-semibold text-brand-white"
            onClick={() => setOpen(false)}
          >
            Agendar consulta
          </a>
        </nav>
      </div>
    </header>
  );
}
