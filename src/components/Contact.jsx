import { useState } from "react";
import { clinic, serviceTitles } from "../data/clinic.js";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contato" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Fale com a {clinic.name}
            </h2>
            <p className="mt-4 text-lg font-medium text-nexus-900">
              {clinic.scheduleCta}
            </p>
            <p className="mt-3 text-lg text-ink-muted">
              O jeito mais rápido de agendar é pelo Instagram{" "}
              <a
                href={clinic.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-nexus-800 underline-offset-4 hover:underline"
              >
                @{clinic.instagramHandle}
              </a>
              . O formulário abaixo é demonstração (sem envio a servidor) — use-o
              quando conectar um serviço de formulário ou API.
            </p>

            <dl className="mt-10 space-y-6 text-sm">
              <div className="flex gap-4">
                <dt className="w-28 shrink-0 font-semibold text-nexus-900">
                  Instagram
                </dt>
                <dd>
                  <a
                    className="inline-flex items-center gap-1.5 font-semibold text-nexus-800 underline-offset-4 hover:underline"
                    href={clinic.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{clinic.instagramHandle}
                    <span className="text-slate-400" aria-hidden>
                      ↗
                    </span>
                  </a>
                  <p className="mt-1 text-ink-muted">
                    Direct para agendamento e dúvidas sobre {clinic.tagline}.
                  </p>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-28 shrink-0 font-semibold text-nexus-900">
                  Endereço
                </dt>
                <dd className="text-ink-muted">
                  Informe o endereço completo da unidade quando tiver o texto
                  final.
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-28 shrink-0 font-semibold text-nexus-900">
                  Telefone
                </dt>
                <dd className="text-ink-muted">
                  Adicione WhatsApp ou telefone aqui — por enquanto, use o
                  Instagram para agendar.
                </dd>
              </div>
            </dl>

            <a
              href={clinic.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-95 sm:w-auto"
            >
              Abrir Instagram
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Nome completo
                  </span>
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-ink outline-none ring-nexus-500/30 transition placeholder:text-slate-400 focus:border-nexus-500 focus:bg-white focus:ring-2"
                    placeholder="Seu nome"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    E-mail
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-ink outline-none ring-nexus-500/30 transition placeholder:text-slate-400 focus:border-nexus-500 focus:bg-white focus:ring-2"
                    placeholder="voce@email.com"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Telefone
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-ink outline-none ring-nexus-500/30 transition placeholder:text-slate-400 focus:border-nexus-500 focus:bg-white focus:ring-2"
                    placeholder="(00) 00000-0000"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Serviço de interesse
                  </span>
                  <select
                    name="specialty"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-ink outline-none ring-nexus-500/30 transition focus:border-nexus-500 focus:bg-white focus:ring-2"
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
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Mensagem
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-ink outline-none ring-nexus-500/30 transition placeholder:text-slate-400 focus:border-nexus-500 focus:bg-white focus:ring-2"
                    placeholder="Melhor horário, convênio, dúvidas…"
                  />
                </label>
              </div>

              {sent ? (
                <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800 ring-1 ring-emerald-200/80">
                  Mensagem registrada apenas neste navegador (demo). Para
                  produção, prefira o direct em @{clinic.instagramHandle} ou
                  conecte um formulário externo.
                </p>
              ) : null}

              <button
                type="submit"
                className="w-full rounded-xl bg-nexus-900 py-3.5 text-sm font-semibold text-white shadow-lg shadow-nexus-900/20 transition hover:bg-nexus-800"
              >
                Enviar pedido de contato (demo)
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
