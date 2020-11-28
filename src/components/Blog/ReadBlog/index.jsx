import React from "react";
import { Link } from "react-router-dom";
import { httpGet, httpPut } from "../../../utils/http";
import { Layout, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { messageError, messageSuccess } from "../../../utils/antd";
import { getUser } from "../../../utils/index";

const { Content } = Layout;
const { confirm } = Modal;

export default class ReadBlog extends React.Component {
  paramsId;
  user;
  constructor(props) {
    super(props);
    this.paramsId = this.props.match.params.slug;
    this.user = getUser();
    console.log(this.user)
    this.state = {
      data: {
        size: {},
      },
    };
  }

  componentDidMount() {
    httpGet({ url: `blog-management/blog-detail/${this.paramsId}` })
      .then((response) => {
        this.setState({
          data: response.result,
        });
        console.log(this.state.data.author._id , this.user, this.user?._id === this.state.data.author._id)
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }

  date(date) {
    if (date) {
      const newDate = new Date(date);
      const month = newDate.toLocaleString("default", { month: "long" });
      return `${newDate.getDate()} ${month} ${newDate.getFullYear()}`;
    }
  }

  deleteBlog(questionId) {
    const that = this;
    confirm({
      title: "Are you sure delete this answer?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        httpPut({ url: `blog-management/delete-blog/${questionId}` })
          .then((response) => {
            that.props.history.push("/");
            messageSuccess({ content: "Deleted successfully" });
          })
          .catch((err) => {
            console.log(err);
            messageError({ content: "something went wrong" });
          });
      },
    });
  }

  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div style={{ width: "100%" }}>
              <h1>{this.state.data.title}</h1>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <span>
                  <span className="ask-view">Posted On:</span>
                  <span className="post-view-data">
                    {this.date(this.state.data.created_at)}
                  </span>
                </span>
              </div>
              <div className="col-lg-5">
                <span>
                  <span className="ask-view"> Viewed: </span>
                  <span className="post-view-data">
                    {" "}
                    {this.state.data.visits} times{" "}
                  </span>
                </span>
              </div>

              <div className={` ${this.user?.role === 'admin' && this.user?._id === this.state.data.author?._id ? 'visible' : 'invisible '} col-lg-4`}>
                <DeleteOutlined
                  style={{
                    color: "red",
                    float: "right",
                    padding: "10px",
                  }}
                  onClick={() => {
                    this.deleteBlog(this.state.data._id);
                  }}
                />
                <Link to={`/blogs/edit/${this.paramsId}`}>
                  <EditOutlined
                    style={{
                      float: "right",
                      padding: "10px",
                    }}
                  />
                </Link>
              </div>
            </div>
            <div
              style={{ marginTop: "40px" }}
              dangerouslySetInnerHTML={{ __html: this.state.data.content }}
            ></div>
          </div>
          <div className="col-lg-2" />
        </div>
      </Content>
    );
  }
}
