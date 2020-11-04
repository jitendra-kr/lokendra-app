import React from "react";
import { Form, Input, Button, Select } from "antd";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Config from '../../../config/env'
import {
  messageLoading,
  messageSuccess,
  messageError
} from "../../../utils/antd"
import { httpPost } from "../../../utils/http";
const { TextArea } = Input;


class NewQuestion extends React.Component {

  formRef = React.createRef();
  body;
  constructor(props) {
    super(props);
    this.state = {
      isButtonDisabled: false,
      config: Config.getData().default
    }
  }


  onFinish = values => {
    const key = 'onFinish';
    messageLoading({ key });
    this.setState({ isButtonDisabled: true });
    values.body = this.body
    httpPost({
      url: `${this.state.config.baseUrl}question/ask-new-question`,
      body: values
    }).then(response => {
      this.setState({ isButtonDisabled: false });
      if (response && response.statusCode === 200) {
        messageSuccess({ content: response.message, key, duration: 4  })
        this.formRef.current.resetFields();
      } else if (response && response.statusCode === 400) {
        messageError({ content: response.message, key, duration: 2 });
      }
    }).catch((err = {}) => {
      console.log(err)
      this.setState({ isButtonDisabled: false });
      if (err.status === 400) {
        messageError({ content: err.data.message, key, duration: 2 });
      } else {
        messageError({ content: "something went wrong", key, duration: 2 });
      }

    })
  };

  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }

  render() {
    return (

      <div className="row" >
        <div className="col-lg-2" />
        <div className="col-lg-8">
          <h2 className="text-center m-bottom-20">Ask a public question</h2>
          <p className="text-center m-bottom-30">Be specific and imagine you’re asking a question to another person</p>
          <Form
            name="basic"
            layout="vertical"
            ref={this.formRef}
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            style={{ width: "70%", margin: "0 auto" }}
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[
                { required: true, message: 'Please input title!' }
              ]}
            >
              <TextArea
                value={"value"}

                placeholder="e.g. Convert Comma Separated String into an Array"
                autoSize={{ minRows: 2, maxRows: 5 }}
              />
            </Form.Item>
            <Form.Item
              name="where_asked"
              label="Asked By"
              rules={[
                { required: true, message: 'Please input Asked By!' }
              ]}
            >
              <Select
              mode="tags"
              style={{ width: '100%' }}
              tokenSeparators={[',']}
              placeholder="e.g. Tata Consultancy Services ">
              </Select>
            </Form.Item>
            <Form.Item
              name="body"
              label="Body"
              rules={[
                { required: true, message: 'Please input body!' }
              ]}
            >
                <CKEditor
                    editor={ ClassicEditor }
                    data=""

                    onChange={ ( event, editor ) => {
                        this.body = editor.getData();
                    } }
                />

            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit" className="login-form-button" disabled={this.isButtonDisabled} >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="col-lg-2" />
      </div>

    );
  }
}

export default NewQuestion;
