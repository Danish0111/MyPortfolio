import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import Particles from './Components/Particles';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };

    handleResize(); // Set initially
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div>
        <Navbar />

        {isMobile ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/education" element={<Education />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        ) : (
          <>
            {/* Sections with matching IDs */}
            <section id="home">
              <Home />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            {/* <section id="education">
              <Education />
            </section> */}
            <section id="contact">
              <Contact />
            </section>
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
