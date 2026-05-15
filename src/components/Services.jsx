import { clinic } from "../data/clinic.js";

export default function Services() {
  return (
    <section
      id="especialidades"
      className="relative border-t border-slate-100 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-nexus-700">
            Serviços disponíveis
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Uma clínica para corpo, mente e performance
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Da saúde mental à estética, da nutrição à reabilitação — tudo para você
            se cuidar por inteiro em um só lugar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clinic.services.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-nexus-500/30 hover:shadow-lg hover:shadow-nexus-900/5"
            >
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg text-nexus-800 shadow-inner ring-1 ring-slate-200/80 transition group-hover:bg-nexus-900 group-hover:text-nexus-50 group-hover:ring-nexus-700"
                aria-hidden
              >
                {item.icon}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.desc}
              </p>
              <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-nexus-400/10 blur-2xl transition group-hover:bg-nexus-400/20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
