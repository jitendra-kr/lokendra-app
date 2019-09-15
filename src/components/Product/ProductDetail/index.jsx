import React from "react";
import "./index.css";
import { Layout, Rate, Menu, Button, Tabs, Table, Select, Avatar } from "antd";
import { Link } from "react-router-dom";
import { ProductReview } from "../../../components";
const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

export default class BuyNow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: 'Jordan Belfort'
    }
  }
  data = {
    price: 5400,
    title: "Hello Jitendra Hello Hello Hello Hello Hello Hello Hello ",
    stars: 4,
    numberOfReviews: 530,
    availableSize: [{key : "2lbs", value: "2l"}, {key: "5lbs", value: "5l"}, {key: "10lbs", value: "10l"}],
    size: {key: "5lbs", value: "5l"},
    flavours: [
      { key: "Double Rich Chocolate", value: "dbr" },
      { key: "Chocolate Malt", value: "cm" },
      { key: "Coffee", value: "c" },
      { key: "Cookie and Cream", value: "cnc" }
    ],
    flavour: { key: "Double Rich Chocolate", value: "dbr" },
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
    ];
  };

  productTableDetail = () => {
    let tableKeys = [
      "size",
      "flavour",
      "brand",
      "servingSize",
      "ProteinPerServing",
      "manufacturedIn",
      "form",
      "weight",
      "vegetarianNonVegetarian",
      "packaging",
      "goal",
      "manufacturer"
    ];
    return tableKeys.map(o => {
      return {
        key: o,
        value: this.data[o]
      };
    });
  };

  selectFlavour = (value) => {
    this.setState({ flavour: value });
  }

  selectSize = (value) => {
    this.setState({ size: value.key });
  }

  buyNow = () => {
    let size = this.state.size ? this.state.size : this.data.size.value;
    let flavour = this.state.flavour ? this.state.flavour : this.data.flavour.value;
    if (size && flavour) {
      this.props.history.push(`/checkout/${size}/${flavour}`);
    } else {
      console.log("Please size and flavour");
    }

  };

  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4">
                <Avatar shape="square" style={{width: "100%", height: "70%"}} src="/images/zookeeper.PNG" />
              </div>
              <div className="col-lg-8">
                <Link to={`/home`}>{this.data.brand}</Link>
                <h3>{this.data.title}</h3>
                <Rate disabled defaultValue={2} />
                <span>
                  <Link to={`/product-reviews/abc`}> 562 Reviews </Link>
                </span>
                <div className="m-top-30 size">
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[this.data.size.value]}
                    style={{ float: "left" }}
                  >
                    {this.data.availableSize.map((o, i) => {
                      return <Menu.Item key={o.value} onClick={this.selectSize}>{o.key}</Menu.Item>;
                    })}
                  </Menu>
                </div>
                <br />
                <div className="m-top-30">
                  <Select
                    defaultValue="dbr"
                    style={{ width: "70%" }}
                    onChange={this.selectFlavour}
                  >
                    {this.data.flavours.map((o, i) => {
                      return (
                        <Option value={o.value} key={i}>
                          {o.key}
                        </Option>
                      );
                    })}
                  </Select>
                </div>
                <br />
                <div className="m-top-30">
                  <div
                    style={{                     
                      fontWeight: "bold",
                      fontSize: "30px"
                    }}
                    className="price-color"
                  >
                    ₹ {this.data.price}
                  </div>
                  <div className="m-top-30">
                    <Button
                      type="primary"
                      size="small"
                      className="buy-now-button"
                      onClick={this.buyNow}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-top-50">
              <Tabs type="card">
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
