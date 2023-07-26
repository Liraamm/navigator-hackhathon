import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { notify } from "../components/Toastify";
import { Navigate, Outlet } from "react-router";

const AdminProtectedRoute = () => {
  const { isAdmin } = useAuthContext();

  if (!isAdmin()) {
    notify("Only admin can access to this page", "default");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;
