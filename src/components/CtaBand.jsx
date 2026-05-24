import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";

export default function CtaBand() {
  return (
    <section className="section-y relative bg-brand-mist">
      <div className="container-site relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-gradient-brand px-6 py-12 text-center shadow-card sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_120%,rgb(102_194_58/0.22),transparent_55%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-white/5 blur-2xl"
              aria-hidden
            />

            <span className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Agende hoje
            </span>
            <h2 className="text-fluid-section-title relative mt-5 font-display font-semibold tracking-tight text-brand-white text-balance">
              Pronto para dar o próximo passo no seu cuidado?
            </h2>
            <p className="text-fluid-lead relative mx-auto mt-4 max-w-2xl text-white/85">
              {clinic.scheduleCta}
            </p>
            <div className="relative mt-10 flex w-full min-w-0 flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="/contato"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-brand-white px-8 py-3.5 text-base font-semibold text-brand-navy shadow-lg transition hover:bg-brand-mist sm:w-auto"
              >
                Agendar consulta
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-8 py-3.5 text-base font-semibold text-brand-white backdrop-blur-sm transition hover:bg-white/16 sm:w-auto"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
