import { Badge, Button, Form, Input, Layout, Select, Space, Table } from "antd";
import React from "react";
import SiderMenu from "../../components/Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import HeaderPage from "../../components/Header/HeaderPage";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

const Service = () => {
  //data
  const breadcrumbItems = [
    { label: "Dịch vụ", link: "/service" },
    { label: "Danh sách dịch vụ" },
  ];

  const columns = [
    {
      title: "Mã dịch vụ",
      dataIndex: "",
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "",
    },
    {
      title: "Mô tả",
      dataIndex: "",
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "",
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
      title: " ",
      dataIndex: "",
      render: (_: any, record: any) => (
        <span className="underline underline-offset-1 p-5 cursor-pointer link-info text-[#4277FF]">
          Chi tiết
        </span>
      ),
    },
    {
      title: " ",
      dataIndex: "",
      render: (_: any, record: any) => (
        <span className="underline underline-offset-1 p-5 cursor-pointer link-info text-[#4277FF]">
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
        <div style={{ display: "flex" }}>
          <div>
            <Table
              columns={columns}
              //   dataSource={data}
              bordered
              style={{ padding: "0 90px" }}
              size="small"
            />
          </div>
          <Button className="btn__add">
            <PlusOutlined />
            <p>Thêm dịch vụ</p>
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default Service;
