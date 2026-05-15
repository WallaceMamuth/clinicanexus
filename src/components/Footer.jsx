import { MapPin, Phone } from "lucide-react";
import { clinic } from "../data/clinic.js";
import Logo from "./Logo.jsx";

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const footerNav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="site-footer"
      className="border-t border-brand-navy/10 bg-brand-white py-12 sm:py-14"
    >
      <div className="container-site flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex min-w-0 max-w-md flex-col gap-4">
          <Logo variant="footer" />
          <div>
            <p className="font-display text-lg font-semibold text-brand-navy sm:text-xl">
              {clinic.brandLine}
            </p>
            <p className="text-fluid-body mt-1 text-ink-muted">{clinic.tagline}</p>
          </div>
          <p className="flex items-start gap-2 text-sm leading-relaxed text-ink-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
            <span className="min-w-0 break-words">{clinic.address}</span>
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted">
            <a
              className="inline-flex items-center gap-1.5 font-medium text-brand-navy hover:underline"
              href={clinic.phoneFixedHref}
            >
              <Phone className="h-4 w-4 text-brand-green" aria-hidden />
              {clinic.phoneFixed}
            </a>
            <span className="text-brand-navy/20">·</span>
            <a
              className="font-medium text-brand-navy hover:underline"
              href={clinic.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {clinic.phoneWhatsapp}
            </a>
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-6 sm:flex-row sm:items-start sm:gap-12 lg:gap-16">
          <nav className="flex flex-col gap-2 text-sm font-medium text-ink-muted">
            {footerNav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition hover:text-brand-navy"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy/55">
              Redes
            </p>
            <a
              href={clinic.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-brand-navy/10 px-4 py-2.5 text-sm font-semibold text-brand-navy transition hover:border-brand-green/35 hover:bg-brand-mist"
            >
              <InstagramIcon className="h-4 w-4 text-brand-green" />
              @{clinic.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <p className="container-site mt-10 border-t border-brand-navy/8 pt-8 text-center text-xs text-brand-navy/45 sm:mt-12">
        © {year} {clinic.brandLine}. Todos os direitos reservados.
      </p>
      <p className="container-site mt-3 text-center text-xs text-brand-navy/40">
        Desenvolvido por{" "}
        <a
          className="font-medium text-brand-navy underline-offset-2 hover:text-brand-green hover:underline"
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
