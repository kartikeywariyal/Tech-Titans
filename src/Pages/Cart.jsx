import { useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  const discountCodes = {
    SAVE10: 0.10,
    SAVE15: 0.15,
    SAVE20: 0.20,
    SAVE25: 0.25,
    SAVE30: 0.30,
  };

  const updateQuantity = (index, change) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + change);
    setCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const getSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTotalPrice = () => {
    const subtotal = getSubtotal();
    return Math.max(subtotal - discountAmount, 0);
  };
  const handlePayment = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: "rzp_test_TEuqsRAqJY9qh2",
        amount: getTotalPrice() * 100,
        currency: "INR",
        description: "Acme Corp",
        image: "example.com/image/rzp.jpg",
        prefill: {
          email: "gaurav.kumar@example.com",
          contact: "+919900000000",
        },
        handler: function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        modal: {
          ondismiss: function () {
            if (confirm("Are you sure you want to close the form?")) {
              console.log("Checkout form closed by the user");
            } else {
              console.log("Complete the Payment");
            }
          },
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    };
  };

  const applyDiscount = () => {
    if (discountCodes[discountCode]) {
      const discount = getSubtotal() * discountCodes[discountCode];
      setDiscountAmount(discount);
      setDiscountApplied(true);
    } else {
      alert("Invalid discount code!");
      setDiscountApplied(false);
      setDiscountAmount(0);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-400">Your cart is empty! 🛍</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.strMeal}</h3>
                  <p className="text-lg font-bold text-green-300">₹{item.price}</p>
                </div>

                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(index, -1)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md"
                  >
                    -
                  </button>
                  <span className="px-4 text-xl">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(index, 1)}
                    className="px-3 py-1 bg-green-500 text-white rounded-md"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(index)}
                    className="ml-4 px-3 py-1 bg-pink-500 text-white rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md">
            <input
              type="text"
              className="border-none bg-transparent text-white p-3 rounded-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="🎟 Enter discount code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button
              onClick={applyDiscount}
              className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-300 transition mt-3 sm:mt-0"
            >
              Apply
            </button>
          </div>

          <div className="mt-6 text-right">
            <h3 className="text-xl">Subtotal: ₹{getSubtotal()}</h3>
            {discountApplied && (
              <h3 className="text-lg text-green-400">
                Discount ({discountCode}): -₹{discountAmount.toFixed(2)}
              </h3>
            )}
            <h3 className="text-2xl font-bold">Total: ₹{getTotalPrice()}</h3>
            <button
              onClick={handlePayment}
              className="mt-4 px-10 py-3 bg-cyan-400 text-gray-900 text-lg font-semibold rounded-xl shadow-md hover:bg-cyan-300 transition-all transform hover:scale-105"
            >
              🚀 Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
