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
} from "antd";
import { TimeRangePickerProps } from "antd";
import Chart from "react-apexcharts";
import { Wrapper } from "./style";
import dayjs from "dayjs";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

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

  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    if (dates) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    } else {
      console.log("Clear");
    }
  };
  const rangePresets: TimeRangePickerProps["presets"] = [
    { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
    { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
    { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
    { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["January", 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

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
        <Row>
          <Col lg={12}>
            <div className="app">
              <div className="row">
                <div className="mixed-chart">
                  <Chart
                    options={options}
                    series={series}
                    type="line"
                    width="800"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div>
              {/* Country Selector */}
              <select onChange={handleCountryChange}>
                <option value="">Select a country</option>
                <option value="United States">United States</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Brazil">Brazil</option>
                <option value="China">China</option>
              </select>

              {/* Map */}
              <ComposableMap>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const isHighlighted =
                        geo.properties.name === selectedCountry; // Highlight selected country
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          style={{
                            default: {
                              fill: isHighlighted ? "#FF5733" : "#DDD", // Highlight color
                              outline: "none",
                            },
                            hover: {
                              fill: "#F53",
                              outline: "none",
                            },
                            pressed: {
                              fill: "#E42",
                              outline: "none",
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ComposableMap>
            </div>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};
