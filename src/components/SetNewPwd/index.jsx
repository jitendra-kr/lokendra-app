import React from "react";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Layout, Button } from "antd";
import { post } from "axios";
import Config from '../../config/env'
const { Content } = Layout;

class ResetPassword extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      config: Config.getData().default,
      otpSent: false,
      email: ''
    };

  }

  changePwd = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.email = this.state.email;
        console.log("Received values of form: ", values);
        post(`${this.state.config.baseUrl}set-new-password`, values)
          .then(response => {
            console.log(response.data.result)
            this.props.history.push('/login');
          })
          .catch(err => {
            console.log("Error Reading data " + err);
          });
      }
    });
  };

  sendOtp = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      post(`${this.state.config.baseUrl}change-pwd-otp`, values)
        .then(response => {
          this.setState({otpSent: true});
          this.setState({email: values.email});

        })
        .catch(err => {
          console.log("Error Reading data " + err);
        });
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row content-height"  >
          <div className="col-lg-2" />
          <div className="col-lg-8">

            <h2 className="text-center m-bottom-30">Set New Password</h2>
            {
              !this.state.otpSent ?
                <div>
                  <p style = {{ textAlign: 'center', fontSize: 'large'}} >Enter the email address associated with your account</p>
                  <Form onSubmit={this.sendOtp} style={{ width: "70%", margin: "0 auto" }}>
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
                          placeholder="Email"
                        />
                      )}
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Submit
                </Button>
                      <p>Login? <Link to={`/login`}>Login</Link> </p>
                    </Form.Item>
                  </Form>

                </div>
                :
                <div>
                  <p style = {{ textAlign: 'center', fontSize: 'large'}} >
                  For your security, we need to authenticate your request. We've sent an OTP to the email {this.state.email}. Please enter it below to complete verification
                    </p>

                <Form onSubmit={this.changePwd} style={{ width: "70%", margin: "0 auto" }}>
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
                      Submit
                </Button>
                    <p>Login? <Link to={`/login`}>Login</Link> </p>
                  </Form.Item>
                </Form>
                </div>
            }

          </div>
        </div>
        <div className="col-lg-2" />
      </Content>
    );
  }
}

ResetPassword = Form.create({ name: "normal_login" })(ResetPassword);
export default ResetPassword;
