import './App.css';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Header from './components/Header';
import Landing from './pages/Landing';
import Project from './pages/Project';
import Footer from './components/Footer';
import { useRef } from 'react';
function App() {
  const landingRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Header
        landingRef={landingRef}
        workRef={workRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Landing ref={landingRef} workRef={workRef} />
      <Work ref={workRef} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
