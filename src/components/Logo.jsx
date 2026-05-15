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
      ? "rounded-2xl px-2 py-1 ring-1 ring-brand-navy/10 bg-brand-white shadow-card"
      : "rounded-2xl px-2 py-1.5 ring-1 ring-brand-navy/10 bg-brand-white shadow-card";

  const img = light
    ? "h-[50px] w-auto max-h-[52px] object-contain object-left sm:h-[54px] sm:max-h-[54px] drop-shadow-[0_2px_14px_rgb(0_0_0_0.45)]"
    : variant === "header"
      ? "h-10 w-auto max-h-[42px] object-contain object-left sm:h-11 sm:max-h-[44px]"
      : "h-9 w-auto max-h-10 object-contain object-left sm:h-10";

  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${box}`}>
      <img
        src={logoUrl}
        alt={clinic.brandLine}
        className={img}
        width={220}
        height={72}
        decoding="async"
        fetchPriority={variant === "header" ? "high" : "auto"}
      />
    </span>
  );
}
