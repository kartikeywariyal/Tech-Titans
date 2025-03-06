const menuItems = [
  { id: 1, name: "Burger", price: 120, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Pizza", price: 250, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Pasta", price: 180, image: "https://via.placeholder.com/150" },
];

const Menu = ({ cart, setCart }) => {
  const addToCart = (item) => setCart([...cart, item]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow-lg rounded-lg text-center">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
            <p className="text-lg font-bold">${item.price}</p>
            <button onClick={() => addToCart(item)} className="mt-3 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

