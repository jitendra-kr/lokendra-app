import React from "react";
import * as _ from "lodash";
import "./index.css";
import { Layout, Rate, Menu, Button, Tabs, Table, Select, Avatar } from "antd";
import { Link } from "react-router-dom";
import { ProductReview } from "../../../components";
const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

export default class BuyNow extends React.Component {

  paramsId;
  constructor(props){
    super(props);
    this.paramsId = this.props.match.params.id;
    this.state = {
      data: {
        size: {}
      }
    }
  }

  componentWillMount() {

    fetch('../data/product.json').then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        data: _.filter(data, { slug: this.paramsId })[0]
      });
    }).catch(err => {
      console.log("Error Reading data " + err);
    });
  }

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
        value: this.state.data[o]
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
    let size = this.state.size ? this.state.size : this.state.data.size.value;
    let flavour = this.state.flavour ? this.state.flavour : this.state.data.flavour.value;
    if (size && flavour) {
      this.props.history.push(`/checkout/${size}/${flavour}`);
    } else {
      console.log("Please size and flavour");
    }
  };
  defaultSelectedSize() {
    return this.state.data.size.value;


  }

  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4">
                <Avatar shape="square" style={{width: "100%", height: "90%"}} src= {"/" + this.state.data.img} />
              </div>
              <div className="col-lg-8">
                <Link to={`/home`}>{this.state.data.brand}</Link>
                <h3>{this.state.data.title}</h3>
                <Rate disabled defaultValue={2} />
                <span>
                  <Link to={`/product-reviews/${this.paramsId}`}> {this.state.data.numberOfReviews} Reviews </Link>
                </span>
                <div className="m-top-30 size">
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[this.defaultSelectedSize()]}
                    style={{ float: "left" }}
                  >
                    {this.state.data.availableSize ? this.state.data.availableSize.map((o, i) => {
                      return <Menu.Item key={o.value} onClick={this.selectSize}>{o.key}</Menu.Item>;
                    }) : null}
                  </Menu>
                </div>
                <br />
                <div className="m-top-30">
                  <Select
                    defaultValue="dbr"
                    style={{ width: "70%" }}
                    onChange={this.selectFlavour}
                  >
                    {this.state.data.flavours ? this.state.data.flavours.map((o, i) => {
                      return (
                        <Option value={o.value} key={i}>
                          {o.key}
                        </Option>
                      );
                    }) : null}
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
                    ₹ {this.state.data.price}
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
