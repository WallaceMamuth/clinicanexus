import { HelpCircle } from "lucide-react";
import { clinic } from "../data/clinic.js";
import { serviceIconByTitle } from "../data/serviceIcons.js";
import Reveal from "./Reveal.jsx";

export default function Services() {
  return (
    <section
      id="servicos"
      className="section-y relative isolate overflow-hidden border-t border-brand-navy/8 bg-section-soft"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-brand-mist to-transparent"
        aria-hidden
      />
      <div className="container-site relative">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Especialidades
          </p>
          <h2 className="text-fluid-section-title mt-3 font-display font-semibold tracking-tight text-brand-navy text-balance">
            Serviços pensados para o seu cuidado por inteiro
          </h2>
          <p className="text-fluid-lead mt-4 text-ink-muted">
            Da prevenção à performance, oferecemos um portfólio integrado para você
            resolver saúde, estética e movimento com a mesma excelência.
          </p>
        </Reveal>

        <div className="mt-12 grid min-w-0 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {clinic.services.map((item, index) => {
            const Icon = serviceIconByTitle[item.title] ?? HelpCircle;
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-brand-navy/8 bg-brand-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy ring-1 ring-brand-navy/10 transition group-hover:bg-brand-white group-hover:ring-brand-green/30"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 min-w-0 font-display text-base font-semibold tracking-tight text-brand-navy sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-fluid-body mt-2 flex-1 text-ink-muted">
                    {item.desc}
                  </p>
                  <span
                    className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-green/10 blur-2xl transition group-hover:bg-brand-green/18"
                    aria-hidden
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
