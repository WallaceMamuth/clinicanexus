import { clinic } from "../data/clinic.js";
import Reveal from "./Reveal.jsx";

const stats = [
  { value: "8+", label: "Especialidades" },
  { value: "360°", label: "Cuidado integral" },
  { value: "100%", label: "Acolhimento" },
  { value: clinic.address.split(",")[0], label: "Saquarema, RJ" },
];

export default function HomeStats() {
  return (
    <section className="relative z-10 -mt-10 sm:-mt-14" aria-label="Destaques da clínica">
      <div className="container-site">
        <Reveal>
          <ul className="grid min-w-0 grid-cols-2 gap-3 rounded-[1.5rem] border border-brand-navy/8 bg-brand-white/95 p-4 shadow-card backdrop-blur-md sm:grid-cols-4 sm:gap-4 sm:p-5 lg:rounded-[1.75rem] lg:p-6">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="flex min-w-0 flex-col items-center justify-center rounded-2xl bg-brand-mist/80 px-3 py-4 text-center sm:py-5"
              >
                <p className="text-fluid-stat font-display font-semibold tabular-nums text-brand-navy">
                  {stat.value}
                </p>
                <p className="text-fluid-stat-label mt-1 font-medium text-ink-muted">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
