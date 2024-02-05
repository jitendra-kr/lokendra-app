import { ToUppercase, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(
  ToolKeys.UppercaseTextconverter,
);

function ToUppercasePage() {
  return <ToUppercase />;
}

export default ToUppercasePage;
