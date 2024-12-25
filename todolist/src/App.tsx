import React, { useState } from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from './pages/Data';
import Cards from './components/Cards';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/data' element={<Cards/>}/>

      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App