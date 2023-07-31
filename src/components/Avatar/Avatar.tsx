import React from "react";
import { Row, Avatar } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const AvatarPage = () => {
  const navigate = useNavigate();
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
          <p className="txt__name">Võ Ngọc Châu</p>
        </div>
      </div>
    </Row>
  );
};

export default AvatarPage;
