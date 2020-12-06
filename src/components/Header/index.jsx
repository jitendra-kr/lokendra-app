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
  const [visible, setvisible] = useState(false);
  let selectedTab = "3";
  const router = useRouter();
  let [user, setUser] = useContext(UserContext);

  if (!user || isEmpty(user)) {
    user = "na";
  }

  console.log(user)


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
    setvisible(false);
    router.push("/");
  };

  const onDrawerClose = () => {
    console.log("onDrawerClose hited");
    setvisible(false);
  };

  const showDrawer = () => {
    setvisible(true);
  };

  const userMenu = (
    <Menu
      onClick={() => {
        setvisible(false);
      }}
    >
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
        style={{ lineHeight: "64px", float: "right" }}

      >
        <Menu.Item key="3"        onClick={() => {
          setvisible(false);
        }}>
          <Link href="/" style={{ color: "#ffffff" }}>
            Blogs
          </Link>
        </Menu.Item>
        <Menu.Item key="2"        onClick={() => {
          setvisible(false);
        }}>
          <Link href="/questions" style={{ color: "#ffffff" }}>
            Questions
          </Link>
        </Menu.Item>
        {user === "na" ? (
          <Menu.Item key="1"        onClick={() => {
            setvisible(false);
          }}>
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
                {user ? <UserOutlined /> : null}
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
          style={{
            color: "#ffffff",
            fontSize: "x-large",
            fontStyle: "italic",
            cursor: "pointer",
          }}
        >
          JP
        </span>
      </Link>
      {md ? (
        mainMenu()
      ) : (
        <>
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
            title={`Hello ${user === "na" ? '' : user.firstName}`}
            placement={"left"}
            closable={false}
            onClose={onDrawerClose}
            visible={visible}
            key={"left"}
          >
            {mainMenu()}
          </Drawer>
        </>
      )}
    </Header>
  ) : (
    ""
  );
}

export default MainHeader;
