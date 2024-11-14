
import { Admin } from "../Pages/Admin/index.js";
import { Criteria } from "../Pages/Criteria/index.js";
import { User } from "../Pages/User/index.js";

export const Users = [
  {
    path: "/manageUser",
    element: <User />,
  },
  {
    path: "/manageAdmin",
    element: <Admin />,
  },
  {
    path: "/criteria",
    element: <Criteria />,
  },
  
];
