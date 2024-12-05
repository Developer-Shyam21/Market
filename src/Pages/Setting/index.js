import React, { useState } from "react";
// import {
//   EditOutlined,
//   PlusOutlined,

// } from "@ant-design/icons";
import { Button, Col, DatePicker, Divider, Form, Input, Row, Select, Typography } from "antd";

import { Wrapper } from "./style";
import { FormFiled } from "./FormFiled";

export const Setting = () => {
  
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Validation Failed:", errorInfo);
  };

  return (
    <>
      <Wrapper>
        <Form  layout="vertical" onFinish={onFinish}
      onFinishFailed={onFinishFailed}
       
      >
          <FormFiled />
         <div className="button">
          <Button type="primary" htmlType="submit">Submit</Button>
         </div>
        </Form>
      </Wrapper>
    </>
  );
};
