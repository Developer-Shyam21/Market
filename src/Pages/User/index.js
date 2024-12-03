import React, { useContext, useState } from "react";
import {
  EditOutlined,
  PlusOutlined,
  DeleteOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Divider,
  Flex,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Table,
  Tag,
  message,
} from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { UserSection, Wrapper } from "./style";
import { createStyles } from "antd-style";
import { ContextsApi } from "../../ContextApi/Index";
import { useNavigate } from "react-router-dom";
import { BTN } from "../../Config";

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});
const { Search } = Input;

export const UserList = () => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const { styles } = useStyle();
  const navigate = useNavigate();
  const { LoginData, TypeSwitch,updateState ,currentType} = useContext(ContextsApi);


  const handleSubmit = (value) => {
    console.log("Received values of form: ", LoginData);
    setVisible(false);
  };

  const UserData = [
    {
      key: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "+1 (555) 123-4567",
      accounttype: "Seller",
      channel: "Web",
      pandingreports: 3,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      mobile: "+1 (555) 234-5678",
      accounttype: "-",
      channel: "Mobile",
      pandingreports: 5,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      mobile: "+1 (555) 345-6789",
      accounttype: "Seller",
      channel: "API",
      pandingreports: 0,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 4,
      name: "Sarah Lee",
      email: "sarah.lee@example.com",
      mobile: "+1 (555) 456-7890",
      accounttype: "Vendor",
      channel: "Web",
      pandingreports: 2,
      status: "Reviewed",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 5,
      name: "David Brown",
      email: "david.brown@example.com",
      mobile: "+1 (555) 567-8901",
      accounttype: "Seller",
      channel: "Mobile",
      pandingreports: 7,
      status: "Reviewed",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 6,
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      mobile: "+1 (555) 678-9012",
      accounttype: "Vendor",
      channel: "API",
      pandingreports: 1,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 7,
      name: "Robert Taylor",
      email: "robert.taylor@example.com",
      mobile: "+1 (555) 789-0123",
      accounttype: "Vendor",
      channel: "Web",
      pandingreports: 4,
      status: "Reviewed",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 8,
      name: "Laura Martinez",
      email: "laura.martinez@example.com",
      mobile: "+1 (555) 890-1234",
      accounttype: "Seller",
      channel: "Mobile",
      pandingreports: 6,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 9,
      name: "James Anderson",
      email: "james.anderson@example.com",
      mobile: "+1 (555) 901-2345",
      accounttype: "Seller",
      channel: "API",
      pandingreports: 8,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 10,
      name: "Mary Harris",
      email: "mary.harris@example.com",
      mobile: "+1 (555) 012-3456",
      accounttype: "Vendor",
      channel: "Web",
      pandingreports: 0,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <Row gutter={[12, 14]} align="middle">
          <Col>
            <Avatar style={{ color: "#f1416c", backgroundColor: "#fff5f8" }}>
              {text.charAt(0)}
            </Avatar>
          </Col>
          <Col>{text}</Col>
        </Row>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Account Type",
      dataIndex: "accounttype",
      key: "accounttype",
      render: (accounttype) => (
        <span
          style={{
            fontWeight: "700",
            fontSize: "14px",
            color:
              accounttype === "Seller"
                ? "rgb(255, 155, 1)"
                : accounttype === "Vendor"
                ? "rgb(0, 113, 220)"
                : "black",
          }}
        >
          {accounttype}
        </span>
      ),
    },
    {
      title: "Channel",
      dataIndex: "channel",
      key: "channel",
    },
    {
      title: "Panding Reports",
      dataIndex: "pandingreports",
      key: "pandingreports",
      width: 150
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          style={{
            fontSize: "14px",
          }}
          color={
            status === "Under Review"
              ? "blue"
              : status === "Reviewed"
              ? "green"
              : "default"
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Switch User",
      dataIndex: "switchuser",
      key: "switchuser",
      render: (_, record) => (
        <Button
          type="link"
          size="small"
          icon={<LoginOutlined />}
          onClick={() => handelUserData(record.email)}
          className="switchuser"
        >
          SwitchUser
        </Button>
      ),
    },
    {
      title: "Action",
      width: 150,
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="action-btn">
          <Button
            type="link"
            icon={<EditOutlined />}
            style={{
              backgroundColor: "#f5f8fa",
              color: "#a2a5b8",
              padding: "16px",
            }}
            onClick={() => handleEdit(record)}
          ></Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            style={{
              backgroundColor: "#f5f8fa",
              color: "#a2a5b8",
              padding: "16px",
            }}
            onClick={() => handleDelete(record.key)}
          ></Button>
        </div>
      ),
    },
  ];

  const handleDelete = (key) => {
    console.log("delete key:", key);
  };

  const handleEdit = (record) => {
    console.log("edit record:", record);
    // setModalVisible(true);
    // setFormData(record);
  };

  const handelUserData = (email) => {
    // Update the type in both state and local storage
    const updattype = 2;
    updateState("type", updattype);

    const updatedLoginDataEmail = {
      ...LoginData,
      email: email,
      type: 2,
    };

    localStorage.setItem(
      "SwicthUserData",
      JSON.stringify(updatedLoginDataEmail)
    );
    if(updattype === 2){
      navigate("/Analytics/Overview", { replace: true })
    } else{
      navigate("/Manage-User/Client", { replace: true })
    }
  
  };
  

  return (
    <>
      <Wrapper>
        <div className="User-Section">
          <Flex gap={10}>
            <Search placeholder="Search..." />
            <Select
              placeholder="Active"
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: "all",
                  label: "All",
                },
                {
                  value: "active",
                  label: "Active",
                },
                {
                  value: "inactive",
                  label: "Inactive",
                },
              ]}
            />
          </Flex>
          <div>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setVisible(true)}
            >
              Add
            </Button>
          </div>
        </div>
        <Divider />

        <Table
          columns={columns}
          dataSource={UserData}
          className={styles.customTable}
          scroll={{
            x: "max-content",
          }}
        />
        <Modal
          title="Add User"
          okText="Submit"
          onOk={form.submit}
          open={visible}
          onCancel={() => setVisible(false)}
          bodyStyle={{
            maxHeight: "calc(-320px + 100vh)",
            overflowY: "auto",
            scrollbarWidth: "thin",
            scrollbarColor: "#eff2f5 transparent",
            paddingRight: "15px",
            marginBottom: "15px",
          }}
        >
          <UserSection>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input the name!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input the email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { min: 6, message: "Password must be at least 6 characters" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Buy Box Data Update Frequency"
                name="updateFrequency"
              >
                <Select>
                  <Select.Option value="12hrs">
                    Once every 12 Hours
                  </Select.Option>
                  <Select.Option value="24hrs">
                    Once every 24 Hours
                  </Select.Option>
                  <Select.Option value="48hrs">
                    Once every 48 Hours
                  </Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Contact Number"
                name="contactNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input the contact number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please input the address!" },
                ]}
              >
                <TextArea rows={2} />
              </Form.Item>

              <Form.Item
                label="Reference Contact Name"
                name="referenceName"
                rules={[
                  {
                    required: true,
                    message: "Please input the reference name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Reference Email"
                name="referenceEmail"
                rules={[
                  {
                    required: true,
                    message: "Please input the reference email!",
                  },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Amazon Seller Name"
                name="sellerName"
                rules={[
                  { required: true, message: "Please input the seller name!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Amazon Seller Email"
                name="sellerEmail"
                rules={[
                  { required: true, message: "Please input the seller email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Form>
          </UserSection>
        </Modal>
        
      </Wrapper>
    </>
  );
};
