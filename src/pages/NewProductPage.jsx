import React, { useState } from 'react';
import { createProduct } from '../Api/ApiCaller';
import { Helmet } from 'react-helmet';
// Function to handle form submission and add product
const NewProductPage = () => {
  // State to store product details
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    images: null,  // This should store a single image file
  });
  const [loading, setLoading] = useState(false); // State to track form submission
  const [error, setError] = useState(null); // State to store error if any
  const [success, setSuccess] = useState(null); // State to store success message

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input (image upload)
  const handleImageChange = (e) => {
    setProduct((prev) => ({
      ...prev,
      images: e.target.files[0], // Store the selected file
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append('title', product.title);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('images', product.images); // Use the correct field name here

    try {
      // Replace with your API endpoint to submit the product
      const response = await createProduct(formData);

      // Here we're simulating a successful response after adding the product
      console.log(response);

      setSuccess('Product added successfully!');
      setProduct({
        title: '',
        description: '',
        price: '',
        images: null,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
       <Helmet>
        <title>Add products</title>
        <meta name="description" content="impressive dahsboard  for new products" />
      </Helmet>
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
        Add New Product
      </h1>

      {success && <div className="text-green-500 text-center mb-4">{success}</div>}
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-xl space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Product Name and Description */}
          <div className="flex flex-col">
            {/* Product Name */}
            <div>
              <label
                htmlFor="title"
                className="block text-2xl font-semibold text-gray-700 mb-3"
              >
                Product Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={product.title}
                onChange={handleChange}
                className="w-full mb-3 px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Product Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-2xl font-semibold text-gray-700 mb-3"
              >
                Product Description
              </label>
              <textarea
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                placeholder="Enter product description"
                required
              />
            </div>
          </div>

          {/* Right Column: Price and Image */}
          <div className="flex flex-col">
            {/* Product Price */}
            <div>
              <label
                htmlFor="price"
                className="block text-2xl font-semibold text-gray-700 mb-3"
              >
                Product Price ($)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="w-full px-5 py-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                placeholder="Enter product price"
                required
              />
            </div>

            {/* Product Image */}
            <div>
              <label
                htmlFor="images"
                className="block text-2xl font-semibold text-gray-700 mb-3"
              >
                Product Image
              </label>
              <input
                type="file"
                id="images"
                name="images"
                onChange={handleImageChange}
                className="px-5 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xl"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProductPage;


