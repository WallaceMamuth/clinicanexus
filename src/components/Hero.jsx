import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { clinic } from "../data/clinic.js";

const fadeEase = [0.45, 0, 0.55, 1];
const SLIDE_MS = 5000;

export default function Hero() {
  const slides = clinic.heroSlides;
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || slides.length <= 1 || paused) return undefined;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, slides.length, paused]);

  return (
    <section
      id="inicio"
      className="relative h-[100dvh] min-h-[100dvh] overflow-hidden bg-brand-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0" aria-hidden>
        {slides.map((slide, i) => (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0.35 : 1.15, ease: fadeEase }}
            style={{ zIndex: i === index ? 1 : 0 }}
          >
            <motion.img
              src={slide.src}
              alt=""
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
              decoding={i === 0 ? "sync" : "async"}
              fetchPriority={i === 0 ? "high" : "low"}
              initial={{ scale: 1 }}
              animate={{
                scale: reduceMotion ? 1 : i === index ? 1.06 : 1,
              }}
              transition={{
                duration: reduceMotion ? 0 : i === index ? SLIDE_MS / 1000 : 0.45,
                ease: "linear",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Leitura + gradiente cinematográfico */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-linear-to-t from-brand-navy via-brand-navy/82 to-brand-navy/45"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_90%_70%_at_70%_20%,transparent_0%,rgb(11_44_102_0.55)_75%)]"
        aria-hidden
      />

      {/* Conteúdo */}
      <div className="relative z-[3] flex h-[100dvh] min-h-[100dvh] flex-col justify-end pb-12 pt-20 sm:pb-16 sm:pt-24 md:pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 shadow-sm backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green shadow-[0_0_12px_rgb(102_194_58_0.85)]" />
            <span className="truncate">{clinic.brandLine}</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white text-balance drop-shadow-sm sm:text-5xl md:text-6xl lg:text-[3.35rem]"
          >
            {clinic.heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-white/88 sm:text-xl"
          >
            {clinic.heroSubheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-green px-7 py-3.5 text-base font-semibold text-brand-white shadow-lg shadow-black/25 transition hover:bg-brand-green/92 hover:shadow-xl"
            >
              Agendar consulta
              <ArrowUpRight className="h-4 w-4 opacity-95" aria-hidden />
            </a>
            <a
              href={clinic.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/35 bg-white/10 px-7 py-3.5 text-base font-semibold text-white shadow-md backdrop-blur-md transition hover:border-white/55 hover:bg-white/16"
            >
              Falar no WhatsApp
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-8 sm:gap-8"
          >
            <div>
              <dt className="sr-only">Especialidades</dt>
              <dd>
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">8+</p>
                <p className="mt-1 text-xs font-medium text-white/70 sm:text-sm">Especialidades</p>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Bem-estar</dt>
              <dd>
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">360°</p>
                <p className="mt-1 text-xs font-medium text-white/70 sm:text-sm">Cuidado integral</p>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Instagram</dt>
              <dd>
                <p className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                  @{clinic.instagramHandle}
                </p>
                <p className="mt-1 text-xs font-medium text-white/70 sm:text-sm">Novidades</p>
              </dd>
            </div>
          </motion.dl>

          {/* Indicadores */}
          <div
            className="mt-10 flex items-center gap-2"
            role="tablist"
            aria-label="Slides do banner"
          >
            {slides.map((_, i) => (
              <button
                key={`hero-dot-${i}`}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-brand-green shadow-[0_0_12px_rgb(102_194_58_0.5)]" : "w-2 bg-white/35 hover:bg-white/55"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
