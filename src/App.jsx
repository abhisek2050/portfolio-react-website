import React from 'react'
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

import './App.css'

function App() {
 

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<Navigate to= '/'/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
