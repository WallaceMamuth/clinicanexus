import Reveal from "./Reveal.jsx";
import { PageBreadcrumb } from "./SectionHeader.jsx";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb = [],
  children,
}) {
  return (
    <section className="relative isolate min-h-[min(52vh,28rem)] overflow-hidden bg-brand-navy pt-[calc(4rem+env(safe-area-inset-top))] text-brand-white sm:min-h-[min(58vh,32rem)]">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-brand-navy/95 via-brand-navy/88 to-brand-navy/72"
            aria-hidden
          />
        </>
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_-15%,rgb(102_194_58/0.28),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_95%_110%,rgb(255_255_255/0.07),transparent_42%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgb(255 255 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />
        </>
      )}

      <div className="container-site relative flex min-h-[inherit] flex-col justify-end section-y !pb-12 sm:!pb-16 lg:!pb-20">
        <Reveal className="max-w-3xl">
          {breadcrumb.length > 0 ? <PageBreadcrumb items={breadcrumb} /> : null}
          {eyebrow ? (
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green backdrop-blur-sm">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-fluid-hero mt-4 font-display font-semibold tracking-tight text-balance">
            {title}
          </h1>
          {description ? (
            <p className="text-fluid-lead mt-5 max-w-2xl text-white/88">{description}</p>
          ) : null}
          {children}
        </Reveal>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-brand-white to-transparent"
        aria-hidden
      />
    </section>
  );
}
