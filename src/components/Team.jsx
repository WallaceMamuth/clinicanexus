import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";

export default function Team() {
  return (
    <section
      id="equipe"
      className="relative border-t border-brand-navy/8 bg-brand-mist py-20 sm:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Equipe
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-navy text-balance sm:text-4xl">
            Profissionais que constroem confiança com proximidade
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Perfis ilustrativos da estrutura clínica — em breve você poderá
            conhecer cada especialista em detalhes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clinic.team.map((member, i) => (
            <Reveal key={member.initials} delay={i * 0.05}>
              <article className="group flex h-full flex-col rounded-2xl border border-brand-navy/8 bg-brand-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-brand-navy to-brand-navy/80 font-display text-lg font-semibold text-brand-white shadow-inner ring-2 ring-brand-green/25"
                  aria-hidden
                >
                  {member.initials}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-green">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
