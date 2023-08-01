import { Button, Card, Layout, Select, Space } from "antd";
import React, { useEffect } from "react";
import SiderMenu from "../../components/Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import HeaderPage from "../../components/Header/HeaderPage";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchData } from "../../redux/slice/serviceSlice";
import { Option } from "antd/es/mentions";
import { useNavigate } from "react-router-dom";

const NewLevelNumber = () => {
  const breadcrumbItem = [
    { label: "Cấp số", link: "/numbers" },
    { label: "Danh sách cấp số", link: "/numbers" },
    { label: "Cấp số mới" },
  ];
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const serviceData = useAppSelector((state) => state.services.services);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Layout>
      <SiderMenu />
      <Content className="content__global">
        <HeaderPage breadcrumbItems={breadcrumbItem} />
        <div className="mx-5 mt-8">
          <div className="my-4">
            <b className="text-[1.5rem] text-[#FF7506]">Quản lý cấp số</b>
          </div>
          <div>
            <Card className="h-[550px]">
              <div className="flex flex-col items-center">
                <b className="uppercase text-[2rem] text-[#FF7506]">
                  cấp số mới
                </b>
                <b className="text-lg mt-3">Dịch vụ khách hàng lựa chọn</b>
                <Select className="w-2/6 mt-2" placeholder="Chọn dịch vụ">
                  {serviceData.map((item) => (
                    <Option key={item.id} value={item.serviceName}>
                      {item.serviceName}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="text-center mt-[3.5rem]">
                <Space size={"middle"}>
                  <Button className="btn__cancel" onClick={() => navigate(-1)}>Hủy bỏ</Button>
                  <Button className="btn__addd">In số</Button>
                </Space>
              </div>
            </Card>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default NewLevelNumber;
