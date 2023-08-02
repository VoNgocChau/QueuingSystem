import React from "react";

import { Layout, Typography, Card, Progress } from "antd";
import "./dashboard.css";
import DashboardContent from "./pages/DashboardContent";
import SiderMenu from "../Menu/SiderMenu";
import AvatarPage from "../Avatar/Avatar";

const { Sider, Content } = Layout;
const { Text } = Typography;

const DashboardPage: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderMenu />
      <Content>
        <DashboardContent />
      </Content>
      <Sider theme="light" width={240}>
        <AvatarPage />
        <div style={{ padding: "10px 20px" }}>
          <Text className="txt__overview">Tổng quan</Text>
        </div>
        <div>
          <Card>
            <Progress
              type="circle"
              percent={90}
              size={50}
              strokeColor={"#FF7506"}
            />
          </Card>
        </div>
        <div>
          <Card>
            <Progress
              type="circle"
              percent={90}
              size={50}
              strokeColor={"#FF7506"}
            />
          </Card>
        </div>
        <div>
          <Card>
            <Progress
              type="circle"
              percent={90}
              size={50}
              strokeColor={"#FF7506"}
            />
          </Card>
        </div>
      </Sider>
    </Layout>
  );
};

export default DashboardPage;
