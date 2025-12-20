import fs from 'fs';

const DOMAIN = 'https://www.kalaharitech.xyz';

const staticRoutes = [
  '/',
];

async function generateSitemap() {
  const dynamicRoutes = []; // await getDynamicRoutes();

  const allRoutes = [
    ...staticRoutes.map(path => ({ path })),
    ...dynamicRoutes,
  ];

  const urls = allRoutes
    .map(
      ({ path, lastmod }) => `
  <url>
    <loc>${DOMAIN}${path}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
  </url>`
    )
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync('./public/sitemap.xml', sitemap, 'utf8');
}

generateSitemap();
