import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Divider,
  Flex,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Typography,
} from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { Wrapper } from "./style";

export const User = () => {
  const { Search } = Input;
  const [form] = useForm();
  const [visible, setVisible] = useState(false);

  const handleSubmit = (value) => {
    console.log("Received values of form: ", value);
    setVisible(false);
  };

  return (
    <>
      <Wrapper>
        <Card>
            
          <div className="User-Section">
            <Flex gap={10}>
            <Search style={{ width: "100%" }} />
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
          <Modal
            title="Add User"
            okText="Submit"
            onOk={form.submit}
            open={visible}
            onCancel={() => setVisible(false)}
          >
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input the name!" }]}
              >
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input the email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { min: 6, message: "Password must be at least 6 characters" },
                ]}
              >
                <Input.Password placeholder="Password" />
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
                <Input.Password placeholder="Confirm Password" />
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
                <Input placeholder="Contact Number" />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please input the address!" },
                ]}
              >
                <TextArea  rows={2} />
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
                <Input placeholder="Reference Contact Name" />
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
                <Input placeholder="Reference Email" />
              </Form.Item>

              <Form.Item
                label="Amazon Seller Name"
                name="sellerName"
                rules={[
                  { required: true, message: "Please input the seller name!" },
                ]}
              >
                <Input placeholder="Amazon Seller Name" />
              </Form.Item>

              <Form.Item
                label="Amazon Seller Email"
                name="sellerEmail"
                rules={[
                  { required: true, message: "Please input the seller email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input placeholder="Amazon Seller Email" />
              </Form.Item>
            </Form>
          </Modal>
        </Card>
      </Wrapper>
    </>
  );
};
