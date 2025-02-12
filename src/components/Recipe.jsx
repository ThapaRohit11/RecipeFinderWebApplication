import React from 'react';
import Navbar from './Navbar';

function Recipe() {
  const recipes = [
    {
      title: 'Chicken Curry',
      cookingTime: '45 mins',
      description: 'A flavorful and aromatic curry made with chicken and a blend of spices.',
      image: 'https://images.slurrp.com/prod/articles/9jbs3yewfma.webp', // Chicken Curry
    },
    {
      title: 'Momo',
      cookingTime: '30 mins',
      description: 'Tasty dumplings filled with meat or vegetables, served with a dipping sauce.',
      image: 'https://th.bing.com/th/id/OIP.YeHYCJHd1pN9jn-GKN3MTAHaE8?rs=1&pid=ImgDetMain', // Momo
    },
    {
      title: 'Pasta',
      cookingTime: '20 mins',
      description: 'A classic pasta dish served with a variety of delicious sauces.',
      image: 'https://familynano.com/wp-content/uploads/2017/01/Penne-pasta.jpg', // Pasta
    },
    {
      title: 'Chowmein',
      cookingTime: '25 mins',
      description: 'A popular Chinese stir-fried noodle dish with vegetables and choice of protein.',
      image: 'https://img.freepik.com/premium-photo/chowmein_670382-106565.jpg', // Chowmein
    },
    {
      title: 'Khana Set',
      cookingTime: '60 mins',
      description: 'A complete meal served with rice, curry, lentils, and more.',
      image: 'https://th.bing.com/th/id/OIP.q618Le5VZVzaRrvVKqLn5AHaE8?rs=1&pid=ImgDetMain', // Khana Set
    },
    {
      title: 'Mojito Ice Cream',
      cookingTime: 'No Churn',
      description: 'A refreshing, creamy dessert with a mojito twist.',
      image: 'https://recipesgram.com/wp-content/uploads/2017/06/Quick-Mojito-Ice-Cream-No-Churn-Recipe.jpg'
    },
    {
      title: 'Iced Tea',
      cookingTime: 'No Churn',
      description: 'A chilled, citrusy iced tea with a hint of mint.',
      image: 'https://static01.nyt.com/images/2014/04/03/dining/mojito-iced-tea/mojito-iced-tea-superJumbo.jpg'
    },
    {
      title: 'Chicken Naan',
      cookingTime: '35 mins',
      description: 'A delicious chicken curry served with garlic naan bread.',
      image: 'https://tealnotes.com/wp-content/uploads/2023/06/Butter-Chicken-With-Garlic-Naan-750x422.png', // Chicken Naan
    }
  ];

  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-orange-400 via-white to-red-400 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-64 object-cover rounded-t-lg transition-transform transform hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{recipe.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{recipe.cookingTime}</p>
              <p className="text-gray-700">{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
