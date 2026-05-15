import { useState } from "react";
import { MapPin } from "lucide-react";
import { clinic, serviceTitles } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";

const mapsEmbedSrc =
  "https://maps.google.com/maps?q=Av.%20M%C3%A9xico%2C%201101%2C%20Sagrada%20Fam%C3%ADlia%2C%20Dois%20Vizinhos%20-%20PR&hl=pt&z=16&output=embed";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <section
      id="contato"
      className="section-y relative isolate overflow-hidden border-t border-brand-navy/8 bg-section-soft"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[min(70vw,26rem)] w-[min(70vw,26rem)] -translate-y-1/2 rounded-full bg-brand-green/10 blur-3xl"
        aria-hidden
      />
      <div className="container-site relative">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
              Contato
            </p>
            <h2 className="text-fluid-section-title mt-3 font-display font-semibold tracking-tight text-brand-navy">
              Fale com a {clinic.brandLine}
            </h2>
            <p className="text-fluid-lead mt-4 font-medium text-brand-navy/90">
              {clinic.scheduleCta}
            </p>
            <p className="text-fluid-body mt-3 text-ink-muted">
              Prefere WhatsApp ou telefone? Estamos prontos para acolher sua
              mensagem. O formulário ao lado é apenas demonstrativo. Para agendar de
              fato, use os canais abaixo.
            </p>

            <dl className="mt-10 space-y-6 text-sm">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <dt className="flex shrink-0 items-start gap-2 font-semibold text-brand-navy sm:w-28">
                  <MapPin className="mt-0.5 h-4 w-4 text-brand-green" aria-hidden />
                  Endereço
                </dt>
                <dd className="min-w-0 break-words text-ink-muted">
                  {clinic.address}
                  <br />
                  <a
                    className="mt-2 inline-flex items-center gap-1 font-semibold text-brand-navy underline-offset-4 hover:underline"
                    href={clinic.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir no Google Maps
                    <span aria-hidden>↗</span>
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <dt className="shrink-0 font-semibold text-brand-navy sm:w-28">Telefone</dt>
                <dd className="min-w-0 text-ink-muted">
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2">
                    <a
                      className="font-semibold text-brand-navy underline-offset-4 hover:underline"
                      href={clinic.phoneFixedHref}
                    >
                      {clinic.phoneFixed}
                    </a>
                    <span className="hidden text-brand-navy/25 sm:inline" aria-hidden>
                      |
                    </span>
                    <a
                      className="font-semibold text-brand-navy underline-offset-4 hover:underline"
                      href={clinic.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp {clinic.phoneWhatsapp}
                    </a>
                  </div>
                </dd>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <dt className="shrink-0 font-semibold text-brand-navy sm:w-28">Instagram</dt>
                <dd>
                  <a
                    className="inline-flex items-center gap-1 font-semibold text-brand-navy underline-offset-4 hover:underline"
                    href={clinic.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{clinic.instagramHandle}
                    <span className="text-brand-navy/40" aria-hidden>
                      ↗
                    </span>
                  </a>
                  <p className="mt-1 text-ink-muted">Novidades e Direct.</p>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-brand-green px-6 py-3.5 text-base font-semibold text-brand-white shadow-md transition hover:bg-brand-green/92 sm:w-auto"
              >
                Falar no WhatsApp
                <span aria-hidden>↗</span>
              </a>
              <a
                href={clinic.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl border border-brand-navy/15 bg-brand-white px-6 py-3.5 text-base font-semibold text-brand-navy shadow-sm transition hover:border-brand-green/35 sm:w-auto"
              >
                Instagram
                <span aria-hidden>↗</span>
              </a>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-brand-navy/10 bg-brand-mist shadow-inner ring-1 ring-brand-navy/5">
              <div className="relative aspect-[16/11] w-full bg-brand-mist sm:aspect-[16/10]">
                <iframe
                  title="Mapa da Clínica Nexus"
                  src={mapsEmbedSrc}
                  className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[0.97]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="border-t border-brand-navy/8 px-4 py-3 text-center text-xs text-ink-muted">
                Mapa interativo (Google Maps). Se não carregar, use o link {'"'}Abrir no
                Google Maps{'"'}.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="min-w-0">
            <div className="rounded-[1.75rem] border border-brand-navy/10 bg-brand-white p-5 shadow-card sm:p-8">
              <h3 className="font-display text-lg font-semibold text-brand-navy">
                Envie uma mensagem (demonstração)
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                Simulação local. Não envia dados a servidores.
              </p>
              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
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
                      placeholder="voce@email.com"
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
                      placeholder="(00) 00000-0000"
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
                    Registrado apenas neste navegador (demonstração). Para falar
                    com a clínica, use o WhatsApp ou ligue para {clinic.phoneFixed}.
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="min-h-[48px] w-full rounded-xl bg-brand-navy py-3 text-sm font-semibold text-brand-white shadow-md transition hover:bg-brand-navy/92"
                >
                  Enviar pedido de contato (demonstração)
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
