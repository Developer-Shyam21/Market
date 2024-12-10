import React, { useContext, useState } from "react";
import { Col, Row, Typography, Form, Input, Button, message } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { Wrapper } from "./style";
import Forgot from "../../Images/forgot-password.png";
import Market from "../../Images/logo-main.png";

export const ForgotPassword = () => {
  const { Text, Title } = Typography;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null); // To store the user for password reset
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("apiData")) || []
  ); // Load data from localStorage

  // Handle Email Submission for Verification
  const handleEmailSubmit = ({ email }) => {
    const foundUser = localData.find((user) => user.email === email);

    if (foundUser) {
      setCurrentUser(foundUser); // Set the user for password reset
      message.success("Email verified! Please enter a new password.");
    } else {
      message.error("Email not found. Please check and try again.");
    }
  };

  // Handle Password Reset Submission
  const handlePasswordSubmit = ({ newpassword, confirm }) => {
    if (newpassword !== confirm) {
      message.error("Passwords do not match!");
      return;
    }

    // Update the password in localStorage
    const updatedData = localData.map((user) =>
      user.email === currentUser.email ? { ...user, password: newpassword } : user
    );
    console.log("my updated password", updatedData);
    localStorage.setItem("apiData", JSON.stringify(updatedData)); // Persist to localStorage
    setLocalData(updatedData); // Update state with new data
    message.success("Password reset successfully!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <Wrapper>
      <Row justify="center" align="middle" style={{ backgroundColor: "white", height: "100vh" }}>
        <Col lg={12} xs={24}>
          <div className="flex-section">
            <div className="login-section">
              <div className="login-header">
                <h1>Forgot Password?</h1>
                <Typography>
                  <div className="create-link">
                    {currentUser
                      ? "Enter your new password to reset it."
                      : "Enter your email to reset your password."}
                  </div>
                </Typography>
              </div>
              <Form
                form={form}
                name="forgot-password"
                onFinish={currentUser ? handlePasswordSubmit : handleEmailSubmit}
                layout="vertical"
                style={{ textAlign: "center" }}
              >
                {!currentUser ? (
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your Email!" },
                      { type: "email", message: "The input is not a valid Email!" },
                    ]}
                  >
                    <Input placeholder="Enter Email" />
                  </Form.Item>
                ) : (
                  <>
                    <Form.Item
                      label="New Password"
                      name="newpassword"
                      rules={[
                        { required: true, message: "Please input your New Password!" },
                        { min: 6, message: "Password must be at least 6 characters" },
                      ]}
                    >
                      <Input.Password placeholder="Enter New Password" />
                    </Form.Item>
                    <Form.Item
                      name="confirm"
                      label="Confirm Password"
                      dependencies={["newpassword"]}
                      rules={[
                        { required: true, message: "Please confirm your password!" },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("newpassword") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error("The passwords do not match!"));
                          },
                        }),
                      ]}
                    >
                      <Input.Password placeholder="Confirm New Password" />
                    </Form.Item>
                  </>
                )}

                <Form.Item>
                  <Button block type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
                <div>
                  Back to Login Page <Link to="/login">Login</Link>
                </div>
              </Form>
            </div>
          </div>
          <div className="links">
            <Link to="#">About</Link>
            <Link to="#">Support</Link>
            <Link to="#">Purchase</Link>
          </div>
        </Col>
        <Col xs={24} sm={18} lg={12} className="forgot-right">
          <div className="main-logo">
            <div className="main-logo-body">
              <img src={Market} alt="logo" width={346} height={70} />
              <Title level={2}>
                Welcome to MARKET <b>FORCE</b>
              </Title>
              <Text style={{ fontSize: "17px" }}>
                The first software that constantly verifies the integrity of your Amazon business for you.
              </Text>
            </div>
            <div>
              <img
                src={Forgot}
                alt="images"
                width={550}
                height={250}
                style={{ margin: "0" }}
                className="grafic-img"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};
