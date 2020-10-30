import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./index.css";
import { Form, Input, Layout, Button, message } from "antd";
import Config from '../../config/env'
import { UserContext } from "../../contexts/UserContext";

const { Content } = Layout;




function Login(props) {

  const history = useHistory();
  const [user, setUser] = useContext(UserContext);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const state = {
    config: Config.getData().default
  }

  const onFinish = values => {

    const key = 'updatable';
    message.loading({ content: 'Loading...', key });
    setButtonDisabled(true);
    fetch(`${state.config.baseUrl}login`, {
      // fetch(`${state.config.baseUrl}login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    }).then(response => {
      setButtonDisabled(false);
      return response.json();
    }).then((data) => {
      if (data.statusCode === 200) {
        localStorage.setItem('user', JSON.stringify(data.result));
        localStorage.setItem('auth', data.auth);
        setUser(() => data.result);
        history.push("/");
      } else {
        message.error({ content: 'Please enter valid Email ID/Password!', key, duration: 2 });
      }
    }).catch(err => {
      message.error('something went wrong please try again');
    })
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

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
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
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
