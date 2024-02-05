import { ToLowercase, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(
  ToolKeys.LowercaseTextconverter,
);

function ToUppercasePage() {
  return <ToLowercase />;
}

export default ToUppercasePage;
