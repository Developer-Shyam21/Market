import React, { useState, useEffect, useContext } from "react";
import { Breadcrumb, Button, Divider, Layout, Menu, Space } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  CodeOutlined,
  FileDoneOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  LogoutOutlined,
  SettingOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Market from "../../Images/logo-main.png";
import { FormatUserName } from "../../Config/index";
import { Wrapper } from "./style";
import { ContextsApi } from "../../ContextApi/Index";
import { Icon } from "@iconify/react/dist/iconify.js";

const { Header, Sider, Content } = Layout;
const DeshBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const nevigate = useNavigate();
  const [current, setCurrent] = useState(location.pathname.replace("/", ""));
  const [openKeys, setOpenKeys] = useState(["Analytics"]);
  const { LoginData ,currentType,updateState} = useContext(ContextsApi);
  

  useEffect(() => {
    setCurrent(location.pathname.replace("/", ""));

  }, [location,]);
const AdminMenu = [
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
]

const menuItems = [
  {
    key: "Analytics",
    icon: <MailOutlined />,
    label: "Analytics",
    children: [
      {
        key: "Analytics/Overview",
        label: <Link to="/Analytics/Overview">Overview</Link>,
      },
      {
        key: "Analytics/Performance",
        label: <Link to="/Analytics/Performance">Performance</Link>,
      },
      {
        key: "Analytics/Vendor-Performance",
        label: (
          <Link to="/Analytics/Vendor-Performance">Vendor Performance</Link>
        ),
      },
      {
        key: "Analytics/Vendor-Order",
        label: <Link to="/Analytics/Vendor-Order">Vendor Order</Link>,
      },
    ],
  },
  {
    key: "AccountStatus",
    icon: <UserOutlined />,
    label: "Account Status",
  },
];
  const breadcrumbItems = location.pathname
    .split("/")
    .filter(Boolean)
    .map((crumb) => ({
      title: crumb
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    }));

  const handleLogout = () => {
    localStorage.removeItem("UserLoggingData");
    localStorage.removeItem("Type");
    localStorage.removeItem("SwicthUserData");

    nevigate("/login", { replace: true });
  };

   const HandelAdmin = () => {
    const updateType = currentType.type === 2 ? 1 : 1;

    localStorage.removeItem("SwicthUserData");
    
    updateState("type", updateType)

    nevigate("/Manage-User/Client", { replace: true });
  };

  const siderStyle = {
    overflow: "auto",
    height: "100vh",
    position: "fixed",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarGutter: "stable",
  };
  return (
    <Wrapper>
      <Layout>
        <Sider
          style={siderStyle}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
           <div className="demo-logo-vertical">
            <img src={Market} alt="logo" width={247} height={50} />
          </div>
          <Divider/>
         {localStorage.getItem("SwicthUserData")? (
            <>
              <div className="back-admin-btn">
                <Button
                  className="backadminbtn"
                  type="primary"
                  onClick={HandelAdmin}
                  disabled={LoginData.type === 2}
                >
                  <div className="back-btn-icon">
                    <Icon icon="solar:arrow-right-outline" />
                  </div>
                  Back To Admin
                </Button>
              </div>
              <Divider />
            </>
          ) : (
            <>
              <div className="back-admin-btn" style={{ display: "none" }}>
                <Button
                  className="backadminbtn"
                  type="primary"
                  onClick={HandelAdmin}
                  disabled={LoginData.type === 2}
                >
                  <div className="back-btn-icon">
                    <Icon icon="solar:arrow-right-outline" />
                  </div>{" "}
                  Back To Admin
                </Button>
              </div>
            </>
          )}
          <Menu
          mode="inline"
            defaultSelectedKeys={["/Manage-User/Client"]}
            style={{ backgroundColor: "white" }}
            selectedKeys={[current]}
            openKeys={openKeys}
            onOpenChange={(keys) => setOpenKeys(keys)}
            onClick={(e) => {
              setCurrent(e.key);
            }}
            items={currentType.type == 1 ?AdminMenu:menuItems}
          />
        </Sider>
        <Layout
          style={{
            marginInlineStart: 289,
          }}
        >
          <Header>
            <Space direction="vertical" align="center">
              <Breadcrumb
                items={[{ title: <HomeOutlined /> }, ...breadcrumbItems]}
                separator={">"}
                style={{ fontSize: "14px" }}
              />
              <Breadcrumb
                style={{ fontSize: "22px" }}
                separator={"/"}
                items={[
                  ...location?.pathname
                    ?.split("/")
                    ?.filter((d) => d)
                    ?.map((d) => ({
                      title: FormatUserName(d),
                    })),
                ]}
              />
            </Space>

            <Button
              type="primary"
              icon={<LogoutOutlined />}
              onClick={handleLogout}
            >
              LogOut
            </Button>
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
  );
};

export default DeshBoard;
