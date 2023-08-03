import React from "react";
import { Row, Avatar } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const AvatarPage = () => {
  const navigate = useNavigate();
  const userAccount = useAppSelector((state) => state.accounts.userAccount)
  return (
    <Row className="flex justify-center my-[10px]">
      <div style={{ display: "flex", alignItems: "center" }}>
        <BellOutlined className="icon__bell" />
        <Avatar
          src={""}
          size={30}
          onClick={() => navigate("/profile")}
          className="cursor-pointer"
        />

        <div style={{ margin: "0 10px" }}>
          <p className="txt__hi">Xin chào</p>
          <p className="txt__name">{userAccount?.fullName}</p>
        </div>
      </div>
    </Row>
  );
};

export default AvatarPage;
