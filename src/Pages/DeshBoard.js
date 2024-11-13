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
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import Market from "../Images/logo-main.png";
import "../Css/Deshboard.css";

const { Header, Sider, Content } = Layout;
const DeshBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { Text } = Typography;
  const location = useLocation(); // Get the current URL path
  const navigation = useNavigate()

  // Breadcrumb items based on the path
  const breadcrumbItems = location.pathname
    .split("/")
    .filter(Boolean)
    .map((crumb) => ({
      title: crumb.charAt(0).toUpperCase() + crumb.slice(2),
    }));


    const handleLogout = () => {
      
      navigation("/login")
    }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} >
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
              label: <Link to="manageUser">Manage User/Client</Link>,
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
        <Header >
          <Space direction="horizontal" align="center">
            <Breadcrumb
              items={[{ title: <HomeOutlined /> }, ...breadcrumbItems]}
              style={{ margin: "16px 0" }}
            />
          </Space>
          <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>LogOut</Button>
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
