import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Team() {
  return (
    <section className="section-y relative border-t border-brand-navy/8 bg-brand-mist">
      <div className="container-site relative">
        <SectionHeader
          eyebrow="Equipe"
          title="Profissionais que constroem confiança com proximidade"
          description="Perfis ilustrativos da estrutura clínica. Em breve você poderá conhecer cada especialista em detalhes."
          className="mb-12 sm:mb-14"
        />

        <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {clinic.team.map((member, i) => (
            <Reveal key={member.initials} delay={i * 0.05}>
              <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.25rem] border border-brand-navy/8 bg-brand-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-green/20 hover:shadow-card-hover">
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-green/80 via-brand-green/40 to-transparent opacity-0 transition group-hover:opacity-100"
                  aria-hidden
                />
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-brand-navy to-brand-navy/80 font-display text-lg font-semibold text-brand-white shadow-inner ring-2 ring-brand-green/25 transition group-hover:scale-105"
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
