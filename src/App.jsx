import { useState } from "react";
import "./index.css";
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Cart/>
      <Menu/>
    </>
  );
}

export default App;
