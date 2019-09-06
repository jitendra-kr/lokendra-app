import React from "react";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Layout, Button } from "antd";
const { Content } = Layout;

class ResetPassword extends React.Component {
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
      <Content style={{ padding: "50px 50px"}}>
        <div className="row content-height"  >
          <div className="col-lg-2" />
          <div className="col-lg-8">
          <h2 className="text-center m-bottom-30">Reset Password</h2>
            <Form onSubmit={this.handleSubmit} style={{width: "50%", margin: "0 auto"}}>
              <Form.Item>
                {getFieldDecorator("otp", {
                  rules: [
                    {
                      type: "string",
                      message: "The input is not valid OTP!"
                    },
                    {
                      required: true,
                      message: "Please input your OTP!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="string"
                    placeholder="OTP"
                  />
                )}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator("newPassword", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your new password!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="new Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("confirmPassword", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your new password again!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Confirm Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Change Password
                </Button>
                <p>Login? <Link to={`/login`}>Login</Link> </p>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="col-lg-2" />
      </Content>
    );
  }
}

ResetPassword = Form.create({ name: "normal_login" })(ResetPassword);
export default ResetPassword;
