import { SubmitFeedbackMsg } from "@ft/components/Feedback/SubmitFeedbackMsg";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.HOME);

export default function SaveFeedBack() {
  return <SubmitFeedbackMsg />;
}
