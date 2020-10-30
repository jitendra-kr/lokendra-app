import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../index.css";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown } from "antd";
import { UserOutlined } from '@ant-design/icons';

import { UserContext } from "../../contexts/UserContext";
const { Header } = Layout;





function MainHeader(props) {
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
      <Link to={`/`} >
              Blogs
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
        <Menu.Item key="1" className={!user ? '' : 'display-none'}>
          <Link to={`/login`} style={{ color: "#ffffff" }}>
            Login/Register
            </Link>
        </Menu.Item>
        <Menu.Item key="0" className={user ? '' : 'display-none'}>

          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ color: "#ffffff" }} >

              {user ? <UserOutlined /> : 'Hover me'}

            </span>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );

}


export default MainHeader;
