
import { AdminPage } from "../Pages/Admin/index.js";
import { Criteria } from "../Pages/Criteria/index.js";
import { EmbedCodes } from "../Pages/EmbedCodes/index.js";
import { Setting } from "../Pages/Setting/index.js";
import { UserList } from "../Pages/User/index.js";

export const Admin = [
  {
    path: "/manageUser",
    element: <UserList />,
  },
  {
    path: "/manageAdmin",
    element: <AdminPage />,
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
