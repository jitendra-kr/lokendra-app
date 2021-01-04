import React from "react";
import { Form, Input, Button, Select, Layout } from "antd";
import dynamic from "next/dynamic";
import { debounce } from "lodash";
import { withRouter } from "next/router";
import Link from "next/link";
import {
  messageLoading,
  messageSuccess,
  messageError,
  messageInfo,
  isLoggedIn
} from "../../../utils";
import { httpGet, httpPost } from "../../../utils/http";
import AppHead from "../../Head/head";

const Editor = dynamic(() => import("../../Editor"));
const { TextArea } = Input;
const { Content } = Layout;

class NewQuestion extends React.Component {
  formRef = React.createRef();
  body;

  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.router.query._id,
      isButtonDisabled: false,
      data: {},
      similar: [],
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
        .catch((err) => {});
    }
  }

  onFinish = (values) => {
    if(isLoggedIn()) {
      const key = "onFinish";
      messageLoading({ key });
      this.setState({ isButtonDisabled: true });
      values.body = this.body;
      values._id = this.state._id;
      this.postNew(values, key);
    }

    messageInfo({content: 'You need to login to post question'});
  };

  postNew(values, key) {
    httpPost({
      url: `question/ask-new-question`,
      body: values,
    })
      .then((response) => {
        this.setState({ isButtonDisabled: false });
        if (response && response.statusCode === 200) {
          messageSuccess({ content: response.message, key, duration: 4 });
          this.formRef.current.resetFields();
          if (this.state._id) {
            this.props.router.push(
              `/questions/${this.state._id}/${this.state.data.slug}`
            );
          }
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

  handleEditorChange = (content, editor) => {};

  getEditorData(data) {
    this.body = data;
    this.state.data.body = data;
  }

  similarQuestion = debounce((e) => {
    if (e.target.value) {
      httpGet({ url: `question/similar-question?keywords=${e.target.value}` })
        .then((response) => {
          this.setState({
            similar: response.result,
          });
        })
        .catch((err) => {
        });
    }
  }, 1000);

  render() {
    if (this.state.data.title || !this.state._id) {
      return (
        <Content >
          <AppHead data={{ title: "Ask Question" }} />
              {!this.state._id ? (
                <React.Fragment>
                  <h2 className="text-center m-bottom-20">
                    Ask a public question
                  </h2>
                  <p className="text-center m-bottom-30">
                    Be specific and imagine you’re posting question on public
                    platform
                  </p>
                </React.Fragment>
              ) : (
                ""
              )}

              <Form
                name="basic"
                layout="vertical"
                ref={this.formRef}
                initialValues={{
                  title: this.state.data.title,
                  where_asked: this.state.data.where_asked,
                }}
                onFinish={this.onFinish}
                style={{ margin: "0 auto" }}
              >
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[{ required: true, message: "Please input title!" }]}
                >
                  <TextArea
                    onChange={this.similarQuestion}
                    placeholder="e.g. Convert Comma Separated String into an Array"
                    autoSize={{ minRows: 2, maxRows: 5 }}
                    maxLength = "200"
                  />
                </Form.Item>
                {this.state.similar.length ? <Form.Item>
                  <h5>Similar Questions</h5>
                  <ul>
                    {this.state.similar.map((item, i) => {
                      return (
                        <li>
                          <Link href={`/questions/${item._id}/${item.slug}`} key={i}>
                            <a>{item.title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Form.Item> : ''}
                <Form.Item
                  name="where_asked"
                  label="Asked By"
                  rules={[
                    { required: true, message: "Please input Asked By!" },
                  ]}
                >
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    tokenSeparators={[","]}
                    placeholder="e.g. Tata Consultancy Services "
                  ></Select>
                </Form.Item>
                <Form.Item name="body" label="Body">
                  {/* <CKEditor
                  editor={ClassicEditor}
                  data={this.state.data.body}
                  onChange={(event, editor) => {
                    this.body = editor.getData();
                  }}
                /> */}

                  <Editor
                    data={this.state.data.content}
                    sendData={this.getEditorData.bind(this)}
                  />
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
        </Content>
      );
    } else {
      return <div className="ant-layout-content"></div>;
    }
  }
}

export default withRouter(NewQuestion);
