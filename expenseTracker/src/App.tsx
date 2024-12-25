import "./App.css";
import Catagories from "./components/Catagories";
import Expenses from "./components/Expenses";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Dashboard/>}/>
          <Route  path='/Expenses' element={<Expenses/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
