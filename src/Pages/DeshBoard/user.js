export const UserMenu = [
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
            <Link to="/Analytics/Vendor-Performance">
              {t("Vendor Performance")}
            </Link>
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
    {
      key: "Settings",
      icon: <SettingOutlined />,
      label: <Link to="/Settings">{t("Settings")}</Link>,
    },
  ];