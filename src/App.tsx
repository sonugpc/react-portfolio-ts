import { useEffect } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SkillsList from "./components/SkillsList";
import "aos/dist/aos.css";
import Aos from "aos";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200, // duration of animations in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <section id="bigFront">
        <Home />
      </section>
      {/* Projects */}

      <Projects />

      <Experience />

      <SkillsList />

      <Contact />
    </>
  );
}

export default App;
