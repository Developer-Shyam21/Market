import React, { useState } from "react";
import {
  Breadcrumb,
  Button,
  Divider,
  Layout,
  Menu,
  Space,
  Typography,
} from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Market from "../Images/logo-main.png";
import "../Css/Deshboard.css";

const { Header, Sider, Content } = Layout;
const DeshBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { Text } = Typography;
  const location = useLocation(); // Get the current URL path

  // Breadcrumb items based on the path
  const breadcrumbItems = location.pathname
    .split("/")
    .filter(Boolean)
    .map((crumb) => ({
      title: crumb.charAt(0).toUpperCase() + crumb.slice(1),
    }));

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <img src={Market} alt="logo" width={247} height={50} />
        </div>
        <Divider />
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "white" }}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="/deshboard/manageUser">Manage User/Client</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }}>
          <Space direction="horizontal" align="center">
            <Breadcrumb
              items={[{ title: "Home" }, ...breadcrumbItems]}
              style={{ margin: "16px 0" }}
            />
          </Space>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#fff",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DeshBoard;
