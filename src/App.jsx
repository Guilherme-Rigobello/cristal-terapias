// PAGES
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contato';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <div className='App'>
        <Home />
        <Services />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
