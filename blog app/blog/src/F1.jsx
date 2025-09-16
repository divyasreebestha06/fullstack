import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home.jsx';
import About from './about.jsx';
import Contact from './contact.jsx'; 
function F1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default F1;
