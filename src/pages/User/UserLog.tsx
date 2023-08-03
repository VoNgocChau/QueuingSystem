import { DatePicker, Input, Layout, Space, Table } from "antd";
import React from "react";
import SiderMenu from "../../components/Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import HeaderPage from "../../components/Header/HeaderPage";
import { SearchOutlined } from "@ant-design/icons";

const UserLog = () => {
  const items = [
    { label: "Cài đặt hệ thống", link: "users" },
    { label: "Nhật ký sử dụng" },
  ];

  const columns = [
    {
        title: 'Tên đăng nhập',
        dataIndex: ''
    },
    {
        title: 'Thời gian tác động',
        dataIndex: ''
    },
    {
        title: 'IP thực hiện',
        dataIndex: ''
    },
    {
        title: 'Thao tác thực hiện',
        dataIndex: ''
    },
  ]
  return (
    <Layout>
      <SiderMenu />
      <Content className="content__global">
        <HeaderPage breadcrumbItems={items} />
        <div className="mx-5 w-[90%]">
          <div className="flex justify-between my-3">
            <div className="flex flex-col">
              <b>Chọn thời gian</b>
              <Space>
                <DatePicker />
                <DatePicker />
              </Space>
            </div>
            <div className="flex flex-col">
              <b>Từ khóa</b>
              <Input suffix={<SearchOutlined />} placeholder="Nhập từ khóa"/>
            </div>
          </div>
          <div>
            <Table columns={columns} bordered size="small"/>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default UserLog;
