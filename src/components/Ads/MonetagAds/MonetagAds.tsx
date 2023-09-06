export function MonetagAds() {
  return (
    <>
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
    </>
  );
}
