import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const SearchProductPage = () => {
  const { id } = useParams(); // Access the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details based on the `id` from the URL
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product data:', error));
  }, [id]); // Re-fetch when `id` changes

  if (!product) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 border-t-4 border-indigo-600 border-solid rounded-full animate-spin"></div>
        <div className="font-bold text-center text-3xl">Loading...</div>
      </div>
    </div>
  );

  return (
     <div className="container cursor-pointer  py-8 px-4">
          <Helmet>
        <title>{product.title}</title>
        <meta name="description" content="impressive dahsboard  for new products" />
      </Helmet>
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">

            {/* Product Image */}
            <div className="md:w-1/2 p-4">
              <img
                src={product.images}
                alt={product.title}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-6 ">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">{product.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.description}</p>

              <div className="flex items-center  mt-[8rem] ">

                <p className="text-[2rem] font-bold text-indigo-600 ml-8">Price: ${product.price}</p>

              </div>
            </div>
          </div>
        </div>
      );
    };
export default SearchProductPage;
