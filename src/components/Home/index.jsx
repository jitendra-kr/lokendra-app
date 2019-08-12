import React from "react";
import ReactDOM from "react-dom";
import MainFooter from "../Footer";
import MainHeader from "../Header";
import ProductList from "../ProductList"
import { Layout } from "antd";
import "./home.css";

const { Content } = Layout;


class Home extends React.Component {
  render() {
    return ReactDOM.render(
      <Layout className="layout" style={{ backgroundColor: "#ffffff" }}>
        <MainHeader appName="JP" />
        <Content style={{ padding: "50px 50px" }}>
        <ProductList />
        </Content>
        <MainFooter appName="JP" />
      </Layout>,
      document.getElementById("root")
    );
  }
}

export default Home;
