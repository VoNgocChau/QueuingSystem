import { Row, Col, Form, Input, Button } from "antd";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoAlta from "./assets/logo";
import logoRight from "./assets/logo-right";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [message, setMessage] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in:", user);
        navigate("/");
      })
      .catch((error) => {
        setMessage(false);
        console.error("Login error:", error);
      });
  };

  return (
    <>
      <Row align={"middle"} style={{ minHeight: "100vh" }}>
        <Col span={10} className="centered-col">
          <Form layout="vertical">
            <Form.Item style={{ display: "flex", justifyContent: "center" }}>
              <div dangerouslySetInnerHTML={{ __html: logoAlta }}></div>
            </Form.Item>
            <Form.Item
              label="Tên đăng nhập *"
              name="email"
              className="label-font"
            >
              <Input
                style={{ width: "400px", height: "44px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <Form.Item label="Mật khẩu *" name="password">
              <Input.Password
                style={{ width: "400px", height: "44px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              {message ? (
                <Link to={"/forgotpassword"} className="forgot-pwd">
                  Quên mật khẩu
              </Link>
              ) : (
                <p className="forgot-pwd">Sai mật khẩu hoặc tên đăng nhập</p>
              )}
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Button
                className="btn"
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#ff9138" }}
                onClick={handleLogin}
              >
                Đăng nhập
              </Button>
            </Form.Item>
            <Form.Item style={{textAlign: 'center'}}>
              {!message && (
                <Button style={{color: '#E73F3F'}} type="link" onClick={() => navigate("/forgotpassword")} > Quên mật khẩu </Button>
              )}
            </Form.Item>
          </Form>
        </Col>
        <Col
          span={14}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <div className="logo-right">
            <div dangerouslySetInnerHTML={{ __html: logoRight }}></div>
            <div className="txt-logo-right">
              <p className="tlt-system">Hệ thống</p>
              <p className="tlt-down">Quản lí xếp hàng</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
