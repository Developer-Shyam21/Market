import React, { useState,useContext } from "react";
import {
  Breadcrumb,
  Button,
  Divider,
  Layout,
  Menu,
  Space,
} from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FileDoneOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import Market from "../Images/logo-main.png";
import "../Css/Deshboard.css";
import { ContextsApi } from "../ContextApi/Index";
import { FormatUserName} from "../Config/index"

const { Header, Sider, Content } = Layout;
const DeshBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation(); 

  // Breadcrumb items based on the path
  const breadcrumbItems = location.pathname
    .split("/")
    .filter(Boolean)
    .map((crumb) => ({
      title: crumb.charAt(0).toUpperCase() + crumb.slice(1),
    }));

    const { setLoginData } = useContext(ContextsApi);
    const handleLogout = () => { 
      setLoginData([])
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
          defaultSelectedKeys={["manageUser"]}
          style={{ backgroundColor: "white" }}
          items={[
            {
              key: "manageUser",
              icon: <UserOutlined />,
              label: <Link to="/manageUser">Manage User/Client</Link>,
            },
            {
              key: "manageAdmin",
              icon: <VideoCameraOutlined />,
              label:<Link to="/manageAdmin">Manage Admin</Link>,
            },
            {
              key: "Criteria",
              icon: <FileDoneOutlined />,
              label:<Link to="/criteria">Criteria</Link>, 
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header >
          <Space direction="vertical" align="center">
            <Breadcrumb
              items={[{ title: <HomeOutlined /> }, ...breadcrumbItems]}
              separator={">"}
              style={{fontSize:"14px"}}
            />
            <Breadcrumb
            style={{fontSize:"22px"}}
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
          <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>LogOut</Button>
        </Header>
        <Content
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DeshBoard;
