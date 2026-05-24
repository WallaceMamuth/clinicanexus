import Contact from "../components/Contact.jsx";
import ContactChannels from "../components/ContactChannels.jsx";
import PageHero from "../components/PageHero.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { clinic } from "../data/clinic.js";
import { pageMeta } from "../data/routes.js";

export default function ContactPage() {
  const meta = pageMeta["/contato"];
  const heroImage = clinic.heroSlides[1]?.image ?? clinic.aboutImage;

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} />
      <PageHero
        eyebrow="Contato"
        title={`Fale com a ${clinic.brandLine}`}
        description={clinic.scheduleCta}
        image={heroImage}
        breadcrumb={[
          { label: "Início", to: "/" },
          { label: "Contato" },
        ]}
      />
      <ContactChannels />
      <Contact showIntro={false} />
    </>
  );
}
