import React from "react";
import { httpGet } from "../../../utils/http";
import "./index.css";
import { Link, withRouter } from "react-router-dom";
import Config from '../../../config/env'
import { Layout } from "antd";

const { Content } = Layout;
class BlogList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      config: Config.getData().default
    };

  }

  componentDidMount() {
    httpGet({url: `${this.state.config.baseUrl}blog-management/blogs`}).then((response) => {
      this.setState({
        data: response.result
      });
    }).catch((err) => {
      console.log( err);
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
    return `/blog/${item.slug}`;
  }

  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-2"></div>
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
                          className="image-blog-list"
                          src={item.image}
                          alt="jp"
                          style={{ width: "75%", height: "250px" }}
                        />
                      </span>
                      <div
                        className="home-page-title"
                        style={{ textAlign: "center" }}
                      >
                        <Link to={{ pathname: this.detailPageUrl(item) }}>
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
  }
}

export default withRouter(BlogList);
