import React from "react";
import {
  Form,
  Input,
  Layout,
  Select,
  Space,
  Table,
} from "antd";
import { ColumnsType } from "antd/es/table";
import SiderMenu from "../Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import { SearchOutlined } from "@ant-design/icons";
interface DataType {
  key: string;
  codeDevice: string;
  nameDevice: string;
  addressDevice: string;
  status: boolean;
  statusConnect: boolean;
  service: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Mã thiết bị",
    dataIndex: "codeDevice",
  },
  {
    title: "Tên thiết bị",
    dataIndex: "nameDevice",
  },
  {
    title: "Địa chỉ IP",
    dataIndex: "addressDevice",
  },
  {
    title: "Trạng thái hoạt động",
    dataIndex: "status",
    render: (status) => (status ? "Hoạt động" : "Ngưng hoạt đọng"),
  },
  {
    title: "Trạng thái kết nối",
    dataIndex: "statusConnect",
    render: (status) => (status ? "Kết nối" : "Mất kết nối"),
  },
  {
    title: "Dịch vụ sử dụng",
    dataIndex: "service",
  },
];

const data: DataType[] = [
  {
    key: "1",
    codeDevice: "KIO_01",
    nameDevice: "kyosk",
    addressDevice: "192.168.1.1",
    status: true,
    statusConnect: true,
    service: "Khám tim mạch, khám mắt",
  },
];


const DivicePage = () => {
  return (
    <Layout>
      <SiderMenu />
      <Content style={{ minHeight: "100vh" }}>
        <div style={{ display: "flex", padding: "0 50px" }}>
          <Space>
            <Form layout="vertical">
              <Form.Item label="Trạng thái hoạt động">
                <Select
                  defaultValue="jack"
                  style={{ width: 250 }}
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
                  style={{ width: 250 }}
                  options={[
                    { value: "jack", label: "Tất cả" },
                    { value: "lucy", label: "Kết nối" },
                    { value: "Yiminghe", label: "Mất kết nối" },
                  ]}
                />
              </Form.Item>
            </Form>
            <Form layout="vertical" style={{ marginLeft: "69%" }}>
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
        <Table
          columns={columns}
          dataSource={data}
          bordered
          style={{ padding: "0 50px" }}
        />
      </Content>
    </Layout>
  );
};

export default DivicePage;
