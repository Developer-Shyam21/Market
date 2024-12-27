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
import { AddBTN } from "../../Component/Button";
import { useSelector } from "react-redux";

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

  const adminDatas = useSelector((state)=> state.AdminPage.AdminData)
    
  const handleSubmit = (value) => {
    console.log("Received values of form: ", value);
    setVisible(false);
  };

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
      sorter: (a, b) => a.name.localeCompare(b.name),
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
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Mobile",
      width: 300,
      dataIndex: "mobile",
      key: "mobile",
      sorter: (a, b) => a.mobile.localeCompare(b.mobile),
    },

    {
      title: "Action",
      dataIndex: "action",
      width: 250,
      key: "action",
      render: (_, record) => (
        <div className="action-btn">
          <Button
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          ></Button>
          <Button
            danger
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
            icon={<DeleteOutlined />}
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
            <AddBTN
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setVisible(true)}
            >
              Add
            </AddBTN>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={adminDatas}
          className={styles.customTable}
          scroll={{
            x: "max-content",
          }}
          pagination={{
            showTotal: (total, range) =>
              `${range[0]} - ${range[1]} of ${total} items`,
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
