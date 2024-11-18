

export const PrimaryColor = "#621c47";
export const SecondaryColor = "#a17791";
export const thiredColor = "rgb(202, 105, 90)";
export const TextColor = "rgb(73, 89, 140)";
export const MenuItemsColor = "rgb(175, 88, 71)";
export const InputColor = "rgb(253, 243, 241)";
export const FormatUserName = (userName) => {
    // Replace hyphens with spaces
    let formattedName = userName?.replace(/-/g, " ");
  
    // Capitalize the first letter of each word
    formattedName = formattedName?.replace(/\b\w/g, function (char) {
      return char?.toUpperCase();
    });
  
    return formattedName === "Sku" ? "SKU" : formattedName;
  };