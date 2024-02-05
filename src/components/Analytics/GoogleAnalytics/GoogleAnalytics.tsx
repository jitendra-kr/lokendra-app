import { GA_TRACKING_ID } from "@ft/constants";
import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";

export function GoogleAnalytics() {
  return <NextGoogleAnalytics gaId={GA_TRACKING_ID} />;
}
