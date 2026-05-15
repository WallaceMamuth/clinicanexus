import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Benefits from "./components/Benefits.jsx";
import Team from "./components/Team.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CtaBand from "./components/CtaBand.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";

export default function App() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-brand-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Team />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
