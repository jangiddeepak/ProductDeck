import React, { useState, useEffect } from 'react';
import { apifetch, categories } from '../Api/DashboardData'; // Importing the function to fetch data
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await apifetch(); // Fetch categories using the apifetch function
        setCategories(data); // Set categories state with the fetched data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error.message); // Handle any errors
        setLoading(false); // Set loading to false in case of an error
      }
    };

    getCategories(); // Call the function to fetch data when the component mounts
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6 cursor-pointer">
         <Helmet>
        <title>Categories-productDeck</title>
        <meta name="description" content="Categories for exciting deals and all" />
      </Helmet>
      
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Categories</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="overflow-hidden rounded-md mb-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover transform hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">{category.name}</h2>
            <p className="text-center text-gray-600 text-lg mb-4">{category.productCount} Products</p>
            <div className="flex justify-center">
            <Link
                to={`/category/${category.name}`} // Dynamically navigate to category page
              >
                <button
                  className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                >
                  View Products
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
