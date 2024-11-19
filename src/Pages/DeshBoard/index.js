import React, { useState, useEffect } from "react";
import { Breadcrumb, Button, Divider, Layout, Menu, Space } from "antd";
import {
  Link,
  Outlet,
  replace,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  CodeOutlined,
  FileDoneOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Market from "../../Images/logo-main.png";
import { FormatUserName } from "../../Config/index";
import { Wrapper } from "./style";

const { Header, Sider, Content } = Layout;
const DeshBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const nevigate = useNavigate();
  const [current, setCurrent] = useState(location.pathname.replace("/", ""));

  useEffect(() => {
    setCurrent(location.pathname.replace("/", ""));
  }, [location]);

  // Breadcrumb items based on the path
  const breadcrumbItems = location.pathname
  .split("/")
  .filter(Boolean)
  .map((crumb) => ({
    title: crumb
      .split("-") // Split hyphenated words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "), // Join them with spaces
  }));

  const handleLogout = () => {
    localStorage.removeItem("UserLoggingData");

    nevigate("/login", { replace: true });
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
          <Divider />
          <Menu
            defaultSelectedKeys={["manageUser"]}
            style={{ backgroundColor: "white" }}
            selectedKeys={[current]}
            onClick={(e) => {
              setCurrent(e.key);
            }}
            items={[
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
            ]}
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
