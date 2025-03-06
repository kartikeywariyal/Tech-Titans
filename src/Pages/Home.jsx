import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

const backgroundImages = [
  "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://img.freepik.com/free-photo/top-view-meat-sauce-soup-with-potatoes-greens-dark-floor_140725-76779.jpg?t=st=1741258470~exp=1741262070~hmac=5ca8bdf145c1a181281a2c53bfcb867bff1f9e90b110a6bd2b1a282f0a75fc29&w=1380",
  "https://img.freepik.com/free-photo/top-view-tasty-meat-soup-with-potatoes-seasonings-dark-desk_140725-76945.jpg?t=st=1741258571~exp=1741262171~hmac=6c91000a2920706d064e969002f9a7f2f9aeb59a974d271fbabea3f76154ce04&w=1380"
];

const Greeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning!";
  if (hour < 18) return "Good Afternoon!";
  return "Good Evening!";
};

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(
      backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
    );
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center text-center p-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 bg-white bg-opacity-0 p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <motion.h2
          className="text-2xl font-semibold text-white mb-2 drop-shadow-lg"
          animate={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          {Greeting()}
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
          animate={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          Discover the best food & drinks!
        </motion.h1>

        <div className="relative w-full max-w-lg mx-auto mb-6">
          <input
            type="text"
            placeholder="Search for restaurants or dishes..."
            className="w-full p-4 pl-12 rounded-full shadow-lg text-lg text-gray-800 border-2 border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <FiSearch className="absolute left-4 top-4 text-orange-500 text-xl" />
        </div>

        <Link
          to="/menu"
          className="mt-8 px-6 py-3 bg-orange-500 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105"
        >
          Explore Menu
        </Link>
      </div>
    </div>
  );
};

export default Home;
