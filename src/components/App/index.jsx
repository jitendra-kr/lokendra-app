import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MainHeader from "../Header";
import MainFooter from "../Footer";
import { Route, Switch } from "react-router-dom";

import {
  Home,
  BuyNow,
  Login,
  ProductReview,
  ProductDetail,
  Register,
  ChangePassword,
  ResetPassword,
  BlogList,
  ReadBlog,
  QuestionList,
  Answer
} from "../../components";
import { messageDestroy } from "../../utils/antd"
import { UserContext } from '../../contexts/UserContext'
import { LoadingOutlined } from '@ant-design/icons';
import { Layout, Spin  } from "antd";
import "./index.css";

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

    isLoading++;
    console.log(isLoading, config.url)
    setLoader(true);

    return config;
  });

  axios.interceptors.response.use(config => {

    isLoading--;
    if (isLoading === 0) {
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
    <div>
      <Spin indicator={antIcon} className="center-loader" spinning={loader}/>
      <UserContext.Provider value={[user, setUser]}>
        <MainHeader />
        <Layout>
          <Switch>
            <Route exact path="/" component={BlogList} />
            <Route path="/shop" component={Home} />
            <Route path="/blog/:slug" component={ReadBlog} />
            <Route path="/questions" component={QuestionList} />
            <Route path="/question/:slug" component={Answer} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/change-password" component={ChangePassword} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/product-reviews/:id" component={ProductReview} />
            <Route path="/checkout/:size/:flavour" component={BuyNow} />
          </Switch>
        </Layout>
        <MainFooter />
      </UserContext.Provider>
    </div>
  );
}

export default withRouter(App);
