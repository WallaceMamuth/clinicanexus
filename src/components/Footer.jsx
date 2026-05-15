import { clinic } from "../data/clinic.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-nexus-800 to-nexus-900 text-sm font-bold text-white">
            N
          </span>
          <div>
            <p className="font-display text-base font-semibold text-ink">
              {clinic.name}
            </p>
            <p className="text-sm text-ink-muted">
              {clinic.tagline} · {year}
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
        Site estático. Inclua política de privacidade e dados cadastrais conforme
        a operação da clínica.
      </p>
    </footer>
  );
}
