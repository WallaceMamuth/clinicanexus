import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";

export default function About({ showIntro = true }) {
  return (
    <section className="section-y relative -mt-4 bg-brand-white sm:-mt-6">
      <div className="container-site relative">
        <div className="grid min-w-0 gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            {showIntro ? (
              <>
                <p className="section-eyebrow">
                  <span className="section-eyebrow-line" aria-hidden />
                  {clinic.about.eyebrow}
                </p>
                <h2 className="text-fluid-section-title mt-4 font-display font-semibold tracking-tight text-brand-navy text-balance">
                  {clinic.about.title}
                </h2>
              </>
            ) : null}
            <div
              className={`text-fluid-body space-y-4 text-ink-muted ${showIntro ? "mt-6" : ""}`}
            >
              {clinic.about.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/servicos" className="btn-secondary inline-flex min-h-[44px] items-center gap-2 px-5">
                Especialidades
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to="/contato" className="btn-navy inline-flex min-h-[44px] items-center gap-2 px-5">
                Fale conosco
              </Link>
            </div>
          </Reveal>

          <Reveal className="relative" delay={0.08}>
            <div className="absolute -inset-3 rounded-[2rem] bg-linear-to-tr from-brand-green/20 to-brand-navy/10 blur-2xl" />
            <div className="relative min-w-0 overflow-hidden rounded-[1.75rem] border border-brand-navy/10 shadow-card ring-1 ring-brand-navy/5">
              <img
                src={clinic.aboutImage}
                alt="Ambiente da clínica"
                width={900}
                height={700}
                sizes="(min-width: 1024px) 42vw, 100vw"
                loading="lazy"
                decoding="async"
                className="aspect-[5/4] w-full min-w-0 object-cover object-center sm:aspect-[4/3]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-navy/85 via-brand-navy/40 to-transparent p-6 pt-20 sm:p-8 sm:pt-24">
                <p className="font-display text-lg font-medium text-brand-white sm:text-xl">
                  {clinic.name}
                </p>
                <p className="mt-1 text-sm text-brand-white/85">{clinic.tagline}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-brand-green/90">
                  {clinic.address}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
