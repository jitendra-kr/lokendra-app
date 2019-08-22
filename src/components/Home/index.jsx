import React from "react";
import ProductList from "../Product/ProductList";
import { Layout } from "antd";
import "./home.css";

const { Content } = Layout;

class Home extends React.Component {
  render() {
    return (
        <Content style={{ padding: "50px 50px" }}>
          <ProductList />
        </Content>
    );
  }
}

export default Home;
