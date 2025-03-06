import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";

function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
