import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Toastify from "../components/Toastify";
import LiveSearch from "../components/LiveSearch";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Toastify />
      <LiveSearch />
    </div>
  );
};

export default MainLayout;
