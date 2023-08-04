import React from 'react'
import logoAlta from './assets/logo'
import './login.css'

import {Row, Col, Input, Form, Button, Space} from 'antd'
import logoForgot from './assets/forgot-pwd'

const ForgotPasswordPage = () => {
  return (
    <Row align={"middle"} style={{ minHeight: "100vh" }}>
      <Col span={10} className="centered-col">
        <Form layout="vertical">
          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <div dangerouslySetInnerHTML={{ __html: logoAlta }}></div>
          </Form.Item>
          <Form.Item
          style={{ display: "flex", justifyContent: "center" }}
          >
            <p className='text-forgot'>Đặt lại mật khẩu</p>
          </Form.Item>

          <Form.Item label="Vui lòng nhập lại email để đặt lại mật khẩu của bạn *" name="password">
            <Input style={{ width: "400px", height: "44px" }} />
          </Form.Item>
          

          <Form.Item style={{ textAlign: "center" }}>
            <Space>
            <Button
              className="custom-btn-left"
              
              htmlType="submit"
            >
              Hủy
            </Button>
            <Button
              className="custom-btn-right"
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#ff9138" }}
            >
              Tiếp tục
            </Button>
            </Space>
          </Form.Item>
        </Form>
      </Col>
      <Col span={14}>
        <div
          dangerouslySetInnerHTML={{ __html: logoForgot }}
        >
          
        </div>
        
      </Col>
    </Row>
  )
}

export default ForgotPasswordPage