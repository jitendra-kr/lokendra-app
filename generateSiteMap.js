import * as fs from "fs";
import { globby } from "globby";

const getDate = new Date().toISOString();

async function generateSiteMap() {
  const pagesList = await globby([
    "pages/**/*.js",
    "pages/**/*.tsx",
    "!pages/_*.js",
    "!pages/_*.tsx",
    "!pages/donate.js",
    "!pages/password-manager/*.js",
    "!pages/404.js",
    "!pages/user.js",
  ]);

  const pages = [];

  for (let path of pagesList) {
    path = path
      .replace("pages", "")
      .replace(".js", "")
      .replace(".tsx", "")
      .replace(".md", "")
      .replace("/index", "");

    let route = path === "/index" ? "" : path;
    route = route.replace("/index", "");
    pages.push(route);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
          ${pages
            .map((route) => {
              return loc(route);
            })
            .join("")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

function loc(route) {
  return `
  <url>
      <loc>${`https://www.fireboxtools.com${route}`}</loc>
      <lastmod>${getDate}</lastmod>
  </url>
`;
}

generateSiteMap();
