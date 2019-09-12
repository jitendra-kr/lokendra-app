import React from "react";
import "./index.css";
import { Link, withRouter } from "react-router-dom";
// import { Avatar, Card } from "antd";
// const { Meta } = Card;

class ProductList extends React.Component {
  data = [
    {
      title: "Optimum Nutrition ON Gold Standard 100 Whey Protein Powder",
      img: "images/bitcoin-coin.jpg",
      stars: 3
    },
    {
      title:
        "The Indian Army is the land-based branch and the largest component of Indian Armed",
      img: "images/army.jpg",
      stars: 5
    },
    {
      title:
        "Uber Technologies, Inc. is an American multinational transportation network company.",
      img: "images/uber.jpeg",
      stars: 3
    },
    {
      title:
        "Creating blog content that is valuable, helpful, and/or entertaining is an effective way to grow.",
      img: "images/blog.jpg",
      stars: 3
    },
    {
      title:
        "10,000 American Cryptocurrency Owners Will Receive Warning Letters From the IRS",
      img: "images/mark_zukerberg.jpg",
      stars: 1
    },
    {
      title:
        "Mark Elliot Zuckerberg is an American technology entrepreneur and philanthropist.",
      img: "images/two.jpeg",
      stars: 3
    },
    {
      title:
        "Computer software, or simply software, is a collection of data or compute",
      img: "images/software.jpg",
      stars: 3
    },
    {
      title:
        "Baba Ramdev is an Indian yoga guru known for his work in ayurveda",
      img: "images/Ramdev.jpg",
      stars: 9
    },
    {
      title:
        "Modi is an politician serving as the 14th and current Prime Minister of India since 2014.",
      img: "images/modi.jpg",
      stars: 3
    },
    {
      title:
        "The No. 1 gold price site for fast loading live gold price charts in ounces.",
      img: "images/gold.jpg",
      stars: 5
    }
  ];

  calculateTitle = title => {
    const limit = 63;
    if (title.length > limit) {
      return title.substring(0, limit) + "...";
    }
    return title;
  };

  handleClick = (item) => {
    this.props.history.push(this.detailPageUrl(item))
  }

  detailPageUrl(item) {
    return `/product/${item.title.replace(/ /g, "-").toLowerCase()}`;
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
        <div className="row">
        {this.data.map( (item, i) => {
          return (
            <div
              className="col-lg-3 cursor-pointer"
              key={i}
              onClick={() => {
                this.handleClick(item);
              }}
            >
              <div style={{ backgroundColor: "#ECECEC", marginTop: "25px" }} >
                <span>
                  <img
                    className="image"
                    src="images/zookeeper.PNG"
                    alt="jp"
                    style={{ width: "100%", height: "100%" }}
                  />
                </span>
                <div className="">
                  <Link to={this.detailPageUrl(item)}>{this.calculateTitle(item.title)}</Link>
                </div>
              </div>
              {/* <Card
                hoverable
                style={{  marginTop: "50px" }}
                cover={
                  <img
                    alt="example"
                    src="images/zookeeper.PNG"
                  />
                }
              >
                <Meta
                  title={item.title}
                  description="www.instagram.com"
                />
              </Card> */}
            </div>
          );
        })}
      </div>
        </div>
        <div className="col-lg-2"></div>
      </div>

    );
  }
}

export default withRouter(ProductList);
