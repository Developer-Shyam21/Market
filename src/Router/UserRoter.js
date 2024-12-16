import { AccountStatus } from "../Pages/UserPages/AcountStatus/index.js";
import { Overview } from "../Pages/UserPages/Analytics/Overview/index.js";
import { Performance } from "../Pages/UserPages/Analytics/Performance/index.js";
import { VendorOrder } from "../Pages/UserPages/Analytics/VendorOrder/index.js";
import { VendorPerformance } from "../Pages/UserPages/Analytics/VendorPerformance/index.js";
import { UserSettings } from "../Pages/UserPages/Setting/UserSetting.js";

export const UserRouter = [
  { path: "/Analytics/Overview", element: <Overview /> },
  { path: "/Analytics/Performance", element: <Performance /> },
  { path: "/Analytics/Vendor-Performance", element: <VendorPerformance /> },
  { path: "/Analytics/vendor-Order", element: <VendorOrder /> },
  { path: "/Account-Status", element: <AccountStatus /> },
  { path: "/User-Settings", element: <UserSettings /> },
];
