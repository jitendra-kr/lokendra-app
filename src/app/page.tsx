import { HomePage, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.HOME);

export default function Home() {
  return <HomePage />;
}
