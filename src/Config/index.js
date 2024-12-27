import { Button, List, Typography } from "antd";

export const PrimaryColor = "linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))";
export const SecondaryColor = "rgb(23, 121, 232)";
export const thiredColor = "linear-gradient(310deg, rgb(33 82 255 / 35%), rgb(33 212 253 / 10%))";
export const TextColor = "rgb(73, 89, 140)";
export const MenuItemsColor = "rgb(175, 88, 71)";
export const InputColor = "rgb(253, 243, 241)";
export const BorderFilter = `1px solid ${PrimaryColor}`;
export const FormatUserName = (userName) => {
  // Replace hyphens with spaces
  let formattedName = userName?.replace(/-/g, " ");

  // Capitalize the first letter of each word
  formattedName = formattedName?.replace(/\b\w/g, function (char) {
    return char?.toUpperCase();
  });

  return formattedName === "Sku" ? "SKU" : formattedName;
};

// export const Lists = (props) => {
//   const {title,background = "#e8e9ec"} = props
//   return (
//     <div
//       style={{
//         padding: "calc(.55rem + 1px) calc(1.25rem + 1px)",
//         backgroundColor:`${background}`,
//         color:"black",
//         width:"fit-content",
//         borderRadius: "5px",
//       }}
//     >
//       {title}
//     </div>
//   );
// };
