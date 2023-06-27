import React from "react";
import { Row, Col, Card, Typography, Space, Avatar, Tag } from "antd";

import {
  UserOutlined,
  BugOutlined,
  CalendarOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import "./dbcontent.css";
import MyChart from "./ChartContent";
const { Meta } = Card;

const { Title, Text } = Typography;

const DashboardContent: React.FC = () => {
  return (
    <>
      <Space direction="vertical">
        <Row style={{ minHeight: "70px" }} align={"middle"}>
          <Title level={5} style={{ margin: "0 24px", color: "#ff9138" }}>
            Dashboard
          </Title>
        </Row>
        <Row>
          <Title level={4} style={{ margin: "0 24px", color: "#ff9138" }}>
            Biểu đồ cấp số
          </Title>
        </Row>
      </Space>
      <Row gutter={24} style={{ padding: "20px 20px" }}>
        <Col span={6}>
          <Card className="content-card__container">
            <div className="content-card__title">
              <div className="content-card__icon">
                <CalendarOutlined className="card-icon" />
              </div>
              <div className="content-card__text">Số thứ tự đã cấp</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="card-percent__number">4.221</div>
              <Tag
                icon={<BugOutlined />}
                style={{ borderRadius: "8px", marginLeft: 20 }}
              >
                <span>80%</span>
              </Tag>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="content-card__container">
            <div className="content-card__title">
              <div className="content-card__icon">
                <CalendarOutlined className="card-icon" />
              </div>
              <div className="content-card__text">Số thứ tự đã cấp</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="card-percent__number">4.221</div>
              <Tag
                icon={<ArrowUpOutlined className="" />}
                style={{ borderRadius: "8px", marginLeft: 20 }}
                className="tag"
              >
                <span>80%</span>
              </Tag>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="content-card__container">
            <div className="content-card__title">
              <div className="content-card__icon">
                <CalendarOutlined className="card-icon" />
              </div>
              <div className="content-card__text">Số thứ tự đã cấp</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="card-percent__number">4.221</div>
              <Tag
                icon={<BugOutlined />}
                style={{ borderRadius: "8px", marginLeft: 20 }}
              >
                <span>80%</span>
              </Tag>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="content-card__container">
            <div className="content-card__title">
              <div className="content-card__icon">
                <CalendarOutlined className="card-icon" />
              </div>
              <div className="content-card__text">Số thứ tự đã cấp</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="card-percent__number">4.221</div>
              <Tag
                icon={<BugOutlined />}
                style={{ borderRadius: "8px", marginLeft: 20 }}
              >
                <span>80%</span>
              </Tag>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <MyChart/>
      </Row>
    </>
  );
};

export default DashboardContent;
