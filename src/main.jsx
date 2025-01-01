// REACT
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// ELEMENTS
import './index.css';
import App from './App.jsx';
// PAGES
import Home from './pages/Home.jsx';
import Contato from './pages/Contato.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
