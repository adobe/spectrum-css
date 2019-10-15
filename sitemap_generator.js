const sitemap=require('nextjs-sitemap-generator');
const version=require('./package').version;
const fs = require('fs');

sitemap({
  baseUrl: `https://opensource.adobe.com/spectrum-css/${version}/docs`,
  pagesDirectory: './spectrum-css/components/',
  targetDirectory : './spectrum-css/static/'
});

fs.writeFileSync('./spectrum-css/robots.txt', `# All robots allowed
User-agent: *
Disallow:

# Sitemap files
Sitemap: https://opensource.adobe.com/spectrum-css/${version}/docs/static/sitemap.xml`);
