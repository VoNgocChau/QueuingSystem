import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Layout,
  Row,
  Space,
} from "antd";
import React from "react";
import SiderMenu from "../../components/Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import HeaderPage from "../../components/Header/HeaderPage";
import TextArea from "antd/es/input/TextArea";

const AddService = () => {
  const breadcrumbItem = [
    { label: "Dịch vụ", link: "/services" },
    { label: "Danh sách dịch vụ", link: "/services" },
    { label: "Thêm dịch vụ" },
  ];
  return (
    <Layout>
      <SiderMenu />
      <Content className="content__global">
        <HeaderPage breadcrumbItems={breadcrumbItem} />
        <div className="mx-5">
          <div className="my-2">
          <span className="text-[1.5rem] text-[#ff7506]">Quản lý dịch vụ</span>
          </div>

        <Card>
          <div>
            <b className="text-[#ff7506] text-[1rem]">Thông tin dịch vụ</b>
            <Form layout="vertical">
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    label={
                      <b>
                        Mã dịch vụ: <span className="text-[red]">*</span>
                      </b>
                    }
                    name="serviceCode"
                  >
                    <Input placeholder="Nhập mã dịch vụ" />
                  </Form.Item>
                  <Form.Item
                    label={
                      <b>
                        Tên dịch vụ: <span className="text-[red]">*</span>
                      </b>
                    }
                    name="serviceCode"
                  >
                    <Input placeholder="Nhập mã dịch vụ" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label={<b>Mô tả: </b>}>
                    <TextArea rows={5} placeholder="Nhập mô tả" />
                  </Form.Item>
                </Col>
              </Row>
              <div className="flex flex-col">
                <b className="text-[#ff7506] text-[1rem] mb-5">
                  Quy tắc cấp số
                </b>
                <Form.Item>
                  <Checkbox />
                  <span className="mx-2">Tăng tự động từ: </span>
                  <Space>
                    <Input className="w-[60px]" />
                    <span>đến</span>
                    <Input className="w-[60px]" />
                  </Space>
                </Form.Item>
                <Form.Item>
                  <Checkbox />
                  <span className="mx-2">Prefix: </span>
                  <Space className="mx-[52px]">
                    <Input className="w-[60px]" />
                  </Space>
                </Form.Item>
                <Form.Item>
                  <Checkbox />
                  <span className="mx-2">Surfix: </span>
                  <Space className="mx-[52px]">
                    <Input className="w-[60px]" />
                  </Space>
                </Form.Item>
                <Form.Item>
                  <Checkbox />
                  <span className="mx-2">Reset mỗi ngày </span>
                </Form.Item>
                <sup className="text-[red]">* Là thông tin bắt buộc</sup>
              </div>
            </Form>
          </div>
        </Card>
        </div>
        <div className="flex justify-center mt-[30px]">
          <Space>
            <Button className="btn__cancel">Hủy bỏ</Button>
            <Button className="btn__addd">Thêm dịch vụ</Button>
          </Space>
        </div>
      </Content>
    </Layout>
  );
};

export default AddService;
