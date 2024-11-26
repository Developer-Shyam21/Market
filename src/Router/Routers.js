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

  // Generate admin and user routes
  const adminRoutes = Admin.map((route) => ({
    path: route.path,
    element: <ProtectedRoute>

      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    </ProtectedRoute>
  }));

  const userRoutes = UserRouter.map((route) => ({
    path: route.path,
    element:<ProtectedRoute>

      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    </ProtectedRoute>
    
  }));

  // Conditionally choose the routes based on user type
  const pageRoutes = currentType.type === 1 ? adminRoutes : userRoutes;


  const router = createBrowserRouter([

    {
      path: "/",
      element: <Navigate to="/Analytics/Overview" />,
      
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    ...(LoginData
      ? [
          {
            path: "/",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <DeshBoard />
                </Suspense>
            ),
            children: pageRoutes, 
          },
          {
            path: "*",
            element: <Navigate to="/" replace />,
          },
        ]
      : []),
   
    // {
    //   path: "*",
    //   element: <Navigate to="/login" replace />, 
    // },
  ]);

  return <RouterProvider router={router} />;
};

export default Routers;
