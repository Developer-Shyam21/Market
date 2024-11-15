
import { Admin } from "../Pages/Admin/index.js";
import { Criteria } from "../Pages/Criteria/index.js";
import { EmbedCodes } from "../Pages/EmbedCodes/index.js";
import { Setting } from "../Pages/Setting/index.js";
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
  {
    path: "/embedcodes",
    element: <EmbedCodes />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
 
  
];
