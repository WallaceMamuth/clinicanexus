import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { clinic } from "../data/clinic.js";

import "swiper/css";
import "swiper/css/effect-fade";

const SLIDE_MS = 5000;
const easeOut = [0.22, 1, 0.36, 1];
const easeSoft = [0.45, 0, 0.55, 1];

export default function Hero() {
  const slides = clinic.heroSlides;
  const reduceMotion = useReducedMotion();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  const bindNav = (swiper) => {
    queueMicrotask(() => {
      const prev = prevRef.current;
      const next = nextRef.current;
      if (!swiper || !prev || !next) return;
      const params = swiper.params.navigation;
      if (typeof params === "object" && params) {
        params.prevEl = prev;
        params.nextEl = next;
      }
      if (swiper.navigation) {
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
      }
    });
  };

  const current = slides[active] ?? slides[0];

  return (
    <section
      id="inicio"
      className="relative h-[100dvh] min-h-[100dvh] overflow-hidden bg-brand-navy"
    >
      <Swiper
        className="hero-swiper absolute inset-0 h-full min-h-[100dvh] w-full"
        modules={[Autoplay, EffectFade, Navigation]}
        effect={reduceMotion ? "slide" : "fade"}
        fadeEffect={{ crossFade: true }}
        speed={reduceMotion ? 400 : 1000}
        loop={slides.length > 1}
        slidesPerView={1}
        autoplay={
          reduceMotion || slides.length <= 1
            ? false
            : {
                delay: SLIDE_MS,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }
        }
        navigation
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActive(swiper.realIndex);
          bindNav(swiper);
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.image} className="!h-[100dvh] min-h-[100dvh]">
            <div className="relative h-full min-h-[100dvh] w-full overflow-hidden">
              <motion.img
                src={slide.image}
                alt=""
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
                decoding={i === 0 ? "sync" : "async"}
                fetchPriority={i === 0 ? "high" : "low"}
                initial={{ scale: 1 }}
                animate={{ scale: reduceMotion ? 1 : active === i ? 1.05 : 1 }}
                transition={{
                  duration: reduceMotion ? 0 : active === i ? SLIDE_MS / 1000 : 0.55,
                  ease: "linear",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-linear-to-t from-brand-navy via-brand-navy/82 to-brand-navy/45"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_90%_70%_at_70%_20%,transparent_0%,rgb(11_44_102_0.55)_75%)]"
        aria-hidden
      />

      {/* Setas — vidro, centro vertical */}
      {slides.length > 1 ? (
        <>
          <button
            ref={prevRef}
            type="button"
            className="pointer-events-auto absolute left-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-[0_8px_32px_rgb(0_0_0_0.2)] backdrop-blur-xl transition duration-300 will-change-transform hover:scale-105 hover:border-white/55 hover:bg-white/25 active:scale-95 md:left-6 md:h-14 md:w-14"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.75} aria-hidden />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="pointer-events-auto absolute right-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-[0_8px_32px_rgb(0_0_0_0.2)] backdrop-blur-xl transition duration-300 will-change-transform hover:scale-105 hover:border-white/55 hover:bg-white/25 active:scale-95 md:right-6 md:h-14 md:w-14"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.75} aria-hidden />
          </button>
        </>
      ) : null}

      <div className="pointer-events-none absolute inset-0 z-[3] flex h-[100dvh] min-h-[100dvh] flex-col justify-end pb-12 pt-20 sm:pb-16 sm:pt-24 md:pb-20">
        <div className="pointer-events-auto mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.45, ease: easeSoft }}
            >
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.04, ease: easeOut }}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 shadow-sm backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green shadow-[0_0_12px_rgb(102_194_58_0.85)]" />
                <span className="truncate">{clinic.brandLine}</span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: 0.1, ease: easeOut }}
                className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white text-balance drop-shadow-sm sm:text-5xl md:text-6xl lg:text-[3.35rem]"
              >
                {current.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: 0.16, ease: easeOut }}
                className="mt-5 max-w-2xl text-lg leading-relaxed text-white/88 sm:text-xl"
              >
                {current.text}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: 0.22, ease: easeOut }}
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
            </motion.div>
          </AnimatePresence>

          <motion.dl
            initial={false}
            animate={{ opacity: 1 }}
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

          {slides.length > 1 ? (
            <div className="mt-10 flex items-center gap-2" role="tablist" aria-label="Slides do banner">
              {slides.map((_, i) => (
                <button
                  key={`hero-dot-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i
                      ? "w-8 bg-brand-green shadow-[0_0_12px_rgb(102_194_58_0.5)]"
                      : "w-2 bg-white/35 hover:bg-white/55"
                  }`}
                  onClick={() => swiperRef.current?.slideToLoop(i)}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
