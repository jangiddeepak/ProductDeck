import React, { useState, useEffect } from 'react';

import { Furnitureapicaller } from '../Api/FurnitureApi'; // Import the apicaller function
const FurniturePage = () => {
  const [products, setProducts] = useState([]);  // State to store the products
  const [loading, setLoading] = useState(true);   // State to track loading
  const [error, setError] = useState(null);       // State to store error if any
  const [selectedProducts, setSelectedProducts] = useState([]);
  useEffect(() => {
    // Fetch products when the component mounts
    const getProducts = async () => {
      try {
        const data = await Furnitureapicaller(); // Call the apicaller to fetch products
        setProducts(data);  // Set th fetched products in state
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
    <div>
       <button
        onClick={() => console.log("Selected products:", selectedProducts)}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        {selectedProducts.length} Selected Products
      </button>
      <a href='/products/addproduct'>
      <button
        className="bg-green-500 text-white p-3  ml-[100px] rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        Add Product
      </button>
      </a>
  

    <table className="w-full border-collapse border">
      <thead>
        <tr>
          <th className="border px-3 py-1 ">Select</th>
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
            <td className="border px-4 py-2 pl-8 item-center">
              <input
                type="checkbox"
                checked={selectedProducts.includes(product.id)}
                onChange={() => handleCheckboxChange(product.id)}
                className="w-6 h-6"
              />
            </td>
            <td className="border px-4 py-2 flex items-center">
              <img src={product.images[0]} className="w-12 h-12 mr-2" />
              <p className="fw-100">{product.title}</p>
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

export default FurniturePage;



