import { Navigate, replace, useLocation, useNavigate } from "react-router-dom";
import { ContextsApi } from "../ContextApi/Index";
import { useContext, useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const loginData = JSON.parse(localStorage.getItem("UserLoggingData"));
  const { userShow } = useContext(ContextsApi);

  useEffect(() => {
    if (loginData) {
      if (location.pathname === "/login" || location.pathname === "/") {
        if (userShow ) {
          navigate("/Analytics/Overview", { replace: true });
        } else {
          navigate("/Manage-User/Client", { replace: true });
        }
      }
    } else {
      if (location.pathname !== "/login") {
        navigate("/login", { replace: true });
      }
    }
  }, [loginData, location.pathname, navigate, userShow]);

  return children;
};

export default ProtectedRoute;
