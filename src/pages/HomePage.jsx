import Hero from "../components/Hero.jsx";
import HomeStats from "../components/HomeStats.jsx";
import HomeExplore from "../components/HomeExplore.jsx";
import Benefits from "../components/Benefits.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CtaBand from "../components/CtaBand.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { pageMeta } from "../data/routes.js";

export default function HomePage() {
  const meta = pageMeta["/"];

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} />
      <Hero />
      <HomeStats />
      <HomeExplore />
      <Benefits />
      <Testimonials />
      <CtaBand />
    </>
  );
}
