import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store error message
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Handle successful login
      console.log(response.data);
      setEmail("");
      setPassword("");
      navigate("/Menu"); // Navigate to Menu after successful login

    } catch (error) {
      // Handle error (invalid credentials or email not found)
      if (error.response) {
        setError(error.response.data.message); // Display error message from server
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back!</h2>

        {/* Display error message */}
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
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-4">
          New here?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Create an account
          </Link>
        </p>

        {/* Captain Login Button */}
        <Link
          to="/login-chef"
          className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold p-3 rounded-lg mt-6 transition duration-300"
        >
          Login in as Chef
        </Link>
      </div>
    </div>
  );
};

export default Login;
