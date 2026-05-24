import { CalendarCheck, ClipboardList, HeartPulse } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Agende sua consulta",
    description:
      "Entre em contato por WhatsApp, telefone ou e-mail. Nossa equipe encontra o melhor horário para você.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Avaliação personalizada",
    description:
      "Consulta com escuta ativa, explicações claras e plano de cuidado alinhado às suas necessidades.",
  },
  {
    icon: HeartPulse,
    step: "03",
    title: "Acompanhamento contínuo",
    description:
      "Seguimento próximo entre especialidades, com foco em resultados, prevenção e bem-estar duradouro.",
  },
];

export default function CareSteps() {
  return (
    <section className="section-y relative border-b border-brand-navy/8 bg-brand-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-green/25 to-transparent"
        aria-hidden
      />
      <div className="container-site relative">
        <SectionHeader
          eyebrow="Como funciona"
          title="Sua jornada de cuidado, passo a passo"
          description="Um processo simples e acolhedor — do primeiro contato ao acompanhamento completo."
          align="center"
          className="mb-12 sm:mb-14"
        />

        <ol className="grid min-w-0 gap-4 lg:grid-cols-3 lg:gap-6">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.step} delay={i * 0.07}>
                <li className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-brand-navy/8 bg-linear-to-b from-brand-white to-brand-mist/80 p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-white shadow-md transition group-hover:bg-brand-green"
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="font-display text-3xl font-bold tabular-nums text-brand-navy/10 transition group-hover:text-brand-green/25">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="text-fluid-body mt-2 text-ink-muted">{item.description}</p>
                  {i < steps.length - 1 ? (
                    <span
                      className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-brand-green/30 lg:block"
                      aria-hidden
                    />
                  ) : null}
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
