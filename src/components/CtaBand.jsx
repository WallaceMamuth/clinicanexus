import { ArrowRight } from "lucide-react";
import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";

export default function CtaBand() {
  return (
    <section className="section-y relative border-t border-brand-navy/8 bg-brand-mist">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_120%,rgb(102_194_58/0.12),transparent_55%)]"
        aria-hidden
      />
      <motion.div className="container-site relative max-w-4xl text-center">
        <Reveal>
          <h2 className="text-fluid-section-title font-display font-semibold tracking-tight text-brand-navy text-balance">
            Pronto para dar o próximo passo no seu cuidado?
          </h2>
          <p className="text-fluid-lead mx-auto mt-4 max-w-2xl text-ink-muted">
            {clinic.scheduleCta}
          </p>
          <div className="mt-10 flex w-full min-w-0 flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#contato"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-brand-navy px-8 py-3.5 text-base font-semibold text-brand-white shadow-md transition hover:bg-brand-navy/92 sm:w-auto"
            >
              Agendar consulta
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
            <a
              href={clinic.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl border border-brand-navy/15 bg-brand-white px-8 py-3.5 text-base font-semibold text-brand-navy shadow-sm transition hover:border-brand-green/35 sm:w-auto"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
