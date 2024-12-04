

import { Overview } from "../Pages/UserPages/Analytics/Overview/index.js";
import { Performance } from "../Pages/UserPages/Analytics/Performance/index.js";
import { VendorOrder } from "../Pages/UserPages/Analytics/VendorOrder/index.js";
import { VendorPerformance } from "../Pages/UserPages/Analytics/VendorPerformance/index.js";
import { Settings } from "../Pages/UserPages/Setting/index.js";



export const UserRouter = [
  {
    path: "/Analytics/Overview",
    element: <Overview />,
  },
  {
    path: "/Analytics/Performance",
    element: <Performance />,
  },
  {
    path: "/Analytics/Vendor-Performance",
    element: <VendorPerformance />,
  },
  {
    path: "/Analytics/vendor-Order",
    element: <VendorOrder />,
  },
  {
    path: "/Settings",
    element: <Settings/>
  }
  
  
];
