import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MainHeader from "../Header";
import MainFooter from "../Footer";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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
import { UserContext } from '../../contexts/UserContext'
import { Layout } from "antd";
import "./index.css";

function App(props) {

  const userDetail = JSON.parse(localStorage.getItem('user'))
  const [user, setUser] = useState(userDetail);

  let isLoading = 0;
  const [loader, setLoader] = useState(false);
  axios.interceptors.request.use(async config => {
    console.log(config);
    isLoading++;
    setLoader(true);
    return config;
  });

  axios.interceptors.response.use(async config => {
    console.log(2);
    console.log(isLoading);
    isLoading--;
    if (isLoading === 0) {
      setLoader(false);
    }
    return config;
  }, (err) => {
    setLoader(false);
  });

  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <MainHeader />
        <Layout>
          <Loader
            className="center-loader"
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            visible={loader}
          />
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
