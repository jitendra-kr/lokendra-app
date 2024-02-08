import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/404",
    },
    sitemap: "https://www.fireboxtools.com/sitemap.xml",
  };
}
