import React from "react";
import "./index.css";
import { Link, withRouter } from "react-router-dom";

class ProductList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentWillMount() {
    fetch('./data/product.json').then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        data: data
      })
    }).catch(err => {
      console.log("Error Reading data " + err);
    });
  }


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
    localStorage.setItem('productId', item.id);
    return `/product/${item.slug}`;
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-2">
        </div>
        <div className="col-lg-8">
          <div className="row">
            {this.state.data.map((item, i) => {
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
                        style={{ width: "75%", height: "250px" }}
                      />
                    </span>
                    <div className="home-page-title">
                      <Link to={{ pathname: this.detailPageUrl(item) }}>
                        {this.calculateTitle(item.title)}
                      </Link>
                    </div>
                    <div className="">
                      <span className="price price-color">
                        <span className="price-color" style={{ textDecoration: "line-through" }}> ₹ {(item.price + 300).toLocaleString()}</span> ₹ {item.price.toLocaleString()}</span>
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
