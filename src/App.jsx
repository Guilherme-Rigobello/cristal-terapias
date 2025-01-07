// PAGES
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contato';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Ebook from './pages/Ebook';

function App() {
  return (
    <div>
      <div className='App'>
        <Home />
        <Services />
        <Ebook/>
        <About />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
