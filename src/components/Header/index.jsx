import React, { useContext, useState, useEffect } from "react";
import { isEmpty, get } from "lodash";
import { useRouter } from "next/router";

import Link from "next/link";
import { Layout, Menu, Dropdown, Grid, Drawer, Row, Col } from "antd";
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import { UserContext } from "../../contexts/UserContext";
import { isAuthorisedToPostBlog } from "../../utils";
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
  const [authorisedToPostBlog, setIsAuthorisedToPostBlog] = useState(
    isAuthorisedToPostBlog()
  );
  const router = useRouter();
  const selectedTab = keysMapper[router.pathname];

  const { md } = useBreakpoint();

  if (!user || isEmpty(user)) {
    user = "na";
  }

  useEffect(() => {
    setIsAuthorisedToPostBlog(isAuthorisedToPostBlog());
    window.addEventListener('storage', event =>{
      if(get(event, 'key') === 'auth' && !get(event, 'newValue')) {
        window.location.reload();
      }
    });
  }, [user]);

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('auth')
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
    const eml = document.getElementsByClassName("ant-menu-item-selected");
    if (eml && eml.length) {
      eml[0].classList.remove("ant-menu-item-selected");
    }
  };

  const userMenuItem = (
    <React.Fragment>
      <Menu.Item key="0">
        <Link href="/user">Account</Link>
      </Menu.Item>
      {authorisedToPostBlog ? (
        <Menu.Item key="01">
          <Link href="/user">Post Blog</Link>
        </Menu.Item>
      ) : (
        ""
      )}
      <Menu.Item onClick={logout}>Logout</Menu.Item>
    </React.Fragment>
  );

  const userMenu = <Menu>{userMenuItem}</Menu>;

  const mainMenu = () => {
    return (
      <Menu
        theme="dark"
        mode={md ? "horizontal" : "inline"}
        defaultSelectedKeys={[selectedTab]}
        style={{ textAlign: "center" }}
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
        ) : md ? (
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
        ) : (
          userMenuItem
        )}
      </Menu>
    );
  };

  return md !== undefined ? (
    <Layout>
      <Header className="header">
        <Row>
          <Col span={8}>
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
          </Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>
            <div>
              {md ? (
                mainMenu()
              ) : (
                <React.Fragment>
                  {isDrawervisible ? (
                    <MenuFoldOutlined
                      style={{
                        color: "#ffffff",
                        float: "right",
                        marginTop: "20px",
                        fontSize: "30px",
                      }}
                      onClick={showDrawer}
                    />
                  ) : (
                    <MenuUnfoldOutlined
                      style={{
                        color: "#ffffff",
                        float: "right",
                        marginTop: "20px",
                        fontSize: "30px",
                      }}
                      onClick={showDrawer}
                    />
                  )}

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
            </div>
          </Col>
        </Row>
      </Header>
    </Layout>
  ) : (
    ""
  );
}

export default MainHeader;
