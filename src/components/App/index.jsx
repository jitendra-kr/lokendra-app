import React from "react";
import { withRouter } from "react-router-dom";
import MainHeader from "../Header";
import MainFooter from "../Footer";
import { Home } from "../../components";
import { Route, Switch } from "react-router-dom";
import {
  BuyNow,
  Login,
  ProductReview,
  ProductDetail,
  Register,
} from "../../components";
import { Layout } from "antd";

const App = props => {
  return (
    <div>
      <MainHeader />
      <Layout >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

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
