import {
  CodeOutlined,
  FileDoneOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const UserMenuItems = () => [
  {
    key: "Manage-User/Client",
    icon: <UserOutlined />,
    label: <Link to="/Manage-User/Client">Manage User/Client</Link>,
  },
  {
    key: "Manage-Admin",
    icon: <VideoCameraOutlined />,
    label: <Link to="/Manage-Admin">Manage Admin</Link>,
  },
  {
    key: "Criteria",
    icon: <FileDoneOutlined />,
    label: <Link to="/Criteria">Criteria</Link>,
  },
  {
    key: "Embed-Codes",
    icon: <CodeOutlined />,
    label: <Link to="/Embed-Codes">Embed Codes</Link>,
  },
  {
    key: "Setting",
    icon: <SettingOutlined />,
    label: <Link to="/Setting">Setting</Link>,
  },
];
