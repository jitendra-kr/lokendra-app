import React from "react";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Layout, Button } from "antd";
const { Content } = Layout;

class Register extends React.Component {
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
        <div className="row content-height">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <h2 className="text-center m-bottom-30">Create Account</h2>
            <Form
              onSubmit={this.handleSubmit}
              style={{ width: "50%", margin: "0 auto" }}
            >
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email"
                  />
                )}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator("mobileNumber", {
                  rules: [
                    {
                      type: "number",
                      message: "The input is not valid Mobile Number!"
                    },
                    {
                      required: true,
                      message: "Please input your Mobile Number!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon
                        type="phone"
                        theme="filled"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="Mobile Number"
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
                  Register
                </Button>
                <p>
                  Already have an account? <Link to={`/login`}>Sign in</Link>{" "}
                </p>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="col-lg-2" />
      </Content>
    );
  }
}

Register = Form.create({ name: "normal_login" })(Register);
export default Register;
