import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import GlobalPresence from './Pages/GlobalPresence';
import Products from './Pages/Products';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/global-presence" element={<GlobalPresence />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
