import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
//   { url: '/about', changefreq: 'monthly' },
//   { url: '/pricing', changefreq: 'monthly' },
//   { url: '/contact', changefreq: 'monthly' },
];

const sitemap = new SitemapStream({
  hostname: 'https://yourdomain.com',
});

const writeStream = createWriteStream('./public/sitemap.xml');

links.forEach(link => sitemap.write(link));

sitemap.end();

streamToPromise(sitemap).then(sm =>
  writeStream.write(sm.toString())
);
