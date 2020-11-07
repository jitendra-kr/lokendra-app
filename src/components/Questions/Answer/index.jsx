import React from "react";
import { upperFirst } from "lodash";
import { withRouter } from "react-router-dom";
import "./index.css";
import { httpGet, httpPost } from "../../../utils/http";
import Editor from "../../Editor";
import { Layout, Button, Empty } from "antd";
import { EditOutlined  } from '@ant-design/icons';
import { messageError, messageSuccess } from "../../../utils/antd";

const { Content } = Layout;
const scrollToRefObject = (ref) => window.scrollTo(
  {
  top: ref ? ref.current.offsetTop:  0,
  behavior: 'smooth'}
  )
class Answer extends React.Component {
  answerId;
  myRef;

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      _id: this.props.match.params._id,
      answer: "",
      data: {
        answer: [],
      },
    };
  }
  componentDidMount() {
    httpGet({ url: `question/answer/${this.state._id}` })
      .then((response) => {
        this.setState({
          data: response.result,
        });
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
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
    if (!this.answerId) {
      this.answerId = _id;
    }

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
      url: `question/save-answers/${this.state._id}`,
      body: { answer: this.state.answer },
    })
      .then((response) => {
        this.setState({
          answer: ''
        })
        this.componentDidMount();
        scrollToRefObject()
        messageSuccess({ content: "Your answer is saved successfully" });
      })
      .catch((err) => {
        console.log(err)
        messageError({ content: "something went wrong" });
      });
  }

  editAnswer(item) {
    this.getEditorData(item.answer, item._id);
    scrollToRefObject(this.myRef)
  }

  render() {
    return (
      <Content style={{ padding: "50px 50px" }} >
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="row">
              <div style={{ width: "100%" }}>
                <h2>{this.state.data.title}</h2>

              </div>
              <div style={{ marginRight: "20px" }}>
                <span>
                  <span className="ask-view">Asked:</span>
                  <span>
                    {this.date(this.state.data.created_at)}
                  </span>
                </span>
              </div>
              <div>
                <span>
                  <span className="ask-view"> Viewed: </span>
                  <span>{this.state.data.visits} times </span>{" "}
                </span>
              </div>

              {this.state.data.answer.length ? (
                this.state.data.answer.map((item, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        marginTop: "25px",
                        width: "100%"
                      }}
                    >
                      <div className="listing border ">
                        <EditOutlined
                          style={{
                            color: "red",
                            float: "right",
                            padding: "10px",
                          }}
                          onClick={() => {
                            this.editAnswer(item);
                          }}
                        />

                        <div style={{ margin: "13px 0 0px 35px" }}>
                          <p
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                          ></p>
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
                <Empty
                  image="../../images/data-not-found.png"
                  imageStyle={{
                    height: 70,
                  }}
                  style={{ width: "100%", marginTop: "30px" }}
                  description={<span>Not Answered Yet</span>}
                ></Empty>
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
          </div>
          <div className="col-lg-2"></div>
        </div>
      </Content>
    );
  }
}

export default withRouter(Answer);
