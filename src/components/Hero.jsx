import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { clinic } from "../data/clinic.js";

const floatCard =
  "rounded-2xl border border-brand-white/70 bg-brand-white/80 px-4 py-3 shadow-card backdrop-blur-md";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-page-mist pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[min(100%,52rem)] bg-gradient-hero-overlay"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-brand-navy/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-brand-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy/80 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green shadow-[0_0_10px_rgb(102_194_58/0.7)]" />
            {clinic.brandLine}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-brand-navy text-balance sm:text-5xl lg:text-[3.15rem]"
          >
            {clinic.heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            {clinic.heroSubheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-green px-7 py-3.5 text-base font-semibold text-brand-white shadow-md shadow-brand-navy/10 transition hover:bg-brand-green/92 hover:shadow-lg"
            >
              Agendar consulta
              <ArrowUpRight className="h-4 w-4 opacity-90" aria-hidden />
            </a>
            <a
              href={clinic.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-brand-navy/14 bg-brand-white px-7 py-3.5 text-base font-semibold text-brand-navy shadow-sm transition hover:border-brand-green/35 hover:bg-brand-mist"
            >
              Falar no WhatsApp
            </a>
          </motion.div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-brand-navy/10 pt-10 sm:gap-8">
            <div>
              <dt className="sr-only">Serviços</dt>
              <dd>
                <p className="font-display text-3xl font-semibold text-brand-navy sm:text-4xl">
                  8+
                </p>
                <p className="mt-1 text-xs font-medium text-ink-muted sm:text-sm">
                  Especialidades
                </p>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Cuidado</dt>
              <dd>
                <p className="font-display text-3xl font-semibold text-brand-navy sm:text-4xl">
                  360°
                </p>
                <p className="mt-1 text-xs font-medium text-ink-muted sm:text-sm">
                  Bem-estar
                </p>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Rede social</dt>
              <dd>
                <p className="font-display text-xl font-semibold tracking-tight text-brand-navy sm:text-2xl">
                  @{clinic.instagramHandle}
                </p>
                <p className="mt-1 text-xs font-medium text-ink-muted sm:text-sm">
                  Novidades
                </p>
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-brand-green/20 via-brand-white to-brand-navy/10 blur-2xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-brand-white/80 shadow-card ring-1 ring-brand-navy/8"
          >
            <img
              src={clinic.heroImage}
              alt=""
              width={900}
              height={700}
              className="aspect-[5/4] w-full object-cover sm:aspect-[4/3]"
              decoding="async"
              fetchPriority="high"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-navy/25 via-transparent to-transparent"
              aria-hidden
            />
          </motion.div>

          <motion.div
            className={`absolute -left-2 top-[12%] sm:left-0 ${floatCard} max-w-[11rem] sm:max-w-[13rem]`}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-mist text-brand-green ring-1 ring-brand-navy/8">
                <ShieldCheck className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold text-brand-navy">Protocolos seguros</p>
                <p className="text-[11px] leading-snug text-ink-muted">
                  Avaliação e acompanhamento com padrão clínico.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`absolute -right-1 bottom-[14%] sm:right-0 ${floatCard} max-w-[11rem] sm:max-w-[13rem]`}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-mist text-brand-navy ring-1 ring-brand-navy/8">
                <Sparkles className="h-5 w-5 text-brand-green" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold text-brand-navy">Experiência premium</p>
                <p className="text-[11px] leading-snug text-ink-muted">
                  Ambiente calmo para você se sentir acolhido.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
