import Layout, { Content } from "antd/es/layout/layout";
import React, {useEffect, useState} from "react";
import SiderMenu from "../../components/Menu/SiderMenu";
import HeaderPage from "../../components/Header/HeaderPage";
import { Button, Card, Col, Form, Row, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { DeviceAdd } from "../../interface";

const DetailDevicePage = () => {
  const breadcrumbItem = [
    { label: "Thiết bị", link: "/devices" },
    { label: "Danh sách thiết bị", link: "/devices" },
    { label: "Chi tiết thiết bị" },
  ];

  const {id} = useParams<{id: string}>();
  const [device, setDevice] = useState<DeviceAdd | null>(null);
  const devices = useAppSelector((state) => state.devices.devices);
  useEffect(() => {
    const deviceDetails = devices.find((device) => device.id === id);
    setDevice(deviceDetails || null);
  }, [id, devices]);

  const formatServiceUse = (serviceUse: string[] | string | undefined) => {
    if (Array.isArray(serviceUse)) {
      return serviceUse.map((service, index) => <span key={index}>{service.trim() + ', '}</span>);
    } else if (typeof serviceUse === "string") {
      const services = serviceUse.split(",").map((service) => service.trim());
      return services.map((service, index) => <span key={index}>{service}</span>);
    }
    return null;
  };
  return (
    <Layout>
      <SiderMenu />
      <Content className="min-h-screen">
        <HeaderPage breadcrumbItems={breadcrumbItem} />
        <div style={{ display: "flex" }}>
          <div>
            <Card style={{ width: "950px", margin: "0 20px" }}>
              <p>Thông tin thiết bị</p>
              <Row gutter={24}>
                <Col span={12}>
                  <Form layout="horizontal">
                    <Form.Item label="Mã thiết bị">{device?.deviceCode}</Form.Item>
                    <Form.Item label="Tên thiết bị">{device?.deviceName}</Form.Item>
                    <Form.Item label="Địa chỉ IP">{device?.ipAddress}</Form.Item>
                  </Form>
                </Col>
                <Col span={12}>
                  <Form layout="horizontal">
                    <Form.Item label="Loại thiết bị">{device?.deviceType}</Form.Item>
                    <Form.Item label="Tên đăng nhập">{device?.userName}</Form.Item>
                    <Form.Item label="Mật khẩu">{device?.password}</Form.Item>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Form layout="vertical">
                  <Form.Item label="Dịch vụ sử dụng:">
                    {formatServiceUse(device?.serviceUse)}
                  </Form.Item>
                </Form>
              </Row>
            </Card>
          </div>
          <Button className="btn__add">
            <PlusOutlined />
            <span>Cập nhật thiết bị</span>
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default DetailDevicePage;
