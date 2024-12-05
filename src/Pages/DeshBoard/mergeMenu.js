import { useContext } from "react";
import { AdminMenu } from "./admin";
import { UserMenu } from "./user";
import { ContextsApi } from "../../ContextApi/Index";


export const FindMenus = () => {

    const { currentType } = useContext(ContextsApi);
  return {
    admin: AdminMenu,
    user: UserMenu,
  }?.[currentType.type === 1]?.map((d, i) => {
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
    };
  });
};
