/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * IGNORE CSP HEADERS
 * Listen to all requests. If a request matches scenario.url
 * then fetch the request again manually, strip out CSP headers
 * and respond to the original request without CSP headers.
 * Allows `ignoreHTTPSErrors: true` BUT... requires `debugWindow: true`
 *
 * see https://github.com/GoogleChrome/puppeteer/issues/1229#issuecomment-380133332
 * this is the workaround until Page.setBypassCSP lands... https://github.com/GoogleChrome/puppeteer/pull/2324
 *
 * @param      {REQUEST}  request
 * @return     {VOID}
 *
 * Use this in an onBefore script E.G.
  ```
  module.exports = async function(page, scenario) {
    require('./removeCSP')(page, scenario);
  }
  ```
 *
 */

const fetch = require('node-fetch');
const https = require('https');
const agent = new https.Agent({
  rejectUnauthorized: false
});

module.exports = async function (page, scenario) {
  const intercept = async (request, targetUrl) => {
    const requestUrl = request.url();

    // FIND TARGET URL REQUEST
    if (requestUrl === targetUrl) {
      const cookiesList = await page.cookies(requestUrl);
      const cookies = cookiesList.map(cookie => `${cookie.name}=${cookie.value}`).join('; ');
      const headers = Object.assign(request.headers(), { cookie: cookies });
      const options = {
        headers: headers,
        body: request.postData(),
        method: request.method(),
        follow: 20,
        agent
      };

      const result = await fetch(requestUrl, options);

      const buffer = await result.buffer();
      let cleanedHeaders = result.headers._headers || {};
      cleanedHeaders['content-security-policy'] = '';
      await request.respond({
        body: buffer,
        headers: cleanedHeaders,
        status: result.status
      });
    } else {
      request.continue();
    }
  };

  await page.setRequestInterception(true);
  page.on('request', req => {
    intercept(req, scenario.url);
  });
};
