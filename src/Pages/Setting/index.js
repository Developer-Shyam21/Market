import React, { useState } from "react";
import {
  EditOutlined,
  PlusOutlined,
 
} from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Flex,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Table,
  Tag,
  Typography,
} from "antd";

import { Wrapper } from "./style";


export const Setting = () => {
  const { Text } = Typography;

 

  return (
    <>
      <Wrapper>
        <div className="User-Section">
          <Text strong>Role Config</Text>

          <Select
              placeholder="Select Admin"
              options={[
                {
                  value: "test",
                  label: "Test",
                },
                {
                  value: "test123",
                  label: "Test123",
                },
                {
                  value: "sara",
                  label: "Sara",
                },
              ]}
            />
        </div>
        <Divider />

       <di>
        No Any Data
       </di>
       
      </Wrapper>
    </>
  );
};
