import React, { useState } from "react";
import { Button, Form, List } from "antd";
import { Wrapper } from "./style";
import { FormFiled } from "./FormFiled";

export const Setting = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Validation Failed:", errorInfo);
  };

  const largeArray = Array.from({ length: 450 }, (_, index) => ({
    ASIN: `B00EXAMPLE${index + 1}`, 
    fba_inventory: Math.floor(Math.random() * 500) + 1, 
    days_sales_unit: Math.floor(Math.random() * 30) + 1, 
  }));

  const groupSize = 100;
  const groupedArrays = [];
  for (let i = 0; i < largeArray.length; i += groupSize) {
    groupedArrays.push(largeArray.slice(i, i + groupSize));
  }
  console.log(groupedArrays)

  return (
    <>
      <Wrapper>
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <FormFiled />
          <div className="button">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>

        {/* Displaying Groups */}
        {groupedArrays.map((group, groupIndex) => (
          <div key={groupIndex} style={{ marginBottom: "20px" }}>
            <h3>Group {groupIndex + 1}</h3>
            <List
              bordered
              dataSource={group}
              renderItem={(item) => (
                <List.Item>
                  <div>
                    <strong>ASIN:</strong> {item.ASIN} <br />
                    <strong>FBA Inventory:</strong> {item.fba_inventory} <br />
                    <strong>Days Sales Unit:</strong> {item.days_sales_unit}
                  </div>
                </List.Item>
              )}
            />
          </div>
        ))}
      </Wrapper>
    </>
  );
};
