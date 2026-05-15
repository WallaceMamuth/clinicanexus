import { clinic, logoUrl } from "../data/clinic.js";

/**
 * Logo oficial (fundo preto no arquivo). `variant` ajusta altura no header/footer.
 */
export default function Logo({ variant = "header" }) {
  const box =
    variant === "header"
      ? "rounded-xl px-2 py-1.5 sm:px-2.5 sm:py-2"
      : "rounded-xl px-2 py-1.5";
  const img =
    variant === "header"
      ? "h-9 w-auto max-h-10 object-contain object-left sm:h-10 sm:max-h-11"
      : "h-9 w-auto max-h-10 object-contain object-left sm:h-10";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center bg-black shadow-md ring-1 ring-white/10 ${box}`}
    >
      <img
        src={logoUrl}
        alt={`${clinic.name}: ${clinic.tagline}`}
        className={img}
        width={160}
        height={56}
        decoding="async"
        fetchPriority={variant === "header" ? "high" : "auto"}
      />
    </span>
  );
}
