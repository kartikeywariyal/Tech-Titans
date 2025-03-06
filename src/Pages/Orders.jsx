import { useState, useEffect } from 'react';

const OrderItem = ({ item }) => (
  <div className="p-4 bg-gray-700 rounded-lg flex items-center">
    <img
      src={item.strMealThumb}
      alt={item.strMeal}
      className="w-16 h-16 object-cover rounded-lg mr-4"
    />
    <div>
      <h4 className="font-semibold">{item.strMeal}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ₹{item.price * item.quantity}</p>
    </div>
  </div>
);

const Orders = () => {
  const { orders } = useOrders();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <p className="text-center text-lg text-gray-400">Loading orders...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">👨🍳 Customer Orders</h2>
      
      {orders.length > 0 ? orders.map(({ id, status, timestamp, paymentId, total, items }) => (
        <div key={id} className="p-6 mb-4 bg-gray-800 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold">
                Order #{id} - {status}
              </h3>
              <p className="text-gray-400">{new Date(timestamp).toLocaleString()}</p>
              <p className="text-green-300">Payment ID: {paymentId}</p>
            </div>
            <span className="text-2xl font-bold">₹{total}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
          </div>
        </div>
      )) : (
        <p className="text-center text-lg text-gray-400">No orders yet! 👀</p>
      )}
    </div>
  );
};

export default Orders;