import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";

export default function Team() {
  return (
    <section
      id="equipe"
      className="section-y relative border-t border-brand-navy/8 bg-brand-mist"
    >
      <div className="container-site relative">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Equipe
          </p>
          <h2 className="text-fluid-section-title mt-3 font-display font-semibold tracking-tight text-brand-navy text-balance">
            Profissionais que constroem confiança com proximidade
          </h2>
          <p className="text-fluid-lead mt-4 text-ink-muted">
            Perfis ilustrativos da estrutura clínica. Em breve você poderá
            conhecer cada especialista em detalhes.
          </p>
        </Reveal>

        <div className="mt-12 grid min-w-0 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {clinic.team.map((member, i) => (
            <Reveal key={member.initials} delay={i * 0.05}>
              <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-brand-navy/8 bg-brand-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover sm:p-6">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-brand-navy to-brand-navy/80 font-display text-lg font-semibold text-brand-white shadow-inner ring-2 ring-brand-green/25"
                  aria-hidden
                >
                  {member.initials}
                </div>
                <h3 className="mt-4 min-w-0 font-display text-base font-semibold text-brand-navy sm:text-lg">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-green">{member.role}</p>
                <p className="text-fluid-body mt-3 text-ink-muted">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
