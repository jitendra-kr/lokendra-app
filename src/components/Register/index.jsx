import React from "react";
import Link from "next/link";
import { withRouter } from 'next/router'
import { Form, Input, Layout, Button } from "antd";
import { MailOutlined, LockOutlined, UserOutlined  } from '@ant-design/icons';
import Config from '../../config/env'
import {
  messageLoading,
  messageSuccess,
  messageError
} from "../../utils/antd"
import { httpPost } from "../../utils/http";
const { Content } = Layout;

class Register extends React.Component {

  // router;
  constructor(props) {
    super(props);

    // this.router = useRouter();
    this.state = {
      isButtonDisabled: false,
      config: Config.getData().default,
    }
  }
  onFinish = values => {
    const key = 'onFinish';
    messageLoading({ key });
    this.setState({ isButtonDisabled: true });
    httpPost({
      url: `${this.state.config.baseUrl}register`,
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

    })
  };

  render() {
    return (
      <Content style={{ padding: "50px 50px" }}>
        <div className="row content-height">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <h2 className="text-center m-bottom-30">Create Account</h2>
            <Form
              // {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              style={{ width: "70%", margin: "0 auto" }}
            >
              <Form.Item
                name="firstName"
                rules={[
                  { required: true, message: 'Please input your first name!' }
                ]}
              >
                <Input
                  prefix={<UserOutlined  className="site-form-item-icon" />}
                  placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[
                  { required: true, message: 'Please input your last name!' }
                ]}
              >
                <Input
                  prefix={<UserOutlined  className="site-form-item-icon" />}
                  placeholder="Lirst Name" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  { required: true, message: 'Please input your email!' }
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email" />
              </Form.Item>

              <Form.Item
                      name="password"
                      rules={[{ required: true, message: "Please input your password!" }]} hasFeedback>

                      <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Password" />

                    </Form.Item>
                    <Form.Item
                      name="confirmPassword"
                      rules={[
                        { required: true, message: "Please input your new password!" },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {

                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                          },
                        })]}
                      dependencies={['password']}
                      hasFeedback
                    >
                      <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Confirm Password" />

                    </Form.Item>

              <Form.Item >
                <Button type="primary" htmlType="submit" className="login-form-button" disabled={this.isButtonDisabled} >
                  Submit
              </Button>
                <p className="m-top-15">
                  Already have an account? <Link href={`/login`}>Sign in</Link>{" "}
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

// Register = Form.create({ name: "normal_login" })(Register);
export default withRouter(Register);
