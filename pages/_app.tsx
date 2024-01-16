import { Analytics } from "@vercel/analytics/react";
import { Col, Row, Spin } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../src/common/state";
import { MainHeader } from "../src/components";

import { pageview } from "../lib/gtag";
import "../styles/global.css";

const MainFooter = dynamic(() => import("../src/components/Footer"));

export default function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(false);

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
      pageview(url);
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
        <Spin className="center-loader" spinning={loader} size="large" />
        <Analytics />
        <MainHeader />
        <Row
          style={{ marginTop: "25px", marginLeft: "5px", marginRight: "5px" }}
        >
          <Col xs={24} sm={24} md={2} lg={2} xl={2} xxl={2}></Col>
          <Col xs={24} sm={24} md={20} lg={20} xl={20} xxl={20}>
            <Component {...pageProps} />
          </Col>
          <Col xs={24} sm={24} md={2} lg={2} xl={2} xxl={2}></Col>
        </Row>

        <MainFooter />
      </Provider>
    </>
  );
}
