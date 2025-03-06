<<<<<<< HEAD
import { useState, useEffect } from "react";
import {motion} from 'framer-motion';

const Menu = ({cart, setCart}) => {
  const [menuItem, setMenuItem] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((res) => res.json())
    .then((data) => {
      setMenuItem(data.meals || []);
      setLoad(false);
    })
    .catch((err) => {
        console.log(err);
        setLoad(false);
    })
  }, [])

  const addToCart = (item) => setCart([...cart, item]);

  return (
    <>
        <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Our Delicious Menu
        </h2>

      {load ? (
        <p>Loading menu items...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItem.map((item) => (
            <div key={item.idMeal} className="p-4 bg-white shadow-lg rounded-lg text-center">
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-3">{item.strMeal}</h3>
              <p className="text-lg font-bold">₹{Math.floor(Math.random() * 300) + 100}</p> {/* Random price */}
              <button
                onClick={() => addToCart(item)} 
                  className="w-full mt-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
                >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
=======
import { useState } from "react";

const menuItems = [
  { id: 1, name: "Burger", price: 120, image: "https://tse4.mm.bing.net/th?id=OIG3.k_aUxogvEZCye7qHTnAN&pid=ImgGn" },
  { id: 2, name: "Pizza", price: 250, image: "https://tse4.mm.bing.net/th?id=OIG3.rhdnObyhG4jUZGksSNjU&pid=ImgGn" },
  { id: 3, name: "Pasta", price: 180, image: "https://tse1.mm.bing.net/th?id=OIG2.wns8W9mpN62d2QGPPrZT&pid=ImgGn" },
];
const Menu = ({ cart, setCart }) => {
  const addToCart = (item) => {
    const itemExists = cart.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-6 text-yellow-400">🍔 Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="p-4 bg-gray-800 shadow-lg rounded-lg text-center">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
            <p className="text-lg font-bold text-green-300">₹{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
>>>>>>> 61301b466182fbadc4bf2b03b83f0029d2ed567c
    </div>
  );
};

export default Menu;
