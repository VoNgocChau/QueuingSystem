import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Layout,
  Select,
  Space,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import SiderMenu from "../../components/Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import HeaderPage from "../../components/Header/HeaderPage";
import "./service.css";
import { useParams } from "react-router-dom";
import { ServiceType } from "../../interface";
import { useAppSelector } from "../../redux/hooks";

const DetailService = () => {
  const breadcrumbItem = [
    { label: "Dịch vụ", link: "/services" },
    { label: "Danh sách dịch vụ", link: "/services" },
    { label: "Chi tiết" },
  ];

  const colums = [
    {
      title: "Số thứ tự",
      dataIndex: "numerical",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
    },
  ];

  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<ServiceType | null>(null);
  const data = useAppSelector((state) => state.services.services);

  useEffect(() => {
    const details = data.find((service) => service.id === id);
    setService(details || null);
  }, [id, data]);
  return (
    <Layout>
      <SiderMenu />
      <Content className="content__global">
        <HeaderPage breadcrumbItems={breadcrumbItem} />
        <div className="mx-5">
          <div className="my-3">
            <span className="text-[1.5rem] text-[#ff7506]">
              Quản lý dịch vụ
            </span>
          </div>
          <div className="flex">
            <Card className="w-[30%] h-full">
              <div>
                <b className="text-[1rem] text-[#ff7e16]">Thông tin dịch vụ</b>
                <div className="my-2">
                  <b>Mã dịch vụ: </b>
                  <span className="ml-5">{service?.serviceCode}</span>
                </div>
                <div className="my-2">
                  <b>Tên dịch vụ: </b>
                  <span className="ml-5">{service?.serviceName}</span>
                </div>
                <div className="my-2">
                  <b>Mô tả: </b>
                  <span className="ml-12">{service?.description}</span>
                </div>
              </div>
              <div className="my-5">
                <b className="text-[1rem] text-[#ff7e16]">Quy tắc cấp số</b>
                <div>
                  <Space>
                    <b>Tăng tự động: </b>
                    <Input className="w-[60px]" />
                    <span>đến</span>
                    <Input className="w-[60px]" />
                  </Space>
                </div>
                <div className="my-4">
                  <b>Prefix: </b>
                  <Input className="w-[60px] ml-[52px]" />
                </div>
                <div className="my-4">
                  <b>Reset mỗi ngày</b>
                </div>
              </div>
            </Card>
            <Card className="w-[60%] mx-5">
              <div>
                <div className="flex justify-between my-3">
                  <div className="flex flex-col">
                    <span>Trạng thái</span>
                    <Select
                      options={[
                        { value: null, label: "Tất cả" },
                        { value: "yes", label: "Đã hoàn thành" },
                        { value: "yesr", label: "Đã thực hiện" },
                        { value: "vang", label: "Vắng" },
                      ]}
                      defaultValue={null}
                      className="w-[160px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>Chọn thời gian</span>
                    <Space>
                      <DatePicker className="w-[120px]" />
                      <DatePicker className="w-[120px]" />
                    </Space>
                  </div>
                  <div className="flex flex-col">
                    <span>Từ khóa</span>
                    <Input.Search
                      placeholder="Nhập từ khóa"
                      className="w-[200px]"
                    />
                  </div>
                </div>
                <div>
                  <Table columns={colums} size="small" />
                </div>
              </div>
            </Card>
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
