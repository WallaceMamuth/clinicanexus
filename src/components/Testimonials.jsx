import { Quote, Star } from "lucide-react";
import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Testimonials() {
  return (
    <section className="section-y relative border-t border-brand-navy/8 bg-page-mist">
      <div className="container-site relative">
        <SectionHeader
          eyebrow="Depoimentos"
          title="A opinião de quem já passou pela clínica"
          description="Histórias reais de acolhimento e confiança, pilares do nosso atendimento."
          align="center"
          className="mb-12 sm:mb-14"
        />

        <ul className="grid min-w-0 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {clinic.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <li className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.25rem] border border-brand-navy/8 bg-brand-white p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
                <Quote
                  className="absolute right-5 top-5 h-10 w-10 text-brand-green/20"
                  aria-hidden
                />
                <div
                  className="flex gap-1 text-brand-green"
                  aria-label={`${t.rating} de 5 estrelas`}
                >
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-fluid-body relative mt-4 flex-1 text-brand-navy/90">
                  {`"${t.quote}"`}
                </blockquote>
                <footer className="mt-6 flex min-w-0 items-center gap-3 border-t border-brand-navy/10 pt-5">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-green/30 to-brand-navy/20 font-display text-sm font-semibold text-brand-navy ring-2 ring-brand-white"
                    aria-hidden
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="break-words text-sm font-semibold text-brand-navy">{t.name}</p>
                    <p className="text-xs text-ink-muted">{t.detail}</p>
                  </div>
                </footer>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
