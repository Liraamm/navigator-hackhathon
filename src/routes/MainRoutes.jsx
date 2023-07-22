import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import AddPage from "../pages/AddPage";
import NotFoundPage from "../pages/NotFoundPage";
import UpdatePage from "../pages/UpdatePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
