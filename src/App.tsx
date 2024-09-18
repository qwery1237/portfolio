import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Landing from './pages/Landing';
import Project from './pages/Project';
import Footer from './components/Footer';
import { useRef } from 'react';
function App() {
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Header
        landingRef={landingRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Landing ref={landingRef} aboutRef={aboutRef} />
      <About ref={aboutRef} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
