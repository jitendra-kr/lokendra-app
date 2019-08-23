import React from "react";
import { withRouter } from "react-router-dom";
import MainHeader from "../Header";
import MainFooter from "../Footer";
import { Home } from "../../components";
import { Route, Switch } from 'react-router-dom';
import { ProductDetail } from "../../components";
import {ProductReview} from "../../components";

const App = props => {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home/:id" component={ProductDetail} />
        <Route path="/product-reviews/:id" component={ProductReview}/>
      </Switch>
      <MainFooter />
    </div>
  );
};

export default withRouter(App);
