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
      data: this.props.data
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
    return `/blog/${item.slug}`;
  }

  render() {

      return (
        <Content style={{ padding: "50px 47px 59px 56px" }}  >
          <AppHead data={{}}/>
          <div className="row" style={{ marginTop: "15px" }}>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-6">
                  <h1  style ={{fontFamily: "serif"}} >Trending</h1>
                </div>
                <div
                className={`col-lg-6  ${
                  isAuthorisedToPostBlog() ? "visible" : "invisible "
                }`}
              >
                <Link href="/blog/new-blog">
                  <Button type="primary" htmlType="submit" style={{float: "right"}}>
                    New Blog
                  </Button>
                </Link>
              </div>
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
                            alt = ""
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
            <div className="col-lg-4"></div>
          </div>
        </Content>
      )

  }
}

export default withRouter(BlogList);
