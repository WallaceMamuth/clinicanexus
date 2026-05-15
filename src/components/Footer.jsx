import { clinic } from "../data/clinic.js";
import Logo from "./Logo.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="site-footer" className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-start gap-3 sm:items-center">
          <Logo variant="footer" />
          <div className="min-w-0">
            <p className="font-display text-base font-semibold text-ink">
              {clinic.name}
            </p>
            <p className="text-sm text-ink-muted">
              {clinic.tagline} · {year}
            </p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-500">
              {clinic.address}
              <br />
              <a className="text-nexus-800 hover:underline" href={clinic.phoneFixedHref}>
                {clinic.phoneFixed}
              </a>
              {" · "}
              <a
                className="text-nexus-800 hover:underline"
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {clinic.phoneWhatsapp}
              </a>
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
          <a className="hover:text-nexus-800" href="#inicio">
            Início
          </a>
          <a className="hover:text-nexus-800" href="#especialidades">
            Serviços
          </a>
          <a className="hover:text-nexus-800" href="#diferenciais">
            Diferenciais
          </a>
          <a className="hover:text-nexus-800" href="#contato">
            Contato
          </a>
          <a
            className="hover:text-nexus-800"
            href={clinic.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{clinic.instagramHandle}
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
        Desenvolvido por{" "}
        <a
          className="font-medium text-nexus-800 underline-offset-2 hover:text-nexus-900 hover:underline"
          href="https://www.watechevoce.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          W.A.Techevoce
        </a>{" "}
        Portfólio
      </p>
    </footer>
  );
}
