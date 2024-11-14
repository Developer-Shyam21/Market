import React, { useState } from "react";
import { EditOutlined, PlusOutlined,DeleteOutlined } from "@ant-design/icons";
import {
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
import { Wrapper } from "./style";


export const Admin = () => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);

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
        <Row align="middle">
          <Col>
            <img
              src="/path/to/logo.png"
              alt="Logo"
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
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
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="action-btn">
          <Button
            type="link"
            icon={<EditOutlined />}
            style={{backgroundColor: "#f5f8fa",color:"#a2a5b8"}}
            onClick={() => handleEdit(record)}
          >
           
          </Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            style={{backgroundColor: "#f5f8fa",color:"#a2a5b8"}}
            onClick={() => handleDelete(record.key)}
          >
           
          </Button>
        </div>
      ),
    },
  ]


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

          <Table columns={columns} dataSource={UserData} />
          <Modal
            title="Add User"
            okText="Submit"
            onOk={form.submit}
            open={visible}
            onCancel={() => setVisible(false)}
          >
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Row gutter={[16,16]}>
                    <Col lg={12}> <Form.Item
                label="User Name"
                name="uname"
                rules={[{ required: true, message: "Please input the name!" }]}
              >
                <Input  />
              </Form.Item></Col>
                    <Col lg={12}>
              <Form.Item
                label="User / Client"
                name="user/client"
                rules={[{ required: true, message: "Please input the name!" }]}
              >
                <Input  />
              </Form.Item></Col>
                </Row> 

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input the email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input  />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { min: 6, message: "Password must be at least 6 characters" },
                ]}
              >
                <Input.Password  />
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
                <Input.Password  />
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
                <Input  />
              </Form.Item>

             
            </Form>
          </Modal>
        
      </Wrapper>
    </>
  );
};
