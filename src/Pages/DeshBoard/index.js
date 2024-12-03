import React, { useState, useEffect, useContext } from "react";
import { Avatar, Breadcrumb, Button, Divider, Flex, Layout, Menu, Select, Space } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  CodeOutlined,
  FileDoneOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  LeftOutlined,
  SettingOutlined,
  MailOutlined,
  RightOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import Market from "../../Images/logo-main.png";
import { FormatUserName, PrimaryColor } from "../../Config/index";
import { Wrapper } from "./style";
import { ContextsApi } from "../../ContextApi/Index";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";

const { Header, Sider, Content } = Layout;

const DeshBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const nevigate = useNavigate();
  const [current, setCurrent] = useState(location.pathname.replace("/", ""));
  const [openKeys, setOpenKeys] = useState(["Analytics"]);
  const { LoginData, currentType, updateState,SwitchUserData } = useContext(ContextsApi);
  const { t ,i18n} = useTranslation()

  useEffect(() => {
    setCurrent(location.pathname.replace("/", ""));
  }, [location]);
  const AdminMenu = [
    {
      key: "Manage-User/Client",
      icon: <UserOutlined />,
      label: <Link to="/Manage-User/Client">{t("Manage User/Client")}</Link>,
    },
    {
      key: "Manage-Admin",
      icon: <VideoCameraOutlined />,
      label: <Link to="/Manage-Admin">{t("Manage Admin")}</Link>,
    },
    {
      key: "Criteria",
      icon: <FileDoneOutlined />,
      label: <Link to="/Criteria">{t("Criteria")}</Link>,
    },
    {
      key: "Embed-Codes",
      icon: <CodeOutlined />,
      label: <Link to="/Embed-Codes">{t("Embed Codes")}</Link>,
    },
    {
      key: "Setting",
      icon: <SettingOutlined />,
      label: <Link to="/Setting">{t("Setting")}</Link>,
    },
  ];

  const menuItems = [
    {
      key: "Analytics",
      icon: <MailOutlined />,
      label: t("Analytics"),
      children: [
        {
          key: "Analytics/Overview",
          label: <Link to="/Analytics/Overview">{t("Overview")}</Link>,
        },
        {
          key: "Analytics/Performance",
          label: <Link to="/Analytics/Performance">{t("Performance")}</Link>,
        },
        {
          key: "Analytics/Vendor-Performance",
          label: (
            <Link to="/Analytics/Vendor-Performance">{t("Vendor Performance")}</Link>
          ),
        },
        {
          key: "Analytics/Vendor-Order",
          label: <Link to="/Analytics/Vendor-Order">{t("Vendor Order")}</Link>,
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
    const updateType = 1;

    localStorage.removeItem("SwicthUserData");

    updateState("type", updateType);

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

  const Sliders = styled(Sider)`
  width: ${(props) => (props.collapsed ? "80px" : "250px")} !important;
  max-width:  ${(props) => (props.collapsed ? "80px" : "250px")} !important;
  min-width:  ${(props) => (props.collapsed ? "80px" : "250px")} !important;
  `;
  return (
    <Wrapper collapsed={collapsed}>
      <Layout>
        <Sliders
          style={siderStyle}
          trigger={null}  
          collapsible
          collapsed={collapsed}
        >
          
          <div className="demo-logo-vertical">
            <img
              src={Market}
              alt="logo"
              width={collapsed ? 55 : 200}
              height={collapsed ? 20:40}
              className="logo-animation"
            />
          </div>
          <Divider />
          {localStorage.getItem("SwicthUserData") ? (
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
                  {t("Back To Admin")}
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
            style={{ backgroundColor: "transparent", borderInlineEnd: "0" }}
            selectedKeys={[current]}
            openKeys={openKeys}
            onOpenChange={(keys) => setOpenKeys(keys)}
            onClick={(e) => {
              setCurrent(e.key);
            }}
            items={currentType.type === 1 ? AdminMenu : menuItems}
          />

          <div className="logout-btn">
            <Button className="logoutbtn" type="primary" onClick={handleLogout}>
              <div className="logout-btn-icon">
                <Icon icon="uiw:logout" />
              </div>
              {t("LogOut")}
            </Button>
          </div>
        </Sliders>
        {/* <Button
            type="text"
            icon={collapsed ?<RightOutlined />: <LeftOutlined /> }
            onClick={() => setCollapsed(!collapsed)}
            collapsed={collapsed}
            style={{
              fontSize: '16px',
              width: 40,
              height: 40,
              background: PrimaryColor,
              position:"relative",
             
            }}
          /> */}
        <Layout
          style={{
            marginInlineStart:  277,
          }}
        >
          <Header collapsed={collapsed}> 
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

            
            <div className="left-header">
            <Select
          placeholder="Select Language"
          onChange={(e) => {
            
            i18n.changeLanguage(e);
          }}
          value={i18n.language === "en-US" ? "en" : i18n.language}
          className="w-150px me-3"
          options={[
            {
              label: "English",
              value: "en",
            },
            {
              label: "German",
              value: "de",
            },
            {
              label: "Hindi",
              value: "hi",
            },
          ]}
        />
              <div className="profile">
                <Avatar size="large" icon={<UserOutlined />}></Avatar>
                <Flex vertical>
                  <span style={{ fontWeight: "bold" }}>
                  {currentType.type === 1 ? "Admin" : "User"}
                  </span>
                  <span>{currentType.type === 1 ? LoginData.email : SwitchUserData.email}</span>
                </Flex>
              </div>
            </div>
          </Header>
          {currentType.type === 1 ? (
            <>
              <Content
                style={{
                  background: "#fff",
                  margin: "50px 30px 0",
                  overflow: "initial",
                }}
              >
                <Outlet />
              </Content>
            </>
          ) : (
            <>
              <Content
                style={{
                  margin: "50px 30px 0",
                  overflow: "initial",
                }}
              >
                <Outlet />
              </Content>
            </>
          )}
        </Layout>
      </Layout>
    </Wrapper>
  );
};

export default DeshBoard;
