import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Col,
  Divider,
  Flex,
  Form,
  Input,
  message,
  Row,
  Select,
  Tag,
  Typography,
} from "antd";
import { Wrapper } from "./style"; // Ensure this path is correct
import { UserOutlined } from "@ant-design/icons";
 
import { useSelector } from "react-redux";
import Password from "antd/es/input/Password";
import { PrimaryColor } from "../../../Config";
 
export const UserSettings = () => {
  const [userDataList, setUserDataList] = useState([]);
  const [currentKey, setCurrentKey] = useState(false);
  const Switchusers = useSelector((state) => state.userReducer.user);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    Switchusers.map((user) => {
      setUserDataList(user);
    });
  }, []);
 
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("apiData")) || []
  );
 
  const ChangePassword = () => {
    setCurrentKey(true);
  };
 
  const ResetPassword = (value) => {
    const { currentpassword } = value;
 
    const CurrentPassword = localData.find(
      (user) => user.password == currentpassword
    );
    if (CurrentPassword) {
      setCurrentUser(CurrentPassword);
      message.success("Your Current Password are Right ");
    } else {
      message.error("Current Passowrd are Wrong.");
    }
    console.log("Resetting password", currentUser);
 
    //  const resetPassword = localData.map((data) =>
    //   data.password === value.currentpassword ? { ...data, password: value.newpassword }  : data
    //  )
  };
 
  const PasswordChange = (value) => {
    const { newpassword } = value;
 
    const resetPassword = localData.map((data) =>
      data.password === currentUser.password
        ? { ...data, password: newpassword }
        : data
    );
    localStorage.setItem("apiData", JSON.stringify(resetPassword));
    console.log("Resetting password changes", resetPassword);
  };
 
  return (
    <Wrapper>
      <div className="User-Section">
        <Row gutter={[24, 14]}>
          <Col xs={24} lg={24} xl={6}>
            <div className="Pofile-left">
              {Switchusers.map((user) => {
                return (
                  <>
                    <div className="userName">
                      <Avatar size="large" icon={<UserOutlined />}></Avatar>
                      <p>{user.name}</p>
                      <Tag
                        style={{
                          fontSize: "14px",
                        }}
                        color={
                         
                          "blue"
                        }
                      >
                        Admin
                      </Tag>
                    </div>
                    <Divider />
                    <div className="userName1">
                      Name
                      <p> {user.name}</p>
                    </div>
                    <Divider />
                    <div className="userName1">
                      Email
                      <p> {user.email}</p>
                    </div>
                    <Divider />
                    <div className="userName1">
                      Contect No
                      <p> {user.mobile}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </Col>
          <Col xs={24} lg={24} xl={18}>
            <div className="Pofile-right">
              <div>
                <h1>Profile Details</h1>
              </div>
              <Divider />
              <Flex
                justify="space-between"
                align="center"
                style={{ padding: "0 10px" }}
              >
                <h3>Avtar</h3>
                <div className="avtar">
                  <Avatar size="large" icon={<UserOutlined />}></Avatar>
                </div>
              </Flex>
 
              <Form
                layout="horizontal"
                labelCol={{ lg: 8 }}
                wrapperCol={{ lg: 19 }}
                size="large"
              >
                <Form.Item
                  label="Full Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input the name!" },
                  ]}
                  className="fw-bold "
                >
                  <Input variant="filled" placeholder={userDataList.name} />
                </Form.Item>
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    { required: true, message: "Please input the eamil!" },
                  ]}
                  className="fw-bold "
                >
                  <Input variant="filled" placeholder={userDataList.email} />
                </Form.Item>
                <Form.Item
                  label="Seller Name"
                  name="mobile"
                  rules={[
                    { required: true, message: "Please input the mobile no.!" },
                  ]}
                  className="fw-bold "
                >
                  <Input variant="filled" placeholder={userDataList.mobile} />
                </Form.Item>
              </Form>
              <Divider />
              <div className="sub-btn">
                <Button>Discard</Button>
                <Button type="primary">Save Change</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "25px" }}>
          <Col xs={24} xl={24}>
            <div className="Pofile-right">
              <div>
                <h1>Sign-in Method</h1>
              </div>
              <Divider />
              <div className="reser-password">
                <Flex justify="space-between" align="center">
                  <div className="password">
                    <p>Password</p>
                    <div className="password1">**********</div>
                  </div>
                  <div>
                    <Button type="primary" onClick={ChangePassword}>
                      Reset Password
                    </Button>
                  </div>
                </Flex>
              </div>
              <div style={{ display: currentKey ? "block" : "none" }}>
                <Form
                  layout="vertical"
                  align="center"
                  onFinish={currentUser ? PasswordChange : ResetPassword}
                >
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                      <Form.Item name="currentpassword">
                        <Input
                          variant="filled"
                          placeholder="Current Password"
                          size="large"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                      <Form.Item
                        name="newpassword"
                        rules={[
                          {
                            required: true,
                            message: "Please input your New Password!",
                          },
                          {
                            min: 6,
                            message: "Password must be at least 6 characters",
                          },
                        ]}
                      >
                        <Input.Password
                          placeholder=" New Password"
                          size="large"
                          variant="filled"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                      <Form.Item
                        name="confirm"
                        dependencies={["newpassword"]}
                        rules={[
                          {
                            required: true,
                            message: "Please confirm your password!",
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue("newpassword") === value
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error("The passwords do not match!")
                              );
                            },
                          }),
                        ]}
                      >
                        <Input.Password
                          placeholder="Confirm New Password"
                          size="large"
                          variant="filled"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                      <Button
                        block
                        type="primary"
                        htmlType="submit"
                        size="large"
                      >
                        Reset Password
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};
 