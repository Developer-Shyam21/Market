import React, { Suspense, useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Register } from "../Pages/Register";
import { LogIn } from "../Pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { Admin } from "./Admin";
import DeshBoard from "../Pages/DeshBoard";
import { ContextsApi } from "../ContextApi/Index";
import UserDeshBoard from "../Pages/UserDeshboard";
import { UserRouter } from "./UserRoter";

const Routers = () => {
  const { LoginData, currentType } = useContext(ContextsApi);


  const adminRoutes = Admin.map((route) => ({
    path: route.path,
    element: (
      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    ),
  }));

  const userRoutes = UserRouter.map((route) => ({
    path: route.path,
    element: (
      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    ),
  }));


  const pageRoutes = currentType.type == 1? adminRoutes :userRoutes



  const router = createBrowserRouter([
    {
      path: "/",
      element:<Navigate to="/Manage-User/Client" replace />
    },

    ...(LoginData
      ? [
          {
            path: "/",
            element: (  
              <ProtectedRoute>
                <Suspense fallback={<div>Loading...</div>}>
                  { currentType.type == 1 ? <DeshBoard /> : <UserDeshBoard/>}
                </Suspense>
              </ProtectedRoute>
            ),
            children:pageRoutes,
          },
          {
            path: "*",
            element: <Navigate to="/Manage-User/Client" replace />,
          },
        ]
      : []),

    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routers;
