import React from "react";
import { Divider, Select, Typography } from "antd";
import { Wrapper } from "./style"; // Ensure this path is correct

export const UserSettings = () => {
  const { Text } = Typography;

  return (
    <Wrapper>
      <div className="User-Section">
        <Text strong>Role Config</Text>
        <Select
          placeholder="Select Admin"
          options={[
            { value: "test", label: "Test" },
            { value: "test123", label: "Test123" },
            { value: "sara", label: "Sara" },
          ]}
        />
      </div>
      <Divider />
      <div>No Any Data</div>
    </Wrapper>
  );
};
