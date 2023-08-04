import React from "react";
import { Row, Col, Card, Typography, Space, Tag } from "antd";

import { CalendarOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "./dbcontent.css";
import { useAppSelector } from "../../../redux/hooks";

const { Title } = Typography;

const DashboardContent: React.FC = () => {
  const data = useAppSelector((state) => state.numbers.numbers);

  const stt = data.map((item) => item.id).length;
  const sttWait = data.filter((item) => item.status === "Đang chờ").length;
  const sttUsage = data.filter((item) => item.status === "Đã sử dụng").length;
  const sttSkip = data.filter((item) => item.status === "Bỏ qua").length;
  console.log(sttUsage);

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

      <div className="flex mx-5">
        <Space>
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
              <div className="card-percent__number">{stt}</div>
              <Tag
                icon={<ArrowUpOutlined className="" />}
                style={{ borderRadius: "8px", marginLeft: 20 }}
                className="tag"
              >
                <span>80%</span>
              </Tag>
            </div>
          </Card>
          <Card className="content-card__container">
            <div className="content-card__title">
              <div className="content-card__icon">
                <CalendarOutlined className="card-icon" />
              </div>
              <div className="content-card__text">Số thứ tự đã sử dụng</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="card-percent__number">{sttUsage}</div>
              <Tag
                icon={<ArrowUpOutlined className="" />}
                style={{ borderRadius: "8px", marginLeft: 20 }}
                className="tag"
              >
                <span>80%</span>
              </Tag>
            </div>
          </Card>
          <Card className="content-card__container">
            <div className="content-card__title">
              <div className="content-card__icon">
                <CalendarOutlined className="card-icon" />
              </div>
              <div className="content-card__text">Số thứ tự đang chờ</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="card-percent__number">{sttWait}</div>
              <Tag
                icon={<ArrowUpOutlined className="" />}
                style={{ borderRadius: "8px", marginLeft: 20 }}
                className="tag"
              >
                <span>80%</span>
              </Tag>
            </div>
          </Card>
          <Card className="content-card__container">
            <div className="content-card__title">
              <div className="content-card__icon">
                <CalendarOutlined className="card-icon" />
              </div>
              <div className="content-card__text">Số thứ tự đã bỏ qua</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="card-percent__number">{sttSkip}</div>
              <Tag
                icon={<ArrowUpOutlined className="" />}
                style={{ borderRadius: "8px", marginLeft: 20 }}
                className="tag"
              >
                <span>80%</span>
              </Tag>
            </div>
          </Card>
        </Space>
      </div>
    </>
  );
};

export default DashboardContent;
