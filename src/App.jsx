//SCROLL
import { ReactLenis } from 'lenis/react';
// PAGES
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contato/Contato';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Ebook from './pages/Ebook/Ebook';
import Avaliacoes from './pages/Avaliacoes/Avaliacoes';

function App() {
  return (
    <ReactLenis root>
      <Home />
      <Services />
      <Ebook />
      <About />
      <Avaliacoes />
      <Contact />
      <Footer />
    </ReactLenis>
  );
}

export default App;
