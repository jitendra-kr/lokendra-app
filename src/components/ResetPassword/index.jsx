import React from "react";
import Link from "next/link";
import { withRouter } from 'next/router'
import { MessageOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input, Layout, Button } from "antd";
import AppHead from "../Head/head";

import {
  messageLoading,
  messageSuccess,
  messageError
} from "../../utils/antd"
import { isLoggedIn } from "../../utils";
import { httpPost } from "../../utils/http";
const { Content } = Layout;
import styles from "../../../styles/ResetPassword.module.css";

class ResetPassword extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      otpSent: false,
      email: '',
      isButtonDisabled: false,
      isLoggedIn: isLoggedIn()
    };

  }

  changePwd = values => {

    const key = 'changePwd';
    messageLoading({ key });
    this.setState({ isButtonDisabled: true });

    values.email = this.state.email;
    httpPost({
      url: `set-new-password`,
      body: values
    }).then(response => {
      this.setState({ isButtonDisabled: false });
      if (response && response.statusCode === 200) {
        messageSuccess({ content: response.message, key })
        this.props.router.push('/login');
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
      url: `change-pwd-otp`,
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
        <AppHead data={{ title: "Forgot Password" }} />
        <div className="row content-height"  >
          <div className="col-lg-4" />
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
                      <Input allowClear prefix={<MailOutlined  className="site-form-item-icon" />}
                        placeholder="Email"/>

                    </Form.Item>

                    <Form.Item className="text-center">
                      {this.state.isLoggedIn ? <Button

                        htmlType="submit"
                        style={{width: "auto", marginRight: "20px"}}
                      >
                        <Link href={`/user`}>Cancel</Link>


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
                    layout="vertical"
                    onFinish={this.changePwd}
                    className={styles['resetpwd-form']}>
                    <Form.Item
                      name="otp"
                      label = "OTP"
                      rules={[{ required: true, message: "Please input your OTP!" }]}
                      >
                      <Input
                        allowClear
                        prefix={<MessageOutlined className="site-form-item-icon" />}
                        placeholder="OTP" />

                    </Form.Item>
                    <Form.Item
                      name="newPassword"
                      label = "New Password"
                      rules={[{ required: true, message: "Please input your new password!" }]} hasFeedback>

                      <Input.Password
                      allowClear
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="New Password" />

                    </Form.Item>
                    <Form.Item
                      name="confirmPassword"
                      label = "Confirm Password"
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
                      allowClear
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
                      <p className="m-top-15">Login? <Link href={`/login`}>Login</Link> </p>
                    </Form.Item>
                  </Form>
                </div>
            }

          </div>
        </div>
      </Content>
    );
  }
}

export default withRouter(ResetPassword);
