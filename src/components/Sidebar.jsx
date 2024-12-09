import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-24 left-0 h-90 w-64 bg-white border-r flex flex-col justify-between overflow-auto z-40">
      {/* Menu Section */}
      <div className="px-4 py-6">
        <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">Menu</h3>
        <nav className="space-y-2">
          <a
            href="/dashboard"
            className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:bg-blue-100 focus:text-blue-600 active:bg-blue-500 active:text-white"
          >
            <img src="/images/DashBoard.png" className="w-6 h-6 bg-gray-300 rounded"></img>
            <span>Dashboard</span>
          </a>
          <a
            href="/products"
            className="flex items-center space-x-3 px-4 py-2 rounded-lg  hover:bg-gray-100 focus:bg-blue-100 focus:text-blue-600 active:bg-blue-500 active:text-white "
          >
           <img src="/images/productLogo.png" className="w-6 h-6 bg-gray-300 rounded"></img>
            <span>Products</span>
          </a>
         
          <a
            href="/category"
            className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:bg-gray-100 focus:bg-blue-100 focus:text-blue-600 active:bg-blue-500 active:text-white"
          >
            <img src="/images/Category.png" className="w-6 h-6 bg-gray-300 rounded"></img>
            <span>Category</span>
          </a>
       
          
        </nav>
      </div>

      {/* Other Section */}
      <div className="px-4 py-6 border-t">
        <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">Other</h3>
        <nav className="space-y-2">
          <a
            href="/profile"
            className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <img src="/images/Settings.png" className="w-6 h-6 bg-gray-300 rounded"></img>
            <span>Settings</span>
          </a>

        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
