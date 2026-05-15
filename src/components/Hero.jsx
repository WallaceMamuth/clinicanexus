import { clinic } from "../data/clinic.js";

export default function Hero() {
  const spotlight = [
    clinic.services[0],
    clinic.services[3],
    clinic.services[6],
  ];

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-surface pb-20 pt-28 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-36"
    >
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-nexus-400/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-24 h-[380px] w-[380px] rounded-full bg-sky-400/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-linear-to-t from-white via-white/80 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-nexus-500/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-nexus-800 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            {clinic.name} · {clinic.tagline}
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            Cuide de você por inteiro —{" "}
            <span className="bg-linear-to-r from-nexus-700 via-nexus-500 to-sky-500 bg-clip-text text-transparent">
              saúde, estética e movimento
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            {clinic.scheduleCta} Equipe multidisciplinar e serviços que vão do
            clínico geral à performance no CrossFit.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={clinic.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-nexus-900 px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-nexus-900/25 transition hover:bg-nexus-800 hover:shadow-nexus-900/35"
            >
              Agendar pelo Instagram
              <span className="text-nexus-300" aria-hidden>
                ↗
              </span>
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition hover:border-nexus-500/40 hover:bg-slate-50"
            >
              Ver serviços
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200/80 pt-8 sm:gap-8">
            <div>
              <dt className="sr-only">Quantidade de serviços</dt>
              <dd>
                <p className="font-display text-2xl font-bold tracking-tight text-nexus-900 sm:text-3xl">
                  8
                </p>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  Serviços
                </p>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Abrangência</dt>
              <dd>
                <p className="font-display text-2xl font-bold tracking-tight text-nexus-900 sm:text-3xl">
                  360°
                </p>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  Bem-estar
                </p>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Instagram</dt>
              <dd>
                <p className="font-display text-lg font-bold tracking-tight text-nexus-900 sm:text-xl">
                  @{clinic.instagramHandle}
                </p>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  Novidades
                </p>
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:mr-0 lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-nexus-400/30 via-white to-sky-300/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/90 p-1 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 backdrop-blur">
              <div className="rounded-[1.65rem] bg-linear-to-br from-nexus-900 via-nexus-800 to-slate-900 p-6 text-white sm:p-8">
                <p className="text-sm font-medium text-nexus-100/90">
                  Destaques
                </p>
                <p className="mt-2 font-display text-2xl font-semibold tracking-tight">
                  Na {clinic.name.replace("Clínica ", "")}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-nexus-50/95">
                  {spotlight.map((s, i) => (
                    <li
                      key={s.title}
                      className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 ring-1 ${
                        i === 0
                          ? "bg-white/10 ring-white/10"
                          : "bg-white/5 ring-white/5"
                      }`}
                    >
                      <span>{s.title}</span>
                      <span
                        className={
                          i === 0
                            ? "rounded-lg bg-emerald-400/20 px-2 py-0.5 text-xs font-semibold text-emerald-200"
                            : "text-xs text-nexus-200"
                        }
                      >
                        {i === 0 ? "Agende" : "Confira"}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={clinic.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center rounded-xl bg-white py-3 text-sm font-semibold text-nexus-900 transition hover:bg-nexus-50"
                >
                  Falar no Instagram
                </a>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-4 hidden max-w-[220px] rounded-2xl border border-slate-200/80 bg-white/95 p-4 text-xs text-slate-600 shadow-lg backdrop-blur sm:block">
              <p className="font-semibold text-nexus-900">{clinic.tagline}</p>
              <p className="mt-1 leading-relaxed">
                Oito frentes — da saúde mental ao treino funcional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
