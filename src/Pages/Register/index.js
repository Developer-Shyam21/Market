import { Col, Row, Typography, Form, Input, Button, Checkbox } from "antd";
import React,{useContext} from "react";
import { useForm } from "antd/es/form/Form";
import Market from "../../Images/logo-main.png";
import { Wrapper } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { ContextsApi } from "../../ContextApi/Index";

export const Register = () => {
  const { Text, Title } = Typography;
  const [form] = useForm();
  const nevigation = useNavigate()
const {  setRegisterData } = useContext(ContextsApi);

const onFinish = (values) => {
  const newUser = { ...values };
  
  setRegisterData((prevData) => {
    const updatedData = [...prevData, newUser];
    localStorage.setItem("userData", JSON.stringify(updatedData));
    return updatedData;
  });
  
  form.resetFields();
  nevigation("/login");
};


  return ( 
    <>
      <Wrapper>
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
          <Col xs={24} sm={18} lg={12} className="register-left">
            <div className="main-register-logo">
              <div className="main-register-body">
                <img src={Market} alt="logo" width={346} height={70} />
                <Title>
                  Welcome to <b>Market Force</b>
                </Title>
                <Text style={{ fontSize: "17px" }}>
                  An Intelligent tool for Amazon Sellers
                </Text>
              </div>
              <div>
                <img
                  src="https://app.getmarketforce.it/media/login-image.svg"
                  alt="images"
                  width={836}
                  height={836}
                  style={{ margin: "0" }}
                  className="grafic-img"
                />
              </div>
            </div>
          </Col>

        {/* right side */}
          <Col lg={12} xs={24}>
            <div className="flex-section">
              <div className="register-section">
                <div className="register-header">
                  <h1>
                    Create An <b>Account</b>
                  </h1>
                  <div className="sign-link">
                    Already have an account? <a href="/login">Sign in here</a>
                  </div>
                </div>
                <Form
                  name="register"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  layout="vertical"
                  form={form}
                >
                  <Row gutter={[18, 10]}>
                    <Col lg={12}>
                      <Form.Item
                        label="First Name"
                        name="fname"
                        rules={[
                          {
                            required: true,
                            message: "Please input your First Name!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col lg={12}>
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
                            message: "The input is not a valid Email!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[18, 10]}>
                    <Col lg={12}>
                      <Form.Item
                        label="Company Name"
                        name="companyname"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Company Name",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col lg={12}>
                      <Form.Item
                        label="Phone Number"
                        name="phonenumber"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Phone Number",
                          },
                          {
                            pattern: new RegExp(/^[0-9]+$/),
                            message: "Phone number must contain only digits",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
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
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
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
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error("Should accept agreement")
                              ),
                      },
                    ]}
                  >
                    <Checkbox style={{right:"20px"}}>
                      I Agree to the Market Force Terms and conditions to use the
                      services provided by the application.
                    </Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div className="links">
                <Link to="#">About</Link>
                <Link to="#">Suport</Link>
                <Link to="#">Purchase</Link>
              </div>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};
