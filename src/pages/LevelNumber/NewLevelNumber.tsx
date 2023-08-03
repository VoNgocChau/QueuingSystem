import { Button, Card, Form, Layout, Modal, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import SiderMenu from "../../components/Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import HeaderPage from "../../components/Header/HeaderPage";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchData } from "../../redux/slice/serviceSlice";
import { Option } from "antd/es/mentions";
import { useNavigate } from "react-router-dom";
import { NumberType } from "../../interface";
import moment from "moment";
import { addNumber } from "../../redux/slice/numberSlice";
import { useForm } from "antd/es/form/Form";
import { firestore } from "../../firebase/config";

const NewLevelNumber = () => {
  const breadcrumbItem = [
    { label: "Cấp số", link: "/numbers" },
    { label: "Danh sách cấp số", link: "/numbers" },
    { label: "Cấp số mới" },
  ];
  const navigate = useNavigate();
  const [form] = useForm();
  const [showModal, setShowModal] = useState(false);
  const [newNumberData, setNewNumberData] = useState<NumberType | null>(null);
  const dispatch = useAppDispatch();
  const serviceData = useAppSelector((state) => state.services.services);
  const userAccount = useAppSelector((state) => state.accounts.userAccount);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const fetchMaxStt = async () => {
    const collectionRef = firestore.collection("numbers");
    const snapshot = await collectionRef.orderBy("stt", "desc").limit(1).get();
    const maxStt = snapshot.empty ? 0 : snapshot.docs[0].data().stt;
    return maxStt;
  };

  const handleSubmit = async (number: NumberType) => {
    const maxStt = await fetchMaxStt();
    const newNumber = {
      ...number,
      customerName: userAccount?.fullName || "",
      fromDate: moment().format("HH:mm - DD/MM/YYYY"),
      toDate: moment().add(6, "hour").format("HH:mm - DD/MM/YYYY"),
      status: "Đang chờ",
      supply: "Kiosk",
      stt: maxStt + 1,
    };
    try {
      dispatch(addNumber(newNumber));
      setNewNumberData(newNumber);
      setShowModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    form.submit();
  };
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
                <Form onFinish={handleSubmit} form={form}>
                  <Form.Item name="serviceName">
                    <Select className="w-2/6 mt-2" placeholder="Chọn dịch vụ">
                      {serviceData.map((item) => (
                        <Option key={item.id} value={item.serviceName}>
                          {item.serviceName}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Form>
              </div>
              <div className="text-center mt-[3.5rem]">
                <Space size={"middle"}>
                  <Button className="btn__cancel" onClick={() => navigate(-1)}>
                    Hủy bỏ
                  </Button>
                  <Button className="btn__addd" onClick={handleClick}>
                    In số
                  </Button>
                </Space>
              </div>
            </Card>
          </div>
        </div>
      </Content>
      <Modal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
        width={350}
      >
        <div className="flex flex-col items-center">
          <div>
            <b className="text-[1.5rem]">Số thứ tự được cấp</b>
          </div>
          <div>
            <b className="text-[2rem] text-[#FF7506]">{newNumberData?.stt}</b>
          </div>
          <div>
            <span>
              DV: {newNumberData?.serviceName} <b>(tại quầy số 1)</b>
            </span>
          </div>
          <div className="flex flex-col">
            <p>Thời gian cấp: {newNumberData?.fromDate}</p>
            <p>Hạn sử dụng: {newNumberData?.toDate}</p>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default NewLevelNumber;
