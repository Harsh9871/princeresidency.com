import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import About from './pages/About';
import ContactForm from './pages/ContactForm';
import Explore from './pages/Explore';
import Gallery from './pages/Gallery';
import Rules from './pages/Rules';
import TermsAndCondition from './pages/TermsAndCondition';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutUs" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="*" element={<Notfound />} /> */}
      </Routes>
    </>
  );
}

export default App;
