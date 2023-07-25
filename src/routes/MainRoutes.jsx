import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import AddPage from "../pages/AddPage";
import NotFoundPage from "../pages/NotFoundPage";
import UpdatePage from "../pages/UpdatePage";
import HospitalPage from "../pages/HospitalPage";
import PolicePage from "../pages/PolicePage";
import CafePage from "../pages/CafePage";
import MallPage from "../pages/MallPage";
import BarPage from "../pages/BarPage";
import ParkPage from "../pages/ParkPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="/police" element={<PolicePage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/mall" element={<MallPage />} />
        <Route path="/bar" element={<BarPage />} />
        <Route path="/park" element={<ParkPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
