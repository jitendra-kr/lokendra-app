import { GOOGLE_ADSENSE } from "../../../constants";

export function GoogleAdsense() {
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADSENSE.client}`}
      crossOrigin="anonymous"
    ></script>
  );
}
