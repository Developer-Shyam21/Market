import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextsApi } from "../ContextApi/Index";

const ProtectedRoute = ({ children }) => {
  const { LoginData } = useContext(ContextsApi);
  return LoginData ? children : <Navigate to="/login" replace/>


};

export default ProtectedRoute;
