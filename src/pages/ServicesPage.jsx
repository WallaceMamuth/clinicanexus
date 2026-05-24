import Services from "../components/Services.jsx";
import CareSteps from "../components/CareSteps.jsx";
import CtaBand from "../components/CtaBand.jsx";
import PageHero from "../components/PageHero.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { clinic } from "../data/clinic.js";
import { pageMeta } from "../data/routes.js";

export default function ServicesPage() {
  const meta = pageMeta["/servicos"];
  const heroImage = clinic.heroSlides[0]?.image;

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} />
      <PageHero
        eyebrow="Especialidades"
        title="Serviços pensados para o seu cuidado por inteiro"
        description="Da prevenção à performance, oferecemos um portfólio integrado para você resolver saúde, estética e movimento com a mesma excelência."
        image={heroImage}
        breadcrumb={[
          { label: "Início", to: "/" },
          { label: "Serviços" },
        ]}
      />
      <CareSteps />
      <Services showIntro={false} />
      <CtaBand />
    </>
  );
}
