import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Highlights from "./components/Highlights.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-dvh overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
