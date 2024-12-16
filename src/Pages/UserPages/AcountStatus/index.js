import React, { Children, useEffect, useState } from 'react'
import { Wrapper } from './style'
import axios from "axios";
import { Button, message, Popconfirm, Table } from 'antd';
import { createStyles } from 'antd-style';
import {
    EditOutlined,
    PlusOutlined,
    DeleteOutlined,
    LoginOutlined,
    QuestionCircleOutlined
  } from "@ant-design/icons";
const useStyle = createStyles(({ css, token }) => {
    const { antCls } = token;
    return {
      customTable: css`
        ${antCls}-table {
          ${antCls}-table-container {
            ${antCls}-table-body,
            ${antCls}-table-content {
             
            }
          }
        }
      `,
    };
  });

export const AccountStatus = () => {
    const { styles } = useStyle();
    const [userDatas,setUserDatas] = useState([])
    const [loading, setLoading] = useState(true);
const Api = async () => {

    try {
        setLoading(true)
        const responce  = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log("there are my api data",responce.data)
        setUserDatas(responce.data)
    } catch (error) {
        console.log(error)
    } finally {
        setLoading(false)
    }
}

 useEffect(() => {
  Api()
 },[])

 const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      width: 50,
      
    },
    {
      title: "UserName",
      dataIndex: "username",
      key: "username",
      width:150,
      
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width:200
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width:200
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
      width:150
    },
    {
      title: "Company",
      width:150,
      children: [
        {
          title: "Name",
          dataIndex: ["company", "name"], 
          key: "companyName",
          width:150
        },
        {
          title: "BS",
          dataIndex: ["company", "bs"], 
          key: "companyBs",
          width:150
        },
        {
          title: "Catch Phrase",
          dataIndex: ["company", "catchPhrase"], 
          key: "companyCatchPhrase",
          width:150
        },
      ],
    },
    {
      title: "Address",
      width:150,
      children: [
        {
          title: "Street",
          dataIndex: ["address", "street"],
          key: "addressStreet",
          width:150
        },
        {
          title: "Suite",
          dataIndex: ["address", "suite"], 
          key: "addressSuite",
          width:150
        },
        {
          title: "City",
          dataIndex: ["address", "city"], 
          key: "addressCity",
          width:150
        },
        {
          title: "Zipcode",
          dataIndex: ["address", "zipcode"], 
          key: "addressZipcode",
          width:150
        },
        {
          title: "Geo",
          children: [
            {
              title: "Lat",
              dataIndex: ["address", "geo", "lat"],
              key: "geoLat",
              width:150
            },
            {
              title: "Lng",
              dataIndex: ["address", "geo", "lng"], 
              key: "geoLng",
              width:150
            },
          ],
        },
      ],
    },
    {
        title: "Actions",
        key: "actions",
        width: 100,
        render: (_, record) => (
            <div className="action-btn">
              <Button
               style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
                icon={<EditOutlined />}
                
                onClick={() => handleEdit(record)}
              ></Button>
              <Popconfirm
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
               style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
                danger
                icon={<DeleteOutlined />}
                
                onClick={() => handleDelete(record.key)}
              ></Button>
              </Popconfirm>
              
            </div>
          ),
      },
    
  ];


  const handleDelete = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    const updatedData = userDatas.filter((user) => user.id !== id)
    setUserDatas(updatedData)
    message.success("User deleted successfully!");

  
  }
  const handleEdit = (record) => {
    console.log("edit record", record)
    // Update user data in API
    //...
  }

  return <>
  <Wrapper>
    <div className='userdata-Table'>
    <Table
      className={styles.customTable}
      columns={columns}
      dataSource={userDatas}
      scroll={{ x: "max-content" }}
    
      loading={loading}
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
      }}
      size="middle"
     
    />
    </div>
  
  </Wrapper>
  </>
}
