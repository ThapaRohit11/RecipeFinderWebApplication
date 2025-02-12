import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AdminLogin() {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-red-500 flex items-center justify-center flex-col">
        {/* Slogans */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">Welcome to the Admin Portal</h1>
          <p className="text-xl text-white mt-2">Secure Login to Manage Your Dashboard</p>
        </div>
        
        {/* Login Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg w-128 text-center mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition">
            Login
          </button>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default AdminLogin;
