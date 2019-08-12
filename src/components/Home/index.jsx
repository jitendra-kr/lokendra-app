import React from "react";
import ReactDOM from "react-dom";
import MainFooter from "../Footer";
import MainHeader from "../Header";
import { Layout, Col, Row, Card} from "antd";
import "./home.css";

const { Content } = Layout;


const data = [
  {
    title: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder",
    img: "images/bitcoin-coin.jpg"
  },
  {
    title:
      "The Indian Army is the land-based branch and the largest component of Indian Armed",
    img: "images/army.jpg"
  },
  {
    title:
      "Uber Technologies, Inc. is an American multinational transportation network company.",
    img: "images/uber.jpeg"
  },
  {
    title:
      "Creating blog content that is valuable, helpful, and/or entertaining is an effective way to grow.",
    img: "images/blog.jpg"
  },
  {
    title:
      "10,000 American Cryptocurrency Owners Will Receive Warning Letters From the IRS",
    img: "images/mark_zukerberg.jpg"
  },
  {
    title:
      "Mark Elliot Zuckerberg is an American technology entrepreneur and philanthropist.",
    img: "images/two.jpeg"
  },
  {
    title:
      "Computer software, or simply software, is a collection of data or compute",
    img: "images/software.jpg"
  },
  {
    title: "Baba Ramdev is an Indian yoga guru known for his work in ayurveda",
    img: "images/Ramdev.jpg"
  },
  {
    title:
      "Modi is an politician serving as the 14th and current Prime Minister of India since 2014.",
    img: "images/modi.jpg"
  },
  {
    title:
      "The No. 1 gold price site for fast loading live gold price charts in ounces.",
    img: "images/gold.jpg"
  }
];

class Home extends React.Component {
  render() {
    return ReactDOM.render(
      <Layout className="layout" style={{ backgroundColor: "#ffffff" }}>
        <MainHeader appName="JP" />
        <Content style={{ padding: "50px 50px" }}>
          {/* {
            data.map(function (key) {
              return <Row gutter={16}>
                <Col span={8}>
              <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
                  />
                  </Col>
                </Row>
            })
          } */}

          {/* <div className="row">
            {data.map(function (key) {
              return <div className="col-lg-4">
                <p className = "color">{key.title}</p>
                <img src={key.img} alt = "jp"></img>
              </div>
            })}
          </div> */}

          {/* <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <Icon type="setting" key="setting" />,
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
              </List.Item>
            )}
          /> */}

          <Row gutter={16}>
            {data.map(function(key) {
              return (
                <Col span={8}>
                  <Card
                    title="Card title"
                    bordered={false}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }>
                    {data[0].title}
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Content>

        <MainFooter appName="JP" />
      </Layout>,
      document.getElementById("root")
    );
  }
}

export default Home;
