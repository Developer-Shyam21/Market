import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { Button, Divider, Form, Input, Popconfirm, Progress, Table, Tag, message } from 'antd';

import {
    EditOutlined,
    PlusOutlined,
    DeleteOutlined,
    LoginOutlined,
    QuestionCircleOutlined
  } from "@ant-design/icons";

export const Task1 = () => {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('task1'));
    if (localData) {
      setUserData(localData);
    }
  }, []);

  const handleSubmit = (values) => {
    const newData = [...userData, { key: userData.length + 1, ...values }];
    setUserData(newData);
    localStorage.setItem('task1', JSON.stringify(newData));
    form.resetFields();
    message.success('Keyword added successfully!');
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Keywords',
      dataIndex: 'keyword',
      key: 'keyword',
    },
    {
      title: 'Counts',
      dataIndex: 'count',
      key: 'count',
      render: (text) => {
        const [current, total] = text.split('/').map(Number); // Extract current and total values
        return (
          <Progress
            type="circle"
            percent={(current / total) * 100}
            format={() => text} // Show the count value (e.g., 3/10)
            strokeColor={current === total ? 'green' : 'blue'} // Green for 10/10, otherwise blue
          />
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => {
        if (record.status === 'Done') {
          return <Tag color="green">Done</Tag>;
        }
        if (record.status === 'In Review') {
          return <Tag color="blue">In-Review</Tag>;
        }
        return <Button type="primary">Start</Button>;
      },
    },
    {
        title: 'Action',
        dataIndex:"action",
        key: 'action',
        render: (_, record) => (
            <div className="action-btn">
              <Button
                type="primary"
                icon={<EditOutlined />}
                style={{
                  backgroundColor: "#f5f8fa",
                  color: "#a2a5b8",
                  padding: "16px",
                }}
                onClick={() => handleEdit(record)}
              ></Button>
              <Popconfirm
                onConfirm={() => handleDelete(record.key)}
                title="Delete the task"
                description="Are you sure to delete this task?"
                icon={
                    <QuestionCircleOutlined
                    style={{
                      color: "red",
                    }}
                  />
                }
                okText="Yes"
                cancelText="No"
              >
               <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                style={{
                  backgroundColor: "#f5f8fa",
                  color: "#a2a5b8",
                  
                }}
                
              ></Button>
              </Popconfirm>
              
            </div>
          ),
    }
  ];

  // Generate the `dataSource` dynamically
  const tableData = userData.map((item, index) => ({
    key: index + 1,
    keyword: item.keyword,
    count: `${Math.floor(Math.random() * 10) + 1}/10`, // Random count between 1 and 10
    status: Math.random() > 0.5 ? 'Done' : Math.random() > 0.5 ? 'In Progress' : null, // Random status
  }));
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleDelete = (key) => {
    console.log("delete key:", key);
      const newData = userData.filter((item) => item.key!== key);
      console.log("delete key:", newData);
      setUserData(newData);
      localStorage.setItem('task1', JSON.stringify(newData)); 

    message.success('Keyword deleted successfully!');
  };

  const handleEdit = (record) => {
    form.setFieldsValue(record); // Populate form fields with user data
 
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <>
      <Wrapper>
        <div>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Keyword"
              name="keyword"
              rules={[{ required: true, message: 'Please add a keyword!' }]}
            >
              <Input placeholder="Add Key Words" />
            </Form.Item>
            <Form.Item
              label="Url"
              name="url"
              rules={[
                { required: true, message: 'Please enter a URL!' },
                {
                  type: 'url',
                  message: 'Please enter a valid URL (e.g., https://example.com)!',
                },
              ]}
            >
              <Input placeholder="https://google.com" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={hasSelected}>
                Save
              </Button>
            </Form.Item>
          </Form>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
        </div>
        <Divider />
        <div>
          <Table columns={columns} dataSource={tableData} pagination={false} rowSelection={rowSelection}/>
        </div>
      </Wrapper>
    </>
  );
};
