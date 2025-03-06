import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Menu = ({ cart, setCart }) => {
  const [menuItem, setMenuItem] = useState([]);
  const [load, setLoad] = useState(true);

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
    alert(`${item.strMeal} added to cart!`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
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
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-3">{item.strMeal}</h3>
              <p className="text-lg font-bold">₹{Math.floor(Math.random() * 300) + 100}</p>
              <button
                onClick={() => addToCart(item)}
                className="w-full mt-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
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
