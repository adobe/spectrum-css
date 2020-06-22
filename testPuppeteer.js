const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:3000/docs/index.html');
  await page.screenshot({path: 'example.png'});
  await browser.close();
})();