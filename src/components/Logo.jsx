import { clinic, logoUrl } from "../data/clinic.js";

/**
 * @param {"header" | "footer"} variant
 * @param {"light" | "dark"} tone. "light": sobre hero escuro.
 */
export default function Logo({ variant = "header", tone = "dark" }) {
  const light = tone === "light";
  const isFooter = variant === "footer";

  const box = light
    ? "rounded-2xl px-2.5 py-1.5 ring-1 ring-white/35 bg-white/12 backdrop-blur-md shadow-[0_4px_24px_rgb(0_0_0_0.2)]"
    : "rounded-2xl px-2.5 py-1.5 ring-1 ring-brand-navy/10 bg-brand-white shadow-card";

  const markSize = isFooter ? "h-12 w-12 sm:h-14 sm:w-14" : "h-10 w-10 sm:h-11 sm:w-11";
  const titleSize = isFooter
    ? "text-base sm:text-lg"
    : "text-[0.9rem] sm:text-base";
  const subtitleSize = isFooter ? "text-xs sm:text-sm" : "text-[0.65rem] sm:text-xs";

  const titleClass = light ? "text-white" : "text-brand-navy";
  const subtitleClass = light ? "text-brand-green" : "text-brand-green";

  return (
    <span className={`inline-flex min-w-0 max-w-full items-center gap-2.5 sm:gap-3 ${box}`}>
      <img
        src={logoUrl}
        alt=""
        aria-hidden
        className={`${markSize} shrink-0 object-contain`}
        width={48}
        height={48}
        decoding="async"
        fetchPriority={variant === "header" ? "high" : "auto"}
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`truncate font-display font-semibold tracking-tight ${titleSize} ${titleClass}`}
        >
          W.A.Techevoce
        </span>
        <span
          className={`truncate font-semibold uppercase tracking-[0.14em] ${subtitleSize} ${subtitleClass}`}
        >
          Clínica
        </span>
      </span>
      <span className="sr-only">{clinic.brandLine}</span>
    </span>
  );
}
