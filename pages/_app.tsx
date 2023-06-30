import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";

import { LoadingOutlined } from "@ant-design/icons";
import { Layout, Spin } from "antd";
import axios from "axios";
import { sample } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import * as gtag from "../lib/gtag";
import { store } from "../src/common/state";
import Config from "../src/config/env";
import { UserContext } from "../src/contexts/UserContext";
import { useWindowSize } from "../src/hooks/useWindowSize";
import { getUser, messageDestroy } from "../src/utils";

import { AdComponent, MainFooter, MainHeader } from "../src/components";

const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />;
const baseUrls = Config.getData().default.baseUrl;

export default function MyApp({ Component, pageProps }) {
  let isLoading = 0;
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(getUser());
  const size = useWindowSize();
  const router = useRouter();

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
    },
  );

  useEffect(() => {
    router.events.on("routeChangeStart", (url, { shallow }) => {
      console.log(`routing to ${url}`, `is shallow routing: ${shallow}`);
      if (!loader) {
        startStopLoader(true);
      }
    });
    router.events.on("routeChangeComplete", (url, { shallow }) => {
      console.log(`Completely routed to ${url}`);
      gtag.pageview(url);
      startStopLoader(false);
    });
    router.events.on("routeChangeError", (err, url) => {
      console.log(err.cancelled ? "you cancelled the navigation" : err);
      startStopLoader(false);
    });

    return () => {
      router.events.off("routeChangeStart", () => {
        console.log("unsubscribed routeChangeStart");
      });
      router.events.off("routeChangeComplete", () => {
        console.log("unsubscribed routeChangeComplete");
      });
      router.events.off("routeChangeError", () => {
        console.log("unsubscribed routeChangeError");
      });
    };
  }, []);

  return (
    <Layout>
      <Spin indicator={antIcon} className="center-loader" spinning={loader} />
      <Provider store={store}>
        <UserContext.Provider value={[user, setUser]}>
          <MainHeader />
          <div className="row" style={{ minHeight: size.height + "px" }}>
            <div
              className="col-lg-10"
              style={{
                padding: "50px",
              }}
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
