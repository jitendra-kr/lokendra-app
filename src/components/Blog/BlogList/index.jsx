import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { Layout, Button } from "antd";

import AppHead from "../../Head/head";
import { isAuthorisedToPostBlog } from "../../../utils/index";

const { Content } = Layout;

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      authorisedToPostBlog: false,
    };
  }

  componentDidMount() {
    this.setState({
      authorisedToPostBlog: isAuthorisedToPostBlog(),
    });
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
    return `/blog/${item.slug}`;
  }

  render() {
    return (
      <Content>
        <AppHead data={{}} />
        <div className="row">
          {this.state.authorisedToPostBlog ? (
            <div className="row">
              <div className="col-lg-6">
                <h1 style={{ fontFamily: "serif" }}>Trending</h1>
              </div>
              <div
                className={`col-lg-6  ${
                  this.state.authorisedToPostBlog ? "visible" : "invisible "
                }`}
              >
                <Link href="/blog/new-blog">
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ float: "right" }}
                  >
                    New Blog
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}

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
                        alt="jp"
                        alt=""
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

export default withRouter(BlogList);
