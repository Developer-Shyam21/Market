import React, { useState } from "react";
// import {
//   EditOutlined,
//   PlusOutlined,

// } from "@ant-design/icons";
import { Divider, Select, Typography } from "antd";

import { Wrapper } from "./style";

export const UserSettings = () => {
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

        <di>No Any Data</di>
      </Wrapper>
    </>
  );
};