import React from "react";
import { Layout, Button, Tabs } from "antd";
import { upperFirst } from "lodash";
import { Link, withRouter } from "react-router-dom";
import "./index.css";
import { httpGet } from "../../../utils/http";
import {
  messageInfo
} from "../../../utils/antd"
const { Content } = Layout;
const { TabPane } = Tabs;

class QuestionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      size: "small"
    };
  }

  componentDidMount(type) {

    httpGet({url: `question/question-list?by=${type}`})
      .then(response => {
        this.setState({
          data: response.result
        });
      })
      .catch(err => {
        console.log("Error Reading data " + err);
      });

  }

  calculateTitle = title => {
    const limit = 63;
    if (title.length > limit) {
      return upperFirst(title.substring(0, limit)) + "...";
    }
    return upperFirst(title);
  };


  date(date) {
    if (date) {
      const newDate = new Date(date);
      const month = newDate.toLocaleString('default', { month: 'long' });
      return `${month}, ${newDate.getDate()} ${newDate.getFullYear()}`
    }
  }

  handleClick = item => {
    this.props.history.push(this.detailPageUrl(item));
  };

  detailPageUrl(item) {
    return `/questions/${item._id}/${item.slug}`;
  }

  onTabClick(key) {
    if (localStorage.getItem('auth')) {
      if (key === 'askQues') {
        return this.props.history.push('/questions/ask');
      }
      this.componentDidMount(key)
    } else {
      messageInfo({ content: `You need to login to ${key === 'askQues' ? 'ask question' : 'see your questions'}`, duration: 3 })
      setTimeout(() => {
        this.props.history.push('/login');
      }, 2000);
    }
  }

  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="row">

              <Tabs
                defaultActiveKey="all"
                onTabClick={this.onTabClick.bind(this)}
                tabBarExtraContent={
                  <Button type="primary" style={{ right: "32px" }} onClick={this.onTabClick.bind(this, 'askQues')}>
                    New Questions
              </Button>}
                style={{ width: "100%" }}>

                <TabPane tab="All" key="all" style={{ left: "19px" }} >
                  {this.state.data.map((item, i) => {
                    return (
                      <div
                        className="col-lg-12 cursor-pointer"
                        key={i}
                        onClick={() => {
                          this.handleClick(item);
                        }}
                        style={{ marginTop: "30px" }}
                      >
                        <div className="listing border">
                          <div
                            className="home-page-title"
                            style={{ marginLeft: "25px" }}
                          >
                            <Link to={{ pathname: this.detailPageUrl(item) }}>
                              {this.calculateTitle(item.title)}
                            </Link>
                          </div>
                          <div style={{ marginLeft: "35px" }}>
                            <p>
                              <span className="question-by">By - </span>
                              {upperFirst(item.where_asked)}
                              <span className="question-by"> To -  </span>
                              {upperFirst(item.author)}
                              <span className="question-by"> On -  </span>
                          8 January 2019
                          </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </TabPane>
                <TabPane tab="My Questions" key="me">
                  {this.state.data.map((item, i) => {
                    return (
                      <div
                        className="col-lg-12 cursor-pointer"
                        key={i}
                        onClick={() => {
                          this.handleClick(item);
                        }}
                        style={{ marginTop: "30px" }}
                      >
                        <div className="listing border">
                          <div
                            className="home-page-title"
                            style={{ marginLeft: "25px" }}
                          >
                            <Link to={{ pathname: this.detailPageUrl(item) }}>
                              {this.calculateTitle(item.title)}
                            </Link>
                          </div>
                          <div style={{ marginLeft: "35px" }}>
                            <p>
                              <span className="question-by">By - </span>
                              {upperFirst(item.where_asked)}
                              <span className="question-by"> To -  </span>
                              {upperFirst(item.author)}
                              <span className="question-by"> On -  </span>
                          8 January 2019
                          </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </TabPane>
              </Tabs>

            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </Content>
    );
  }
}

export default withRouter(QuestionList);
