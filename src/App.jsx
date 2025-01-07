// PAGES
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contato';
import Home from './pages/Home';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <div className='App'>
        <Home />
        <Services />
        <About />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
