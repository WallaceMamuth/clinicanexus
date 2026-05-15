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
    <div className="min-h-dvh w-full min-w-0 bg-brand-white">
      <Header />
      {/* overflow-x só aqui: clip em html/body recorta position:fixed do header/WhatsApp */}
      <div className="min-w-0 overflow-x-clip">
        <main className="relative w-full min-w-0">
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
      </div>
      <FloatingWhatsApp />
    </div>
  );
}
