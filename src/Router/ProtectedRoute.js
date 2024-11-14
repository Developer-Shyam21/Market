import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextsApi } from "../ContextApi/Index";

const ProtectedRoute = ({ children }) => {
 
  const { loginData } = useContext(ContextsApi);
  const location = useLocation();


  if (!loginData || loginData.length === 0) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
 
};

export default ProtectedRoute;