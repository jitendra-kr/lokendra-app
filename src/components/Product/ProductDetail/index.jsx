import React from "react";
import "./index.css";
import { Layout, Rate, Menu, Dropdown, Button, Tabs, Table } from "antd";
import { Link } from "react-router-dom";
import { ProductReview } from "../../../components"
const { Content } = Layout;
const { TabPane } = Tabs;

export default class BuyNow extends React.Component {
  data = {
    price: 5400,
    title: "Hello Jitendra Hello Hello Hello Hello Hello Hello Hello ",
    stars: 4,
    numberOfReviews: 530,
    size: ["5lbs"],
    flavour: ["Double Rich Chocolate"],
    brand: "Sopra Steria",
    servingSize: "36 g",
    ProteinPerServing: "25 g",
    manufacturedIn: "USA",
    form: "Powder",
    weight: "2.3 kg",
    vegetarianNonVegetarian: "Vegetarian",
    packaging: "Jar",
    goal: "Muscle Building,Muscle Recovery",
    img: "images/zookeeper.PNG",
    discount: "30",
    manufacturer: "Dymatize Enterprises LLC - Dallas"
  };



  productTableColumn = () => {
    return [
      {
        title: "Name",
        dataIndex: "key",
        className: "hide"
      },
      {
        title: "Value",
        dataIndex: "value",
        className: "hide"
      }
    ]
  }

  productTableDetail = () => {
    let tableKeys = ["size", "flavour", "brand", "servingSize", "ProteinPerServing", "manufacturedIn", "form", "weight", "vegetarianNonVegetarian", "packaging", "goal", "manufacturer"];
    return tableKeys.map((o) => {
      return {
          key: o,
          value: this.data[o]
        }
    });
  };

  menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  callback = (key) => {
    console.log(key);
  }

  buyNow = () => {
    this.props.history.push('/checkout')
  }
  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-3">
                <img
                  className="image"
                  src="/images/zookeeper.PNG"
                  alt="jp"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="col-lg-9">
                <Link to={`/home`}>{this.data.brand}</Link>
                <h3>{this.data.title}</h3>
                <Rate disabled defaultValue={2} />
                <span>
                  <Link to={`/product-reviews/abc`}> 562 Reviews </Link>
                </span>
                <div className="m-top-30">
                  <Dropdown overlay={this.menu} placement="bottomCenter">
                    <Button>{this.data.size}</Button>
                  </Dropdown>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Dropdown overlay={this.menu} placement="bottomCenter">
                    <Button>{this.data.flavour}</Button>
                  </Dropdown>
                </div>
                <div className="m-top-30">
                  <div
                    style={{
                      color: "#8C0000",
                      fontWeight: "bold",
                      fontSize: "30px"
                    }}
                  >
                    ₹ {this.data.price}
                  </div>
                  {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                  <div className="m-top-30">
                  <Button type="primary" size="small" className="buy-now-button" onClick={this.buyNow} >
                    Buy Now
                  </Button>
                  </div>


                </div>
              </div>
            </div>
            <div className="m-top-50">
              <Tabs onChange={this.callback} type="card">
                <TabPane tab="Product Info" key="1">
                  <Table
                    columns={this.productTableColumn()}
                    dataSource={this.productTableDetail()}
                    pagination={false}
                    showHeader={false}
                  />

                </TabPane>
                <TabPane tab="Reviews" key="2">
                  <ProductReview />
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div className="col-lg-2" />
        </div>
      </Content>
    );
  }
}
