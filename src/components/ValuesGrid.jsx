import { Award, Building2, Cpu, HeartHandshake, Leaf } from "lucide-react";
import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const icons = [HeartHandshake, Award, Building2, Cpu, Leaf];

export default function ValuesGrid({ variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "section-y relative overflow-hidden bg-gradient-brand text-brand-white"
          : "section-y relative overflow-hidden border-t border-brand-navy/8 bg-brand-white"
      }
    >
      {isDark ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_-10%,rgb(102_194_58/0.2),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgb(255_255_255/0.08),transparent_45%)]"
            aria-hidden
          />
        </>
      ) : (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-green/25 to-transparent"
          aria-hidden
        />
      )}

      <div className="container-site relative">
        <SectionHeader
          eyebrow="Nossos pilares"
          title="O que nos move todos os dias"
          description="Humanização, segurança e cuidado integral em cada detalhe da sua experiência."
          align="center"
          className={`mb-12 sm:mb-14 ${isDark ? "[&_h2]:text-white [&_p]:text-white/80 [&_.section-eyebrow]:text-brand-green" : ""}`}
        />

        <ul className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {clinic.benefits.map((b, i) => {
            const Icon = icons[i] ?? HeartHandshake;
            return (
              <Reveal key={b.title} delay={i * 0.05}>
                <li
                  className={
                    isDark
                      ? "group flex h-full min-w-0 flex-col rounded-2xl border border-brand-white/15 bg-brand-white/10 p-6 shadow-sm backdrop-blur-md transition hover:border-brand-white/25 hover:bg-brand-white/14"
                      : "group flex h-full min-w-0 flex-col rounded-[1.25rem] border border-brand-navy/8 bg-brand-mist/50 p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-brand-green/20 hover:bg-brand-white hover:shadow-card-hover"
                  }
                >
                  <span
                    className={
                      isDark
                        ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-white/15 text-brand-white ring-1 ring-brand-white/20 transition group-hover:text-brand-green"
                        : "flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-white text-brand-navy shadow-sm ring-1 ring-brand-navy/10 transition group-hover:ring-brand-green/30"
                    }
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <p
                    className={`mt-4 font-display text-base font-semibold sm:text-lg ${isDark ? "text-brand-white" : "text-brand-navy"}`}
                  >
                    {b.title}
                  </p>
                  <p
                    className={`text-fluid-body mt-2 ${isDark ? "text-brand-white/78" : "text-ink-muted"}`}
                  >
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
