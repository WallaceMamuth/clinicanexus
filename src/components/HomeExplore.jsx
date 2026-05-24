import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Sparkles, Stethoscope } from "lucide-react";
import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const exploreCards = [
  {
    to: "/sobre",
    icon: HeartHandshake,
    title: "Nossa história",
    description: "Valores, propósito e equipe multidisciplinar dedicada ao seu bem-estar.",
    accent: "from-brand-green/20 to-brand-green/5",
  },
  {
    to: "/servicos",
    icon: Stethoscope,
    title: "Especialidades",
    description: "Saúde integrada com protocolos seguros e atendimento humanizado.",
    accent: "from-brand-navy/15 to-brand-navy/5",
  },
  {
    to: "/contato",
    icon: Sparkles,
    title: "Agende agora",
    description: "WhatsApp, telefone ou e-mail — estamos prontos para acolher você.",
    accent: "from-brand-green/15 to-brand-mist",
  },
];

export default function HomeExplore() {
  return (
    <section className="section-y relative bg-page-mist">
      <div className="container-site relative">
        <SectionHeader
          eyebrow="Explore a clínica"
          title="Tudo o que você precisa, em um só lugar"
          description="Navegue pelas áreas do site e descubra como a W.A.Techevoce Clínica cuida de você em Saquarema."
          align="center"
          className="mb-12 sm:mb-14"
        />

        <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {exploreCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.to} delay={i * 0.06}>
                <Link
                  to={card.to}
                  className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-brand-navy/8 bg-brand-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-green/25 hover:shadow-card-hover sm:p-7"
                >
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${card.accent} text-brand-navy ring-1 ring-brand-navy/8 transition group-hover:scale-105 group-hover:ring-brand-green/30`}
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-navy">
                    {card.title}
                  </h3>
                  <p className="text-fluid-body mt-2 flex-1 text-ink-muted">{card.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy transition group-hover:gap-2.5 group-hover:text-brand-green">
                    Saiba mais
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                  <span
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-green/8 blur-2xl transition group-hover:bg-brand-green/14"
                    aria-hidden
                  />
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12} className="mt-10 text-center sm:mt-12">
          <p className="text-sm text-ink-muted">
            <span className="font-semibold text-brand-navy">{clinic.address}</span>
            {" · "}
            Atendimento com acolhimento e excelência clínica
          </p>
        </Reveal>
      </div>
    </section>
  );
}
