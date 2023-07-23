import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";
import { GA_TRACKING_ID } from "../lib/gtag";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id="googletagmanager"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="adsbygoogle"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4375413214168925`}
          crossOrigin="anonymous"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
