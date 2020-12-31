import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import { Form, Input, Layout, Button, message } from "antd";
import { UserContext } from "../../contexts/UserContext";
import { httpPost } from "../../utils/http";
import { isLoggedIn } from "../../utils";
import { messageError } from "../../utils/antd";
import { AppHead } from "../../components";
import styles from "../../../styles/Login.module.css";
const { Content } = Layout;

function Login(props) {
  const router = useRouter();

  useEffect(async () => {
    if (isLoggedIn()) {
      router.push("/");
    }
  }, []);

  const setUser = useContext(UserContext)[1];
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const onFinish = (values) => {
    const key = "onFinish";
    message.loading({ content: "Loading...", key });
    setButtonDisabled(true);

    httpPost({
      url: `login`,
      body: values,
    })
      .then((response) => {
        setButtonDisabled(false);
        setUserData(response);
        router.push("/");
      })
      .catch((err) => {
        setButtonDisabled(false);
        if (err.status === 400) {
          messageError({ content: err.data.message, key, duration: 2 });
        } else {
          messageError({ content: "something went wrong", key, duration: 2 });
        }
      });
  };

  const onFinishFailed = (errorInfo) => {};

  const setUserData = (response) => {
    localStorage.setItem("user", JSON.stringify(response.result));
    localStorage.setItem("auth", response.auth);
    setUser(() => response.result);
  };

  return (
    <Content>
      <AppHead data={{ title: "Log In" }} />
      <div className="row content-height">
        <div className="col-lg-4" />
        <div className="col-lg-8">

          <h2 className="text-center m-bottom-30">Login</h2>

          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className={styles["login-form"]}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                { required: true, message: "Please input your email!" },
              ]}
            >
              <Input
                allowClear
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                allowClear
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={isButtonDisabled}
              >
                Submit
              </Button>
              <p className="m-top-15">
                New to Jimmypoint? <Link href={`/register`}>Register</Link>{" "}
              </p>
              <Link href={`/reset-password`}>Forgot Password?</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Content>
  );
}

export default Login;
