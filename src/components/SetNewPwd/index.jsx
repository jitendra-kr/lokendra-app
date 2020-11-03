import React from "react";
import { Link } from "react-router-dom";
import { MessageOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input, Layout, Button } from "antd";
import Config from '../../config/env'
import {
  messageLoading,
  messageSuccess,
  messageError
} from "../../utils/antd"
import { httpPost } from "../../utils/http";
const { Content } = Layout;

class ResetPassword extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      config: Config.getData().default,
      otpSent: false,
      email: '',
      isButtonDisabled: false,
      isLoggedIn: localStorage.getItem('auth') ? true : false
    };

    console.log(this.state.isLoggedIn)

  }

  changePwd = values => {

    const key = 'changePwd';
    messageLoading({ key });
    this.setState({ isButtonDisabled: true });

    values.email = this.state.email;
    httpPost({
      url: `${this.state.config.baseUrl}set-new-password`,
      body: values
    }).then(response => {
      this.setState({ isButtonDisabled: false });
      if (response && response.statusCode === 200) {
        messageSuccess({ content: response.message, key })
        this.props.history.push('/login');
      } else if (response && response.statusCode === 400) {
        messageError({ content: response.message, key, duration: 2 });
      }
    }).catch((err) => {
      this.setState({ isButtonDisabled: false });
      if (err.status === 400) {
        messageError({ content: err.data.message, key, duration: 2 });
      } else {
        messageError({ content: "something went wrong", key, duration: 2 });
      }

    });


  };

  sendOtp = values => {

    const key = "sendOtp";
    messageLoading({ key });

    httpPost({
      url: `${this.state.config.baseUrl}change-pwd-otp`,
      body: values
    }).then(response => {

      messageSuccess({ content: response.message, key });
      this.setState({ otpSent: true });
      this.setState({ email: values.email });

    }).catch(err => {

      if (err.status === 400) {
        messageError({ content: err.data.message, key, duration: 2 });
      } else {
        messageError({ content: "something went wrong", key, duration: 2 });
      }


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
              !this.state.otpSent ?
                <div>
                  <p style={{ textAlign: 'center', fontSize: 'large' }} >Enter the email address associated with your account</p>
                  <Form
                    name="basic1"
                    initialValues={{ remember: true }}
                    onFinish={this.sendOtp}
                    style={{ width: "70%", margin: "0 auto" }}>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        { required: true, message: "The input is not valid E-mail!" }
                      ]}
                    >
                      <Input prefix={<MailOutlined  className="site-form-item-icon" />}
                        placeholder="Email"/>

                    </Form.Item>

                    <Form.Item className="text-center">
                      {this.state.isLoggedIn ? <Button

                        htmlType="submit"
                        style={{width: "auto", marginRight: "20px"}}
                      >
                        <Link to={`/user`}>Cancel</Link>


                    </Button> : ''}
                    <Button
                        type="primary"
                        htmlType="submit"
                      >
                        Submit
                    </Button>

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

                    onFinish={this.changePwd}
                    style={{ width: "70%", margin: "0 auto" }}>
                    <Form.Item
                      name="otp"
                      rules={[{ required: true, message: "Please input your OTP!" }]}
                    >
                      <Input
                        prefix={<MessageOutlined className="site-form-item-icon" />}
                        placeholder="OTP" />

                    </Form.Item>
                    <Form.Item
                      name="newPassword"
                      rules={[{ required: true, message: "Please input your new password!" }]} hasFeedback>

                      <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="New Password" />

                    </Form.Item>
                    <Form.Item
                      name="confirmPassword"
                      rules={[
                        { required: true, message: "Please input your new password!" },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {

                            if (!value || getFieldValue('newPassword') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                          },
                        })]}
                      dependencies={['newPassword']}
                      hasFeedback
                    >
                      <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Confirm Password" />

                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        disabled={this.state.isButtonDisabled} >
                        Submit
                </Button>
                      <p className="m-top-15">Login? <Link to={`/login`}>Login</Link> </p>
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
