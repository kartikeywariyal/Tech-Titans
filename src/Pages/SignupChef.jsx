import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupChef = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Create Your Account
        </h2>

        <form onSubmit={submitHandler} className="space-y-5">
          {/* Name Input Fields */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-1/2 p-3 border rounded-lg text-lg bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-blue-400 dark:text-white"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-1/2 p-3 border rounded-lg text-lg bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-blue-400 dark:text-white"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg text-lg bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-blue-400 dark:text-white"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg text-lg bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-blue-400 dark:text-white"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Social Signup Options */}
        <div className="mt-6 space-y-3">
          <button className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold p-3 rounded-lg transition duration-300">
            Sign Up with Google
          </button>
          <button className="w-full flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold p-3 rounded-lg transition duration-300">
            Sign Up with Facebook
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          Already have an account?{" "}
          <Link to="/login-chef" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>

        {/* Privacy Notice */}
        <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-4">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default SignupChef;
