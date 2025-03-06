import { Link } from "react-router-dom";  

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">FoodApp</Link>
            <Link to="/menu" className="mr-4">Menu</Link>
            <Link to="/cart">Cart</Link>
      <div>
      </div>
    </nav>
  );
};

export default Navbar;
