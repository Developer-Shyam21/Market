import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextsApi } from "../ContextApi/Index";

const ProtectedRoute = ({ children }) => {
  const { LoginData } = useContext(ContextsApi);
  console.log(LoginData)
  return !LoginData ? <Navigate to="/login" replace/>: children 


};

export default ProtectedRoute;
