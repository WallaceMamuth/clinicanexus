import { Award, Building2, Cpu, HeartHandshake, Leaf } from "lucide-react";
import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";

const icons = [HeartHandshake, Award, Building2, Cpu, Leaf];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="section-y relative overflow-hidden border-t border-brand-white/20 bg-gradient-brand text-brand-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_-10%,rgb(102_194_58/0.2),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgb(255_255_255/0.08),transparent_45%)]"
        aria-hidden
      />

      <div className="container-site relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-white/80">
            Por que nos escolher
          </p>
          <h2 className="text-fluid-section-title mt-3 font-display font-semibold tracking-tight text-balance">
            Benefícios que fazem diferença no seu dia a dia
          </h2>
          <p className="text-fluid-lead mt-4 text-brand-white/80">
            Transparência, acolhimento e padrão clínico para você decidir com
            confiança.
          </p>
        </Reveal>

        <ul className="mt-12 grid min-w-0 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {clinic.benefits.map((b, i) => {
            const Icon = icons[i] ?? HeartHandshake;
            return (
              <Reveal key={b.title} delay={i * 0.05}>
                <li className="group flex h-full min-w-0 flex-col rounded-2xl border border-brand-white/15 bg-brand-white/10 p-5 shadow-sm backdrop-blur-md transition hover:border-brand-white/25 hover:bg-brand-white/14 sm:col-span-2 sm:last:col-span-2 lg:col-span-1 lg:last:col-span-1 sm:p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-white/15 text-brand-white ring-1 ring-brand-white/20 transition group-hover:text-brand-green">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <p className="mt-4 font-display text-base font-semibold text-brand-white sm:text-lg">
                    {b.title}
                  </p>
                  <p className="text-fluid-body mt-2 text-brand-white/78">
                    {b.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
