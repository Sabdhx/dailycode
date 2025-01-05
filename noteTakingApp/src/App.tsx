
import './App.css'
import { BrowserRouter, Form, Route, Routes, useFormAction } from 'react-router-dom'
import Home from './Components/Home'
import NewNote from './Form/Form'
import SinglePage from './Components/SinglePage'
import AddingNewNote from './Components/AddingNewNote'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<AddingNewNote/>}/>

      <Route path="/:id" >
      <Route index element={<SinglePage/>}/>
      <Route path='edit' element={<SinglePage/> }/>

      </Route>
      <Route path='/' element={<Home/> }/>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
