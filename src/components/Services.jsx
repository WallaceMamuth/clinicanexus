import { HelpCircle } from "lucide-react";
import { clinic } from "../data/clinic.js";
import { serviceIconByTitle } from "../data/serviceIcons.js";

export default function Services() {
  return (
    <section
      id="especialidades"
      className="relative isolate overflow-hidden border-t border-slate-200/80 bg-section-services py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/70 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-nexus-700">
            Serviços disponíveis
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Uma clínica para corpo, mente e performance
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Da saúde mental à estética, da nutrição à reabilitação. Tudo para
            você se cuidar por inteiro em um só lugar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clinic.services.map((item) => {
            const Icon = serviceIconByTitle[item.title] ?? HelpCircle;
            return (
              <article
                key={item.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-nexus-500/25 hover:shadow-md"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-nexus-50 text-nexus-800 ring-1 ring-nexus-900/10 transition group-hover:bg-nexus-100 group-hover:text-nexus-900"
                  aria-hidden
                >
                  <Icon className="h-6 w-6" strokeWidth={1.65} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
                <span
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-nexus-400/10 blur-2xl transition group-hover:bg-nexus-400/15"
                  aria-hidden
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
