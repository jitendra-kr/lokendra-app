import React from "react";
import { Layout, Button, Tabs } from "antd";
import { upperFirst } from "lodash";
import { Link, withRouter } from "react-router-dom";
import "./index.css";
import get from "axios";
import Config from '../../../config/env'
const { Content } = Layout;
const { TabPane } = Tabs;
// const { Search } = Input;

class QuestionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      size: "small",
      config: Config.getData().default
    };
  }

  componentDidMount(type) {

    get(`${this.state.config.baseUrl}question/question-list?by=${type}`)
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
    return `/question/${item.slug}`;
  }

  onTabClick(key) {
    this.componentDidMount(key)
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
              onTabClick = { this.onTabClick.bind(this)}
              tabBarExtraContent={
              <Button type="primary" style={{ right: "32px" }}>
                <Link to={`/ask-question`}>New Questions</Link>
              </Button>}
              style = {{ width: "100%"}}>

                <TabPane tab="All" key="all" style = {{ left: "19px"}} >
                {/* <Search size="large" style={{ width: "97%", margin: '0px 0px 0px 14px' }} placeholder="input search text" onSearch={this.onSearch} enterButton /> */}
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
