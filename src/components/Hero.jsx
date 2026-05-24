import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Autoplay, EffectFade } from "swiper/modules";
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
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);
  const [zoomSlides, setZoomSlides] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setZoomSlides(false);
      return undefined;
    }
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setZoomSlides(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [reduceMotion]);

  const current = slides[active] ?? slides[0];

  return (
    <section className="hero-viewport relative overflow-hidden bg-brand-navy">
      <Swiper
        className="hero-swiper absolute inset-0 h-full min-h-full w-full touch-pan-y"
        modules={[Autoplay, EffectFade]}
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
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActive(swiper.realIndex);
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.image} className="!h-full min-h-full">
            <div className="relative h-full min-h-full w-full min-w-0 overflow-hidden">
              <motion.img
                src={slide.image}
                alt=""
                width={1920}
                height={1080}
                sizes="100vw"
                className="h-full w-full min-h-full min-w-0 object-cover object-center"
                decoding={i === 0 ? "sync" : "async"}
                fetchPriority={i === 0 ? "high" : "low"}
                initial={{ scale: 1 }}
                animate={{ scale: zoomSlides && active === i ? 1.05 : 1 }}
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
        className="pointer-events-none absolute inset-0 z-[2] bg-linear-to-t from-brand-navy via-brand-navy/88 to-brand-navy/55 lg:via-brand-navy/82 lg:to-brand-navy/45"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_90%_70%_at_70%_20%,transparent_0%,rgb(11_44_102_0.55)_75%)] max-lg:bg-[radial-gradient(ellipse_120%_85%_at_50%_30%,transparent_0%,rgb(11_44_102_0.55)_78%)]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 z-[3] flex hero-viewport flex-col justify-end pt-[calc(4rem+env(safe-area-inset-top))]">
        <div className="container-site pointer-events-auto pb-[max(2.75rem,env(safe-area-inset-bottom))] sm:pb-14 md:pb-16">
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
                <Link
                  to="/contato"
                  className="inline-flex min-h-[48px] w-full min-w-0 flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-green px-5 py-3.5 text-center text-base font-semibold text-brand-white shadow-lg shadow-black/25 transition hover:bg-brand-green/92 hover:shadow-xl sm:w-auto sm:flex-initial sm:px-7"
                >
                  Agendar consulta
                  <ArrowUpRight className="h-4 w-4 shrink-0 opacity-95" aria-hidden />
                </Link>
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
                <p className="text-fluid-stat font-display font-semibold tabular-nums text-white">
                  8+
                </p>
                <p className="text-fluid-stat-label mt-0.5 font-medium text-white/70 sm:mt-1">
                  Especialidades
                </p>
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="sr-only">Bem-estar</dt>
              <dd className="min-w-0">
                <p className="text-fluid-stat font-display font-semibold text-white">360°</p>
                <p className="text-fluid-stat-label mt-0.5 font-medium text-white/70 sm:mt-1">
                  Cuidado integral
                </p>
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="sr-only">Instagram</dt>
              <dd className="min-w-0">
                <p className="truncate text-fluid-stat font-display font-semibold tracking-tight text-white">
                  @{clinic.instagramHandle}
                </p>
                <p className="text-fluid-stat-label mt-0.5 font-medium text-white/70 sm:mt-1">
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
