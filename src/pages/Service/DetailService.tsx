import { Button, Card, Form, Input, Layout, Space } from "antd";
import React from "react";
import SiderMenu from "../../components/Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import HeaderPage from "../../components/Header/HeaderPage";
import "./service.css";

const DetailService = () => {
  const breadcrumbItem = [
    { label: "Dịch vụ", link: "/services" },
    { label: "Danh sách dịch vụ", link: "/services" },
    { label: "Chi tiết" },
  ];
  return (
    <Layout>
      <SiderMenu />
      <Content className="content__global">
        <HeaderPage breadcrumbItems={breadcrumbItem} />
        <div className="mx-5">
          <div>
            <span>Quản lý dịch vụ</span>
          </div>
          <div className="flex">
            <Card className="w-[30%] ">
              <div>
                <span>Thông tin dịch vụ</span>
                <div>
                  <b>Mã dịch vụ: </b>
                  <span>201</span>
                </div>
                <div>
                  <b>Tên dịch vụ: </b>
                  <span>201</span>
                </div>
                <div>
                  <b>Mô tả: </b>
                  <span>201</span>
                </div>
              </div>
              <div>
                <span>Quy tắc cấp số</span>
                <div>
                  <Space>
                    <b>Tăng tự động: </b>
                    <Input className="w-[60px]" />
                    <span>đến</span>
                    <Input className="w-[60px]" />
                  </Space>
                </div>
              </div>
            </Card>
            <Card className="w-[60%] mx-5"></Card>
            <div className="relative flex flex-col ml-auto">
              <Button className="btn__details">Cập nhật danh sách</Button>
              <Button className="btn__details">Quay lại</Button>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default DetailService;
