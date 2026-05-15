import { clinic, logoUrl } from "../data/clinic.js";

export default function Logo({ variant = "header" }) {
  const box =
    variant === "header"
      ? "rounded-2xl px-2.5 py-2 sm:px-3 sm:py-2.5"
      : "rounded-2xl px-2.5 py-2";
  const img =
    variant === "header"
      ? "h-9 w-auto max-h-10 object-contain object-left sm:h-10 sm:max-h-11"
      : "h-9 w-auto max-h-10 object-contain object-left sm:h-10";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center bg-brand-white shadow-card ring-1 ring-brand-navy/10 ${box}`}
    >
      <img
        src={logoUrl}
        alt={`${clinic.brandLine}`}
        className={img}
        width={180}
        height={60}
        decoding="async"
        fetchPriority={variant === "header" ? "high" : "auto"}
      />
    </span>
  );
}
