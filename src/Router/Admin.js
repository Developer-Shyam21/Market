
import { AdminPage } from "../Pages/Admin/index.js";
import { Criteria } from "../Pages/Criteria/index.js";
import { EmbedCodes } from "../Pages/EmbedCodes/index.js";
import { Setting } from "../Pages/Setting/index.js";
import { Task1 } from "../Pages/TaskWork/index.js";
import { UserList } from "../Pages/User/index.js";

export const Admin = [
  {
    path: "/Manage-User/Client",
    element: <UserList />,
  },
  {
    path: "/Manage-Admin",
    element: <AdminPage />,
  },
  {
    path: "/Criteria",
    element: <Criteria />,
  },
  {
    path: "/Embed-Codes",
    element: <EmbedCodes />,
  },
  {
    path: "/Setting",
    element: <Setting />,
  },
  {
    path:"/tasks",
    element:<Task1/>
  }
  
];
