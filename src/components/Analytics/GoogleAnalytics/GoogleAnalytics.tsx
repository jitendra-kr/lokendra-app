import { GA_TRACKING_ID } from "@ft/constants/googleAnalyticsConst";
import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";

function GoogleAnalytics() {
  return <NextGoogleAnalytics gaId={GA_TRACKING_ID} />;
}
export default GoogleAnalytics;
