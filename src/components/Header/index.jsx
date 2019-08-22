import React from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const MainHeader = ({ appName }) => {
  return (
    <Header>
      <div className="logo" />
      <span
        style={{ color: "#ffffff", fontSize: "x-large", fontStyle: "italic" }}
      >
        JP
      </span>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px", float: "right" }}
      >
        <Menu.Item key="1">HHHH</Menu.Item>
        <Menu.Item key="2">LLLL</Menu.Item>
        <Menu.Item key="3">SSSS</Menu.Item>
      </Menu>
    </Header>
  );
};

export default MainHeader;
