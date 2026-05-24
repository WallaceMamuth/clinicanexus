import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  children,
}) {
  const alignClass =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <Reveal className={`${alignClass} ${className}`.trim()}>
      {eyebrow ? (
        <p className="section-eyebrow">
          <span className="section-eyebrow-line" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-fluid-section-title mt-4 font-display font-semibold tracking-tight text-brand-navy text-balance">
        {title}
      </h2>
      {description ? (
        <p className="text-fluid-lead mt-4 text-ink-muted">{description}</p>
      ) : null}
      {children}
    </Reveal>
  );
}

export function PageBreadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-white/65">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 ? (
              <span className="text-white/35" aria-hidden>
                /
              </span>
            ) : null}
            {item.to ? (
              <Link
                to={item.to}
                className="transition hover:text-brand-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-white/90" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
