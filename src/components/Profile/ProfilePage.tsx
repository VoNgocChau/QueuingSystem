import { Card, Avatar, Input, Row, Col, Form, Layout } from "antd";
import SiderMenu from "../Menu/SiderMenu";
import { Content } from "antd/es/layout/layout";
import { useAppSelector } from "../../redux/hooks";
import HeaderPage from "../Header/HeaderPage";
const ProfilePage: React.FC = () => {
  const userAccount = useAppSelector((state) => state.accounts.userAccount);
  const items = [{ label: "Thông tin cá nhân" }];
  return (
    <Layout>
      <SiderMenu />
      <Content className="content__global">
        <HeaderPage breadcrumbItems={items} />
        <div className="mx-5 w-[90%] mt-[5%]">
          <Card>
            <Row align={"middle"} gutter={20}>
              <Col>
                <div>
                  <Avatar
                    size={250}
                    src="data:image/jpeg;base64,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"
                  />
                </div>
                <div className="flex justify-center my-3 text-[1.5rem]">
                  <b>{userAccount?.fullName}</b>
                </div>
              </Col>
              <Col style={{ margin: "0 20px" }}>
                <Form layout="vertical">
                  <Form.Item label="Tên người dùng">
                    <Input
                      style={{ width: "350px" }}
                      disabled
                      value={userAccount?.fullName}
                    />
                  </Form.Item>
                  <Form.Item label="Số diện thoại">
                    <Input
                      style={{ width: "350px" }}
                      disabled
                      value={userAccount?.phoneNumber}
                    />
                  </Form.Item>
                  <Form.Item label="Email:">
                    <Input
                      style={{ width: "350px" }}
                      disabled
                      value={userAccount?.email}
                    />
                  </Form.Item>
                </Form>
              </Col>
              <Col>
                <Form layout="vertical">
                  <Form.Item label="Tên đăng nhập">
                    <Input
                      style={{ width: "350px" }}
                      disabled
                      value={userAccount?.userName}
                    />
                  </Form.Item>
                  <Form.Item label="Mật khẩu">
                    <Input
                      style={{ width: "350px" }}
                      disabled
                      value={userAccount?.password}
                    />
                  </Form.Item>
                  <Form.Item label="Vai trò:">
                    <Input
                      style={{ width: "350px" }}
                      disabled
                      value={userAccount?.role}
                    />
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default ProfilePage;
