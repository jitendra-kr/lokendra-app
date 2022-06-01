import React from "react";
import { Layout, Button, Tabs, Modal, Input, Select } from "antd";
import { upperFirst, debounce, reject, get } from "lodash";
import { withRouter } from "next/router";
import Link from "next/link";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { httpGet, httpDelete, httpPut, httpPost } from "../../../utils/http";
import {
  messageError,
  messageSuccess,
  messageInfo,
  messageLoading,
} from "../../../utils/antd";
import DataNoFound from "../../DataNoFound";
import { isLoggedIn, getUser } from "../../../utils/index";
import AppHead from "../../Head/head";
import styles from "../../../../styles/QuestionList.module.css";
const { Content } = Layout;
const { TabPane } = Tabs;
const { confirm } = Modal;
const { Search } = Input;
const { Option } = Select;

class QuestionList extends React.Component {
  isLoggedIn;
  user;
  skip;
  limit;
  search;
  postedBy;
  onSearchByChangeValue = "title";

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
    if (localStorage.getItem("auth")) {
      this.skip = 0;
      this.fetchQuestion({ reset: true });
    }
  }

  fetchQuestion(options) {
    const state = {
      dataLoaded: false,
    };

    this.setState(state);
    httpGet({
      url: this.generateUrl(),
    })
      .then((response) => {
        this.setState({
          data: get(options, "reset")
            ? response.result
            : [...this.state.data, ...response.result],
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
      .catch((err) => {
        console.log(err);
      });
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
      url += `search=${this.search}&`;
    }

    url += `onSearchBy=${this.onSearchByChangeValue}`;
    

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
        if (o._id === _id) {
          o.liked = liked ? 0 : 1;
          o.totalLikes = !liked ? o.totalLikes + 1 : o.totalLikes - 1;
        }
        return o;
      }),
    });
    httpPut({
      url: `question/like/${_id}/${liked}`,
    })
      .then((response) => {})
      .catch((err) => {});
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
            Showing {this.state.data.length} of {this.state.totalRecords}
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
                <div className="row listing border">
                  <div  className="col-lg-1">
                    <div style={{margin: "50px 0 7px 9px"}}>
                    <div className={styles['question-visits-ans']}>
                      <div className="text-align" >{item.visits}</div>
                      <div className="text-align">{item.visits > 1 ? 'Views' : 'View'}</div>
                       
                    </div>                    
                    <div className="m-top-10" >
                      <div className="text-align" >{item.answer}</div>
                      <div className="text-align ">{item.answer > 1 ? 'Answers' : 'Answer'}</div>
                    </div>
                    </div>
                    <hr className={styles['margin-left-10']} ></hr>
                  </div>
                  
                  <div className="col-lg-9">
                    <div
                      className="home-page-title"
                      style={{ marginLeft: "15px" }}
                    >
                      <Link href={{ pathname: this.detailPageUrl(item) }}>
                        {item.title}
                      </Link>
                    </div>
                    <div style={{ marginLeft: "25px" }}>
                      <p>
                        <span className="question-by">By - </span>
                        {upperFirst(
                          get(item.where_asked[0], 'name', item.where_asked[0])
                        )}
                        <Link
                          href={`/questions/asked-by/${item._id}/${item.slug}`}
                        >
                          <a className={styles.more}>
                            {item.where_asked.length > 1
                              ? ` and ${item.where_asked.length - 1} more`
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
                    <div style={{  marginBottom: "15px" }}>
                      <Button
                        type="link"
                        onClick={this.wasAskedToMe.bind(this, item)}
                      >
                        <a>Did this question asked to you ?</a>
                      </Button>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    {isLoggedIn() ? (
                      <React.Fragment>
                        <span className={styles["action-icon"]}>
                          <span
                            className={
                              item.totalLikes > 9
                                ? styles["m-left-25"]
                                : styles["m-left-32"]
                            }
                          >
                            {item.totalLikes}
                          </span>
                          <span>
                            <FontAwesomeIcon
                              icon={faThumbsUp}
                              className={item.liked ? styles.liked : ""}
                              style={{
                                marginTop: "15px",
                                marginLeft: "17px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                this.like(item._id, item.liked ? 1 : 0);
                              }}
                            />
                          </span>
                        </span>

                        {this.user?._id === item.author?._id ? (
                          <React.Fragment>
                            <Link href={`/questions/edit/${item._id}`}>
                              <EditOutlined className={styles["action-icon"]} />
                            </Link>
                            <DeleteOutlined
                              className={styles["action-icon"]}
                              style={{
                                color: "red",
                                marginTop: "22px",
                              }}
                              onClick={() => {
                                this.delete(item._id);
                              }}
                            />
                          </React.Fragment>
                        ) : (
                          ""
                        )}
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

    const user = getUser();
    if (localStorage.getItem("auth")) {
      if (key === "askQues") {
        if (!user.verified) {
          confirm({
            title: `You have not verified your email`,
            okText: "Yes",
            content: `Would you like to verify your email ${user.email}`,
            cancelText: "No",
            onOk() {
              const key = "verifyEmail";
              messageLoading({ key });
              httpPost({
                url: "/user/send-email-verification-email",
              })
                .then((response) => {
                  messageSuccess({
                    content: `${response.message} to your email ${user.email}`,
                    key,
                  });
                })
                .catch((err) => {
                  messageError({ duration: 2 });
                });
            },
          });
        } else {
          return this.props.router.push("/questions/ask");
        }
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

  onSearchByChange(value) {
    this.onSearchByChangeValue = value;
    if(this.search) {
      this.searchQuestion({target: {value: this.search}});
    }
  }

  selectAfter = (
    <Select defaultValue={this.onSearchByChangeValue} className="select-after" style={{width: "90px"}} onSelect = {this.onSearchByChange.bind(this)}>
      <Option value="title">Title</Option>
      <Option value="answer">Answer</Option>
      <Option value="name">Name</Option>
      <Option value="email">Email</Option>
      <Option value="company">Company</Option>
    </Select>
  );

  render() {
    return (
      <Content className="padding-right-30 content-padding-left">
        <AppHead data={{ title: "Questions - Jimmypoint" }} />
        
          <div className="row" >
            <Search
              addonBefore={this.selectAfter} 
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
              style={{ width: "98%" }}
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
      </Content>
    );
  }
}

export default withRouter(QuestionList);
