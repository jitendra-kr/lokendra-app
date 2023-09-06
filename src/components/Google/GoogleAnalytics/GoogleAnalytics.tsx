import { GA_TRACKING_ID } from "../../../../lib/gtag";

export function GoogleAnalytics() {
  return (
    <>
      <script
        id="googletagmanager"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      {/* Start  in-page-push-banner*/}
      <script
        id="moneyTag-in-page-push-banner-anti-adblock"
        async
        src={`../../../monetagCdn/in-page-push-banner-anti-adblock/anti-adblock.js`}
      />
      <script
        id="moneyTag-in-page-push-banner-anti-adblock-main"
        async
        src={`../../../monetagCdn/in-page-push-banner-anti-adblock/main.js`}
      />
      {/* End  in-page-push-banner*/}

      {/* <script
        id="adsbygoogle"
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4375413214168925`}
        crossOrigin="anonymous"
      /> */}

      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </>
  );
}
