import React, { useState } from "react";
import axios from "axios";
import { withRouter, Route, Switch } from "react-router-dom";
import MainHeader from "../Header";
import MainFooter from "../Footer";

import {
  Home,
  BuyNow,
  Login,
  Register,
  UserProfile,
  ProductReview,
  ProductDetail,
  ResetPassword,
  BlogList,
  ReadBlog,
  QuestionList,
  Answer,
  NewQuestion,
  Donate
} from "../../components";
import { messageDestroy } from "../../utils/antd"
import Config from '../../config/env';
import { UserContext } from '../../contexts/UserContext'
import { LoadingOutlined } from '@ant-design/icons';
import { Layout, Spin } from "antd";
import "./index.css";
const { Content } = Layout;

function App(props) {
  const userData = localStorage.getItem('user');
  let userDetail;

  try {
    userDetail = userData ? JSON.parse(userData) : null;
  } catch (e) {

  }
  const [user, setUser] = useState(userDetail);
  const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />;

  let isLoading = 0;
  const [loader, setLoader] = useState(false);

  axios.interceptors.request.use(config => {

    config.baseURL = Config.getData().default.baseUrl;
    if (config.method === 'get') {
      isLoading++;
      setLoader(true);
    }

    return config;

  });

  axios.interceptors.response.use(config => {

    isLoading--;
    if (isLoading <= 0 ) {
      setLoader(false);
    }
    messageDestroy();
    return config;
  }, (err) => {

    messageDestroy();
    setLoader(false);
    return Promise.reject(err);

  });


  return (

    <Layout>
      <Spin indicator={antIcon} className="center-loader" spinning={ loader } />
      <UserContext.Provider value={[user, setUser]}>

        <MainHeader />
        <Content style={{ padding: "50px 50px" }}>
        <Switch>
        <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/user" component={UserProfile} />
            <Route exact path="/" component={BlogList} />
            <Route path="/shop" component={Home} />
            <Route path="/blog/:slug" component={ReadBlog} />
            <Route path="/questions/list" component={QuestionList} />
            <Route path="/questions/:_id/:slug" component={Answer} />
            <Route path="/questions/ask/" component={NewQuestion} />
            <Route path="/post/edit/:_id" component={NewQuestion} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/product-reviews/:id" component={ProductReview} />
            <Route path="/checkout/:size/:flavour" component={BuyNow} />
            <Route path="/donate" component={Donate} />

            <Route component={Register} />
        </Switch>
        </Content>
        <MainFooter />
      </UserContext.Provider>
    </Layout>

  );
}

export default withRouter(App);
