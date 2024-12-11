import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../Provider/AuthProvider";

const MainLayout = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`font-poppins ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } `}
    >
      <div className="2xl:w-10/12 md:w-11/12 mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
