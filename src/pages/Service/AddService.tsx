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
import { useForm } from "antd/es/form/Form";
import { ServiceType } from "../../interface";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addService, updateService } from "../../redux/slice/serviceSlice";
import { useNavigate, useParams } from "react-router-dom";

const AddService = () => {
  const [form] = useForm();
  const { id } = useParams<{ id: string }>();

  const isUpdate = !!id;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedService = useAppSelector((state) =>
    state.services.services.find((service) => service.id === id)
  );
  const serviceId: string | undefined = selectedService?.id!;

  const handleSubmit = (service: ServiceType) => {
    const newService = {
      ...service,
    };
    try {
      if (isUpdate) {
        newService.id = serviceId;
        dispatch(updateService(newService));
      } else {
        dispatch(addService(newService));
      }

      form.resetFields();
      console.log(newService);
      navigate("/services");
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    form.submit();
  };
  const breadcrumbItem = [
    { label: "Dịch vụ", link: "/services" },
    { label: "Danh sách dịch vụ", link: "/services" },
    { label: isUpdate ? "Cập nhật dịch vụ" : "Thêm mới dịch vụ" },
  ];
  return (
    <Layout>
      <SiderMenu />
      <Content className="content__global">
        <HeaderPage breadcrumbItems={breadcrumbItem} />
        <div className="mx-5">
          <div className="my-2">
            <span className="text-[1.5rem] text-[#ff7506]">
              Quản lý dịch vụ
            </span>
          </div>

          <Card>
            <div>
              <b className="text-[#ff7506] text-[1rem]">Thông tin dịch vụ</b>
              <Form layout="vertical" form={form} onFinish={handleSubmit}>
                <Row gutter={24}>
                  <Col span={12}>
                    <Form.Item
                      label={
                        <b>
                          Mã dịch vụ: <span className="text-[red]">*</span>
                        </b>
                      }
                      name="serviceCode"
                      initialValue={selectedService?.serviceCode}
                    >
                      <Input placeholder="Nhập mã dịch vụ" />
                    </Form.Item>
                    <Form.Item
                      label={
                        <b>
                          Tên dịch vụ: <span className="text-[red]">*</span>
                        </b>
                      }
                      name="serviceName"
                      initialValue={selectedService?.serviceName}
                    >
                      <Input placeholder="Nhập tên dịch vụ" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label={<b>Mô tả: </b>}
                      name="description"
                      initialValue={selectedService?.description}
                    >
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
            <Button className="btn__cancel" onClick={() => navigate(-1)}>Hủy bỏ</Button>
            <Button className="btn__addd" onClick={handleClick}>
              {isUpdate ? "Cập nhật" : "Thêm mới"}
            </Button>
          </Space>
        </div>
      </Content>
    </Layout>
  );
};

export default AddService;
