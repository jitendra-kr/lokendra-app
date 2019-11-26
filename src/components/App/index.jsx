import React from "react";
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
  QuestionList
} from "../../components";
import { Layout } from "antd";
import "./index.css";




class App extends React.Component {

  constructor(props) {
    let isLoading = 0;
    super(props);
    this.state = {
      loader: false
    };
    axios.interceptors.request.use(async config => {
      isLoading++;
      this.setState({
        loader: true
      });
      return config;
    });

    axios.interceptors.response.use(async config => {
      isLoading--;
      if (isLoading === 0) {
        this.setState({
          loader: false
        });
      }
      return config;
    });

  }

  render() {
    return (
      <div>
        <MainHeader />
        <Layout>
          <Loader
            className="center-loader"
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            visible={this.state.loader}
          />
          <Switch>
            <Route exact path="/" component={BlogList} />
            <Route path="/shop" component={Home} />
            <Route path="/blog/:slug" component={ReadBlog} />
            <Route path="/questions" component={QuestionList} />
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
  }
}

export default withRouter(App);
