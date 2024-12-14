import React, { useState } from "react";
// import {
//   EditOutlined,
//   PlusOutlined,
//   DeleteOutlined,
//   MessageOutlined,
//   StarOutlined,
//   LikeOutlined,
//   InfoCircleOutlined,
// } from "@ant-design/icons";
import {
  Avatar,
  Col,
  Flex,
  Row,
  Space,
  Select,
  DatePicker,
  Typography,
  Tooltip,
  Card,
} from "antd";
import Chart from "react-apexcharts";
import { Wrapper } from "./style";
import dayjs from "dayjs";
import WorldMap from "react-svg-worldmap";
import { PrimaryColor } from "../../../../Config";
import ReactApexChart from "react-apexcharts";
 
 
export const Overview = () => {
  const { RangePicker } = DatePicker;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isSelectingStart, setIsSelectingStart] = useState(true);
 
  const [selectedCountry, setSelectedCountry] = useState("");
 
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
 
  const handleCalendarChange = (dates, dateStrings) => {
    if (dates[0]) {
      setStartDate(dates[0]);
      setIsSelectingStart(false);
    }
    if (dates[1]) {
      setEndDate(dates[1]);
    }
  };
 
  const onRangeChange = (dates, dateStrings) => {
    if (dates) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    } else {
      console.log("Clear");
    }
  };
  const rangePresets = [
    { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
    { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
    { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
    { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
  ];
 
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
 
  const salesData = {
    series: [
      {
        name: "Sales",
        data: [450, 650, 800, 600, 450, 1100, 1200],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      title: {
        text: "Monthly Sales Data",
        align: "left",
      },
    },
  };
 
  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];
 
  const getContry = (value) => {
    console.log("Contry name and thire data are :" , value)
  }
 
  return (
    <>
      <Wrapper>
        <Flex justify="flex-end" gap={13}>
          <RangePicker
            presets={[
              {
                label: (
                  <span aria-label="Current Time to End of Day">Now ~ EOD</span>
                ),
                value: () => [dayjs(), dayjs().endOf("day")], // 5.8.0+ support function
              },
              ...rangePresets,
            ]}
            showTime
            format="YYYY/MM/DD HH:mm:ss"
            onChange={onRangeChange}
          />
          <Select
            defaultValue="lucy"
            style={{ width: 200 }}
            onChange={handleChange}
            options={[
              {
                title: "All",
              },
              {
                label: <span>Ecommerce</span>,
                title: "manager",
                options: [
                  { label: <span>Ecommerce</span>, value: "Ecommerce" },
                ],
              },
              {
                label: <span>Vendor</span>,
                title: "engineer",
                options: [{ label: <span>Vendor</span>, value: "Vendor" }],
              },
            ]}
          />
        </Flex>
        <Row gutter={[16, 16]}>
          <Col xl={8} lg={24} md={24} xs={24} sm={24}>
            <div className="card">
              <div className="card-body">
                <Avatar size={64} style={{ backgroundColor: "#673ab7" }}>
                  S
                </Avatar>
                <Space direction="vertical">
                  <Typography.Title level={4} className="card-title">
                    Sell Out
                  </Typography.Title>
                  <Typography.Text className="card-value">$0</Typography.Text>
                  <Typography.Text type="secondary" className="card-info">
                    <b>0.00%</b> Previous Period
                  </Typography.Text>
                </Space>
              </div>
              <div style={{ textAlign: "end" }}>
                <Tooltip title="Performance Compared to Last Period">
                  <Typography.Text className="card-percentage">
                    0.0%
                  </Typography.Text>
                  <div>Previous year</div>
                </Tooltip>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={24} md={24} xs={24} sm={24}>
            <div className="card">
              <div className="card-body">
                <Avatar size={64} style={{ backgroundColor: "#2196f3" }}>
                  S
                </Avatar>
                <Space direction="vertical">
                  <Typography.Title level={4} className="card-title">
                    Unit
                  </Typography.Title>
                  <Typography.Text className="card-value">0</Typography.Text>
                  <Typography.Text type="secondary" className="card-info">
                    <b>0.00%</b> Previous Period
                  </Typography.Text>
                </Space>
              </div>
              <div style={{ textAlign: "end" }}>
                <Tooltip title="Performance Compared to Last Period">
                  <Typography.Text className="card-percentage">
                    0.0%
                  </Typography.Text>
                  <div>Previous year</div>
                </Tooltip>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={[12, 15]}>
          <Col lg={12}>
            <Card title="Sales Overview">
            <ReactApexChart
              options={salesData.options}
              series={salesData.series}
              type="line"
              height={460}
            />
            </Card>
          </Col>
          <Col lg={12}>
            <Card>
              <WorldMap
                color="blue"
                title="Top 10 Populous Countries"
                value-suffix="people"
                size="xl"
                data={data}
                onClickFunction={getContry}
              />
            </Card>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};