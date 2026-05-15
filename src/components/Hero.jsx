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
      className="relative h-[100dvh] min-h-[100dvh] overflow-hidden bg-brand-navy supports-[height:100dvh]:min-h-[100dvh]"
    >
      <Swiper
        className="hero-swiper absolute inset-0 h-full min-h-[100dvh] w-full touch-pan-y"
        modules={[Autoplay, EffectFade, Navigation]}
        effect={reduceMotion ? "slide" : "fade"}
        fadeEffect={{ crossFade: true }}
        speed={reduceMotion ? 400 : 1000}
        loop={slides.length > 1}
        slidesPerView={1}
        resistanceRatio={0.85}
        touchStartPreventDefault={false}
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
            <div className="relative h-full min-h-[100dvh] w-full min-w-0 overflow-hidden">
              <motion.img
                src={slide.image}
                alt=""
                width={1920}
                height={1080}
                sizes="100vw"
                className="h-full w-full min-h-[100dvh] min-w-0 object-cover object-center"
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
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_90%_70%_at_70%_20%,transparent_0%,rgb(11_44_102_0.55)_75%)] max-lg:bg-[radial-gradient(ellipse_120%_85%_at_50%_30%,transparent_0%,rgb(11_44_102_0.5)_78%)]"
        aria-hidden
      />

      {slides.length > 1 ? (
        <>
          <button
            ref={prevRef}
            type="button"
            className="pointer-events-auto absolute left-[max(0.5rem,env(safe-area-inset-left))] top-[42%] z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-[0_8px_32px_rgb(0_0_0_0.2)] backdrop-blur-xl transition duration-300 will-change-transform hover:scale-105 hover:border-white/55 hover:bg-white/25 active:scale-95 sm:left-3 sm:h-12 sm:w-12 md:left-6 md:top-1/2 md:h-14 md:w-14"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={1.75} aria-hidden />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="pointer-events-auto absolute right-[max(0.5rem,env(safe-area-inset-right))] top-[42%] z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-[0_8px_32px_rgb(0_0_0_0.2)] backdrop-blur-xl transition duration-300 will-change-transform hover:scale-105 hover:border-white/55 hover:bg-white/25 active:scale-95 sm:right-3 sm:h-12 sm:w-12 md:right-6 md:top-1/2 md:h-14 md:w-14"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={1.75} aria-hidden />
          </button>
        </>
      ) : null}

      <div className="pointer-events-none absolute inset-0 z-[3] flex h-[100dvh] min-h-[100dvh] flex-col justify-end pt-[calc(4rem+env(safe-area-inset-top))]">
        <div className="pointer-events-auto mx-auto w-full min-w-0 max-w-6xl px-4 pb-[max(2.75rem,env(safe-area-inset-bottom))] max-md:px-12 sm:px-6 sm:pb-14 md:pb-16 lg:px-8 2xl:max-w-[80rem] 2xl:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.45, ease: easeSoft }}
              className="min-w-0"
            >
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.04, ease: easeOut }}
                className="inline-flex max-w-full min-w-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/90 shadow-sm backdrop-blur-md sm:px-4 sm:text-xs sm:tracking-[0.2em]"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green shadow-[0_0_12px_rgb(102_194_58_0.85)]" />
                <span className="truncate">{clinic.brandLine}</span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: 0.1, ease: easeOut }}
                className="text-fluid-hero mt-4 max-w-4xl font-display font-semibold tracking-tight text-white text-balance drop-shadow-sm sm:mt-5"
              >
                {current.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: 0.16, ease: easeOut }}
                className="text-fluid-lead mt-4 max-w-2xl text-white/88 sm:mt-5"
              >
                {current.text}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: 0.22, ease: easeOut }}
                className="mt-7 flex w-full min-w-0 flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
              >
                <a
                  href="#contato"
                  className="inline-flex min-h-[48px] w-full min-w-0 flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-green px-5 py-3.5 text-center text-base font-semibold text-brand-white shadow-lg shadow-black/25 transition hover:bg-brand-green/92 hover:shadow-xl sm:w-auto sm:flex-initial sm:px-7"
                >
                  Agendar consulta
                  <ArrowUpRight className="h-4 w-4 shrink-0 opacity-95" aria-hidden />
                </a>
                <a
                  href={clinic.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full min-w-0 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/35 bg-white/10 px-5 py-3.5 text-center text-base font-semibold text-white shadow-md backdrop-blur-md transition hover:border-white/55 hover:bg-white/16 sm:w-auto sm:flex-initial sm:px-7"
                >
                  Falar no WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.dl
            initial={false}
            animate={{ opacity: 1 }}
            className="mt-8 grid min-w-0 max-w-lg grid-cols-3 gap-2 border-t border-white/20 pt-6 sm:mt-12 sm:gap-6 sm:pt-8"
          >
            <div className="min-w-0">
              <dt className="sr-only">Especialidades</dt>
              <dd className="min-w-0">
                <p className="font-display text-lg font-semibold tabular-nums text-white sm:text-2xl md:text-3xl">
                  8+
                </p>
                <p className="mt-0.5 text-[0.65rem] font-medium leading-snug text-white/70 sm:mt-1 sm:text-xs md:text-sm">
                  Especialidades
                </p>
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="sr-only">Bem-estar</dt>
              <dd className="min-w-0">
                <p className="font-display text-lg font-semibold text-white sm:text-2xl md:text-3xl">360°</p>
                <p className="mt-0.5 text-[0.65rem] font-medium leading-snug text-white/70 sm:mt-1 sm:text-xs md:text-sm">
                  Cuidado integral
                </p>
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="sr-only">Instagram</dt>
              <dd className="min-w-0">
                <p className="truncate font-display text-sm font-semibold tracking-tight text-white sm:text-lg md:text-xl">
                  @{clinic.instagramHandle}
                </p>
                <p className="mt-0.5 text-[0.65rem] font-medium leading-snug text-white/70 sm:mt-1 sm:text-xs md:text-sm">
                  Novidades
                </p>
              </dd>
            </div>
          </motion.dl>

          {slides.length > 1 ? (
            <div
              className="mt-6 flex flex-wrap items-center gap-1.5 sm:mt-10 sm:gap-2"
              role="tablist"
              aria-label="Slides do banner"
            >
              {slides.map((_, i) => (
                <button
                  key={`hero-dot-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={`flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 ${
                    active === i ? "px-2" : ""
                  }`}
                  onClick={() => swiperRef.current?.slideToLoop(i)}
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-300 ${
                      active === i
                        ? "w-8 bg-brand-green shadow-[0_0_12px_rgb(102_194_58_0.5)]"
                        : "w-2 bg-white/35 hover:bg-white/55"
                    }`}
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
