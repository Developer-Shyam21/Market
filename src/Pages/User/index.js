import React, { useContext, useState } from "react";
import {
  EditOutlined,
  PlusOutlined,
  DeleteOutlined,
  LoginOutlined,
  QuestionCircleOutlined
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
  Pagination,
  Popconfirm,
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
import { useDispatch, useSelector } from "react-redux";
import { setDeleteData, setUpdateData, setUserData } from "../../Redux/reducer";

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
  const [currentPage, setCurrentPage] = useState(1);
  const { styles } = useStyle();
  const navigate = useNavigate();
  const { LoginData, TypeSwitch, updateState, currentType } =
    useContext(ContextsApi);
  const dispatch = useDispatch(); // Redux dispatch
  const users = useSelector((state) => state.reducer.data);

//   const SwitchUserData = useSelector((state) => state.userReducer.user)
// console.log("switch user data is the : ",SwitchUserData)
  const handleSubmit = (value) => {
    const updatedData = { ...value };
    dispatch(setUpdateData({ key: value.key, updatedData })); // Dispatch update action
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
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
      sorter: (a, b) => a.mobile.localeCompare(b.mobile),
    },
    {
      title: "Account Type",
      dataIndex: "accounttype",
      key: "accounttype",
      sorter: (a, b) => a.accounttype.localeCompare(b.accounttype),
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
      sorter: (a, b) => a.pandingreports.localeCompare(b.pandingreports),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
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
          size="middle"
          icon={<LoginOutlined />}
          onClick={() => handelUserData(record)}
        >
          Switch User
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
            type="primary"
            icon={<EditOutlined />}
            style={{
              backgroundColor: "#f5f8fa",
              color: "#a2a5b8",
              padding: "16px",
            }}
            onClick={() => handleEdit(record)}
          ></Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            icon={
              <QuestionCircleOutlined
                style={{
                  color: "red",
                }}
              />
            }
            okText="Yes"
            cancelText="No"
          >
           <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            style={{
              backgroundColor: "#f5f8fa",
              color: "#a2a5b8",
              
            }}
            onClick={() => handleDelete(record.key)}
          ></Button>
          </Popconfirm>
          
        </div>
      ),
    },
  ];

  const handleDelete = (key) => {
    dispatch(setDeleteData(key));
  };

  const handleEdit = (record) => {
    form.setFieldsValue(record); // Populate form fields with user data
    setVisible(true);
  };

  const handelUserData = (record) => {
    // Update the type in both state and local storage
    const updattype = 2;
    updateState("type", updattype);
    dispatch(setUserData(record));

    const updatedLoginDataEmail = {
      ...LoginData,
      email: record.email,
      type: 2,
    };

    localStorage.setItem(
      "SwicthUserData",
      JSON.stringify(updatedLoginDataEmail)
    );
    if (updattype === 2) {
      navigate("/Analytics/Overview", { replace: true });
    } else {
      navigate("/Manage-User/Client", { replace: true });
    }
  };
  const handlePageChange = (page, pageSize) => {
    ; // Update the current page on page change
  };
const handleSearch = (e) => {
  console.log("my serach users", e.target.value)
}

  return (
    <>
      <Wrapper>
        <div className="User-Section">
          <Flex gap={10}>
            <Search placeholder="Search..." onChange={(e) => handleSearch(e)}/>
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
          dataSource={users}
          className={styles.customTable}
          scroll={{
            x: "max-content",
          }}
          pagination={{
            showTotal: (total, range) =>
              ` ${range[0]} - ${range[1]} of ${total} items`,
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
                name="mobile"
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
