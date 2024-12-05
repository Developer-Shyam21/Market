import React from "react";
import { Col, DatePicker, Form, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

export const FormValid = () => {
  const size = "large";

  return (
    <>
      <Row gutter={[16, 1]}>
        <Col xs={24} sm={12} md={8} lg={8} xl={6}>
          <Form.Item
            label="Vendor"
            name="vendor"
            className="fw-bold"
            rules={[{ required: true, message: "Vendor is required!" }]}
          >
            <Select variant="filled" size={size} placeholder="Test Vendor">
              <Select.Option value="vendor1">Test Vendor</Select.Option>
              <Select.Option value="vendor2">Once every 24 Hours</Select.Option>
              <Select.Option value="vendor3">Once every 48 Hours</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={6}>
          <Form.Item
            label="Estimated Inbound Delivery Date"
            name="estimatedInboundDate"
            className="fw-bold"
            rules={[{ required: true, message: "Select a delivery date!" }]}
          >
            <DatePicker
              variant="filled"
              size={size}
              placeholder="2024-12-4"
              variant="filled"
              size={size}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={6}>
          <Form.Item
            label="Submission Date"
            name="submissionDate"
            className="fw-bold"
            rules={[
              { required: true, message: "Submission date is required!" },
            ]}
          >
            <DatePicker
              variant="filled"
              size={size}
              placeholder="2024-12-4"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={6}>
          <Form.Item
            label="Estimated On-Shelf Date"
            name="estimatedOnShelfDate"
            className="fw-bold"
            rules={[
              {
                required: true,
                message: "Estimated on-shelf date is required!",
              },
            ]}
          >
            <DatePicker
              variant="filled"
              size={size}
              placeholder="2025-1-1"
              variant="filled"
              size={size}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={7} xl={5}>
          <Form.Item
            label="Status"
            name="status"
            className="fw-bold"
            rules={[{ required: true, message: "Status is required!" }]}
          >
            <Select placeholder="Open" variant="filled" size={size}>
              <Select.Option value="open">Open</Select.Option>
              <Select.Option value="closed">Closed</Select.Option>
              <Select.Option value="pending">Pending</Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={7} xl={4}>
          <Form.Item
            label="Reference"
            name="reference"
            className="fw-bold"
            rules={[
              {
                required: true,
                message: "Reference is required!",
              },
            ]}
          >
            <Input placeholder="2" variant="filled" size={size} />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={7} xl={5}>
          <Form.Item
            label="PO Template"
            name="poTemplate"
            className="fw-bold"
            rules={[{ required: true, message: "Template is required!" }]}
          >
            <Select placeholder="Select Template" variant="filled" size={size}>
              <Select.Option value="template1">Template 1</Select.Option>
              <Select.Option value="template2">Template 2</Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={7} xl={5}>
          <Form.Item
            label="Total Purchase Cost"
            name="totalCost"
            className="fw-bold"
            rules={[
              { required: true, message: "Enter purchase cost!" },
              {
                pattern: /^[0-9]*$/,
                message: "Only numerical values are allowed!",
              },
            ]}
          >
            <Input placeholder="0.00" variant="filled" size={size} />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={7} xl={5}>
          <Form.Item
            label="Shipping Fee"
            name="shippingFee"
            className="fw-bold"
            rules={[
              { required: true, message: "Select a discount type!" },
              {
                pattern: /^[0-9]*$/,
                message: "Only numerical values are allowed!",
              },
            ]}
          >
            <Input
              placeholder="Enter Shipping Fee"
              variant="filled"
              size={size}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={6}>
          <Form.Item
            label="Actual Inbound Delivery Date"
            name="actualInboundDate"
            className="fw-bold"
            rules={[
              { required: true, message: "Actual Inbound Delivery Date!" },
            ]}
          >
            <DatePicker
              placeholder="2024-12-12"
              variant="filled"
              size={size}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={6}>
          <Form.Item
            label="Actual On-Shelf Date"
            name="actualOnShelfDate"
            className="fw-bold"
            rules={[
              {
                required: true,
                message: "Estimated on-shelf date is required!",
              },
            ]}
          >
            <DatePicker
              placeholder="2024-12-4"
              variant="filled"
              size={size}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={6}>
          <Form.Item
            label="Discount Type"
            name="discountType"
            className="fw-bold"
            rules={[{ required: true, message: "Select a discount type!" }]}
          >
            <Select placeholder="--Select--" variant="filled" size={size}>
              <Select.Option value="percentage">Percentage</Select.Option>
              <Select.Option value="price">Price</Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={6}>
          <Form.Item
            label="Total Discount"
            name="totalDiscount"
            className="fw-bold"
            rules={[{ required: true, message: "Select a discount type!" }]}
          >
            <Input variant="filled" size={size} prefix="$" suffix="%" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} >
          <Form.Item
            label="Notes"
            name="notes"
            className="fw-bold"
            rules={[{ required: false }]}
          >
            <TextArea
              rows={3}
              placeholder="Dev Test"
              style={{ width: "100%" }}
              variant="filled"
              size={size}
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};
