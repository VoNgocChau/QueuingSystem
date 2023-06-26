import { LogoutOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Image, Slider, Button } from "antd";
import React from "react";

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

const DashboardPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider theme="light">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ minHeight: "100vh" }}
        >
          <SubMenu key="sub1" title="Menu 1">
            <Menu.Item key="1">Submenu 1</Menu.Item>
            <Menu.Item key="2">Submenu 2</Menu.Item>
            <Menu.Item key="3">Submenu 3</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Menu 2">
            <Menu.Item key="4">Submenu 4</Menu.Item>
            <Menu.Item key="5">Submenu 5</Menu.Item>
            <Menu.Item key="6">Submenu 6</Menu.Item>
          </SubMenu>
        </Menu>
        <div
          style={{ position: "absolute", bottom: 0, left: 0, padding: "16px" }}
        >
          <Button
            type="primary"
            icon={<LogoutOutlined />}
            block
            style={{
              backgroundColor: "#fff3e7",
              color: "#ff9131",
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Đăng xuất
          </Button>
        </div>
      </Sider>
      <Content></Content>
      <Sider theme="light" width={400}>
        right sider
      </Sider>
    </Layout>
  );
};

export default DashboardPage;
