import React, { useState, useEffect } from 'react'; // Import the apicaller function
import { apicaller } from '../Api/ApiCaller';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const ProductList = () => {
  const [products, setProducts] = useState([]);  // State to store the products
  const [loading, setLoading] = useState(true);   // State to track loading
  const [error, setError] = useState(null);       // State to store error if any
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    const getProducts = async () => {
      try {
        const data = await apicaller(); // Call the apicaller to fetch products
        setProducts(data);  // Set the fetched products in state
        setLoading(false);  // Set loading to false
      } catch (error) {
        setError(error.message);  // If an error occurs, set the error state
        setLoading(false);        // Set loading to false
      }
    };

    getProducts(); // Call the function to fetch products
  }, []);  // Empty dependency array to run the effect only once when the component mounts

  const handleCheckboxChange = (productId) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        // If product is already selected, unselect it
        return prevSelected.filter((id) => id !== productId);
      } else {
        // If product is not selected, select it
        return [...prevSelected, productId];
      }
    });
  };

  // Render loading, error, or the product list
  if (loading) {
    return <div className="text-center text-2xl font-bold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Products</h1>
      <Helmet>
        <title>Products</title>
        <meta name="description" content="Browse through our wide range of products available at Your Store." />
      </Helmet>
      {/* Add Product Button */}
      <div className="text-right mb-4">
      <Link to='addproduct'>
      <button
        className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        Add Product
      </button>
    </Link>
      </div>

      {/* Selected Products Button */}
      <button
        onClick={() => console.log('Selected products:', selectedProducts)}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        {selectedProducts.length} Selected Products
      </button>

      {/* Product Table */}
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border px-3 py-1">Select</th>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              {/* Checkbox for selecting product */}
              <td className="border px-4 py-2 pl-8">
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleCheckboxChange(product.id)}
                  className="w-6 h-6"
                />
              </td>
              <td className="border px-4 py-2 flex items-center">
                <img src={product.images[0]} alt={product.title} className="w-12 h-12 mr-2" />
                <p>{product.title}</p>
              </td>
              <td className="border px-4 py-2">{product.category.name}</td>
              <td className="border px-4 py-2">${product.price.toFixed(2)}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2">Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
