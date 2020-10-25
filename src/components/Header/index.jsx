import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const MainHeader = ({ appName }) => {
  return (
    <Header>
      <Link
        to={`/`}
        style={{ color: "#ffffff", fontSize: "x-large", fontStyle: "italic" }}
      >
        JP
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px", float: "right" }}
      >
        <Menu.Item key="3">
          <Link to={`/`} style={{ color: "#ffffff" }}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`/`} style={{ color: "#ffffff" }}>
            Blogs
          </Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to={`/login`} style={{ color: "#ffffff" }}>
            Login/Register
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default MainHeader;
