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
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Device } from "../../interface";
import { addDevice, updateDevice } from "../../redux/slice/deviceSlice";

interface Props {}
const options: SelectProps["options"] = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const AddDevicePage: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const isUpdate = !!id;
  const selectedDevice = useAppSelector((state) =>
    state.devices.devices.find((device) => device.id === id)
  );
  const breadcrumbItems = [
    { label: "Thiết bị", link: "/devices" },
    { label: "Danh sách thiết bị", link: "/devices" },
    { label: isUpdate ? "Cập nhật thiết bị" : "Thêm thiết bị" },
  ];
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const selectedDeviceId: string | undefined = selectedDevice?.id!;

  const handleSubmit = async (devices: Device) => {
    const newDevice: Device = {
      ...devices,
    };

    try {
      if (isUpdate && selectedDeviceId) {
        // Ensure that the selected device's ID is set in the newDevice object
        newDevice.id = selectedDeviceId;
        await dispatch(updateDevice(newDevice));
      } else {
        await dispatch(addDevice(newDevice));
      }
    } catch (err) {
      console.log(err);
    }
    form.resetFields();
    navigate("/devices");
  };

  const handleClick = () => {
    form.submit();
  };

  return (
    <Layout>
      <SiderMenu />
      <Content className="content__global">
        <HeaderPage breadcrumbItems={breadcrumbItems} />
        <div className="mx-5">
          <div className="my-3">
            <b className="text-[1.5rem] text-[#ff7e16]">Quản lý thiết bị</b>
          </div>
          <Card>
            <div>
              <div className="mb-3">
                <b className="text-[1rem] text-[#ff7e16]">Thông tin thiết bị</b>
              </div>
              <Form layout="vertical" onFinish={handleSubmit} form={form}>
                <Row justify={"space-between"}>
                  <Col>
                    <Form.Item
                      label="Mã thiết bị: *"
                      name="deviceCode"
                      initialValue={selectedDevice?.deviceCode}
                    >
                      <Input placeholder="Nhập mã thiết bị" />
                    </Form.Item>

                    <Form.Item
                      label="Tên thiết bị: *"
                      name="deviceName"
                      initialValue={selectedDevice?.deviceName}
                    >
                      <Input
                        style={{ width: "500px" }}
                        placeholder="Nhập tên thiết bị"
                      />
                    </Form.Item>

                    <Form.Item
                      label="Địa chỉ IP: *"
                      name="ipAddress"
                      initialValue={selectedDevice?.ipAddress}
                    >
                      <Input
                        style={{ width: "500px" }}
                        placeholder="Nhập địa chỉ IP"
                      />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item
                      label="Loại thiết bị: *"
                      name="deviceType"
                      initialValue={selectedDevice?.deviceType}
                    >
                      <Select
                        style={{ width: "500px" }}
                        placeholder="Chọn loại thiết bị"
                      >
                        <Select.Option value="kyout">Kyoot</Select.Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      label="Tên đăng nhập: *"
                      name="userName"
                      initialValue={selectedDevice?.userName}
                    >
                      <Input
                        style={{ width: "500px" }}
                        placeholder="Nhập tên đăng nhập"
                      />
                    </Form.Item>

                    <Form.Item
                      label="Mật khẩu: *"
                      name="password"
                      initialValue={selectedDevice?.password}
                    >
                      <Input
                        style={{ width: "500px" }}
                        placeholder="Nhập mật khẩu"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row justify={"space-around"}>
                  <Form.Item
                    label="Dịch vụ sử dụng: *"
                    name="serviceUse"
                    initialValue={selectedDevice?.serviceUse}
                  >
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: "1140px" }}
                      placeholder="Nhập dịch vụ sử dụng"
                      defaultValue={["Khám tim mạch", "Khám sản phụ khoa"]}
                      options={options}
                      className="select__add"
                    ></Select>
                  </Form.Item>
                </Row>
                <span>* là trường thông tin bắt buộc</span>
              </Form>
            </div>
          </Card>
        </div>
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
