import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import ProductList from "../pages/ProductList";
import ClothesPage from "../Categories/ClothesPage";
import ElectronicsPage from "../Categories/ElectronicsPage";
import FurniturePage from "../Categories/FurniturePage";
import AccesoriesPage from "../Categories/AccesoriesPage";
import Categories from "../pages/Categories";
import Profile from "../pages/Profile";
import NewProductPage from "../pages/NewProductPage";
import Notifications from "../pages/Notifications";
import SearchProductPage from "../pages/SearchProductPage";
import BrandPage from "../pages/BrandPage";





// A layout wrapper for pages with NavBar and Sidebar
const MainLayout = () => (
  <div className="relative">
    <NavBar />
    <Sidebar />
    <div className="main-content pl-64 pt-32">
      <Outlet /> {/* Render child routes here */}
    </div>
  </div>
);

let loginRoute = {
  path: '/loginpage',
  element: <LoginPage />,  // Login Page does not need NavBar or Sidebar
};

let signupRoute = {
  path: '/signup',
  element: <SignupPage />,  // Signup Page does not need NavBar or Sidebar
};

let allPagesRoute = {
  path: '/',
  element: <MainLayout />, // All other pages get NavBar and Sidebar
  children: [
    {path:'/', element:<Dashboard/>},
    { path : 'products', element : <ProductList/>},
    { path : 'dashboard', element : <Dashboard/>},
    {path :'category/clothes' , element: <ClothesPage/>},
    {path :'category/electronics' , element: <ElectronicsPage/>},
    {path :'category/furniture' , element: <FurniturePage/>},
    {path :'category/Accessories' , element: <AccesoriesPage/>},
    {path: 'category', element:<Categories/>},
    {path:'profile', element:<Profile/>},
    {path:'products/addproduct', element: <NewProductPage/>},
    {path:'products/:id', element:<SearchProductPage/>},
    {path:'notification', element: <Notifications/>},
    {path:'brands', element: <BrandPage/>}
  ],
};

function AllRoutes() {
  return useRoutes([loginRoute, signupRoute, allPagesRoute]);
}

export default AllRoutes;
