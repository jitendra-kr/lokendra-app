import React from "react";
import { Layout, Button, Tabs, Modal, Input } from "antd";
import { upperFirst, debounce } from "lodash";
import { withRouter } from 'next/router'
import Link from "next/link";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { httpGet, httpDelete } from "../../../utils/http";
import { messageError, messageSuccess, messageInfo } from "../../../utils/antd";
import DataNoFound from "../../DataNoFound";
import { isLoggedIn, getUser } from "../../../utils/index";
import AppHead from "../../Head/head";
import styles from "../../../../styles/QuestionList.module.css";
const { Content } = Layout;
const { TabPane } = Tabs;
const { confirm } = Modal;
const { Search } = Input;

class QuestionList extends React.Component {
  isLoggedIn;
  user;
  skip;
  limit;
  search;
  postedBy;

  constructor(props) {
    super(props);

    this.isLoggedIn = isLoggedIn();
    this.skip = 0;
    this.limit = 50;
    this.user = getUser();
    this.state = {
      data: [],
      dataLoaded: false,
      loadMore: false,
      totalRecords: 0
    };
  }

  componentDidMount() {
    this.fetchQuestion();
  }

  fetchQuestion () {
    this.setState({
      dataLoaded: false,
    });
    httpGet({
      url: this.generateUrl(),
    }).then((response) => {
        this.setState({
          data: [...this.state.data, ...response.result],
          dataLoaded: true,
          loadMore: response.result.length && this.limit === response.result.length   ? 1 : 0,
          totalRecords: response.totalRecords ? response.totalRecords : this.state.totalRecords
        });
        this.skip += 50;
      })
      .catch((err) => {
      });
  }

  generateUrl() {
    let url = "question/question-list?";
    if(this.postedBy) {
      url += `by=${this.postedBy}&`;
    }

    if(this.skip) {
      url += `skip=${this.skip}&`;
    }

    if(this.limit) {
      url += `limit=${this.limit}&`;
    }

    if(this.search) {
      url += `search=${this.search}`;
    }

    return url;
  }

  searchQuestion = debounce ((e) => {
    this.setState({
      data: [],
      totalRecords: 0
    })
    this.skip = 0;
    this.search = e.target.value;
    this.fetchQuestion();
  }, 100)


  fetchQuestionBySearch() {

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
            messageError({ content: "something went wrong" });
          });
      },
    });
  }

  totalRecords () {
    return  (
      <React.Fragment>
      {this.state.totalRecords ?
      <p style= {{marginLeft: '20px', fontWeight: '400'}} >Showig {this.state.data.length} of {this.state.totalRecords}</p> : ''}
      </React.Fragment>
      )
  }
  tabPane(tab, key) {
    return (
      <TabPane tab={tab} key={key} style={{ left: "19px" }}>
        <Search placeholder="search" onChange = {this.searchQuestion}  allowClear={true} className={styles.search}  size="large" loading = {!this.state.dataLoaded}  enterButton />
        {this.totalRecords()}
        {this.state.data.length ? (
          this.state.data.map((item, i) => {
            return (
              <div className="col-lg-12" key={i} style={{ marginTop: "20px",marginBottom: '20px' }}>
                <div className="listing border">
                  <div
                    className="home-page-title"
                    style={{ marginLeft: "25px" }}
                  >
                    <Link href={{ pathname: this.detailPageUrl(item) }}>
                      {this.calculateTitle(item.title)}
                    </Link>
                    {this.isLoggedIn && this.user?._id === item.author?._id ? (
                      <React.Fragment>
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
                      </React.Fragment>
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
        {this.totalRecords()}
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
    this.props.router.push(this.detailPageUrl(item));
  };

  detailPageUrl(item) {
    return `/questions/${item._id}/${item.slug}`;
  }

  onTabClick(key) {
    this.postedBy = key;
    this.skip = 0;
    this.setState({
      data: [],
      totalRecords: 0
    });

    if (localStorage.getItem("auth")) {
      if (key === "askQues") {
        return this.props.router.push("/questions/ask");
      }
      this.componentDidMount();
    } else {
      messageInfo({
        content: `You need to login to ${
          key === "askQues" ? "ask question" : "see your questions"
        }`,
        duration: 3,
      });
      setTimeout(() => {
        this.props.router.push("/login");
      }, 2000);
    }
  }

  render() {
    return (
      <Content style={{ padding: "50px 15px 59px 56px" }}>
        <AppHead data={{title: "Questions - Jimmy Point"}}/>
        <div className="row" style={{ marginTop: "40px" }}>

          <div className="col-lg-9 col-sm-8 col-md-8">
            <div className="row">
              <Tabs
                defaultActiveKey="all"
                onTabClick={this.onTabClick.bind(this)}
                style={{ width: "100%" }}
              >

                {this.tabPane("All", "all")}
                {this.tabPane("My Questions", "me")}
                {this.tabPane("New Questions", "askQues")}
              </Tabs>
            </div>
            { this.state.loadMore && this.state.data.length ?  <div style={{ textAlign: "center", marginTop: "35px" }}>
              <Button type="primary" loading = {!this.state.dataLoaded} onClick={() => {this.loadMore()}}>load more</Button>
            </div> : ""}
          </div>
          <div className="col-lg-3 col-sm-4 col-md-4"></div>
        </div>
      </Content>
    );
  }
}

export default withRouter(QuestionList);
