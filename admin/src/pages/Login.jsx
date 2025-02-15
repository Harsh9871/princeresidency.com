import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token"); 
    if (token) {
      navigate("/unVerified");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
      <div className="w-full max-w-md bg-gray-900 shadow-lg rounded-2xl p-8">
        <h2 className="text-center text-2xl font-bold text-gray-100">Prince Residency Admin Pannel  </h2>

        <form className="mt-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-gray-400 block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full mt-1 px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-400 block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full mt-1 px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
