import { Col, Row, Typography, Form, Input, Button, message } from "antd";
import React, { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { Wrapper } from "./style"; // Assuming Wrapper for styling
import { Link, Navigate, useNavigate } from "react-router-dom";
import Forgot from "../../Images/forgot-password.png";
import Market from "../../Images/logo-main.png";

export const ForgotPassword = () => {
  const { Text, Title } = Typography;
  const [form] = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { email } = values;
    setIsSubmitting(true);

   
    setTimeout(() => {
      setIsSubmitting(false);

    
      const mockRegisteredEmails = ["user1@example.com", "user2@example.com"];
      if (mockRegisteredEmails.includes(email)) {
        message.success("Password reset link sent to your email.");
        navigate("/login"); 
      } else {
        message.error("Email not found. Please check and try again.");
      }
    }, 1500); // Simulate API delay
  };

  return (
    <Wrapper>
      <Row justify="center" align="middle" style={{ backgroundColor: "white",height:"100vh" }}>
        <Col lg={12} xs={24}>
          <div className="flex-section">
            <div className="login-section">
              <div className="login-header">
                <h1>Forgot Password?</h1>
                <Typography>
                  <div className="create-link">
                    Enter your email to reset your password.
                  </div>
                </Typography>
              </div>
              <Form
                name="forgot-password"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                layout="vertical"
                form={form}
                style={{textAlign:"center"}}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                    {
                      type: "email",
                      message: "The input is not valid Email!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Email" />
                </Form.Item>
                <Form.Item>
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form.Item>
                <Link to="/login"  >Login</Link>
              </Form>
            </div>
          </div>
          <div className="links">
            <Link to="#">About</Link>
            <Link to="#">Support</Link>
            <Link to="#">Purchase</Link>
          </div>
        </Col>
        <Col xs={24} sm={18} lg={12} className="forgot-right ">
          <div className="main-logo">
            <div className="main-logo-body">
            <img src={Market} alt="logo" width={346} height={70} />
              <Title level={2}>
                Welcome to MARKET <b>FORCE</b>
              </Title>
              <Text style={{ fontSize: "17px" }}>
                The first software that constantly verifies the integrity of
                your Amazon business for you.
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
