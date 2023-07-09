import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import * as gtag from "../lib/gtag";
import { store } from "../src/common/state";
import { AdComponent, MainFooter, MainHeader } from "../src/components";
import { UserContext } from "../src/contexts/UserContext";
import { useWindowSize } from "../src/hooks/useWindowSize";
import { getUser } from "../src/utils";
import "../styles/global.css";

const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />;

export default function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(getUser());
  const size = useWindowSize();
  const router = useRouter();

  const startStopLoader = (value) => {
    setLoader(value);
  };

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
    <>
      <Provider store={store}>
        <Spin indicator={antIcon} className="center-loader" spinning={loader} />
        <UserContext.Provider value={[user, setUser]}>
          <MainHeader />
          <div
            className="row"
            style={{
              minHeight: size.height + "px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="col col-12 col-md-2"></div>
            <div
              className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-11"
              style={{
                marginTop: "50px",
              }}
            >
              <Component {...pageProps} />
            </div>
            <div className="col col-12 col-md-2">
              <AdComponent />
            </div>
          </div>
          <MainFooter />
        </UserContext.Provider>
      </Provider>
    </>
  );
}
