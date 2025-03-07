import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Menu = ({ cart, setCart }) => {
  const [menuItem, setMenuItem] = useState([]);
  const [load, setLoad] = useState(true);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setMenuItem(data.meals || []);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
      });
  }, []);

  const addToCart = (item) => {

    const price = Math.floor(Math.random() * 300) + 100; 

    const isMealExist = cart.find((cartMeal) => cartMeal.idMeal === item.idMeal);
    if (isMealExist) {
      setCart(cart.map((cartMeal) => 
        cartMeal.idMeal === item.idMeal ? { ...cartMeal, quantity: cartMeal.quantity + 1 } : cartMeal
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1, price }]);
    }
    
    // **Show popup when item is added**
    // alert(`${item.strMeal} added to cart!`);
      // **Show notification**
  setNotification(`${item.strMeal} added to cart!`);

  // **Hide after 3 seconds**
  setTimeout(() => setNotification(null), 2000);
  };

  return (

    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-16 px-4 sm:px-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Our Delicious Menu
      </h2>
      {load ? (
        <p className="text-center text-lg text-gray-600">Loading menu items...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItem.map((item) => (
            <motion.div
              key={item.idMeal}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-4 bg-white shadow-lg rounded-lg text-center"
            >
              {notification && (
  <div className="fixed top-10 right-1 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg transition-all duration-300 z-50">
    {notification}
  </div>
)}
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-3">{item.strMeal}</h3>
              <p className="text-lg font-bold">₹{Math.floor(Math.random() * 300) + 100}</p>
              <button
                onClick={() => addToCart(item)}
                className="w-full mt-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
              >
                Add to Cart
              </button>
            </motion.div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
