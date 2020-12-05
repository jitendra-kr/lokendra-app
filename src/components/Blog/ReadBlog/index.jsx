import React from "react";
import Link from "next/link";
import { withRouter } from 'next/router'
import { httpGet, httpPut } from "../../../utils/http";
import { Layout, Modal } from "antd";
import { isEmpty, last } from 'lodash';
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { messageError, messageSuccess } from "../../../utils/antd";
import { getUser } from "../../../utils/index";
import AppHead from "../../Head/head";

const { Content } = Layout;
const { confirm } = Modal;

class ReadBlog extends React.Component {
  slug;
  user;
  constructor(props) {
    super(props);
    this.user = getUser();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {

    this.slug = last(window.location.pathname.split('/'));


    httpGet({ url: `/blog-management/blog-detail/${this.slug}` })
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
            that.props.router.push("/");
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
    if( isEmpty(this.state.data)) {
      return (
        <div className = "ant-layout-content" ></div>
      );
    }
    return (
      <Content style={{ padding: "50px 50px" }}>

        <AppHead data = {this.state.data}/>
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
                <span >
                  <span className="ask-view"> Viewed: </span>
                  <span className="post-view-data">
                    {this.state.data.visits} times
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
                <Link href={`/blog/edit/${this.slug}`}>
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

export default withRouter(ReadBlog)
