import Script from "next/dist/client/script";

function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QH4Q1094NQ"
      ></Script>
      <Script>
        {`    window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-QH4Q1094NQ');`}
      </Script>
    </>
  );
}
export default GoogleAnalytics;
