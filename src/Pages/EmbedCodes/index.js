import React, { useState } from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Modal, Select, Table, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { Wrapper, ModalView } from "./style";
import { createStyles } from "antd-style";
import TextArea from "antd/es/input/TextArea";
import { AddBTN } from "../../Component/Button";
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

export const EmbedCodes = () => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const { Text } = Typography;

  const handleSubmit = (value) => {
    console.log("Received values of form: ", value);
    setVisible(false);
  };

  const { styles } = useStyle();
  const userData = [
    {
      key: "1",
      username: "JohnDoe",
      link1:
        "https://lookerstudio.google.com/embed/reporting/3993fea1-a6d4-4187-a0e9-a84b2ac70230/page/h5PrDframeBorder={0} style={{ border: 0 }} allowFullScreen sandbox=allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      link2:
        "https://lookerstudio.google.com/embed/reporting/3993fea1-a6d4-4187-a0e9-a84b2ac70230/page/h5PrDframeBorder={0} style={{ border: 0 }} allowFullScreen sandbox=allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      createdat: "2023-11-01 10:30 AM",
      updatedat: "2023-11-10 2:45 PM",
    },
    {
      key: "2",
      username: "JaneSmith",
      link1:
        "https://lookerstudio.google.com/embed/reporting/3993fea1-a6d4-4187-a0e9-a84b2ac70230/page/h5PrD frameBorder={0} style={{ border: 0 }} allowFullScreen sandbox=allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      link2:
        "https://lookerstudio.google.com/embed/reporting/3993fea1-a6d4-4187-a0e9-a84b2ac70230/page/h5PrDframeBorder={0} style={{ border: 0 }} allowFullScreen sandbox=allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      createdat: "2023-11-03 3:15 PM",
      updatedat: "2023-11-12 4:00 PM",
    },
    {
      key: "3",
      username: "AlexBrown",
      link1:
        "https://lookerstudio.google.com/embed/reporting/3993fea1-a6d4-4187-a0e9-a84b2ac70230/page/h5PrframeBorder={0} style={{ border: 0 }} allowFullScreen sandbox=allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      link2:
        "https://lookerstudio.google.com/embed/reporting/3993fea1-a6d4-4187-a0e9-a84b2ac70230/page/h5PrDframeBorder={0} style={{ border: 0 }} allowFullScreen sandbox=allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      createdat: "2023-11-05 11:00 AM",
      updatedat: "2023-11-13 5:30 PM",
    },
    {
      key: "4",
      username: "ChrisGreen",
      link1:
        "https://lookerstudio.google.com/embed/reporting/3993fea1-a6d4-4187-a0e9-a84b2ac70230/page/h5PrDframeBorder={0} style={{ border: 0 }} allowFullScreen sandbox=allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      link2:
        "https://lookerstudio.google.com/embed/reporting/3993fea1-a6d4-4187-a0e9-a84b2ac70230/page/h5PrDframeBorder={0} style={{ border: 0 }} allowFullScreen sandbox=allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      createdat: "2023-11-07 9:25 AM",
      updatedat: "2023-11-14 1:00 PM",
    },
    {
      key: "5",
      username: "PatTaylor",
      link1:
        "https://lookerstudio.google.com/embed/reporting/3993fea1-a6d4-4187-a0e9-a84b2ac70230/page/h5PrDframeBorder={0} style={{ border: 0 }} allowFullScreen sandbox=allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      link2:
        "https://lookerstudio.google.com/embed/reporting/3993fea1-a6d4-4187-a0e9-a84b2ac70230/page/h5PrDframeBorder={0} style={{ border: 0 }} allowFullScreen sandbox=allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      createdat: "2023-11-09 8:45 AM",
      updatedat: "2023-11-15 10:15 AM",
    },
    {
      key: "6",
      username: "PatTaylor",
      link1:
        "https://lookerstudio.google.com/embed/reporting/3993fea1-a6d4-4187-a0e9-a84b2ac70230/page/h5PrDframeBorder={0} style={{ border: 0 }} allowFullScreen sandbox=allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      link2:
        "https://lookerstudio.google.com/embed/reporting/3993fea1-a6d4-4187-a0e9-a84b2ac70230/page/h5PrDframeBorder={0} style={{ border: 0 }} allowFullScreen sandbox=allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      createdat: "2023-11-09 8:45 AM",
      updatedat: "2023-11-15 10:15 AM",
    },
  ];

  const columns = [
    {
      title: "ID",
      width: 100,
      dataIndex: "key",
      key: "key",
    },
    {
      title: "User Name",
      width: 250,
      dataIndex: "username",
      key: "username",
    },

    {
      title: "Link 1",
      width: 300,
      dataIndex: "link1",
      key: "link1",
    },
    {
      title: "Link 2",
      width: 300,
      dataIndex: "link2",
      key: "link2",
    },
    {
      title: "Created At",

      dataIndex: "createdat",
      key: "createdat",
    },
    {
      title: "Updated At",

      dataIndex: "updatedat",
      key: "updatedat",
    },

    {
      title: "Action",
      dataIndex: "action",
      width: 50,
      key: "action",
      render: (_, record) => (
        <Button
          style={{
            background: "transparent",
            border: "none",
            boxShadow: "none",
          }}
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
        ></Button>
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
          <Text strong>Embed Codes</Text>

          <AddBTN
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setVisible(true)}
          >
            Add
          </AddBTN>
        </div>
       

        <Table
          columns={columns}
          dataSource={userData}
          className={styles.customTable}
          scroll={{
            x: "max-content",
          }}
          pagination={{
            showTotal: (total, range) =>
              `${range[0]} - ${range[1]} of ${total} items`,
          }}
        />
        <Modal
          title="Add User"
          okText="Submit"
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
              <Form.Item
                label="Report Account"
                name="reportacoountname"
                rules={[
                  {
                    required: true,
                    message: "Please input the Report Acoount!",
                  },
                ]}
              >
                <TextArea rows={3} />
              </Form.Item>

              <Form.Item
                label="Advertising Account"
                name="advertisingaccount"
                rules={[
                  {
                    required: true,
                    message: "Please input the Advertising Account!",
                  },
                ]}
              >
                <TextArea rows={3} />
              </Form.Item>

              <Form.Item label="Users" name="users">
                <Select placeholder="Select an User">
                  <Select.Option value="dev">Dev</Select.Option>
                  <Select.Option value="devaccount">Dev Account</Select.Option>
                  <Select.Option value="she">She</Select.Option>
                  <Select.Option value="fimo">Fimo</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </ModalView>
        </Modal>
      </Wrapper>
    </>
  );
};
