import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Layout,
  Row,
  Select,
  Space,
} from "antd";
import React, { useEffect } from "react";
import SiderMenu from "../../components/Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import HeaderPage from "../../components/Header/HeaderPage";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchDataRole } from "../../redux/slice/roleSlice";
import { Option } from "antd/es/mentions";

const AddAccount = () => {
  const items = [
    { label: "Cài đặt hệ thống", link: "/accounts" },
    { label: "Quản lý tài khoản", link: "/accounts" },
    { label: "Thêm tài khoản" },
  ];
  const dispatch = useAppDispatch()
  const dataRole = useAppSelector((state) => state.roles.roles)
  useEffect(() => {
    dispatch(fetchDataRole())
  }, [dispatch]);
  return (
    <Layout>
      <SiderMenu />
      <Content className="content__global">
        <HeaderPage breadcrumbItems={items} />
        <div className="mx-5">
          <div className="my-3">
            <b className="text-[1.5rem] text-[#FF7506]">Quản lý tài khoản</b>
          </div>
          <div>
            <Card className="h-[450px]">
              <Form>
                <div className="mb-5">
                <b className="text-[1rem] text-[#FF7506]">
                  Thông tin tài khoản
                </b>
                </div>
                <Row gutter={30}>
                  <Col span={12}>
                    <Form.Item name="fullName">
                      <div>
                        <b>Họ tên</b>
                        <Input />
                      </div>
                    </Form.Item>
                    <Form.Item name="phoneNumber">
                      <div>
                        <b>Số diện thoại</b>
                        <Input />
                      </div>
                    </Form.Item>
                    <Form.Item name="email">
                      <div>
                        <b>Email</b>
                        <Input />
                      </div>
                    </Form.Item>
                    <Form.Item name="role">
                      <div>
                        <b>Vai trò</b>
                        <Select defaultValue="Chọn vai trò">
                            {dataRole.map((role) => (
                                <Option key={role.id} value={role.roleName}></Option>
                            ))}
                        </Select>
                      </div>
                    </Form.Item>
                    <div>
                      <span>* Là trường thông tin bắt buộc</span>
                    </div>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="userName">
                      <div>
                        <b>Tên đăng nhập</b>
                        <Input />
                      </div>
                    </Form.Item>
                    <Form.Item name="password">
                      <div>
                        <b>Mật khẩu</b>
                        <Input.Password />
                      </div>
                    </Form.Item>
                    <Form.Item name="">
                      <div>
                        <b>Nhập lại mật khẩu</b>
                        <Input.Password />
                      </div>
                    </Form.Item>
                    <Form.Item name="status">
                      <div>
                        <b>Tình trạng</b>
                        <Select />
                      </div>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Card>
          </div>
          <div className="flex justify-center mt-[5%]">
            <Space>
              <Button className="btn__cancel w-[8rem] h-[3rem]">Hủy bỏ</Button>
              <Button className="btn__addd w-[8rem] h-[3rem]">Thêm</Button>
            </Space>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default AddAccount;
