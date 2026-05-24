import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: clinic.phoneWhatsapp,
    href: clinic.whatsappUrl,
    external: true,
    accent: "bg-brand-green/12 text-brand-green ring-brand-green/20",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: clinic.phoneFixed,
    href: clinic.phoneFixedHref,
    accent: "bg-brand-navy/8 text-brand-navy ring-brand-navy/12",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: clinic.email,
    href: clinic.emailHref,
    accent: "bg-brand-navy/8 text-brand-navy ring-brand-navy/12",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: clinic.address,
    href: clinic.mapsUrl,
    external: true,
    accent: "bg-brand-green/12 text-brand-green ring-brand-green/20",
  },
];

export default function ContactChannels() {
  return (
    <section className="relative border-b border-brand-navy/8 bg-brand-white py-10 sm:py-12">
      <div className="container-site">
        <div className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            const Tag = "a";
            const props = channel.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Reveal key={channel.label} delay={i * 0.05}>
                <Tag
                  href={channel.href}
                  {...props}
                  className="group flex h-full min-w-0 flex-col rounded-[1.25rem] border border-brand-navy/8 bg-brand-mist/40 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-brand-green/25 hover:bg-brand-white hover:shadow-card sm:p-6"
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${channel.accent} transition group-hover:scale-105`}
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-navy/50">
                    {channel.label}
                  </p>
                  <p className="mt-1 break-words font-display text-sm font-semibold text-brand-navy sm:text-base">
                    {channel.value}
                  </p>
                </Tag>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex min-h-[48px] items-center justify-center gap-2 px-7"
          >
            Falar no WhatsApp
          </a>
          <Link to="/servicos" className="btn-secondary inline-flex min-h-[48px] items-center justify-center gap-2 px-7">
            Ver especialidades
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
