import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Profile = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const handlePasswordChange = () => {
    if (newPassword === confirmPassword) {
      setPassword(newPassword);
      setIsPasswordChanged(true);
      setNewPassword("");
      setConfirmPassword("");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200">
      {/* Profile Header */}
      <Helmet>
        <title>profile</title>
        <meta name="description" content="impressive dahsboard  for new products" />
      </Helmet>
      <div className="flex items-center mb-6">
        <img
          src="/images/pp.jpg"
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-indigo-500 mr-4"
        />
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">Deepak Jangid</h2>
         
        </div>
      </div>

      {/* Email (unchangeable) */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email:
        </label>
        <p className="text-lg text-gray-800 mt-1" id="email">
          royalxtic@gmail.com
        </p>
      </div>

      {/* Password Change Section */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
          New Password:
        </label>
        <input
          type="password"
          id="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
          Confirm New Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>
       <button
              onClick={handlePasswordChange}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            >
              Change Password
            </button>

    <a href="/loginpage">
          <button
      
        className="w-32 bg-red-600 text-white py-2 mt-4 ml-[8rem] rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      >
      Logout
      </button>
      </a>
    </div>

  );
};

export default Profile;
