import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Layout, Button } from "antd";
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

  changePwd = values => {
        values.email = this.state.email;
        console.log("Received values of form: ", values);
        post(`${this.state.config.baseUrl}set-new-password`, values)
          .then(response => {
            console.log(response)
            if(response) {
              this.props.history.push('/login');
            }
          })


  };

   sendOtp = values => {

      post(`${this.state.config.baseUrl}change-pwd-otp`, values)
        .then(response => {
          this.setState({ otpSent: true });
          this.setState({ email: values.email });

        })
        .catch(err => {
          console.log("Error Reading data " + err);
        });

  }

  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row content-height"  >
          <div className="col-lg-2" />
          <div className="col-lg-8">

            <h2 className="text-center m-bottom-30">Set New Password</h2>
            {
              this.state.otpSent ?
                <div>
                  <p style={{ textAlign: 'center', fontSize: 'large' }} >Enter the email address associated with your account</p>
                  <Form
                    name="basic1"
                    initialValues={{ remember: true }}
                    onFinish={this.sendOtp}
                    style={{ width: "70%", margin: "0 auto" }}>
                    <Form.Item
                      name="email"
                      rules={[{ required: true, message: "The input is not valid E-mail!" }]}
                    >
                      <Input />

                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Submit
                </Button>
                      <p className="m-top-15">Login? <Link to={`/login`}>Login</Link> </p>
                    </Form.Item>
                  </Form>

                </div>
                :
                <div>
                  <p style={{ textAlign: 'center', fontSize: 'large' }} >
                    For your security, we need to authenticate your request. We've sent an OTP to the email {this.state.email}. Please enter it below to complete verification
                    </p>

                  <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.changePwd}
                    style={{ width: "70%", margin: "0 auto" }}>
                    <Form.Item
                      name="otp"
                      rules={[{ required: true, message: "Please input your OTP!" }]}
                    >
                      <Input />

                    </Form.Item>
                    <Form.Item
                      name="newPassword"
                      rules={[{ required: true, message: "Please input your new password!" }]}
                    >
                      <Input />

                    </Form.Item>
                    <Form.Item
                      name="confirmPassword"
                      rules={[{ required: true, message: "Please input your new password!" }]}
                    >
                      <Input />

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

export default ResetPassword;
