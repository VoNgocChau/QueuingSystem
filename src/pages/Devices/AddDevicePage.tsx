import Layout, { Content } from "antd/es/layout/layout";
import React from "react";
import SiderMenu from "../../components/Menu/SiderMenu";
import HeaderPage from "../../components/Header/HeaderPage";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  SelectProps,
  Space,
} from "antd";
import "./add.css";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { Device, DeviceAdd } from "../../interface";
import { addDevice } from "../../redux/slice/deviceSlice";
import { firestore } from "../../firebase/config";

interface Props {}
const options: SelectProps["options"] = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const AddDevicePage: React.FC<Props> = () => {
  const { key } = useParams<{ key: string }>();
  const isUpdate = !!key;
  const breadcrumbItems = [
    { label: "Thiết bị", link: "/devices" },
    { label: "Danh sách thiết bị", link: "/devices" },
    { label: isUpdate ? "Cập nhật thiết bị" : "Thêm thiết bị" },
  ];
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const handleSubmit = async (devices: DeviceAdd) => {
    const newDevice:DeviceAdd = {
      ...devices,
    };

    try {
      await dispatch(addDevice(newDevice));
      console.log(newDevice);
    } catch (err) {
      console.log(err);
    }
    form.resetFields();
  };

  const handleClick = () => {
    form.submit();
  };

  return (
    <Layout>
      <SiderMenu />
      <Content style={{ minHeight: "100vh" }}>
        <HeaderPage breadcrumbItems={breadcrumbItems} />
        <Card style={{ margin: "0 20px" }}>
          <Form layout="vertical" onFinish={handleSubmit} form={form}>
            <Row justify={"space-around"}>
              <Col>
                <Form.Item label="Mã thiết bị: *" name="deviceCode">
                  <Input
                    style={{ width: "400px" }}
                    placeholder="Nhập mã thiết bị"
                  />
                </Form.Item>

                <Form.Item label="Tên thiết bị: *" name="deviceName">
                  <Input
                    style={{ width: "400px" }}
                    placeholder="Nhập tên thiết bị"
                  />
                </Form.Item>

                <Form.Item label="Địa chỉ IP: *" name="ipAddress">
                  <Input
                    style={{ width: "400px" }}
                    placeholder="Nhập địa chỉ IP"
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Loại thiết bị: *" name="deviceType">
                  <Select
                    style={{ width: "400px" }}
                    placeholder="Chọn loại thiết bị"
                  >
                    <Select.Option value ="kyout">Kyoot</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label="Tên đăng nhập: *" name="userName">
                  <Input
                    style={{ width: "400px" }}
                    placeholder="Nhập tên đăng nhập"
                  />
                </Form.Item>

                <Form.Item label="Mật khẩu: *" name="password">
                  <Input
                    style={{ width: "400px" }}
                    placeholder="Nhập mật khẩu"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row justify={"space-around"}>
              <Form.Item label="Dịch vụ sử dụng: *" name="serviceUse">
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "900px" }}
                  placeholder="Nhập dịch vụ sử dụng"
                  defaultValue={["Khám tim mạch", "Khám sản phụ khoa"]}
                  options={options}
                ></Select>
              </Form.Item>
            </Row>
            <span className="ml-[47px]">* là trường thông tin bắt buộc</span>
          </Form>
        </Card>
        <Row justify={"center"} style={{ marginTop: "15px" }}>
          <Space>
            <Button className="btn__cancel">Hủy bỏ</Button>
            <Button className="btn__addd" onClick={handleClick}>
              {isUpdate ? "Cập nhật" : "Thêm thiết bị"}
            </Button>
          </Space>
        </Row>
      </Content>
    </Layout>
  );
};

export default AddDevicePage;
