export const AdminMenuItems = [
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
  ]