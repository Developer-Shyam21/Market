export   const AdminMenu = [
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