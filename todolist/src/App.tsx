import React from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from './components/Card/Cards';
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