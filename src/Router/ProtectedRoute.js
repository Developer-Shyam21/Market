
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
 
  const location = useLocation();

  const loginData = JSON.parse(localStorage.getItem("UserLoggingData"));

  if (!loginData || loginData.length === 0) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
 
};

export default ProtectedRoute;