import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/contact";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-600 selection:text-cyan-900">
      {/* רקע קבוע עם גרדיאנט סגול עדין */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full scroll-smooth">
        <div className="absolute top-0 z-[-2] h-screen w-screen blackBg" />
      </div>

      {/* תוכן האתר */}
      <div className="container mx-auto px-8">
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
