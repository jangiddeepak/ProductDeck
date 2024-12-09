import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { brandsapicaller } from '../Api/BrandApi'; // Import your API function for fetching brands

const BrandPage = () => {
  const { id } = useParams(); // Get the brand ID from the URL
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch the brand details by ID using the API function
    const fetchBrand = async () => {
      try {
        const data = await brandsapicaller(id); // Assuming id is passed to the API
        setBrand(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBrand();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-t-4 border-indigo-600 border-solid rounded-full animate-spin"></div>
          <div className="font-bold text-center text-3xl">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center text-3xl">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container py-8 px-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Brand Image as a Category Card */}
        <div className="p-4">
          {brand.image ? (
            <img
              src={brand.image}
              alt={`${brand.name} Image`}
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4 transition-transform transform hover:scale-105"
            />
          ) : (
            <p>No image available for this brand.</p>
          )}
        </div>

        {/* Brand Name and Description */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{brand.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{brand.description || 'No description available for this brand.'}</p>

          {/* View Products Button */}
          <div className="flex justify-center">
            <Link to={`/brand/${brand.id}/products`}>
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
              >
                View Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
