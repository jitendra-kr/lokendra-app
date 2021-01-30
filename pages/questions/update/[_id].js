import React from "react";
import { Form, Button, Select, Layout } from "antd";
import { withRouter } from "next/router";
import {
  messageLoading,
  messageSuccess,
  messageError,
} from "../../../src/utils/antd";
import { httpGet, httpPost } from "../../../src/utils/http";

const { Content } = Layout;

class UpdateQuestion extends React.Component {
  formRef = React.createRef();
  body;
  askedBy = [];
  askedByData;

  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.router.query._id,
      isButtonDisabled: false,
      data: {}
    };
  }

  componentDidMount() {
    if (this.state._id) {
      httpGet({ url: `question/answer/${this.state._id}` })
        .then((response) => {
          this.setState({
            data: response.result,
          });
        })
        .catch((err) => { });
    }

    this.askedByData = [
      'Tata Consultancy Services',
      'HCL Technologies',
      'Paytm',
      'Send In blue',
      'Appzlogic',
      'Square Yards',
      'Iris software',
      'To the new',
      'Successive sofware',
      'Telus international',
      'Kloudrac Software Pvt',
      'In2it technologies',
      'Gopaisa',
      'Denave india pvt ltd',
      'Path infotech',
      'Proctur',
      'Enuke software',
      'Hitachi MGRM Net',
      'Appinventive',
      'Synapse india',
      'Magic software',
      'Iwebservices',
      'Fluper ltd',
      'ThinkApps Solutions',
      'Indosoft Technologies',
      'YapApp India pvt. ltd.',
      'Prolitus Technologies',
      'Smart data enterprises',
      'British council',
      'Sapient Corporation',
      'Agami Technologies',
      'CodeBlock Technologies',
      'Personal',
      'Ernst & Young'
    ]


      for (let i = 0; i < this.askedByData.length; i++) {
        this.askedBy.push(<Option key={this.askedByData[i]}>{this.askedByData[i]}</Option>);
      }

  }

  onFinish = (values) => {
    const key = "onFinish";
    messageLoading({ key });
    this.setState({ isButtonDisabled: true });
    values._id = this.state._id;
    this.postNew(values, key);
  };

  postNew(values, key) {
    httpPost({
      url: `question/was-asked-to-me`,
      body: values,
    })
      .then((response) => {
        this.setState({ isButtonDisabled: false });
        if (response && response.statusCode === 200) {
          messageSuccess({ content: response.message, key, duration: 4 });
          this.props.router.push(
            `/questions/${this.state._id}/${this.state.data.slug}`
          );
        } else if (response && response.statusCode === 400) {
          messageError({ content: response.message, key, duration: 2 });
        }
      })
      .catch((err = {}) => {
        this.setState({ isButtonDisabled: false });
        if (err.status === 400) {
          messageError({ content: err.data.message, key, duration: 2 });
        } else {
          messageError({ content: "something went wrong", key, duration: 2 });
        }
      });
  }


  render() {
    if (this.state.data.title) {
      return (
        <Content style={{ padding: "50px 50px" }}>
          <div className="row">
            <div className="col-lg-9">
              <h2 className="text-center m-bottom-20">
                {this.state.data.title}
              </h2>

              <Form
                name="basic"
                layout="vertical"
                ref={this.formRef}
                onFinish={this.onFinish}
                style={{ margin: "0 auto" }}
              >


                <Form.Item
                  name="where_asked"
                  label="Asked By"
                  rules={[
                    { required: true, message: "Please input Asked By!" },
                  ]}
                >
                  {/* <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    tokenSeparators={[","]}
                    placeholder="e.g. Tata Consultancy Services "
                    autoFocus={true}
                    maxTagTextLength={20}
                  ></Select> */}
                                    <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    tokenSeparators={[","]}
                    autoFocus={true}
                    maxTagTextLength={20}
                    placeholder="e.g. Tata Consultancy Services or Personal"
                  >
                    {this.askedBy}
                  </Select>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    disabled={this.isButtonDisabled}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="col-lg-3" />
          </div>
        </Content>
      );
    } else {
      return <div className="ant-layout-content"></div>;
    }
  }
}

export default withRouter(UpdateQuestion);
