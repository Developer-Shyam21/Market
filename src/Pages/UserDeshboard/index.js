import React, { useState, useEffect, useContext } from "react";
import {
    Breadcrumb,
    Button,
    Divider,
    Layout,
    Menu,
    Space,
} from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
   
    UserOutlined,
    MailOutlined,
    HomeOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import Market from "../../Images/logo-main.png";
import { Wrapper } from "./style";
import { ContextsApi } from "../../ContextApi/Index";
import { FormatUserName } from "../../Config/index"
import { Icon } from "@iconify/react/dist/iconify.js";

const { Header, Sider, Content } = Layout;

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
                label: <Link to="/Analytics/Vendor-Performance">Vendor Performance</Link>,
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

const UserDeshBoard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [current, setCurrent] = useState(location.pathname.replace("/", ""));
    const [openKeys, setOpenKeys] = useState(["Analytics"]); // Open default parent menu
    const { setUserShow } = useContext(ContextsApi);

    useEffect(() => {
        setCurrent(location.pathname.replace("/", ""))
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
        navigate("/login", { replace: true });
    };

    const siderStyle = {
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable',
    };
  

    const HandelAdmin = () => {
        setUserShow(false)
        navigate("/Manage-User/Client", { replace: true });
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
                    <div className="back-admin-btn">
                    <Button className="backadminbtn" type="primary"  onClick={HandelAdmin }><div className="back-btn-icon">
                    <Icon icon="solar:arrow-right-outline"  />
                    </div> Back To Admin</Button>
                    </div>
                  <Divider />
                    <Menu
                        mode="inline"
                        selectedKeys={[current]}
                        defaultSelectedKeys={["Analytics/Overview"]}
                        openKeys={openKeys}
                        onOpenChange={(keys) => setOpenKeys(keys)}
                        onClick={(e) => setCurrent(e.key)}
                        items={menuItems}
                    />
                </Sider>
                <Layout
                style={{
                        marginInlineStart: 289,
                    }}
                >
                    <Header>
                    <Space direction="vertical" >
                            {/* Breadcrumb showing route hierarchy */}
                            <Breadcrumb
                                items={[
                                    { title: <HomeOutlined />},
                                    ...breadcrumbItems.map((item) => ({
                                        title: <div> {item.title}</div>,
                                    })),
                                   
                                ]}
                                separator=">"
                                style={{ fontSize: "14px" }}
                            />
                            {/* Header Title for the Current Page */}
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

export default UserDeshBoard;
