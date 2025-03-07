import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginChef = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      console.log({ email, password });

      
      const response = await axios.post("http://localhost:5000/api/auth/login-chef", {
        email,
        password,
      });

      // If login is successful
      console.log(response.data);
      setEmail("");
      setPassword("");
      navigate("/chefDashboard");
    } catch (err) {
      // Handle errors (invalid credentials, etc.)
      if (err.response) {
        setError(err.response.data.message); // Display error message from backend
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back, Chef!</h2>

        {/* Display error message if there's any */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={submitHandler} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg text-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg text-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition duration-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-4">
          New here?{" "}
          <Link to="/signup-chef" className="text-blue-500 hover:underline">
            Create an account
          </Link>
        </p>

        {/* Customer Login Button */}
        <Link
          to="/login"
          className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold p-3 rounded-lg mt-6 transition duration-300"
        >
          Login as Customer
        </Link>
      </div>
    </div>
  );
};

export default LoginChef;
