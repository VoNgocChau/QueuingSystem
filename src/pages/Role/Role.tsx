import { Button, Input, Layout, Table } from "antd";
import React, { useEffect, useState } from "react";
import SiderMenu from "../../components/Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import HeaderPage from "../../components/Header/HeaderPage";
import { SearchOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchDataRole } from "../../redux/slice/roleSlice";
import { useNavigate } from "react-router-dom";

const Role = () => {
  const items = [
    { label: "Cài đặt hệ thống", link: "/roles" },
    { label: "Quản lý vai trò" },
  ];
  const columns = [
    {
      title: "Tên vai trò",
      dataIndex: "roleName",
    },
    {
      title: "Số người dùng",
      dataIndex: "userNumber",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: " ",
      render: (record: any) => (
        <span className="underline underline-offset-1 text-[#4277FF] cursor-pointer">
          Cập nhật
        </span>
      ),
    },
  ];
  const navigate = useNavigate()
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.roles.roles);
  useEffect(() => {
    dispatch(fetchDataRole());
  }, [dispatch]);

  const filterData = data.filter((role) => {
    const isKeyword = searchKeyword === "" || role.roleName.toLowerCase().includes(searchKeyword.toLowerCase());
    return isKeyword;
  })
  return (
    <Layout>
      <SiderMenu />
      <Content className="content__global">
        <HeaderPage breadcrumbItems={items} />
        <div className="mx-5">
          <div className="flex justify-between my-5">
            <div>
              <b className="text-[1.5rem] text-[#FF7506]">Danh sách vai trò</b>
            </div>
            <div className="flex flex-col w-1/6 mr-[10%]">
              <b>Từ khóa</b>
              <Input
                value={searchKeyword}
                onChange={handleKeywordChange}
                suffix={<SearchOutlined />}
                placeholder="Nhập từ khóa"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-[90%]">
              <Table
                columns={columns}
                dataSource={filterData}
                bordered
                size="small"
              />
            </div>
            <Button className="btn__add" onClick={() => navigate('/role-add')}>Thêm vai trò</Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Role;
