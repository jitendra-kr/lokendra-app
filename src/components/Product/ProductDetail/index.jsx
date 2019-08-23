import React from "react";
import { Layout, Rate, Menu, Dropdown, Button, Tabs, Table } from "antd";
import { Link } from "react-router-dom";
const { Content } = Layout;
const { TabPane } = Tabs;

const ProductDetail = ({ appName }) => {
  const data = {
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

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      className: "hide"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      className: "hide"
    }
  ];

  const dataOne = [
    {
      key: "1",
      name: "John Brown",
      age: 32
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32
    }
  ];

  const menu = (
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

  function callback(key) {
    console.log(key);
  }
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
                style={{ width: "100%", height: "70%" }}
              />
            </div>
            <div className="col-lg-9">
              <Link to={`/home`}>{data.brand}</Link>
              <h3>{data.title}</h3>
              <Rate disabled defaultValue={2} />
              <span>
                <Link to={`/product-reviews/abc`}> 562 Reviews </Link>
              </span>
              <div className="m-top-30">
                <Dropdown overlay={menu} placement="bottomCenter">
                  <Button>{data.size}</Button>
                </Dropdown>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Dropdown overlay={menu} placement="bottomCenter">
                  <Button>{data.flavour}</Button>
                </Dropdown>
              </div>
              <div className="m-top-30">
                <span
                  style={{
                    color: "#8C0000",
                    fontWeight: "bold",
                    fontSize: "30px"
                  }}
                >
                  ₹ {data.price}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="primary" size="small">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div>
            <Tabs onChange={callback} type="card">
              <TabPane tab="Product Info" key="1">
                <Table
                  columns={columns}
                  dataSource={dataOne}
                  pagination={false}
                  showHeader={false}
                />
              </TabPane>
              <TabPane tab="Reviews" key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </div>
        </div>
        <div className="col-lg-2" />
      </div>
    </Content>
  );
};

export default ProductDetail;
