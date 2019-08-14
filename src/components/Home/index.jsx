import React from "react";
import MainFooter from "../Footer";
import MainHeader from "../Header";
import ProductList from "../ProductList"
import { Layout } from "antd";
import "./home.css";

const { Content } = Layout;


class Home extends React.Component {
  render() {
    return (
      <Layout className="layout" style={{ backgroundColor: "#ffffff" }}>
        <MainHeader appName="JP" />
        <Content style={{ padding: "50px 50px" }}>
        <ProductList />
        </Content>
        <MainFooter appName="JP" />
      </Layout>
    );
  }
}

export default Home;
