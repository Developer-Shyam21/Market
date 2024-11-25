import React, { useState } from "react";
import { EditOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Table,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { ModalAdmin, Wrapper } from "./style";
import { createStyles } from "antd-style";

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
export const AdminPage = () => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const { styles } = useStyle();

  const handleSubmit = (value) => {
    console.log("Received values of form: ", value);
    setVisible(false);
  };

  const UserData = [
    {
      key: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "+1 (555) 123-4567",
      action: "Action",
    },
    {
      key: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      mobile: "+1 (555) 234-5678",
      action: "Action",
    },
    {
      key: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      mobile: "+1 (555) 345-6789",
      action: "Action",
    },
    {
      key: 4,
      name: "Sarah Lee",
      email: "sarah.lee@example.com",
      mobile: "+1 (555) 456-7890",
      action: "Action",
    },
    {
      key: 5,
      name: "David Brown",
      email: "david.brown@example.com",
      mobile: "+1 (555) 567-8901",
      action: "Action",
    },
    {
      key: 6,
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      mobile: "+1 (555) 678-9012",
      action: "Action",
    },
    {
      key: 7,
      name: "Robert Taylor",
      email: "robert.taylor@example.com",
      mobile: "+1 (555) 789-0123",
      action: "Action",
    },
    {
      key: 8,
      name: "Laura Martinez",
      email: "laura.martinez@example.com",
      mobile: "+1 (555) 890-1234",
      action: "Action",
    },
    {
      key: 9,
      name: "James Anderson",
      email: "james.anderson@example.com",
      mobile: "+1 (555) 901-2345",
      action: "Action",
    },
    {
      key: 10,
      name: "Mary Harris",
      email: "mary.harris@example.com",
      mobile: "+1 (555) 012-3456",
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
        <Row gutter={[14, 14]} align="middle">
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
      width: 350,
      key: "email",
    },
    {
      title: "Mobile",
      width: 300,
      dataIndex: "mobile",
      key: "mobile",
    },

    {
      title: "Action",
      dataIndex: "action",
      width: 250,
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

  return (
    <>
      <Wrapper>
        <div className="User-Section">
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
          pagination={{
            pageSize: 10,
            pageSizeOptions: ["5", "10", "15"],
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
          <ModalAdmin>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Row gutter={[16, 16]}>
                <Col lg={12}>
                  {" "}
                  <Form.Item
                    label="User Name"
                    name="uname"
                    rules={[
                      { required: true, message: "Please input the name!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={12}>
                  <Form.Item
                    label="User / Client"
                    name="user/client"
                    rules={[
                      { required: true, message: "Please input the name!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

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
            </Form>
          </ModalAdmin>
        </Modal>
      </Wrapper>
    </>
  );
};
