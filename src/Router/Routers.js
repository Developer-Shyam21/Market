import React, { Suspense, useContext } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import DeshBoard from "../Pages/DeshBoard";
import { Register } from "../Pages/Register";
import { LogIn } from "../Pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { Users } from "./user";
import { ContextsApi } from "../ContextApi/Index";

const Routers = () => {
  const { loginData } = useContext(ContextsApi);

  const router = createBrowserRouter([
    {
      path: "/",
      element: loginData ? (
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}>
            <DeshBoard />
          </Suspense>
        </ProtectedRoute>
      ) : (
        <Navigate to="/login" replace />
      ),
      children: Users.map((d) => ({
        path: d.path,
        element: d.element,
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
