import React from "react";
import { Form, Input, Button, Select } from "antd";
import { withRouter } from 'next/router'
import Editor from "../../Editor";

import Config from "../../../config/env";
import {
  messageLoading,
  messageSuccess,
  messageError,
} from "../../../utils/antd";
import { httpGet, httpPost } from "../../../utils/http";
const { TextArea } = Input;

class NewQuestion extends React.Component {
  formRef = React.createRef();
  body;

  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.router.query._id,
      isButtonDisabled: false,
      config: Config.getData().default,
      data: {}
    };
  }

  componentDidMount() {
    if (this.state._id) {
      httpGet({ url: `question/answer/${this.state._id}` })
        .then((response) => {
          this.setState({
            data: response.result
          });
        })
        .catch((err) => {
          console.log("Error Reading data " + err);
        });
    }
  }

  onFinish = (values) => {
    const key = "onFinish";
    messageLoading({ key });
    this.setState({ isButtonDisabled: true });
    values.body = this.body;
    values._id = this.state._id
    this.postNew(values, key);

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
          if(this.state._id) {
            this.props.history.push(`/questions/${this.state._id}/${this.state.data.slug}`);
          }
        } else if (response && response.statusCode === 400) {
          messageError({ content: response.message, key, duration: 2 });
        }
      })
      .catch((err = {}) => {
        console.log(err);
        this.setState({ isButtonDisabled: false });
        if (err.status === 400) {
          messageError({ content: err.data.message, key, duration: 2 });
        } else {
          messageError({ content: "something went wrong", key, duration: 2 });
        }
      });
  }

  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  getEditorData(data) {
    this.body = data;
    this.state.data.body = data;

  }

  render() {

    if (this.state.data.title || !this.state._id) {
      return (
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            {!this.state._id ? (
              <>
                <h2 className="text-center m-bottom-20">Ask a public question</h2>
                <p className="text-center m-bottom-30">
                  Be specific and imagine you’re posting question on public platform
                </p>
              </>
            ) : (
              ""
            )}

            <Form
              name="basic"
              layout="vertical"
              ref={this.formRef}
              initialValues={{ title: this.state.data.title, where_asked: this.state.data.where_asked }}
              onFinish={this.onFinish}
              style={{ width: "70%", margin: "0 auto" }}
            >
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Please input title!" }]}
              >
                <TextArea
                  placeholder="e.g. Convert Comma Separated String into an Array"
                  autoSize={{ minRows: 2, maxRows: 5 }}
                />
              </Form.Item>
              <Form.Item
                name="where_asked"
                label="Asked By"
                rules={[{ required: true, message: "Please input Asked By!" }]}
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
          </div>
          <div className="col-lg-2" />
        </div>
      );
    } else {
      return <div />
    }

  }
}

export default withRouter(NewQuestion);
