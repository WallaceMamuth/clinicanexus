import { useState } from "react";
import { MapPin, Send } from "lucide-react";
import { clinic, serviceTitles } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const mapsEmbedSrc =
  "https://maps.google.com/maps?q=Saquarema%2C+Jacon%C3%A9+Centro%2C+RJ&hl=pt&z=15&output=embed";

export default function Contact({ showIntro = true }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <section className="section-y relative isolate overflow-hidden bg-section-soft">
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-[min(70vw,26rem)] w-[min(70vw,26rem)] rounded-full bg-brand-green/10 blur-3xl"
        aria-hidden
      />
      <div className="container-site relative">
        {showIntro ? (
          <SectionHeader
            eyebrow="Contato"
            title={`Fale com a ${clinic.brandLine}`}
            description={clinic.scheduleCta}
            className="mb-12 sm:mb-14"
          />
        ) : null}

        <div className="grid min-w-0 gap-8 lg:grid-cols-5 lg:gap-10">
          <Reveal className="min-w-0 lg:col-span-2">
            <div className="flex h-full flex-col rounded-[1.5rem] border border-brand-navy/10 bg-brand-white p-6 shadow-card sm:p-8">
              <h3 className="font-display text-lg font-semibold text-brand-navy">
                Onde estamos
              </h3>
              <p className="text-fluid-body mt-2 text-ink-muted">
                Visite-nos em Saquarema ou fale pelos canais acima. Estamos prontos para
                acolher sua mensagem.
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-brand-mist/80 p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" aria-hidden />
                <div className="min-w-0">
                  <p className="font-semibold text-brand-navy">{clinic.address}</p>
                  <a
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy underline-offset-4 hover:underline"
                    href={clinic.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir no Google Maps
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-brand-navy/10 bg-brand-mist shadow-inner ring-1 ring-brand-navy/5">
                <div className="relative aspect-[4/3] w-full bg-brand-mist">
                  <iframe
                    title="Mapa da W.A.Techevoce Clínica"
                    src={mapsEmbedSrc}
                    className="absolute inset-0 h-full w-full border-0 grayscale-[0.1] contrast-[0.98]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={clinic.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex min-h-[44px] flex-1 items-center justify-center px-4 sm:flex-none"
                >
                  WhatsApp
                </a>
                <a
                  href={clinic.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex min-h-[44px] flex-1 items-center justify-center px-4 sm:flex-none"
                >
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="min-w-0 lg:col-span-3">
            <div className="rounded-[1.5rem] border border-brand-navy/10 bg-brand-white p-6 shadow-card sm:p-8 lg:p-10">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-brand-white">
                  <Send className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-navy">
                    Envie uma mensagem
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    Formulário demonstrativo. Para agendar de fato, use WhatsApp ou telefone.
                  </p>
                </div>
              </div>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-navy/55">
                      Nome completo
                    </span>
                    <input
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="mt-1.5 w-full rounded-xl border border-brand-navy/12 bg-brand-mist/80 px-4 py-3 text-sm text-brand-navy outline-none ring-brand-green/25 transition placeholder:text-brand-navy/35 focus:border-brand-green/50 focus:bg-brand-white focus:ring-2"
                      placeholder="Seu nome"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-navy/55">
                      E-mail
                    </span>
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="mt-1.5 w-full rounded-xl border border-brand-navy/12 bg-brand-mist/80 px-4 py-3 text-sm text-brand-navy outline-none ring-brand-green/25 transition placeholder:text-brand-navy/35 focus:border-brand-green/50 focus:bg-brand-white focus:ring-2"
                      placeholder={clinic.email}
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-navy/55">
                      Telefone
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-1.5 w-full rounded-xl border border-brand-navy/12 bg-brand-mist/80 px-4 py-3 text-sm text-brand-navy outline-none ring-brand-green/25 transition placeholder:text-brand-navy/35 focus:border-brand-green/50 focus:bg-brand-white focus:ring-2"
                      placeholder={clinic.phoneFixed}
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-navy/55">
                      Serviço de interesse
                    </span>
                    <select
                      name="specialty"
                      className="mt-1.5 w-full rounded-xl border border-brand-navy/12 bg-brand-mist/80 px-4 py-3 text-sm text-brand-navy outline-none ring-brand-green/25 transition focus:border-brand-green/50 focus:bg-brand-white focus:ring-2"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecione
                      </option>
                      {serviceTitles.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-navy/55">
                      Mensagem
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      className="mt-1.5 w-full resize-y rounded-xl border border-brand-navy/12 bg-brand-mist/80 px-4 py-3 text-sm text-brand-navy outline-none ring-brand-green/25 transition placeholder:text-brand-navy/35 focus:border-brand-green/50 focus:bg-brand-white focus:ring-2"
                      placeholder="Melhor horário, convênio ou dúvidas."
                    />
                  </label>
                </div>

                {sent ? (
                  <p className="rounded-xl border border-brand-green/25 bg-brand-mist px-4 py-3 text-sm font-medium text-brand-navy">
                    Registrado apenas neste navegador (demonstração). Para falar com a
                    clínica, use o WhatsApp, e-mail ou ligue para {clinic.phoneFixed}.
                  </p>
                ) : null}

                <button type="submit" className="btn-navy min-h-[48px] w-full">
                  Enviar pedido de contato
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
