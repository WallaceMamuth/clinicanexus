import { clinic, logoUrl } from "../data/clinic.js";

/**
 * @param {"header" | "footer"} variant
 * @param {"light" | "dark"} tone. "light": sobre hero escuro (vidro claro + sombra no logo).
 */
export default function Logo({ variant = "header", tone = "dark" }) {
  const light = tone === "light";

  const box = light
    ? "rounded-2xl px-1 py-0.5 ring-1 ring-white/40 bg-white/12 backdrop-blur-md shadow-[0_4px_24px_rgb(0_0_0_0.2)]"
    : variant === "header"
      ? "rounded-2xl px-1.5 py-0.5 ring-1 ring-brand-navy/10 bg-brand-white shadow-card"
      : "rounded-2xl px-3 py-2 ring-1 ring-brand-navy/10 bg-brand-white shadow-card";

  const img = light
    ? "h-[50px] w-auto max-h-[50px] max-w-[4.5rem] object-contain object-left sm:h-[54px] sm:max-h-[54px] sm:max-w-[5.5rem] drop-shadow-[0_2px_14px_rgb(0_0_0_0.45)]"
    : variant === "header"
      ? "h-[48px] w-auto max-h-[48px] max-w-[4.25rem] object-contain object-left sm:h-[52px] sm:max-h-[52px] sm:max-w-[5rem]"
      : "h-[5.5rem] w-auto max-h-[5.5rem] max-w-[min(100%,12rem)] object-contain object-center sm:h-24 sm:max-h-24 sm:max-w-[14rem] md:h-28 md:max-h-28 md:max-w-[16rem]";

  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${box}`}>
      <img
        src={logoUrl}
        alt={clinic.brandLine}
        className={img}
        width={1024}
        height={1536}
        decoding="async"
        fetchPriority={variant === "header" ? "high" : "auto"}
      />
    </span>
  );
}
