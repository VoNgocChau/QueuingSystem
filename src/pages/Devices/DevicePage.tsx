import React, { useState, useEffect } from "react";
import { Badge, Button, Form, Input, Layout, Select, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import SiderMenu from "../../components/Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import "./device.css";
import HeaderPage from "../../components/Header/HeaderPage";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchData } from "../../redux/slice/deviceSlice";
import { Device } from "../../interface";

const DevicePage: React.FC = () => {
  // Định nghĩa breadcrumb cho trang Thiết bị > Danh sách thiết bị
  const breadcrumbItems = [
    { label: "Thiết bị", link: "/devices" },
    { label: "Danh sách thiết bị" },
  ];

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const data = useSelector((state: RootState) => state.devices.devices);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddDevice = () => {
    navigate("/device_add");
  };
  const handleDetail = (id: any) => {
    // Xử lý sự kiện khi nhấp vào nút "Chi tiết" của thiết bị có khóa là key
    navigate(`/details/${id}`);
    console.log(`Xem chi tiết thiết bị có khóa là ${id}`);
  };

  const handleUpdate = (key: string) => {
    // Xử lý sự kiện khi nhấp vào nút "Cập nhật" của thiết bị có khóa là key
    navigate(`/device_add/${key}`);
    console.log(`Cập nhật thiết bị có khóa là ${key}`);
  };

  const renderServiceUse = (serviceUse: string[] | string) => {
    let services: string[];

    if (Array.isArray(serviceUse)) {
      // If the serviceUse is an array, use it directly
      services = serviceUse;
    } else if (typeof serviceUse === "string") {
      // If the serviceUse is a string, split it into an array
      services = serviceUse.split(",");
    } else {
      // If the serviceUse is neither an array nor a string, set it as an empty array
      services = [];
    }

    // Maximum number of services to show before truncation
    const maxServicesToShow = 2;

    // Check if there are more services than the maximum allowed
    const shouldTruncate = services.length > maxServicesToShow;

    return (
      <span>
        {services.slice(0, maxServicesToShow).map((service, index) => (
          <React.Fragment key={index}>
            {service.trim()}
            {index < maxServicesToShow - 1 && ", "}
          </React.Fragment>
        ))}
        {shouldTruncate && (
          <span
            className="link-info"
            style={{ cursor: "pointer" }}
            onClick={() => {
              // Handle the "Xem thêm" click event here
              console.log("Xem thêm clicked:", serviceUse);
            }}
          >
            ... Xem thêm
          </span>
        )}
      </span>
    );
  };
  const columns = [
    {
      title: "Mã thiết bị",
      dataIndex: "deviceCode",
    },
    {
      title: "Tên thiết bị",
      dataIndex: "deviceName",
    },
    {
      title: "Địa chỉ IP",
      dataIndex: "ipAddress",
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "activeStatus",
      render: (status: boolean) =>
        status ? (
          <>
            <Badge color="green" className="mr-2" />
            <span>Hoạt động</span>
          </>
        ) : (
          <>
            <Badge color="red" className="mr-2" />
            <span>Ngưng hoạt động</span>
          </>
        ),
    },
    {
      title: "Trạng thái kết nối",
      dataIndex: "connectionStatus",
      render: (status: boolean) =>
        status ? (
          <>
            <Badge color="green" className="mr-2" />
            <span>Kết nối</span>
          </>
        ) : (
          <>
            <Badge color="red" className="mr-2" />
            <span>Mất kết nối</span>
          </>
        ),
    },
    {
      title: "Dịch vụ sử dụng",
      dataIndex: "serviceUse",
      render: renderServiceUse,
    },
    {
      title: " ",
      dataIndex: "",
      render: (_: any, record: Device) => (
        <span
          className="underline underline-offset-1 p-5 cursor-pointer link-info text-[#4277FF]"
          onClick={() => handleDetail(record.id)}
        >
          Chi tiết
        </span>
      ),
    },
    {
      title: " ",
      dataIndex: "",
      render: (_: any, record: any) => (
        <span
          className="underline underline-offset-1 p-5 cursor-pointer link-info text-[#4277FF]"
          onClick={() => handleUpdate(record.key)}
        >
          Cập nhật
        </span>
      ),
    },
  ];
  return (
    <Layout>
      <SiderMenu />
      <Content style={{ minHeight: "100vh" }}>
        <HeaderPage breadcrumbItems={breadcrumbItems} />

        <div
          style={{
            display: "flex",
            padding: "0 90px",
            alignItems: "center",
            marginTop: "90px",
          }}
        >
          <Space>
            <Form layout="vertical">
              <Form.Item label="Trạng thái hoạt động">
                <Select
                  defaultValue="jack"
                  style={{ width: 200 }}
                  options={[
                    { value: "jack", label: "Tất cả" },
                    { value: "lucy", label: "Hoạt động" },
                    { value: "Yiminghe", label: "Ngưng hoạt động" },
                  ]}
                />
              </Form.Item>
            </Form>
            <Form layout="vertical">
              <Form.Item label="Trạng thái kết nối">
                <Select
                  defaultValue="jack"
                  style={{ width: 200 }}
                  options={[
                    { value: "jack", label: "Tất cả" },
                    { value: "lucy", label: "Kết nối" },
                    { value: "Yiminghe", label: "Mất kết nối" },
                  ]}
                />
              </Form.Item>
            </Form>
            <Form layout="vertical" style={{ marginLeft: "75%" }}>
              <Form.Item label="Từ khóa">
                <Input
                  prefix={<SearchOutlined />}
                  placeholder="Search"
                  style={{ marginLeft: 8, width: "267px" }}
                />
              </Form.Item>
            </Form>
          </Space>
        </div>
        <div className="flex justify-between">
          <div>
            <Table
              columns={columns}
              dataSource={data}
              bordered
              className="px-20"
              size="small"
            />
          </div>
          <Button className="btn__add">
            <PlusOutlined />
            <p onClick={handleAddDevice}>Thêm thiết bị</p>
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default DevicePage;
