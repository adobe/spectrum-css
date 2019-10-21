const sitemap=require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://opensource.adobe.com/spectrum-css',
  pagesDirectory: './spectrum-css/components/',
  targetDirectory : './spectrum-css/static/'
});
