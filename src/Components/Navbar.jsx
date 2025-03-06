import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">FoodApp</Link>
      <div>
        <Link to="/menu" className="px-4">Menu</Link>
        <Link to="/cart" className="px-4">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
