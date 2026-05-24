import { Award, Building2, Cpu, HeartHandshake, Leaf } from "lucide-react";
import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const icons = [HeartHandshake, Award, Building2, Cpu, Leaf];

export default function Benefits() {
  return (
    <section className="section-y relative overflow-hidden border-t border-brand-white/20 bg-gradient-brand text-brand-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_-10%,rgb(102_194_58/0.2),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgb(255_255_255/0.08),transparent_45%)]"
        aria-hidden
      />

      <div className="container-site relative">
        <SectionHeader
          eyebrow="Por que nos escolher"
          title="Benefícios que fazem diferença no seu dia a dia"
          description="Transparência, acolhimento e padrão clínico para você decidir com confiança."
          align="center"
          className="mb-12 sm:mb-14 [&_.section-eyebrow]:text-brand-green [&_.section-eyebrow-line]:bg-brand-green/70 [&_h2]:text-white [&_p]:text-white/80"
        />

        <ul className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {clinic.benefits.map((b, i) => {
            const Icon = icons[i] ?? HeartHandshake;
            return (
              <Reveal key={b.title} delay={i * 0.05}>
                <li className="group flex h-full min-w-0 flex-col rounded-[1.25rem] border border-brand-white/15 bg-brand-white/10 p-6 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-brand-white/28 hover:bg-brand-white/14 sm:col-span-2 sm:last:col-span-2 lg:col-span-1 lg:last:col-span-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-white/15 text-brand-white ring-1 ring-brand-white/20 transition group-hover:scale-105 group-hover:text-brand-green">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <p className="mt-4 font-display text-base font-semibold text-brand-white sm:text-lg">
                    {b.title}
                  </p>
                  <p className="text-fluid-body mt-2 text-brand-white/78">{b.description}</p>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
