import React from "react";
import { upperFirst, nth } from "lodash";
import { Layout, Button, Modal } from "antd";
import Link from "next/link";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import AppHead from "../../Head/head";
import DataNoFound from "../../DataNoFound";
import { isLoggedIn, getUser } from "../../../utils/index";
import { httpPost, httpDelete, httpGet } from "../../../utils/http";
import { messageError, messageSuccess } from "../../../utils/antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const Editor = dynamic(() => import("../../Editor"));
const { confirm } = Modal;
const { Content } = Layout;

const scrollToRefObject = (ref) =>
  window.scrollTo({
    top: ref ? ref.current.offsetTop : 0,
    behavior: "smooth",
  });

class Answer extends React.Component {
  user;
  answerId;
  myRef;

  constructor(props) {
    super(props);

    this.user = getUser();
    this.myRef = React.createRef();
    this.state = {
      _id: "",
      answer: "",
      loaded: false,
      data: props.answer,
    };
  }

  fetchLatestData() {
    httpGet({ url: `question/answer/${this.props._id}` })
      .then((response) => {
        this.setState({
          data: response.result,
        });
      })
      .catch((err) => {});
  }

  date(date) {
    if (date) {
      const newDate = new Date(date);
      const month = newDate.toLocaleString("default", { month: "long" });
      return `${month} ${newDate.getDate()}, ${newDate.getFullYear()}`;
    }
  }

  getEditorData(data, _id) {
    const answer = [];
    if (!this.answerId || _id) {
      this.answerId = _id;
    }

    this.state.data.answer &&
      this.state.data.answer.forEach((ansObj) => {
        if (ansObj._id === this.answerId) {
          ansObj.answer = data;
        }
        answer.push(ansObj);
      });
    this.setState({
      data: {
        ...this.state.data,
        answer: answer,
      },
    });

    this.setState({
      answer: data,
    });
  }

  saveAnswer() {
    if (!this.state.answer) {
      return messageError({ content: "Your answer is missing" });
    }
    httpPost({
      url: `question/save-answers/${this.state.data._id}?answerId=${
        this.answerId ? this.answerId : ""
      }`,
      body: { answer: this.state.answer },
    })
      .then((response) => {
        this.setState({
          answer: "",
        });
        this.fetchLatestData();
        scrollToRefObject();
        messageSuccess({ content: "Your answer is saved successfully" });
      })
      .catch((err) => {
        console.log(err);
        messageError({ content: "something went wrong" });
      });
  }

  editAnswer(item) {
    this.getEditorData(item.answer, item._id);
    scrollToRefObject(this.myRef);
  }

  deleteQuestion(questionId) {
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
            that.props.history.push("/questions");
            messageSuccess({ content: "Deleted successfully" });
          })
          .catch((err) => {
            messageError({ content: "something went wrong" });
          });
      },
    });
  }

  deleteAnswer(answerId, questionId) {
    const that = this;
    confirm({
      title: "Are you sure delete this answer?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        httpDelete({ url: `question/delete/${questionId}/${answerId}` })
          .then((response) => {
            this.fetchLatestData();
            messageSuccess({ content: "Deleted successfully" });
          })
          .catch((err) => {
            console.log(err);
            messageError({ content: "something went wrong" });
          });
      },
    });
  }

  wasAskedToMe(_id) {
    if (isLoggedIn()) {
      this.props.router.push(`/questions/update/${_id}`);
    } else {
      messageInfo({
        content: `You need to login to perform this action`,
        duration: 3,
      });
    }
  }

  render() {
    return (
      <Content>
        <AppHead data={this.state.data} />
        <div className="row">
          <div style={{ width: "100%" }}>
            <h2>{this.state.data.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: this.state.data.body }}
            ></div>

            <div>
              {this.user && this.user._id === this.state.data.author ? (
                <React.Fragment>
                  <DeleteOutlined
                    style={{
                      color: "red",
                      float: "right",
                      padding: "10px",
                    }}
                    onClick={() => {
                      this.deleteQuestion(this.state.data._id);
                    }}
                  />
                  <Link href={`/questions/edit/${this.state.data._id}`}>
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
              {<Button
                style={{
                  float: "right",
                }}
                type="primary"
                onClick={this.wasAskedToMe.bind(this, this.state.data._id)}
              >
                <a>Did this question asked to you ?</a>
              </Button>}
            </div>
          </div>
          <div style={{ marginRight: "20px" }}>
            <span>
              <span className="ask-view">Posted On:</span>
              <span>{this.date(this.state.data.created_at)}</span>
            </span>
          </div>
          <div>
            <span>
              <span className="ask-view"> Viewed: </span>
              <span>{this.state.data.visits} times </span>{" "}
            </span>
          </div>

          {this.state.data.answer?.length ? (
            this.state.data.answer.map((item, i) => {
              return (
                <div
                  key={i}
                  style={{
                    marginTop: "25px",
                    width: "100%",
                  }}
                >
                  <div className="listing border ">
                    {this.user && this.user._id === item.ans_by?._id ? (
                      <React.Fragment>
                        <DeleteOutlined
                          style={{
                            color: "red",
                            float: "right",
                            padding: "10px",
                          }}
                          onClick={() => {
                            this.deleteAnswer(item._id, this.state.data._id);
                          }}
                        />
                        <EditOutlined
                          style={{
                            float: "right",
                            padding: "10px",
                          }}
                          onClick={() => {
                            this.editAnswer(item);
                          }}
                        />
                      </React.Fragment>
                    ) : (
                      ""
                    )}

                    <div style={{ margin: "13px 0 0px 35px" }}>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      ></div>
                      <p
                        style={{
                          fontFamily: "monospace",
                          fontStyle: "italic",
                        }}
                      >
                        <span className="question-by">Answered By</span>{" "}
                        {upperFirst(item.ans_by?.firstName)}
                        <span
                          className="question-by"
                          style={{ marginLeft: "20px" }}
                        >
                          On
                        </span>{" "}
                        {this.date(item.added)}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ width: "100%", marginTop: "40px" }}>
              <DataNoFound data={{ text: "Not Answered Yet" }} />
            </div>
          )}
          <div ref={this.myRef} style={{ marginTop: "70px", width: "100%" }}>
            <h5>Your Answer</h5>
            <Editor
              data={this.state.answer}
              sendData={this.getEditorData.bind(this)}
            />{" "}
          </div>
          <div style={{ marginTop: "30px" }}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.saveAnswer.bind(this)}
              className="login-form-button"
              disabled={this.isButtonDisabled}
            >
              Submit
            </Button>
          </div>
        </div>
      </Content>
    );
  }
}

export default withRouter(Answer);
