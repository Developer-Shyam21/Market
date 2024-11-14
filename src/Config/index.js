

export const PrimaryColor = "#a17791";
export const SecondaryColor = "#a17791";
export const thiredColor = "rgb(202, 105, 90)";
export const FormatUserName = (userName) => {
    // Replace hyphens with spaces
    let formattedName = userName?.replace(/-/g, " ");
  
    // Capitalize the first letter of each word
    formattedName = formattedName?.replace(/\b\w/g, function (char) {
      return char?.toUpperCase();
    });
  
    return formattedName === "Sku" ? "SKU" : formattedName;
  };