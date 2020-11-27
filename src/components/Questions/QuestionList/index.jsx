import React from "react";
import { Layout, Button, Tabs, Modal } from "antd";
import { upperFirst } from "lodash";
import { Link, withRouter } from "react-router-dom";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import "./index.css";
import { httpGet, httpDelete } from "../../../utils/http";
import { messageError, messageSuccess, messageInfo } from "../../../utils/antd";
import DataNoFound from "../../DataNoFound";
import { isLoggedIn, getUser } from "../../../utils/index";
const { Content } = Layout;
const { TabPane } = Tabs;
const { confirm } = Modal;

class QuestionList extends React.Component {
  isLoggedIn;
  user;
  skip;
  limit;

  constructor(props) {
    super(props);

    this.isLoggedIn = isLoggedIn();
    this.skip = 0;
    this.limit = 50;
    this.user = getUser();
    this.state = {
      data: [],
      dataLoaded: false,
      loadMore: false
    };
  }

  componentDidMount(type) {

    this.fetchQuestion(type)

  }

  fetchQuestion (type) {
    this.setState({
      dataLoaded: false,
    });
    httpGet({
      url: `question/question-list?by=${type}&skip=${this.skip}&limit=${this.limit}`,
    })
      .then((response) => {
        this.setState({
          data: [...this.state.data, ...response.result],
          dataLoaded: true,
          loadMore: response.result.length && this.limit === response.result.length   ? 1 : 0
        });
        this.skip += 50;
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }

  loadMore() {
    this.fetchQuestion()
  }

  delete(questionId) {
    const that = this;
    confirm({
      title: "Are you sure delete this answer?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        httpDelete({ url: `question/delete/${questionId}` })
          .then((response) => {
            that.componentDidMount();
            messageSuccess({ content: "Deleted successfully" });
          })
          .catch((err) => {
            console.log(err);
            messageError({ content: "something went wrong" });
          });
      },
    });
  }

  tabPane(tab, key) {
    return (
      <TabPane tab={tab} key={key} style={{ left: "19px" }}>
        {this.state.data.length ? (
          this.state.data.map((item, i) => {
            return (
              <div className="col-lg-12" key={i} style={{ marginTop: "30px" }}>
                <div className="listing border">
                  <div
                    className="home-page-title"
                    style={{ marginLeft: "25px" }}
                  >
                    <Link to={{ pathname: this.detailPageUrl(item) }}>
                      {this.calculateTitle(item.title)}
                    </Link>
                    {this.isLoggedIn && this.user?._id === item.author?._id ? (
                      <>
                        <DeleteOutlined
                          style={{
                            color: "red",
                            float: "right",
                            padding: "10px",
                          }}
                          onClick={() => {
                            this.delete(item._id);
                          }}
                        />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div style={{ marginLeft: "35px" }}>
                    <p>
                      <span className="question-by">By - </span>
                      {upperFirst(item.where_asked)}
                      <span className="question-by"> To - </span>
                      {upperFirst(item?.author?.firstName)}
                      <span className="question-by"> On - </span>
                      {this.date(item.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : this.state.dataLoaded ? (
          <div style={{ width: "100%", marginTop: "70px" }}>
            <DataNoFound
              data={{
                text:
                  tab === "All"
                    ? "No data found"
                    : "You have not posted any question",
              }}
            />
          </div>
        ) : (
          ""
        )}
      </TabPane>
    );
  }
  calculateTitle = (title) => {
    const limit = 63;
    if (title.length > limit) {
      return upperFirst(title.substring(0, limit)) + "...";
    }
    return upperFirst(title);
  };

  date(date) {
    if (date) {
      const newDate = new Date(date);
      const month = newDate.toLocaleString("default", { month: "long" });
      return `${newDate.getDate()} ${month} ${newDate.getFullYear()}`;
    }
  }

  handleClick = (item) => {
    this.props.history.push(this.detailPageUrl(item));
  };

  detailPageUrl(item) {
    return `/questions/${item._id}/${item.slug}`;
  }

  onTabClick(key) {
    if (localStorage.getItem("auth")) {
      if (key === "askQues") {
        return this.props.history.push("/questions/ask");
      }
      this.componentDidMount(key);
    } else {
      messageInfo({
        content: `You need to login to ${
          key === "askQues" ? "ask question" : "see your questions"
        }`,
        duration: 3,
      });
      setTimeout(() => {
        this.props.history.push("/login");
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
                  <Button
                    type="primary"
                    style={{ right: "32px" }}
                    onClick={this.onTabClick.bind(this, "askQues")}
                  >
                    New Questions
                  </Button>
                }
                style={{ width: "100%" }}
              >
                {this.tabPane("All", "all")}
                {this.tabPane("My Questions", "me")}
              </Tabs>
            </div>
            { this.state.loadMore ?  <div style={{ textAlign: "center", marginTop: "35px" }}>
              <Button loading = {!this.state.dataLoaded} onClick={() => {this.loadMore()}}>{`load${!this.state.dataLoaded ? 'ing': ''} more`} {this.state.test}</Button>
            </div> : ""}
          </div>
          <div className="col-lg-2"></div>
        </div>
      </Content>
    );
  }
}

export default withRouter(QuestionList);
