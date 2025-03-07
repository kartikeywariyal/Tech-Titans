import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { 
  FaUtensils, 
  FaStar, 
  FaPhoneAlt, 
  FaHeart, 
  FaQuoteLeft,
  FaRegEnvelope
} from "react-icons/fa";

const backgroundImages = [
  "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
  "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
  "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg"
];

const featuredDishes = [
  {
    id: 1,
    name: "Gourmet Burger",
    price: "₹80",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    rating: 4.9
  },
  {
    id: 2,
    name: "Truffle Pasta",
    price: "₹240",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    rating: 4.7
  },
  {
    id: 3,
    name: "Sushi Platter",
    price: "₹150",
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
    rating: 4.8
  }
];

const testimonials = [
  {
    id: 1,
    text: "The best dining experience I've ever had! Every dish was a masterpiece.",
    author: "Michael Smith",
    role: "Food Blogger"
  },
  {
    id: 2,
    text: "Incredible flavors and impeccable service. Will definitely return!",
    author: "Pat Johnson",
    role: "Restaurant Owner"
  },
];

const Greeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning!";
  if (hour < 18) return "Good Afternoon!";
  return "Good Evening!";
};

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center text-center relative overflow-hidden">
      {/* Hero Section */}
      <div className="w-full h-screen absolute">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Main Content */}
        <div 
          className="bg-white bg-opacity-10 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-2xl backdrop-blur-lg mt-20 mx-4"
        >
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2 drop-shadow-lg">
            {Greeting()}
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Enjoy amazing food !
          </h1>

         

          <div className="flex gap-4 justify-center">
            <Link
              to="/menu"
              className="mt-4 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Explore Menu
            </Link>
          </div>
        </div>

        {}
        <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-black text-center max-w-6xl px-4">
          {[
            { icon: <FaUtensils />, title: "Premium Cuisine", description: "Taste the best flavors from around the world.", color: "orange-300" },
            { icon: <FaStar />, title: "Top Rated", description: "Only the best restaurants & chefs selected.", color: "yellow-400" },
            { icon: <FaPhoneAlt />, title: "Easy Ordering", description: "Order your favorite meals in one click.", color: "green-400" },
            { icon: <FaHeart />, title: "Customer Love", description: "Join thousands of happy food lovers.", color: "red-400" }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white bg-opacity-20 rounded-2xl shadow-lg backdrop-blur-md hover:bg-opacity-30 transition-all duration-300"
            >
              <div className={`text-4xl mb-3 text-${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>

        {}
        <section className="my-20 w-full max-w-5xl px-10">
          <h2 className="text-3xl font-bold text-color mb-8">Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div 
                key={dish.id}
                className="bg-white rounded-xl shadow-2xl overflow-hidden"
              >
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">{dish.name}</h3>
                    <span className="text-yellow-500 font-semibold">{dish.price}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>{dish.rating}</span>
                    <span className="mx-2">|</span>
                    <span className="text-gray-600">15 reviews</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="my-20 w-full bg-black bg-opacity-40 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-black mb-12 text-center">What People Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-lg"
                >
                  <FaQuoteLeft className="text-yellow-800 text-2xl mb-2" />
                  <p className="text-black px-19 mb-4 italic">"{testimonial.text}"</p>
                  <div className="text-red-800 px-10 font-bold">{testimonial.author}</div>
                  <div className="text-sm px-8 text-black-300">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>  
      </div>
    </div>
  );
};

export default Home;
