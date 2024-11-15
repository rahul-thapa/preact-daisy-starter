import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const isAuthenticated = () => {
    // Add your auth logic here
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (isLoggedIn && isLoggedIn != null) {
      return true;
    } else {
      return false;
    }
  };
  return isAuthenticated() ? <Outlet /> : <Navigate to={{ pathname: "/login" }} />;
}

export default PrivateRoute;
