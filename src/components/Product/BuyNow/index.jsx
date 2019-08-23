import React from "react";
import "./index.css";
import { Form, Icon, Input, Button, Checkbox, Layout } from "antd";
const { Content } = Layout;

class BuyNow extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="col-lg-6">
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator("username", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your username!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Username"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your Password!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Password"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("remember", {
                    valuePropName: "checked",
                    initialValue: true
                  })(<Checkbox>Remember me</Checkbox>)}
                  <a className="login-form-forgot" href="/">
                    Forgot password
                  </a>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                  Or <a href="/">register now!</a>
                </Form.Item>
              </Form>
            </div>
            <div className="col-lg-6" />
          </div>
        </div>
        <div className="col-lg-2" />
      </Content>
    );
  }
}

BuyNow = Form.create({ name: "normal_login" })(BuyNow);
export default BuyNow;
