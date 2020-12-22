import React, { useContext, useState } from "react";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";

import Link from "next/link";
import { Layout, Menu, Dropdown, Grid, Drawer } from "antd";
import { UserOutlined, MenuFoldOutlined } from "@ant-design/icons";

import { UserContext } from "../../contexts/UserContext";
const { Header } = Layout;
const { useBreakpoint } = Grid;

function MainHeader() {
  const keysMapper = {
    "/": "",
    "/blog": "3",
    "/user": "0",
    "/login": "1",
    "/questions": "2",
  };

  let [user, setUser] = useContext(UserContext);
  const [isDrawervisible, setDrawerVisibility] = useState(false);
  const router = useRouter();
  const selectedTab = keysMapper[router.pathname];

  const { md } = useBreakpoint();

  if (!user || isEmpty(user)) {
    user = "na";
  }


  const logout = () => {
    localStorage.clear();
    setUser(null);
    setDrawerVisibility(false);
    router.push("/");
  };

  const onDrawerClose = () => {
    setDrawerVisibility(false);
  };

  const showDrawer = () => {
    setDrawerVisibility(true);
  };

  const resetTabsSelection = () => {
    const eml = document.getElementsByClassName("ant-menu-item-selected")
    if(eml && eml.length) {
      eml[0].classList.remove("ant-menu-item-selected");
    }
  };

  const userMenu = (
    <Menu onClick={onDrawerClose}>
      <Menu.Item>
        <Link href="/user">Account</Link>
      </Menu.Item>
      <Menu.Item onClick={logout}>Logout</Menu.Item>
    </Menu>
  );

  const mainMenu = () => {
    return (
      <Menu
        theme="dark"
        mode={md ? "horizontal" : "inline"}
        defaultSelectedKeys={[selectedTab]}
        style={{ float: "right", width: "20%" }}
      >
        <Menu.Item key="3" onClick={onDrawerClose}>
          <Link href="/blog" style={{ color: "#ffffff" }}>
            Blogs
          </Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={onDrawerClose}>
          <Link href="/questions" style={{ color: "#ffffff" }}>
            Questions
          </Link>
        </Menu.Item>
        {user === "na" ? (
          <Menu.Item key="1" onClick={onDrawerClose}>
            <Link href="/login" style={{ color: "#ffffff" }}>
              Login/Register
            </Link>
          </Menu.Item>
        ) : (
          <Menu.Item key="0">
            <Dropdown overlay={userMenu} placement="bottomCenter">
              <div
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                style={{ color: "#ffffff" }}
              >
                <UserOutlined />
              </div>
            </Dropdown>
          </Menu.Item>
        )}
      </Menu>
    );
  };

  return md !== undefined ? (
    <Header>
      <Link href="/">
        <span
          onClick={resetTabsSelection}
          style={{
            color: "#ffffff",
            fontSize: "x-large",
            fontFamily: "math",
            cursor: "pointer",
          }}
        >
          Jimmypoint
        </span>
      </Link>
      {md ? (
        mainMenu()
      ) : (
        <React.Fragment>
          <MenuFoldOutlined
            style={{
              color: "#ffffff",
              float: "right",
              marginTop: "20px",
              fontSize: "30px",
            }}
            onClick={showDrawer}
          />
          <Drawer
            title={`Hello ${user === "na" ? "" : user.firstName}`}
            placement={"left"}
            closable={false}
            onClose={onDrawerClose}
            visible={isDrawervisible}
            key={"left"}
          >
            {mainMenu()}
          </Drawer>
        </React.Fragment>
      )}
    </Header>
  ) : (
    ""
  );
}

export default MainHeader;
