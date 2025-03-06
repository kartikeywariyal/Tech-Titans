import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import { useState } from "react";
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import LoginChef from "./Pages/LoginChef";
import SignupChef from "./Pages/SignupChef";
import About from "./Pages/About";

function App() {
  
  const [cart, setCart] = useState([
    { name: "Burger", price: 100, quantity: 1, image: "/images/burger.jpg" },
    { name: "Pizza", price: 700, quantity: 2, image: "/images/pizza.jpg" }
  ]);
  
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/> }/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login-chef" element={<LoginChef/>}/>
        <Route path="/signup-chef" element={<SignupChef/>}/> 
        <Route path="/about" element={<About/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
