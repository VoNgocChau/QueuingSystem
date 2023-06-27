import React from "react";

import { Row, Col, Form, Input, Space, Button } from "antd";
import logoForgot from "./forgot-pwd";
import logoAlta from "./logo";

const ComfirmNewPassword: React.FC = () => {
  return (
    <Row align={"middle"} style={{ minHeight: "100vh" }}>
      <Col span={10} className="centered-col">
        <Form layout="vertical">
          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <div dangerouslySetInnerHTML={{ __html: logoAlta }}></div>
          </Form.Item>
          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <p className="text-forgot">Đặt lại mật khẩu mới</p>
          </Form.Item>

          <Form.Item label="Mật khẩu" name="password">
            <Input.Password style={{ width: "400px", height: "44px" }} />
          </Form.Item>

          <Form.Item label="Nhập lại mật khẩu" name="password">
            <Input.Password style={{ width: "400px", height: "44px" }} />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Space>
              <Button
                className="custom-btn-right"
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#ff9138" }}
              >
                Xác nhận
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Col>
      <Col span={14}>
        <div dangerouslySetInnerHTML={{ __html: logoForgot }}></div>
      </Col>
    </Row>
  );
};

export default ComfirmNewPassword;
