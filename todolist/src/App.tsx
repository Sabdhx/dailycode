import React from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from './pages/Data';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/data' element={<Data/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App