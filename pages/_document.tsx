import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

const GA_TRACKING_ID = "G-R8F91VBWJT";

export default function Document() {
  return (
    <Html>
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
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
