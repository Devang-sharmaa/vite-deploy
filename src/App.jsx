import React from 'react';
import { Route, Routes, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </HashRouter>
    </main>
  );
}

export default App;


