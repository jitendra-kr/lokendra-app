import React from "react";
import Link from "next/link";

import { withRouter } from "next/router";
import { httpGet } from "../../../utils/http";
import AppHead from "../../Head/head";
import { Layout, Button } from "antd";

import { getUser, isAuthorisedToPostBlog } from "../../../utils/index";

const { Content } = Layout;

class BlogList extends React.Component {
  user;
  constructor(props) {
    super(props);
    this.user = getUser();

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    httpGet({ url: `/blog-management/blogs` })
      .then((response) => {
        this.setState({
          data: response.result,
        });
      })
      .catch((err) => {
        console.log(err);
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
    if (this.state.data.length) {
      return (
        <Content style={{ padding: "50px 50px" }}>
          <AppHead data={{}}/>
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div
                className={` ${
                  isAuthorisedToPostBlog() ? "visible" : "invisible "
                }`}
              >
                <Link href="/blog/new-blog">
                  <Button type="primary" htmlType="submit">
                    New Blog
                  </Button>
                </Link>
              </div>
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
                            style={{ width: "70%", height: "150px" }}
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
            <div className="col-lg-2"></div>
          </div>
        </Content>
      );
    } else {
      return "";
    }
  }
}

export default withRouter(BlogList);
