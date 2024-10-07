import React from 'react'
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact';
import About from './pages/About'

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    
    </BrowserRouter>
    </main>
  )
}

export default App
