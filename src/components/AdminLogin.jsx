import React from "react";
import Navbar from "./Navbar";

function AdminLogin() {
  return (
    <>
    <Navbar/>
    <div
      className="h-screen bg-cover bg-center flex justify-center"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,office')" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition">
          Login
        </button>
      </div>
    </div>
    </>
  );
}

export default AdminLogin;
