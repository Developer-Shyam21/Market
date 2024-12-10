import { useContext } from "react";
import { AdminMenu } from "./admin";
import { UserMenu } from "./user";
import { ContextsApi } from "../../ContextApi/Index";
import { Link } from "react-router-dom";

export const FindMenus = () => {
  const { currentType } = useContext(ContextsApi);

  const menus = currentType.type === 1 ? AdminMenu : UserMenu;
console.log("my admin menu page is:", menus)
  return <>
  {menus &&
    menus.map((d, i) => {
    if (d?.children) {
      return {
        ...d,
        icon: d.icon,
        label: d.label,
        children: d?.children?.map((d) => {
          return {
            ...d,
            icon: <></>,
            label: <Link to={d.key}>{d.label}</Link>,
          };
        }),
      };
    }
    return {
      ...d,
      icon:d.icon,
      label: <Link to={d.key}>{d.label}</Link>,
    }
  })
}

    </>
};
