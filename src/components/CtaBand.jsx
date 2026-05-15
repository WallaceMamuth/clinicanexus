import { ArrowRight } from "lucide-react";
import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";

export default function CtaBand() {
  return (
    <section className="relative border-t border-brand-navy/8 bg-brand-mist py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_120%,rgb(102_194_58/0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-navy text-balance sm:text-4xl">
            Pronto para dar o próximo passo no seu cuidado?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-muted">
            {clinic.scheduleCta}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-navy px-8 py-3.5 text-base font-semibold text-brand-white shadow-md transition hover:bg-brand-navy/92"
            >
              Agendar consulta
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={clinic.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-navy/15 bg-brand-white px-8 py-3.5 text-base font-semibold text-brand-navy shadow-sm transition hover:border-brand-green/35"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
