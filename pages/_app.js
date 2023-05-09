import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";

import React, { useState } from "react";
import Router from "next/router";
import { Provider } from "react-redux";
import { store } from "../src/common/state";
import axios from "axios";
import { sample } from "lodash";
import { LoadingOutlined } from "@ant-design/icons";
import { UserContext } from "../src/contexts/UserContext";
import { getUser } from "../src/utils";
import { messageDestroy } from "../src/utils";
import * as gtag from "../lib/gtag";
import Config from "../src/config/env";
import { Layout, Spin } from "antd";
import { useWindowSize } from "../src/hooks/useWindowSize";

import { MainHeader, MainFooter, AdComponent } from "../src/components";

const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />;
const baseUrls = Config.getData().default.baseUrl;

export default function MyApp({ Component, pageProps }) {
  let isLoading = 0;
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(getUser());
  const size = useWindowSize();

  const startStopLoader = (value) => {
    setLoader(value);
  };

  axios.interceptors.request.use((config) => {
    config.baseURL = sample(baseUrls);
    if (config.method === "get") {
      if (!loader) {
        startStopLoader(true);
        isLoading++;
      }
    }
    return config;
  });

  axios.interceptors.response.use(
    (config) => {
      if (loader || isLoading) {
        startStopLoader(false);
        isLoading--;
      }
      messageDestroy();
      return config;
    },
    (err) => {
      messageDestroy();
      if (loader) {
        startStopLoader(false);
      }
      return Promise.reject(err);
    }
  );

  Router.onRouteChangeStart = () => {
    if (!loader) {
      startStopLoader(true);
    }
  };

  Router.onRouteChangeComplete = (url) => {
    gtag.pageview(url);
    if (loader) {
      startStopLoader(false);
    }
  };
  Router.onRouteChangeError = () => {
    startStopLoader(false);
  };

  return (
    <Layout>
      <Spin indicator={antIcon} className="center-loader" spinning={loader} />
      <Provider store={store}>
        <UserContext.Provider value={[user, setUser]}>
          <MainHeader />
          <div className="row" style={{ height: size.height + "px" }}>
            <div
              className="col-lg-10"
              style={{ padding: "50px 0px 59px 30px" }}
            >
              <Component {...pageProps} />
            </div>
            <div className="col-lg-2">
              <AdComponent />
            </div>
          </div>
          <MainFooter />
        </UserContext.Provider>
      </Provider>
    </Layout>
  );
}
