
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {


  const loginData = JSON.parse(localStorage.getItem("UserLoggingData"));

  if (!loginData || loginData.length === 0) {
    return <Navigate to="/login" replace  />;
  }

  return children;
 
};

export default ProtectedRoute;