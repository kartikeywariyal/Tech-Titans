import { useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";

function App() {
  const [cart, setCart] = useState([
    { name: "Burger", price: 100, quantity: 1, image: "/images/burger.jpg" },
    { name: "Pizza", price: 700, quantity: 2, image: "/images/pizza.jpg" }
  ]);

  return (
    <>
      <Navbar />
      <Home />
      <Cart cart={cart} setCart={setCart} /> {}
      <Menu />
    </>
  );
}

export default App;
