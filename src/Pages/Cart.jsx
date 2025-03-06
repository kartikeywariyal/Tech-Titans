import { useState } from "react";

const Cart = ({ cart, setCart }) => {
  const updateQuantity = (index, change) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + change);
    setCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="p-4 bg-gray-100 shadow-md rounded-md flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-700">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => updateQuantity(index, -1)} className="px-2 py-1 bg-gray-300 rounded-md">-</button>
                  <span className="px-3">{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, 1)} className="px-2 py-1 bg-gray-300 rounded-md">+</button>
                  <button onClick={() => removeItem(index)} className="ml-4 px-2 py-1 bg-red-500 text-white rounded-md">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <h3 className="text-xl font-bold">Total: ₹{getTotalPrice()}</h3>
            <button className="mt-3 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;