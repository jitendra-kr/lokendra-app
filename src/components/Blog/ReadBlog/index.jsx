import React from "react";
import { httpGet } from "../../../utils/http";
import { Layout } from "antd";

const { Content } = Layout;

export default class ReadBlog extends React.Component {
  paramsId;
  constructor(props) {
    super(props);
    this.paramsId = this.props.match.params.slug;
    this.state = {
      data: {
        size: {}
      }
    };
  }

  componentDidMount() {
    httpGet({url: `blog-management/blog-detail/${this.paramsId}`})
      .then(response => {
        this.setState({
          data: response.data.result
        });
      })
      .catch(err => {
        console.log("Error Reading data " + err);
      });
  }

  date(date) {
    if (date) {
      const newDate = new Date(date);
      const month = newDate.toLocaleString('default', { month: 'long' });
      return `${month}, ${newDate.getDate()} ${newDate.getFullYear()}`
    }
  }

  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <h1>{this.state.data.title}</h1>
            <p>
              <span style={{ color: "chocolate" }}>{this.date(this.state.data.created_at)}</span>
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: this.state.data.content }}
            ></div>
          </div>
          <div className="col-lg-2" />
        </div>
      </Content>
    );
  }
}
