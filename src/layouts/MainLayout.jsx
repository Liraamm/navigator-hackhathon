import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Toastify from "../components/Toastify";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Toastify />
    </div>
  );
};

export default MainLayout;
