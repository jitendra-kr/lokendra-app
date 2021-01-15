import React from "react";
import { Layout, Button, Tabs, Modal, Input } from "antd";
import { upperFirst, debounce, reject } from "lodash";
import { withRouter } from "next/router";
import Link from "next/link";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  EditOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { httpGet, httpDelete, httpPut } from "../../../utils/http";
import { messageError, messageSuccess, messageInfo } from "../../../utils/antd";
import DataNoFound from "../../DataNoFound";
import { isLoggedIn, getUser, getLimitedText } from "../../../utils/index";
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
    this.skip = this.props.limit;
    this.limit = 10;
    this.user = getUser();
    this.state = {
      data: this.props.questionData,
      dataLoaded: true,
      loadMore: this.props.loadMore,
      totalRecords: this.props.totalRecords,
    };
  }

  componentDidMount() {
    if(localStorage.getItem('auth')) {
      this.fetchQuestion({reset: true});
    }
  }

  fetchQuestion(options) {
    const state = {
      dataLoaded: false
    }

    this.setState(state);
    httpGet({
      url: this.generateUrl(),
    })
      .then((response) => {
        this.setState({
          data: options.reset ? response.result : [...this.state.data, ...response.result],
          dataLoaded: true,
          loadMore:
            response.result.length && this.limit === response.result.length
              ? 1
              : 0,
          totalRecords: response.totalRecords
            ? response.totalRecords
            : this.state.totalRecords,
        });
        this.skip += this.limit;
      })
      .catch((err) => {});
  }

  generateUrl() {
    let url = "question/question-list?";
    if (this.postedBy) {
      url += `by=${this.postedBy}&`;
    }

    if (this.skip) {
      url += `skip=${this.skip}&`;
    }

    if (this.limit) {
      url += `limit=${this.limit}&`;
    }

    if (this.search) {
      url += `search=${this.search}`;
    }

    return url;
  }

  searchQuestion = debounce((e) => {
    this.setState({
      data: [],
      totalRecords: 0,
    });
    this.skip = 0;
    this.search = e.target.value;
    this.fetchQuestion();
  }, 1000);

  wasAskedToMe(item) {
    if (isLoggedIn()) {
      this.props.router.push(`/questions/update/${item._id}`);
    } else {
      messageInfo({
        content: `You need to login to perform this action`,
        duration: 3,
      });
    }
  }

  loadMore() {
    this.fetchQuestion();
  }

  like(_id, liked) {
    this.setState({
      data: this.state.data.map((o) => {
        if(o._id === _id) {
          o.liked = liked ? 0 : 1;
        }
        return o;
      })
    })
    httpPut({
      url:  `question/like/${_id}/${liked}`
    })
    .then((response) => {

      console.log(response)

    })
    .catch((err) => {
      console.log(err)
    });
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
            that.setState({
              data: reject(that.state.data, { _id: questionId }),
              totalRecords: that.state.totalRecords - 1,
            });
            messageSuccess({ content: "Deleted successfully" });
          })
          .catch((err) => {
            messageError({ content: "something went wrong" });
          });
      },
    });
  }

  totalRecords() {
    return (
      <React.Fragment>
        {this.state.totalRecords ? (
          <p style={{ marginLeft: "20px", fontWeight: "400" }}>
            Showig {this.state.data.length} of {this.state.totalRecords}
          </p>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }

  tabPane(tab, key) {
    return (
      <TabPane tab={tab} key={key} style={{ left: "19px" }}>
        {this.totalRecords()}
        {this.state.data.length ? (
          this.state.data.map((item, i) => {
            return (
              <div key={i} style={{ margin: "20px 16px 20px 16px" }}>
                <div  className="row listing border">
                  <div className="col-lg-10">
                    <div
                      className="home-page-title"
                      style={{ marginLeft: "25px" }}
                    >
                      <Link href={{ pathname: this.detailPageUrl(item) }}>
                        {item.title}
                      </Link>
                    </div>
                    <div style={{ marginLeft: "35px" }}>
                      <p>
                        <span className="question-by">By - </span>
                        {upperFirst(
                          getLimitedText(item.where_asked.join(","), 20)
                        )}
                        <Link
                          href={`/questions/asked-by/${item._id}/${item.slug}`}
                        >
                          <a className={styles.more}>
                            {item.where_asked.join(",").length > 20
                              ? `and ${item.where_asked.length - 1} more`
                              : ""}
                          </a>
                        </Link>
                      </p>
                      <p>
                        <span className="question-by"> To - </span>
                        {upperFirst(item?.author?.firstName)}

                        <Link
                          href={`/questions/asked-to/${item._id}/${item.slug}`}
                        >
                          <a className={styles.more}>
                            {item.was_asked_to_me && item.was_asked_to_me.length
                              ? ` and ${item.was_asked_to_me.length} more`
                              : ""}
                          </a>
                        </Link>
                      </p>
                      <p>
                        <span className="question-by"> On - </span>
                        {this.date(item.created_at)}
                      </p>
                    </div>
                    <div style={{ marginLeft: "35px", marginBottom: "15px" }}>
                      <Button
                        type="link"
                        onClick={this.wasAskedToMe.bind(this, item)}
                      >
                        <a>Did this question asked to you ?</a>
                      </Button>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    {isLoggedIn() && this.user?._id === item.author?._id ? (
                      <React.Fragment>
                        <LikeOutlined 
                          style={{
                            float: "right",
                            padding: "10px",
                          }}
                          className={item.liked ? styles.liked : ''}

                          onClick={() => {
                            this.like(item._id, item.liked ? 1 : 0);
                          }}/>
                          <i class="fas fa-thumbs-up"></i>
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
                        <Link href={`/questions/edit/${item._id}`}>
                          <EditOutlined
                            style={{
                              float: "right",
                              padding: "10px",
                            }}
                          />
                        </Link>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
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
    const limit = 100;
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
    if (localStorage.getItem("auth")) {
      if (key === "askQues") {
        return this.props.router.push("/questions/ask");
      }
      this.setState({
        data: [],
        totalRecords: 0,
      });
      this.fetchQuestion();
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
      <Content>
        <AppHead data={{ title: "Questions" }} />
        <div className="col-lg-12 col-sm-12 col-md-12">
          <div className="row">
            <Search
              placeholder="search"
              onChange={this.searchQuestion}
              allowClear={true}
              className={styles.search}
              size="large"
              loading={!this.state.dataLoaded && this.search}
              enterButton
            />
            <Tabs
              defaultActiveKey="all"
              onTabClick={this.onTabClick.bind(this)}
              style={{ width: "100%" }}
            >
              {this.tabPane("All", "all")}
              {this.tabPane("My Questions", "me")}
              {this.tabPane("Post New Question", "askQues")}
            </Tabs>
          </div>
          {this.state.loadMore && this.state.data.length ? (
            <div style={{ textAlign: "center", marginTop: "35px" }}>
              <Button
                type="primary"
                loading={!this.state.dataLoaded}
                onClick={() => {
                  this.loadMore();
                }}
              >
                load more
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      </Content>
    );
  }
}

export default withRouter(QuestionList);
