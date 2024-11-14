import React, { useState } from "react";
import {
  EditOutlined,
  PlusOutlined,
  DeleteOutlined,
  EyeOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Flex,
  Form,
  Input,
  Modal,
  Select,
  Table,
} from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { Wrapper } from "./style";

export const Criteria = () => {
  const { Search } = Input;
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
      title: "Criteria Name",
      dataIndex: "criterianame",
      key: "criterianame",
    },
    {
      title: "Criteria Type",
      dataIndex: "criteriatype",
      key: "criteriatype",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="action-btn">
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => handleSee(record)}
            style={{ backgroundColor: "#f5f8fa", color: "#a2a5b8" }}
          ></Button>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            style={{ backgroundColor: "#f5f8fa", color: "#a2a5b8" }}
          ></Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.key)}
            style={{ backgroundColor: "#f5f8fa", color: "#a2a5b8" }}
          ></Button>
          <Button
            type="link"
            danger
            icon={<UserSwitchOutlined />}
            onClick={() => handleSwitch(record)}
            style={{ backgroundColor: "#f5f8fa", color: "#a2a5b8" }}
          ></Button>
        </div>
      ),
    },
  ];

  const handleSee = (record) => {
    console.log("see record:", record);
    // setModalVisible(true);
    // setFormData(record);
  };

  const handleDelete = (key) => {
    console.log("delete key:", key);
  };

  const handleEdit = (record) => {
    console.log("edit record:", record);
    // setModalVisible(true);
    // setFormData(record);
  };

  const handleSwitch = (record) => {
    console.log("switch record:", record);
    // setModalVisible(true);
    // setFormData(record);
  };

  return (
    <>
      <Wrapper>
        <div className="User-Section">
          <div>Criteria</div>
          <Flex gap={10} align="middle"> 
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
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setVisible(true)}
            >
              Add
            </Button>
          </Flex>
        </div>
        <Divider />

        <Table columns={columns} dataSource={UserData} />
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
                <Select.Option value="12hrs">Once every 12 Hours</Select.Option>
                <Select.Option value="24hrs">Once every 24 Hours</Select.Option>
                <Select.Option value="48hrs">Once every 48 Hours</Select.Option>
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
              rules={[{ required: true, message: "Please input the address!" }]}
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
        </Modal>
      </Wrapper>
    </>
  );
};
