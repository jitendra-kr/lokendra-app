import React from "react";
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
  ReadBlog
} from "../../components";
import { Layout } from "antd";

axios.interceptors.request.use(async (config) => {
  console.log("request");
  return config;
});

axios.interceptors.response.use(async (config) => {
  console.log("response");
  return config;
});

const App = props => {
  return (
    <div>
      <MainHeader />
      <Layout >
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route path="/shop" component={Home} />
          <Route path="/blog/:slug" component={ReadBlog} />
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
    </div>
  );
};

export default withRouter(App);
