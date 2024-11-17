import { Col, Row, Typography, Form, Input, Button, message } from "antd";
import React, { useContext } from "react";
import { useForm } from "antd/es/form/Form";
import Market from "../../Images/logo-main.png";
import GraficImage from "../../Images/grafica-principale.svg";
import { Wrapper } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { ContextsApi } from "../../ContextApi/Index";

export const LogIn = () => {
  const { Text, Title } = Typography;
  const [form] = useForm();
  const navigate = useNavigate();
 
  const { getregisterData } = useContext(ContextsApi);


  const onFinish = (values) => {
    const { email, password } = values;
    const loggingUser = getregisterData.find(
      (user) => user.email === email && user.password === password
    );

    if (loggingUser) {
      localStorage.setItem("UserLoggingData", JSON.stringify(loggingUser))
      form.resetFields();
      navigate("/manageUser" , { replace: true });
    } else {
      message.error("Email or Password is incorrect, or you need to register first.");
    }
  };

  return (
    <Wrapper>
          <Row  justify="center" align="middle">
        <Col lg={12} xs={24}>
          <div className="flex-section">
            <div className="login-section">
              <div className="login-header">
                <h1>
                  Sign In to <b>MARKET FORCE</b>
                </h1>
                <Typography> 
                  <div className="create-link">
                  New Here? <a href="/register">Create an Account</a>
                </div>
                  </Typography>
              </div>
              <Form
                name="login"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                layout="vertical"
                form={form}
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
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                    {
                      min: 6,
                      message: "Password must be at least 6 characters",
                    },
                  ]}
                >
                  <Input.Password placeholder="Enter Password" />
                </Form.Item>
                <Form.Item>
                  <div className="forgot-link">
                    <a href="">Forgot password</a>
                  </div>
                </Form.Item>
                <Form.Item>
                  <Button block type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="links">
            <Link to="#">About</Link>
            <Link to="#">Support</Link>
            <Link to="#">Purchase</Link>
          </div>
        </Col>
        <Col xs={24} sm={18} lg={12} className="login-right">
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
                src={GraficImage}
                alt="images"
                width={929}
                height={381}
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
