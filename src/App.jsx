// HOOKS
import { Outlet } from 'react-router-dom';

import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contato';

function App() {
  return (
    <div>
      <div className='App'>
        <Outlet />
        <Services />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
