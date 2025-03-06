import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-yellow-400 to-red-500">
    <motion.h1 className="text-5xl font-bold text-white" animate={{ y: [10, 0], opacity: [0, 1] }} transition={{ duration: 1 }}>
      Welcome to Food Court
    </motion.h1>
    <Link to="/menu" className="mt-6 px-6 py-3 bg-white text-black rounded-full shadow-lg hover:scale-105 transition">
      Order Now
    </Link>
  </div>
);

export default Home;
