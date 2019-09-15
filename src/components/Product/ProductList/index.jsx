import React from "react";
import "./index.css";
import { Link, withRouter } from "react-router-dom";


class ProductList extends React.Component {
  data = [
    {
      title: "Optimum Nutrition (ON) 100% Whey Protein Powder",
      img: "images/on_whey.jpg",
      stars: 3,
      price: 5300
    },
    {
      title:
        "Bsn Syntha-6 Protein Powder - 5.0 lbs (48 Servings)",
      img: "images/bsn-syntha-6-protien.jpg",
      stars: 5,
      price: 4500
    },
    {
      title:
        "Ultimate Nutrition ISO Sensation 93",
      img: "images/Ultimate-Nutrition-ISO-Sensation-93.jpg",
      stars: 3,
      price: 4500
    },
    {
      title:
        "MuscleTech NitroTech Performance Series Naturally Flavored",
      img: "images/MuscleTech-NitroTech-Performance-Series-Naturally-Flavored.webp",
      stars: 3,
      price: 4400
    }
  ];

  calculateTitle = title => {
    const limit = 63;
    if (title.length > limit) {
      return title.substring(0, limit) + "...";
    }
    return title;
  };

  handleClick = item => {
    this.props.history.push(this.detailPageUrl(item));
  };

  detailPageUrl(item) {
    return `/product/${item.title.replace(/[^A-Z0-9]/ig, "-").toLowerCase()}`;
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-2">
        </div>
        <div className="col-lg-8">
          <div className="row">
            {this.data.map((item, i) => {
              return (
                <div
                  className="col-lg-4 cursor-pointer"
                  key={i}
                  onClick={() => {
                    this.handleClick(item);
                  }}
                  style={{ marginTop: "25px" }}
                >

                  <div className="listing border ">
                    <span>
                      <img
                        className="image"
                        src={item.img}
                        alt="jp"
                        style={{ width: "100%", height: "250px" }}
                      />
                    </span>
                    <div className="home-page-title">
                      <Link to={this.detailPageUrl(item)}>
                        {this.calculateTitle(item.title)}
                      </Link>
                    </div>
                    <div className="">
                      <span className="price price-color">
                        <span className="price-color" style={{textDecoration: "line-through"}}> ₹ {(item.price+300).toLocaleString()}</span> ₹ {item.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-2">
        </div>
      </div>
    );
  }
}

export default withRouter(ProductList);
