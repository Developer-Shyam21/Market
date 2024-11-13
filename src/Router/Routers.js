import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import DeshBoard from "../Pages/DeshBoard";
import { Register } from "../Pages/Register";
import { LogIn } from "../Pages/Login";
import { User } from "../Pages/User";
import ProtectedRoute from "./ProtectedRoute";


const Routers = () => {

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    localStorage.setItem("isLoggedIn", "false")

   
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element:isLoggedIn ? <Navigate to="/Deshboard" /> : <Navigate to="/login" />
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
      path: "/Deshboard",
      element: (
        <ProtectedRoute>
          <Suspense  >
            <DeshBoard />
          </Suspense>
        </ProtectedRoute>
      ),
      children: [
        {
          path: "manageUser",
          element: <User />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);


  return (
    <RouterProvider router={router} />
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Routers />);
export default Routers;
