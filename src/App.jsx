import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import VantaWavesBackground from "./components/VantaWavesBackground";
// import StatsOverlay from "./components/stats";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 sm:text-neutral-200 antialiased selection:bg-cyan-600 selection:text-cyan-900">
      {/* רקע עם אפקט גלים וגרדיאנט */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full scroll-smooth">
        <VantaWavesBackground />
      </div>

      {/* תוכן האתר */}
      <div className="container mx-auto px-8">
        {/* <StatsOverlay /> */}
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
