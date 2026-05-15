import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section
      id="sobre"
      className="section-y relative border-t border-brand-navy/8 bg-brand-white"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-green/25 to-transparent"
        aria-hidden
      />
      <div className="container-site relative">
        <div className="grid min-w-0 gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
              {clinic.about.eyebrow}
            </p>
            <h2 className="text-fluid-section-title mt-3 font-display font-semibold tracking-tight text-brand-navy text-balance">
              {clinic.about.title}
            </h2>
            <div className="text-fluid-body mt-6 space-y-4 text-ink-muted">
              {clinic.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a
              href="#servicos"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy underline-offset-4 hover:underline"
            >
              Conheça nossas especialidades
              <span aria-hidden>→</span>
            </a>
          </Reveal>

          <Reveal className="relative" delay={0.08}>
            <div className="absolute -inset-2 rounded-[2rem] bg-linear-to-tr from-brand-green/15 to-brand-navy/10 blur-2xl" />
            <div className="relative min-w-0 overflow-hidden rounded-[1.75rem] border border-brand-navy/10 shadow-card">
              <img
                src={clinic.aboutImage}
                alt=""
                width={900}
                height={700}
                sizes="(min-width: 1024px) 42vw, 100vw"
                loading="lazy"
                decoding="async"
                className="aspect-[5/4] w-full min-w-0 object-cover object-center sm:aspect-[4/3]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-navy/75 to-transparent p-6 pt-20 sm:p-8 sm:pt-24">
                <p className="font-display text-lg font-medium text-brand-white sm:text-xl">
                  {clinic.name}
                </p>
                <p className="mt-1 text-sm text-brand-white/85">{clinic.tagline}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
