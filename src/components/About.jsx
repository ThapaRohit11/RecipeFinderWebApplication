import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div className="bg-red-500 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          About Recipe Finder
        </h1>
        <p className="text-lg text-white mt-4 max-w-2xl">
          Your go-to platform to explore, discover, and share delicious recipes from around the world.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Recipe Finder, we believe that food brings people together. Our mission is to make it easier for home cooks and culinary enthusiasts to find recipes that inspire them, try new dishes, and create memorable meals. We provide a platform to discover a variety of recipes tailored to your taste and share your own creations with the world.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why Choose Recipe Finder?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Recipe Finder isn’t just about finding recipes; it’s about creating a community of passionate cooks. Our easy-to-use platform is designed to help you discover the perfect recipe for any occasion, experiment with ingredients, and share your culinary creations. Whether you're a beginner or an experienced chef, Recipe Finder makes cooking fun and exciting!
        </p>
        
        <div className="flex justify-center gap-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Diverse Recipe Collection</h3>
            <p className="text-gray-600">A wide range of recipes from various cultures and cuisines.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Interactive Features</h3>
            <p className="text-gray-600">Share your recipes, save your favorites, and create your own cookbook.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-12 bg-red-500 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Join Us in the Kitchen!
        </h2>
        <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
          Ready to explore new recipes? Get started today and discover delicious dishes from all over the world.
        </p>
        <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300">
          Start Exploring Recipes
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
