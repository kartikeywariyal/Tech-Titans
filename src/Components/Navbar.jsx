import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
  };

  return (
    <nav className="p-4 bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center">
          <span className="text-2xl mr-2">🍽</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            QuickBite
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/menu" className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 hover:from-red-500 hover:to-yellow-400 transition-all duration-300">Menu</Link>
          <Link to="/about" className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 hover:from-red-500 hover:to-yellow-400 transition-all duration-300">About</Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 hover:from-red-500 hover:to-yellow-400 transition-all duration-300">
            <span className="mr-2">🛒</span>
            Cart
          </Link>

          {isLoggedIn ? (
            // Show avatar with dropdown logout option
            <div className="relative group">
              <button className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300">
              <img 
  src="https://api.dicebear.com/7.x/adventurer/svg?seed=Suraj" 
  alt="User Avatar" 
  className="w-10 h-10 rounded-full border-2 border-white"
/>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white text-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={logoutHandler}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-gray-900 transition-all duration-300">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4 flex flex-col shadow-lg">
          <Link to="/menu" className="py-2 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Menu</Link>
          <Link to="/about" className="py-2 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>About</Link>
          <div className="border-t border-gray-600 my-2"></div>
          <Link to="/cart" className="py-2 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
            <span className="mr-2">🛒</span>
            Cart
          </Link>

          {isLoggedIn ? (
            <button onClick={logoutHandler} className="py-2 text-left hover:text-yellow-400">Logout</button>
          ) : (
            <Link to="/login" className="py-2 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
