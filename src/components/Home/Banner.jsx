import React from 'react';
import ReactDOM from 'react-dom';
import MainFooter from '../Footer';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;



const Banner = ({ appName }) => {

  return ReactDOM.render(
<Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', float: 'right' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Login</Menu.Item>
        <Menu.Item key="3">Signup</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>
    <MainFooter appName="JP" />
  </Layout>,
    document.getElementById('root'),
  );
};

export default Banner;
