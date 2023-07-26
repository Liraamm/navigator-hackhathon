import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { notify } from "../components/Toastify";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const { user } = useAuthContext();

  if (!user) {
    notify("Please Login or Sign-Up to access this page", "default");
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
