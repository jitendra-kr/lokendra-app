import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { MailOutlined , LockOutlined } from '@ant-design/icons';
import "./index.css";
import { Form, Input, Layout, Button, message } from "antd";
import Config from '../../config/env'
import { UserContext } from "../../contexts/UserContext";
import { httpPost } from "../../utils/http";
import { messageError } from "../../utils/antd";
const { Content } = Layout;




function Login(props) {

  const history = useHistory();
  const setUser = useContext(UserContext)[1];
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const state = {
    config: Config.getData().default
  }

  const onFinish = values => {

    const key = 'onFinish';
    message.loading({ content: 'Loading...', key });
    setButtonDisabled(true);

    httpPost({
      url: `${state.config.baseUrl}login`,
      body: values
    }).then((response) => {

      setButtonDisabled(false);
      setUserData(response);
      history.push("/");

    }).catch((err) => {
      setButtonDisabled(false);
      if (err.status === 400) {
        messageError({ content: err.data.message, key, duration: 2 });
      } else {
        messageError({ content: "something went wrong", key, duration: 2 });
      }

    });

  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const setUserData = (response) => {
    localStorage.setItem('user', JSON.stringify(response.result));
    localStorage.setItem('auth', response.auth);
    setUser(() => response.result);
  }

  return (
    <Content style={{ padding: "50px 50px" }}>

      <div className="row content-height"  >
        <div className="col-lg-2" />
        <div className="col-lg-8">

          <h2 className="text-center m-bottom-30">Login</h2>

          <Form
            // {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ width: "70%", margin: "0 auto" }}
          >
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
              <Input allowClear prefix={<MailOutlined  className="site-form-item-icon" />}
                        placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
              allowClear
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
              />
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit" className="login-form-button" disabled={isButtonDisabled} >
                Submit
              </Button>
              <p className="m-top-15">New to Jimmypoint? <Link to={`/register`}>Register</Link> </p>
              <Link to={`/reset-password`}>Forgot Password?</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="col-lg-2" />
    </Content>
  );
}

export default Login;
