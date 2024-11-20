import React, { useState } from "react";
import {
  EditOutlined,
  PlusOutlined,
  DeleteOutlined,
  EyeOutlined,
  UserSwitchOutlined,
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
import { useForm } from "antd/es/form/Form";
import { Wrapper ,ModalView} from "./style";
import { createStyles } from "antd-style";






const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

export const Criteria = () => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const { Text } = Typography;
  const { styles } = useStyle();

  const handleSubmit = (value) => {
    console.log("Received values of form: ", value);
    setVisible(false);
  };

  const UserData = [
    {
      criterianame: "Title length check",
      criteriatype: "LQS",
      type: "product title length",
      weight: 22,

      action: "Action",
    },
    {
      criterianame: "Bullet Point 1 length check",
      criteriatype: "LQS",
      type: "bullet point 1 length",
      weight: 5,

      action: "Action",
    },
    {
      criterianame: "Bullet Point 2 length check",
      criteriatype: "LQS",
      type: "	bullet point 2 length",
      weight: 5,

      action: "Action",
    },
    {
      criterianame: "Bullet Point 3 length check",
      criteriatype: "LQS",
      type: "bullet point 3 length",
      weight: 5,

      action: "Action",
    },
    {
      criterianame: "Bullet Point 4 length check",
      criteriatype: "LQS",
      type: "bullet point 4 length",
      weight: 5,

      action: "Action",
    },
    {
      criterianame: "Bullet Point 5 length check",
      criteriatype: "LQS",
      type: "bullet point 5 length",
      weight: 5,

      action: "Action",
    },
    {
      criterianame: "Description length check",
      criteriatype: "LQS",
      type: "product description length",
      weight: 6,
      action: "Action",
    },
    {
      criterianame: "Image count check",
      criteriatype: "LQS",
      type: "image count",
      weight: 7,
      action: "Action",
    },
    {
      criterianame: "Review Score Check",

      criteriatype: "retail_readiness",
      type: "review score",
      weight: 4,
      action: "Action",
    },
    {
      criterianame: "A+ Check",
      criteriatype: "BQS",
      type: "a+",
      weight: 33,
      action: "Action",
    },
  ];

  const columns = [
    {
      title: "Criteria Name",
      width: 400,
      dataIndex: "criterianame",
      key: "criterianame",
    },
    {
      title: "Criteria Type",
      width: 100,
      dataIndex: "criteriatype",
      key: "criteriatype",
      render: (criteriatype) => (
        <Tag style={{ color: "#389e0d", backgroundColor: "#f6ffed" }}>
          {criteriatype}
        </Tag>
      ),
    },
    {
      title: "Type",
      width: 300,
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      width: 100,
      key: "weight",
      render: (weight) => (
        <Tag style={{ color: "#08979c", backgroundColor: "#e6fffb" }}>
          {weight}
        </Tag>
      ),
    },

    {
      title: "Action",
      dataIndex: "action",
      width: 300,
      key: "action",
      render: (_, record) => (
        <div className="action-btn">
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => handleSee(record)}
            style={{
              backgroundColor: "#f5f8fa",
              color: "#a2a5b8",
              padding: "16px",
            }}
          ></Button>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            style={{ backgroundColor: "#f5f8fa", color: "#a2a5b8" }}
          ></Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.key)}
            style={{ backgroundColor: "#f5f8fa", color: "#a2a5b8" }}
          ></Button>
          <Button
            type="link"
            danger
            icon={<UserSwitchOutlined />}
            onClick={() => handleSwitch(record)}
            style={{ backgroundColor: "#f5f8fa", color: "#a2a5b8" }}
          ></Button>
        </div>
      ),
    },
  ];

  const handleSee = (record) => {
    console.log("see record:", record);
    // setModalVisible(true);
    // setFormData(record);
  };

  const handleDelete = (key) => {
    console.log("delete key:", key);
  };

  const handleEdit = (record) => {
    console.log("edit record:", record);
    // setModalVisible(true);
    // setFormData(record);
  };

  const handleSwitch = (record) => {
    console.log("switch record:", record);
    // setModalVisible(true);
    // setFormData(record);
  };

  return (
    <>
      <Wrapper>
        <div className="User-Section">
          <Text strong>Criteria</Text>
          <Flex gap={10} align="center">
            <Select
              placeholder="Amazon.it"
              options={[
                {
                  value: "amazon.it",
                  label: "Amazon.it",
                },
                {
                  value: "amazon.ca",
                  label: "Amazon.ca",
                },
                {
                  value: "amazon.com",
                  label: "Amazon.com",
                },
                {
                  value: "amazon.ae",
                  label: "Amazon.ae",
                },
                {
                  value: "amazon.in",
                  label: "Amazon.in",
                },
              ]}
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setVisible(true)}
            >
              Add
            </Button>
          </Flex>
        </div>
        <Divider />

        <Table columns={columns} dataSource={UserData}  className={styles.customTable}
          scroll={{
            x: "max-content",
          }}/>
          <Modal
            title="Add User"
            okText="Submit"
            width={800}
            oKText="Create"
            onOk={form.submit}
            open={visible}
            onCancel={() => setVisible(false)}
            bodyStyle={{
              maxHeight: "calc(-320px + 100vh)",
              overflowY: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "#eff2f5 transparent",
              paddingRight: "15px",
              marginBottom: "15px",
            }}
            >
            <ModalView>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Row gutter={[14, 14]}>
                <Col lg={6}>
                  <Form.Item
                    label="Criteria Name"
                    name="criterianame"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please input the criteria name!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter Criteria Name"/>
                  </Form.Item>
                </Col>
                <Col lg={6}>
                  <Form.Item
                    label="Criteria Type"
                    name="criteriatype"
                    hasFeedback
                  >
                    <Select placeholder="Criteia Type">
                      <Select.Option value="lqs">LQS</Select.Option>
                      <Select.Option value="bqs">BQS</Select.Option>
                      <Select.Option value="retail_readiness">
                        Retail Readiness
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={6}>
                  <Form.Item label="Metrics" name="metrics" hasFeedback>
                    <Select placeholder="Metrics">
                      <Select.Option value="reviewsnumber">
                        Reviews Number
                      </Select.Option>
                      <Select.Option value="reviewsnumber">
                        Review Scrore
                      </Select.Option>
                      <Select.Option value="buybox">Buy Box</Select.Option>
                      <Select.Option value="quantity">Quantity</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={6}>
                  <Form.Item
                    label="Weight"
                    name="weight"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please input the weight number!",
                      },
                    ]}
                  >
                    <Input placeholder="Weight"/>
                  </Form.Item>
                </Col>
              </Row>

              <div className="criteria-form">
                <Row gutter={[14, 14]} style={{alignItems:"baseline"}} >
                  <Col lg={5}>If</Col>
                  <Col lg={6}>
                    <Form.Item name="opretar" hasFeedback>
                      <Select placeholder="Operator">
                        <Select.Option value="lqs">LQS</Select.Option>
                        <Select.Option value="bqs">BQS</Select.Option>
                        <Select.Option value="retail_readiness">
                          Retail Readiness
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col lg={5}>
                    <Form.Item
                      name="weight"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please input the weight number!",
                        },
                      ]}
                    >
                      <Input placeholder="Value" />
                    </Form.Item>
                  </Col>
                  <Col lg={5}>
                    <Form.Item
                      name="weight"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please input the weight number!",
                        },
                      ]}
                    >
                      <Input placeholder="Score" />
                    </Form.Item>
                  </Col>
                  <Col lg={2} offset={1} style={{position: "relative",bottom: "-4px"}}>
                    <Button type="primary" className="add-btn" icon={<PlusOutlined />}></Button>
                  </Col>
                </Row>
              </div>
            </Form>
        </ModalView>
          </Modal>
      </Wrapper>
    </>
  );
};
