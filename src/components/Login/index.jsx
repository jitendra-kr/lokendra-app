import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Layout, Button } from "antd";
const { Content } = Layout;

class Login extends React.Component {
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
          <h2 className="text-center m-bottom-30">Login</h2>
            <Form onSubmit={this.handleSubmit} style={{width: "50%", margin: "0 auto"}}>
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "string",
                      message: "The input is not valid E-mail or Phone!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email/Phone"
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
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Login
                </Button>
                <p>New to Jimmypoint? <Link to={`/register`}>Register</Link> </p>
                <Link to={`/reset-password`}>Forgot Password?</Link>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="col-lg-2" />
      </Content>
    );
  }
}

Login = Form.create({ name: "normal_login" })(Login);
export default Login;
