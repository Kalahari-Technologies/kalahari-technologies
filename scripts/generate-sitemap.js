// generate-sitemap.mjs
import { writeFile } from 'fs/promises';

const baseUrl = 'https://www.kalaharitech.xyz';
const routes = [
  '/',
  // add all your React Router paths here
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

await writeFile('public/sitemap.xml', sitemap);

console.log('Sitemap generated with ES modules!');
