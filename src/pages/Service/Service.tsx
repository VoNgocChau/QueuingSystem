import {
  Badge,
  Button,
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
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchData } from "../../redux/slice/serviceSlice";
import "./service.css";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.services.services);
  const [activeStatus, setActiveStatus] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const navigate = useNavigate();

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleActiveStatusChange = (value: string) => {
    setActiveStatus(value);
  };

  const filteredData = data.filter((service) => {
    const isActiveMath =
      activeStatus === null || service.activeStatus === activeStatus;

    const isKeywordMatch =
      searchKeyword === "" ||
      service.serviceName.toLowerCase().includes(searchKeyword.toLowerCase());
    return isActiveMath && isKeywordMatch;
  });

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const breadcrumbItems = [
    { label: "Dịch vụ", link: "/services" },
    { label: "Danh sách dịch vụ" },
  ];

  const columns = [
    {
      title: "Mã dịch vụ",
      dataIndex: "serviceCode",
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "serviceName",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "activeStatus",
      render: (status: boolean) =>
        status ? (
          <>
            <Badge color="green" className="mr-2" />
            <span>Hoạt động</span>
          </>
        ) : (
          <>
            <Badge color="red" className="mr-2" />
            <span>Ngưng hoạt động</span>
          </>
        ),
    },
    {
      title: " ",
      dataIndex: "",
      render: (_: any, record: any) => (
        <span className="underline underline-offset-1 p-5 cursor-pointer link-info text-[#4277FF]"
              onClick={() => navigate('/service-details')}
        >
          Chi tiết
        </span>
      ),
    },
    {
      title: " ",
      dataIndex: "",
      render: (_: any, record: any) => (
        <span className="underline underline-offset-1 p-5 cursor-pointer link-info text-[#4277FF]">
          Cập nhật
        </span>
      ),
    },
  ];
  return (
    <Layout>
      <SiderMenu />
      <Content className="content__global">
        <HeaderPage breadcrumbItems={breadcrumbItems} />

        <div>Quản lý dịch vụ</div>

        <div className="flex px-[90px] my-2">
          <div className="flex flex-col">
            <label>Trạng thái hoạt động</label>
            <Select
              defaultValue="jack"
              style={{ width: 200 }}
              value={activeStatus}
              onChange={handleActiveStatusChange}
              options={[
                { value: null, label: "Tất cả" },
                { value: true, label: "Hoạt động" },
                { value: false, label: "Ngưng hoạt động" },
              ]}
            />
          </div>
          <div className="flex flex-col mx-4">
            <label>Chọn thời gian</label>
            <Space>
              <DatePicker placeholder="Từ ngày" />
              <DatePicker placeholder="Đến ngày" />
            </Space>
          </div>
          <div className="flex flex-col ml-auto">
            <label>Từ khóa</label>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Nhập từ khóa"
              value={searchKeyword}
              onChange={handleKeywordChange}
              style={{ marginLeft: 8, width: "267px" }}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <Table
              columns={columns}
              dataSource={filteredData}
              bordered
              className="table__service"
              size="middle"
            />
          </div>
          <Button className="btn__add" onClick={() => navigate("/service-add")}>
            <PlusOutlined />
            <p>Thêm dịch vụ</p>
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default Service;
