import { SCREENS } from "@ft/common/enums/screens";
import { STRING_CONSTANTS } from "@ft/constants/stringConstants";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = Object.values(SCREENS);
  const ignore = [SCREENS.PRIVACY_POLICY, SCREENS.SAVE_FEEDBACK];
  const filteredPages = pages.filter((page) => !ignore.includes(page));

  return filteredPages.map((page) => ({
    url: `${STRING_CONSTANTS.global.websiteURL}${page}`,
    lastModified: new Date(),
  }));
}
