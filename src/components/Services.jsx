import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { clinic } from "../data/clinic.js";
import { serviceIconByTitle } from "../data/serviceIcons.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Services({ showIntro = true }) {
  return (
    <section className="section-y relative isolate overflow-hidden bg-section-soft">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-brand-mist to-transparent"
        aria-hidden
      />
      <div className="container-site relative">
        {showIntro ? (
          <SectionHeader
            eyebrow="Especialidades"
            title="Serviços pensados para o seu cuidado por inteiro"
            description="Da prevenção à performance, oferecemos um portfólio integrado para você resolver saúde, estética e movimento com a mesma excelência."
            className="mb-12 sm:mb-14"
          />
        ) : null}

        <div
          className={`grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 ${
            showIntro ? "" : ""
          }`}
        >
          {clinic.services.map((item, index) => {
            const Icon = serviceIconByTitle[item.title] ?? HelpCircle;
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.25rem] border border-brand-navy/8 bg-brand-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-green/20 hover:shadow-card-hover">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy ring-1 ring-brand-navy/10 transition group-hover:bg-brand-navy group-hover:text-brand-white group-hover:ring-brand-navy/20"
                      aria-hidden
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-sm font-bold tabular-nums text-brand-navy/15 transition group-hover:text-brand-green/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 min-w-0 font-display text-base font-semibold tracking-tight text-brand-navy sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-fluid-body mt-2 flex-1 text-ink-muted">{item.desc}</p>
                  <span
                    className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-green/10 blur-2xl transition group-hover:bg-brand-green/18"
                    aria-hidden
                  />
                </article>
              </Reveal>
            );
          })}
        </div>

        {!showIntro ? (
          <Reveal delay={0.1} className="mt-12 text-center sm:mt-14">
            <Link to="/contato" className="btn-navy inline-flex min-h-[48px] items-center gap-2 px-8">
              Agendar atendimento
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
