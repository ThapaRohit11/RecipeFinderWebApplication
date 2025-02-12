import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleExploreClick = () => {
    navigate("/recipes"); // Navigate to /recipes when button is clicked
  };
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-orange-500 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 py-16">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Discover Delicious Recipes
          </h1>
          <p className="text-lg text-white mt-4 max-w-2xl">
            Search and explore a variety of recipes tailored to your taste.
          </p>

          <button onClick={handleExploreClick}  className="mt-6 bg-white text-red-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
            Explore Recipes
          </button>
        </div>
        
        {/* Chef Image */}
        <div className="flex-1 flex justify-center mt-6 md:mt-0">
          <img 
            src="https://imgs.search.brave.com/pQtslQuGTudTtYgCZewPSyzNnuckWJ8HVYulT3_uot8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZkL0Nvb2tfaWNv/bi5zdmc" 
            alt="Chef Cook" 
            className="w-60 object-cover"
          />
        </div>
      </div>

      {/* Featured Recipes Section */}
      <div className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800">Top Featured Recipes</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[
            { title: "Creamy Alfredo Pasta", img: "https://s.yimg.com/ny/api/res/1.2/kijwLH2mMz8nBA37rTsQYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD05MzI-/https://media.zenfs.com/en/sheknows_79/f45f7064b7557dd899e56621d019a77e" },
            { title: "Cheesy Margherita Pizza", img: "https://imgs.search.brave.com/DGWh86BJw1EQpz6AJGrbvqEiPFtOUb_h8hAnn9mY_W4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzE2Lzc3LzQ4/LzM2MF9GXzkxNjc3/NDg4OV9wUmU5ODYx/aWlZTnVmTWFRYWFo/WmNGeEY2MWFZR1Az/VS5qcGc" },
            { title: "Fresh Garden Salad", img: "https://imgs.search.brave.com/bYdH6VpShtJCo8Ij0NLRDzeCYyF6h0JK1_mvraZdaUE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZmhvbWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA5L1JhbmNo/LUJ1cmdlcnNfRVhQ/U19GVDI0XzI3NzEw/Ml9KUl8wOTA2Xzcu/anBnP3c9NzAw" },
          ].map((recipe, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
              <img 
                src={recipe.img} 
                alt={recipe.title} 
                className="w-full h-60 object-cover rounded-md transition duration-300 ease-in-out hover:opacity-90"
              />
              <h3 className="text-xl font-semibold mt-4">{recipe.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;