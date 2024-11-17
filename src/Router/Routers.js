import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Register } from "../Pages/Register";
import { LogIn } from "../Pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { Admin } from "./Admin";
import DeshBoard from "../Pages/DeshBoard";


const Routers = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <DeshBoard />
        </Suspense>
      </ProtectedRoute>
      ,
      children: Admin.map((route) => ({
        path: route.path,
        element: <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>,
      })),
    },
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
