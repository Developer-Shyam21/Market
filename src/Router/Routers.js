import * as React from "react";
import * as ReactDOM from "react-dom";
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


ReactDOM.createRoot(document.getElementById("root")).render(
 
);

const Routers = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Navigate to="/Deshboard"/>,
        },
        {
            path:"/login",
            element: <LogIn/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/deshboard",
          element: (
            <ProtectedRoute>
              <DeshBoard/>
            </ProtectedRoute>
          ),
          children: [{
            path:"manageUser",
            element: <User />
          }]
        }
      ]);

      return <>
 <RouterProvider router={router} />
      </>
}

export default Routers;
