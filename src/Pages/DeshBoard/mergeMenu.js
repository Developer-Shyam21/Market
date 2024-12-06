// import { useContext } from "react";
// import { AdminMenu } from "./admin";
// import { UserMenu } from "./user";
// import { ContextsApi } from "../../ContextApi/Index";
// import { Link } from "react-router-dom";

// export const FindMenus = () => {
//   const { currentType } = useContext(ContextsApi);

//   const menus = currentType.type === 1 ? AdminMenu : UserMenu;

//   return <>
//   {menus &&
//     menus.map((menuItem) => {
//         // If the menu item has children, render recursively
//         if (menuItem.children) {
//         return (
//           <div key={menuItem.key}>
//             <div>{menuItem.icon} {menuItem.label}</div>
//             <div>
//               {menuItem.children.map((child) => (
//                 <div key={child.key}>
//                   {child.icon} <Link to={child.key}>{child.label}</Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       }

//       // If no children, render the menu item directly
//       return (
//         <div key={menuItem.key}>
//           {menuItem.icon} <Link to={menuItem.key}>{menuItem.label}</Link>
//         </div>
//       );
//     })}
//     </>
// };
