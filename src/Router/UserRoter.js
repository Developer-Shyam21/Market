

import { Overview } from "../Pages/UserPages/Analytics/Overview/index.js";
import { Performance } from "../Pages/UserPages/Analytics/Performance/index.js";
import { VendorOrder } from "../Pages/UserPages/Analytics/VendorOrder/index.js";
import { VendorPerformance } from "../Pages/UserPages/Analytics/VendorPerformance/index.js";



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
    path: "/Analytics/VendorPerformance",
    element: <VendorPerformance />,
  },
  {
    path: "/Analytics/vendorOrder",
    element: <VendorOrder />,
  },
  
  
];
