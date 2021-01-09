import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { Layout } from "antd";
import AppHead from "../../Head/head";


const { Content } = Layout;

class CategoryList extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      data: this.props.data,

    };
  }



  calculateTitle = (title) => {
    const limit = 63;
    if (title.length > limit) {
      return title.substring(0, limit) + "...";
    }
    return title;
  };

  handleClick = (item) => {
    this.props.router.push(this.detailPageUrl(item));
  };

  detailPageUrl(item) {
    return `/blog/category/${item._id}/${item.slug}`;
  }

  render() {
    return (
      <Content>
        <AppHead data={{}} />
        <div className="row">
            {/* <h1 style={{ fontFamily: "serif" }}>Blog By Category</h1> */}

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
                  <div className="listing border">
                    <span>
                      <img
                        className="image-blog-list"
                        src={item.image}
                        alt={item.title}
                        style={{ width: "80%", height: "150px" }}
                      />
                    </span>
                    <div
                      className="home-page-title"
                      style={{ textAlign: "center" }}
                    >
                      <Link href={this.detailPageUrl(item)}>
                        {this.calculateTitle(item.title)}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Content>
    );
  }
}

export default withRouter(CategoryList);
