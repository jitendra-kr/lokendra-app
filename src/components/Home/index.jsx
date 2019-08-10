import React from 'react';
import ReactDOM from 'react-dom';
import MainFooter from '../Footer';
import MainHeader from '../Header';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

class Home extends React.Component {
  render() {
    return ReactDOM.render(
      <Layout className="layout">
          <MainHeader appName="JP" />
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
          </Content>
          <MainFooter appName="JP" />
        </Layout>,
          document.getElementById('root'),
        );
  }
}

export default Home;