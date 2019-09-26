import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

export default class ReadBlog extends React.Component {
  paramsId;
  constructor(props) {
    super(props);
    this.paramsId = this.props.match.params.slug;
    console.log(this.paramsId);
    this.state = {
      data: {
        size: {}
      }
    };
  }

  componentWillMount() {
    fetch(
      `https://jimmypoint-server.herokuapp.com/api/blog-management/blog-detail/${this.paramsId}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data.result
        });
        console.log(this.state.data.title);
      })
      .catch(err => {
        console.log("Error Reading data " + err);
      });
  }

  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <h1>{this.state.data.title}</h1>
            <p>
              <span style={{ color: "lightsalmon" }}>20 Sep 2019</span>
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
