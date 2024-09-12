import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Landing from './pages/Landing';
import Project from './pages/Project';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
