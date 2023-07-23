import { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { GoogleAdsense, GoogleAnalytics } from "../src/components";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleAnalytics />
        <GoogleAdsense />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
