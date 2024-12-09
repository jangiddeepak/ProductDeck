import React, { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi'; // Import icons

const NavBar = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
   const searchRef = useRef(); // To handle click outside the search bar

  // Fetch products on component mount
  useEffect(() => {
    console.log("Fetching products...");
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((json) => {
        console.log("Fetched Products: ", json);
        setAllProducts(json); // Store all products in state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Filter products based on the search query
  const filterResults = (query) => {
    console.log("Filtering with query:", query); // Log query
    if (!query) return [];
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Filtered Products: ", filteredProducts); // Log filtered products
    return filteredProducts;
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    console.log("Search input changed:", value); // Log the input value
    setInput(value); // Update the input state with the new value
    const filteredData = filterResults(value); // Filter results based on the input value
    setResults(filteredData); // Update the results state
    console.log("Filtered Results: ", filteredData); // Log the filtered results
  };

  // Handle form submit (optional)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with input:", input); // Log form submission
    const filteredData = filterResults(input); // Filter results on submit
    setResults(filteredData); // Update the results state
  };

  return (
    <nav className="bg-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo and Brand Name */}
        <div className="flex items-center space-x-4">
          <img className="w-10 h-10" src="/logo1.png" alt="Logo" /> {/* Logo */}
          <Link to="/dashboard" className="text-gray-800 text-2xl font-bold">
            ProductDeck
          </Link>
        </div>

        {/* Center: Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full md:w-1/3 space-x-2">
          <input
            type="text"
            value={input} // Set the input field value from the state
            onChange={handleSearchChange} // Update the state when user types
            className="w-full px-4 py-2 rounded-l-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-600 focus:outline-none"
          >
            <FiSearch />
          </button>

          {/* Suggestions Dropdown */}
          {input && results.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 ml-4 top-[3rem] w-full shadow-lg rounded-lg max-h-60 overflow-y-auto z-10">
              {results.map((product) => (
                <li key={product.id} className="px-4 py-2 text-gray-700 hover:bg-indigo-100 cursor-pointer">
                  <Link
                                     to={`/products/${product.id}`}
                                     onClick={() => {
                                       setInput(''); // Clear the search input when clicking a result
                                       setResults([]); // Clear the results list after click
                                     }}
                                   >
                                     {product.title}
                                   </Link>
                </li>
              ))}
            </ul>
          )}
        </form>

        {/* Right: Alert and Profile */}
        <div className="flex items-center space-x-6">
          <a href="/notification">
            <button className="text-gray-600 text-2xl">
              <FiBell />
            </button>
          </a>
          <div className="relative">
            <Link to="/profile">
              <img
                src="/images/pp.jpg" // Replace with your profile image path
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-gray-300 hover:ring-2 hover:ring-indigo-500 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
