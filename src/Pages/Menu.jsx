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
    </div>
  );
};

export default Menu;
