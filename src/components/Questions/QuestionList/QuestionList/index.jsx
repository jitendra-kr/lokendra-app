import React from "react";
import get from "axios";
import { upperFirst } from "lodash";
import "./index.css";
import { Link, withRouter } from "react-router-dom";
import { Layout } from "antd";

const { Content } = Layout;
class BlogList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }
  componentWillMount() {
    get("https://jimmypoint-server.herokuapp.com/api/question/question-list")
      .then(response => {
        this.setState({
          data: response.data.result
        });
      })
      .catch(err => {
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
    return `/blog/${item.slug}`;
  }

  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="row">
              {this.state.data.map((item, i) => {
                return (
                  <div
                    className="col-lg-12 cursor-pointer"
                    key={i}
                    onClick={() => {
                      this.handleClick(item);
                    }}
                    style={{ marginTop: "25px" }}
                  >
                    <div className="listing border ">
                      <div
                        className="home-page-title"
                        style={{ marginLeft: "30px" }}
                      >
                        <Link to={{ pathname: this.detailPageUrl(item) }}>
                          {this.calculateTitle(item.title)}
                        </Link>
                      </div>
                      <div style={{ marginLeft: "35px" }}>
                        <p style = {{fontFamily: "monospace", fontStyle: "italic"}}>
                          <span className ="question-by">By </span> {upperFirst(item.where_asked)}
                          <span className ="question-by"> To </span> {upperFirst(item.author)}
                          <span className ="question-by"> On </span> January 8, 2018
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </Content>
    );
  }
}

export default withRouter(BlogList);
