import React from 'react';
import AdminNav from './AdminNav';

export default function AddRecipe() {
  return (
    <div>
      <AdminNav />
      
      {/* Add Recipe Form with Tailwind CSS */}
      <div className="bg-red-500 min-h-screen py-10">
        <div className="max-w-[1600px] mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center mb-12">Add a New Recipe</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="title" className="block text-lg font-medium text-gray-700">Recipe Title:</label>
              <input
                type="text"
                id="title"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter recipe title"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cookingTime" className="block text-lg font-medium text-gray-700">Cooking Time:</label>
              <input
                type="text"
                id="cookingTime"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter cooking time"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description:</label>
              <textarea
                id="description"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter recipe description"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="imageUrl" className="block text-lg font-medium text-gray-700">Image URL:</label>
              <input
                type="url"
                id="imageUrl"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter image URL"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-slate-900 text-white text-lg font-semibold rounded-md hover:cursor-pointer hover:bg-slate-800"
            >
              Add Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
