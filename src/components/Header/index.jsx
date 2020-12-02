import React, { useContext } from "react";
import { useRouter } from "next/router";


import Link from "next/link";
import { Layout, Menu, Dropdown, Grid } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { UserContext } from "../../contexts/UserContext";
const { Header } = Layout;
const { useBreakpoint } = Grid;

function MainHeader() {

  let selectedTab = "3";
  const router = useRouter();
  let [user, setUser] = useContext(UserContext);

  if(!user) {
    user = "na";
  }


  const { md } = useBreakpoint();

  const keysMapper = {
    "/": "3",
    user: "0",
    login: "1",
    questions: "2",
  };

  for (let o in keysMapper) {
    if (router.pathname.includes(o)) {
      selectedTab = keysMapper[o];
    }
  }

  const logout = () => {
    localStorage.clear();
    setUser(() => null);
    router.push("/");
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/user">Account</Link>
      </Menu.Item>
      <Menu.Item onClick={logout}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header>
      <Link
        href="/"
        style={{ color: "#ffffff", fontSize: "x-large", fontStyle: "italic" }}
      >
        JP
      </Link>
      <Menu
        theme="dark"
        mode={md ? "horizontal" : "inline"}
        defaultSelectedKeys={[selectedTab]}
        style={{ lineHeight: "64px", float: "right" }}
      >
        <Menu.Item key="3">
          <Link href="/" style={{ color: "#ffffff" }}>
            Blogs
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/questions" style={{ color: "#ffffff" }}>
            Questions
          </Link>
        </Menu.Item>

        <Menu.Item key="1" className={user === 'na' ? "" : "display-none"}>
          <Link href="/login" style={{ color: "#ffffff" }}>
            Login/Register
          </Link>
        </Menu.Item>

        <Menu.Item key="0" className={user === 'na'  ? "display-none" : ""}>
          <Dropdown overlay={menu} placement="bottomCenter">
            <div
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ color: "#ffffff" }}
            >
              {user ? <UserOutlined /> : null}
            </div>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default MainHeader;
