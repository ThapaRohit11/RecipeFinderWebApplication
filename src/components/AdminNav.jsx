import React from 'react';
import { Link } from 'react-router-dom';

function AdminNav() {
  return (
      <div className="flex justify-evenly text-white bg-black h-[100px]">
        <ul className="hidden md:flex text-lg justify-evenly w-full max-w-4xl">
          <li className="mx-[25px] cursor-pointer flex items-center justify-center">
            <Link to="/add-recipe" className="hover:text-gray-300">Add Recipe</Link>
          </li>
          <li className="mx-[25px] cursor-pointer flex items-center justify-center">
            <Link to="/manage" className="hover:text-gray-300">Manage Recipe</Link>
          </li>
        </ul>
      </div>
  );
}

export default AdminNav;
