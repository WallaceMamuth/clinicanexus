import About from "../components/About.jsx";
import Team from "../components/Team.jsx";
import ValuesGrid from "../components/ValuesGrid.jsx";
import CtaBand from "../components/CtaBand.jsx";
import PageHero from "../components/PageHero.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { clinic } from "../data/clinic.js";
import { pageMeta } from "../data/routes.js";

export default function AboutPage() {
  const meta = pageMeta["/sobre"];

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} />
      <PageHero
        eyebrow={clinic.about.eyebrow}
        title={clinic.about.title}
        description="Conheça quem somos, nossos valores e a equipe que cuida de você com proximidade e excelência."
        image={clinic.aboutImage}
        breadcrumb={[
          { label: "Início", to: "/" },
          { label: "Sobre" },
        ]}
      />
      <About showIntro={false} />
      <ValuesGrid variant="light" />
      <Team />
      <CtaBand />
    </>
  );
}
