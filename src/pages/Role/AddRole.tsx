import { Button, Card, Checkbox, Col, Input, Layout, Row, Space } from "antd";
import React from "react";
import SiderMenu from "../../components/Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import HeaderPage from "../../components/Header/HeaderPage";
import TextArea from "antd/es/input/TextArea";

const AddRole = () => {
  const items = [
    { label: "Cài đặt hệ thống", link: "/roles" },
    { label: "Quản lý vai trò", link: "/roles" },
    { label: "Thêm vai trò" },
  ];
  return (
    <Layout>
      <SiderMenu />
      <Content className="content__global">
        <HeaderPage breadcrumbItems={items} />
        <div className="mx-5">
          <div className="my-5">
            <b className="text-[1.5rem] text-[#FF7506]">Danh sách vai trò</b>
          </div>
          <div>
            <Card>
              <div className="mb-3">
                <b>Thông tin vai trò</b>
              </div>
              <Row gutter={30}>
                <Col span={12}>
                  <div className="my-3">
                    <b>
                      Tên vai trò <span className="text-red-600">*</span>
                    </b>
                    <Input placeholder="Nhập tên vai trò" />
                  </div>
                  <div>
                    <b>Mô tả:</b>
                    <TextArea placeholder="Nhập mô tả" rows={6} />
                  </div>
                  <div className="my-3">
                    <span>* là trường hợp bắt buộc</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div>
                    <b>Phân quyền chức năng *</b>
                    <Card className="bg-[#fff2e7]">
                      <div>
                        <div className="mb-2">
                          <b className="text-[#FF7506]">Nhóm chức năng A</b>
                        </div>
                        <div>
                          <Checkbox value={"123"} />
                          <span className="ml-2">Tất cả</span>
                        </div>
                        <div>
                          <Checkbox />
                          <span className="ml-2">Chức năng x</span>
                        </div>
                        <div>
                          <Checkbox />
                          <span className="ml-2">Chức năng y</span>
                        </div>
                        <div>
                          <Checkbox />
                          <span className="ml-2">Chức năng z</span>
                        </div>
                      </div>
                      <div className="mt-5">
                        <div className="mb-2">
                          <b className="text-[#FF7506]">Nhóm chức năng B</b>
                        </div>
                        <div>
                          <Checkbox />
                          <span className="ml-2">Tất cả</span>
                        </div>
                        <div>
                          <Checkbox />
                          <span className="ml-2">Chức năng x</span>
                        </div>
                        <div>
                          <Checkbox />
                          <span className="ml-2">Chức năng y</span>
                        </div>
                        <div>
                          <Checkbox />
                          <span className="ml-2">Chức năng z</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Card>
          </div>
          <div className="flex justify-center mt-[5%]">
            <Space>
              <Button className="btn__cancel w-[120px]">Hủy bỏ</Button>
              <Button className="btn__addd w-[120px]">Thêm</Button>
            </Space>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default AddRole;
