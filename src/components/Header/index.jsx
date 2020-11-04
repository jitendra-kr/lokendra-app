import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../index.css";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown, Grid  } from "antd";
import { UserOutlined } from '@ant-design/icons';

import { UserContext } from "../../contexts/UserContext";
const { Header } = Layout;
const { useBreakpoint } = Grid;





function MainHeader(props) {

  const { md } = useBreakpoint();

  let history = useHistory();
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    localStorage.clear()
    setUser(() => null);
    history.push("/");
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to={`/user`} >
          Account
              </Link>
      </Menu.Item>
      <Menu.Item onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );


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
         mode={md ? "horizontal" : "inline"}
        defaultSelectedKeys={["3"]}
        style={{ lineHeight: "64px", float: "right" }}
      >

        <Menu.Item key="3">
          <Link to={`/`} style={{ color: "#ffffff" }}>
            Blogs
            </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`/questions`} style={{ color: "#ffffff" }}>
            Questions
            </Link>
        </Menu.Item>
        <Menu.Item key="1" className={!user ? '' : 'display-none'}>
          <Link to={`/login`} style={{ color: "#ffffff" }}>
            Login/Register
            </Link>
        </Menu.Item>
        <Menu.Item key="0" className={user ? '' : 'display-none'} >
          <Dropdown overlay={menu} placement="bottomCenter">
            <div className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ color: "#ffffff" }} >
              {user ? <UserOutlined /> : null}
            </div>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );

}


export default MainHeader;
