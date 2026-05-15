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
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(800);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    const onResize = () => {
      setVh(window.innerHeight);
      onScroll();
    };
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** Ainda sobre o hero fullscreen (conteúdo claro sobre imagem). */
  const onHero = scrollY < vh * 0.88;
  /** Barra elevada: blur / vidro após pequeno scroll. */
  const elevated = scrollY > 12;
  /** Logo + links: claro sobre o carrossel, escuro após sair do hero ou com barra sólida. */
  const lightNav = !elevated || (elevated && onHero);

  const shell =
    elevated && onHero
      ? "border-b border-white/15 bg-brand-navy/25 shadow-[0_8px_32px_rgb(0_0_0_0.12)] backdrop-blur-xl"
      : elevated && !onHero
        ? "border-b border-brand-navy/10 bg-brand-white/88 shadow-card backdrop-blur-xl"
        : "border-b border-transparent bg-transparent";

  const linkBase =
    "rounded-xl px-2.5 py-1.5 text-[13px] font-medium transition xl:px-3 xl:text-sm";
  const linkClass = lightNav
    ? `${linkBase} text-white/92 hover:bg-white/12 hover:text-white`
    : `${linkBase} text-brand-navy/80 hover:bg-brand-mist hover:text-brand-navy`;

  const menuBtn = lightNav
    ? "border-white/35 bg-white/12 text-white shadow-[inset_0_1px_0_rgb(255_255_255_0.12)] backdrop-blur-md hover:bg-white/18"
    : "border-brand-navy/12 bg-brand-white text-brand-navy shadow-sm hover:bg-brand-mist";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter,border-color] duration-500 ease-out ${shell}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 sm:gap-3 sm:px-5 lg:px-8">
        <a
          href="#inicio"
          className="group flex min-w-0 max-w-[min(100%,14rem)] items-center rounded-2xl outline-none ring-white/0 focus-visible:ring-2 focus-visible:ring-brand-green sm:max-w-none"
        >
          <Logo variant="header" tone={lightNav ? "light" : "dark"} />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center lg:hidden">
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${menuBtn}`}
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
        className={`fixed inset-0 top-16 z-[45] bg-brand-navy/50 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed inset-x-0 top-16 z-[46] max-h-[calc(100dvh-4rem)] border-b border-brand-navy/10 bg-brand-white shadow-card transition-[transform,opacity] duration-200 ease-out lg:hidden ${
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
            href={clinic.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-4 py-3 text-base font-medium text-brand-navy/85 hover:bg-brand-mist"
            onClick={() => setOpen(false)}
          >
            Instagram @{clinic.instagramHandle}
          </a>
        </nav>
      </div>
    </header>
  );
}
