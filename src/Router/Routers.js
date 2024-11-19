import React, { Suspense, useContext, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Register } from "../Pages/Register";
import { LogIn } from "../Pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { Admin } from "./Admin";
import DeshBoard from "../Pages/DeshBoard";
import { ContextsApi } from "../ContextApi/Index";
import UserDeshBoard from "../Pages/UserDeshboard";
import { UserRouter } from "./UserRoter";
// import LanguageSelector  from "../Component/LanguageSelector";
const Routers = () => {
    const { userShow } = useContext(ContextsApi);
    const [selectedLang, setSelectedLang] = useState("en");
    

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <Suspense fallback={<div>Loading...</div>}>
                        {userShow ? <UserDeshBoard /> : <DeshBoard />}
                    </Suspense>
                </ProtectedRoute>
            ),
            children: userShow
                ? UserRouter.map((route) => ({
                  path: route.path,
                  element: (
                      <Suspense fallback={<div>Loading...</div>}>
                          {route.element}
                      </Suspense>
                  ),
              }))
                : Admin.map((route) => ({
                      path: route.path,
                      element: (
                          <Suspense fallback={<div>Loading...</div>}>
                              {route.element}
                          </Suspense>
                      ),
                  })),
        },
        {
            path: "/login",
            element:  <ProtectedRoute>
            <LogIn />
        </ProtectedRoute>
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

    return <>

    <RouterProvider router={router} />;
    </>
};

export default Routers;
