
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ContextsApi } from "../ContextApi/Index";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { LoginData } = useContext(ContextsApi);
  


  if (!LoginData ) {
    return <Navigate to="/login" replace  />;
  }
  
  return children;
 
};

export default ProtectedRoute;