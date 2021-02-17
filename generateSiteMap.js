const fs = require('fs')
const globby = require('globby')
const axios = require('axios')


const getDate = new Date().toISOString();

const blogUrl = `https://jimmypoint-server-1.herokuapp.com/api/blog-management/blogs?staticPaths=true`;
const questionUrl = `https://jimmypoint-server.herokuapp.com/api/question/get-all-questions`;


async function generateSiteMap() {
  const blogUrlsData = (await axios.get(blogUrl)).data.result;
  const questionUrlsData = (await axios.get(questionUrl)).data.result;
  const pagesList = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/blog/new-blog.js',
    '!pages/donate.js',
    '!pages/404.js',
    '!pages/user.js',
    '!pages/**/asked-by/**/*.js',
    '!pages/**/asked-to/**/*.js',
    '!pages/**/edit/*.js',
    '!pages/**/update/*.js',
  ]);

  const pages = [];


  for (let path of pagesList) {
    path = path.replace('pages', '')
      .replace('.js', '')
      .replace('.md', '')
      .replace('/index', '')

    let route = path === '/index' ? '' : path
    route = route.replace('/index', '');
    if (route === '/blog/[slug]') {
      blogUrlsData.forEach(blogUrl => {
        pages.push(route.replace('[slug]', blogUrl.slug))
      });
    } else if (route.includes('[_id]/[slug]')) {
      questionUrlsData.forEach(questionUrl => {
        pages.push(route.replace('[_id]/[slug]', `${questionUrl._id}/${questionUrl.slug}`))
      });
    } else {
      pages.push(route)
    }
  }



  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
          ${pages
      .map(route => {

        return loc(route);
      })
      .join('')}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

function loc(route) {
  return `
  <url>
      <loc>${`https://www.jimmypoint.com${route}`}</loc>
      <lastmod>${getDate}</lastmod>
  </url>
`
}

generateSiteMap()