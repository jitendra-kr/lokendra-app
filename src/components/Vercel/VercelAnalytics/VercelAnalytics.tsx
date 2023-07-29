import { Analytics } from "@vercel/analytics/react";
import { useAllowAnalytics } from "../../../hooks";

export function VercelAnalytics() {
  const allow = useAllowAnalytics();

  if (!allow) {
    return <></>;
  }

  return <Analytics />;
}
