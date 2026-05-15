import { clinic } from "../data/clinic.js";

const bullets = [
  {
    title: "Saúde de ponta a ponta",
    text: "Do clínico geral à saúde mental, da ortopedia à nutrição, tudo em um só lugar para você por inteiro.",
  },
  {
    title: "Movimento e estética",
    text: "CrossFit, treinamento funcional, fisioterapia e estética facial e corporal no mesmo espaço de cuidado.",
  },
  {
    title: "Agende pelo Instagram",
    text: `Tire dúvidas e agende um horário com a equipe pelo perfil @${clinic.instagramHandle}.`,
  },
];

export default function Highlights() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-linear-to-b from-nexus-950 via-nexus-900 to-slate-950 py-20 text-white sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-10%,rgba(94,234,212,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(56,189,248,0.08),transparent_45%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-[1] h-96 w-96 translate-x-1/3 -translate-y-1/4 rounded-full bg-nexus-500/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-[1] h-80 w-80 -translate-x-1/3 translate-y-1/4 rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-nexus-300">
            Por que {clinic.name.replace("Clínica ", "")}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {clinic.tagline} em um só lugar
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-nexus-100/85">
            {clinic.scheduleCta}
          </p>
          <ul className="mt-10 space-y-6">
            {bullets.map((b) => (
              <li key={b.title} className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-nexus-300 ring-1 ring-white/10">
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-white">{b.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-nexus-100/80">
                    {b.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-[2rem] bg-linear-to-tr from-nexus-400/20 to-sky-400/20 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
            <blockquote className="font-display text-xl font-medium leading-snug text-white sm:text-2xl">
              “Quero cuidar da saúde, da mente, da estética e ainda treinar com
              orientação, tudo de forma integrada.”
            </blockquote>
            <footer className="mt-8 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-linear-to-br from-nexus-400 to-sky-400 ring-2 ring-white/20" />
              <div>
                <p className="text-sm font-semibold">{clinic.name}</p>
                <p className="text-xs text-nexus-200">{clinic.tagline}</p>
              </div>
            </footer>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
              <div>
                <p className="font-display text-3xl font-bold text-nexus-300">
                  8
                </p>
                <p className="text-xs text-nexus-200">serviços na clínica</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-nexus-300">
                  IG
                </p>
                <p className="text-xs text-nexus-200">
                  @{clinic.instagramHandle}
                </p>
              </div>
            </div>
            <a
              href={clinic.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-white py-3 text-sm font-semibold text-nexus-900 transition hover:bg-nexus-50"
            >
              Seguir e agendar no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
